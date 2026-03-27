const PrivacyPolicy = () => {
  return (
    <main className="flex-1 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#CEA855] text-center">
          Política de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-slate-300">
              En Quantor Finance, recopilamos información de diversas maneras para
              proporcionar y mejorar nuestros servicios. Esto puede incluir
              información que nos proporcionas directamente (como tu nombre y
              email en el formulario de contacto) e información recopilada
              automáticamente (como tu dirección IP y datos de navegación).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              2. Uso de la Información
            </h2>
            <p className="text-slate-300">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mt-2 space-y-2">
              <li>Personalizar tu experiencia en nuestro sitio.</li>
              <li>Mejorar nuestro sitio web y servicios.</li>
              <li>Enviar correos electrónicos periódicos si te suscribes a nuestro boletín.</li>
              <li>Responder a tus consultas y mensajes de contacto.</li>
              <li>Mostrar anuncios personalizados a través de redes publicitarias como Google AdSense.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              3. Protección de Datos
            </h2>
            <p className="text-slate-300">
              Implementamos una variedad de medidas de seguridad para mantener la
              seguridad de tu información personal. Utilizamos encriptación de
              punta a punta y servidores seguros para proteger tus datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              4. Cookies y Publicidad de Terceros
            </h2>
            <p className="text-slate-300">
              Utilizamos cookies para entender y guardar tus preferencias para
              futuras visitas. Los proveedores de terceros, incluido Google,
              utilizan cookies para publicar anuncios basados en las visitas
              anteriores de un usuario a nuestro sitio web u otros sitios web.
            </p>
            <p className="text-slate-300 mt-2">
              El uso de cookies de publicidad por parte de Google permite a Google
              y a sus socios publicar anuncios basados en las visitas de los
              usuarios a sus sitios y/u otros sitios en Internet. Los usuarios
              pueden inhabilitar la publicidad personalizada visitando la
              Configuración de anuncios de Google.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              5. Divulgación a Terceros
            </h2>
            <p className="text-slate-300">
              No vendemos, intercambiamos ni transferimos de ninguna otra manera a
              terceros tu información de identificación personal, excepto para las
              partes confiables que nos asisten en la operación de nuestro sitio
              web, siempre que dichas partes acuerden mantener esta información
              confidencial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              6. Consentimiento
            </h2>
            <p className="text-slate-300">
              Al utilizar nuestro sitio, aceptas nuestra política de privacidad.
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

export default PrivacyPolicy;
