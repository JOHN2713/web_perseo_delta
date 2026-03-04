"use client";

import React, { useState } from "react";

interface Plan {
  id: string;
  name: string;
  description: string;
  rentaPrice: number;
  compraPrice: number;
  priceNote: string;
  features: string[];
  licenses: number;
  dashboards: number;
  reports: number;
  buttonVariant: "primary" | "secondary";
  badge?: string;
}

const PLANS: Plan[] = [
  {
    id: "facturacion",
    name: "Facturación",
    description: "Plan básico de facturación",
    rentaPrice: 310,
    compraPrice: 700,
    priceNote: "Más Iva / Anual",
    licenses: 2,
    dashboards: 30,
    reports: 30,
    buttonVariant: "primary",
    features: [
      "Sistema Multiempresa ilimitado",
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "App móvil para gestionar en cualquier lugar",
      "Usuarios del sistema ilimitados",
    ],
  },
  {
    id: "control",
    name: "Control",
    description: "Plan de control empresarial",
    rentaPrice: 560,
    compraPrice: 1400,
    priceNote: "Más Iva / Anual",
    licenses: 3,
    dashboards: 50,
    reports: 50,
    buttonVariant: "primary",
    features: [
      "Sistema Multiempresa ilimitado",
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "App móvil para gestionar en cualquier lugar",
      "Usuarios del sistema ilimitados",
    ],
  },
  {
    id: "comercial",
    name: "Comercial",
    description: "Plan comercial completo",
    rentaPrice: 660,
    compraPrice: 2000,
    priceNote: "Más Iva / Anual",
    licenses: 4,
    dashboards: 60,
    reports: 60,
    buttonVariant: "secondary",
    badge: "EL MÁS VENDIDO",
    features: [
      "Sistema Multiempresa ilimitado",
      "Facturación electrónica ilimitada",
      "Consulta automática solo con CI/RUC",
      "App móvil para gestionar en cualquier lugar",
      "Usuarios del sistema ilimitados",
    ],
  },
];

export default function PerseoPcPage() {
  const [activeTab, setActiveTab] = useState<string>("servidor");
  const [billingType, setBillingType] = useState<"renta" | "compra">("renta");

  const getTabIcon = (tabId: string) => {
    const icons: Record<string, React.JSX.Element> = {
      servidor: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      nube: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      comparacion: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      requisitos: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      beneficios: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      adicionales: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    };
    return icons[tabId];
  };

  const tabs = [
    { id: "servidor", label: "Servidor propio" },
    { id: "nube", label: "En la Nube" },
    { id: "comparacion", label: "Comparación" },
    { id: "requisitos", label: "Requisitos" },
    { id: "beneficios", label: "Beneficios" },
    { id: "adicionales", label: "Adicionales" },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-t-2xl p-12 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ficha Técnica PERSEO PC
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Información detallada sobre nuestro sistema de gestión empresarial
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm font-medium">Validez: 31-12-2026</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow-lg">
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {getTabIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Billing Toggle */}
        {activeTab === "servidor" && (
          <div className="bg-white px-8 py-6">
            <div className="mb-10 flex justify-center">
              <div className="inline-flex rounded-full bg-gray-200 p-1">
                <button
                  onClick={() => setBillingType("renta")}
                  className={`rounded-full px-6 py-2 font-medium transition-colors ${
                    billingType === "renta"
                      ? "bg-gray-50 text-gray-900 shadow"
                      : "text-gray-600"
                  }`}
                >
                  Renta
                </button>
                <button
                  onClick={() => setBillingType("compra")}
                  className={`relative rounded-full px-6 py-2 font-medium transition-colors ${
                    billingType === "compra"
                      ? "bg-orange-600 text-white shadow"
                      : "text-gray-600"
                  }`}
                >
                  Compra
                  {billingType !== "compra" && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      OFERTA
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Plans Grid */}
        {activeTab === "servidor" && (
          <div className="bg-white rounded-b-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl p-5 shadow-md border transition-all hover:shadow-lg ${
                    plan.buttonVariant === "secondary"
                      ? "border-orange-500"
                      : "border-gray-200"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`mx-auto mb-3 rounded-full flex items-center justify-center ${
                      plan.buttonVariant === "secondary"
                        ? "bg-orange-500 h-12 w-12"
                        : "bg-gray-800 h-12 w-12"
                    }`}
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-base font-bold text-center text-gray-900 mb-4">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    {/* Show discount for Comercial plan in Compra mode */}
                    {plan.id === "comercial" && billingType === "compra" && (
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-lg text-gray-400 line-through">$2500</span>
                        <span className="text-sm font-bold text-red-600">-20%</span>
                      </div>
                    )}
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      $
                      {(billingType === "renta"
                        ? plan.rentaPrice
                        : plan.compraPrice
                      ).toFixed(billingType === "compra" ? 2 : 0)}
                    </div>
                    <p className="text-xs text-gray-500">
                      Más Iva / {billingType === "renta" ? "Anual" : "Único Pago"}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 mb-6 transition-all ${
                      plan.buttonVariant === "secondary"
                        ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg"
                        : "bg-gray-800 text-white hover:bg-gray-900"
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Agregar al carrito
                  </button>

                  {/* Features */}
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs leading-relaxed text-gray-700">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-xs leading-relaxed text-gray-700">
                        {plan.licenses} Licencias del sistema instalado en tu pc
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-xs leading-relaxed text-gray-700">
                        Tableros de control 'dashboards' v {plan.dashboards} reportes
                        financieros
                      </span>
                    </li>
                    {/* Additional features for Control plan */}
                    {plan.id === "control" && (
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs leading-relaxed text-gray-700">
                          Multibodega para transferencia de productos
                        </span>
                      </li>
                    )}
                    {/* Additional features for Comercial plan */}
                    {plan.id === "comercial" && (
                      <>
                        <li className="flex items-start gap-2">
                          <svg
                            className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-xs leading-relaxed text-gray-700">
                            Multibodega para transferencia de productos
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-xs leading-relaxed text-gray-700">
                            Nómina ilimitada
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-xs leading-relaxed text-gray-700">
                            Contabilidad integrada
                          </span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== "servidor" && (
          <div className="bg-white rounded-b-2xl p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-orange-100 p-6">
                  <div className="text-orange-600 scale-[2]">
                    {getTabIcon(activeTab)}
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600">
                Contenido en desarrollo. Esta sección estará disponible próximamente.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
