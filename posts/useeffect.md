---
layout: post
date: 2022-02-25 12:24:03
title: useEffect
description: Por que e como usar useEffect
main-class: html
color: "#EB7728"
tags:
  - ReactJS
categories: []
---
Esse hook é o segundo hook mais usado do React e é importante que você saiba como e por que utiliza-lo.

É mais comumente usado para realizar chamadas a API ou também gerando efeitos colaterais de alteração de state. Escrevendo parece complicado né? Mas calma, é realmente simples. A estrutura dele é essa:

```javascript
useEffect(() => {
    
}, []);
```

A declaração do useEffect, ele recebe uma função e possui um array de dependências. 

Vamos ao exemplo:

```

```

![useState Exemplo 1](/assets/img/usestate-1.png "useState Exemplo 1")

```javascript
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('Valor inicial');

  console.log('renderizou!');

  return (
    <div className="App">
      <h4>{value}</h4>
      <button onClick={() => setValue('Novo valor')}>Alterar</button>
    </div>
  );
}

export default App;
```

Se você for iniciante, primeiramente, mantenha a calma, vou te explicar linha por linha!

Linha 1: Estamos importando o hook useState do React.

Linha 3: Declaramos nossa função principal.

Linha 4: O useState nos fornece 2 posições de 1 array, sendo eles, a primeira posição é nosso state que armazena um valor, segunda posição é a função que altera esse valor. Caso você queira iniciar esse state com um valor, podemos passar para o hook assim: useState('Valor inicial').

Linha 6: Coloquei no exemplo pra você perceber sempre que houver uma renderização.

Linha 8: Estamos retornando um JSX

Linha 10: Aqui estamos mostrando nosso state value.

Linha 11: Estamos inserindo um botão com a função que vai alterar nosso state. A função onClick esta executando uma função anônima que vai executar setValue. Essa função anônima é usado por que se colocarmos nosso setValue direto no onClick ela será executada assim que nosso app renderizar, e não é o que nos queremos, queremos que setValue seja executado somente no click do botão. 

![useState Exemplo 2](/assets/img/usestate-2.png "useState Exemplo 2")

Percebeu que ao clicar no botão o valor foi alterado e nosso app renderizou novamente? Pois é. Agora vou aprendeu como utilizar useState!