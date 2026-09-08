# AGENTS.md — rodolfolabiapari.github.io

Personal blog/digital garden built with [Quartz v5](https://quartz.jzhao.xyz/). Content is in Portuguese (`pt-BR`).

## Quick start

```bash
npm ci                    # install deps
npx quartz plugin install # install community plugins (auto-run by prebuild hook)
npx quartz build          # build site to public/
npx quartz build --serve  # build + local dev server
```

## Developer commands

| Command                    | What it does                                                 |
| -------------------------- | ------------------------------------------------------------ |
| `npm run check`            | `tsc --noEmit` + `prettier . --check`                        |
| `npm run format`           | `prettier . --write`                                         |
| `npm test`                 | `tsx --test` (Node test runner)                              |
| `npx quartz build`         | full build (runs `prebuild` → install-plugins automatically) |
| `npx quartz build --serve` | dev server with hot reload                                   |

## Content

All content lives in `content/` as Markdown files with Obsidian-style frontmatter and `[[wiki-links]]`. Locale is `pt-BR`.

Obsidian config (`content/.obsidian/`) is versioned (except `workspace.json` which is gitignored since it contains personal window state).

## Tech stack

- **Node** >=22, **npm** >=10.9.2 (`engine-strict=true`)
- TypeScript + Preact (JSX, `jsxImportSource: preact`)
- Prettier: no semicolons, trailing commas, 100 print width
- SCSS via esbuild, CSS via LightningCSS
- Tests via `tsx --test` (Node native test runner)

## Deployment

GitHub Pages, deployed from `v5` branch. Only `.github/workflows/deploy.yml` is active here — CI workflows check for the upstream repo (`jackyzha0/quartz`) and won't run. Theme (`catppuccin.macchiato`) is checked into `quartz/styles/themes/` so no external fetch at deploy time.

## Gotchas

- `.gitignore` excludes `.quartz/` (plugin installs) and `public/` (build output) — both are ephemeral

## graphify knowledge graph

The content in `content/` has a knowledge graph built by [graphify](https://github.com/safishamsi/graphify). Use it to understand relationships between blog posts, tools, projects, and interests before answering questions or suggesting edits.

**Outputs:**

- `graphify-out/graph.json` — raw graph (256 nodes, 398 edges, 15 communities)
- `graphify-out/graph.html` — interactive visualization
- `graphify-out/GRAPH_REPORT.md` — full audit report with god nodes, surprising connections, community labels

**When to use the graph:**

- Before writing or editing a blog post — check which tools/concepts are already connected
- When asked about the author's interests, tools, or travel — the graph has community-labeled clusters
- To find non-obvious connections between posts (e.g. which tool appears across multiple areas)

**Commands:**

- `/graphify query "<pergunta>"` — answer a question from the graph (BFS traversal)
- `/graphify content/ --update` — re-extract only new/changed files after editing content
- `/graphify explain "<conceito>"` — explain what a node is and what connects to it
- `/graphify path "X" "Y"` — find shortest path between two concepts

**When adding or editing content in `content/`, always run `/graphify content/ --update` afterwards so the graph stays current.**
