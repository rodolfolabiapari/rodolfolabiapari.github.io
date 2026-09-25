# Graph Report - content  (2026-09-25)

## Corpus Check
- 44 files · ~72,903 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 224 nodes · 311 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 25 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Dotfiles, Shell e Git
- Home, Carreira e Shows
- Neovim e Terminal
- Carreira e Certificações
- Homelab e Infraestrutura
- Contato, Doações e Perfis
- Leitura, Livros e Saúde
- Viagens e Idiomas
- Criptografia e Senhas
- Blog e Geradores de Site
- Busca, Glob e Regex
- Conventional Commits

## God Nodes (most connected - your core abstractions)
1. `Home page` - 17 edges
2. `Homelab Project` - 14 edges
3. `Obsidian — Kanban, Plugins e Workflow` - 13 edges
4. `Omarchy` - 13 edges
5. `vi, vim e nvim - Minha Referência Rápida` - 13 edges
6. `Find Me` - 13 edges
7. `Shows That I have Been To` - 13 edges
8. `Git — mv, stash, rebase e conflitos` - 11 edges
9. `Neovim - Guia de Estudos` - 11 edges
10. `Projeto de Leitura de Livros` - 11 edges

## Surprising Connections (you probably didn't know these)
- `Gerando Senhas Fortes` --semantically_similar_to--> `Comando diceware`  [INFERRED] [semantically similar]
  content/ferramentas/Gerando Senhas Fortes.md → content/ferramentas/relembrar/diceware, pwgen e pass.md
- `FPGA` --conceptually_related_to--> `Equipamentos e Dispositivos`  [INFERRED]
  content/carreira/Pesquisas e Publicações Científicas.md → content/ferramentas/Equipamentos e Dispositivos.md
- `Quartz` --references--> `Tema Catppuccin`  [EXTRACTED]
  content/ferramentas/Quartz.md → content/ferramentas/Catppuccin.md
- `Chezmoi (ferramenta)` --semantically_similar_to--> `GNU Stow`  [INFERRED] [semantically similar]
  content/ferramentas/Chezmoi.md → content/ferramentas/Stow Dotfiles.md
- `vim-fugitive` --conceptually_related_to--> `Neovim - Guia de Estudos`  [INFERRED]
  content/ferramentas/vim/vim-fugitive.md → content/ferramentas/vim/Guia de Estudos sobe Neovim.md

## Hyperedges (group relationships)
- **Trajetória em Cloud** — experiencia_profissional_linuxplace, certificacoes_aws, certificacoes_gcp, certificacoes_kubernetes, certificacoes_cloud [INFERRED 0.80]
- **Evolução do gerenciamento de dotfiles** — content_ferramentas_chezmoi, content_ferramentas_stow_dotfiles, content_ferramentas_git, content_ferramentas_omarchy [EXTRACTED 0.85]
- **Stack de publicação do blog** — content_ferramentas_quartz, content_ferramentas_hugo, content_ferramentas_catppuccin_theme, github_pages, content_ferramentas_quartz_github_actions [EXTRACTED 0.85]
- **Ecossistema Neovim / Vim do Rodolfo** — vi_vim_nvim_file, guia_neovim_file, kickstart_file, fugitive_file, guia_neovim_lazyvim [EXTRACTED 1.00]
- **Viagens, shows e idiomas** — conquistas_file, content_sobre_shows_file, musica_file, content_sobre_idiomas_file [INFERRED 0.80]
- **Stack de serviços do Homelab** — homelab_file, homelab_ansible, homelab_pihole, homelab_traefik, homelab_forgejo, homelab_home_assistant [EXTRACTED 1.00]

## Communities (12 total, 1 thin omitted)

### Community 0 - "Dotfiles, Shell e Git"
Cohesion: 0.07
Nodes (48): Arch Linux, Uso de cat com rg e xargs, Pipe rg com xargs -0 e cp -t, Catppuccin, render-markdown.nvim, Tema Catppuccin, Tokyo Night, Chezmoi (+40 more)

### Community 1 - "Home, Carreira e Shows"
Cohesion: 0.07
Nodes (35): Curaçau, DakhaBrakha (banda ucraniana), Conquistas, Feitos e Lembranças, Foto com todos os integrantes do Sepultura, Teatro Municipal de Ouro Preto, Arquitetura Cloud e DevOps, Home page, FPGA, IoT e Sistemas Vestíveis (+27 more)

