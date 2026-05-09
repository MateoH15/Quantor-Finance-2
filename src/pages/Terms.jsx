import React from "react";

const Terms = () => {
  const sections = [
    {
      title: "Información y Datos",
      content: "La información, datos de precios, análisis y cualquier contenido proporcionado por Quantor Finance es de carácter orientativo y educativo. No constituye asesoramiento financiero, asesoramiento de inversión, recomendación de compra o venta, ni una oferta de servicios de inversión. Quantor Finance no se responsabiliza por decisiones de inversión tomadas basándose en la información proporcionada."
    },
    {
      title: "Exactitud de la Información",
      content: "Aunque nos esforzamos por proporcionar información precisa y actualizada, Quantor Finance no garantiza la exactitud, integridad o disponibilidad de toda la información. Los datos pueden contener errores o imprecisiones. El usuario asume el riesgo de confiar en dicha información."
    },
    {
      title: "Limitación de Responsabilidad",
      content: "En ningún caso Quantor Finance será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pero no limitado a pérdidas de ganancias, datos o uso, aun cuando se haya aconsejado de la posibilidad de tales daños."
    },
    {
      title: "Enlaces Externos",
      content: "Quantor Finance puede contener enlaces a sitios web de terceros. No somos responsables del contenido, exactitud o prácticas de estos sitios. El uso de terceros y el acceso a sus sitios web está sujeto a sus términos y políticas."
    },
    {
      title: "Propiedad Intelectual",
      content: "Todo el contenido, incluidos textos, gráficos, logos, imágenes y software, es propiedad de Quantor Finance o sus proveedores de contenido y está protegido por leyes de derechos de autor. No se permite la reproducción, distribución o transmisión sin autorización previa."
    },
    {
      title: "Productos Digitales y Política de Reembolsos",
      content: "Al adquirir nuestros productos (plantillas de Google Sheets, dashboards o herramientas de análisis), el usuario acepta que está adquiriendo un bien digital de acceso inmediato. Debido a la naturaleza no retornable de los contenidos descargables, no se realizarán reembolsos, cancelaciones o devoluciones una vez que el enlace de acceso haya sido enviado al correo electrónico proporcionado por el comprador."
    },
    {
      title: "Licencia de Uso",
      content: "La compra de un producto otorga una licencia de uso personal o institucional no exclusiva. Queda estrictamente prohibida la reventa, distribución gratuita, sublicenciamiento o cualquier forma de comunicación pública de las plantillas y sus algoritmos internos. Cada adquisición está vinculada a una licencia única que protege la propiedad intelectual de Quantor Finance."
    },
    {
      title: "Modificaciones de los Términos",
      content: "Quantor Finance se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación. Tu uso continuado del servicio constituye tu aceptación de los términos modificados."
    }
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <span className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 block">Aviso Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Términos y Condiciones</h1>
          <p className="text-slate-400 text-sm md:text-base">Última actualización: Mayo 2026</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary text-sm font-data-mono">0{index + 1}.</span>
                {section.title}
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <p className="text-slate-300 text-sm italic">
            Si tiene alguna duda sobre estos términos, por favor contáctenos a través de nuestros canales oficiales.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Terms;
