---
layout: post
date: 2021-03-30 09:50:41
image: https://flike.com.br/hotstok-network/site-flike/wp-content/uploads/2017/10/thumbnail-Seletores-CSS.png
title: Combinando Seletores
description: Usar mais de 1 seletor CSS
introduction: Usar mais de 1 seletor CSS
twitter_text: Usar mais de 1 seletor CSS
main-class: css
color: "#2DA0C3"
tags:
  - seletores css
categories:
  - CSS
---
## Combinador Descendente

Seleciona todos os elementos input que são filhos de um form

```css
form input {
  color: blue;
}
```



## Combinador Filho Direto / Descendente Direto

Seleciona o input somente se ele for um filho de form, não funciona para netos ou outros.

```css
form > input {
  color: blue;
}
```



## Combinador Irmão Adjacente

Seleciona o primeiro irmão encontrado de form, nesse caso somente a primeira div encontrada logo apos form será selecionada

```css
form + div {
  color: blue;
}
```



## Combinador Irmão Geral

Todos os irmão de form, ou seja, todas as divs que venham depois de form.

```css
form ~ div {
  color: blue;
}
```