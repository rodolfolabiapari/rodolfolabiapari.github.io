---
title: Quartz
draft: true
created: 2026-07-01
tags:
  - git
  - quartz
  - npm
  - Node
  - npx
  - hugo
  - github
  - github-pages
  - github-actions
  - blog
description: Como eu substitui o Hugo pelo Quartz
lang: pt-br
enableToc: true
aliases: []
---

> [!info] Why Quartz?
> I really wanted to use #wikilinks and [[Hugo]] does not have (and will not be) supported for now.

## Requirements

- #Node
- #github account

## Configuring

For the #quartz works, I did:

1. Fork the [jackyzha0/quartz](https://github.com/jackyzha0/quartz) project;
2. Clone;
3. Optional: Add the remote of my [[Forgejo - Local Git Server]] and will be like that:

```bash
git remote -v
origin	ssh://git@git.arpa:2222/rodolfolabiapari.github.io.git (fetch)
origin	ssh://git@git.arpa:2222/rodolfolabiapari.github.io.git (push)
quartz	git@github.com:rodolfolabiapari/quartz.git (fetch)
quartz	git@github.com:rodolfolabiapari/quartz.git (push)
upstream	https://github.com/jackyzha0/quartz.git (fetch)
upstream	https://github.com/jackyzha0/quartz.git (push)
```

After. Inside the project:

```bash
npm i
npx quartz create

# blog -> new -> baseurl -> shortest.

npx quartz plugin install --from-config
```

Sets up the `quartz.config.yaml` file and

```bash
npx quartz build --serve
```


---

### Publishing

In Github:

1. Configure `origin` remote to be you github repo;
2. In github settings page:
	1. Configure Github actions
	2. Go to `Environment`page and remove the policy;

Add add the `deploy.yaml` inside `.github/workflows/deploy.yaml` as [official site demands](https://quartz.jzhao.xyz/hosting#github-pages).

```yaml
name: Deploy Quartz site to GitHub Pages

on:
  push:
    branches:
      - v5

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v6
        with:
          node-version: 24
      - name: Cache dependencies
        uses: actions/cache@v5
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Cache Quartz plugins
        uses: actions/cache@v5
        with:
          path: .quartz/plugins
          key: ${{ runner.os }}-plugins-${{ hashFiles('quartz.lock.json') }}
          restore-keys: |
            ${{ runner.os }}-plugins-
      - name: Install Dependencies
        run: npm ci
      - name: Install Quartz plugins
        run: npx quartz plugin install
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```


```bash
npx quartz sync
```

But I prefer my own `git push` to `v5` branch. Works as well.