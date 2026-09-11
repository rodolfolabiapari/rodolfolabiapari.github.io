---
title: Vim, Neovim — Referência Rápida
created: 2024-02-04
updated: 2026-09-10
draft: false
tags:
  - vi
  - vim
  - neovim
  - nvim
  - editor
description: Comandos e atalhos essenciais do vi, vim e neovim — consulta rápida
lang: pt-br
enableToc: true
aliases: []
---

> Quer aprender na prática? Veja o meu [[vim/estudo|Guia de Estudos]].
>
> Sempre relembrar do início, o [[kickstart.nvim project]].

## Atalhos essenciais (LazyVim)

| O quê                     | Atalho                |
| ------------------------- | --------------------- |
| Salvar                    | `<space>w`            |
| Fechar buffer             | `<space>q`            |
| Fechar todos              | `<space>Q`            |
| Explorador de arquivos    | `<space>e`            |
| Buscar arquivo            | `<space>ff`           |
| Buscar texto (grep)       | `<space>sg`           |
| Buscar palavra sob cursor | `<space>sw`           |
| Terminal                  | `<space>ft`           |
| Git status                | `<space>gs`           |
| Git diff                  | `<space>gd`           |
| Git blame                 | `<space>gb`           |
| Git log                   | `<space>gl`           |
| Git commits               | `<space>gc`           |
| Git files (tracked)       | `<space>gf`           |
| Lazygit (interface visual)| `<space>gg`           |
| Git commit all            | `<space>gca`          |
| Git rebase interativo     | `<space>grb`          |
| Format buffer             | `<leader>cf`          |
| Auto-format toggle (g)    | `<leader>uf`          |
| Auto-format toggle (buf)  | `<leader>uF`          |
| Zen mode                  | `<space>zz`           |
| Zoom janela               | `<space>zm`           |
| Scratchpad                | `<space>zs`           |
| Rename arquivo (LSP)      | `<space>cR`           |
| TreeSJ toggle             | `<leader>jt`          |
| TreeSJ split              | `<leader>js`          |
| TreeSJ join               | `<leader>jj`          |
| Spell: próxima palavra    | `]s`                  |
| Spell: anterior palavra   | `[s`                  |
| Spell: sugestões          | `z=`                  |
| Spell: add dicionário     | `zg`                  |
| Toggle spell              | `<space>us`           |
| Which-key                 | `<space>` (espere 1s) |
| Dividir tela horizontal   | `<space>-`            |
| Dividir vertical          | `<space>\|`           |
| Fechar janela             | `<space>wd`           |
| Navegar entre janelas     | `Ctrl+h/j/k/l`        |
| Próximo diagnóstico       | `]d`                  |
| Diagnóstico anterior      | `[d`                  |
| Listar diagnósticos       | `<space>le`           |
| Line diagnostics          | `<space>cd`           |
| Code actions              | `<space>ca`           |
| Renomear                  | `<space>rn`           |

### Modos

| Modo         | Entrar                                    | Sair             |
| ------------ | ----------------------------------------- | ---------------- |
| Normal       | `Esc`                                     | —                |
| Insert       | `i`, `a`, `o`                             | `Esc`            |
| Visual       | `v` (char), `V` (linha), `Ctrl+v` (bloco) | `Esc`            |
| Command-line | `:`                                       | `Enter` ou `Esc` |
| Replace      | `R`                                       | `Esc`            |

## Usando o `:help`

| Comando              | Ação                                 |
| -------------------- | ------------------------------------ |
| `:Tutor`             | Tutorial interativo (nvim)           |
| `:help usr_01.txt`   | Manual do usuário                    |
| `:help text-objects` | Sobre text objects                   |
| `:helpgrep word`     | Busca palavra no manual              |
| `K`                  | Busca manual para palavra sob cursor |
| `Ctrl+]`             | Avança no link do manual             |
| `Ctrl+O`             | Volta no manual                      |
| `:map`               | Lista atalhos e mapas                |

## Introdução

O formato geral dos comandos é `[número]comando[text object]`:

- **número** — opcional, repete o comando
- **comando** — ação (ex: `d` deleta, `c` altera, `y` copia)
- **text object** — alvo/alvo (ex: `w` palavra, `}` parágrafo, `t` até caractere)

