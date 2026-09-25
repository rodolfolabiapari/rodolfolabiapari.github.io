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

Todas minhas notas diárias são configuras utilizando [[iso-8601]].

> Futuramente quero escrever um #ensaio sobre [[obsidian-ontologia]].

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

Por isso utilizo plugins como o #book-search, #globalbooksearch e o #bookShelfPlugin para organizar minha estante.

Inclusive, antigamente eu utilizava o #skoob (link disponível em [[Encontre-me]]) para registrar diariamente todas as páginas lidas.
Mas com o #bookShelfPlugin eu agora faço todas as minhas anotações localmente, no qual consigo anotar quantas páginas lidas dentro do [[Leitura|Livros que já li]]. Impossível ser melhor que isso.

## Backup das Notas

Já tentei o uso do #syncthing para sincronizar minhas notas entre meus dispositivos mas não funcionou bem.

Hoje, a estratégia que funciona para mim é o uso de [[git]] como fonte da verdade. Uso um servidor interno privado do #Forgejo na qual salvo minhas notas aqui comigo no meu [[Homelab Project]], que ainda será detalhado melhor.
No meu telefone tenho scripts #bash que são executados dentro do aplicativo #termux.

Ainda preciso encontrar uma forma de fazer notas mais rápidas no telefone, pois digitar tudo é um saco.

## Integração com [[Inteligência Artificial]]

Eu consegui chegar em um meio termo em utilizar [[Inteligência Artificial]] e notas no meu vault.

Utilizo a mesma estratégia que o Kepano demonstra no seu [How I use Obsidian](https://stephango.com/vault) e minha ideia é utilizar também conceitos de #SecondBrain, #AIDatabase e #WikiLLM , mantendo minhas notas sempre originais e fazendo inferências novas e mostrando novas organizações.
Este processo está em teste ainda.

Aqui está um pedaço das instruções deu uso para a IA:

```markdown
# Regras

## Privacidade

A pasta `Personal/` e `Journal/` contém notas pessoais (família, diário, saúde, finanças, diários).

- Nunca leia, liste, busque ou edite nada dentro de `Personal/` e `Journal/`.
- Nunca rode comandos (grep, find, cat, rg) que alcancem `Personal/` e `Journal/`.
- Se uma tarefa parecer exigir acesso a `Personal/` e `Journal/`, pare e pergunte.

## Estrutura e fronteira da IA

O vault segue o modelo Kepano, organizado por pastas de alto nível (não por assunto):

- `Personal/` — notas pessoais (privado; a IA não toca).
- `Journal/` — notas temporais: daily, weekly, monthly, quarterly, yearly (privado; a IA não toca). Daily em `Journal/Daily/YYYY/MM/YYYY-MM-DD-ddd`.
- `References/` — objetos do mundo: livros, ferramentas, apps, conceitos, lugares, pessoas públicas, mídia, ficção (a IA pode ler/editar). Destino padrão de novas notas criadas pelo app/editor.
- `Clippings/` — textos de outros autores (a IA pode ler/editar).
- `System/` — templates, bases, categorias, anexos (a IA pode ler/editar).

Teste de classificação ("delete test"): se ao apagar a nota o objeto continua existindo no mundo (livro, ferramenta, conceito, cidade, pessoa pública), ela vai para `References/`. Se é sua vida/opinião/sentimento (diário, saúde, finanças), vai para `Personal/`.

A fronteira privado/público é a **pasta**, não um flag no frontmatter.

## Alterando e escrevendo notas

Não utilize emoji ou caracteres diferentes sem consulta.

## Notas temporais (Journal)

Formatos de nome (o `ddd` é o dia da semana abreviado, ex.: `Wed`):

| Período | Nome             | Exemplo          | Pasta                    |
| ------- | ---------------- | ---------------- | ------------------------ |
| daily   | `YYYY-MM-DD-ddd` | `2026-09-23-Wed` | `Journal/Daily/YYYY/MM/` |

Cada nota carrega wikilinks para seus períodos (`daily`, `weekly`, `monthly`, `quarterly`, `yearly`). As notas de período compilam as notas do intervalo.

## Vocabulário e estilo (guia)

Notas novas devem seguir este vocabulário fechado. Menos decisões na hora = menos bagunça.

- **`categories`** — só as categorias finais (o "balde"): `Books`, `Music`, `Movies`, `Shows`, `Podcasts`, `Games`, `People`, `Places`, `Companies`, `Concepts`, `Tools`, `Products`, `Events`, `Cloud`, `Kubernetes`, `IA`, `Computing`, `Quotes`, `Recipes`, `Clippings`, `Projects`. Nunca coloque título de livro, nome de personagem ou tópico em `categories`.
- **`type`** — o que a nota é: `album`/`band`/`song`, `podcast`/`episode`, `video`/`board-game`, `concept`/`tool`/`runbook`/`snippet`/`certification`/`tutorial`, `moc`.
- **`providers`** — só para Cloud: `AWS`, `Google Cloud`, `Azure`.
- **`subjects`** — só para Cloud: `Networking`, `Compute`, `Storage`, `Security`, `Databases`, `Analytics`, `AI-ML`.
- **`source`** — de onde veio (livro, autor, link).
- **`topics`** — rótulos livres (`stormlight`, `cosmere`, `cka`, `sre`, `linux`, `mar`…).
- **`rating`** — inteiro 1–7. **`status`** — estado (unread/reading/read, studying…).
- **`date`** — data de referência (propriedade Date nativa, `YYYY-MM-DD`). **`created`** — instante de criação (Date & time nativa); substituiu o antigo `hour`.
- **`daily`/`weekly`/`monthly`/`quarterly`/`yearly`** — wikilinks para as notas de período. `year` continua numérico (ano de lançamento), por isso o link anual é `yearly`.
- **Links** — use wikilinks no corpo; não use `categories` como campo de links.

**MOC / índice temático** (ex.: "Mar e Praia", "Circuitos Eletrônicos"): é uma nota com `type: moc`, cujo conteúdo são links curados de um tema. Não é categoria.

**Inbox**: nota que você criou e não sabe onde colocar fica em `Personal/` com `categories: [[Inbox]]`, e é triada depois.
```

## Veja também

- [[Quartz]]
- [[iso-8601]]
