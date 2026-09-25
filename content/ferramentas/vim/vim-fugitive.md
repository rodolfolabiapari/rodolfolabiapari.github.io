---
title: vim-fugitive - Comandos Úteis
created: 2026-09-15
updated: 2026-09-15
draft: false
tags:
  - vim
  - fugitive
  - git
  - neovim
description: Comandos essenciais do plugin vim-fugitive para Git dentro do Neovim
lang: pt-br
enableToc: true
aliases: []
---

O [vim-fugitive](https://github.com/tpope/vim-fugitive) é o plugin definitivo para Git dentro do Vim/Neovim. Ele expõe comandos Git como comandos Vim e usa o buffer atual como contexto.

> Veja também o [[git|Guia de Git]] e a [[vi, vim e nvim|referência do Neovim]].

## Comandos Básicos

| Comando             | Ação                                                   |
| ------------------- | ------------------------------------------------------ |
| `:G`                | Abre o sumário do git status                           |
| `:Git`              | Executa qualquer comando git (`:Git log`, `:Git diff`) |
| `:Gdiff`            | Diff do arquivo atual contra o index                   |
| `:Gwrite`           | `git add` - stage do buffer atual                      |
| `:Gcommit`          | Abre editor para mensagem de commit                    |
| `:Gpush` / `:Gpull` | Push e pull                                            |

## O Símbolo `%` no Fugitive

No vim-fugitive, o `%` significa **o arquivo do buffer atual**. É usado em comandos `:Git` para referenciar o arquivo sem digitar o nome inteiro.

```vim
" git add no arquivo atual
:Git add %

" git diff do arquivo atual
:Git diff %

" git log do arquivo atual
:Git log --oneline %
```

Isso é equivalente a `:Gwrite` (para stage) e `:Gdiff` (para diff), mas dá mais flexibilidade com outros argumentos.

## Navegação no Status

Ao abrir `:G`, o Fugitive mostra uma janela com arquivos modificados. Nela:

| Atalho      | Ação                                  |
| ----------- | ------------------------------------- |
| `-` (menos) | Stage/unstage o arquivo sob o cursor  |
| `cc`        | Fazer commit                          |
| `dv`        | Abrir diff vertical do arquivo        |
| `dd`        | Abrir diff horizontal                 |
| `?`         | Ajuda dos atalhos na janela de status |
| `q`         | Fechar janela de status               |

## Blame

`:G blame` abre uma janela anotada linha a linha:

- **Enter** - abre o diff do commit daquela linha
- **o** - abre o commit completo
- **q** - fecha blame

## Log

`:G log` mostra o histórico de commits do arquivo atual. Dá para navegar com `Enter` para ver o diff de cada commit.

## Relacionados

- [[git]] - comandos Git que uso no terminal
- [[vi, vim e nvim]] - referência geral do Neovim

## Veja também

- [[Guia de Estudos sobe Neovim]]
