---
layout: post
date: 2022-02-26 12:07:54
title: memo
description: Como utilizar o higher order component memo
main-class: html
color: "#EB7728"
tags:
  - ReactJS
---
O higher order component memo é muito útil quando estamos trabalhando com componentes pesados e demoram  um certo tempo para ser renderizado, causando um problema de usabilidade.

> Precisar ser usado com cautela, por que é uma das funções do React que tem um "custo" para ser usado.

Imagine que nos temos um componente principal que possui vários state e vários componentes.

```javascript
import { useState } from 'react';

function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);
  const [state5, setState5] = useState(0);

  return (
    <div className="App">
      <Componente1 props={state1} functHandler={setState1}/>
      <Componente2 props={state2} functHandler={setState2}/>
      <Componente3 props={state3} functHandler={setState3}/>
      <Componente4 props={state4} functHandler={setState4}/>
      <Componente5 props={state5} functHandler={setState5}/>
    </div>
  );
}

export default App;
```

Toda vez que você alterar qualquer state, todos os outros componentes mesmos os que não sofreram alteração no seu state será renderizado novamente. E tudo bem! Sim, tudo bem! Se isso não estiver gerando nenhuma demora na apresentação dos seus componentes, tudo bem!

Agora, talvez existam momentos que tenhamos componentes muito pesados que gerem alguma demora na renderização e o state dele não esta sendo alterado, ai sim, é interessante o uso do memo, veja o exemplo.

No nosso arquivo principal App.js temos:

```javascript
import { useState } from 'react';
import SkillList from './components/SkillList';
import Counter from './components/Counter';

function App() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript']);
  const [count, setCount] = useState(0);

  function handleChangeInput(event) {
    setSkill(event.target.value);
  }

  function handleAddSkill() {
    setSkills(skills.concat(skill));
  }

  return (
    <div className="App">
      <input onChange={handleChangeInput} />
      <button onClick={handleAddSkill}>Add Skill</button>
      <SkillList skills={skills} />

      <hr />

      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
```

Em src crie uma pasta componentes, dentro da pasta components crie o arquivo SkillList.jsx.

```javascript
import { memo } from 'react';

const SkillList = memo(({ skills }) => {
  console.log('SkillList renderizou!');

  return (
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  );
});

export default SkillList;
```

Dentro da pasta components crie tambem o arquivo Counter.jsx.

```javascript
function Counter({ count, setCount }) {
  console.log('Counter renderizou!');

  return (
    <>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}

export default Counter;
```

Temos o resultado na imagem:

![memo Exemplo 1](/assets/img/memo-1.png "memo Exemplo 1")

Perceba no código, nosso componente SkillList esta utilizando memo, o componente Counter não.

Ao executar nossa aplicação pela primeira vez, os 2 são renderizados.

Agora clique no botão Incrementar alguma vezes e veja, o componente Counter é renderizado novamente toda vez que o contador é incrementado.

![memo Exemplo 2](/assets/img/usestate-2.png "memo Exemplo 2")

Percebeu que o componente SkillList não sofreu nova renderização? Pois é, esse é o uso do memo! O React verifica se as props que o componente recebe foram alteradas, se sim, renderiza novamente, se não, mantem o que está em memória. Lembra que falei sobre "custo"? 

> O React precisa verificar e fazer a comparação entre as props que estão em memória e as novas, esse processo de comparação é o custo.

Já o componente Counter sofrera nova renderização de qualquer forma, mesmo o state ou props que ele recebe não sejam alteradas.

![memo Exemplo 3](/assets/img/memo-3.png "memo Exemplo 3")

> Quando for necessário utilizar memo, faça testes, veja o que fica menos "pesado".

Para entender melhor o uso do memo retire-o do componente e faça um teste, clique no botão Incrementar.