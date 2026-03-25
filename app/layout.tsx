import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luiz Spinola Imóveis — Ativos Premium",
  description: "Portfólio exclusivo de imóveis premium para investidores. Galpão comercial, terreno em Garopaba e casa de campo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
