import Image from "next/image";

const STATS = [
  {
    icon: "📅",
    label: "10 AÑOS",
    description: "en el mercado.",
  },
  {
    icon: "🏅",
    label: "20 AÑOS",
    description: "de experiencia.",
  },
  {
    icon: "🏢",
    label: "+15.000",
    description: "empresas nos respaldan.",
  },
  {
    icon: "💻",
    label: "ÚNICOS",
    description: "Con sistema Web, Pc y Móvil integrados.",
  },
  {
    icon: "⚙️",
    label: "INNOVACIÓN",
    description: "Con tecnología moderna.",
  },
  {
    icon: "🏆",
    label: "TOP 3",
    description: "Sistemas contables más vendidos del Ecuador.",
  },
];

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Cuando tú{" "}
              <span className="bg-gradient-to-r from-[#e91e63] to-[#f97316] bg-clip-text text-transparent">
                creces
              </span>
              <br />
              nosotros también
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Impulsamos el <span className="font-semibold text-gray-800">éxito</span> de{" "}
              <span className="font-semibold text-gray-800">nuestros clientes</span> con un
              software contable{" "}
              <span className="font-semibold text-gray-800">estratégico</span> y{" "}
              <span className="font-semibold text-gray-800">eficiente</span>
            </p>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {STATS.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#e91e63]/10 to-[#f97316]/10">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{stat.label}</h3>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/chica_sistemas.png"
                alt="Software contable PERSEO"
                width={600}
                height={600}
                className="h-auto w-full max-w-[600px]"
                priority
              />

              {/* Decorative gradient blobs */}
              <div className="pointer-events-none absolute -right-10 top-10 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#f97316]/20 to-[#e91e63]/20 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#e91e63]/20 to-[#f97316]/20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