> Dentro do vim/nvim, `:!column -t -s '\|' -o '\|'` formata tabelas.

## Modificação

| Comando         | Efeito                                               |
| --------------- | ---------------------------------------------------- |
| `i`             | Insere antes do cursor                               |
| `a`             | Insere depois do cursor                              |
| `I`             | Insere no início da linha                            |
| `A`             | Insere no final da linha                             |
| `o` / `O`       | Abre linha abaixo / acima                            |
| `s`             | Substitui o caractere sob o cursor (deleta + insert) |
| `S`             | Substitui a linha inteira (deleta + insert)          |
| `r`             | Substitui um caractere (sem entrar em insert)        |
| `R`             | Entra em modo replace                                |
| `x`             | Deleta caractere sob o cursor                        |
| `X`             | Deleta caractere antes do cursor                     |
| `d` + movimento | Deleta                                               |
| `dd`            | Deleta linha inteira                                 |
| `D`             | Deleta do cursor ao fim da linha (`d$`)              |
| `c` + movimento | Altera (deleta + insert)                             |
| `cc`            | Altera linha inteira                                 |
| `C`             | Altera do cursor ao fim da linha                     |
| `y` + movimento | Copia (yank)                                         |
| `yy`            | Copia linha                                          |
| `p` / `P`       | Cola depois / antes do cursor                        |
| `gp` / `gP`     | Cola e deixa cursor no fim do colado                 |
| `J`             | Junta linha atual com a próxima                      |
| `ddp`           | Inverte posição de duas linhas                       |
| `~`             | Alterna maiúsculo/minúsculo                          |
| `g~w`           | Alterna case da palavra                              |
| `guw` / `gUw`   | Lowercase / uppercase da palavra                     |
| `gqq`           | Quebra linha na coluna definida (`textwidth`)        |
| `gqap`          | Quebra linha no parágrafo (formata)                  |
| `gv`            | Repete última seleção visual                         |
| `gi`            | Volta ao último local de inserção                    |
| `<` / `>`       | Recua / destaca (shift)                              |
| `.`             | Repete a última alteração                            |

## Movimentação

### Por texto

| Comando     | Vai para...                               |
| ----------- | ----------------------------------------- |
| `w` / `W`   | Próxima palavra (espaços / qualquer char) |
| `b` / `B`   | Palavra anterior                          |
| `e` / `E`   | Fim da palavra                            |
| `ge`        | Fim da palavra anterior                   |
| `(` / `)`   | Sentença anterior / próxima               |
| `{` / `}`   | Parágrafo anterior / próximo              |
| `[[` / `]]` | Seção anterior / próxima                  |
| `%`         | Pareamento de `()`, `{}`, `[]`            |
| `*` / `#`   | Ocorrência atual para frente / trás       |

### Por linha

| Comando     | Vai para...                                  |
| ----------- | -------------------------------------------- |
| `0`         | Primeira coluna                              |
| `^`         | Primeiro caractere não espaço                |
| `$`         | Final da linha                               |
| `+` / `-`   | Primeiro char não espaço da próx / ant linha |
| `fx`        | Até o char `x` (inclusive)                   |
| `tx`        | Até antes do char `x`                        |
| `Fx` / `Tx` | O mesmo, para trás                           |
| `;` / `,`   | Repete `f`/`t` para frente / trás            |
| `\|`        | Coluna N (`N\|`)                             |

### Por tela

| Comando             | Efeito                              |
| ------------------- | ----------------------------------- |
| `H`                 | Topo da tela                        |
| `M`                 | Meio da tela                        |
| `L`                 | Final da tela                       |
| `Ctrl+E` / `Ctrl+Y` | Rola 1 linha para baixo / cima      |
| `Ctrl+D` / `Ctrl+U` | Rola meia tela para baixo / cima    |
| `Ctrl+F` / `Ctrl+B` | Rola tela inteira para baixo / cima |
| `zz`                | Centraliza cursor na tela           |
| `zt` / `zb`         | Cursor no topo / base da tela       |

### Por arquivo

