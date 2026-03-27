const CookiesPolicy = () => {
  return (
    <main className="flex-1 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#CEA855] text-center">
          Política de Cookies
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              1. ¿Qué son las Cookies?
            </h2>
            <p className="text-slate-300">
              Las cookies son pequeños archivos de texto que se almacenan en tu
              computadora o dispositivo móvil cuando visitas un sitio web. Se usan
              ampliamente para que los sitios web funcionen de manera más
              eficiente y para proporcionar información a los propietarios del
              sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              2. Cómo Utilizamos las Cookies
            </h2>
            <p className="text-slate-300">
              Utilizamos cookies para una variedad de propósitos, que incluyen:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mt-2 space-y-2">
              <li>Recordar tus preferencias y configuraciones personales.</li>
              <li>Analizar cómo los usuarios navegan por nuestro sitio web.</li>
              <li>Proporcionar anuncios relevantes para ti a través de terceros.</li>
              <li>Mantener la seguridad de tu navegación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              3. Tipos de Cookies que Usamos
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Cookies Esenciales</h3>
                <p className="text-slate-400">
                  Estas cookies son necesarias para el funcionamiento del sitio y
                  no pueden desactivarse en nuestros sistemas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Cookies de Rendimiento</h3>
                <p className="text-slate-400">
                  Nos permiten contar las visitas y fuentes de tráfico para medir
                  y mejorar el rendimiento de nuestro sitio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Cookies de Publicidad</h3>
                <p className="text-slate-400">
                  Dichas cookies pueden ser establecidas a través de nuestro sitio
                  por nuestros socios publicitarios (como Google AdSense). Se
                  utilizan para construir un perfil de tus intereses y mostrarte
                  anuncios relevantes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              4. Control de Cookies
            </h2>
            <p className="text-slate-300">
              La mayoría de los navegadores te permiten controlar las cookies a
              través de su configuración de preferencias. Sin embargo, si limitas
              la capacidad de los sitios web para establecer cookies, puedes
              empeorar tu experiencia de usuario general.
            </p>
            <p className="text-slate-300 mt-2">
              Para obtener más información sobre cómo administrar las cookies en
              tu navegador, puedes visitar los siguientes enlaces:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mt-2 space-y-2">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              5. Cambios en la Política de Cookies
            </h2>
            <p className="text-slate-300">
              Podemos actualizar nuestra Política de Cookies ocasionalmente para
              reflejar cambios en la tecnología o en la normativa legal. Te
              recomendamos que revises esta página periódicamente.
            </p>
          </section>

          <p className="text-slate-400 text-sm italic text-center pt-8">
            Última actualización: 27 de marzo de 2026
          </p>
        </div>
      </div>
    </main>
  );
};

export default CookiesPolicy;
