"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function FacturitoPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Plan Gratis",
      subtitle: "Por la compra de tu Firma",
      price: "Gratis",
      period: "",
      features: [
        { text: "Hasta 30 facturas al año", included: true },
        { text: "Ventas", included: true },
        { text: "Compras", included: true },
        { text: "Administración", included: true },
        { text: "App Movil", included: true },
      ],
      popular: false,
      buttonText: "Más información",
      buttonClass: "bg-black hover:bg-gray-800 text-white",
    },
    {
      name: "Plan Básico",
      subtitle: "Para pequeños negocios",
      price: isAnnual ? "$14.99" : "$1.99",
      period: isAnnual ? "/año" : "/mes",
      priceNote: "+IVA",
      features: [
        { text: "150 documentos al año", included: true },
        { text: "Ventas", included: true },
        { text: "Compras", included: true },
        { text: "Administración", included: true },
        { text: "App Movil", included: true },
      ],
      popular: false,
      buttonText: "Más información",
      buttonClass: "bg-black hover:bg-gray-800 text-white",
    },
    {
      name: "Plan Pro",
      subtitle: "Sin límites para tu negocio",
      price: isAnnual ? "$29.99" : "$3.99",
      period: isAnnual ? "/año" : "/mes",
      priceNote: "+IVA",
      features: [
        { text: "Sin límite de documentos", included: true },
        { text: "Ventas", included: true },
        { text: "Compras", included: true },
        { text: "Administración", included: true },
        { text: "App Movil", included: true },
      ],
      popular: true,
      buttonText: "Más información",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-purple-300 opacity-20 text-6xl">⚡</div>
          <div className="absolute top-20 right-20 text-purple-300 opacity-20 text-6xl">⚡</div>
          <div className="absolute bottom-20 left-20 text-purple-300 opacity-20 text-6xl">⚡</div>
          <div className="absolute bottom-10 right-10 text-purple-300 opacity-20 text-6xl">⚡</div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Plans Toggle */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              ✨ {isAnnual ? "Planes Anuales" : "Planes Mensuales"}
            </button>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elige el plan perfecto para tu{" "}
              <span className="text-black">negocio</span>
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Sin costos ocultos. Cancela cuando quieras. Todos los planes son anuales.
            </p>
          </div>

          {/* Plans Cards Container */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pb-16 relative">
              {/* Mascot Image */}
              <div className="absolute -top-35 right-0 hidden lg:block z-20 pointer-events-none">
                <Image
                  src="/images/mascotaprecios.png"
                  alt="Mascota Perseo"
                  width={180}
                  height={180}
                  className="drop-shadow-2xl"
                />
              </div>

              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 shadow-xl ${
                    plan.popular ? "ring-4 ring-purple-600 scale-105 z-30" : ""
                  } transition-transform hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-40">
                      MÁS POPULAR
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-600 text-lg">{plan.period}</span>
                      )}
                    </div>
                    {plan.priceNote && (
                      <p className="text-purple-600 text-sm font-semibold mt-1">
                        {plan.priceNote}
                      </p>
                    )}
                  </div>

                  <a
                    href="/#contacto"
                    className={`w-full py-3 rounded-xl font-semibold transition-colors mb-8 flex items-center justify-center gap-2 ${plan.buttonClass}`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {plan.buttonText}
                  </a>

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-8">
            <p className="text-white text-lg">
              ¿Necesitas un plan empresarial personalizado?{" "}
              <a
                href="#contacto"
                className="font-bold underline hover:text-white/80 transition-colors"
              >
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