### Community 2 - "Neovim e Terminal"
Cohesion: 0.10
Nodes (26): tmux, Terminal Multiplexer, Redes Móveis (FDMA/TDMA/CDMA/OFDMA), Sessões tmux, Stow Dotfiles, vim-fugitive - Comandos Úteis, Git no Neovim, vim-fugitive (+18 more)

### Community 3 - "Carreira e Certificações"
Cohesion: 0.12
Nodes (23): Certificações, 4Linux, AWS Certified Cloud Practitioner, Cloud, Google Cloud Platform (GCP), IFMG, Kubernetes, Certificação em VHDL (+15 more)

### Community 4 - "Homelab e Infraestrutura"
Cohesion: 0.13
Nodes (17): Architecture Decision Record (ADR), Ansible, Docker, Homelab Project, Forgejo, Home Assistant, Jellyfin, Rationale: simples é melhor que dor de cabeça (+9 more)

### Community 5 - "Contato, Doações e Perfis"
Cohesion: 0.13
Nodes (16): GnuPG, Last.fm, Spotify, Bitcoin (carteira), Donations, Médicos Sem Fronteiras, Find Me, Last.fm (+8 more)

### Community 6 - "Leitura, Livros e Saúde"
Cohesion: 0.16
Nodes (14): Fiódor Dostoiévski (autor), Crônicas de Duna (Frank Herbert), Projeto de Leitura de Livros, Os Miseráveis, Paginômetro (77.000 páginas), Victor Hugo (autor), Tricotilomania, TOC (Transtorno Obsessivo-Compulsivo) (+6 more)

### Community 7 - "Viagens e Idiomas"
Cohesion: 0.19
Nodes (13): Vulcão Acatenango e o Fuego, Chile (Valparaíso e Pacífico), Cusco e Puno (Peru), Guatemala (Janeiro de 2026), Isla de Flores, Machu Picchu, Ruínas Maias de Tikal, Lago Titicaca (+5 more)

### Community 8 - "Criptografia e Senhas"
Cohesion: 0.18
Nodes (13): Contato via Criptografia GPG, Gerando Senhas Fortes, Bitwarden, Método Diceware, pass (password-store), Proton Pass, pwgen, Diceware é o método mais seguro (+5 more)

### Community 9 - "Blog e Geradores de Site"
Cohesion: 0.31
Nodes (10): Hugo, Tema PaperMod, Hugo (gerador de site), Quartz, ADR — Por que Quartz?, GitHub Actions, Quartz (gerador de site), Wiki-links (+2 more)

### Community 10 - "Busca, Glob e Regex"
Cohesion: 0.33
Nodes (7): :cfile, ripgrep (rg) - --vimgrep e :cfile, Glob, Neovim quickfix, Regex (Rust PCRE), ripgrep (rg), --vimgrep

## Knowledge Gaps
- **100 isolated node(s):** `Blog Post Template`, `AWS Certified Cloud Practitioner`, `Google Cloud Platform (GCP)`, `Kubernetes`, `IFMG` (+95 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 100 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home page` connect `Home, Carreira e Shows` to `Neovim e Terminal`, `Homelab e Infraestrutura`, `Contato, Doações e Perfis`, `Leitura, Livros e Saúde`, `Viagens e Idiomas`?**
  _High betweenness centrality (0.251) - this node is a cross-community bridge._
- **Why does `vi, vim e nvim - Minha Referência Rápida` connect `Neovim e Terminal` to `Home, Carreira e Shows`, `Busca, Glob e Regex`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Why does `Find Me` connect `Contato, Doações e Perfis` to `Home, Carreira e Shows`, `Homelab e Infraestrutura`, `Leitura, Livros e Saúde`, `Viagens e Idiomas`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `Blog Post Template`, `AWS Certified Cloud Practitioner`, `Google Cloud Platform (GCP)` to the rest of the system?**
  _100 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dotfiles, Shell e Git` be split into smaller, more focused modules?**
  _Cohesion score 0.06914893617021277 - nodes in this community are weakly interconnected._
- **Should `Home, Carreira e Shows` be split into smaller, more focused modules?**
  _Cohesion score 0.07058823529411765 - nodes in this community are weakly interconnected._
- **Should `Neovim e Terminal` be split into smaller, more focused modules?**
  _Cohesion score 0.09538461538461539 - nodes in this community are weakly interconnected._