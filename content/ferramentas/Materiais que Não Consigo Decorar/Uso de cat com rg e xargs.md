---
title: Uso de cat com rg e xargs
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
updated: 2026-09-09
---

I have no brain to memorize it, so, that it is:

```bash
rg -i pattern -l --null | xargs -0 cp -t destination/
```
