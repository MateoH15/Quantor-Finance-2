import React from "react";

const Hero = () => {
  return (
    <section className="relative px-6 md:px-12 pt-24 md:pt-16 pb-20 md:pb-32 flex flex-col items-center text-center min-h-[60vh] justify-center">
      <div className="z-10 max-w-4xl fade-in">
        <span className="font-label-caps text-primary mb-4 block text-[10px] md:text-xs font-bold tracking-widest uppercase">
          LANZAMIENTO EXCLUSIVO
        </span>
        <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl text-on-surface font-extrabold mb-6 md:mb-8 leading-tight">
          Domine sus Finanzas con <br className="hidden md:block" />
          <span className="text-primary">Excel Institucional</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 md:mb-12 text-slate-400 leading-relaxed">
          Plantillas profesionales diseñadas para el análisis de riesgo, gestión
          de carteras y proyecciones de flujo de caja de alto nivel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
          <button className="bg-primary text-on-primary font-headline-md px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all duration-300 font-bold text-base md:text-lg">
            Ver Catálogo de Templates
          </button>
          <button className="border-2 border-primary/30 text-primary font-headline-md px-8 md:px-12 py-4 md:py-5 rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 font-bold text-base md:text-lg">
            Saber Más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
