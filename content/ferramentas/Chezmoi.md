---
title: Chezmoi
created: 2026-09-04
draft: false
tags:
  - linux
  - chezmoi
  - dotfiles
  - bash
  - tmux
  - zsh
  - nvim
description: Organizador de dotfiles
lang: pt-br
enableToc: true
aliases: []
updated: 2026-09-09
---

## O que é

> Disponível em [chezmoi.io](https://www.chezmoi.io/).

Meu primeiro organizador de #dotfiles, utilizando [[git]].
Utilizo pois preciso de ter minhas configurações constantes em todos os sistemas que constumo mexer, como #macOS e #GNU-Linux, utilizando o máximo de [[git]] e versionamento possível para poder testar ferraments novas.

## Porque parei de usar Atualmente #ADR 

Está armazenado [no repositório de dotfiles-legacy](https://github.com/rodolfolabiapari/dotfiles-legacy), mas hoje está em desuso.

A ferrata em si é bem poderosa e faz muitas coisas, mas eu meio que me enbolei nela.
Tentei, por meio dela, fazer todas as configurações de todos os meus dispositivos, e além disso começei a deixar que ela tomasse conta
também da instalações básicas dos serviços nos meus sistemas.

Até aí tudo bem. O problema foi os meus sistemas.
Tentei, por meio do [[Chezmoi]], fazer a configuração de TUDO, desde uma configuração de #ssh, [[git]], #apt, #dotfiles, até configuração específicas de hostname para cada sistema.
E como vocês podem ver, eu tenho uma [[Equipamentos e Dispositivos|lista]], nem tão grande, mas bastante heterogênea na qual eu queria cuidar também.

Também tentei utilizar #ansible no meu [[homelab]] ([disponíel aqui](https://github.com/rodolfolabiapari/homelab)) para tentar minimizar o uso do [[Chezmoi]], mas eu já tinha deixado ele inviável.

## O que utilizo agora

Primeiro migrei para o [[Omarchy]], e atualmente uso [[Stow Dotfiles|GNU Stow]] para gerenciar meus [dotfiles stow](https://github.com/rodolfolabiapari/dotfiles).

Com o [[Omarchy]] pude recomeçar tudo de novo, reorganizando meus arquivos e eliminando itens que achava que usava e de fato não usava.
Hoje, com esse projeto, estou utilizando o _default_ do [[Omarchy]] como base e preenchendo com minhas próprias configurações.