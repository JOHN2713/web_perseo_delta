import Link from "next/link";
import Image from "next/image";

/* ─── Product items ─── */
const PRODUCTS = [
  {
    slug: "web",
    label: "WEB",
    subtitle: "Accede desde cualquier lugar",
    icon: <WebIcon />,
    href: "/perseo-web",
  },
  {
    slug: "pc",
    label: "PC",
    subtitle: "Máximo rendimiento contable",
    icon: <PcIcon />,
    href: "/perseo-pc",
  },
  {
    slug: "movil",
    label: "MOVIL",
    subtitle: "Control total desde tu celular",
    icon: <MovilIcon />,
    href: "/perseo-web",
  },
  {
    slug: "ecommerce",
    label: "Ecommerce",
    subtitle: "",
    icon: <EcommerceIcon />,
    href: "/perseo-web",
  },
  {
    slug: "facturacion",
    label: "Facturación rápida",
    subtitle: "",
    icon: <FacturacionIcon />,
    href: "/facturito",
  },
] as const;

/* ─── Component ─── */
export default function ProductsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0d1f5c] pb-0 pt-16"
      aria-label="El sistema más completo del país"
    >
      {/* Subtle dot-grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Soft radial glow center */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(25,70,180,0.3),transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* ── Products bar ── */}
        <div className="mx-auto mb-10 max-w-5xl rounded-2xl border border-white/20 bg-white/[0.08] px-6 py-6 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-wrap items-start justify-around gap-4">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="flex flex-col items-center gap-2 px-4 py-2 text-center transition-transform hover:scale-105"
              >
                <span className="text-white">{p.icon}</span>
                <span className="text-base font-bold tracking-wide text-white">{p.label}</span>
                {p.subtitle && (
                  <span className="text-xs leading-tight text-white/70">{p.subtitle}</span>
                )}
              </Link>
            ))}
          </div>

          {/* Líderes del mercado */}
          <p className="mt-5 border-t border-white/20 pt-4 text-center text-sm font-medium text-white/80">
            Líderes del <strong className="font-bold text-white">mercado contable</strong>
          </p>
        </div>

        {/* ── Heading ── */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            El sistema más{" "}
            <em className="not-italic text-[#e91e63]">completo</em> del país 🌎
          </h2>
        </div>

        {/* ── Subtitle ── */}
        <p className="mx-auto mb-8 max-w-xl text-center text-base text-white/80 md:text-lg">
          Centraliza ventas, inventarios, facturación y reportes en un solo sistema
        </p>

        {/* ── CTA ── */}
        <div className="mb-12 flex justify-center">
          <Link
            href="https://perseo.app/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#ec4899] to-[#f97316] px-8 py-3.5 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-pink-500/50"
          >
            Demo por 15 días
          </Link>
        </div>
      </div>

      {/* ── iMac + side screens ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8">
        <div className="flex items-end justify-center">
          <Image
            src="/images/sistemaspantallas.png"
            alt="Pantallas del sistema PERSEO"
            width={1200}
            height={600}
            className="w-full max-w-5xl object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* ── White wave transition ── */}
      <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="relative z-10 -mb-px block w-full" aria-hidden>
        <path d="M0,50 C360,90 1080,10 1440,50 L1440,100 L0,100 Z" fill="white" />
      </svg>
    </section>
  );
}

/* ─── Mock screen contents ─── */

