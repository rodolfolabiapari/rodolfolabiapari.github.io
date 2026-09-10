---
title: Neovim — Guia de Estudos
created: 2026-09-09
draft: false
tags:
  - neovim
  - nvim
  - lazyvim
  - estudo
  - sre
description: Plano de estudos progressivo para Neovim + LazyVim, com foco em SRE e YAML/K8s
lang: pt-br
enableToc: true
aliases:
  - nvim-estudo
updated: 2026-09-10
---

> Precisa de um comando? Consulte a [[vim|Referência Rápida]].

Este guia é um plano progressivo para aprender Neovim + LazyVim do zero, com foco
no dia a dia de SRE: YAML, Git, K8s e documentação. Cada fase constrói sobre a
anterior — pule fases só se já estiver confortável.

> Setup de referência: [rodolfolabiapari/kickstart.nvim](https://github.com/rodolfolabiapari/kickstart.nvim).

---

## Fase 0 — Fundação: conheça seu ambiente

**Objetivo:** entender a estrutura do Neovim e navegar com which-key.

### Estrutura do projeto

```
~/.config/nvim/
├── init.lua               → ponto de entrada (só carrega o lazy.lua)
├── lua/config/
│   ├── lazy.lua           → carrega LazyVim + plugins
│   └── options.lua        → opções customizadas
└── lua/plugins/           → um arquivo .lua por plugin
```

### Which-key — seu melhor amigo

Pressione `<space>` e espere 1s. Aparece a paleta de comandos agrupados:

- `f` — find (arquivos, buffers, grep)
- `g` — git
- `s` — search
- `l` — LSP
- `w` — window (janelas)

### Prática

```
1. nvim                          → abra o neovim
2. <space>                       → veja o which-key
3. <space>e                      → abra o neo-tree (explorador)
4. Navegue com j/k, Enter abre   → explore arquivos
5. <space>-                      → divida tela horizontal
6. Ctrl+l / Ctrl+h               → navegue entre janelas
7. <space>bb                     → liste buffers abertos
```

---

## Fase 1 — Locomoção e edição de texto

**Objetivo:** navegar e editar YAML sem tirar as mãos do teclado.

### Movimento básico

| Tecla               | Vai para                                 |
| ------------------- | ---------------------------------------- |
| `h` `j` `k` `l`     | esquerda, baixo, cima, direita           |
| `w` `W`             | próxima palavra (espaço / qualquer char) |
| `b` `B`             | palavra anterior                         |
| `e` `E`             | final da palavra                         |
| `0` / `^` / `$`     | início / primeiro char / fim da linha    |
| `gg` / `G`          | início / fim do arquivo                  |
| `{` / `}`           | parágrafo anterior / próximo             |
| `%`                 | pareamento de `(){}[]`                   |
| `Ctrl+d` / `Ctrl+u` | meia tela para baixo / cima              |

> Pratique num YAML de deployment: navegue entre `kind:`, `metadata:`, `spec:`.

### Text objects — crítico para YAML

O formato é `ação + objeto`. Exemplos:

| Comando        | Efeito                          |
| -------------- | ------------------------------- |
| `ciw`          | Troca palavra sob o cursor      |
| `ci"`          | Troca conteúdo de aspas duplas  |
| `ca"`          | Troca aspas + conteúdo          |
| `ci'`          | Troca conteúdo de aspas simples |
| `ci(` ou `ci)` | Troca conteúdo de parênteses    |
| `ci[`          | Troca conteúdo de colchetes     |
| `ci{` ou `ciB` | Troca conteúdo de chaves        |
| `dip`          | Deleta o parágrafo inteiro      |
| `yiw`          | Copia palavra                   |
| `viw`          | Seleciona palavra visualmente   |

**Exemplo real:** em `image: "nginx:1.25"`, com o cursor em qualquer lugar dentro
das aspas, `ci"` + `"nginx:1.26"` troca a versão.

### Busca e replace

| Comando             | Efeito                             |
| ------------------- | ---------------------------------- |
| `/texto`            | Busca para frente                  |
| `?texto`            | Busca para trás                    |
| `n` / `N`           | Próximo / anterior                 |
| `*` / `#`           | Palavra sob cursor (frente / trás) |
| `:%s/velho/novo/g`  | Replace em todo arquivo            |
| `:%s/velho/novo/gc` | Replace com confirmação            |

### Macros

```
qa              → começa a gravar na tecla a
(navega, edita)
q               → para de gravar
@a              → executa macro a
5@a             → executa 5 vezes
@@              → repete última macro
```

### Ponto (`.`)

O `.` repete a última alteração. É o comando mais subestimado do vim.
Depois de `ci"` + `"novo"`, basta apertar `.` para repetir em outra ocorrência.

### Exercício prático

```
1. gg → /kind → n → n → { → }        navegue
2. /image → ci" → "nginx:1.26"       troque imagem
3. n → .                              repita na próxima
4. /replicas → ciW → 5               troque réplicas
5. /namespace → yiw → p              copie e cole
6. qa → j → ci" → "v2" → Esc → q     macro: desce e troca aspas
   5@a                                 executa 5 vezes
```

---

## Fase 2 — Git dentro do Neovim

**Objetivo:** fazer todo fluxo git sem sair do editor.

### Gitsigns (sinais na gutter)

| Comando                  | Efeito                  |
| ------------------------ | ----------------------- |
| `]c` / `[c`              | Próximo / anterior hunk |
| `<leader>hs`             | Stage hunk              |
| `<leader>hu`             | Undo hunk               |
| `<leader>hr`             | Reset hunk              |
| `:Gitsigns blame`        | Blame inline            |
| `:Gitsigns toggle_signs` | Mostra/esconde sinais   |

### Fugitive (git completo)

| Atalho        | Ação           |
| ------------- | -------------- |
| `<leader>gs`  | Git Status     |
| `<leader>gd`  | Git Diff       |
| `<leader>gb`  | Git Blame      |
| `<leader>gl`  | Git Log        |
| `<leader>gca` | Git Commit All |

Na tela de Status (`<leader>gs`):

| Tecla       | Ação                     |
| ----------- | ------------------------ |
| `s` / `u`   | Stage / unstage arquivo  |
| `-`         | Stage/reverse toggle     |
| `=`         | Mostrar diff             |
| `cc`        | Commit                   |
| `ca` / `cA` | Amend (sem / com edição) |
| `D`         | Diff contra HEAD         |
| `q`         | Sair                     |

### Telescope git

| Atalho       | Ação                        |
| ------------ | --------------------------- |
| `<leader>gc` | Buscar commits por mensagem |
| `<leader>gt` | Arquivos modificados        |
| `<leader>gf` | Arquivos trackeados         |

### Fluxo completo: diff → stage → commit → rebase

Dois caminhos:

| Ferramenta | Atalho | Pra quê |
| ---------- | ------ | ------- |
| **Fugitive** | `<leader>gs` | Git puro, via teclado |
| **Lazygit** (Snacks) | `<leader>gg` | Interface visual (mais fácil p/ aprender diff e rebase) |

**Com Fugitive (`<leader>gs` ⟶ tela de status):**

1. `=` sobre um arquivo → vê o diff das mudanças
2. `s` → stage (preparar) | `u` → unstage | `-` → alterna
3. `cc` → escreve a mensagem, `:wq` → commit
4. `:G rebase -i HEAD~N` → rebase (r=reword, e=edit, s=squash, d=drop)

**Entendendo os diffs:**

| Comando | O que compara |
| ------- | ---------: |
| `<leader>gd` | Working tree vs HEAD (mudanças **não commitadas**) |
| `=` no status | Mudanças **não staged** (vs index) |
| `D` no status | Arquivo inteiro vs HEAD |

**Com Lazygit (`<leader>gg`):** use as setas, `space` para stage, `c` para commit, `Enter` no diff. A interface é tipo `tig`/`lazygit` original.

### Exercício prático

```
1. <leader>gs          → veja status
    j/k navega, s stage, cc commit, :wq sai

2. <leader>gd          → diff vertical
    ]c / [c             → navegue entre hunks

3. <leader>gb          → blame
    Enter em linha      → veja commit completo

4. :G rebase -i HEAD~5 → rebase interativo
    r = reword, e = edit, s = squash, d = drop

5. <leader>gg          → lazygit visual
    space = stage, c = commit, setas navegam
```

---

## Fase 3 — LSP, YAML e K8s

**Objetivo:** autocomplete, diagnóstico e formatação para YAML K8s.

### LSP básico

| Comando     | Ação                              |
| ----------- | --------------------------------- |
| `gd`        | Go to Definition                  |
| `K`         | Hover (documentação do campo)     |
| `<space>ca` | Code Actions                      |
| `<space>rn` | Rename                            |
| `]d` / `[d` | Navega entre diagnósticos         |
| `<space>le` | Lista diagnósticos (trouble.nvim) |

### YAML + autocomplete K8s

O LSP (`jsonls` + SchemaStore.org) já entende schemas K8s:

- `Deployment` + Enter → autocomplete sugere `apps/v1`
- `kind:` → sugere tipos
- Campos específicos (`replicas`, `containers`, `selector`) têm autocomplete

### Telescope search

| Atalho      | Uso                                  |
| ----------- | ------------------------------------ |
| `<space>ff` | Buscar `deployment-prod.yaml`        |
| `<space>sg` | Buscar `ClusterIssuer` em todo repo  |
| `<space>sw` | Palavra sob cursor em todos arquivos |
| `<space>fp` | Buscar arquivos de plugins           |

### Exercício prático

```
1. Abra um deployment.yaml
   kind: → autocomplete com apiVersion
   K sobre replicas → documentação
   gd em referência → vai para definição

2. <space>sg → digite "Ingress" → Enter

3. <space>le → veja diagnósticos
   ]d / [d   → navegue entre problemas
```

### Formatação (auto-format está desligado)

O LazyVim formata no save por padrão, mas na nossa config o **auto-format foi
desligado** (`vim.g.autoformat = false`). A formatação é manual, quando você quiser:

| Atalho         | Ação                                |
| -------------- | ----------------------------------- |
| `<leader>cf`   | Formatar buffer/linha atual         |
| `<space>cF`    | Formatar languages injetadas        |
| `<leader>uf`   | Toggle auto-format global (save)    |
| `<leader>uF`   | Toggle auto-format só deste buffer  |
| `:LazyFormat`  | Formatar buffer manualmente         |
| `:LazyFormatInfo` | Ver formatadores ativos e status |

Formatadores configurados: `stylua` (lua), `shfmt` (bash/sh), `terraform_fmt`
(hcl/terraform), `ruff`/`black` (python).

---

## Fase 4 — Markdown + Obsidian

**Objetivo:** escrever documentação técnica, runbooks e notas.

### Obsidian.nvim

Workspace configurado em `~/Documents/obsidian/personal/`.

| Comando              | Ação                              |
| -------------------- | --------------------------------- |
| `:Obsidian today`    | Daily note de hoje                |
| `[[link`             | Autocomplete de links entre notas |
| `:Obsidian search`   | Busca texto em todas as notas     |
| `:Obsidian tags`     | Lista / busca tags                |
| `:Obsidian link`     | Cria link para nota nova          |
| `:Obsidian template` | Insere template                   |

### Markdown — entendendo os sinais e avisos

Três coisas diferentes aparecem ao mesmo tempo:

- **Spell check** — palavras erradas aparecem sublinhadas (vermelho/ondulado).
  `]s`/`[s` navega, `z=` vê sugestões, `zg` adiciona ao dicionário, `zug` desfaz.
- **Diagnósticos do LSP (marksman)** — links quebrados, avisos de formatação.
  `]d`/`[d` navega, `<space>le` lista todos, `<space>cd` ou `K` mostra detalhes.
- **Caracteres invisíveis (`list`)** — `·` para espaços, `$` para fim de linha.
  Desligue com `:set nolist`.

**Renderização inline** — o negrito/itálico/código aparecem visuais no markdown
graças ao `render-markdown.nvim`. Para ver o raw: `:set conceallevel=0`.
Toggle com `<space>um`.

### Markdown

````
# Título          → cabeçalho h1
## Subtítulo      → h2
- item            → lista
**bold** *itálico* → formatação
`code`            → código inline
```yaml           → bloco de código
[título](url)     → link
````

Snippets: `code` + Tab → bloco de código; `table` + Tab → tabela.

### Exercício prático

````
1. :Obsidian today      → daily note
   ## Runbook: Incidente X

2. [[k8s-commands]]     → autocomplete de link
   :Obsidian search "deployment"

3. ```yaml              → bloco de código
   apiVersion: apps/v1
   kind: Deployment
````

---

## Fase 5 — Macros e snippets

**Objetivo:** automatizar tarefas repetitivas.

### Macros na prática

Exemplo: adicionar `env:` em containers de um YAML multi-deployment.

```
qa                          → gravar
/containers                 → buscar
j                           → descer
oenv:                       → nova linha com env:
Esc                         → volta ao normal
q                           → parar
10@a                        → executar 10 vezes
```

### Snippets (friendly-snippets + LuaSnip)

| Trigger        | Expande para                 |
| -------------- | ---------------------------- |
| `deploy` + Tab | Esqueleto de Deployment YAML |
| `svc` + Tab    | Esqueleto de Service         |
| `ing` + Tab    | Esqueleto de Ingress         |
| `cm` + Tab     | Esqueleto de ConfigMap       |
| `code` + Tab   | Bloco de código Markdown     |
| `table` + Tab  | Tabela Markdown              |

> `:Inspect` mostra quais snippets estão disponíveis no contexto atual.

---

## Fase 6 — Plugins

Espaço vivo para registrar plugins que for testando e adotando.

### Instalados

| Plugin                                                                               | Pra quê                                              | Status       |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------- | ------------ |
| [CodeCompanion.nvim](https://github.com/olimorris/codecompanion.nvim)                | Prompts de IA no editor                              | ✅ Instalado |
| [render-markdown.nvim](https://github.com/MeanderingProgrammer/render-markdown.nvim) | Renderiza markdown **inline** (negrito/itálico/código visuais) | ✅ Instalado |
| [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim)             | Preview do markdown **no navegador** (⚠️ não é o inline; inline é o render-markdown) | ✅ Instalado |
| [Snacks.nvim](https://github.com/folke/snacks.nvim)                                  | Zen mode, scratchpad, lazygit, pickers, notifier     | ✅ Instalado |
| [treesj](https://github.com/Wansmer/treesj)                                           | Join/split de objetos JSON/YAML                      | ✅ Instalado |

### Para testar

| Plugin                                                     | Pra quê                                            | Status      |
| ---------------------------------------------------------- | -------------------------------------------------- | ----------- |
| [harpoon](https://github.com/ThePrimeagen/harpoon)         | Marca arquivos para acesso rápido                  | ⏳ Pendente |
| [undotree](https://github.com/mbbill/undotree)             | Visualiza histórico de alterações (árvore de undo) | ⏳ Pendente |
| [diffview.nvim](https://github.com/sindrets/diffview.nvim) | Diff visual entre branches/commits                 | ⏳ Pendente |
| [neogit](https://github.com/NeogitOrg/neogit)              | Interface git tipo lazygit dentro do nvim          | ⏳ Pendente |

---

## Próximos passos

Conforme for evoluindo, este guia pode crescer com:

- Mais plugins com exemplos de uso real
- Workflows específicos de SRE (kubectl dentro do nvim, edição de ConfigMaps remotos)
- Configurações customizadas no `options.lua`
- Integração com tmux
- Atalhos personalizados no which-key

Volte sempre à [[vim|Referência Rápida]] para consultar comandos avulsos.
