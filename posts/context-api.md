---
layout: post
date: 2022-03-04 11:13:01
title: Context API
description: Como usar Context API
main-class: html
color: "#EB7728"
tags:
  - ReactJS
---
Antes de apresentar a solução que a Context API resolve, vou apresentar o problema.

Para que você entenda perfeitamente o problema, vamos criar alguns componentes, no seu arquivo App.js faça:

```javascript
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser("Bruno");
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      <main>
        <Header user={user} />
        <Card user={user} />
      </main>
    </div>
  );
}

export default App;

```

No src crie a pasta components, dentro de components crie a pasta Card, dentro de Card crie index.jsx com:

```javascript
import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import CardBody from "../CardBody";

export default function Card({ user }) {
  return (
    <div className="Card">
      <CardImage />
      <CardTitle user={user} />
      <CardBody />
      <button>Botão</button>
    </div>
  );
}

```

Dentro de components crie a pasta CardBody com o arquivo index.jsx, no arquivo coloque:

```javascript
function CardBody() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  );
}

export default CardBody;

```

Dentro de components crie a pasta CardImage com o arquivo index.jsx, no arquivo coloque:

```javascript
function CardImage() {
  return <div className="img" />;
}

export default CardImage;

```

Dentro de components crie a pasta CardTitle com o arquivo index.jsx, no arquivo coloque:

```javascript
function CardTitle({ user }) {
  return <h2>{user}</h2>;
}

export default CardTitle;

```

Dentro de components crie a pasta Header com o arquivo index.jsx, no arquivo coloque:

```javascript
function Header({ user }) {
  return (
    <div className="Header">
      <h1>Usuário: {user}</h1>
    </div>
  );
}

export default Header;

```

Dentro de components crie a pasta Navbar com o arquivo index.jsx, no arquivo coloque:

```javascript
function Navbar({ user }) {
  return (
    <ul className="horizontal">
      <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="news">News</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
      <li className="rightli floatright">
        <a href="user" className="active">
          Olá, {user}
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

```

Joia! Agora pra finalizar coloque esse CSS no arquivo index.css principal do projeto:

```css
body {
  margin: 0;
  padding: 0;
}

.App {
  margin: 0;
}

ul.horizontal {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(51 51 51);
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

ul.horizontal li {
  float: left;
}

ul.horizontal li a.active {
  background-color: rgb(4 170 109);
}

ul.horizontal li a {
  display: inline-block;
  color: rgb(255 255 255);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.floatright {
  float: right !important;
}

main {
  padding: 32px 64px;
}

.Card {
  padding: 5%;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  box-shadow: 10px 10px 10px -10px black;
  margin-top: 3rem;
  height: auto;
  width: 260px;
}

.Card button {
  width: 100%;
  border-radius: 10px;
  height: 2rem;
  font-size: 1rem;
  box-shadow: 7px 7px 10px -10px black;
  font-weight: 700;
  border: none;
}

.Card .img {
  width: 100%;
  height: 150px;
  opacity: 0.9;
  background: url("https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e1f8bd1dc3c511ea5a28a56_icon-rect-tech.png");
  background-size: cover;
}

```

Legal! Feito tudo isso, agora execute e vamos ver o resultado:

![Context API Exemplo 1](/assets/img/7eewyq.csb.app_-hd-.png "Context API Exemplo 1")

Preste atenção em uma coisa, no App.js estou fazendo um setUser dentro do useEffect pra imitar uma chama a API, o nome Bruno que esta no state esta sendo apresentado em 3 componentes diferentes, na NavBar, no Header e no Card, o que é muito normal, as vezes temos o mesmo dado sendo apresentado em diversos componentes. 

O problema esta em como passar esses dados de um lado para o outro, passando props pra lá e pra cá, passando props até para componentes que não vão precisar desse dado somente para passar para outro componente filho,  esse problema se chama **Prop Drilling**, veja o exemplo como estamos passando a prop para o component Card somente repassar para o filho CardTitle:

```javascript
<div className="App">
    <Navbar user={user} />
    <main>
        <Header user={user} />
        <Card user={user} />
    </main>
</div>
```

```javascript
import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import CardBody from "../CardBody";

export default function Card({ user }) {
  return (
    <div className="Card">
      <CardImage />
      <CardTitle user={user} />
      <CardBody />
      <button>Botão</button>
    </div>
  );
}


```

```javascript
function CardTitle({ user }) {
  return <h2>{user}</h2>;
}

export default CardTitle;

```

Não seria mais fácil se tivéssemos esse dado em algum outro lugar e importar somente no componente que precisa desse dado? Sim! Pois é, esse é o problema que Context API pode te ajudar a resolver! Vamos começar a implementação.

No src crie uma pasta context, dentro crie o arquivo user.js com o código:

```javascript
import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState("Bruno");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

```

Vou explicar as coisas referentes a Context API, o restante provavelmente você já sabe. Estamos importando createContext que nos ajuda na criação do context, criando uma const UserContext que recebe a função createContext do React, criando o UserProvider que é o nosso provedor das informações referentes a usuário, criando o state que armazena as informações, no return temos a declaração do provedor, value são as informações que queremos que o provedor disponibilize e children são as páginas do nosso projeto.

Legal, agora precisamos importar nosso provedor lá no index.js principal:

```javascript
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./context/user";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
  rootElement
);

```

Como o componente App agora é filho do nosso UserProvider, toda essa página ou componente juntamente com seus filhos tem acesso as informações disponibilizadas por esse provedor.

Agora já podemos dar uma limpada no nosso App.js e parar de passar as props:

```javascript
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Header />
        <Card />
      </main>
    </div>
  );
}

export default App;

```

Joia, agora já podemos usar nosso context pegando dados dele, vamos começar lá pela nossa Navbar, vai ficar dessa forma:

```javascript
import { useContext } from "react";
import { UserContext } from "../../context/user";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <ul className="horizontal">
      <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="news">News</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
      <li className="rightli floatright">
        <a href="user" className="active">
          Olá, {user}
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

```

Viu? O nome voltou a ser apresentado na Navbar!

Aqui nos estamos importante a função useContext do React que é a função que nos auxilia no uso de contextos. Importanto nosso UserContext. Extraindo o state user de dentro do context UserContext.

Agora não estamos criando state no App e repassando para vários componentes criando Prop Drilling, o código fica mais limpo e podemos pegar informações do context somente nos componentes que precisarmos.

Vou deixar 2 desafios para você:

1. Utilize o state user do context nos outros componentes que precisam dessa informação.
2. Percebeu que em nosso UserContext também estamos disponibilizando a função setUser? Crie um useEffect no componente que quiser, use a função setUser para trocar o nome do usuário depois de 2 segundos. Dica: use a função setTimeOut.