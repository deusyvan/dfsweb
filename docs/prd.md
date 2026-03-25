# Luiz Spinola Imóveis — Product Requirements Document (PRD)

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-25 | 1.0 | Versão inicial | Morgan / @pm |

---

## Goals and Background Context

### Goals

- Criar uma landing page premium de alto impacto visual para apresentação a investidores
- Apresentar 3 imóveis distintos com copy persuasiva orientada a fechamento rápido
- Gerar contato direto via WhatsApp com Luiz Spinola (11 99988-2221)
- Transmitir credibilidade, sofisticação e urgência de compra
- Estar pronta para apresentação presencial a investidores em 24h

### Background Context

Luiz Spinola Imóveis possui 3 ativos imobiliários estratégicos para venda imediata: um galpão comercial/logístico em Vargem Grande Paulista, um terreno premium no litoral de Garopaba/SC e uma casa de campo em Vargem Grande Paulista. O proprietário precisa de liquidez e realizará uma apresentação para investidores em breve.

A landing page substitui materiais de apresentação convencionais (PDF, flyer) com uma experiência digital imersiva, tecnológica e sofisticada — capaz de impressionar investidores exigentes e acelerar a tomada de decisão de compra.

---

## Requirements

### Functional Requirements

- FR1: A landing page deve exibir 3 abas/seções distintas, uma para cada imóvel
- FR2: Cada aba deve conter: headline, copy de vendas, características técnicas, galeria de imagens e CTA para WhatsApp
- FR3: O botão de CTA deve abrir WhatsApp com mensagem pré-preenchida referente ao imóvel específico
- FR4: A página deve ter seção hero com nome da marca "Luiz Spinola Imóveis" e slogan
- FR5: Navegação entre abas deve ser fluida com animações suaves
- FR6: A página deve ser responsiva (desktop e mobile)
- FR7: Imóvel 1 (Galpão) deve exibir dados técnicos de zoneamento (ZPR/C4, CA, TO, pavimentos)
- FR8: Imóvel 2 (Garopaba) deve exibir mapa de localização com coordenadas
- FR9: Imóvel 3 (Casa de Campo) deve ter estilo visual diferenciado (natural/orgânico) dentro da aba
- FR10: Footer com dados de contato: Luiz Spinola, 11 99988-2221

### Non-Functional Requirements

- NFR1: Carregamento inicial em menos de 3 segundos
- NFR2: Visual de alto padrão — dark luxo como tema global, verde/madeira na aba da casa de campo
- NFR3: Funcionar perfeitamente em smartphones (apresentação mobile para investidores)
- NFR4: Sem dependência de backend — site estático (HTML/CSS/JS ou Next.js exportado)
- NFR5: Deploy possível em menos de 1 hora (Vercel ou similar)

---

## User Interface Design Goals

### Overall UX Vision

Landing page de uma página com navegação por abas. Experiência imersiva, cinematográfica e sofisticada. O visitante deve sentir que está diante de ativos premium desde o primeiro scroll.

### Key Interaction Paradigms

- Hero fullscreen com partículas ou efeito tech animado
- Navegação por abas com transição suave entre imóveis
- Cards de características com ícones e dados técnicos
- CTA fixo ou flutuante para WhatsApp
- Scroll suave (smooth scroll)

### Core Screens and Views

1. **Hero Section** — Nome da marca, slogan, navegação entre imóveis
2. **Aba Imóvel 1** — Galpão Comercial/Logístico (Vargem Grande Paulista)
3. **Aba Imóvel 2** — Terreno Premium (Garopaba/SC)
4. **Aba Imóvel 3** — Casa de Campo (Vargem Grande Paulista)
5. **Footer** — Contato, WhatsApp, créditos

### Accessibility

WCAG AA

### Branding

