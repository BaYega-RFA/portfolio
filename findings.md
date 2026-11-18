# Findings — posicionamento GitHub/README (18/11/2026)

Fonte: Gartner Newsroom (fontes primárias, acessadas 18/11/2026) + currículo/portfólio do Titi.
`websearch` falhou (HTTP 402), então a busca foi feita via `webfetch` direto nas URLs do Gartner.

## Evidências (com URL)

1. **Gartner — IA governance em I&O (16/11/2026)**
   https://www.gartner.com/en/newsroom/press-releases/2026-11-16-gartner-weak-artificial-intelligence-governance-will-lead-to-business-critical-service-disruptions-for-40-percent-of-infrastructure-and-operations-organizations-by-2028
   - 57% dos líderes de I&O dizem que a governança atual é fraca; 55% dizem que as ferramentas de risco estão desatualizadas.
   - 95% das organizações tiveram ao menos um incidente relacionado a agentes em 12 meses; só 15% têm circuit breakers automáticos.
   - Sete pilares: Identity, Guardrails, Observability, Agentic FinOps, Escalation, Containment, Data Perimeters.
   - Interpretação: há uma lacuna grande entre "usar IAs" e "governar IAs" — quem conecta Infra/Sec + agentes tem valor em alta.

2. **Gartner — tendências de engenharia de software 2026+ (18/11/2026)**
   https://www.gartner.com/en/newsroom/press-releases/2026-11-18-gartner-identifies-the-top-strategic-technology-trends-in-software-engineering-for-2026-and-beyond
   - Harness engineering: até 2028, organizações com infra de harness para agentes de código terão 60% menos defeitos pós-deploy.
   - Agent sandboxing: de 10% em 2026 para 70% das empresas em 2030.
   - Local AI: até 2028, 60% das empresas reguladas migrarão cargas de IA para infra local (soberania de dados / custo / latência).
   - Interpretação: "IA local + agentes com guardrails + infraestrutura" é o combo mais aquecido — e é exatamente o que o Titi pratica (Ollama local, OpenCode/Codex/Claude, Obsidian como contexto, SSH/VPS, LGPD).

3. **Gartner — gasto em infra de IA (12/11/2026)**
   https://www.gartner.com/en/newsroom/press-releases/2026-11-12-gartner-forecasts-artificial-intelligence-infrastructure-spending-to-represent-59-percent-of-total-global-artificial-intelligence-spending-in-2027
   - 59% do gasto global com IA em 2027 será infraestrutura de IA.
   - Interpretação: o mercado está comprando infra, não só modelo.

4. **Currículo/portfólio do Titi (fonte local)**
   - Analista de Infraestrutura e Suporte N3 (Global Hitss/Claro), desde 2023.
   - Transição consolidada para Segurança da Informação.
   - Fortinet NSE 1 e NSE 2; Oracle OCI Foundations; inglês fluente.
   - Diferencial raro: IAs/agentes no dia a dia + VPS/SSH/ED25519 + Obsidian como memória compartilhada + Whisper + LGPD.
   - **Corrigido pelo Titi:** ele **quer** mostrar trampo concreto real (é o que sustenta o portfólio). "Não forçar" = não inventar/exagerar. "Trampo" na conversa IA↔Titi é a própria sessão; fora dela é conversa normal. README/bio mostram projeto real e enxuto, sem métricas inventadas.

## Decisão

Posicionamento escolhido para o GitHub/README/bio:

> **"Infraestrutura & Segurança com IA operacional"** — o Titi não deve se vender só como "suporte N3" nem só como "segurança". O diferencial de mercado em 2026 é a ponte: quem entende de infra real (redes, firewalls, racks, VMs), segurança (Fortinet, hardening, LGPD) **e** governança/operación de agentes de IA (local, com contexto e guardrails).

Ordem de destaque na bio (do mais atrativo para o menos):
1. N3 + transição para Segurança da Informação (base sólida e empregável).
2. Fortinet NSE 1/2 + OCI (certificações que empresa filtra).
3. Redes/firewalls/cloud/automação (linguagem de vaga).
4. IAs/agentes + infra local + governança/contexto (o "x factor" 2026).
5. Link do portfólio.

O que **não** colocar na bio do perfil (fica só no README/portfólio, se quiser):
- Detalhes de projetos específicos, IPs, clientes, números de impacto — o usuário pediu para não forçar trampo concreto.

## Pendências / validação

- websearch indisponível (402); não foi possível cruzar com fontes de vagas brasileiras. Evidência usada: Gartner (primária, 2026).
- Nada publicado: README e PROFILE.md seguem locais, aguardando `sim` literal do Titi para push/perfil.
