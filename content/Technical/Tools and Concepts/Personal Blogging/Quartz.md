---
title: Quartz
draft: false
---

> [!info] Why Quartz?
> I really wanted to use #wikilinks and [[Hugo]] does not have (and will not be) supported for now.

## Requirements

- #Node

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

```bash
npx quartz sync
```

