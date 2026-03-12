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

            {/* Comparison Section - Only visible when comparacion tab is active */}
            {activeTab === "comparacion" && (
              <div className="bg-white px-6 pb-12 pt-8">
                <div className="mx-auto max-w-5xl">
                  <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
                    Elige el plan ideal para tu negocio
                  </h2>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Sistema Web para Empresas */}
                    <div className="overflow-hidden rounded-2xl border-2 border-blue-200 bg-white shadow-lg transition-all hover:border-blue-400 hover:shadow-xl">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-8 text-white">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold">Sistema Web para Empresas</h3>
                      </div>
                      
                      <div className="p-6">
                        <p className="mb-4 text-sm leading-relaxed text-gray-700">
                          Impulsa tu negocio con <span className="font-semibold text-blue-600">Perseo Web</span>, 
                          el sistema contable en la nube líder del mercado. Diseñado para{" "}
                          <span className="font-semibold">pequeñas, medianas y grandes empresas</span> que buscan 
                          control total, automatización y crecimiento sostenido.
                        </p>
                        
                        <p className="text-xs text-gray-600">
                          ¡Gestión inteligente desde cualquier lugar del mundo y en cualquier dispositivo!
                        </p>
                      </div>
                    </div>

                    {/* Soy Contador */}
                    <div className="overflow-hidden rounded-2xl border-2 border-blue-200 bg-white shadow-lg transition-all hover:border-blue-400 hover:shadow-xl">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-8 text-white">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold">Soy Contador</h3>
                      </div>
                      
                      <div className="p-6">
                        <p className="mb-4 text-sm leading-relaxed text-gray-700">
                          Toda la potencia del sistema empresarial Web, ahora al alcance de los contadores con un{" "}
                          <span className="font-semibold text-blue-600">precio preferencial</span>. Optimiza tu tiempo, 
                          amplía tu cartera de clientes y brinda un servicio{" "}
                          <span className="font-semibold">profesional, ágil y centralizado</span> desde cualquier lugar del mundo.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Download Buttons - Outside cards */}
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
                </div>
              </div>
            )}

            {/* Benefits Section - Only visible when beneficios tab is active */}
            {activeTab === "beneficios" && (
              <div className="bg-white px-6 pb-12">
                {/* Benefits Header */}
                <div className="mx-auto mb-8 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Beneficios Incluidos</h2>
                        <p className="text-sm text-blue-50">Sin costo adicional en cada plan</p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="bg-white p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Benefit 1 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          1
                        </div>
                        <p className="text-sm text-gray-700">Estado de Cuenta y Cobros</p>
                      </div>

                      {/* Benefit 2 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          2
                        </div>
                        <p className="text-sm text-gray-700">Liquidación de Tarjetas de Crédito</p>
                      </div>

                      {/* Benefit 3 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          3
                        </div>
                        <p className="text-sm text-gray-700">Inventarios (entradas, salidas y transferencias)</p>
                      </div>

                      {/* Benefit 4 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          4
                        </div>
                        <p className="text-sm text-gray-700">Gestión de Efectivo, TC, Cheques, Cheques Posfechados y Depósitos</p>
                      </div>

                      {/* Benefit 5 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          5
                        </div>
                        <p className="text-sm text-gray-700">Ventas (punto de venta online/offline con cierre de caja)</p>
                      </div>

                      {/* Benefit 6 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          6
                        </div>
                        <p className="text-sm text-gray-700">Liquidación de Importaciones</p>
                      </div>

                      {/* Benefit 7 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          7
                        </div>
                        <p className="text-sm text-gray-700">Conciliación Bancaria</p>
                      </div>

                      {/* Benefit 8 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          8
                        </div>
                        <p className="text-sm text-gray-700">Contabilidad 100% integrada y Balances</p>
                      </div>

                      {/* Benefit 9 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          9
                        </div>
                        <p className="text-sm text-gray-700">Centro de Costos</p>
                      </div>

                      {/* Benefit 10 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          10
                        </div>
                        <p className="text-sm text-gray-700">Facturación Restaurante (comandas y mesas)</p>
                      </div>

                      {/* Benefit 11 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          11
                        </div>
                        <p className="text-sm text-gray-700">Compras de Productos y Servicios (liquidaciones y órdenes)</p>
                      </div>

                      {/* Benefit 12 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          12
                        </div>
                        <p className="text-sm text-gray-700">Importación de Compras Electrónicas desde el SRI</p>
                      </div>

                      {/* Benefit 13 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          13
                        </div>
                        <p className="text-sm text-gray-700">Proformas y Pedidos Online/Offline</p>
                      </div>

                      {/* Benefit 14 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          14
                        </div>
                        <p className="text-sm text-gray-700">Reporte de Kárdex de Movimientos de Productos</p>
                      </div>

                      {/* Benefit 15 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          15
                        </div>
                        <p className="text-sm text-gray-700">Análisis de Rotación de Inventarios y Compras</p>
                      </div>

                      {/* Benefit 16 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          16
                        </div>
                        <p className="text-sm text-gray-700">Roles de Nómina (Gestión de Talento Humano y Provisiones)</p>
                      </div>

                      {/* Benefit 17 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          17
                        </div>
                        <p className="text-sm text-gray-700">Gestión de Activos Fijos y Depreciaciones</p>
                      </div>

                      {/* Benefit 18 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          18
                        </div>
                        <p className="text-sm text-gray-700">Recetas y Órdenes de Producción (cálculo de materia prima, ingreso de productos terminados)</p>
                      </div>

                      {/* Benefit 19 */}
                      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          19
                        </div>
                        <p className="text-sm text-gray-700">Videos tutoriales ilimitados por módulo</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex justify-center gap-4">
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
              </div>
            )}

            {/* Additional Modules Section - Only visible when adicionales tab is active */}
            {activeTab === "adicionales" && (
              <div className="bg-white px-6 pb-12">
                {/* Header */}
                <div className="mx-auto mb-8 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Módulos Adicionales</h2>
                        <p className="text-sm text-blue-50">Complementos contratables</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Modules Grid */}
                  <div className="bg-gray-50 p-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Module 1: Talleres Automotrices */}
                      <div className="overflow-hidden rounded-xl border-2 border-blue-200 bg-white shadow-md transition-all hover:border-blue-400 hover:shadow-lg">
                        <div className="bg-blue-600 px-5 py-4 text-white">
                          <h3 className="text-base font-bold uppercase">Módulo de Talleres Automotrices</h3>
                        </div>
                        <div className="p-5">
                          <p className="mb-4 text-sm font-semibold text-blue-600">
                            Renta anual: USD 120.00
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Recepción de Vehículos y Órdenes de Trabajo, Gestión por Cliente y por Vehículo</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Seguimiento de estado de garantías y consumo de repuestos</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Historial de mantenimiento por vehículo</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Module 2: Garantías y Servicio Técnico */}
                      <div className="overflow-hidden rounded-xl border-2 border-blue-200 bg-white shadow-md transition-all hover:border-blue-400 hover:shadow-lg">
                        <div className="bg-blue-600 px-5 py-4 text-white">
                          <h3 className="text-base font-bold uppercase">Módulo de Garantías y Servicio Técnico</h3>
                        </div>
                        <div className="p-5">
                          <p className="mb-4 text-sm font-semibold text-blue-600">
                            Renta anual: USD 120.00
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Recepción de garantías e impresión</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Gestión y asignación de garantías por técnico</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Module 3: Conexión con API a Power BI */}
                      <div className="overflow-hidden rounded-xl border-2 border-blue-200 bg-white shadow-md transition-all hover:border-blue-400 hover:shadow-lg">
                        <div className="bg-blue-600 px-5 py-4 text-white">
                          <h3 className="text-base font-bold uppercase">Conexión con API a Power BI</h3>
                        </div>
                        <div className="p-5">
                          <p className="mb-4 text-sm font-semibold text-blue-600">
                            Renta anual: USD 100
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Conectado a MS Power BI por medio de nuestra API</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Toma mejores decisiones con gráficos generales predefinidos</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Module 4: Plugin WooCommerce */}
                      <div className="overflow-hidden rounded-xl border-2 border-blue-200 bg-white shadow-md transition-all hover:border-blue-400 hover:shadow-lg">
                        <div className="bg-blue-600 px-5 py-4 text-white">
                          <h3 className="text-base font-bold uppercase">Plugin WooCommerce de WordPress</h3>
                        </div>
                        <div className="p-5">
                          <p className="mb-4 text-sm font-semibold text-blue-600">
                            Renta anual: USD 300
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Plugin para conectar tu Tienda Online hecha en WooCommerce</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Sincroniza productos, precios, fotos y clientes desde PerseoWeb hacia tu Tienda Online</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>Sincroniza nuevos clientes y pedidos desde tu Tienda Online a PerseoWeb</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>No incluye horas de implementación. Costo: USD 50/hora si se requiere</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex justify-center gap-4">
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
              </div>
            )}

            {/* Plans Section - Hide when comparacion tab is active */}
            {activeTab !== "comparacion" && activeTab !== "beneficios" && activeTab !== "adicionales" && (
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
                    <a href="/#contacto" className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-white transition-all ${
                      plan.id === "comercial"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-[#1a1a1a] hover:bg-gray-900"
                    }`}>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Más información
                    </a>
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
            )}

            {/* Modules Comparison - Hide when comparacion, beneficios or adicionales tab is active */}
            {activeTab !== "comparacion" && activeTab !== "beneficios" && activeTab !== "adicionales" && (
              <ModulesComparisonSection 
                billingPeriod={billingPeriod} 
                activeTab={activeTab}
              />
            )}
          </div>
        </div>
      </section>

      
    </>
  );
}
