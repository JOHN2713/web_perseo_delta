import Image from "next/image";

export default function ClientsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Más de 15.000 negocios confían en nosotros en todo el país
          </h2>
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center">
          <div className="relative h-24 w-full max-w-5xl md:h-32">
            <Image
              src="/images/logos blanco.png"
              alt="Logos de empresas que confían en Perseo: Colorados Vision, Mobicell, Alextech, LDNio, Asogan-SD"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
