import React from 'react';

const PlatformCard = ({ name, logo, price, features, color }) => {
  return (
    <div className="glass-panel p-8 rounded-xl border-t-4 border border-white/5 shadow-xl hover:-translate-y-2 transition-all duration-300" style={{ borderTopColor: color }}>
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <span className="text-primary font-bold text-lg font-data-mono">{price}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
            <span className="material-symbols-outlined text-[14px]" style={{ color }}>check_circle</span>
            {f}
          </li>
        ))}
      </ul>
      <button 
        className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all hover:brightness-125" 
        style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}40` }}
      >
        SUSCRIBIRSE
      </button>
    </div>
  );
};

const Streaming = () => {
  const platforms = [
    {
      name: "Netflix",
      price: "desde $1,699",
      color: "#E50914",
      features: ["4K Ultra HD", "4 Dispositivos", "Descargas offline", "Sin anuncios"]
    },
    {
      name: "Disney+",
      price: "$799 / mes",
      color: "#006E99",
      features: ["IMAX Enhanced", "Disney, Pixar, Marvel", "Star Wars & Nat Geo", "4 Dispositivos"]
    },
    {
      name: "HBO Max",
      price: "$699 / mes",
      color: "#991BFA",
      features: ["Calidad 4K", "Warner Bros Pictures", "DC & Adult Swim", "3 Dispositivos"]
    },
    {
      name: "Amazon Prime",
      price: "$599 / mes",
      color: "#00A8E1",
      features: ["Envío gratis Prime", "Prime Gaming", "X-Ray data", "3 Dispositivos"]
    },
    {
      name: "Paramount+",
      price: "$599 / mes",
      color: "#0064FF",
      features: ["Sports en vivo", "Showtime originals", "Exclusivos", "2 Dispositivos"]
    },
    {
      name: "Apple TV+",
      price: "$999 / mes",
      color: "#FFFFFF",
      features: ["Originales de Apple", "Sin anuncios", "Compartir en familia", "Apple One ready"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen hero-gradient">
      <section className="max-w-7xl mx-auto px-12 mb-16 text-center">
        <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block text-xs font-bold">Recursos de Entretenimiento</span>
        <h1 className="text-display-lg font-display-lg text-on-surface text-5xl font-bold mb-6">Comparativa de Streaming</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-slate-400 text-lg">
          Manténgase al día con los costos y servicios de las principales plataformas de contenido digital en la región.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((p, i) => (
            <PlatformCard key={i} {...p} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-12 mt-20">
        <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5 text-center">
          <p className="text-sm text-slate-500 italic">
            * Los precios mostrados son estimativos y pueden variar según impuestos locales y promociones vigentes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Streaming;
