import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualRate, setAnnualRate] = useState(8.5);
  const [years, setYears] = useState(25);
  const [results, setResults] = useState({
    finalValue: 0,
    totalInterests: 0,
    totalInvested: 0,
    yearlyBreakdown: []
  });

  const calculateProjection = () => {
    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    let balance = initialInvestment;
    let totalInvested = initialInvestment;
    const yearlyBreakdown = [];

    for (let year = 1; year <= years; year++) {
      let yearlyInterest = 0;
      for (let month = 1; month <= 12; month++) {
        const interest = balance * monthlyRate;
        yearlyInterest += interest;
        balance += interest + monthlyContribution;
        totalInvested += monthlyContribution;
      }
      yearlyBreakdown.push({
        year,
        deposits: totalInvested,
        interest: yearlyInterest,
        balance: balance
      });
    }

    setResults({
      finalValue: balance,
      totalInterests: balance - totalInvested,
      totalInvested: totalInvested,
      yearlyBreakdown: yearlyBreakdown
    });
  };

  useEffect(() => {
    calculateProjection();
  }, []);

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header Section */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-12 h-[1px] bg-primary"></div>
          <span className="font-label-caps text-label-caps text-primary uppercase text-xs font-bold tracking-widest">Institutional Tools</span>
        </div>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4 text-4xl font-bold">Calculadora de Interés Compuesto</h1>
        <p className="text-on-surface-variant max-w-2xl font-body-lg text-slate-400">
          Proyecte el crecimiento de su patrimonio con precisión institucional. Analice el impacto de las contribuciones recurrentes y el horizonte temporal en su estrategia de inversión.
        </p>
      </header>

      {/* Main Dashboard Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Inputs */}
        <aside className="lg:col-span-4 flex flex-col gap-gutter">
          <section className="glass-panel p-lg rounded-xl p-8">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-2 mb-6 text-xl font-semibold">
              <span className="material-symbols-outlined text-primary">settings_applications</span>
              Parámetros
            </h3>
            <form className="space-y-6">
              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 text-xs uppercase font-bold tracking-widest">INVERSIÓN INICIAL (USD)</label>
                <input 
                  className="w-full input-recessed p-md text-on-surface font-data-mono rounded-lg p-4 bg-slate-900/50 border border-white/10" 
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  type="number"
                />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 text-xs uppercase font-bold tracking-widest">APORTACIÓN MENSUAL</label>
                <input 
                  className="w-full input-recessed p-md text-on-surface font-data-mono rounded-lg p-4 bg-slate-900/50 border border-white/10" 
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  type="number"
                />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 text-xs uppercase font-bold tracking-widest">TASA DE INTERÉS ANUAL (%)</label>
                <input 
                  className="w-full input-recessed p-md text-on-surface font-data-mono rounded-lg p-4 bg-slate-900/50 border border-white/10" 
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  type="number"
                />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 text-xs uppercase font-bold tracking-widest">HORIZONTE TEMPORAL (AÑOS)</label>
                <div className="flex items-center gap-4">
                  <input 
                    className="flex-grow accent-primary" 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                  />
                  <span className="font-data-mono text-primary text-body-lg min-w-[40px] font-bold">{years}</span>
                </div>
              </div>
              <button 
                onClick={calculateProjection}
                className="w-full py-4 bg-primary text-on-primary font-manrope font-bold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/10" 
                type="button"
              >
                Recalcular Proyección
              </button>
            </form>
          </section>

          {/* Value Proposition Mini Card */}
          <section className="bg-secondary-container/20 border border-secondary-container p-lg rounded-xl p-8 border-slate-700">
            <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            <h4 className="font-headline-md text-body-lg text-on-surface mb-2 font-semibold">Precisión de Grado A</h4>
            <p className="text-body-sm text-on-surface-variant text-slate-400 text-sm">Nuestros algoritmos utilizan capitalización mensual estándar para proyecciones de gestión patrimonial.</p>
          </section>
        </aside>

        {/* Right Column: Visualization */}
        <div className="lg:col-span-8 flex flex-col gap-gutter space-y-6">
          {/* Summary Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter gap-4">
            <div className="glass-panel p-lg rounded-xl border-l-4 border-l-primary p-6">
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-2 text-xs uppercase font-bold">VALOR FINAL ESTIMADO</span>
              <div className="font-data-mono text-headline-md text-primary text-2xl font-bold">${results.finalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            <div className="glass-panel p-lg rounded-xl p-6">
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-2 text-xs uppercase font-bold">INTERESES TOTALES</span>
              <div className="font-data-mono text-headline-md text-on-surface text-2xl font-bold">${results.totalInterests.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            <div className="glass-panel p-lg rounded-xl p-6">
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-2 text-xs uppercase font-bold">CAPITAL INVERTIDO</span>
              <div className="font-data-mono text-headline-md text-on-surface text-2xl font-bold">${results.totalInvested.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
          </div>

          {/* Main Chart Canvas (Simulated) */}
          <div className="glass-panel p-lg rounded-xl flex-grow min-h-[400px] flex flex-col p-8">
            <div className="flex justify-between items-center mb-lg mb-6">
              <h3 className="font-headline-md text-headline-md text-on-surface text-xl font-semibold">Proyección de Crecimiento</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-xs font-label-caps text-on-surface-variant uppercase">Capital + Interés</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <span className="text-xs font-label-caps text-on-surface-variant uppercase">Capital Nominal</span>
                </div>
              </div>
            </div>
            <div className="relative flex-grow flex items-end gap-2 pt-12">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-l border-b border-white/10">
                <div className="w-full border-t border-white/5"></div>
                <div className="w-full border-t border-white/5"></div>
                <div className="w-full border-t border-white/5"></div>
                <div className="w-full border-t border-white/5"></div>
              </div>
              
              {/* Bars (Dynamic based on results) */}
              {results.yearlyBreakdown.filter((_, i) => i % Math.max(1, Math.floor(years / 6)) === 0 || i === years - 1).slice(-6).map((data, i) => (
                <div key={i} className="flex-grow bg-slate-800/40 relative group transition-all duration-500" style={{ height: `${(data.balance / results.finalValue) * 100}%` }}>
                  <div className="absolute bottom-0 left-0 w-full bg-primary/20" style={{ height: '100%' }}></div>
                  <div className="absolute bottom-0 left-0 w-full bg-primary group-hover:brightness-125 transition-all" style={{ height: `${(data.deposits / data.balance) * 100}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 font-data-mono text-[10px] text-on-surface-variant uppercase">
              <span>Año 0</span>
              <span>Año {Math.floor(years * 0.2)}</span>
              <span>Año {Math.floor(years * 0.4)}</span>
              <span>Año {Math.floor(years * 0.6)}</span>
              <span>Año {Math.floor(years * 0.8)}</span>
              <span>Año {years}</span>
            </div>
          </div>

          {/* Financial Table Section */}
          <section className="glass-panel rounded-xl overflow-hidden">
            <div className="p-lg border-b border-white/5 bg-white/[0.02] p-6">
              <h3 className="font-headline-md text-body-lg text-on-surface font-semibold">Desglose Anual de Rendimientos</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-sm">
                <thead>
                  <tr className="bg-surface-container-high/50 border-b border-white/5">
                    <th className="p-md p-4 font-label-caps text-on-surface-variant text-xs uppercase font-bold">AÑO</th>
                    <th className="p-md p-4 font-label-caps text-on-surface-variant text-xs uppercase font-bold">DEPÓSITOS</th>
                    <th className="p-md p-4 font-label-caps text-on-surface-variant text-xs uppercase font-bold">INTERÉS</th>
                    <th className="p-md p-4 font-label-caps text-on-surface-variant text-xs uppercase font-bold">SALDO FINAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {results.yearlyBreakdown.slice(0, 10).map((data) => (
                    <tr key={data.year} className="hover:bg-white/[0.03] transition-colors">
                      <td className="p-md p-4 font-data-mono text-on-surface">Año {data.year}</td>
                      <td className="p-md p-4 font-data-mono text-on-surface-variant">${data.deposits.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      <td className="p-md p-4 font-data-mono text-primary">${data.interest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      <td className="p-md p-4 font-data-mono text-on-surface font-bold">${data.balance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      {/* Extra Contextual Info */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-xl gap-10">
        <div className="glass-panel p-lg rounded-xl p-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary">info</span>
          </div>
          <h4 className="font-headline-md text-headline-md text-on-surface mb-4 text-xl font-semibold">¿Cómo funciona el Interés Compuesto?</h4>
          <p className="text-on-surface-variant text-body-lg leading-relaxed mb-6 text-slate-400">
            A diferencia del interés simple, el interés compuesto se calcula sobre el capital principal y también sobre los intereses acumulados de periodos anteriores. En **Quantor Finance**, utilizamos una fórmula de capitalización continua para reflejar los entornos de inversión modernos.
          </p>
          <div className="p-md bg-surface-container-lowest rounded border border-white/5 font-data-mono text-sm text-primary p-4 bg-black/40">
            A = P(1 + r/n)^(nt)
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden min-h-[300px]">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Investment Growth"
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-lg flex flex-col justify-end p-8">
            <h4 className="font-headline-md text-headline-md text-white mb-2 text-xl font-bold">El Poder del Tiempo</h4>
            <p className="text-slate-300 text-body-sm text-sm">Incluso pequeñas contribuciones mensuales pueden convertirse en fortunas significativas si se mantienen durante décadas.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
