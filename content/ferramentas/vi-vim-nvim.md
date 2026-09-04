---
title: vi, vim e neovim
created: 2024-02-04
draft: false
tags:
  - vi
  - vim
  - neovim
  - nvim
  - editor
description: Comandos e conceitos do vi, vim e neovim
lang: pt-br
enableToc: true
aliases: []
---

> Sempre relembrar do meu início e motivador [Neovim Kickstart.nvim](https://github.com/rodolfolabiapari/kickstart.nvim).
> Hoje já não o utilizo mais pois eu consegui bagunçar ele todo, mas é um excelente começo.

## Usando o `:help`

Se tiver no _neovim/nvim_ utilize o `:Tutor`.

Leia o `:help`.
Leia o manual inicial `:help usr_01.txt`
Leia o `:help text-objects`.

Use `K` para buscar no manual a palavra do cursor

Use a vontade o `:helpgrep word`.

Use `Ctrl+]` e `Ctrl+O` para avançar e retroceder no manual.

Sobre atalhos e mapas veja `:map`

## Introdução

Execute `:!column -t -s '|' -o '|'` para formatar tables.
Formato `(number)(command)(text object)`, sendo _number_ opcional, _command_ é
ação e _text object_ é movimento.

Além de abrir na linha 50 com `vi +50 filename`, é possível abrir com `vi
+/PADRAO filename`.

## _vi_, _vim_ e _neovim_ Configurations

### Buffers e registradores

Os registradores devem preceder o commando, exemplo `"dyy`, `"dP`.

### Modificação

| Cmd      | Sub         | Informação                                                 |
| -------- | ----------- | ---------------------------------------------------------- |
| `s`      |             | faz uma pesquisa de movimento inteligente                  |
| `S`      |             | Faz pesquisa em bloco retroativo                           |
| `U`      |             | Restaura a linha inteira                                   |
| `X`      |             | Deleta um char atrás do cursor                             |
| `cc`     |             | Altera linha inteira. Igual a `c$`.                        |
| `~`      |             | Troca o case no cursor                                     |
| `C`      |             | Altera do cursor até o final da linha                      |
| `x`      |             | Delete 1 char sem salvar no registrador                    |
| `ddp`    |             | Inverte posição de linhas                                  |
| `J`      |             | Junta a linha atual com a próxima                          |
| `d`      | `/PADRAO`   | deleta do cursor até o PADRAO, nao incluso                 |
| `d`      | `f` x       | Deleta até encontrar x                                     |
| `g`      | muita coisa | Faz inúmeros movimentos, pesquisar sobre                   |
| `g`      | `q`         | quebra linhas na coluna 80 ou 120                          |
| `g`      | `qap`       | faz `gq` around paragraph                                  |
| `g`      | `~w`        | Switch case em `w`                                         |
| `g`      | `uw`, `Uw`  | lower uppercase em `w`                                     |
| `g`      | `p`, `P`    | cola mas deixa o cursor no final da colagem                |
| `g`      | `v`         | Repeta a última selecao no modo visual                     |
| `g`      | `i`         | Vai para o último local de insercao feito                  |
| `<`, `>` |             | faz shift de texto. Verificar o tamanho com o `shiftwidth` |
| `<`, `>` | `}`         | faz shift parágrafo                                        |
| `<`, `>` | `%`         | faz shift do bloco correspondente                          |

### Movimentacao de Cursor e Screen

#### Texto

| Cmd       | Sub | Informação                                        |
| --------- | --- | ------------------------------------------------- |
| `E`       |     | Ignora Pontuacao até achar espaco                 |
| `e`       |     | Fim da _word_                                     |
| `g`       | `e` | Fim da _word_ para trás                           |
| `(` `)`   |     | Move entre sentenças (`?.!` seguidos de espaço)   |
| `{` `}`   |     | Move entre parágrafos                             |
| `[[` `]]` |     | Move entre seções                                 |
| `*`, `#`  |     | Pesquisa a palavara que está no cursor            |
| `%`       |     | Pesquisa parênteses, chave ou colchete respectivo |

#### Linhas e outros

| Cmd        | Sub         | Informação                                           |
| ---------- | ----------- | ---------------------------------------------------- |
| `^`        |             | Primeiro char nao espaco da linha                    |
| `+`, `-`   |             | Primeiro char nao espaco da próxima e linha anterior |
| ` num \|`  |             | Coluna num da linha                                  |
| `f`        | x           | Move o cursor até o char `x`                         |
| `t`        | x           | Move o cursor até antes do char `x`                  |
| `F`        | x           | Move o cursor até o char `x` para trás               |
| `^E`, `^Y` |             | Mostra uma linha da screen para cima e baixo         |
| `^U`, `^D` |             | Move meia screen                                     |
| `^F`, `^B` |             | Move screen inteira                                  |
| `z`        | `ENTER`     | Move a linha atual para cima                         |
| `z`        | `.`         | Move a linha atual para o centro                     |
| `z`        | `-`         | Move a linha atual para baixo                        |
| `g`        | muita coisa | Faz inúmeros movimentos, pesquisar sobre             |
| `H`        |             | Move para Topo da screen                             |
| `M`        |             | Move para Meio da screen                             |
| `L`        |             | Move para Baixo da screen                            |

### Marcações

| Cmd      | Sub | Informação                                               |
| -------- | --- | -------------------------------------------------------- |
| `'`      |     | Semelhante ao de registradores `"`, mas para marcações   |
| `:marks` |     | Semelhante ao de registradores `"`, mas para marcações   |
| `m`      | x   | Marca sua posicao atual no texto com a letra x           |
| \`       | x   | Vai para o char na marcação x                            |
| `'`      | x   | Vai para o início da linha na marcação x                 |
| `''`     |     | Retorna para início da linha da última posicao marcada   |
| \`\`     |     | Retorna para o char da última posição marcada            |
| `'`      | `"` | Move para a última posição editada                       |
| `'`      | `.` | Move para a última posição editada no início da linha    |
| `'`      | `.` | Move para a última posição editada no char exato         |
| `'`      | `0` | Move para a última posição da última vez que abriu o vim |

### Folders

| Cmd       | Sub   | Informação                    |
| --------- | ----- | ----------------------------- |
| `z`       | `A`   | Toggle recursivamente         |
| `z`       | `C`   | Fecha recursivamente          |
| `z`       | `O`   | Abre recursivamente           |
| `z`       | `D`   | Deleta recursivamente         |
| `z`       | `E`   | Elimina todas                 |
| `z`       | `f`   | Cria um foder até o f         |
| `count z` | `F`   | Cria folder com n linhas      |
| `z`       | `a`   | toggle 1 folder               |
| `z`       | `c`   | close 1 folder                |
| `z`       | `o`   | open 1 folder                 |
| `z`       | `j k` | move o cursor para os folders |

Exemplos interessantes:

- `3zf` executa o `zF` sobre 3 linhas iniciando da corrente;
- `2zfj` executa o `zf` da linha atual até 2 linhas para baixo `j`
- `zf%` para fechar um bloco

## `ex` s2

O padrão é `:[address]command[options]`

`ex` é um executor de LINHAS! Recomenda-se `:set number`.

> Para ver todas as configurações definidas diferentes do padrão, execute
> `:set`.

Se quiser ver o histórico, dentro do _command line_ aperte `Ctrl+F`.

Para ver mensagens :messages

| Cmd            | Informação                   |
| -------------- | ---------------------------- |
| `:set`         | Ver alteracoes               |
| `:set all`     | Ver todas as opcoes          |
| `:set x?`      | ver valor de x               |
| `:set x`       | Se boleado ativa a funcao    |
| `:set no x`    | Se boleado desativa a funcao |
| `:set x=value` | Aplica value                 |
| `:e!`          | volta o arquivo original     |

Valores absolutos

| Cmd            | Informação                                                 |
| -------------- | ---------------------------------------------------------- |
| `:10`          | Move para a linha 10                                       |
| `:160:224m23`  | Move de 160 a linha 224 para linha 23. Números absolutos.  |
| `:160:224co23` | Copia de 160 a linha 224 para linha 23. Números absolutos. |

### Line address symbols, valores relativos e marcacoes

| Cmd        | Informação                                 |
| ---------- | ------------------------------------------ |
| `:.,$d`    | Deleta da linha atual até o fim do arquivo |
| `:.,.+20d` | Deleta a linha atual +20                   |
| `:%d`      | Deleta o conteúdo do arquivo               |

Se eu tiver na linha 1 então `:100,+5 p` nao faz sentido.

| Cmd          | Informação                                            |
| ------------ | ----------------------------------------------------- |
| `:226,$m.-2` | Move da 266 até o final para 2 linhas acima do cursor |
| `:20,.m$`    | Move da linha 20 até atual para o fim do arquivo.     |

| Cmd      | Informação                                                        |
| -------- | ----------------------------------------------------------------- |
| `:%t$`   | Duplica todo o conteúdo no final do arquivo                       |
| `:-,+t0` | copia 3, ao redor do cursor, linhas e coloca no início do arquivo |

Se eu tiver na linha 1 então `:100,+5 p` nao faz sentido. Para isso, usar o `;`
como em `:100;+5 p` para calcular o segundo com base no primeiro.

### Pesquisas

Pesquisas sempre devem ter o `/`, `/padrao/` no início e no fim.

| Cmd                     | Informação                                                 |
| ----------------------- | ---------------------------------------------------------- |
| `*`                     | Pesquisa a palavara que está no cursor                     |
| `:/PADRAO/`             | Pesquisa a linha do proximo padrao                         |
| `:?PADRAO?`             | Pesquisa a linha do anterior padrao                        |
| `:/PADRAO/d`            | Deleta a linha do proximo padrao                           |
| `:/PADRAO/+d`           | Deleta a linha abaixo ao padrao                            |
| `:/padrao1/,/padrao2/d` | deleta do padrao1 ao 2                                     |
| `:.,/padrao/m23`        | pega a linha atual até o padrao e move para depois da 23   |
| `:/padrao/;+10 p`       | pega a linha com padrao, soma mais 10 e imprime num buffer |

> Atenção! `d/padrao` deleta do cursor até o padrao, deixando todo o resto. Já
> o comando `ex` `:./padrao/d` deleta a linha inteira!

| Cmd                 | Informação                                             |
| ------------------- | ------------------------------------------------------ |
| `:g/padrao`         | pequisa e exibe todas as linhas com o padrao           |
| `:g!/padrao`        | Exibe todas as linhas que nao possui o padrao          |
| `:60,125g/padrao/p` | seleciona a linha 60 a 125 e pesquisa o padrao e exibe |

### Substituições

| Cmd                            | Informação                                                             |
| ------------------------------ | ---------------------------------------------------------------------- |
| `:s/antigo/novo/`              | s a primeira ocorrencia na linha atual.                                |
| `:s/antigo/novo/g`             | s a todas as ocorrencias na linha atual.                               |
| `:50,100 s/antigo/novo/g`      | num intervalo de linhas faz as subs                                    |
| `:1,$ s/antigo/novo/g`         | substitui todas as ocorrencias do arquivo                              |
| `:% s/antigo/novo/g`           | semelhante acima                                                       |
| `:% s/antigo/novo/gc`          | semelhante acima com confirmacao                                       |
| `:g/padrao1/ s/antigo/novo/gc` | em todas as linhas que tem padrao1, faz a substituicao com confirmacao |
| `:g/padrao1/ s//novo/gc`       | semelhante acima                                                       |
| `:% s/padrao1/&, padrao2/`     | O `&` repete a pesquisa na substituicao, evitando reescrita            |

### Salvando e saindo

| Cmd                     | Informação                                         |
| ----------------------- | -------------------------------------------------- |
| `:230,$ w filename`     | salva em outro arquivo de 230 até o final          |
| `:.-21,.+10 w filename` | salva em outro arquivo um pedaco relativo de texto |
| `:10,20 w >> file`      | Append no file                                     |

## Buffers e windows

`:ls` ou `SPACE SPACE` com plugin no #lazy.

| Cmd         | Informação          |
| ----------- | ------------------- |
| `:new`      |
| `:new file` | com nome            |
| `:sp`       | horizontal          |
| `:vsp`      | vertical            |
| `:clo`      | Fecha               |
| `:res num`  | rezise window       |
| `:qa`       | fecha todos buffers |

## Undos

`:help usr_32.txt`

## Sessions

`:mksession mySession.vim` e `:source mySession.vim`
