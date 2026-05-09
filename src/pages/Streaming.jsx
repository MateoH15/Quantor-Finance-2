import React from 'react';

const PlatformCard = ({ name, plans, features, color, url }) => {
  return (
    <div className="glass-panel p-6 md:p-8 rounded-xl border-t-4 border border-white/5 shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col" style={{ borderTopColor: color }}>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
        <div className="space-y-2">
          {plans.map((plan, i) => (
            <div key={i} className="flex justify-between items-center py-2 px-3 rounded-lg" style={{ backgroundColor: `${color}08` }}>
              <span className="text-xs text-slate-400 font-medium">{plan.name}</span>
              <span className="text-sm font-bold font-data-mono" style={{ color }}>{plan.price}</span>
            </div>
          ))}
        </div>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
            <span className="material-symbols-outlined text-[14px]" style={{ color }}>check_circle</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all hover:brightness-125 text-center block"
        style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}40` }}
      >
        VER PLANES
      </a>
    </div>
  );
};

const Streaming = () => {
  const platforms = [
    {
      name: "Netflix",
      color: "#E50914",
      url: "https://www.netflix.com/signup/planform",
      plans: [
        { name: "Estándar con anuncios", price: "$8.999/mes" },
        { name: "Estándar", price: "$19.999/mes" },
        { name: "Premium (4K + HDR)", price: "$30.598/mes" },
      ],
      features: ["Hasta 4K Ultra HD + HDR", "Hasta 4 dispositivos simultáneos", "Descargas offline", "Perfiles independientes"]
    },
    {
      name: "Disney+",
      color: "#006E99",
      url: "https://www.disneyplus.com/es-ar/sign-up",
      plans: [
        { name: "Estándar con anuncios", price: "$11.999/mes" },
        { name: "Estándar", price: "$15.999/mes" },
        { name: "Premium (4K)", price: "$23.999/mes" },
      ],
      features: ["Disney, Pixar, Marvel, Star Wars", "ESPN en vivo (plan Premium)", "IMAX Enhanced", "Hasta 4 dispositivos"]
    },
    {
      name: "Max",
      color: "#991BFA",
      url: "https://www.max.com/ar/es/sign-up",
      plans: [
        { name: "Básico con anuncios", price: "$9.090/mes" },
        { name: "Estándar", price: "$11.796/mes" },
        { name: "Platino (4K + Atmos)", price: "$14.133/mes" },
      ],
      features: ["Warner Bros, DC, HBO Originals", "Calidad hasta 4K + Dolby Atmos", "Hasta 4 dispositivos", "Descargas offline"]
    },
    {
      name: "Amazon Prime Video",
      color: "#00A8E1",
      url: "https://www.primevideo.com/offers",
      plans: [
        { name: "Mensual", price: "$7.994/mes" },
        { name: "Anual", price: "$57.300/año" },
      ],
      features: ["Envío gratis con Prime", "Prime Gaming incluido", "X-Ray información en pantalla", "Hasta 3 dispositivos"]
    },
    {
      name: "Paramount+",
      color: "#0064FF",
      url: "https://www.paramountplus.com/ar/",
      plans: [
        { name: "Estándar", price: "$8.535/mes" },
      ],
      features: ["Deportes en vivo", "Showtime originals", "Contenido exclusivo Paramount", "Prueba gratuita 7 días"]
    },
    {
      name: "Apple TV+",
      color: "#FFFFFF",
      url: "https://tv.apple.com",
      plans: [
        { name: "Individual", price: "$13.286/mes" },
      ],
      features: ["Originales de Apple exclusivos", "Sin anuncios", "Compartir en familia (hasta 6)", "Compatible con Apple One"]
    }
  ];

  return (
    <div className="pt-28 md:pt-32 pb-24 min-h-screen hero-gradient">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-16 text-center">
        <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block text-[10px] md:text-xs font-bold">Recursos de Entretenimiento</span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Comparativa de Streaming</h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed">
          Precios estimados en pesos argentinos con impuestos incluidos para las principales plataformas de contenido digital — Mayo 2026.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((p, i) => (
            <PlatformCard key={i} {...p} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
        <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-white/5 text-center">
          <p className="text-sm text-slate-500 italic">
            * Los precios mostrados son estimativos e incluyen impuestos (IVA + percepciones). El monto final puede variar según el tipo de cambio, banco emisor y carga impositiva provincial al momento de la facturación. Última actualización: Mayo 2026.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Streaming;
