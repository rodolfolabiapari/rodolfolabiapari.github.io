---
date: 2026-06-30
draft: false
tags:
  - hugo
  - github
  - github-pages
  - Jekyll
description: ""
created: 2026-06-30
categories:
aliases:
  - Iniciando Blog com Hugo
author: Me
disableShare: "false"
ShowBreadcrumbs: "true"
ShowRedingTime: "true"
showToc: "true"
TocOpen: "true"
ShowWordCount: "true"
title: Hugo
---

## Instalação

Instalando e iniciando o `hugo`:

```bash
# Instalação
apt install hugo
pacman -S hugo

# Certifique que você esteja usando o extended version
hugo version
# Saída esperada:
# hugo v0.161.1+extended+withdeploy linux/amd64 BuildDate=unknown

# Inicialização
hugo new site . --force --format yaml
```

---

## Aplicando Temas

Temas são aplicados usando `git submodule`. Abaixo é exibido a aplicação do tema [PaperMod](https://github.com/adityatelange/hugo-PaperMod/tree/master).

```bash
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

Depois precisa alterar o `./hugo.yaml` ou caso estiver modularizado, o`config/_default/hugo.toml`

### Trocando Tema

Para trocar de tema, removemos o antigo e aplicamos o novo:

```bash
nomeDoTema="PaperMod"
git submodule deinit -f theme/${nomeDoTema}
git rm themes/${nomeDoTema}
rm -rf .git/modules/themes/${nomeDoTema}
```

Ai voltamos no [[hugo#aplicando-temas]] e configuramos o novo tema.

---

## Executando Servidor Local

Na raiz, executar:

```bash
hugo server
```
