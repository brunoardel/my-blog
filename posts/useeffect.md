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

É mais comumente usado para realizar chamadas a API. 

Ele é sempre executado depois que todo o JSX do nosso componente é renderizado, sendo assim, a montagem do nosso código na tela fica mais rápida já que estamos separando ele em 2 partes, a primeira é a montagem de todo o componente e a segunda é a chamada a API.

A estrutura dele é essa:

```javascript
useEffect(() => {
    
}, []);
```

A declaração do useEffect, ele recebe uma função e possui um array de dependências. 

Vamos ao exemplo:

```javascript
import { useState, useEffect } from 'react';

function App() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    fetch('https://digimon-api.herokuapp.com/api/digimon')
      .then((response) => response.json())
      .then((data) => setDigimons(data));
  }, []);

  return (
    <div className="App">
      <h4>Digimons</h4>

      <ul>
        {digimons.map((digimon) => (
          <li key={digimon.name}>
            <img src={digimon.img} alt={digimon.name} />
            {digimon.name} - {digimon.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

![useEffect Exemplo 1](/assets/img/useeffect-1.png "useEffect Exemplo 1")

Estamos utilizando a Digimon API (leia mais em: <https://digimon-api.vercel.app/>). Sempre utilizo ela como exemplo pela simplicidade.

Veja que dentro do useEffect estamos fazendo uma chamada a api, convertendo o retorno e jogando para o state.

E dentro do retorno da nossa função principal APP estou criando uma limpa, percorrendo o array que esta no state digimons e criando um list item para cada objeto do array.