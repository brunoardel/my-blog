---
layout: post
date: 2022-03-01 08:28:40
title: useDebugValue
description: Como usar o hook useDebugValue
main-class: html
color: "#EB7728"
tags:
  - ReactJS
---
O hook useDebugValue tem um uso muito simples, é usado para exibir um label ao lado do nome de um hook personalizado no React DevTools.

Exemplo. Em seu App.js faça:

```javascript
import useTeste from "./hooks/useTeste";
import "./styles.css";

export default function App() {
  const [state, toggleState] = useTeste();

  return (
    <div className="App">
      <h1>isTeste: {state.toString()} </h1>
      <button onClick={toggleState}>Toggle state!</button>
    </div>
  );
}

```

Depois crie uma pasta hooks e dentro dela crie o arquivo useTeste.js:

```javascript
import { useState, useDebugValue } from "react";

function useTeste() {
  const [state, setState] = useState(false);

  const toggleState = () => setState((v) => !v);

  return [state, toggleState];
}

export default useTeste;
```

Ótimo, agora você tem um hook personalizado. Ao executar você verá:

![useDebugValue Exemplo 1](/assets/img/usedebugvalue-1.png "useDebugValue Exemplo 1")

Se você estiver com a extensão React DevTools instalada no seu navegador clique em App e veja ao lado:

![useDebugValue Exemplo 2](/assets/img/usedebugvalue-2.png "useDebugValue Exemplo 2")

Muito bem, ai esta o nome do nosso hook personalizado, seu state e o valor na qual o state foi iniciado.

Agora vamos inserir o useDebugValue. No hook inseria `useDebugValue("Label do useTeste");` antes do return. Ficará assim:

```javascript
import { useState, useDebugValue } from "react";

function useTeste() {
  const [state, setState] = useState(false);

  const toggleState = () => setState((v) => !v);

  useDebugValue("Label do useTeste");

  return [state, toggleState];
}

export default useTeste;

```

Ao ir novamente no React DevTools, clicando em App, verá:

![useDebugValue Exemplo 3](/assets/img/usedebugvalue-3.png "useDebugValue Exemplo 3")

É isso! useDebugValue é isso!

Agora, da pra fazer um pouco mais, por exemplo, ele aceita uma segunda função para formatação desse label, dito isso, fica interessante fazer o seguinte:

```javascript
import { useState, useDebugValue } from "react";

function useTeste() {
  const [state, setState] = useState(false);

  const toggleState = () => setState((v) => !v);

  const date = new Date();

  useDebugValue(date, (date) => date.toLocaleString("pt-br"));

  return [state, toggleState];
}

export default useTeste;
```

Você verá:

![useDebugValue Exemplo 4](/assets/img/usedebugvalue-4.png "useDebugValue Exemplo 4")