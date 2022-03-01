---
layout: post
date: 2022-03-01 03:47:10
title: useLayoutEffect
description: Como usar o hook useLayoutEffect e suas diferenças useEffect
main-class: html
color: "#EB7728"
tags:
  - ReactJS
---
O hook useLayoutEffect tem 2 pequenas diferença com useEffect.

A primeira diferença é que useLayoutEffect é síncrono e useEffect é assíncrono.

A segunda diferença é o momento em que eles são executados, enquanto useEffect é executado após todos os componentes serem pintados na tela, useLayoutEffect é executado antes.

Estrutura: 

```javascript
useLayoutEffect(() => {
  // código a ser executado
}, [/* array de dependências*/])
```

Vamos fazer um exemplo bem simples, sem seu App.js coloque o código:

```javascript
import { useState, useEffect, useLayoutEffect } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect executado!");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect executado!");
  });

  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Update Count
        </button>
      </h2>
    </div>
  );
}

export default App;

```

No styles.css coloque:

```css
body {
  background: #2980b9;
  color: #fff;
}

h1 {
  font-size: 10rem;
}

.App {
  font-family: sans-serif;
  text-align: center;
}

```

Execute e veja no console. useLayoutEffect é executado primeiro, antes do useEffect, independente da ordem que você coloque ele no seu código.

Clique no botão Update Count e verá o console sendo apresentado novamente.

O hook useLayoutEffect tem pouco uso no dia a dia, alguns de seus usos seria modificações no DOM, alteração do título da página ou até mesmo iniciar algumas animações caso o uso do useEffect não parece fluida para esse fim.

> Não use useLayoutEffect para chamadas a API ou executar funções caras ou demoradas. Lembre-se que ele é síncrono e pode travar a pintura da sua aplicação, pois ela só será pintada após o fim da execução.