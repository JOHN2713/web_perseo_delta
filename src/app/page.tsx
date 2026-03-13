import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SimpleFastSection from "@/components/sections/SimpleFastSection";
import PlansSection from "@/components/sections/PlansSection";
import MobileAppSection from "@/components/sections/MobileAppSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import GrowthSection from "@/components/sections/GrowthSection";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Perseo Sistema Contable — La contabilidad que hace crecer tu negocio"
};

export default function HomePage() {
  return (
    <>
      {/* ── Sección 1: Hero (dark + espacio) ── */}
      <HeroSection />

      {/* ── Sección 2: Productos / tabs WEB · PC · MÓVIL ── */}
      <ProductsSection />

      {/* ── Features: Cómodo / Rápido / Simple / Eficaz ── */}
      <FeaturesSection />

      {/* ── Sección 3: Tu contabilidad, más simple y más rápida ── */}
      <SimpleFastSection />

      {/* ── Sección 4: Planes ── */}
      <PlansSection />

      {/* ── Sección 5: App móvil ── */}
      <MobileAppSection />

      {/* ── Sección 6: Formulario de contacto ── */}
      <ContactFormSection />

      {/* ── Sección 7: Cuando tú creces nosotros también ── */}
      <GrowthSection />

      {/* ── Sección 8: Clientes que confían en nosotros ── */}
      <ClientsSection />

      {/* ── Sección 9: Testimonios / videos ── */}
      <TestimonialsSection />
    </>
  );
}
