"use client";

import { useState } from "react";
import { Clock, Phone, Mail, MessageCircle, ChevronDown, ChevronRight } from "lucide-react";

export default function ServicioTecnicoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schedules = [
    {
      day: "Lun - Vie",
      hours: "8:00 - 17:00",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      dotColor: "bg-blue-500",
    },
    {
      day: "Sábados",
      hours: "9:00 - 16:00",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      dotColor: "bg-purple-500",
    },
    {
      day: "Domingos",
      hours: "9:00 - 13:00",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      dotColor: "bg-cyan-500",
    },
    {
      day: "Feriados",
      hours: "8:00 - 17:00",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      dotColor: "bg-orange-500",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo generar anticipos a proveedores, registrar compras y cruzar las cuentas de manera eficiente en PerseoWeb?",
      answer: "Para generar anticipos a proveedores en PerseoWeb, dirígete al módulo de Compras > Anticipos. Registra el anticipo con los datos del proveedor y monto. Para registrar la compra, ve a Compras > Nueva Compra, ingresa los datos y relaciona con el anticipo previamente creado. El sistema cruzará automáticamente las cuentas contables correspondientes.",
    },
    {
      question: "¿Cómo se registra una compra y se relaciona con el anticipo en PerseoWeb?",
      answer: "Una vez creado el anticipo, al registrar una nueva compra podrás seleccionar la opción de relacionar con anticipos existentes. El sistema mostrará los anticipos disponibles del proveedor y podrás aplicar el monto correspondiente, actualizando automáticamente el saldo pendiente.",
    },
    {
      question: "¿Dónde se pueden cambiar los precios en la sección de tarifas?",
      answer: "Los precios se pueden modificar en el módulo de Administración > Tarifas y Precios. Desde allí podrás actualizar los precios de productos y servicios, configurar descuentos y establecer diferentes listas de precios para distintos tipos de clientes.",
    },
  ];

  const contacts = [
    {
      icon: Phone,
      label: "Teléfono de Soporte",
      value: "+593 95 889 8180",
      href: "tel:+593958898180",
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      icon: Mail,
      label: "Email de Soporte",
      value: "soporte@perseo.com",
      href: "mailto:soporte@perseo.com",
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 text-green-600 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Equipo disponible
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            SOPORTE TÉCNICO
          </h1>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
            Ponemos a tu disposición un canal único para solicitar Soporte Técnico a nuestro equipo
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Horarios de Soporte */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Horarios de Soporte
                  </h2>
                  <p className="text-sm text-gray-500">Atención personalizada</p>
                </div>
              </div>

              <div className="space-y-3">
                {schedules.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl ${schedule.bgColor} border border-gray-200`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${schedule.dotColor}`}></div>
                      <span className="font-semibold text-gray-700">
                        {schedule.day}
                      </span>
                    </div>
                    <span className={`font-bold ${schedule.textColor}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Canales de Contacto */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Canales de Contacto
                  </h2>
                  <p className="text-sm text-gray-500">Estamos para ayudarte</p>
                </div>
              </div>

              <div className="space-y-4">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-md transition-all group border border-gray-200"
                    >
                      <div className={`w-14 h-14 ${contact.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${contact.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">
                          {contact.label}
                        </p>
                        <p className="font-bold text-gray-900">
                          {contact.value}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Dudas Frecuentes
                    </h2>
                    <p className="text-sm text-gray-500">
                      Respuestas a consultas comunes
                    </p>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                  {faqs.length} temas
                </span>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-start gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-gray-600">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 pl-16">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-2">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Nuestro equipo de soporte está listo para ayudarte con cualquier consulta específica.
              </p>
              <a
                href="https://wa.me/593999747608?text=Hola,%20necesito%20soporte%20técnico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Contactar Soporte
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
