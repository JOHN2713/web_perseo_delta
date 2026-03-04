"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Título */}
          <h2 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
            ¿Necesitas{" "}
            <span className="bg-gradient-to-r from-[#e91e63] to-[#f97316] bg-clip-text text-transparent">
              más información
            </span>
            ?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Déjanos tus datos y te contactaremos a la brevedad
          </p>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            {/* Campo Nombre */}
            <div className="relative">
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Nombre completo"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder-gray-500 transition-all focus:border-[#e91e63] focus:outline-none focus:ring-2 focus:ring-[#e91e63]/20"
              />
            </div>

            {/* Campo Celular */}
            <div className="relative">
              <input
                type="tel"
                name="celular"
                id="celular"
                value={formData.celular}
                onChange={handleChange}
                required
                placeholder="Celular"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder-gray-500 transition-all focus:border-[#e91e63] focus:outline-none focus:ring-2 focus:ring-[#e91e63]/20"
              />
            </div>

            {/* Campo Correo */}
            <div className="relative">
              <input
                type="email"
                name="correo"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                placeholder="Correo electrónico"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder-gray-500 transition-all focus:border-[#e91e63] focus:outline-none focus:ring-2 focus:ring-[#e91e63]/20"
              />
            </div>

            {/* Botón CTA */}
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-gradient-to-r from-[#e91e63] to-[#f97316] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Necesito más información
            </button>
          </form>

          {/* Mensaje adicional */}
          <p className="mt-6 text-sm text-gray-500">
            Al enviar este formulario, aceptas nuestra{" "}
            <a href="/politicas-privacidad" className="text-[#e91e63] underline">
              política de privacidad
            </a>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#e91e63]/10 to-[#f97316]/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#f97316]/10 to-[#e91e63]/10 blur-3xl"></div>
    </section>
  );
}
