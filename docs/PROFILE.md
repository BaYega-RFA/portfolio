# Perfil GitHub — BaYega-RFA

Arquivo de apoio: textos prontos para atualizar o perfil do GitHub.
Nada aqui foi aplicado ao perfil — aguardando autorização (protocolo `sim`/`não`).

## 1. Bio "About" (cole no campo `Bio` do perfil)

Curta, com o posicionamento que o mercado de TI 2026 mais valoriza (infra real + segurança + IA operacional) e trampo concreto citado de forma enxuta:

```
Infraestrutura & Segurança com IA operacional. N3 na Claro, em transição para Segurança da Informação. Fortinet NSE 1/2 + OCI. Redes, firewalls, VPS/SSH, Obsidian e agentes de IA locais. Portfólio: bayega-rfa.github.io/portfolio
```

Versão alternativa (um pouco mais curta, se o campo estiver limitado):

```
N3 → Segurança da Informação. Redes, firewalls, cloud e automação. Fortinet NSE 1/2 + OCI. VPS/SSH, Obsidian e IAs locais no dia a dia. bayega-rfa.github.io/portfolio
```

> As duas versões mostram trampo concreto (cargo, certificações, ferramentas reais) sem inventar nada e sem exagerar métricas.

## 2. Avatar (foto de perfil)

Usar a mesma foto do site, que está versionada no repositório:

- `assets/foto-raphael.webp` (51 KB — versão otimizada, recomendada)
- `assets/foto-raphael.png` (565 KB — fallback, se o GitHub exigir PNG/JPG)

O GitHub aceita PNG/JPG/GIF para avatar. Se o `.webp` não for aceito no upload, converter o `.png` para `.jpg` antes de subir. **Não** colocar token no chat — upload feito via navegador ou `gh api` com token já autenticado (`gh auth status`).

## 3. Website (campo `Website` do perfil)

```
https://bayega-rfa.github.io/portfolio/
```

## 4. Localização

```
Belo Horizonte, MG, Brazil
```

## 5. Como aplicar depois do `sim`

```powershell
# bio + website + localização via GitHub CLI (token já autenticado)
gh api -X PATCH user -f bio="Infraestrutura & Segurança com IA operacional. N3 na Claro, em transição para Segurança da Informação. Fortinet NSE 1/2 + OCI. Redes, firewalls, VPS/SSH, Obsidian e agentes de IA locais. Portfólio: bayega-rfa.github.io/portfolio" -f blog="https://bayega-rfa.github.io/portfolio/" -f location="Belo Horizonte, MG, Brazil"

# publicar o README atualizado
cd C:\DOPE\Portfolio-Raphael\site
git add README.md docs/PROFILE.md findings.md
git commit -m "Add GitHub profile README with photo, tailored bio and concrete work"
git push
```

> Avatar: feito pelo navegador em https://github.com/settings/profile (Settings → Profile → Avatar), usando `assets/foto-raphael.png`.
