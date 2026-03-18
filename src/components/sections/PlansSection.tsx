import Link from "next/link";

const PLANS = [
  {
    slug: "prueba",
    icon: "🌐",
    badge: null,
    name: "WEB",
    subtitle: "Prueba",
    description: "Perfecto para probar todas las funcionalidades",
    price: "Gratis",
    period: "/ 15 días",
    features: [
      "Sistema de prueba completo",
      "Documentos electrónicos limitados",
      "Productos limitados",
      "Soporte básico",
    ],
    buttonText: "Más información",
    buttonStyle: "outline",
    href: "/perseo-web",
  },
  {
    slug: "web",
    icon: "🌐",
    badge: "MÁS POPULAR",
    name: "WEB",
    subtitle: null,
    description: "Ideal para pequeñas y medianas empresas",
    price: "$17.99",
    period: "/mes + IVA",
    features: [
      "Acceso desde cualquier lugar",
      "Información 100% segura en la nube",
      "Facturación e inventarios integrados",
      "Soporte prioritario",
    ],
    buttonText: "Más información",
    buttonStyle: "solid",
    href: "/perseo-web",
  },
  {
    slug: "pc",
    icon: "💻",
    badge: null,
    name: "PC",
    subtitle: null,
    description: "Solución completa para empresas grandes",
    price: "$310.00",
    period: "/año + IVA",
    features: [
      "Gestión ilimitada de empresas",
      "Análisis avanzado de BI",
      "Sistema de nómina integrado",
      "Instalación local",
    ],
    buttonText: "Más información",
    buttonStyle: "outline",
    href: "/perseo-pc",
  },
];

export default function PlansSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Planes diseñados para tu{" "}
            <span className="bg-gradient-to-r from-[#f97316] to-[#fb923c] bg-clip-text text-transparent">
              negocio
            </span>{" "}
            🚀
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Elige el plan que mejor se adapte a las{" "}
            <span className="font-semibold text-gray-800">necesidades</span> de tu empresa. Todos incluyen{" "}
            <span className="font-semibold text-[#f97316]">
              actualizaciones gratuitas y soporte técnico
            </span>
            .
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.slug}
              className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                plan.badge
                  ? "border-4 border-[#f97316] ring-4 ring-[#f97316]/20"
                  : "border-2 border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c] px-5 py-2 text-sm font-bold text-white shadow-lg">
                    <FireIcon />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Icon and Name */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{plan.icon}</span>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#1e40af]">
                        {plan.name}
                      </span>
                      {plan.subtitle && (
                        <span className="text-lg font-semibold text-green-600">
                          {plan.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm text-gray-600">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href={plan.href}
                className={`mt-auto rounded-full px-6 py-3 text-center text-sm font-semibold transition-all ${
                  plan.buttonStyle === "solid"
                    ? "bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white shadow-lg hover:shadow-xl hover:scale-105"
                    : "border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg text-gray-600">
            ¿Necesitas algo diferente? Contáctanos para un plan personalizado
          </p>
          <a
            href="https://wa.me/593984075877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            Hablar con un asesor
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M12 2c1.5 3 3.5 5.5 3.5 7.5 0 2.5-1.5 4.5-3.5 4.5s-3.5-2-3.5-4.5c0-1 .5-2 1-3-.5 1-1.5 2.5-1.5 4 0 3 2 5.5 5 5.5s5-2.5 5-5.5c0-4-3-7.5-5.5-11z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
