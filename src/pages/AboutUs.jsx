const AboutUs = () => {
  return (
    <main className="flex-1 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#CEA855] text-center">
          Sobre Nosotros
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              Nuestra Misión
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              En <strong>Quantor Finance</strong>, nuestra misión es democratizar
              el acceso a la información financiera compleja. Creemos que cada
              individuo debe tener las herramientas y el conocimiento necesarios
              para tomar decisiones financieras informadas y seguras.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              ¿Qué Ofrecemos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-[#CEA855] mb-2">
                  Análisis de Mercado
                </h3>
                <p className="text-slate-400">
                  Proporcionamos análisis profundos y actualizados sobre los
                  mercados financieros locales e internacionales, con un enfoque
                  especial en la economía argentina.
                </p>
              </div>
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-[#CEA855] mb-2">
                  Herramientas Gratuitas
                </h3>
                <p className="text-slate-400">
                  Desde calculadoras de inflación hasta monitores de tipos de
                  cambio en tiempo real, nuestras herramientas están diseñadas
                  para ser intuitivas y precisas.
                </p>
              </div>
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-[#CEA855] mb-2">
                  Educación Financiera
                </h3>
                <p className="text-slate-400">
                  Publicamos guías y artículos educativos para ayudar a los
                  principiantes a navegar el mundo de las inversiones y las
                  finanzas personales.
                </p>
              </div>
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-[#CEA855] mb-2">
                  Transparencia
                </h3>
                <p className="text-slate-400">
                  Toda nuestra información proviene de fuentes oficiales y
                  verificables, garantizando la máxima transparencia en cada
                  dato publicado.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Estamos comprometidos con la excelencia y la veracidad. En un mundo
              lleno de ruido informativo, Quantor Finance se posiciona como una
              fuente confiable donde los datos hablan por sí mismos, acompañados
              siempre de un análisis humano y crítico.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
