---
title: Git — mv, stash, rebase e conflitos
created: 2026-09-04
draft: false
tags:
  - git
  - rebase
  - stash
  - conflitos
  - dicas
description: Operações de git que uso com frequência: mover arquivos, stashing, rebase e resolução de conflitos
lang: pt-br
enableToc: true
aliases: []
---

## Motivo

Aqui guardarei algumas informações importantes que uso no meu dia a dia sobre `git`.

## `git mv`

Move ou renomeia um arquivo e já registra a operação no stage. Equivale a
`mv <origem> <destino> && git add <destino> && git rm <origem>`, mas em um
comando só e com o rastreamento de rename no log.

```bash
git mv caminho/antigo.md caminho/novo.md
```

A diferença prática para um `mv` manual é que o `git mv` avisa o git de que se
trata de uma renomeação, preservando o histórico (`git log --follow` funciona
corretamente).

Também funciona com diretórios inteiros:

```bash
git mv old-dir/ new-dir/
```

E com força (`-f`) se o destino já existir.

## `git stash`

Guarda modificações não commitadas em uma pilha temporária, restaurando o working
tree para o estado do HEAD. Ideal quando você precisa trocar de branch mas não
quer commitar trabalho incompleto.

```bash
git stash                  # stash de tudo (tracked files)
git stash -u               # inclui untracked files
git stash -a               # inclui untracked e ignored
git stash save "mensagem"  # com descrição
```

### Listar e recuperar

```bash
git stash list             # lista todos os stashes
git stash show -p stash@{0} # mostra o diff de um stash
git stash pop              # aplica o último stash e remove da pilha
git stash pop stash@{1}    # aplica stash específico e remove
git stash apply            # aplica sem remover da pilha
git stash drop stash@{0}   # descarta um stash
git stash clear            # limpa toda a pilha
```

### Stash parcial

```bash
git stash -p               # modo interativo: escolhe hunks para stash
git stash -- arquivo.txt   # stash apenas de arquivos específicos
```

## `git rebase`

Uso demais.

Reescreve o histórico aplicando commits de uma branch sobre a ponta de outra, em
vez de criar um merge commit.

### Rebase da branch atual sobre `main`

```bash
git fetch origin
git rebase origin/main
```

Isso pega seus commits e os reaplica como se tivessem sido feitos depois do
último commit de `main`. O resultado é um histórico linear.

### Rebase interativo (`-i`)

Ainda preciso melhorar essa parte do interativo.

Permite reordenar, juntar (squash), editar ou remover commits antes do push.

```bash
git rebase -i HEAD~4       # edita os últimos 4 commits
```

No editor que abre:

| Comando  | Efeito                                  |
| -------- | --------------------------------------- |
| `pick`   | mantém o commit como está               |
| `squash` | junta com o commit anterior             |
| `reword` | altera apenas a mensagem                |
| `edit`   | pausa para alterar o conteúdo do commit |
| `drop`   | remove o commit                         |
| `fixup`  | como squash mas descarta a mensagem     |

### Rebase vs merge — quando usar

| Rebase                                     | Merge                                 |
| ------------------------------------------ | ------------------------------------- |
| Histórico linear e limpo                   | Preserva o momento exato do merge     |
| Reescreve commits (muda SHAs)              | Não altera commits existentes         |
| **Nunca** faça rebase de branches públicas | Seguro em qualquer branch             |
| Ideal para branches locais antes do push   | Ideal para integrar branches públicas |

> Lembrar de nunca fazer rebase de uma branch que já foi pushada e compartilhada com
> outras pessoas. Reescrever commits públicos gera divergência nos SHAs e quebra
> o histórico de quem já fez pull.

## Resolvendo conflitos

Conflitos acontecem tanto em `rebase` quanto em `merge`. O processo é o mesmo.

### Durante um rebase/merge conflituoso

O git pausa e marca os arquivos conflitantes. Dentro do arquivo você vê:

```
<<<<<<< HEAD
conteúdo da branch atual (ou de destino no rebase)
=======
conteúdo da branch sendo mergeada (ou seus commits no rebase)
>>>>>>> mensagem do commit
```

### Resolução prática

1. Edite os arquivos, remova os marcadores `<<<<<<<` / `=======` / `>>>>>>>`,
   deixe o conteúdo desejado.

2. Marque como resolvido:

```bash
git add arquivo-resolvido.txt
```

3. Continue:

```bash
git rebase --continue    # se estiver em rebase
git merge --continue     # se estiver em merge
```

### Abortar se necessário

```bash
git rebase --abort       # volta ao estado antes do rebase
git merge --abort        # volta ao estado antes do merge
```

### Ferramentas visuais

Para conflitos mais complexos, um merge tool ajuda:

```bash
git mergetool             # abre ferramenta configurada (vimdiff, meld, etc.)
```

No #neovim, plugins como `diffview.nvim`, ou o `GitSigns.nvim` tornam a resolução bem mais visual.

### Dica: stash antes de merge/rebase

```bash
git stash                 # guarda trabalho sujo
git rebase origin/main    # rebase limpo
git stash pop             # recupera
```

Assim você lida com um conflito por vez, sem misturar trabalho em progresso com
divergências de histórico.
