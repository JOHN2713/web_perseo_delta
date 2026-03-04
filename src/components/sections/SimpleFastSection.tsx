import Image from "next/image";

const BENEFITS = [
  "Olvídate de sistemas lentos y saturados",
  "Registra toda tu información sin límites",
  "Accede desde PC, tablet o celular",
  "Tienda online integrada",
  "Consigue tu firma electrónica",
];

export default function SimpleFastSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left side - GIF */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/recorrido.gif"
              alt="Recorrido del sistema PERSEO"
              width={800}
              height={500}
              className="h-auto w-full rounded-2xl shadow-2xl"
              unoptimized
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <h2 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-[3.5rem]">
              Tu contabilidad,{" "}
              <span className="mt-2 block">
                <span className="bg-gradient-to-r from-[#e91e63] to-[#f97316] bg-clip-text text-transparent">
                  más simple
                </span>{" "}
                y{" "}
                <span className="bg-gradient-to-r from-[#f97316] to-[#fb923c] bg-clip-text text-transparent">
                  más rápida
                </span>
              </span>
            </h2>

            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Gestiona facturación, inventarios y reportes en un solo sistema, sin límites y desde cualquier dispositivo.
            </p>

            {/* Benefits list */}
            <ul className="mt-4 flex flex-col gap-3.5">
              {BENEFITS.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                  <span className="text-base text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
