---
layout: post
date: 2021-03-30 03:19:48
image: https://cs.wellesley.edu/~cs110/reading/css-selectors-files/css_rule.png
title: Seletores
description: Universal, Elemento, Classe, ID, Atributo, Pseudo elemento
introduction: Alguns seletores CSS
twitter_text: Alguns seletores CSS
main-class: css
color: "#2DA0C3"
tags:
  - css seletores
categories:
  - CSS
---
Vira e mexe eu ainda tenho que buscar nas minhas anotações de blocos de nota sobre alguma coisas de CSS.

Então, hoje começa a brincadeira de escrever posts. Sem mais, bora lá!



## Seletor Universal

Meio obvio né, nem precisa de muita explicação, esse cara seleciona tudo.

```css
* {
  background: black;
}
```



## `Seletor de Elemento`

Seleciona elementos HTML, body, input, h1, a, p e etc..

```css
body {
  background: black;
}
```



## Seletor de Classe

Vc quer explicação? Sério mesmo?!

```css
.fundo-preto {
  background: black;
}
```



## Seletor por ID

Seleciona o ID que vc colocar no elemento.

```css
#nome {
  background: black;
}
```



## Seletor por Atributo

É possível selecionar por atributo, veja alguns exemplos:

```css
[type="text"] {
  background: black;
}

a[href="http://site.com"] {
  color: green;
}

input[type="radio"]:checked {
 border: 1px solid red;
}
```



## Seletor de Pseudos

Seleciona as pseudo classes dos elementos.

```css
a:hover {
  color: red;
}

a:visited {
  color: green;
}

input:checked {
  border: 1px solid blue;
}
```



Vou adicionando mais coisas aos poucos.