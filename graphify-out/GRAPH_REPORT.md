# Graph Report - content  (2026-09-25)

## Corpus Check
- 44 files · ~73,544 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 291 nodes · 375 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Viagens e Cultura
- Dotfiles e Desktop
- Obsidian e Blog
- Criptografia, Senhas e Contato
- Carreira e Certificações
- Leitura e Idiomas
- Stack Cloud e DevOps
- Homelab e Serviços
- Neovim e Plugins
- Git e Fluxo Neovim
- Busca, Glob e Regex
- Home e Fundamentos
- Ideias Futuras (TODOs)
- Template

## God Nodes (most connected - your core abstractions)
1. `Home page` - 32 edges
2. `Homelab Project` - 31 edges
3. `Experiência Profissional` - 26 edges
4. `Neovim - Guia de Estudos` - 24 edges
5. `Conquistas, Feitos e Lembranças` - 21 edges
6. `Obsidian` - 20 edges
7. `Omarchy` - 19 edges
8. `Shows That I have Been To` - 18 edges
9. `Leitura` - 17 edges
10. `Git - mv, stash, rebase e conflitos` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Forgejo` --conceptually_related_to--> `Homelab Project`  [INFERRED]
  content/ferramentas/Obsidian.md → content/carreira/Certificações.md
- `Git` --conceptually_related_to--> `Git - mv, stash, rebase e conflitos`  [INFERRED]
  content/ferramentas/Stow Dotfiles.md → content/ferramentas/git.md
- `Tema Catppuccin no Quartz` --conceptually_related_to--> `Catppuccin`  [INFERRED]
  content/ferramentas/Quartz.md → content/ferramentas/Catppuccin.md
- `Obsidian` --references--> `kitty`  [EXTRACTED]
  content/ferramentas/Obsidian.md → content/ferramentas/macOS.md
- `Glob - Padrões de Arquivo para ls, rm, rg` --semantically_similar_to--> `Regex - Rust (PCRE) para rg e Neovim`  [INFERRED] [semantically similar]
  content/ferramentas/relembrar/glob.md → content/ferramentas/relembrar/regex.md

## Hyperedges (group relationships)
- **Fluxo de Gerenciamento de Dotfiles** — content_ferramentas_chezmoi, content_ferramentas_stow_dotfiles, content_ferramentas_git, content_ferramentas_omarchy, homelab_project [INFERRED 0.85]
- **Fluxo de Senhas e Criptografia** — content_ferramentas_gerando_senhas_fortes, content_ferramentas_gpg_gnupg, diceware_pwgen_pass, contato_gpg [EXTRACTED 0.90]
- **Stack de Publicacao do Blog** — content_ferramentas_hugo, content_ferramentas_quartz, content_ferramentas_quartz_github_pages, projetos_open_source [INFERRED 0.80]
- **Ecossistema Neovim** — content_ferramentas_vim_vi_vim_e_nvim, guia_estudos_neovim, kickstart_nvim, content_ferramentas_vim_vim_fugitive, tmux [INFERRED 0.85]
- **Stack do Homelab** — homelab_project, homelab_ansible, homelab_docker, homelab_home_assistant [INFERRED 0.85]
- **Viagens e Lembranças do Autor** — conquistas_lembrancas, conquistas_guatemala, conquistas_chile, conquistas_machu_picchu [INFERRED 0.80]

## Communities (14 total, 1 thin omitted)

### Community 0 - "Viagens e Cultura"
Cohesion: 0.06
Nodes (35): Vulcão Acatenango, Chile, Gran Torre Costanera, Curaçau, Cusco, DakhaBrakha, Vulcão Fuego, Guatemala (+27 more)

### Community 1 - "Dotfiles e Desktop"
Cohesion: 0.07
Nodes (31): Homebrew, Chezmoi, Ansible, Dotfiles, Configuração SSH, Equipamentos e Dispositivos, macOS, caffeinate (+23 more)

### Community 2 - "Obsidian e Blog"
Cohesion: 0.08
Nodes (29): Catppuccin, render-markdown.nvim, Tokyonight, Hugo, git submodule, GitHub Pages, PaperMod Theme, Obsidian (+21 more)

### Community 3 - "Criptografia, Senhas e Contato"
Cohesion: 0.08
Nodes (28): Contato via Criptografia GPG, Chave GPG E240754FEDFB405556D82A173A0990FAE12D319E, PGP, Gerando Senhas Fortes, GnuPG (gpg), Comando diceware, diceware, pass (+20 more)

### Community 4 - "Carreira e Certificações"
Cohesion: 0.09
Nodes (24): Certificações, AWS, Cloud Architect, FPGA e Hardware Reconfigurável, Google Cloud (GCP), Kubernetes, VHDL, Formação Acadêmica (+16 more)

### Community 5 - "Leitura e Idiomas"
Cohesion: 0.09
Nodes (23): Agatha Christie, Brandon Sanderson, Carl Sagan, Dan Brown, Fiódor Dostoiévski, Frank Herbert, George R.R. Martin, Isaac Asimov (+15 more)

### Community 6 - "Stack Cloud e DevOps"
Cohesion: 0.10
Nodes (21): AWS, CSS, DevOps, Docker, FPGA, GCP, GitOps, Hardware Reconfigurável (+13 more)

### Community 7 - "Homelab e Serviços"
Cohesion: 0.12
Nodes (20): Equipamentos e Dispositivos, Architecture Decision Record, Ansible, Arr Family, Docker, Docker Swarm, Forgejo, Grafana (+12 more)

### Community 8 - "Neovim e Plugins"
Cohesion: 0.11
Nodes (20): Neovim - Guia de Estudos, CodeCompanion.nvim, diffview.nvim, Gitsigns, harpoon, Kubernetes, Lazygit, LazyVim (+12 more)

### Community 9 - "Git e Fluxo Neovim"
Cohesion: 0.14
Nodes (18): Git - mv, stash, rebase e conflitos, Resolução de Conflitos, diffview.nvim, GitSigns.nvim, git merge, git mv, git rebase, git stash (+10 more)

### Community 10 - "Busca, Glob e Regex"
Cohesion: 0.14
Nodes (18): Glob - Padrões de Arquivo para ls, rm, rg, Bash, ls, Padrões Glob (wildcards), rm, Regex - Rust (PCRE) para rg e Neovim, PCRE, Regex POSIX do Vim (+10 more)

### Community 11 - "Home e Fundamentos"
Cohesion: 0.12
Nodes (17): GNU Stow - Gerenciamento de Dotfiles, Dotfiles, FDMA / TDMA / CDMA / OFDMA, Terminal Multiplexer, Home page, CNPq, DevOps, FPGA (+9 more)

### Community 12 - "Ideias Futuras (TODOs)"
Cohesion: 0.33
Nodes (6): Lista de TODOs, IA na guerra, ISO 8601, Obsidian (ontologia), rsync, VHDL e concorrência

## Knowledge Gaps
- **226 isolated node(s):** `Blog Post Template`, `AWS`, `Google Cloud (GCP)`, `Kubernetes`, `FPGA e Hardware Reconfigurável` (+221 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 226 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home page` connect `Home e Fundamentos` to `Viagens e Cultura`, `Dotfiles e Desktop`, `Obsidian e Blog`, `Criptografia, Senhas e Contato`, `Carreira e Certificações`, `Leitura e Idiomas`, `Stack Cloud e DevOps`, `Homelab e Serviços`, `Git e Fluxo Neovim`, `Busca, Glob e Regex`?**
  _High betweenness centrality (0.530) - this node is a cross-community bridge._
- **Why does `Homelab Project` connect `Homelab e Serviços` to `Dotfiles e Desktop`, `Obsidian e Blog`, `Criptografia, Senhas e Contato`, `Carreira e Certificações`, `Leitura e Idiomas`, `Home e Fundamentos`?**
  _High betweenness centrality (0.197) - this node is a cross-community bridge._
- **Why does `Experiência Profissional` connect `Stack Cloud e DevOps` to `Criptografia, Senhas e Contato`, `Viagens e Cultura`, `Home e Fundamentos`, `Carreira e Certificações`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **What connects `Blog Post Template`, `AWS`, `Google Cloud (GCP)` to the rest of the system?**
  _226 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Viagens e Cultura` be split into smaller, more focused modules?**
  _Cohesion score 0.06218487394957983 - nodes in this community are weakly interconnected._
- **Should `Dotfiles e Desktop` be split into smaller, more focused modules?**
  _Cohesion score 0.06881720430107527 - nodes in this community are weakly interconnected._
- **Should `Obsidian e Blog` be split into smaller, more focused modules?**
  _Cohesion score 0.0812807881773399 - nodes in this community are weakly interconnected._