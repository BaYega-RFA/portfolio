<div align="center">

# Raphael Ferreira Alves

**Infraestrutura & Segurança com IA operacional**

Analista de Infraestrutura e Suporte N3, em transição consolidada para Segurança da Informação. Atuo onde a infraestrutura real (redes, firewalls, racks, VMs) encontra a segurança e a operação de agentes de IA — localmente, com contexto e governança.

[![Portfólio](https://img.shields.io/badge/Portf%C3%B3lio-ver%20site-1F5FE0?style=for-the-badge)](https://bayega-rfa.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-raphael--ferreira--alves-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/raphael-ferreira-alves)
[![Local](https://img.shields.io/badge/Belo%20Horizonte-MG-8FD3E8?style=for-the-badge)](https://bayega-rfa.github.io/portfolio/)

</div>

---

## 👋 Sobre mim

Trabalho com infraestrutura e suporte desde 2023: microinformática, suporte N2 em ambientes hospitalares, field service e, hoje, **Analista de Infraestrutura e Suporte N3 na Global Hitss Brasil (Claro S.A.)**. Configuro switches e firewalls, faço remote hands para o time de redes, cuido de racks, inventário, VMs e suporte a Windows, Linux e macOS.

Minha virada para **Segurança da Informação** é prática: gestão de vulnerabilidades (Fortinet Security Fabric), FortiEDR, hardening, pentest, SIEM e LGPD — com certificações **Fortinet NSE 1 e NSE 2** e **Oracle Cloud Infrastructure Foundations Associate**.

Fora do expediente, construo sistemas que me ajudam a pensar: um vault de memória em Obsidian compartilhado entre IAs, automações em Python e PowerShell, transcrição de áudio com Whisper e uma dupla de VPS que virou laboratório de SSH, redes e observabilidade.

> "Se o problema aparecer, conte comigo — com calma, diagnóstico claro e solução documentada."

## 🚀 O que faço

| Área | Destaques |
|---|---|
| 🛡️ Segurança & Governança | Fortinet Security Fabric, FortiEDR, hardening, pentest, SIEM, LGPD, gestão de segredos |
| 🌐 Redes & Infraestrutura | Switches, firewalls, LAN/WAN, Active Directory, VMs, Linux, WireGuard, iptables |
| ☁️ Cloud & Monitoramento | Oracle OCI, Grafana, Zabbix, Kali Linux |
| 🤖 IAs & Automação | OpenCode, Codex, Claude Code, Groq, Ollama local, Python, PowerShell, Whisper |
| 🧠 Engenharia de contexto | Obsidian como fonte única de memória e padrões portáteis entre IAs |
| 💬 Mensageria & Integrações | Gupshup/WhatsApp, n8n, webhooks assinados, Chatwoot |

## 🔧 Projetos & entregas

Coisas que saíram do papel e rodam de verdade. Descrições generalizadas — sem IP, porta, hostname, cliente ou credencial.

- **Ponte de mensageria conversacional** — integração entre API de WhatsApp e plataforma de atendimento, com gestão de templates aprovados e validação *fail-closed* quando a configuração some. Ambientes isolados por container, deploy via git worktree para não perder releases, changelog com rollback e timers que vigiam status do número, qualidade e saldo da conta.
- **Cofre de segredos com injeção em memória** — cofre único de credenciais de máquina cifrado com `age`, com rotação controlada e inventário sem valores. Os serviços consomem o segredo via drop-in do systemd em tmpfs (0700), sem texto puro em disco; senhas humanas ficam em cofre separado.
- **Fila persistente multi-banco** — worker de processamento em lote com estágio persistente no PostgreSQL e instâncias isoladas por operação. Cada worker tem pausa por arquivo, janelas de execução e retomada automática por timer; a comunicação entre servidores passa por túnel SSH restrito.
- **Firewall automatizado e túneis privados** — cadeia de firewall com listas de IPs de CDN, fechamento de portas de aplicação na interface pública e timer de garantia. Replicação de banco e acesso a serviços internos protegidos por WireGuard e túneis SSH restritos, além de hardening de nginx.
- **Observação somente leitura e retenção LGPD** — painéis e snapshots do banco para acompanhar a operação sem risco de alteração, combinados com auditoria de capacidade. Rotina de retenção com varredura, dry-run, quarentena e restauração — nada é apagado sem decisão explícita.
- **Ponte webhook → agente → WhatsApp** — gateway que recebe tarefas por webhook, dispara um agente de código em modo não interativo e devolve o resultado em grupo de mensageria, com monitoramento de hosts, status de serviços e trilha das execuções.
- **Vault Obsidian multi-IA** — fonte única de memória, padrões e gatilhos portáteis entre OpenCode, Codex, Claude Code e outras ferramentas, com arquivos-ponteiro que carregam contexto automaticamente sem misturar memória, log e segredos.
- **Pipeline de transcrição com Whisper** — script Python com faster-whisper (PT) que transcreve áudios e os arquiva automaticamente por operação detectada no conteúdo, com índice organizado.
- **Este portfólio** — site estático single-page feito à mão em HTML e CSS moderno: tema claro/escuro, 6 cenas visuais rotativas, i18n PT/EN/RU, layout responsivo e acessível, sem frameworks, publicado via GitHub Pages.

## 📫 Contato

- **E-mail:** rapha.faalves@gmail.com
- **LinkedIn:** [linkedin.com/in/raphael-ferreira-alves](https://linkedin.com/in/raphael-ferreira-alves)
- **Portfólio:** [bayega-rfa.github.io/portfolio](https://bayega-rfa.github.io/portfolio/)

---

<p align="center">Feito com HTML, CSS e café. ☕</p>
