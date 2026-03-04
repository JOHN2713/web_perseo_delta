import type { Metadata } from "next";
import "./globals.css";
import TopBanner from "@/components/layout/TopBanner";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFab from "@/components/layout/WhatsAppFab";

export const metadata: Metadata = {
  title: {
    template: "%s | Perseo Sistema Contable",
    default: "Perseo Sistema Contable — La contabilidad que hace crecer tu negocio"
  },
  description:
    "Centraliza ventas, inventarios, facturación y reportes en un solo sistema. El sistema contable más vendido del Ecuador — cumple la normativa del SRI.",
  openGraph: {
    siteName: "Perseo Sistema Contable",
    locale: "es_EC"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <TopBanner />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
