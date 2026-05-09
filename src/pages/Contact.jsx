import React from "react";

const Contact = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      {/* Hero Section */}
      <section className="w-full px-6 md:px-12 mb-16 md:mb-20 text-center">
        <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block text-[10px] md:text-xs font-bold">
          Excelencia Institucional
        </span>
        <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-background font-bold mb-6">
          Contáctenos
        </h1>
        <p className="max-w-3xl mx-auto text-on-surface-variant font-body-lg text-slate-400 text-base md:text-lg">
          Nuestra firma proporciona soluciones de gestión patrimonial y
          consultoría institucional a medida. Un asesor de Quantor Finance
          responderá a su consulta con absoluta discreción.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-slate-900/50 border border-white/5 p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden rounded-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="font-headline-md text-headline-md text-on-background text-2xl font-bold mb-8">
            Solicitud de Consulta
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">
                  Nombre Completo
                </label>
                <input
                  className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg"
                  placeholder="E.g. Alejandro Rivera"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">
                  Email Corporativo
                </label>
                <input
                  className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg"
                  placeholder="a.rivera@institucion.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">
                Asunto
              </label>
              <input
                type="text"
                placeholder="Inversiones"
                className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg appearance-none"
              ></input>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-on-surface-variant uppercase text-[10px] font-bold tracking-widest block mb-2">
                Mensaje
              </label>
              <textarea
                className="w-full bg-slate-950 border border-white/10 p-4 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg"
                placeholder="Describa brevemente su requerimiento..."
                rows="6"
              ></textarea>
            </div>
            <button
              className="w-full bg-primary-container text-on-primary-container font-manrope font-bold py-5 px-8 rounded-lg flex justify-center items-center gap-2 hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/10 uppercase tracking-widest text-sm"
              type="submit"
            >
              Enviar Requerimiento
              <span className="material-symbols-outlined text-md">
                arrow_forward
              </span>
            </button>
          </form>
        </div>

        {/* Right Column: Institutional Details */}
        <div className="lg:col-span-5 space-y-gutter space-y-6">
          {/* Info Cards */}

          <div className="bg-slate-900/80 border border-white/5 p-8 flex items-start gap-6 group hover:bg-slate-800 transition-colors duration-300 rounded-xl">
            <div className="bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 rounded-lg">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <div>
              <h3 className="font-label-caps text-primary uppercase text-[10px] font-bold tracking-widest mb-2">
                Comunicación Digital
              </h3>
              <p className="text-xl font-bold mb-1 text-white">
                contacto@quantor.finance
              </p>
              <p className="text-on-surface-variant text-sm text-slate-400">
                Tiempo de respuesta estimado: 2 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
