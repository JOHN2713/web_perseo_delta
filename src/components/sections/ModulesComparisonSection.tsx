"use client";

import { useState, useEffect } from "react";

type PlanType = "facturacion" | "servicios" | "comercial" | "prueba" | "contador-servicios" | "contador-comercial";
type TabOption = "empresas" | "contador" | "comparacion" | "beneficios" | "adicionales";

interface ModuleFeature {
  name: string;
  plans: {
    facturacion?: boolean;
    servicios?: boolean;
    comercial?: boolean;
    prueba?: boolean;
    "contador-servicios"?: boolean;
    "contador-comercial"?: boolean;
  };
}

interface ModuleCategory {
  id: string;
  name: string;
  features: ModuleFeature[];
}

const MODULES: ModuleCategory[] = [
  {
    id: "ventas",
    name: "VENTAS",
    features: [
      {
        name: "Facturación",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Proformas y Pedidos",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Entregas por Facturar",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Entregas Parciales de Mercaderías Facturadas",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "restaurantes",
    name: "RESTAURANTES",
    features: [
      {
        name: "Facturación Restaurante - Venta Directa",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Facturación Restaurante - con uso de Comandas - Mesas",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "inventarios",
    name: "INVENTARIOS",
    features: [
      {
        name: "Gestión de Productos",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Creación de ítems de servicios",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Ingresos y Salidas de Inventarios",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Manejo de bodegas y sucursales, Transferencias",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Análisis de Rotación de Inventarios y Compras",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Kárdex de Movimientos de Productos",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Lotes de Caducidad",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Kits y plantillas",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
    ],
  },
];

const CONTADOR_MODULES: ModuleCategory[] = [
  {
    id: "contabilidad",
    name: "CONTABILIDAD",
    features: [
      {
        name: "Plan de Cuentas",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Libro Diario",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Libro Mayor",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Balance de Comprobación",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Estado de Resultados",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Balance General",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
    ],
  },
  {
    id: "tributario",
    name: "TRIBUTARIO",
    features: [
      {
        name: "Declaración de IVA",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Declaración de Retenciones",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Anexos Transaccionales (ATS)",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
      {
        name: "Conciliación Tributaria",
        plans: { "contador-servicios": true, "contador-comercial": true },
      },
    ],
  },
];

interface ModulesComparisonSectionProps {
  billingPeriod: "monthly" | "annual";
  activeTab: TabOption;
}

export default function ModulesComparisonSection({ billingPeriod, activeTab }: ModulesComparisonSectionProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    activeTab === "contador" ? ["contabilidad"] : ["ventas"]
  );

  useEffect(() => {
    // Reset expanded categories when activeTab changes
    setExpandedCategories(activeTab === "contador" ? ["contabilidad"] : ["ventas"]);
  }, [activeTab]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const isContador = activeTab === "contador";
  const modules = isContador ? CONTADOR_MODULES : MODULES;

  const prices = isContador
    ? {
        servicios: billingPeriod === "monthly" ? "$17.99" : "$179.99",
        comercial: billingPeriod === "monthly" ? "$23.99" : "$215.99",
      }
    : {
        facturacion: billingPeriod === "monthly" ? "$173.99" : "$173.99",
        servicios: billingPeriod === "monthly" ? "$311.99" : "$311.99",
        comercial: billingPeriod === "monthly" ? "$431.99" : "$431.99",
      };

  return (
    <section className="bg-white px-6 pb-8 pt-6">
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <div>
              <h2 className="text-lg font-bold">
                {isContador ? "Módulos para el Contador" : "Módulos para Empresas"}
              </h2>
              <p className="mt-0.5 text-xs text-blue-50">
                {isContador ? "Plan 'Soy Contador'" : "Funcionalidades por plan"}
              </p>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="sticky top-0 z-10 border-b border-gray-200 bg-gray-50">
          {isContador ? (
            <div className="grid grid-cols-3 gap-4 px-6 py-3">
              <div className="text-xs font-semibold uppercase text-gray-500">Detalle</div>
              <div className="text-center">
                <div className="text-xs font-semibold text-gray-800">SERVICIOS</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.servicios}</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-gray-800">COMERCIAL</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.comercial}</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-4 px-6 py-3">
              <div className="text-xs font-semibold uppercase text-gray-500">Detalle</div>
              <div className="text-center">
                <div className="text-xs font-semibold text-blue-600">FACT.</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.facturacion}</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-blue-600">SERV.</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.servicios}</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-blue-600">COM.</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.comercial}</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold uppercase text-green-600">Prueba</div>
              </div>
            </div>
          )}
        </div>

        {/* Table Body */}
        <div className="bg-white">
          {modules.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.includes(category.id);
            
            return (
              <div key={category.id}>
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full px-6 py-3 text-left transition-colors hover:bg-gray-50 ${
                    categoryIndex > 0 ? "border-t border-gray-200" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-blue-600">{category.name}</h3>
                    <svg
                      className={`h-4 w-4 text-blue-600 transition-transform ${
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
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`grid ${
                          isContador ? "grid-cols-3" : "grid-cols-5"
                        } gap-4 border-t border-gray-100 px-6 py-2.5 hover:bg-gray-50`}
                      >
                        <div className="text-xs text-gray-700">{feature.name}</div>
                        {isContador ? (
                          <>
                            <div className="flex justify-center">
                              {feature.plans["contador-servicios"] && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center">
                              {feature.plans["contador-comercial"] && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-center">
                              {feature.plans.facturacion && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center">
                              {feature.plans.servicios && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center">
                              {feature.plans.comercial && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center">
                              {feature.plans.prueba && (
                                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
