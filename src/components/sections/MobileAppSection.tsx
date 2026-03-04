import Image from "next/image";

const FEATURES = [
  "Emite facturas electrónicas en segundos",
  "Gestiona tu inventario en tiempo real",
  "Genera reportes ejecutivos claros",
  "Administra tu negocio incluso sin conexión a internet",
  "Imprime recibos al instante y más...",
];

export default function MobileAppSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
              Todo tu negocio{" "}
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[#e91e63] to-[#f97316] bg-clip-text text-transparent">
                  en una sola app
                </span>
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Controla facturación, inventario y reportes en un solo lugar, estés donde estés.
            </p>

            {/* Features list */}
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* App Store Buttons */}
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f97316] to-[#e91e63] px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-105"
              >
                <PlayStoreIcon />
                <span>Descarga la app</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-105"
              >
                <AppleIcon />
                <span>Descarga la app</span>
              </a>
            </div>
          </div>

          {/* Right side - Mobile GIF */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/movile-perseo.gif"
                alt="App móvil de PERSEO"
                width={400}
                height={800}
                className="h-auto w-full max-w-[400px] drop-shadow-2xl"
                unoptimized
              />

              {/* Decorative gradient blob */}
              <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#f97316]/20 to-[#e91e63]/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#e91e63]/20 to-[#f97316]/20 blur-3xl"></div>
            </div>
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

function AppleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm10.84-8.5l2.65 2.65-7.58 4.27zM17.5 12l-2.8 1.58L12 10.92l2.7-2.66zm-.8-4.58l-7.59 4.27 4.76 4.76z" />
    </svg>
  );
}
