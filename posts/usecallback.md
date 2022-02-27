---
layout: post
date: 2022-02-26 04:03:53
title: useCallback
description: Como usar o hook useCallback
main-class: html
color: "#EB7728"
tags:
  - ReactJS
---
O hook useCallback é um pouco complexo de explicar, vou tentar simplificar ao máximo para ser didático. 

Imagine um componente que possui uma função em seu interior e uma nova renderização é realizada, essa função é recriada em memoria.

Funciona de maneira semelhando ao memo, por isso fica aqui um disclaimer semelhante.

> Precisa ser usado com cautela, por que é um hook do React que tem um "custo" para ser usado.

Ele é mais comumente usado para **memorizar funções**.

Quando colocamos alguma uma função dentro de um useCallback o React entendera que não é para recriar esta função e que vamos utilizar a mesma criada anteriormente.

O Javascript compara as coisas *de uma forma estranha*... Mas é muito importante entender como essa comparação (*muito estranha*) acontece. Veja o exemplo abaixo:

```javascript
1 === 1; // true;
"ReactJS" === "ReactJS"; // true;
false === false; // true;

{} === {}; // false;
[] === []; // false;
() => {} === () => {}; //false;
```

Nas linhas 5, 6 e 7 todos os exemplos estão retornando false, porque? Por que o Javascript não compara objeto com objeto, array com array, ele compara as referencias de memória. Na linha 5 o segundo objeto não tem a mesma referencia de memória que o primeiro objeto.

Vamos a estrutura. O Hook useCallback recebe como argumentos, uma função de callback e um array de dependências.

```javascript
const minhaFuncao = useCallback(() => {
  // corpo da função
}, [])
```

Vamos ao código de exemplo:

```javascript
import { useState, useCallback } from 'react';

const functionsAPP = new Set();

function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCounterOne = () => {
    setCountOne(countOne + 1);
  };
  
  const decrementCounterOne = () => {
    setCountOne(countOne - 1);
  };

  const incrementCounterTwo = () => {
    setCountTwo(countTwo + 1);
  };
  
  const decrementCounterTwo = () => {
    setCountTwo(countTwo - 1);
  };

  functionsAPP.add(incrementCounterOne);
  functionsAPP.add(decrementCounterOne);
  functionsAPP.add(incrementCounterTwo);
  functionsAPP.add(decrementCounterTwo);

  alert(`Funções do App: ${functionsAPP.size}`);

  return (
    <>
      Counter One: {countOne}
      <button onClick={incrementCounterOne}>+</button>
      <button onClick={decrementCounterOne}>-</button>
      <hr />
      Counter Two: {countTwo}
      <button onClick={incrementCounterTwo}>+</button>
      <button onClick={decrementCounterTwo}>-</button>
    </>
  );
}

export default App;

```

Neste exemplo estou utilizando new Set() que nos permite adicionar somente elementos únicos. Leia mais em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set>

Estou criando 2 contadores, cada um usando suas funções de incremento e decremento.

Ao executar esse código você receberá 2 alerts.

![useCallback exemplo 1](/assets/img/usecallback-1.png "useCallback exemplo 1")

![useCallback exemplo 2](/assets/img/usecallback-2.png "useCallback exemplo 2")

Ou seja, temos 8 funções criadas nesta primeira execução.

Agora clique 1x em cada um dos botões de incrementar dos componentes e veja a quantidade de funções criadas. São um total de 24.

No nosso dia a dia de trabalho isso não chega a ser um problema por que as funções são leves, mas em determinado momento teremos funções complexas, pesadas, que processam suas props recebidas e podem levar algum tempo para processar atrasando as renderizações e a apresentação da nossa UI.

Agora vamos adicionar o hook useCallback em nossas funções.

```javascript
import { useState, useCallback } from 'react';

const functionsAPP = new Set();

function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCounterOne = useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);

  const decrementCounterOne = useCallback(() => {
    setCountOne(countOne - 1);
  }, [countOne]);

  const incrementCounterTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  const decrementCounterTwo = useCallback(() => {
    setCountTwo(countTwo - 1);
  }, [countTwo]);

  functionsAPP.add(incrementCounterOne);
  functionsAPP.add(decrementCounterOne);
  functionsAPP.add(incrementCounterTwo);
  functionsAPP.add(decrementCounterTwo);

  alert(`Funções do App: ${functionsAPP.size}`);

  return (
    <>
      Counter One: {countOne}
      <button onClick={incrementCounterOne}>+</button>
      <button onClick={decrementCounterOne}>-</button>
      <hr />
      Counter Two: {countTwo}
      <button onClick={incrementCounterTwo}>+</button>
      <button onClick={decrementCounterTwo}>-</button>
    </>
  );
}

export default App;

```

Na primeira renderização temos o segundo alert mostrando 8 funções criadas, clicando 1x em cada botão incrementar temos o segundo alert mostrando 16, o que já é um avanço.

Por fim, lembra do "custo"? Pois é, useCallback tem um custo para ser usado, esse custo é comparação das props atuais com as novas.

> Quando for necessário utilizar useCallback, faça testes, veja o que fica menos "pesado".