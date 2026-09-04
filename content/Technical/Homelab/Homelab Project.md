---
title: Homelab Project
---

## Introduction

> [!info] Target
> Build a Homelab Project, using #Ansible, to bring all main services that I use every day near to me. Learn #Ansible, #Docker, #SLA, #Backup strategies, #HighAvailability, #Security and have fun with new projects like #HomeAssistant and #ArrFamily with #Jellyfin.

## Architecture Decision Record[^1] - #ADR

> [!info] **Decision:** The entire project is build with #ansible.
> **Why**: I chose #ansible o learn more. I already know #terraform, #terragrunt concepts and nothing #ansible.

> [!info] **Decision:** I do not choose #kubernetes.
> **Why:** I think it is more overhead than solution for now. I have only small and slow devices and kubernetes will take resources that are fundamentals to my workloads.
> If I have to choose, for now, a better solution, it will be a #dockerSwarm, but seeing my project today, I do not need it too.
>
> I have a #philosophy that, _simples is better than headache_. Today all the workloads and configurations are being setting by #ansible within #pipeline. Simple and works well.

> [!info] **Decision:** Raspberries over standard computers
> **Why:** Over all my graduating and master class years I worked with #arduino , #raspberries, #esp32 and #fpga devices.
> A have a lot of those and I do prefer those little devices which facility and create new projects with sensor and embedded projects.

---

## General Architecture

I have a lot of boards like [[Raspberry Pies]] (and its variant), which is running local services like:

For #CICD, I have:

- #Forgejo for local git server and pipeline.

#network subject I have:

- #pihole for local #DNS server for all devices and services; It runs along with
- #traefik for ingress;
- #vpn.

I am implement a better #nas. I have tested some products for my project.

For #security I use:

- #vaultWarden for key manager;

I do have some #observation modules like #grafana and #victoriaMetrics.

And #automation and #management I have:

- #HomeAssistant to control all my #smartDevices, #zigbee, #arduino, #esp32, #beaglebone, #elementIV, #Iot devices... I have a lot of those;
- I used to use #calibre but it not worked well.

---

## Future

- I am plan to improve and increase my #ArrFamily. I need a automation to search and bring new #books for my [[Reading Project]].
- Today, my best raspberry pi which is an #orangepi, it throttling with video media server. I have to buy a new device for those high process worload.
- I need a substitute for #calibre for managing my #ebooks . I am looking for a new solution that I can catalog all my physical books too. Go check a little bit of this in [[Reading Project]].
- Much of my #wireless devices are old.
  For exemple, today a #raspberrypi1b has a #armv6 32-bit processor and 100 base Ethernet[^2]. For many workload, I had to rebuild/recompile to work. That is creating more trouble than solution for me today.
  Today it runs well some little services and a backup of #pihole #HighAvailability .

[^1]: More about #ADR in [official document](https://github.com/architecture-decision-record/architecture-decision-record).

[^2]: Oficial specs in [raspberris site](https://www.raspberrypi.com/products/raspberry-pi-1-model-b-plus/).