**Tema global:** Dark luxo — fundo preto/grafite, acentos dourados (#C9A84C) ou prata, tipografia elegante (ex: Playfair Display + Inter)

**Aba Casa de Campo:** Tema natural — tons verdes escuros, texturas de madeira, sensação de refúgio

**Paleta global:**
- Background: #0A0A0A / #111111
- Accent: #C9A84C (dourado)
- Text: #F5F5F5
- Secondary: #888888

### Target Device and Platforms

Web Responsivo — Desktop e Mobile

---

## Imóveis — Conteúdo e Copy

### Imóvel 1 — Galpão Comercial | Vargem Grande Paulista

**Headline:** "Ativo Estratégico: 2.000 m² Prontos para Gerar Renda"

**Copy:**
No coração do corredor logístico de Vargem Grande Paulista, este galpão de 2.000 m² em 2 pavimentos sobre terreno de 3.004 m² oferece o que investidores buscam: flexibilidade, legalidade e localização. Zoneamento ZPR/C4 — pronto para uso comercial, logístico ou varejista. Oferta especial à vista até 30/03. Não há margem para espera.

**Dados Técnicos:**
- Área do Terreno: 3.004 m² (3 lotes)
- Área do Galpão: 2.000 m² (2 pavimentos × 1.000 m²)
- Zoneamento: ZPR — Zona Predominantemente Residencial
- Uso Permitido: C4 — Comercial / Logístico / Varejo
- Coeficiente de Aproveitamento: 1,0
- Taxa de Ocupação: 50%
- Pavimentos: 2
- Acesso: Estrada da Servidão, Vargem Grande Paulista

**CTA:** "Falar com Luiz agora — 11 99988-2221"

---

### Imóvel 2 — Terreno Premium | Garopaba, SC

**Headline:** "4.025 m² no Litoral mais Valorizado de SC — Preço de Oportunidade"

**Copy:**
Garopaba é o novo destino premium do litoral sul. 4.025 m² de terreno com potencial residencial, patrimonial e estratégico — em uma das regiões de maior valorização do Brasil. O proprietário precisa de liquidez para outros projetos. Resultado: R$ 1.250.000 em condição promocional para fechamento imediato. Quem entende de valorização, age rápido.

**Dados Técnicos:**
- Área: 4.025 m²
- Localização: Garopaba, Santa Catarina
- Coordenadas: -28.010801, -48.634434
- Valor: R$ 1.250.000
- Condição: Preço promocional — fechamento imediato

**CTA:** "Garantir esta oportunidade — 11 99988-2221"

---

### Imóvel 3 — Casa de Campo | Vargem Grande Paulista

**Headline:** "400 m² de Casa. 2.000 m² de Liberdade. Financiamento Direto."

**Copy:**
Cinco dormitórios, varanda generosa, gramado, paisagismo tropical e a sensação de ter chegado em casa — a 70 km de São Paulo. Para quem quer qualidade de vida, renda de temporada ou um ativo real fora do barulho da cidade. R$ 670.000 com financiamento direto com o proprietário — sem banco, sem burocracia, sem espera.

**Dados Técnicos:**
- Área Construída: 400 m²
- Terreno: 2.000 m²
- Dormitórios: 5
- Valor: R$ 670.000
- Financiamento: Direto com proprietário
- Localização: Vargem Grande Paulista, SP

**Estilo Visual da Aba:** Natural/orgânico — verde escuro, madeira, refúgio

**CTA:** "Agendar visita hoje — 11 99988-2221"

---

## Technical Assumptions

### Repository Structure

Monorepo simples — projeto único

### Service Architecture

Site estático — Next.js com export estático ou HTML/CSS/JS puro (sem backend)

### Stack

- **Framework:** Next.js 14 (App Router) com export estático, ou HTML/CSS/JS vanilla
- **Estilização:** Tailwind CSS + animações com Framer Motion
- **Deploy:** Vercel (deploy em 1 clique, domínio dfsweb.com.br)
- **Ícones:** Lucide React ou Heroicons
- **Fontes:** Google Fonts — Playfair Display (títulos) + Inter (corpo)

### Testing Requirements

Manual — validação visual em desktop e mobile antes da apresentação

### Deployment Target

Vercel — deploy via `vercel --prod` ou push para branch main

---

## Success Metrics

- Landing page publicada antes da apresentação aos investidores
- Todos os 3 imóveis apresentados com copy, dados técnicos e CTA funcionando
- WhatsApp abrindo com mensagem pré-preenchida corretamente
- Aprovação visual do Luiz Spinola antes da apresentação

