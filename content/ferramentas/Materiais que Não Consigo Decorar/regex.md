---
title: Regex - Rust (PCRE) para rg e Neovim
created: 2026-09-15
updated: 2026-09-15
draft: false
tags:
  - regex
  - rg
  - neovim
  - PCRE
  - busca
description: Expressões regulares no estilo PCRE (Rust) para usar com rg e no Neovim
lang: pt-br
enableToc: true
aliases: []
---

Tanto o `rg` (ripgrep) quanto os comandos de busca do Neovim (`/`, `:s`, `:g`) aceitam regex. O `rg` usa a engine de regex do Rust, que é compatível com PCRE (Perl Compatible Regular Expressions) com algumas diferenças do regex POSIX do Vim.

> A [[vi, vim e nvim|referência do Neovim]] tem os comandos de busca, mas aqui vai a sintaxe dos padrões.

## Âncoras e Limites

| Padrão | Significado                    |
| ------ | ------------------------------ |
| `^`    | Início da linha                |
| `$`    | Fim da linha                   |
| `\b`   | Fronteira de palavra (Rust/rg) |
| `\B`   | Não-fronteira de palavra       |

## Quantificadores

| Padrão  | Significado        |
| ------- | ------------------ |
| `*`     | 0 ou mais (greedy) |
| `+`     | 1 ou mais (greedy) |
| `?`     | 0 ou 1 (opcional)  |
| `{n}`   | exatamente n       |
| `{n,}`  | n ou mais          |
| `{n,m}` | entre n e m        |
| `*?`    | 0 ou mais (lazy)   |
| `+?`    | 1 ou mais (lazy)   |

## Conjuntos e Classes

| Padrão   | Significado                                |
| -------- | ------------------------------------------ |
| `[abc]`  | a, b ou c                                  |
| `[a-z]`  | intervalo de a a z                         |
| `[^abc]` | negação: qualquer caractere exceto a, b, c |
| `\d`     | dígito (`[0-9]`)                           |
| `\D`     | não-dígito                                 |
| `\w`     | caractere de palavra (`[a-zA-Z0-9_]`)      |
| `\W`     | não-palavra                                |
| `\s`     | espaço em branco                           |
| `\S`     | não-espaço                                 |
| `.`      | qualquer caractere (exceto newline)        |

## Grupos e Alternância

| Padrão     | Significado              |
| ---------- | ------------------------ |
| `(foo)`    | grupo de captura         |
| `(?:foo)`  | grupo não-capturante     |
| `foo\|bar` | alternância (foo ou bar) |

## Diferenças: Vim regex vs Rust regex

O Vim usa regex POSIX com sintaxe própria. No modo de busca (`/`), o Vim tem diferenças importantes:

| Conceito                | Vim (`/`)                  | Rust/rg                        |
| ----------------------- | -------------------------- | ------------------------------ |
| Alternância             | `\|foo\|bar\|`             | `foo\|bar`                     |
| Grupo não-capturante    | `\%(foo\)`                 | `(?:foo)`                      |
| Fronteira de palavra    | `\<` e `\>`                | `\b`                           |
| Escape de `+`, `(`, `)` | precisa de `\` para ativar | literal funciona, `\` desativa |

No Neovim, se você quer usar sintaxe PCRE, ative `:set regexpengine=1` e use `\v` no padrão (very magic):

```
/\v(foo|bar)+
```

## Exemplos para rg

```bash
# linhas que começam com "TODO" ou "FIXME"
rg "^(TODO|FIXME)" .

# endereços de IP
rg "\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b" .

# tags yaml em arquivos markdown
rg "^\w+:" -g "*.md" .
```

## Exemplos para Neovim

```vim
" substituir apenas palavras inteiras
:s/\<foo\>/bar/g

" deletar linhas que não contêm 'pattern'
:g!/pattern/d
```
