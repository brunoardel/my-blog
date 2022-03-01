---
layout: post
date: 2022-02-28 07:57:15
title: useMemo
description: Como usar o hook useMemo e suas diferenças entre memo e useCallback
main-class: html
color: "#EB7728"
tags:
  - ReactJS
---
O hook useMemo é usado para agrupar funções dentro de um componente. Podemos utiliza-lo para garantir que valores dentro dessas funções só sejam recalculados se uma de suas props mudar, props essas que ficam no array de dependências.

Aquele disclaimer básico:

> É um hook que tem um "custo" para ser usado.

Vou usar um exemplo um pouco mais complexo que os anteriores, mas bem legal para entender o uso do useMemo e suas diferenças com memo.

## Exemplo

Utilizei um exemplo que cria uma aplicação em que você seleciona um tipo de queijo e ela mostra qual tipo de vinho combina mais. 

Para este exemplo estou utilizando tailwindcss na versão 2.0.2. Leia mais em: <https://v2.tailwindcss.com/docs>

Crie um componente principal, pode ser em seu App.js com o código:

```javascript
import { useState, useEffect, useRef, useMemo } from 'react';
import constants from '../utils';
import Counts from './counts';
import Button from './button';
import MemoizedCounts from './react-memo-counts';
import UseMemoCounts from './use-memo-counts';
const { MOZARELLA, CHEDDAR, PARMESAN, CABERNET, CHARDONAY, MERLOT } = constants;

export default function ParentComponent({
  title,
  withoutMemo = false,
  withReactMemo = false,
  withUseMemo = false,
}) {
  const [cheeseType, setCheeseType] = useState('');
  const [wine, setWine] = useState('');
  const [times, setTimes] = useState(0);
  const useMemoRef = useRef(0);

  const incrementUseMemoRef = () => useMemoRef.current++;

  // const memoizedValue = useMemoRef.current++;
  const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);

  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case MOZARELLA:
        return setWine(CABERNET);
      case CHEDDAR:
        return setWine(CHARDONAY);
      case PARMESAN:
        return setWine(MERLOT);
      default:
        CHARDONAY;
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      whichWineGoesBest();
    }

    return () => (mounted = false);
  }, [cheeseType]);

  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-md mt-5 dark:border-yellow-200 max-w-lg m-auto pb-10 bg-gray-900">
      <h3 className="text-center mt-10 text-gray-400 text-opacity-100">
        {title}
      </h3>
      <h1 className="font-semibold text-2xl text-white max-w-md text-center">
        Selecione um queijo e diremos qual vinho combina melhor!
      </h1>
      <div className="flex flex-col gap-4 mt-10">
        <Button text={MOZARELLA} onClick={() => setCheeseType(MOZARELLA)} />
        <Button text={CHEDDAR} onClick={() => setCheeseType(CHEDDAR)} />
        <Button text={PARMESAN} onClick={() => setCheeseType(PARMESAN)} />
      </div>
      {cheeseType && (
        <p className="mt-5 text-green-400 font-semibold">
          Para {cheeseType}, <span className="text-yellow-500">{wine}</span> é a
          melhor escolha!
        </p>
      )}

      {/* Without React Memo */}
      {withoutMemo && <Counts />}

      {/* With React.memo() */}
      {withReactMemo && <MemoizedCounts />}

      {/* With useMemo() */}
      {withUseMemo && (
        <div className="mt-10 text-center">
          <button
            className="bg-indigo-200 hover:bg-indigo-300 py-2 px-10 rounded-md"
            onClick={() => setTimes(times + 1)}
          >
            Forçar renderização
          </button>
          <UseMemoCounts memoizedValue={memoizedValue} />
        </div>
      )}
    </div>
  );
}
```

Depois crie uma pasta com nome utils e dentro crie um index.js com o código:

```javascript
export default {
  MOZARELLA: 'Mozarella',
  CHEDDAR: 'Cheddar',
  PARMESAN: 'Parmesão',
  CHARDONAY: 'Chardonay',
  MERLOT: 'Merlot',
  CABERNET: 'Cabernet Sauvignon',
};
```

Depois, na mesma pasta que seu App, crie o counts.js com o código:

```javascript
import { useRef } from 'react';

export default function Counts() {
  const renderCount = useRef(0);

  return (
    <div className="mt-10">
      <p className="text-white">
        Nada mudou aqui, mas eu renderizei:{' '}
        <span className="text-green-300 text-grey-900">
          {renderCount.current++} vezes
        </span>
      </p>
    </div>
  );
}
```

Agora vamos criar o button.js: 

```javascript
export default function Button({ onClick, text }) {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
```

Agora crie um novo componente, react-memo-counts.js:

```javascript
import { useRef, memo } from 'react';

function Counts() {
  const renderCount = useRef(0);

  return (
    <div className="mt-10">
      <p className="text-white">
        Nada mudou aqui, mas eu renderizei:{' '}
        <span className="text-green-300 text-grey-900">
          {renderCount.current++} vezes
        </span>
      </p>
    </div>
  );
}

export default memo(Counts);
```

Agora o último componente, use-memo-counts.js:

```javascript
function UseMemoCounts({ memoizedValue }) {
  return (
    <div className="mt-3">
      <div className="max-w-md mb-5">
        <p className="text-white">
          Só vou renderizar novamente quando você clicar em{' '}
        </p>
        <span className="font-bold text-indigo-400">Forçar renderização.</span>
      </div>
      <p className="text-white">
        Eu renderizei:{' '}
        <span className="text-green-400">{memoizedValue} vezes</span>{' '}
      </p>
    </div>
  );
}

export default UseMemoCounts;
```

Tudo criado, vamos a execução! 

Se você criou este exemplo com React puro, execute `npm start`

Se você usou NextJS, execute `npm run dev`

Temos agora nossa página mostrando 3 cards.

![useMemo Exemplo Card 1](/assets/img/usememo-1.png "useMemo Exemplo Card 1")

![useMemo Exemplo Card 2](/assets/img/usememo-2.png "useMemo Exemplo Card 2")

![useMemo Exemplo Card 3](/assets/img/usememo-3.png "useMemo Exemplo Card 3")

No primeiro card **Sem memo() ou useMemo()**, temos tudo sendo renderizado novamente a cada click.

No segundo card **Com memo()**, temos o uso do memo, embrulhando todo o componente.

No terceiro card **Com useMemo()**, temos o uso do useMemo na prop **memoizedValue**.

Muito bem, feito isso, isso é um exemplo, componentes e funções simples como essas não necessitam deste tipo de otimização. Lembra do custo?

> O uso de memo ou useMemo tem um custo, esse custo é a comparação entre o componente atual e o novo ou, props atuais e novas.

## Diferenças entre memo, useMemo e useCallback

É muito fácil ficar confuso com isso, eu mesmo fiquei e demorei um certo tempo para entender o uso de cada um deles.

* **memo**: É um componente de ordem superior que podemos usar para agrupar componentes que não queremos renderizar novamente, a menos que as props dentro deles mudem.
* **useMemo**: É um React Hook que podemos usar para agrupar funções dentro de um componente. Podemos usar isso para garantir que os valores dentro dessa função sejam recalculados somente quando uma de suas dependências for alterada. É executada na primeira renderização.
* **useCallback**: Mantem a referência de uma função. Usamos quando tempos funções pesadas sendo recriadas em memória desnecessariamente. Interessante ser utilizado em todas as funções internas de um Context API. Não é executado na renderização, somente em callback, tipo onClick ou useEffect.

Usei como referencia a publicação: <https://blog.logrocket.com/react-memo-vs-usememo/>