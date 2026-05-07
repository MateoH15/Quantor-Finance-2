import React from 'react';

const Hero = () => {
  return (
    <section className="relative px-12 py-20 flex flex-col items-center text-center hero-gradient overflow-hidden pt-32">
      <div className="z-10 max-w-4xl">
        <span className="font-label-caps text-primary mb-4 block text-xs font-bold tracking-widest uppercase">LANZAMIENTO EXCLUSIVO</span>
        <h1 className="font-display-lg text-display-lg text-on-surface text-5xl font-bold mb-6 leading-tight">
          Domine sus Finanzas con <br/>
          <span className="text-primary">Excel Institucional</span>
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 text-slate-400 text-lg">
          Plantillas profesionales diseñadas para el análisis de riesgo, gestión de carteras y proyecciones de flujo de caja de alto nivel.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-on-primary font-headline-md px-10 py-4 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform font-bold">
            Ver Catálogo de Templates
          </button>
          <button className="border border-primary text-primary font-headline-md px-10 py-4 rounded-lg hover:bg-primary/5 transition-colors font-bold">
            Saber Más
          </button>
        </div>
      </div>
      <div className="mt-16 w-full max-w-5xl rounded-xl border border-white/10 shadow-2xl overflow-hidden relative group">
        <img 
          alt="Financial Dashboard Preview" 
          className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN-KxK3dry3HcaoxZ-xNFib9fKIea6MKEEWqkpNGr56XpBXdbGVbKK0DRsghNUbX5bFqgK9R367U94okzk1y3uFjXFufdjkA9LwDrFhuEgZzj3ksCOghQbwgEjxDRD4GwWKZHZC9s9HEgUgViZrRSkSuzvEye6N8It_Vg9jmVeOF1Qok2TTnCVEwKx5u4CYtz5rrDUS2zrWIqMN0J7mkGAVkiHmYUhGOl5vJpj-h_WM-1j5Rst7SaUcweDv4hJ5dQywe0rHnAa" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
