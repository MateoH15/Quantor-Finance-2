import React from 'react';

import TradingViewCalendar from '../components/TradingViewCalendar';

const EconomicCalendar = () => {
  return (
    <div className="pt-28 md:pt-32 pb-24 min-h-screen hero-gradient">
      <header className="w-full px-6 md:px-12 mb-10 md:mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-12 h-[1px] bg-primary"></div>
          <span className="font-label-caps text-primary uppercase text-[10px] md:text-xs font-bold tracking-widest">
            Macroeconomic Data
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-display-lg text-on-surface font-bold mb-4">
              Calendario Económico
            </h1>
            <p className="max-w-3xl text-on-surface-variant text-slate-400 text-base md:text-lg">
              Monitoreo en tiempo real de los eventos financieros y anuncios de
              política monetaria que mueven los mercados globales.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Live Data Feed
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full px-6 md:px-12">
        <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
          <TradingViewCalendar />
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 rounded-xl border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">priority_high</span>
            </div>
            <h3 className="text-white font-bold mb-2">Impacto Alto</h3>
            <p className="text-sm text-slate-400">Eventos marcados en rojo suelen generar alta volatilidad en los pares de divisas e índices relacionados.</p>
          </div>
          <div className="glass-panel p-8 rounded-xl border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">public</span>
            </div>
            <h3 className="text-white font-bold mb-2">Cobertura Global</h3>
            <p className="text-sm text-slate-400">Filtre por países para enfocarse en las economías que impactan directamente su estrategia de trading.</p>
          </div>
          <div className="glass-panel p-8 rounded-xl border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">schedule</span>
            </div>
            <h3 className="text-white font-bold mb-2">Hora Local</h3>
            <p className="text-sm text-slate-400">El calendario se ajusta automáticamente a su zona horaria para una precisión total en sus operaciones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicCalendar;
