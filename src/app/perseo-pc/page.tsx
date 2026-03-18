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

interface ModuleFeature {
  name: string;
  fact: boolean;
  control: boolean;
  com: boolean;
  prime: boolean;
}

interface ModuleCategoryProps {
  title: string;
  features: ModuleFeature[];
}

const ModuleCategory: React.FC<ModuleCategoryProps> = ({ title, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-gray-200">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 text-left transition-colors hover:bg-gray-50 sm:px-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-orange-600">{title}</h3>
          <svg
            className={`h-4 w-4 text-orange-600 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Features */}
      {isExpanded && (
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 border-t border-gray-100 px-4 py-2.5 hover:bg-gray-50 sm:grid-cols-6 sm:gap-4 sm:px-6"
            >
              <div className="text-[11px] text-gray-700 sm:col-span-2 sm:text-xs">{feature.name}</div>
              <div className="flex justify-center">
                {feature.fact && (
                  <svg className="h-3.5 w-3.5 text-orange-500 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="flex justify-center">
                {feature.control && (
                  <svg className="h-3.5 w-3.5 text-orange-500 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="flex justify-center">
                {feature.com && (
                  <svg className="h-3.5 w-3.5 text-orange-500 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="flex justify-center">
                {feature.prime && (
                  <svg className="h-3.5 w-3.5 text-orange-500 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

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
    compraPrice: 2500,
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
  const [cloudBillingType, setCloudBillingType] = useState<"pvp" | "renovacion">("pvp");

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
      <div className="mx-auto max-w-[95%] px-2 pt-20 pb-12 sm:px-4 lg:max-w-[1600px]">
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
          <div className="bg-white rounded-b-2xl p-4 sm:p-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                  <a
                    href="/#contacto"
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Más información
                  </a>

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

            {/* Modules Comparison Section */}
            <div className="bg-white px-2 pb-8 pt-6 sm:px-4">
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 text-white">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <div>
                      <h2 className="text-lg font-bold">Módulos del Sistema</h2>
                      <p className="mt-0.5 text-xs text-orange-50">Funcionalidades disponibles en cada versión</p>
                    </div>
                  </div>
                </div>

                {/* Table Header */}
                <div className="sticky top-0 z-10 border-b border-gray-200 bg-gray-50">
                  <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-2 px-4 py-3 sm:grid-cols-6 sm:gap-4 sm:px-6">
                    <div className="text-xs font-semibold uppercase text-gray-500 sm:col-span-2">Detalle</div>
                    <div className="text-center">
                      <div className="text-[10px] font-semibold text-orange-600 sm:text-xs">FACT.</div>
                      <div className="mt-0.5 text-[9px] text-gray-600 sm:text-xs">${billingType === "renta" ? "310" : "700"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] font-semibold text-orange-600 sm:text-xs">CONTROL</div>
                      <div className="mt-0.5 text-[9px] text-gray-600 sm:text-xs">${billingType === "renta" ? "560" : "1400"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] font-semibold text-orange-600 sm:text-xs">COM.</div>
                      <div className="mt-0.5 text-[9px] text-gray-600 sm:text-xs">${billingType === "renta" ? "660" : "2000"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] font-semibold uppercase text-orange-600 sm:text-xs">PRIME</div>
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="bg-white">
                  {/* FACTURACIÓN Category */}
                  <ModuleCategory
                    title="FACTURACIÓN"
                    features={[
                      { name: "Facturación", fact: true, control: true, com: true, prime: true },
                      { name: "Punto de Venta TPV con cierre de Caja", fact: true, control: true, com: true, prime: true },
                      { name: "Proformas y Pedidos", fact: true, control: true, com: true, prime: true },
                      { name: "Ficha de Clientes", fact: true, control: true, com: true, prime: true },
                      { name: "Entregas Parciales de Mercaderías Facturadas", fact: false, control: true, com: true, prime: true },
                      { name: "Entregas por Facturar", fact: false, control: true, com: true, prime: true },
                    ]}
                  />

                  {/* COMPRAS Category */}
                  <ModuleCategory
                    title="COMPRAS"
                    features={[
                      { name: "Compras de Productos y Servicios, Liquidaciones de Compras", fact: true, control: true, com: true, prime: true },
                      { name: "Importación de Compras Electrónicas directo desde el SRI", fact: true, control: true, com: true, prime: true },
                      { name: "Ordenes y Recepciones de Compras", fact: false, control: true, com: true, prime: true },
                      { name: "Liquidación de Importaciones", fact: false, control: false, com: true, prime: true },
                    ]}
                  />

                  {/* INVENTARIOS Category */}
                  <ModuleCategory
                    title="INVENTARIOS"
                    features={[
                      { name: "Gestión de Productos", fact: true, control: true, com: true, prime: true },
                      { name: "Creación de ítems de servicios", fact: true, control: true, com: true, prime: true },
                      { name: "Ingresos y Salidas de Inventarios", fact: false, control: true, com: true, prime: true },
                      { name: "Manejo de bodegas y sucursales, Transferencias", fact: false, control: true, com: true, prime: true },
                      { name: "Análisis de Rotación de Inventarios y Compras", fact: false, control: true, com: true, prime: true },
                      { name: "Kárdex de Movimientos de Productos", fact: false, control: true, com: true, prime: true },
                      { name: "Lotes de Caducidad", fact: false, control: false, com: true, prime: true },
                    ]}
                  />

                  {/* CUENTAS POR COBRAR Category */}
                  <ModuleCategory
                    title="CUENTAS POR COBRAR"
                    features={[
                      { name: "Estado de Cuenta y Cobros", fact: true, control: true, com: true, prime: true },
                      { name: "Liquidación de Tarjetas de Crédito", fact: true, control: true, com: true, prime: true },
                      { name: "Gestión de Efectivo, TC, Cheques, Cheques Posfechados", fact: true, control: true, com: true, prime: true },
                    ]}
                  />

                  {/* CUENTAS POR PAGAR Category */}
                  <ModuleCategory
                    title="CUENTAS POR PAGAR"
                    features={[
                      { name: "Estado de Cuenta y Pago a Proveedores", fact: true, control: true, com: true, prime: true },
                      { name: "Gestión de Efectivo, TC, Cheques, Cheques Posfechados", fact: true, control: true, com: true, prime: true },
                    ]}
                  />

                  {/* CONTABILIDAD Category */}
                  <ModuleCategory
                    title="CONTABILIDAD"
                    features={[
                      { name: "Contabilidad 100% integrada y Balances", fact: false, control: false, com: true, prime: true },
                      { name: "Plan de Cuentas", fact: false, control: false, com: true, prime: true },
                      { name: "Libro Diario", fact: false, control: false, com: true, prime: true },
                      { name: "Libro Mayor", fact: false, control: false, com: true, prime: true },
                      { name: "Balance de Comprobación", fact: false, control: false, com: true, prime: true },
                      { name: "Estado de Resultados", fact: false, control: false, com: true, prime: true },
                      { name: "Balance General", fact: false, control: false, com: true, prime: true },
                      { name: "Centro de Costos", fact: false, control: false, com: true, prime: true },
                    ]}
                  />

                  {/* NÓMINA Category */}
                  <ModuleCategory
                    title="NÓMINA"
                    features={[
                      { name: "Roles de Nómina (Gestión de Talento Humano y Provisiones)", fact: false, control: false, com: true, prime: true },
                      { name: "Contabilidad integrada", fact: false, control: false, com: true, prime: true },
                    ]}
                  />

                  {/* BANCOS Category */}
                  <ModuleCategory
                    title="BANCOS"
                    features={[
                      { name: "Conciliación Bancaria", fact: false, control: false, com: true, prime: true },
                    ]}
                  />

                  {/* RESTAURANTES Category */}
                  <ModuleCategory
                    title="RESTAURANTES"
                    features={[
                      { name: "Facturación Restaurante (comandas y mesas)", fact: false, control: false, com: true, prime: true },
                    ]}
                  />

                  {/* PRODUCCIÓN Category */}
                  <ModuleCategory
                    title="PRODUCCIÓN"
                    features={[
                      { name: "Recetas y Órdenes de Producción", fact: false, control: false, com: true, prime: true },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* En la Nube Section */}
        {activeTab === "nube" && (
          <div className="bg-white rounded-b-2xl">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-6 text-white sm:px-8">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <div>
                  <h2 className="text-xl font-bold">PERSEO En la Nube</h2>
                  <p className="text-sm text-orange-50">Planes Prime y ContatPlus — Precios anuales</p>
                </div>
              </div>
            </div>

            {/* Billing Toggle */}
            <div className="bg-white px-2 py-6 sm:px-4">
              <div className="flex justify-center">
                <div className="inline-flex rounded-full bg-gray-200 p-1">
                  <button
                    onClick={() => setCloudBillingType("pvp")}
                    className={`rounded-full px-6 py-2 font-medium transition-colors ${
                      cloudBillingType === "pvp"
                        ? "bg-orange-600 text-white shadow"
                        : "text-gray-600"
                    }`}
                  >
                    PVP 1er Año
                  </button>
                  <button
                    onClick={() => setCloudBillingType("renovacion")}
                    className={`rounded-full px-6 py-2 font-medium transition-colors ${
                      cloudBillingType === "renovacion"
                        ? "bg-gray-50 text-gray-900 shadow"
                        : "text-gray-600"
                    }`}
                  >
                    Renovación
                  </button>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div className="px-2 pb-8 sm:px-4">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Para Empresa</h3>
                  <p className="text-sm text-gray-600">PERSEO PRIME — Sistema en la nube para empresas</p>
                </div>
              </div>

              {/* Prime Plans Grid */}
              <div className="grid gap-8 md:grid-cols-3">
                {/* Prime Pro */}
                <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all hover:border-orange-300 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="mb-4 text-lg font-bold text-gray-900">Prime Pro</h4>
                  <div className="mb-6 border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-gray-900">
                      ${cloudBillingType === "pvp" ? "1100" : "970"}
                    </div>
                    <p className="text-xs text-gray-500">
                      Más Iva / {cloudBillingType === "pvp" ? "Anual" : "Renovación"}
                    </p>
                  </div>
                  <a href="/#contacto" className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-900">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Más información
                  </a>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">12 meses de servicio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">8 H implementación personalizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">Servidor Básico CPU AMD 8 núcleos RAM 16GB Almacenamiento 240GB SSD M.2 Usuarios 1 a 20</span>
                    </li>
                  </ul>
                </div>

                {/* Prime Premium */}
                <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all hover:border-orange-300 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="mb-4 text-lg font-bold text-gray-900">Prime Premium</h4>
                  <div className="mb-6 border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-gray-900">
                      ${cloudBillingType === "pvp" ? "1450" : "1300"}
                    </div>
                    <p className="text-xs text-gray-500">
                      Más Iva / {cloudBillingType === "pvp" ? "Anual" : "Renovación"}
                    </p>
                  </div>
                  <a href="/#contacto" className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-900">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Más información
                  </a>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">12 meses de servicio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">8 H implementación personalizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">Servidor Básico CPU INTEL 16 NÚCLEOS RAM 32GB Almacenamiento 320GB SSD M.2 Usuarios 21 a 40</span>
                    </li>
                  </ul>
                </div>

                {/* Prime Platinum */}
                <div className="relative rounded-2xl border-2 border-orange-400 bg-white p-6 shadow-lg transition-all hover:border-orange-500 hover:shadow-xl">
                  <div className="absolute -top-3 right-4 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold text-orange-600 shadow-md">
                    ⭐ MÁS COMPLETO
                  </div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600">
                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="mb-4 text-lg font-bold text-gray-900">Prime Platinum</h4>
                  <div className="mb-6 border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-gray-900">
                      ${cloudBillingType === "pvp" ? "1550" : "1420"}
                    </div>
                    <p className="text-xs text-gray-500">
                      Más Iva / {cloudBillingType === "pvp" ? "Anual" : "Renovación"}
                    </p>
                  </div>
                  <a href="/#contacto" className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-700">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Más información
                  </a>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">12 meses de servicio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">8 H implementación personalizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-700">Servidor Dedicado CPU INTEL XEON 4 NÚCLEOS 8 HILOS 3.8Ghz / 4.2 GHz RAM 32GB Almacenamiento 450GB SSD NVME Soft RAID Usuarios 41 a 70</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Ficha Técnica
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-orange-600 bg-orange-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-900">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Tabla PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comparación Section */}
        {activeTab === "comparacion" && (
          <div className="bg-white rounded-b-2xl">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-6 text-white sm:px-8">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <div>
                  <h2 className="text-xl font-bold">Comparación PERSEO PC vs PERSEO PRIME</h2>
                  <p className="text-sm text-orange-50">Características principales de cada versión</p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="px-2 py-8 sm:px-4">
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                {/* Table Header */}
                <div className="bg-gray-50 border-b border-gray-200">
                  <div className="grid grid-cols-3 gap-4 px-6 py-4">
                    <div className="text-xs font-semibold uppercase text-gray-500">Característica</div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-800">PERSEO PC</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600">PERSEO PRIME</div>
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="bg-white divide-y divide-gray-100">
                  {/* Row 1 */}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-gray-700">Sistema instalado en el propio Servidor del Cliente</div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-gray-700">Sistema instalado en un Servidor rentado en la nube</div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-gray-700">Estaciones Trabajo instaladas en las computadoras del cliente conectadas por red o internet por IP</div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-gray-700">Los usuarios ingresan al sistema desde cualquier navegador de una computadora</div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-gray-700">Multiempresa, Multiusuario con permisos, Multibodega</div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Ficha Técnica
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-orange-600 bg-orange-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-900">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Tabla PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Requisitos Section */}
        {activeTab === "requisitos" && (
          <div className="bg-white rounded-b-2xl">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-6 text-white sm:px-8">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <div>
                  <h2 className="text-xl font-bold">Requisitos Técnicos</h2>
                  <p className="text-sm text-orange-50">Especificaciones de hardware por tamaño de empresa</p>
                </div>
              </div>
            </div>

            {/* Requirements Cards */}
            <div className="px-2 py-8 sm:px-4">
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Micro / Pequeñas Empresas */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-4 text-white">
                    <h3 className="text-base font-bold uppercase">Micro / Pequeñas Empresas</h3>
                    <p className="mt-1 text-xs text-orange-50">Hasta 550 transacciones diarias, hasta 10 estaciones</p>
                  </div>
                  
                  <div className="p-5">
                    {/* Requisitos Mínimos */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-bold uppercase text-orange-600">Requisitos Mínimos</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Sistema operativo: Windows 10 Pro o Windows 11 Pro</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Protección de software: Antivirus de preferencia ESET NOD32</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>CPU: Intel Core i5, AMD Ryzen 5 de 6 núcleos. Soporte multihilo</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>RAM: 16GB DDR4</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Almacenamiento: 1TB en SSD</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Alimentación de energía: UPS con capacidad de 30 minutos</span>
                        </li>
                      </ul>
                    </div>

                    {/* Recomendados */}
                    <div>
                      <h4 className="mb-3 text-sm font-bold uppercase text-green-600">Recomendados</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Sistema operativo: Windows Server 2019 o superior</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Protección de software: Antivirus de preferencia ESET NOD32</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>CPU: Intel i7, AMD Ryzen 7 de 6 núcleos. Soporte multihilo</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>RAM: 16GB DDR4</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Almacenamiento: 2TB en SSD NVMe</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Alimentación y energía: UPS con capacidad de 30 minutos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Medianas Empresas */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-4 text-white">
                    <h3 className="text-base font-bold uppercase">Medianas Empresas</h3>
                    <p className="mt-1 text-xs text-orange-50">Hasta 1600 transacciones diarias, con hasta 25 estaciones</p>
                  </div>
                  
                  <div className="p-5">
                    {/* Requisitos Mínimos */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-bold uppercase text-orange-600">Requisitos Mínimos</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Sistema operativo: Windows Server 2019</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Protección de software: Antivirus de preferencia ESET NOD32</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>CPU: Intel i7, AMD Ryzen 7 de 8 núcleos. Soporte multihilo</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>RAM: 16GB DDR4</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Almacenamiento: 2TB en SSD</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Alimentación y energía: UPS con capacidad de 30 minutos</span>
                        </li>
                      </ul>
                    </div>

                    {/* Recomendados */}
                    <div>
                      <h4 className="mb-3 text-sm font-bold uppercase text-green-600">Recomendados</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Sistema operativo: Windows Server 2019</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Protección de software: Antivirus de preferencia ESET NOD32</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>CPU: Intel Xeon Gold, AMD EPYC 12 núcleos. Soporte multihilo</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>RAM: 32GB DDR4</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Almacenamiento: 4TB en SSD NVMe</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Alimentación y energía: UPS con capacidad de 30 minutos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Grandes Empresas */}
                <div className="overflow-hidden rounded-2xl border-2 border-orange-400 bg-white shadow-lg">
                  <div className="bg-gradient-to-r from-orange-700 to-orange-600 px-5 py-4 text-white">
                    <h3 className="text-base font-bold uppercase">Grandes Empresas</h3>
                    <p className="mt-1 text-xs text-orange-50">Más de 2700 transacciones diarias, más de 25 estaciones</p>
                  </div>
                  
                  <div className="p-5">
                    {/* Requisitos Mínimos */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-bold uppercase text-orange-600">Requisitos Mínimos</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Sistema operativo: Windows Server 2022 o superior</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Protección de software: Antivirus de preferencia ESET NOD32</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>CPU: Intel Xeon Gold, AMD EPYC 16 núcleos. Soporte multihilo</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>RAM: 64GB DDR4</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Almacenamiento: 4TB en SSD</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                          <span>Alimentación y energía: UPS con capacidad de 30 minutos</span>
                        </li>
                      </ul>
                    </div>

                    {/* Recomendados */}
                    <div>
                      <h4 className="mb-3 text-sm font-bold uppercase text-green-600">Recomendados</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Sistema operativo: Windows Server 2022 o superior</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Protección de software: Antivirus de preferencia ESET NOD32</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>CPU: Intel Xeon Gold, AMD EPYC 20 núcleos. Soporte multihilo</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>RAM: 96GB DDR4 O DDR5</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Almacenamiento: 4TB en SSD NVMe</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="mt-0.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
                          <span>Alimentación y energía: UPS con capacidad de 30 minutos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Ficha Técnica
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-orange-600 bg-orange-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-900">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Tabla PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Beneficios Section */}
        {activeTab === "beneficios" && (
          <div className="bg-white rounded-b-2xl">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-6 text-white sm:px-8">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h2 className="text-xl font-bold">Beneficios Incluidos</h2>
                  <p className="text-sm text-orange-50">En las versiones PERSEO PC y PERSEO PRIME</p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="px-2 py-8 sm:px-4">
              <div className="grid gap-4 md:grid-cols-2">
                {/* Benefit 1 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    1
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Emisión ilimitada de Facturación Electrónica, NC, ND, Guía de Remisión, Liquidación de Compra y Retenciones
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    2
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Actualizaciones Automáticas periódicas y continuas por cambios SRI y mejoras del sistema, sin necesidad de técnicos
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    3
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Videos Tutoriales con acceso ilimitado en nuestra Web de cada módulo para su capacitación y retroalimentación continua
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    4
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Capacitaciones en vivo y grabadas en Meet del manejo del Sistema y su parametrización
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    5
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    36 Gráficos BI Business Inteligence / Tableros de Control con el uso de datos de ventas para facilitar la toma de decisiones
                  </p>
                </div>

                {/* Benefit 6 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    6
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Seguridad de toda la información con respaldos automáticos directos a la Nube a Dropbox sin costos adicionales
                  </p>
                </div>

                {/* Benefit 7 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    7
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Digitando solo la Cédula o RUC crea Clientes y Proveedores, con Nombre y Dirección Ahorrando tiempo en tus procesos
                  </p>
                </div>

                {/* Benefit 8 */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-300 hover:bg-orange-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                    8
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Inteligencia Artificial Integrada apóyate en la IA para mejorar tu productividad en el trabajo
                  </p>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Ficha Técnica
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-orange-600 bg-orange-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-900">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Tabla PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Adicionales Section */}
        {activeTab === "adicionales" && (
          <div className="bg-white rounded-b-2xl">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-6 text-white sm:px-8">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <div>
                  <h2 className="text-xl font-bold">Módulos Adicionales</h2>
                  <p className="text-sm text-orange-50">Complementos contratables</p>
                </div>
              </div>
            </div>

            {/* Additional Modules */}
            <div className="px-2 py-8 sm:px-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Module 1: Perseo Send WhatsApp */}
                <div className="overflow-hidden rounded-xl border-2 border-green-300 bg-white shadow-md">
                  <div className="flex items-center justify-between bg-orange-600 px-5 py-3 text-white">
                    <h3 className="text-base font-bold uppercase">Perseo Send WhatsApp</h3>
                    <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                      Incluido
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-sm font-semibold text-green-600">Gratis</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Permite enviar Texto + Fotos + Catálogos + Archivos PDF</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Permite enviar mensaje de Cobranza a sus clientes con cuentas vencidas</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Module 2: Talleres Automotrices */}
                <div className="overflow-hidden rounded-xl border-2 border-orange-200 bg-white shadow-md transition-all hover:border-orange-400 hover:shadow-lg">
                  <div className="bg-orange-600 px-5 py-3 text-white">
                    <h3 className="text-base font-bold uppercase">Módulo de Talleres Automotrices</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-sm font-semibold text-orange-600">Renta anual: USD 120.00</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Recepción de Vehículos y Órdenes de Trabajo, Gestión por Cliente y por Vehículo</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Seguimiento de Estado Garantías, Consumo de Repuestos</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Historial de Mantenimiento por Vehículo</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Module 3: Garantías y Servicio Técnico */}
                <div className="overflow-hidden rounded-xl border-2 border-orange-200 bg-white shadow-md transition-all hover:border-orange-400 hover:shadow-lg">
                  <div className="bg-orange-600 px-5 py-3 text-white">
                    <h3 className="text-base font-bold uppercase">Módulo de Garantías y Servicio Técnico</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-sm font-semibold text-orange-600">Renta anual: USD 120.00</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Recepción de Garantías e impresión, Gestión y asignación de Garantías por Técnico</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Module 4: Conexión con API a Power BI */}
                <div className="overflow-hidden rounded-xl border-2 border-orange-200 bg-white shadow-md transition-all hover:border-orange-400 hover:shadow-lg">
                  <div className="bg-orange-600 px-5 py-3 text-white">
                    <h3 className="text-base font-bold uppercase">Conexión con API a Power BI</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-sm font-semibold text-orange-600">Renta anual: USD 100</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Conectado a MS PowerBI por medio de nuestra API</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Toma mejores decisiones con gráficos gerenciales predefinidos</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Module 5: Plugin WooCommerce */}
                <div className="overflow-hidden rounded-xl border-2 border-orange-200 bg-white shadow-md transition-all hover:border-orange-400 hover:shadow-lg">
                  <div className="bg-orange-600 px-5 py-3 text-white">
                    <h3 className="text-base font-bold uppercase">Plugin WooCommerce de WordPress</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-sm font-semibold text-orange-600">Renta anual: USD 300</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Plugin para conectar tu Tienda Online hecha en Woocommerce</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Sincroniza Productos, Precios, Fotos, Clientes desde PerseoPC hacia tu Tienda Online</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Sincroniza nuevos Clientes y Pedidos desde tu Tienda Online a PerseoPC</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>No incluye horas de implementación. Costo hora $50 de ser requerida</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Ficha Técnica
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-orange-600 bg-orange-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-900">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Tabla PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
