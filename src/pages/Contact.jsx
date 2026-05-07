import React from 'react';

const Contact = () => {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-12 mb-20 text-center">
        <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block text-xs font-bold">Excelencia Institucional</span>
        <h1 className="font-display-lg text-display-lg text-on-background text-5xl font-bold mb-6">Contáctenos</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant font-body-lg text-slate-400 text-lg">
          Nuestra firma proporciona soluciones de gestión patrimonial y consultoría institucional a medida. Un asesor de Quantor Finance responderá a su consulta con absoluta discreción.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-gutter gap-10">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-slate-900/50 border border-white/5 p-12 shadow-2xl relative overflow-hidden rounded-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="font-headline-md text-headline-md text-on-background text-2xl font-bold mb-8">Solicitud de Consulta</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">Nombre Completo</label>
                <input className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg" placeholder="E.g. Alejandro Rivera" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">Email Corporativo</label>
                <input className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg" placeholder="a.rivera@institucion.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">Asunto</label>
              <select className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg appearance-none">
                <option>Consultoría de Inversión</option>
                <option>Gestión de Activos</option>
                <option>Planificación Fiscal Internacional</option>
                <option>Servicios de Tesorería</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">Mensaje</label>
              <textarea className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg" placeholder="Describa brevemente su requerimiento..." rows="6"></textarea>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container font-manrope font-bold py-5 px-8 rounded-lg flex justify-center items-center gap-2 hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/10 uppercase tracking-widest text-sm" type="submit">
              Enviar Requerimiento
              <span className="material-symbols-outlined text-md">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Right Column: Institutional Details */}
        <div className="lg:col-span-5 space-y-gutter space-y-6">
          {/* Info Cards */}
          <div className="bg-slate-900/80 border border-white/5 p-8 flex items-start gap-6 group hover:bg-slate-800 transition-colors duration-300 rounded-xl">
            <div className="bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 rounded-lg">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <div>
              <h3 className="font-label-caps text-primary uppercase text-[10px] font-bold tracking-widest mb-2">Oficinas Centrales</h3>
              <p className="text-xl font-bold mb-1 text-white">Madrid, España</p>
              <p className="text-on-surface-variant text-sm text-slate-400">Paseo de la Castellana 259, Torre de Cristal<br/>28046 Madrid</p>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-white/5 p-8 flex items-start gap-6 group hover:bg-slate-800 transition-colors duration-300 rounded-xl">
            <div className="bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 rounded-lg">
              <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
            </div>
            <div>
              <h3 className="font-label-caps text-primary uppercase text-[10px] font-bold tracking-widest mb-2">Línea Directa</h3>
              <p className="text-xl font-bold mb-1 text-white">+34 912 345 678</p>
              <p className="text-on-surface-variant text-sm text-slate-400">Lunes a Viernes, 08:30 - 18:00 CET</p>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-white/5 p-8 flex items-start gap-6 group hover:bg-slate-800 transition-colors duration-300 rounded-xl">
            <div className="bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 rounded-lg">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <div>
              <h3 className="font-label-caps text-primary uppercase text-[10px] font-bold tracking-widest mb-2">Comunicación Digital</h3>
              <p className="text-xl font-bold mb-1 text-white">contacto@quantor.finance</p>
              <p className="text-on-surface-variant text-sm text-slate-400">Tiempo de respuesta estimado: 2 horas</p>
            </div>
          </div>

          {/* Sophisticated Map Integration Placeholder */}
          <div className="relative w-full aspect-video border border-white/10 overflow-hidden shadow-2xl group rounded-xl">
            <img alt="Map" className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-color"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                <div className="absolute animate-ping h-8 w-8 rounded-full bg-primary opacity-75"></div>
                <div className="relative rounded-full h-4 w-4 bg-primary shadow-lg shadow-primary/50 border border-white"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm p-4 border border-white/10 rounded">
              <p className="font-label-caps text-[8px] text-primary uppercase mb-1 font-bold">Geo-Location Active</p>
              <p className="font-data-mono text-white text-[10px]">40.4816° N, 3.6874° W</p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Trust Section */}
      <section className="max-w-7xl mx-auto px-12 mt-24">
        <div className="border-t border-white/5 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center opacity-50 hover:opacity-100 transition-opacity">
            <span className="font-data-mono text-on-surface uppercase text-xs font-bold">Regulación CNMV</span>
          </div>
          <div className="text-center opacity-50 hover:opacity-100 transition-opacity">
            <span className="font-data-mono text-on-surface uppercase text-xs font-bold">Ciberseguridad Tier 4</span>
          </div>
          <div className="text-center opacity-50 hover:opacity-100 transition-opacity">
            <span className="font-data-mono text-on-surface uppercase text-xs font-bold">Auditoría Big Four</span>
          </div>
          <div className="text-center opacity-50 hover:opacity-100 transition-opacity">
            <span className="font-data-mono text-on-surface uppercase text-xs font-bold">Privacidad Suiza</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
