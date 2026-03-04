"use client";

import { useState } from "react";
import ModulesComparisonSection from "@/components/sections/ModulesComparisonSection";

type BillingPeriod = "monthly" | "annual";
type TabOption = "empresas" | "contador" | "comparacion" | "beneficios" | "adicionales";

const PLANS = [
  {
    id: "prueba",
    name: "Prueba",
    icon: "📄",
    isFree: true,
    monthlyPrice: 0,
    annualPrice: 0,
    badge: null,
    features: [
      "Facturación electrónica ilimitada",
      "Multibodega para múltiples sucursales",
      "App móvil para gestionar",
      "1 usuario simultáneo",
    ],
  },
  {
    id: "facturacion",
    name: "Facturación",
    icon: "📄",
    isFree: false,
    monthlyPrice: 17.99,
    annualPrice: 173.99,
    badge: null,
    features: [
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "Usuarios ilimitados",
      "Multibodega para múltiples sucursales y transferencia de productos.",
      "API para desarrolladores",
      "App móvil para gestionar en cualquier lugar.",
      "Gráficos Power BI",
    ],
  },
  {
    id: "servicios",
    name: "Servicios",
    icon: "📄",
    isFree: false,
    monthlyPrice: 29.99,
    annualPrice: 311.99,
    badge: null,
    features: [
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "Usuarios ilimitados",
      "Integración contable para tu declaración y balances.",
      "API para desarrolladores",
      "Nómina ilimitada",
      "App móvil para gestionar en cualquier lugar.",
      "Gráficos Power BI",
    ],
  },
  {
    id: "comercial",
    name: "Comercial",
    icon: "📄",
    isFree: false,
    monthlyPrice: 41.99,
    annualPrice: 431.99,
    badge: "MÁS VENDIDO",
    features: [
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "Usuarios ilimitados",
      "E-commerce gratis (tienda en línea enlazada al sistema)",
      "Multibodega para múltiples sucursales y transferencia de productos.",
      "API para desarrolladores",
      "App móvil para gestionar en cualquier lugar.",
      "Integración contable para tu declaración y balances.",
      "Nómina ilimitada",
      "Gráficos Power BI",
    ],
  },
];

const CONTADOR_PLANS = [
  {
    id: "contador-servicios",
    name: "Soy Contador Servicios",
    icon: "user",
    isFree: false,
    monthlyPrice: 17.99,
    annualPrice: 179.99,
    badge: null,
    features: [
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "Usuarios ilimitados",
      "Integración contable para tu declaración y balances",
      "App móvil para gestionar en cualquier lugar",
      "Gráficos Power BI",
    ],
  },
  {
    id: "contador-comercial",
    name: "Soy Contador Comercial",
    icon: "user",
    isFree: false,
    monthlyPrice: 23.99,
    annualPrice: 215.99,
    badge: "MÁS COMPLETO",
    features: [
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "Usuarios ilimitados",
      "Multibodega para múltiples sucursales y transferencia de productos",
      "API para desarrolladores",
      "App móvil para gestionar en cualquier lugar",
      "Integración contable para tu declaración y balances",
      "Nómina ilimitada",
      "Gráficos Power BI",
    ],
  },
];

export default function PerseoWebPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("annual");
  const [activeTab, setActiveTab] = useState<TabOption>("empresas");

  return (
    <>
      {/* Main Container with Dark Background */}
      <section className="bg-[#0a1628] py-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* Rounded Module Container */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Hero Section - Blue Header */}
            <div className="bg-gradient-to-br from-[#2563eb] via-[#3b82f6] to-[#60a5fa] px-6 py-12 text-center text-white">
              <h1 className="text-4xl font-bold md:text-5xl">Ficha Técnica PERSEO WEB</h1>
              <p className="mt-3 text-base text-blue-50">
                Información detallada sobre nuestro sistema de gestión empresarial
              </p>
              <div className="mt-3 inline-block rounded-md bg-blue-500/60 px-4 py-1.5 text-xs font-semibold">
                Validez: 31-12-2026
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white px-6">
              <div className="flex flex-wrap items-center justify-center gap-2 py-5">
                <button
                  onClick={() => setActiveTab("empresas")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                    activeTab === "empresas"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Empresas
                </button>
                <button
                  onClick={() => setActiveTab("contador")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                    activeTab === "contador"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Soy Contador
                </button>
                <button
                  onClick={() => setActiveTab("comparacion")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                    activeTab === "comparacion"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Comparación
                </button>
                <button
                  onClick={() => setActiveTab("beneficios")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                    activeTab === "beneficios"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Beneficios
                </button>
                <button
                  onClick={() => setActiveTab("adicionales")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                    activeTab === "adicionales"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Adicionales
                </button>
              </div>
            </div>

            {/* Plans Section */}
            <div className="bg-white px-6 pb-12">
              {/* Billing Period Toggle */}
              <div className="mb-10 flex justify-center">
                <div className="inline-flex rounded-full bg-gray-200 p-1">
                  <button
                    onClick={() => setBillingPeriod("monthly")}
                    className={`rounded-full px-6 py-2 font-medium transition-colors ${
                      billingPeriod === "monthly"
                        ? "bg-gray-50 text-gray-900 shadow"
                        : "text-gray-600"
                    }`}
                  >
                    Mensual
                  </button>
                  <button
                    onClick={() => setBillingPeriod("annual")}
                    className={`rounded-full px-6 py-2 font-medium transition-colors ${
                      billingPeriod === "annual"
                        ? "bg-blue-600 text-white shadow"
                        : "text-gray-600"
                    }`}
                  >
                    Anual
                  </button>
                </div>
              </div>

              {/* Plans Grid */}
              <div className={`mx-auto grid gap-5 ${
                activeTab === "contador" 
                  ? "max-w-3xl sm:grid-cols-2" 
                  : "sm:grid-cols-2 lg:grid-cols-4"
              }`}>
            {(activeTab === "contador" ? CONTADOR_PLANS : PLANS).map((plan) => (
              <div
                key={plan.id}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg"
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                    ⭐ {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${
                  plan.badge ? "bg-blue-600" : "bg-gray-800"
                }`}>
                  {plan.icon === "user" ? (
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="mb-4 text-center text-base font-bold text-gray-900">
                  {plan.name}
                </h3>

                {/* Price or Free Trial */}
                {plan.isFree ? (
                  <div className="mb-6 text-center">
                    <p className="text-base font-bold text-blue-600">¡15 días gratis!</p>
                    <button className="mt-3 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold uppercase text-white transition-all hover:bg-blue-700">
                      PROBAR AHORA
                    </button>
                  </div>
                ) : (
                  <div className="mb-6 text-center">
                    <p className="text-3xl font-bold text-gray-900">
                      ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </p>
                    <p className="text-xs text-gray-500">
                      Más Iva / {billingPeriod === "monthly" ? "Mensual" : "Anual"}
                    </p>
                    <button className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-white transition-all ${
                      plan.id === "comercial"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-[#1a1a1a] hover:bg-gray-900"
                    }`}>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Agregar al carrito
                    </button>
                  </div>
                )}

                {/* Features List */}
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs leading-relaxed text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
              </div>
            </div>

            {/* Modules Comparison */}
            <ModulesComparisonSection 
              billingPeriod={billingPeriod} 
              activeTab={activeTab}
            />
          </div>
        </div>
      </section>

      
    </>
  );
}
