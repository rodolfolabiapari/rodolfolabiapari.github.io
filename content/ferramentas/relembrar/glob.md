---
title: Glob - Padrões de Arquivo para ls, rm, rg
created: 2026-09-15
updated: 2026-09-15
draft: false
tags:
  - glob
  - shell
  - bash
  - rg
  - ls
  - busca
description: Padrões glob (wildcard) para filtro de arquivos no terminal - ls, rm, rg
lang: pt-br
enableToc: true
aliases: []
---

Glob (ou _globing_) é a sintaxe de curingas que o shell usa para expandir nomes de arquivo. Ferramentas como [[vi, vim e nvim|rg]] (ripgrep) e a [[Uso de cat com rg e xargs|rg]] também aceitam glob para filtrar arquivos com a flag `--glob` (ou `-g`).

## Padrões Básicos

| Padrão    | Significado                                   | Exemplo                                         |
| --------- | --------------------------------------------- | ----------------------------------------------- |
| `*`       | Qualquer sequência de caracteres (exceto `/`) | `*.md` → todos os markdown                      |
| `?`       | Um caractere qualquer                         | `??.md` → arquivos de 2 letras + .md            |
| `[abc]`   | Um caractere do conjunto                      | `[ae]*.md` → arquivos começando com a ou e      |
| `[!abc]`  | Um caractere **fora** do conjunto             | `[!0-9]*` → arquivos que não começam com dígito |
| `{a,b,c}` | Alternativas (expansão do bash)               | `*.{md,txt}` → markdown e txt                   |

## Glob com Diretórios

| Padrão               | Significado                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `**/*.md`            | Todos os `.md` recursivamente (globstar)                                  |
| `**/node_modules/**` | Ignorar `node_modules` em qualquer nível                                  |
| `src/**/test*`       | Dentro de `src/`, qualquer subdiretório com arquivos começando com `test` |

## Uso com rg

O `rg` aceita globs para incluir ou excluir arquivos:

```bash
# busca só em markdown
rg "pattern" --glob "*.md"

# exclui diretórios
rg "pattern" --glob "!node_modules" --glob "!.git"

# atalho: -g é equivalente a --glob
rg "pattern" -g "*.pt-BR.md"
```

## Uso com ls e rm

```bash
# listar todos os arquivos .md que começam com vogal
ls [aeiou]*.md

# remover arquivos temporários
rm *.tmp

# checar se o diretório tem imagens
ls *.{png,jpg,jpeg,gif} 2>/dev/null
```

## Veja também

- [[rg]]
