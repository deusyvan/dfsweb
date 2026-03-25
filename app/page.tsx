"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ChevronRight, Star, Zap, Shield, TrendingUp, Warehouse, TreePine, ChevronLeft } from "lucide-react";

const imoveis = [
  {
    id: "galpao",
    label: "Galpão Comercial",
    icon: Warehouse,
    location: "Vargem Grande Paulista, SP",
    headline: "Ativo Estratégico",
    subheadline: "2.000 m² Prontos para Gerar Renda",
    copy: "No coração do corredor logístico de Vargem Grande Paulista, este galpão de 2.000 m² em 2 pavimentos sobre terreno de 3.004 m² oferece o que investidores buscam: flexibilidade, legalidade e localização. Zoneamento ZPR/C4 — pronto para uso comercial, logístico ou varejista.",
    urgency: "Oferta especial à vista até 30/03",
    badge: "OPORTUNIDADE",
    price: "Consulte",
    specs: [
      { label: "Terreno", value: "3.004 m²" },
      { label: "Galpão", value: "2.000 m²" },
      { label: "Pavimentos", value: "2" },
      { label: "Zoneamento", value: "ZPR / C4" },
      { label: "Coef. Aproveit.", value: "1,0" },
      { label: "Taxa Ocupação", value: "50%" },
      { label: "Uso Permitido", value: "Comercial / Logístico" },
      { label: "Acesso", value: "Est. da Servidão" },
    ],
    highlights: [
      "Uso comercial e logístico permitido",
      "Zoneamento regularizado C4",
      "2 pavimentos — máximo legal",
      "Localização estratégica SP",
    ],
    whatsapp: "Tenho interesse no Galpão Comercial de Vargem Grande Paulista (3.004m² / ZPR-C4). Gostaria de mais informações.",
    theme: "gold",
    accent: "#C9A84C",
    bg: "from-[#0A0A0A] to-[#111111]",
  },
  {
    id: "garopaba",
    label: "Terreno Garopaba",
    icon: MapPin,
    location: "Garopaba, Santa Catarina",
    headline: "4.025 m² no Litoral",
    subheadline: "Mais Valorizado de SC — Preço de Oportunidade",
    copy: "Garopaba é o novo destino premium do litoral sul. 4.025 m² de terreno com potencial residencial, patrimonial e estratégico — em uma das regiões de maior valorização do Brasil. O proprietário precisa de liquidez. Resultado: preço promocional para fechamento imediato.",
    urgency: "Preço promocional — fechamento imediato",
    badge: "EXCLUSIVO",
    price: "R$ 1.250.000",
    specs: [
      { label: "Área", value: "4.025 m²" },
      { label: "Localização", value: "Garopaba, SC" },
      { label: "Latitude", value: "-28.010801" },
      { label: "Longitude", value: "-48.634434" },
      { label: "Potencial", value: "Residencial / Patrimonial" },
      { label: "Condição", value: "Fechamento imediato" },
    ],
    highlights: [
      "Litoral sul com maior valorização",
      "Garopaba — destino premium SC",
      "Metragem generosa 4.025 m²",
      "Negociação rápida disponível",
    ],
    whatsapp: "Tenho interesse no Terreno de 4.025m² em Garopaba/SC (R$ 1.250.000). Gostaria de mais informações.",
    theme: "blue",
    accent: "#4A90D9",
    bg: "from-[#060810] to-[#0A0F1A]",
  },
  {
    id: "casa-campo",
    label: "Casa de Campo",
    icon: TreePine,
    location: "Vargem Grande Paulista, SP",
    headline: "400 m² de Casa",
    subheadline: "2.000 m² de Liberdade — Financiamento Direto",
    copy: "Cinco dormitórios, varanda generosa, gramado, paisagismo tropical e a sensação de ter chegado em casa — a 70 km de São Paulo. Para quem quer qualidade de vida, renda de temporada ou um ativo real fora do barulho da cidade.",
    urgency: "Financiamento direto — sem banco, sem burocracia",
    badge: "REFÚGIO",
    price: "R$ 670.000",
    specs: [
      { label: "Área Construída", value: "400 m²" },
      { label: "Terreno", value: "2.000 m²" },
      { label: "Dormitórios", value: "5" },
      { label: "Valor", value: "R$ 670.000" },
      { label: "Financiamento", value: "Direto c/ proprietário" },
      { label: "Distância SP", value: "~70 km" },
    ],
    highlights: [
      "5 dormitórios espaçosos",
      "Paisagismo tropical e gramado",
      "Financiamento direto — sem banco",
      "Potencial para renda de temporada",
    ],
    whatsapp: "Tenho interesse na Casa de Campo de 400m² em Vargem Grande Paulista (R$ 670.000). Gostaria de mais informações.",
    theme: "green",
    accent: "#4CAF7D",
    bg: "from-[#050A07] to-[#0A120C]",
    gallery: [
      { src: "/images/casa-campo/casa-campo-2.jpg", caption: "Fachada — Palmeiras Imperiais" },
      { src: "/images/casa-campo/casa-campo-4.jpg", caption: "Varanda Social Ampla" },
      { src: "/images/casa-campo/casa-campo-8.jpg", caption: "Sala de Estar" },
      { src: "/images/casa-campo/casa-campo-13.jpg", caption: "Lareira Central" },
      { src: "/images/casa-campo/casa-campo-12.jpg", caption: "Varanda Coberta" },
      { src: "/images/casa-campo/casa-campo-5.jpg", caption: "Vista do Terreno" },
    ],
  },
];

