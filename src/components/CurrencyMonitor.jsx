import React, { useState, useEffect } from 'react';
// Optimized Market Monitor with Infinite Marquee
import { Link } from 'react-router-dom';

const CurrencyCard = ({ title, category, value, change, isPositive, type = 'normal', gridSpan = 'md:col-span-4' }) => {
  return (
    <div className={`glass-panel p-6 rounded-xl relative overflow-hidden ${gridSpan} border border-white/5 shadow-xl hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 h-full flex flex-col justify-between`}>
      {type === 'highlight' && (
        <div className="absolute top-0 right-0 p-4">
          <span className="material-symbols-outlined text-primary text-3xl opacity-30">monetization_on</span>
        </div>
      )}
      <div>
        <p className="font-label-caps text-on-surface-variant mb-1 text-[9px] font-bold tracking-widest uppercase text-slate-500">{category}</p>
        <h3 className="font-headline-md text-on-surface mb-3 text-lg font-bold">{title}</h3>
      </div>
      
      <div className="flex items-end gap-2">
        <span className={`${type === 'highlight' ? 'text-3xl' : 'text-xl'} font-data-mono text-primary font-bold`}>
          {value ? `$${parseFloat(value).toLocaleString('es-AR', { minimumFractionDigits: 2 })}` : '---'}
        </span>
        {change && change !== '---' && (
          <span className={`${isPositive ? 'text-emerald-500' : 'text-rose-500'} font-data-mono mb-1 flex items-center text-[10px] font-semibold`}>
            <span className="material-symbols-outlined text-[12px]">{isPositive ? 'arrow_upward' : 'arrow_downward'}</span> {change}%
          </span>
        )}
      </div>
      
      {type === 'highlight' && (
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
          <div>
            <p className="text-[8px] text-on-surface-variant uppercase tracking-widest font-bold text-slate-500">Compra</p>
            <p className="text-sm font-data-mono font-semibold text-white">
              {value ? `$${parseFloat(value * 0.98).toLocaleString('es-AR', { maximumFractionDigits: 0 })}` : '---'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-on-surface-variant uppercase tracking-widest font-bold text-slate-500">Venta</p>
            <p className="text-sm font-data-mono font-semibold text-white">
              {value ? `$${parseFloat(value).toLocaleString('es-AR', { maximumFractionDigits: 0 })}` : '---'}
            </p>
          </div>
        </div>
      )}
      
      {type === 'chart' && (
        <div className="h-10 mt-3 w-full bg-slate-900/50 rounded flex items-end px-1 pb-1 gap-1">
          <div className="w-full bg-primary/20 h-2/3 rounded-sm"></div>
          <div className="w-full bg-primary/20 h-1/2 rounded-sm"></div>
          <div className="w-full bg-primary/20 h-3/4 rounded-sm"></div>
          <div className="w-full bg-primary h-full rounded-sm"></div>
        </div>
      )}

      {type === 'normal' && (!change || change === '---') && (
         <p className="mt-4 text-[9px] text-on-surface-variant text-slate-500 uppercase tracking-tighter">Actualizado recientemente</p>
      )}
    </div>
  );
};

const IndicatorCard = ({ title, value, subValue, label, loading }) => {
  return (
    <div className="glass-panel p-6 rounded-xl border border-white/5 shadow-xl flex flex-col justify-between md:col-span-4 min-h-[160px] hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
      <div>
        <p className="font-label-caps text-slate-500 mb-2 text-[10px] font-bold tracking-widest uppercase">{label}</p>
        <h3 className="text-white text-lg font-bold mb-4">{title}</h3>
      </div>
      <div className="flex flex-col">
        {loading ? (
          <div className="h-8 w-24 bg-white/5 animate-pulse rounded"></div>
        ) : (
          <>
            <span className={`text-3xl font-data-mono font-black text-amber-500`}>{value}</span>
            {subValue && <span className="text-xs text-slate-400 mt-1 font-data-mono">{subValue}</span>}
          </>
        )}
      </div>
    </div>
  );
};

const streamingPlatforms = [
  { name: "Netflix", price: "desde $8.999/mes", color: "#E50914" },
  { name: "Disney+", price: "desde $11.999/mes", color: "#006E99" },
  { name: "Max", price: "desde $9.090/mes", color: "#991BFA" },
  { name: "Amazon Prime Video", price: "$7.994/mes", color: "#00A8E1" },
  { name: "Paramount+", price: "$8.535/mes", color: "#0064FF" },
  { name: "Apple TV+", price: "$13.286/mes", color: "#FFFFFF" },
];

const StreamingMarquee = () => {
  // Triple the items to ensure the marquee is always full and loops seamlessly
  const marqueeItems = [...streamingPlatforms, ...streamingPlatforms, ...streamingPlatforms];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient masks for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 px-4">
        {marqueeItems.map((p, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-48"
          >
            <div className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col gap-2 hover:border-primary/30 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-[10px] uppercase tracking-wider truncate pr-2">{p.name}</span>
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}` }}></div>
              </div>
              <span className="text-primary font-data-mono text-sm font-bold">{p.price}</span>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33% - 10.66px)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

const CurrencyMonitor = () => {
  const [dolares, setDolares] = useState([]);
  const [riesgoPais, setRiesgoPais] = useState(null);
  const [inflacion, setInflacion] = useState(null);
  const [inflacionInter, setInflacionInter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      // Fetch dollars (DolarApi)
      try {
        const res = await fetch('https://dolarapi.com/v1/dolares');
        if (res.ok) setDolares(await res.json());
      } catch (e) { console.error("Error fetching dollars:", e); }

      // Fetch Riesgo Pais (ArgentinaDatos)
      try {
        const res = await fetch('https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo');
        if (res.ok) {
          const data = await res.json();
          setRiesgoPais(data.valor);
        }
      } catch (e) { console.error("Error fetching risk country:", e); }

      // Fetch Inflación Mensual (ArgentinaDatos)
      try {
        const res = await fetch('https://api.argentinadatos.com/v1/finanzas/indices/inflacion');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setInflacion(data[data.length - 1].valor);
          }
        }
      } catch (e) { console.error("Error fetching inflation:", e); }

      // Fetch Inflación Interanual (ArgentinaDatos)
      try {
        const res = await fetch('https://api.argentinadatos.com/v1/finanzas/indices/inflacionInteranual');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setInflacionInter(data[data.length - 1].valor);
          }
        }
      } catch (e) { console.error("Error fetching interanual inflation:", e); }

      setLoading(false);
    };

    fetchData();
  }, []);

  const getDolar = (casa) => dolares.find(d => d.casa === casa);

  return (
    <section className="px-12 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">monitoring</span>
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Monitor de Mercados</h2>
        <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <CurrencyCard 
          category="MERCADO INFORMAL" 
          title="Dólar Blue" 
          value={getDolar('blue')?.venta} 
          change="---" 
          isPositive={true} 
          type="highlight"
          gridSpan="md:col-span-4"
        />
        <CurrencyCard 
          category="MERCADO BURSÁTIL" 
          title="Dólar MEP" 
          value={getDolar('bolsa')?.venta} 
          change="---" 
          isPositive={false} 
          type="chart"
          gridSpan="md:col-span-4"
        />
        <CurrencyCard 
          category="LIQUIDACIÓN" 
          title="Dólar CCL" 
          value={getDolar('contadoconliqui')?.venta} 
          change="---" 
          isPositive={true} 
          gridSpan="md:col-span-4"
        />
        
        <CurrencyCard 
          category="BANCO NACIÓN" 
          title="Dólar Oficial" 
          value={getDolar('oficial')?.venta} 
          isPositive={true} 
          gridSpan="md:col-span-3"
        />
        <CurrencyCard 
          category="BITCOIN / USDT" 
          title="Dólar Cripto" 
          value={getDolar('cripto')?.venta} 
          isPositive={true} 
          gridSpan="md:col-span-3"
        />
        <CurrencyCard 
          category="CONSUMO" 
          title="Dólar Tarjeta" 
          value={getDolar('tarjeta')?.venta} 
          isPositive={true} 
          gridSpan="md:col-span-3"
        />
        <CurrencyCard 
          category="INTERBANCARIO" 
          title="Dólar Mayorista" 
          value={getDolar('mayorista')?.venta} 
          isPositive={true} 
          gridSpan="md:col-span-3"
        />
      </div>

      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">analytics</span>
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Indicadores Económicos</h2>
        <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        <IndicatorCard 
          label="JP MORGAN / BCRA"
          title="Riesgo País Argentina"
          value={riesgoPais ? riesgoPais.toLocaleString('es-AR') : '---'}
          subValue="Puntos Básicos (Bps)"
          loading={loading}
        />
        <IndicatorCard 
          label="INDEC - IPC"
          title="Inflación Mensual"
          value={inflacion ? `${inflacion}%` : '---'}
          subValue="Último dato reportado"
          loading={loading}
        />
        <IndicatorCard 
          label="INDEC - IPC"
          title="Inflación Interanual"
          value={inflacionInter ? `${inflacionInter}%` : '---'}
          subValue="Variación acumulada 12 meses"
          loading={loading}
        />
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">play_circle</span>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Streaming en Argentina</h2>
        </div>
        <Link to="/streaming" className="text-primary font-label-caps border-b border-primary/30 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors">
          Ver más
        </Link>
      </div>

      <StreamingMarquee />
    </section>
  );
};

export default CurrencyMonitor;
