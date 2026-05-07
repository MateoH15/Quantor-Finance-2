import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CurrencyCard = ({ title, category, value, change, isPositive, type = 'normal', gridSpan = 'md:col-span-4' }) => {
  return (
    <div className={`glass-panel p-6 rounded-xl relative overflow-hidden ${gridSpan} border border-white/5 shadow-xl hover:bg-white/[0.02] transition-all h-full flex flex-col justify-between`}>
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
    <div className="glass-panel p-6 rounded-xl border border-white/5 shadow-xl flex flex-col justify-between md:col-span-4 min-h-[160px]">
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

const StreamingPreviewCard = ({ name, price, color }) => (
  <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col gap-3 md:col-span-3 hover:bg-white/[0.03] transition-colors group cursor-pointer">
    <div className="flex justify-between items-center">
       <span className="text-white font-bold group-hover:text-primary transition-colors">{name}</span>
       <div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}></div>
    </div>
    <span className="text-primary font-data-mono text-sm font-bold">{price}</span>
  </div>
);

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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <StreamingPreviewCard name="Netflix" price="desde $1,699" color="#E50914" />
        <StreamingPreviewCard name="Disney+" price="$799 / mes" color="#006E99" />
        <StreamingPreviewCard name="HBO Max" price="$699 / mes" color="#991BFA" />
        <StreamingPreviewCard name="Amazon Prime" price="$599 / mes" color="#00A8E1" />
      </div>
    </section>
  );
};

export default CurrencyMonitor;
