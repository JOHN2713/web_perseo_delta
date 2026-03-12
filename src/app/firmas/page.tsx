"use client";

import { Clock, Check, ArrowRight } from "lucide-react";

export default function FirmasPage() {
  const plans = [
    {
      duration: "1 AÑO",
      price: "16",
      popular: false,
    },
    {
      duration: "2 AÑOS",
      price: "26",
      popular: false,
    },
    {
      duration: "3 AÑOS",
      price: "38",
      popular: false,
    },
    {
      duration: "4 AÑOS",
      price: "48",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            PERSEO | SISTEMA CONTABLE
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solicite su Firma Electrónica
          </h1>
          <p className="text-gray-600 text-lg">Elija la duración</p>
        </div>

        {/* Plans Grid */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all ${
                  plan.popular
                    ? "ring-4 ring-blue-600 scale-105"
                    : "hover:scale-105"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      POPULAR
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center -z-10">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* Clock Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      plan.popular
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <Clock className="w-10 h-10" />
                  </div>
                </div>

                {/* Duration */}
                <div className="text-center mb-6">
                  <p
                    className={`text-sm font-semibold tracking-wider ${
                      plan.popular ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {plan.duration}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-start justify-center">
                    <span className="text-2xl font-bold text-gray-900 mt-1">
                      $
                    </span>
                    <span className="text-6xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-2xl font-bold text-gray-900 mt-1">
                      .00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">+IVA</p>
                </div>

                {/* Button */}
                <a
                  href="/#contacto"
                  className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Más información
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      plan.popular ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">✓ Activación inmediata</span>
          </div>
        </div>
      </div>
    </div>
  );
}
