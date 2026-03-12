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
  {
    id: "compras",
    name: "COMPRAS",
    features: [
      {
        name: "Compras de Productos y Servicios, Liquidaciones de Compras, Retenciones electrónicas",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Importación de Compras Electrónicas directo desde el SRI",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Órdenes y Recepción de compras",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Liquidación de Importaciones",
        plans: { servicios: false, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "cuentas-cobrar",
    name: "CUENTAS POR COBRAR",
    features: [
      {
        name: "Fichas de Clientes",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Estado de Cuenta, Cobros",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "cuentas-pagar",
    name: "CUENTAS POR PAGAR",
    features: [
      {
        name: "Fichas de Proveedores",
        plans: { servicios: true, comercial: true },
      },
      {
        name: "Estado de Cuenta, Pagos",
        plans: { servicios: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "tesoreria",
    name: "TESORERÍA",
    features: [
      {
        name: "Transacciones de múltiples bancos y cajas",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Gestión de Efectivo, TC, Cheques, Cheques Posfechados, Depósitos",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Liquidación de Tarjetas de Crédito",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Conciliación Bancaria",
        plans: { servicios: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "contabilidad",
    name: "CONTABILIDAD",
    features: [
      {
        name: "Contabilidad 100% integrada, Balances",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Libro Diario y Mayores Generales",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Impuestos y ATS",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Centros de Costos",
        plans: { servicios: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "nomina",
    name: "NÓMINA",
    features: [
      {
        name: "Gestión de Talento Humano, Rubros de Nómina y Provisiones",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Control de Préstamos y Anticipos",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Impresión de Rol General e Individual, Reportes",
        plans: { servicios: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "activos-fijos",
    name: "ACTIVOS FIJOS",
    features: [
      {
        name: "Gestión de Activos Fijos, Grupos, Departamentos y Responsables",
        plans: { servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Cálculo y contabilización de Depreciaciones por Activo",
        plans: { servicios: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "produccion",
    name: "PRODUCCIÓN",
    features: [
      {
        name: "Gestión de Recetas y Órdenes de Producción",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Cálculo de consumo de Materia prima, Salidas de Materia Prima",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Cálculo de Costo Unitario de productos Terminados",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
      {
        name: "Ingresos de Productos Terminados",
        plans: { facturacion: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "tienda-online",
    name: "TIENDA ONLINE - ECOMMERCE 100% INTEGRADA CON PERSEOWEB",
    features: [
      {
        name: "Sincroniza a la Tienda Productos, Precios, Fotos, Clientes",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Tus clientes hacen Pedidos o Compras desde la Tienda",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Permite incorporar botón de pagos si se lo requiere",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Permite vender a C.Final o a Mayoristas con su precio",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Los clientes se registran por Facebook o con claves propias",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Super parametrizable con logos de tu empresa y colores",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Costo si la contratación es Mensual",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Costo si la contratación es Anual",
        plans: { comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "app-movil",
    name: "APLICACION PERSEO MOVIL (ILIMITADO)",
    features: [
      {
        name: "Gestión de reportes en vivo",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Gestión de productos",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Gestión de inventarios (entradas, salidas y transferencias)",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Facturación en restaurantes",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Facturador por voz",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Sincronizado 100% con tu Plan Perseo Web",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Facturación, proformas y pedidos",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
      {
        name: "Gráficos BI",
        plans: { facturacion: true, servicios: true, comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "talleres-automotrices",
    name: "MODULO DE TALLERES AUTOMOTRICES",
    features: [
      {
        name: "Recepción de Vehículos y Órdenes de Trabajo",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Gestión por Cliente y por Vehículo, Historial de Mantenimiento",
        plans: { comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "garantias",
    name: "MÓDULO DE GARANTÍAS",
    features: [
      {
        name: "Recepción de Garantías e impresión",
        plans: { comercial: true, prueba: true },
      },
      {
        name: "Gestión y asignación de Garantías por Técnico",
        plans: { comercial: true, prueba: true },
      },
    ],
  },
  {
    id: "plugin-woocommerce",
    name: "PLUGIN WOOCOMMERCE DE WORDPRESS",
    features: [
      {
        name: "Plugin para conectar tu Tienda Online hecha en Woocommerce",
        plans: { comercial: true },
      },
      {
        name: "Sincroniza Productos, Precios, Fotos, Clientes desde Perseo",
        plans: { comercial: true },
      },
      {
        name: "Sincroniza nuevos Clientes y Pedidos desde tu Tienda Online",
        plans: { comercial: true },
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
    activeTab === "contador" 
      ? ["contabilidad", "tributario"] 
      : ["ventas", "restaurantes", "inventarios", "compras", "cuentas-cobrar", "cuentas-pagar", "tesoreria", "contabilidad", "nomina", "activos-fijos", "produccion", "tienda-online", "app-movil", "talleres-automotrices", "garantias", "plugin-woocommerce"]
  );

  useEffect(() => {
    // Reset expanded categories when activeTab changes - expand all by default
    setExpandedCategories(
      activeTab === "contador" 
        ? ["contabilidad", "tributario"] 
        : ["ventas", "restaurantes", "inventarios", "compras", "cuentas-cobrar", "cuentas-pagar", "tesoreria", "contabilidad", "nomina", "activos-fijos", "produccion", "tienda-online", "app-movil", "talleres-automotrices", "garantias", "plugin-woocommerce"]
    );
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
        facturacion: billingPeriod === "monthly" ? "$17.99" : "$173.99",
        servicios: billingPeriod === "monthly" ? "$29.99" : "$311.99",
        comercial: billingPeriod === "monthly" ? "$41.99" : "$431.99",
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
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 px-6 py-3">
              <div className="text-xs font-semibold uppercase text-gray-500">Detalle</div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-gray-800">SERVICIOS</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.servicios}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-gray-800">COMERCIAL</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.comercial}</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-[5fr_1fr_1fr_1fr_1fr] gap-1 px-6 py-3">
              <div className="text-xs font-semibold uppercase text-gray-500">Detalle</div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-blue-600">FACT.</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.facturacion}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-blue-600">SERV.</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.servicios}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-blue-600">COM.</div>
                <div className="mt-0.5 text-xs text-gray-600">{prices.comercial}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs font-semibold uppercase text-green-600">PRUEBA</div>
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
                          isContador ? "grid-cols-[2fr_1fr_1fr]" : "grid-cols-[5fr_1fr_1fr_1fr_1fr]"
                        } gap-1 border-t border-gray-100 px-6 py-2.5 hover:bg-gray-50`}
                      >
                        <div className="text-xs text-gray-700">{feature.name}</div>
                        {isContador ? (
                          <>
                            <div className="flex justify-center items-center">
                              {feature.plans["contador-servicios"] && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center items-center">
                              {feature.plans["contador-comercial"] && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-center items-center">
                              {feature.plans.facturacion && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center items-center">
                              {feature.plans.servicios && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center items-center">
                              {feature.plans.comercial && (
                                <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex justify-center items-center">
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

      {/* Download Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar Ficha Técnica
        </button>
        <button className="flex items-center gap-2 rounded-lg border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar Tabla PDF
        </button>
      </div>
    </section>
  );
}