function HeroSection({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (i: number) => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#111111]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(201,168,76,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Star className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
            Portfólio Exclusivo
          </span>
          <Star className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Luiz Spinola
          </span>
          <br />
          <span className="text-[#F5F5F5]">Imóveis</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#888] text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Ativos imobiliários estratégicos para investidores exigentes.
          <br className="hidden md:block" />
          Oportunidades reais. Resultados concretos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-16 mb-12"
        >
          {[
            { n: "3", l: "Ativos Exclusivos" },
            { n: "9.000+", l: "m² em Carteira" },
            { n: "100%", l: "Regularizados" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold text-[#C9A84C]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.n}
              </div>
              <div className="text-xs text-[#666] tracking-wider uppercase mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          {imoveis.map((im, i) => {
            const Icon = im.icon;
            return (
              <button
                key={im.id}
                onClick={() => {
                  setActiveTab(i);
                  document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300"
                style={{
                  background:
                    activeTab === i
                      ? "linear-gradient(135deg, #C9A84C, #E8C96A)"
                      : "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: activeTab === i ? "#0A0A0A" : "#999",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Icon className="w-4 h-4" />
                {im.label}
                <ChevronRight className="w-3 h-3" />
              </button>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}

function Gallery({ images, accent }: { images: { src: string; caption: string }[]; accent: string }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="mt-6">
      <div className="relative rounded-xl overflow-hidden aspect-video bg-[#111]">
        <Image
          src={images[current].src}
          alt={images[current].caption}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-xs text-white/80 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
            {images[current].caption}
          </span>
          <span className="text-xs text-white/60 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
            {current + 1}/{images.length}
          </span>
        </div>
        <button onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={{ background: `${accent}cc` }}>
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button onClick={() => setCurrent((c) => (c + 1) % images.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={{ background: `${accent}cc` }}>
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
      <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all"
            style={{ borderColor: current === i ? accent : "transparent" }}>
            <Image src={img.src} alt={img.caption} fill className="object-cover" sizes="56px" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ImovelSection({
  imovel,
  isActive,
}: {
  imovel: (typeof imoveis)[0];
  isActive: boolean;
}) {
  const Icon = imovel.icon;
  const isGreen = imovel.theme === "green";
  const isGold = imovel.theme === "gold";
  const whatsappUrl = `https://wa.me/5511999882221?text=${encodeURIComponent(imovel.whatsapp)}`;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={imovel.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${imovel.bg} p-8 md:p-12`}
          style={{ border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${imovel.accent}, transparent)`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full"
                  style={{
                    background: `${imovel.accent}22`,
                    color: imovel.accent,
                  }}
                >
                  {imovel.badge}
                </span>
                <div className="flex items-center gap-1 text-[#666] text-xs">
                  <MapPin className="w-3 h-3" />
                  {imovel.location}
                </div>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold mb-2 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: imovel.accent }}
              >
                {imovel.headline}
              </h2>
              <h3
                className="text-2xl md:text-3xl text-[#F5F5F5] mb-6 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {imovel.subheadline}
              </h3>

              <p className="text-[#999] leading-relaxed mb-6">{imovel.copy}</p>

              <ul className="space-y-2 mb-8">
                {imovel.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#ccc]">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: imovel.accent }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div
                className="rounded-xl p-4 mb-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${imovel.accent}33`,
                  backdropFilter: "blur(10px)",
                }}
              >
                {imovel.price !== "Consulte" && (
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: imovel.accent }}
                  >
                    {imovel.price}
                  </div>
                )}
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: `${imovel.accent}cc` }}
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  {imovel.urgency}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-8 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: `linear-gradient(135deg, ${imovel.accent}, ${imovel.accent}bb)`,
                  color: isGold ? "#0A0A0A" : "#F5F5F5",
                }}
              >
                <Phone className="w-5 h-5" />
                Falar com Luiz Spinola
                <ChevronRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[#555] text-xs mt-2">
                WhatsApp · (11) 99988-2221
              </p>
            </div>

            {/* Right: Specs */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-4 h-4" style={{ color: imovel.accent }} />
                <span className="text-xs uppercase tracking-widest text-[#666]">
                  Dados Técnicos
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {imovel.specs.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${imovel.accent}22`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      className="text-[10px] uppercase tracking-widest mb-1"
                      style={{ color: `${imovel.accent}99` }}
                    >
                      {s.label}
                    </div>
                    <div className="text-sm font-semibold text-[#F5F5F5]">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {[
                  { icon: Shield, text: "Regularizado" },
                  { icon: TrendingUp, text: "Valorização" },
                  { icon: Zap, text: "Neg. Rápida" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-lg p-3 text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${imovel.accent}22`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <b.icon className="w-4 h-4 mx-auto mb-1" style={{ color: imovel.accent }} />
                    <div className="text-[10px] text-[#777] leading-tight">{b.text}</div>
                  </div>
                ))}
              </div>

              {isGreen && (
                <>
                  <div
                    className="mt-4 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid #2D6A4F44",
                    }}
                  >
                    <div className="text-xs text-[#4CAF7D] uppercase tracking-widest mb-2">
                      Ideal para
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Família",
                        "Lazer & Refúgio",
                        "Pets",
                        "Renda de Temporada",
                        "Expansão Futura",
                      ].map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ background: "#2D6A4F22", color: "#4CAF7D" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {"gallery" in imovel && imovel.gallery && (
                    <Gallery images={imovel.gallery} accent={imovel.accent} />
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />

      <section id="imoveis" className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#555] text-xs uppercase tracking-widest mb-3">
            Portfólio Exclusivo
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Escolha seu{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ativo
            </span>
          </h2>
        </motion.div>

        {/* Tab Bar */}
        <div
          className="flex gap-1 rounded-2xl p-1.5 mb-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(201,168,76,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {imoveis.map((im, i) => {
            const Icon = im.icon;
            return (
              <button
                key={im.id}
                onClick={() => setActiveTab(i)}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: activeTab === i ? "#1A1A1A" : "transparent",
                  color: activeTab === i ? "#C9A84C" : "#666",
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{im.label}</span>
              </button>
            );
          })}
        </div>

        {/* Imovel Content */}
        <div className="min-h-[600px]">
          {imoveis.map((im, i) => (
            <ImovelSection key={im.id} imovel={im} isActive={activeTab === i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="mt-8 py-12 px-4 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div
          className="text-2xl font-bold mb-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Luiz Spinola Imóveis
        </div>
        <p className="text-[#555] text-sm mb-6">
          Ativos imobiliários premium para investidores exigentes
        </p>
        <a
          href="https://wa.me/5511999882221"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#E8C96A] transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="font-medium">(11) 99988-2221</span>
        </a>
        <p className="text-[#333] text-xs mt-8">
          © 2026 Luiz Spinola Imóveis · Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}
