import Image from "next/image";
import Link from "next/link";

const TRUST_POINTS = [
  "El sistema contable más vendido del Ecuador",
  "Usado por empresas en todo Ecuador",
  "Cumple la normativa del SRI",
  "Implementación inmediata",
  "Soporte técnico especializado",
];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-[#000000]"
      aria-label="Hero principal"
    >
      {/* ── Background space image ── */}
      <Image
        src="/images/fondoestelar.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay so text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/50 to-transparent" />

      {/* ── Content grid ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-12 px-6 py-16 md:py-20">
        {/* Left column */}
        <div className="flex max-w-xl flex-col gap-6">
          {/* Logo */}
          <div className="mb-2">
            <Image
              src="/images/perseo-logo-blanco.png"
              alt="PERSEO Sistema Contable"
              width={240}
              height={65}
              priority
              className="object-contain object-left"
            />
          </div>

          {/* Headline */}
          <h1 className="text-[2.75rem] font-light leading-tight text-white md:text-5xl lg:text-6xl">
            <span className="italic">La contabilidad que</span>
            <br />
            <span className="italic">hace </span>
            <span className="font-bold italic text-[#f97316]">crecer</span>
            <span className="italic"> tu</span>
            <br />
            <span className="italic">negocio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base text-white/90 md:text-lg">
            Controla, automatiza y visualiza tus finanzas en un sólo sistema.
          </p>

          {/* CTA */}
          <Link
            href="https://perseo.app/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#fb923c] px-7 py-3.5 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-orange-500/50"
          >
            <RocketIcon className="h-5 w-5" />
            Demo por 15 días
          </Link>

          {/* Trust list */}
          <ul className="mt-2 flex flex-col gap-2.5 text-[15px] text-white/95">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — astronaut (desktop only) */}
        <div className="relative hidden h-[550px] w-[480px] lg:block xl:h-[600px] xl:w-[520px]">
          <Image
            src="/images/imagenastronauta.png"
            alt="Astronauta PERSEO"
            fill
            priority
            className="object-contain object-center drop-shadow-2xl"
            sizes="520px"
          />
        </div>
      </div>
    </section>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M5.33 3.271a3.5 3.5 0 0 1 4.472 4.474L20.647 18.59l-2.122 2.121L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.06 1.414 1.414-1.06 3.182-1.415-1.414-.707.707 1.768 1.768-1.414 1.414-1.768-1.768-.707.707 1.414 1.415-3.182 1.06-1.414-1.414 1.06-3.182 1.415 1.414.707-.707-1.768-1.768 1.414-1.414 1.768 1.768z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
