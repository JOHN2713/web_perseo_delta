"use client";

import { useEffect } from "react";

export default function ContactFormSection() {
  useEffect(() => {
    // Load Bitrix24 form script for inline form
    const script = document.createElement('script');
    script.async = true;
    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b9233699/crm/form/loader_225.js');
    `;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
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

          {/* Formulario Bitrix24 Inline */}
          <div className="mt-10">
            <script 
              data-b24-form="inline/225/ewxr65" 
              data-skip-moving="true"
            >
            </script>
          </div>

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
