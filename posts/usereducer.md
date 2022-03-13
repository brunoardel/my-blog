---
layout: post
date: 2022-03-13 03:40:48
title: useReducer
description: Como usar useReducer
main-class: html
color: "#EB7728"
tags:
  - ReactJS
---
O useReducer é um gancho que nos permite gerenciar lógicas de estado complexas. Se você já usou o Redux antes, o conceito de useReducer é bastante semelhante ao Redux. Um redutor basicamente uma instrução switch definindo todas as ações possíveis que um contexto pode executar e atualizando apenas a parte do estado global relacionada a essa ação. Em um redutor, você encapsula o estado e as funções que alteram esse estado em um só lugar.

Vamos fazer um exemplo muito simples para clarear melhor esse hook na sua cabeça.

No seu App.js faça:

```javascript
import { useReducer } from "react";
import { products } from "./products";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(myReducer, [products[0]]);

  const addHandler = (product) => {
    dispatch({ type: "ADD", payload: product });
  };

  const removeHandler = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const clearHandler = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="App">
      <h2 className="Header">useReducer - Shopping Cart</h2>

      <div className="CardsContainer">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            price={product.price}
            onClick={() => addHandler(product)}
          />
        ))}
      </div>

      <div className="CartHeader">
        <h3>Cart</h3>
        <button onClick={clearHandler}>Clear</button>
      </div>

      <div className="CartBody">
        {!state.length && (
          <p className="CartEmptyMessage">Your cart is empty</p>
        )}

        <ul>
          {state.map(({ id, name, price }, index) => (
            <li className="CartProduct" key={index}>
              <h4>
                {name} - ${price}{" "}
              </h4>
              <button onClick={() => removeHandler(id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

Dentro de App, você já deve ter identificado o useReducer e alguns funções que executam um tal de dispatch né? Beleza! Vamos lá.

Do useReducer nos extraímos o estado e a função que altera o estado, dentro dele temos o redutor e o valor inicial.

State, OK, acho que você sabe!

Dispatch é como setState, porem precisa receber um objeto contendo a função que você quer executar e o valor/objeto que essa função receberá.

Agora vamos construir o restante. No seu src crie o arquivo products.json contendo:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product 1",
      "price": 111
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 222
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 333
    }
  ]
}

```

No src crie a pasta components, depois Card, dentro crie o index.jsx com:

```javascript
export default function Card({ title, price, onClick }) {
  return (
    <div className="Card">
      <div className="CardHeader">
        <h4>{title}</h4>
        <h4>${price}</h4>
      </div>
      <button onClick={onClick}>Buy</button>
    </div>
  );
}

```

No App.css coloque:

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  margin: 0 32px;
  width: 600px;
}

.Header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.CardsContainer {
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
}

.Card {
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  box-shadow: 10px 10px 10px -10px black;
  padding: 16px;
  flex: auto;
}

.Card h4 {
  margin: 0 0 16px 0;
  padding: 0;
}

.CardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.CartHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  border-radius: 10px;
  height: 2rem;
  font-size: 1rem;
  box-shadow: 7px 7px 10px -10px black;
  font-weight: 700;
  border: none;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  cursor: pointer;
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

.CartBody ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.CartBody ul li {
  list-style: none;
  display: flex;
  align-items: center;
}

.CartEmptyMessage {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}

.CartProduct {
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  box-shadow: 10px 10px 10px -10px black;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
}

```

Agora vamos criar nosso redutor, em cima da função App, crie:

```javascript
const myReducer = (product, action) => {
  switch (action.type) {
    case "ADD":
      if (product.find((p) => p.id === action.payload.id)) {
        return product;
      }
      return [...product, action.payload];
    case "REMOVE":
      return product.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return product;
  }
};
```

É uma função que recebe um produto e uma ação, dentro temos um switch com 3 tipos de ação, adicionar, remover e limpar.

ADD verificar se o id existe no estado, e sim, não faça nada, se não, adiciona ao array do estado.

REMOVE filtra pelo id que é diferente daquele enviado e retorna.

CLEAR só retorna um array vazio, zera nosso estado!

Agora, ao executar você verá:

![useReducer Exemplo 1](/assets/img/usereducer-1.png "useReducer Exemplo 1")

Criamos uma página contendo 3 produtos para compra, o carrinho já inicia com um produto, lembra que nos passamos um valor iniciar para o hook useReducer? Joia!

Com certeza você entendeu o uso do useReducer, mesmo que seja de forma simples, é assim que começa!

Teremos exemplos um pouco mais complexos em um post futuro com uso de Context e criando Custom Hook (já esta no gatilho)!