function ScreenLeft() {
  return (
    <div className="flex h-full w-full overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="w-14 shrink-0 bg-[#f0f2f8] p-1.5 space-y-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-2 rounded bg-[#d0d5e8]" style={{ width: `${55 + (i % 3) * 15}%` }} />
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-1.5 space-y-1">
        <div className="flex gap-1">
          {["bg-orange-300","bg-green-300","bg-blue-300","bg-red-300"].map((c,i) => (
            <div key={i} className={`h-9 flex-1 rounded ${c} opacity-60`} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-7 rounded bg-[#eef0f8]" />
          ))}
        </div>
        <div className="h-12 w-full rounded bg-[#f5f6fb]" />
      </div>
    </div>
  );
}

function ScreenCenter() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white">
      {/* Top navbar */}
      <div className="flex shrink-0 items-center gap-1.5 bg-[#1a2e6e] px-3 py-1.5">
        <span className="text-[8px] font-black tracking-wider text-white">PERSEO</span>
        <div className="ml-3 flex gap-1.5">
          {[...Array(5)].map((_,i) => <div key={i} className="h-1.5 w-10 rounded bg-white/25" />)}
        </div>
        <div className="ml-auto flex gap-1">
          {[...Array(3)].map((_,i) => <div key={i} className="h-4 w-4 rounded bg-white/15" />)}
        </div>
      </div>
      {/* Sub-toolbar */}
      <div className="flex shrink-0 items-center gap-1 border-b bg-[#f5f7ff] px-3 py-1">
        {["bg-blue-500","bg-green-500","bg-orange-400","bg-red-400","bg-purple-400"].map((c,i) => (
          <div key={i} className={`h-3.5 w-12 rounded ${c} opacity-75`} />
        ))}
        <div className="ml-auto flex gap-1">
          <div className="h-3.5 w-16 rounded bg-green-500 opacity-75" />
          <div className="h-3.5 w-10 rounded bg-gray-400 opacity-50" />
        </div>
      </div>
      {/* Form grid */}
      <div className="grid grid-cols-2 gap-2 p-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-1">
            <div className="h-1.5 w-14 rounded bg-gray-300" />
            <div className="h-4 w-full rounded border border-gray-200 bg-gray-50" />
          </div>
        ))}
      </div>
      {/* Price badge */}
      <div className="flex justify-end px-3">
        <div className="rounded bg-[#1a2e6e] px-2.5 py-1 text-[9px] font-bold text-white">150.00</div>
      </div>
      {/* Table */}
      <div className="mx-3 mt-2 overflow-hidden rounded border border-gray-100">
        <div className="flex bg-[#eef0f8] px-2 py-1">
          {["Cód","Descripción","Cant","Precio","Total"].map(h => (
            <div key={h} className="flex-1 text-[6px] font-semibold text-gray-500">{h}</div>
          ))}
        </div>
        {[...Array(3)].map((_,i) => (
          <div key={i} className="flex border-t border-gray-50 px-2 py-1">
            {[...Array(5)].map((__,j) => (
              <div key={j} className="mr-1 h-2 flex-1 rounded bg-gray-100" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenRight() {
  return (
    <div className="h-full w-full overflow-hidden bg-white p-2">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="h-2 w-24 rounded bg-gray-300" />
        <div className="flex gap-1">
          {["bg-blue-400","bg-orange-400","bg-green-400"].map((c,i) => (
            <div key={i} className={`h-3 w-10 rounded ${c} opacity-70`} />
          ))}
        </div>
      </div>
      {/* Line chart */}
      <svg viewBox="0 0 100 45" className="mb-2 w-full" preserveAspectRatio="none">
        <polyline points="0,40 15,28 30,34 50,12 65,18 80,8 100,14" fill="none" stroke="#e91e63" strokeWidth="1.5" />
        <polyline points="0,42 20,36 40,30 60,22 80,25 100,20" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2,1" />
      </svg>
      {/* Bar chart */}
      <div className="flex items-end gap-0.5 mb-2" style={{ height: 48 }}>
        {[55,75,48,88,65,82,52,92,60,70,85,68].map((h,i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, background:`hsl(${195+i*10},65%,52%)` }} />
        ))}
      </div>
      <div className="space-y-1">
        {[...Array(3)].map((_,i) => (
          <div key={i} className="flex gap-1">
            <div className="h-2 w-20 rounded bg-gray-200" />
            <div className="h-2 w-12 rounded bg-gray-100" />
            <div className="ml-auto h-2 w-10 rounded bg-green-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── SVG Product Icons ─────────────────── */

function WebIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 28 a10 10 0 0 1 0-20 A10 10 0 0 1 27 17 a6 6 0 0 1 4 9" />
      <text x="20" y="24" textAnchor="middle" fontSize="8" fontWeight="800" fill="white" stroke="none" fontFamily="system-ui,sans-serif">WEB</text>
    </svg>
  );
}

function PcIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="28" height="18" rx="2" />
      <line x1="20" y1="26" x2="20" y2="31" />
      <line x1="13" y1="31" x2="27" y2="31" />
      <text x="20" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="white" stroke="none" fontFamily="system-ui,sans-serif">PC</text>
    </svg>
  );
}

function MovilIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="4" width="16" height="32" rx="3" />
      <circle cx="20" cy="31" r="1.2" fill="white" stroke="none" />
    </svg>
  );
}

function EcommerceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8 h4 l3 14 h16 l3-10 H11" />
      <circle cx="16" cy="26" r="2" />
      <circle cx="26" cy="26" r="2" />
    </svg>
  );
}

function FacturacionIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="12" width="22" height="18" rx="4" />
      <line x1="20" y1="12" x2="20" y2="7" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="15" cy="20" r="2.2" fill="white" stroke="none" />
      <circle cx="25" cy="20" r="2.2" fill="white" stroke="none" />
      <circle cx="15" cy="20" r="1" fill="#0c1a56" stroke="none" />
      <circle cx="25" cy="20" r="1" fill="#0c1a56" stroke="none" />
      <path d="M15 26 q5 3 10 0" />
    </svg>
  );
}
