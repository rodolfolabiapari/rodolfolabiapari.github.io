---
title: cat, rg with xargs
created: 2026-07-01
draft: false
tags:
  - tips
  - rg
  - xargs
  - cat
  - cp
description: Pipe xargs with spaces
lang: pt-br
enableToc: true
aliases: []
---

I have no brain to memorize it, so, that it is:

```bash
rg -i pattern -l --null | xargs -0 cp -t destination/
```
