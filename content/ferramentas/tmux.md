---
title: tmux
created: 2026-09-04
draft: false
tags:
  - tmux
  - terminal
  - multiplexer
description: Terminal multiplexer — sessões, janelas e painéis
lang: pt-br
enableToc: true
aliases: []
---

## O que é

#tmux é um terminal multiplexer. Permite gerenciar múltiplas sessões, janelas e
painéis dentro de um único terminal, persistindo processos mesmo após desconexão.

## Conceitos

- **session**: agrupamento de janelas, sobrevive a desconexão
- **window**: equivalente a uma aba do terminal
- **pane**: subdivisão de uma janela

## Atalhos essenciais

Prefix padrão: `Ctrl+<space>`.

| Atalho    | Ação                      |
| --------- | ------------------------- |
| `%`       | split vertical            |
| `"`       | split horizontal          |
| `c`       | nova janela               |
| `n` / `p` | próxima / anterior janela |
| `,`       | renomear janela           |
| `&`       | fechar janela             |
| `d`       | detach da sessão          |
| `$`       | renomear sessão           |
| `[`       | modo scroll/copy          |

## Gerenciando sessões

```bash
tmux new -s nome         # nova sessão com nome
tmux attach -t nome      # reanexar a uma sessão
tmux ls                  # listar sessões ativas
tmux kill-session -t nome # encerrar sessão
```

## Dicas

- Mapeei `Caps Lock` para `Ctrl` para facilitar o prefixo
- Uso `set -g mouse on` para navegação com mouse
- Mapeio `prefix |` para split horizontal (espelha o `prefix -` do padrão)
