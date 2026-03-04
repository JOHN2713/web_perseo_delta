const FEATURES = [
  {
    slug: "comodo",
    title: "Cómodo",
    subtitle: "Gestión sin complicaciones",
    icon: "gear",
  },
  {
    slug: "rapido",
    title: "Rápido",
    subtitle: "Procesos al instante",
    icon: "bolt",
  },
  {
    slug: "simple",
    title: "Simple",
    subtitle: "Interfaz moderna e intuitiva",
    icon: "sparkle",
  },
  {
    slug: "eficaz",
    title: "Eficaz",
    subtitle: "Tu negocio en un solo lugar",
    icon: "chart",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section
      className="bg-white py-16 md:py-20"
      aria-label="Características del sistema"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.slug}
              className="flex flex-col items-center gap-5 rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              {/* Icon with gradient */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#e91e63] shadow-lg">
                {f.icon === "gear" && <GearIcon />}
                {f.icon === "bolt" && <BoltIcon />}
                {f.icon === "sparkle" && <SparkleIcon />}
                {f.icon === "chart" && <ChartIcon />}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Icons ─── */
function GearIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
      <path d="M12 2 l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
      <path d="M5 17 l.8 2.8 2.8.8-2.8.8L5 24l-.8-2.6-2.8-.8 2.8-.8L5 17z" opacity=".7" />
      <path d="M19 3l.6 2 2 .6-2 .6L19 8l-.6-2-2-.6 2-.6L19 3z" opacity=".7" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}