| Comando             | Vai para...                     |
| ------------------- | ------------------------------- |
| `gg`                | Início do arquivo               |
| `G`                 | Final do arquivo                |
| `Ngg` / `NG`        | Linha N                         |
| `Ctrl+I` / `Ctrl+O` | Próximo / anterior no jump list |

## Marcações

| Comando  | Efeito                                       |
| -------- | -------------------------------------------- |
| `mx`     | Marca posição com a letra `x`                |
| `` `x `` | Vai para o caractere na marca `x`            |
| `'x`     | Vai para o início da linha na marca `x`      |
| `''`     | Volta ao início da linha da última marca     |
| ` `` `   | Volta ao caractere da última posição marcada |
| `'.`     | Última posição editada (início da linha)     |
| `` `. `` | Última posição editada (caractere exato)     |
| `'"`     | Última posição de salto                      |
| `'0`     | Última posição ao fechar o vim               |
| `:marks` | Lista todas as marcações                     |

## Fold (dobras)

| Comando          | Efeito                      |
| ---------------- | --------------------------- |
| `zf` + movimento | Cria dobra                  |
| `zf%`            | Dobra até pareamento        |
| `Nzf`            | Cria dobra de N linhas      |
| `zo` / `zc`      | Abre / fecha uma dobra      |
| `zO` / `zC`      | Abre / fecha recursivamente |
| `za`             | Alterna dobra               |
| `zA`             | Alterna recursivamente      |
| `zD`             | Deleta dobra                |
| `zE`             | Elimina todas as dobras     |
| `zj` / `zk`      | Navega entre dobras         |

## Comandos `ex` (modo command-line)

O padrão é `:[endereço]comando[opções]`.

### `:set`

| Comando               | Efeito                                           |
| --------------------- | ------------------------------------------------ |
| `:set`                | Mostra opções alteradas                          |
| `:set all`            | Mostra todas as opções                           |
| `:set x?`             | Mostra valor de `x`                              |
| `:set x`              | Ativa opção booleana                             |
| `:set nox`            | Desativa opção booleana                          |
| `:set x=valor`        | Define valor                                     |
| `:set number`         | Mostra números de linha                          |
| `:set relativenumber` | Números relativos                                |
| `:set hlsearch`       | Destaca buscas                                   |
| `:e!`                 | Recarrega arquivo original (descarta alterações) |

### Endereços

| Símbolo     | Significado               |
| ----------- | ------------------------- |
| `.`         | Linha atual               |
| `$`         | Última linha              |
| `%`         | Arquivo inteiro (`1,$`)   |
| `'m`        | Linha da marca `m`        |
| `+N` / `-N` | N linhas à frente / atrás |

| Exemplo        | Efeito                                          |
| -------------- | ----------------------------------------------- |
| `:10`          | Vai para linha 10                               |
| `:.,$d`        | Deleta da atual ao fim                          |
| `:.,.+20d`     | Deleta atual + 20 linhas                        |
| `:%d`          | Deleta tudo                                     |
| `:%y`          | Copia todo o arquivo                            |
| `:160,224m23`  | Move linhas 160–224 para após linha 23          |
| `:160,224co23` | Copia linhas 160–224 para após linha 23         |
| `:20,.m$`      | Move da linha 20 até atual para o fim           |
| `:%t$`         | Duplica tudo no final                           |
| `:-,+t0`       | Copia 3 linhas ao redor do cursor para o início |
| `:100;+5p`     | `;` redefine a base para o endereço anterior    |

### Pesquisas com `:g` (global)

| Comando             | Efeito                                |
| ------------------- | ------------------------------------- |
| `:g/padrao`         | Lista linhas com o padrão             |
| `:g!/padrao`        | Lista linhas **sem** o padrão         |
| `:60,125g/padrao/p` | Lista ocorrências entre linhas 60‑125 |

### Pesquisas (modo normal)

| Comando   | Efeito                                |
| --------- | ------------------------------------- |
| `/padrao` | Busca para frente                     |
| `?padrao` | Busca para trás                       |
| `n` / `N` | Próxima / anterior ocorrência         |
| `*` / `#` | Palavra sob cursor para frente / trás |

### Substituições

