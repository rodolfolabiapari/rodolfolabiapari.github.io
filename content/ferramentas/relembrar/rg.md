---
title: ripgrep (rg) - --vimgrep e :cfile
created: 2026-09-15
updated: 2026-09-15
draft: false
tags:
  - rg
  - ripgrep
  - grep
  - neovim
  - quickfix
description: Como usar rg com --vimgrep e carregar resultados no quickfix do Neovim com :cfile
lang: pt-br
enableToc: true
aliases: []
---

O [ripgrep](https://github.com/BurntSushi/ripgrep) (`rg`) é uma ferramenta de busca recursiva ultra-rápida. Além da [[glob|filtragem por glob]] e da engine [[regex|regex PCRE (Rust)]], o `rg` tem um modo específico para integração com editores: `--vimgrep`.

## `--vimgrep`

A flag `--vimgrep` formata a saída no padrão do Vim:

```
arquivo:linha:coluna:texto
```

Isso permite que o Neovim leia o resultado diretamente na janela **quickfix**.

## Workflow: rg + :cfile

```bash
# 1. buscar no terminal e salvar no formato vimgrep
rg "TODO|FIXME" --vimgrep > .quickfix
```

```vim
" 2. dentro do Neovim, carregar o arquivo no quickfix
:cfile .quickfix
```

Agora você pode navegar pelos resultados com `:cnext` (`:cn`), `:cprev` (`:cp`) e `:copen` para abrir a janela quickfix.

## Workflow Completo (sem arquivo temporário)

No Neovim, dá para usar o `rg` diretamente sem criar arquivo intermediário:

```vim
:set grepprg=rg\ --vimgrep
:grep TODO
:copen
```

O Neovim entende a saída do `rg` e popula o quickfix automaticamente.

## Atalhos Úteis

| Comando            | Ação                              |
| ------------------ | --------------------------------- |
| `:copen`           | Abrir janela quickfix             |
| `:cclose`          | Fechar quickfix                   |
| `:cn`              | Próximo resultado                 |
| `:cp`              | Resultado anterior                |
| `:colder`          | Voltar para busca anterior        |
| `:cfile <arquivo>` | Carregar resultados de um arquivo |

## Relacionados

- [[Uso de cat com rg e xargs]] - pipe do rg com xargs para copiar arquivos
- [[glob|Glob]] - filtragem de arquivos com `-g`
- [[regex|Regex (Rust PCRE)]] - sintaxe regex para os padrões
- [[vi, vim e nvim]] - referência do Neovim
