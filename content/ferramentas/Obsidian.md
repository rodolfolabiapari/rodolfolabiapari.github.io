---
title: Obsidian — Kanban, Plugins e Workflow
created: 2026-09-15
updated: 2026-09-15
draft: false
tags:
  - obsidian
  - kanban
  - produtividade
  - notas
description: Como uso o Obsidian no dia a dia - kanban, plugins essenciais e integração com Neovim
lang: pt-br
enableToc: true
aliases: []
---

Uso o Obsidian como meu segundo cérebro para notas, tarefas e rastreamento de projetos. A integração com o [[Guia de Estudos sobe Neovim|Neovim]] via `Obsidian.nvim` faz a ponte entre edição rápida no terminal e a navegação visual no Obsidian.
As configs do meu Obsidian estão dentro do [[Stow Dotfiles]].

## Kanban

Gerencio tarefas e ideias com listas no formato kanban. As colunas que uso:

- **TODO** - tarefas a fazer
- **Refining** - ideias que preciso detalhar antes de executar. Mas acho que pro meu sistema fica meio que overhead. Estou pensando em remover essa lista a qualqquer momento.
- **Doing** - o que estou fazendo agora
- **Impediment** - bloqueios que impedem progresso e a justificativa
- **Done** - concluído

O plugin [Kanban](https://github.com/mgmeyers/obsidian-kanban) transforma markdown em quadros kanban. Cada cartão é um item de lista que pode ter checkboxes, datas e tags.

## Plugins Essenciais

| Plugin                        | Função                                     |
| ----------------------------- | ------------------------------------------ |
| Kanban                        | Quadros kanban em markdown                 |
| Calendar                      | Calendário lateral para navegação por data |
| Templates                     | Inserção de templates ao criar notas       |
| Book Search, globalbooksearch |                                            |
| bookshelf                     |                                            |
| linter                        |                                            |
| omnisearch                    |                                            |

## Integração com [[vi, vim e nvim]]

Apesar de ter o aplicativo Obsidian no computador e no telefone, eu prefiro editar texto no [[vi, vim e nvim]]. O plugin `Obsidian.nvim` (abordado na [[Guia de Estudos sobe Neovim#Fase 4 - YAML, K8s, Markdown e Obsidian|Fase 4 do guia de Neovim]]) permite:

- `:Obsidian today` - abre ou cria a nota do dia
- `:Obsidian search` - busca no vault
- `:Obsidian tags` - navega por tags
- `:Obsidian link` - cria link para outra nota

Isso me dá o melhor dos dois mundos: edição poderosa no Neovim com a organização visual do Obsidian.

No meu nvim eu consigo habilitar renderização nativa dentro do [[kitty]] e fico por ali mesmo já que é possível alterar e navergar livremente somente pelo teclado.

## Biblioteca de Livros

Eu possuo um [[Leitura]] na qual catalogo todo os livros que tenho, faço algumas anotações nos que eu li.
Todos esse material também é guardado em notas dentro do meu Obsidian.

Por isso utilizo plugins como o #book-search, #globalbooksearch e o #bookshelf para organizar minha estante.
## Backup das Notas

Já tentei o uso do #syncthing para sincronizar minhas notas entre meus dispositivos mas não funcionou bem.

Hoje, a estratégia que funciona para mim é o uso de [[git]] como fonte da verdade. Uso um servidor interno privado do #Forgejo na qual salvo minhas notas aqui comigo no meu [[Homelab Project]], que ainda será detalhado melhor.
No meu telefone tenho scripts #bash que são executados dentro do aplicativo #termux. 

Ainda preciso encontrar uma forma de fazer notas mais rápidas no telefone, pois digitar tudo é um saco.