---
title: "GNU Stow — gerenciamento de dotfiles"
created: 2026-09-04
draft: false
tags:
  - linux
  - dotfiles
  - stow
  - bash
  - zsh
  - tmux
  - nvim
  - git
description: Gerenciando dotfiles com GNU Stow — sem templating, sem mágica
lang: pt-br
enableToc: true
aliases: []
---

## O que é

[GNU Stow](https://www.gnu.org/software/stow/) é um gerenciador de symlinks que uso para versionar meus #dotfiles. A abordagem é simples: os arquivos de configuração ficam no diretório que você espera (`~/.config/`, `~/.bashrc`, etc.) mas são **symlinks** apontando para o repositório git.

Sem templating, sem ferramentas mágicas. Você edita no lugar certo e o git já vê a mudança.

O repositório está no [GitHub](https://github.com/rodolfolabiapari/dotfiles).

> Antes eu usava [[chezmoi]], mas hoje prefiro a simplicidade do Stow.

## Setup inicial (máquina nova)

```bash
git clone https://github.com/rodolfolabiapari/dotfiles ~/.dotfiles
cd ~/.dotfiles
./bootstrap.sh
```

O `bootstrap.sh` detecta seu SO (Arch, Debian-based ou macOS) e:
1. Instala o `stow` automaticamente
2. Pergunta se quer instalar os pacotes base (git, zsh, tmux, nvim, starship, ripgrep, fd, eza, bat, fzf, zoxide)
3. Stow all packages, criando os symlinks de `~` para `~/.dotfiles/`

## O que é gerenciado

| Package | Path | Cross-platform |
|---------|------|:---:|
| `bash` | `~/.bashrc`, `~/.bash_profile`, `~/.profile`, `~/.bashrc.d/` | ✓ |
| `zsh` | `~/.zshrc` | ✓ |
| `scripts` | `~/.local/bin/` (scripts pessoais) | ✓ |
| `starship` | `~/.config/starship.toml` | ✓ |
| `tmux` | `~/.config/tmux/` | ✓ |
| `git` | `~/.config/git/config` | ✓ |
| `nvim` | `~/.config/nvim/` (lazy.nvim) | ✓ |
| `alacritty` | `~/.config/alacritty/` | ✓ |
| `kitty` | `~/.config/kitty/` | ✓ |
| `foot` | `~/.config/foot/` | Linux only |
| `ghostty` | `~/.config/ghostty/` | ✓ |
| `omarchy` | `~/.config/omarchy/` | Arch only |
| `btop` | `~/.config/btop/` | Linux only |

## Fluxo do dia a dia

```bash
# Edita normal — o symlink já reflete no repositório
nvim ~/.config/tmux/tmux.conf

# Commit e push
cd ~/.dotfiles
git add -A
git commit -m "tmux: change prefix to C-a"
git push
```

## Makefile shortcuts

```bash
make stow      # Re-stow all packages (refresh symlinks)
make unstow    # Remove todos os symlinks
make rehome    # Unstow → stow (refresh completo)
make list      # Lista todos os packages gerenciados
```

## Adicionar um novo package

```bash
# 1. Cria a estrutura espelhada dentro de dotfiles
mkdir -p ~/.dotfiles/newpkg/.config/newpkg

# 2. Move o config real para lá
mv ~/.config/newpkg/config.yml ~/.dotfiles/newpkg/.config/newpkg/

# 3. Stow ele
stow -d ~/.dotfiles newpkg

# 4. Commit
cd ~/.dotfiles && git add newpkg/ && git commit -m "add newpkg config"
```

## Puxar mudanças em outra máquina

```bash
cd ~/.dotfiles
git pull
make stow   # recria ou atualiza os symlinks
```