---
layout: post
date: 2022-02-23 11:00:10
title: useRef
description: Casos de uso para useRef
main-class: html
color: "#EB7728"
tags:
  - ReactJS
categories: []
---
Comecei com a saga de passar por todos os Hooks do React, por que sempre no meio do trabalho me deparo com situações que penso: -Pera... Não tem um Hook que faz mais ou menos isso?

Pois é! Agora revolvi pegar um tempo, estudar todos, tê-los em mente e usar quando necessário.

Vou começar com useRef, e citar alguns "bons" exemplos.

useRef é usado para manter a referência de um objeto e podendo usar as propriedades que essa referência mantem. Veja o exemplo:

![useRef Exemplo 1](/assets/img/useref-1.png "useRef Exemplo 1")

Temos um componente simples com um input e um botão.

Como faríamos para, ao clicar no botão dar foco no input? Usando useRef.

```javascript
import { useRef } from 'react';

function App() {
  const inputRef = useRef();

  const handleClick = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Foco</button>
    </>
  );
}

export default App;
```



Outro exemplo é para substituir um state.

Já parou para pensar que componentes como input não necessitam de um estado para armazenar seu valor?

Já parou para pensar que se tivermos um formulário complexo, cada componente ligado a seu state, a cada vez que você digita algo seu state recebe um novo valor e tudo dentro daquele formulário é renderizado novamente e desnecessariamente? Pois é... Veja neste exemplo como evitar isso.

```javascript
import { useState, useRef } from 'react';

function App() {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleClick = () => setValue(inputRef.current.value);

  console.log('renderizou!');

  return (
    <>
      <h4>Valor: {value}</h4>
      <input ref={inputRef} />
      <button onClick={handleClick}>Clique</button>
    </>
  );
}

export default App;

```

![useRef Exemplo 2](/assets/img/useref-2.png "useRef Exemplo 2")

Temos um componente simples com um texto "Valor", um input e um botão. Ao digitar algo no input nenhuma nova renderização é feita pois o input não está direcionando seu value para um state, e ao clicar no botão o state do componente "Valor" recebe o value do input que estava armazenado em inputRef. Aí claro, uma nova renderização é realizada pois alteramos um estado, o do "Valor", mas não precisamos de estado para o input.

![useRef Exemplo 2 finalizado](/assets/img/useref-3.png "useRef Exemplo 2 finalizado")