import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900/20">
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 dark:text-teal-300">
          <img
            src="/src/assets/logo-quantor.png"
            alt="Logo de Quantor Finance"
            style={{ width: "16rem", margin: 0, padding: 0 }}
          />
        </div>

        <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
          Quantor Finance ofrece precios en tiempo real, análisis y herramientas
          para gestionar tus inversiones. La información es orientativa y no
          constituye asesoramiento financiero.
        </p>

        <ul className="mt-12 mb-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              className="text-gray-700 font-semibold transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              to="/"
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 font-semibold transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              to="/calculadora"
            >
              Calculadora
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 font-semibold transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              to="/streaming"
            >
              Streaming
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 font-semibold transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              to="/calendario"
            >
              Calendario económico
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 font-semibold transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              to="/nosotros"
            >
              Nosotros
            </Link>
          </li>
        </ul>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link to="/privacidad" className="text-sm text-gray-400 hover:text-[#CEA855]">
            Política de Privacidad
          </Link>
          <Link to="/cookies" className="text-sm text-gray-400 hover:text-[#CEA855]">
            Política de Cookies
          </Link>
          <Link to="/terminos" className="text-sm text-gray-400 hover:text-[#CEA855]">
            Términos y Condiciones
          </Link>
          <Link to="/contacto" className="text-sm text-gray-400 hover:text-[#CEA855]">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