| Comando                       | Efeito                               |
| ----------------------------- | ------------------------------------ |
| `:s/velho/novo/`              | Primeira ocorrência na linha         |
| `:s/velho/novo/g`             | Todas na linha                       |
| `:50,100 s/velho/novo/g`      | Intervalo de linhas                  |
| `:%s/velho/novo/g`            | Arquivo inteiro                      |
| `:%s/velho/novo/gc`           | Com confirmação                      |
| `:g/padrao1/ s/velho/novo/gc` | Só em linhas com `padrao1`           |
| `:%s/padrao1/&, padrao2/`     | `&` reusa a pesquisa na substituição |

### Salvando e saindo

| Comando             | Efeito                        |
| ------------------- | ----------------------------- |
| `:w`                | Salva                         |
| `:w filename`       | Salva como                    |
| `:230,$ w filename` | Salva trecho em outro arquivo |
| `:10,20 w >> file`  | Append em arquivo             |
| `:q`                | Fecha buffer                  |
| `:q!`               | Fecha sem salvar              |
| `:wq` / `:x`        | Salva e fecha                 |
| `:qa`               | Fecha todos                   |
| `:e filename`       | Abre arquivo                  |

Histórico da command-line: `Ctrl+F`.

### De linha vs. cursor

> `d/padrao` (modo normal) deleta **do cursor até o padrão**, mantendo o resto.
> `:./padrao/d` (ex) deleta **a linha inteira** que contém o padrão.

## Buffers, janelas e abas

| Comando              | Efeito                                |
| -------------------- | ------------------------------------- |
| `:ls`                | Lista buffers                         |
| `:bn` / `:bp`        | Próximo / anterior buffer             |
| `:bd`                | Fecha buffer                          |
| `Ctrl+^`             | Alterna entre os dois últimos buffers |
| `:new` / `:new file` | Nova janela horizontal                |
| `:sp` / `:vsp`       | Split horizontal / vertical           |
| `:clo`               | Fecha janela                          |
| `:res N`             | Redimensiona janela para N linhas     |
| `Ctrl+w h/j/k/l`     | Navega entre janelas                  |
| `:tabnew`            | Nova aba                              |
| `gt` / `gT`          | Próxima / anterior aba                |
| `:mksession my.vim`  | Salva sessão                          |
| `:source my.vim`     | Restaura sessão                       |
| `:help usr_32.txt`   | Sobre undo                            |

### Bufferline (navegação visual de buffers)

| Atalho         | Ação                         |
| -------------- | ---------------------------- |
| `<S-h>`        | Buffer anterior              |
| `<S-l>`        | Próximo buffer               |
| `[b` / `]b`    | Buffer anterior / próximo    |
| `[B` / `]B`    | Move buffer para trás/frente |
| `<leader>bp`   | Fixa/desfixa buffer          |
| `<leader>bP`   | Fecha todos não fixados      |
| `<leader>br`   | Fecha buffers à direita      |
| `<leader>bl`   | Fecha buffers à esquerda     |
| `<leader>bj`   | Picker visual de buffers     |

## Comandos úteis

| Comando               | Ação                                  |
| --------------------- | ------------------------------------- |
| `:Lazy`               | Gerenciador de plugins (LazyVim)      |
| `:Lazy sync`          | Atualiza plugins                      |
| `:Mason`              | Gerenciar LSPs, linters, formatadores |
| `:checkhealth`        | Diagnóstico do Neovim                 |
| `:messages`           | Mensagens de erro/log                 |
| `<leader>n`           | Histórico de notificações (Snacks)    |
| `:LazyFormat`         | Formatar buffer manualmente           |
| `:LazyFormatInfo`     | Status dos formatadores               |
| `:ConformInfo`        | Detalhes do conform (formatador)      |
| `:set`                | Opções atuais (diferentes do padrão)  |
| `:marks`              | Lista marcações                       |
| `:reg`                | Lista registradores                   |
| `:!comando`           | Executa comando do shell              |
| `:r!comando`          | Lê saída do comando para o buffer     |
| `:Inspect`            | Inspeciona token/syntax sob cursor    |
| `vi +50 arquivo`      | Abre na linha 50                      |
| `vi +/padrao arquivo` | Abre na primeira ocorrência           |

> Os registradores precedem o comando: `"dyy` copia para o registrador `d`; `"dP` cola dele.
