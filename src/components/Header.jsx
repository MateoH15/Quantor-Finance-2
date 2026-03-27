import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("navbar-menu");
      const toggleBtn = document.getElementById("navbar-toggle");

      if (
        menu &&
        toggleBtn &&
        !toggleBtn.contains(e.target) &&
        !menu.contains(e.target) &&
        menuOpen
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-[#141B2B] border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 relative">
          <Link to="/" id="logo-completo" className="block">
            <div className="flex items-center gap-2 font-bold text-lg">
              <img
                className="w-20 pr-2"
                src="/src/assets/logo-quantor-recortado.JPG"
                alt="logo quantor finance"
              />
              <span
                id="quantor"
                className="text-lg lg:text-2xl text-[#CEA855] p-0 tracking-wider"
              >
                QUANTOR
              </span>
              <span
                id="finance"
                className="text-lg lg:text-2xl font-display font-normal p-0 tracking-widest"
              >
                FINANCE
              </span>
            </div>
          </Link>

          <Link to="/" id="logo-solo" className="hidden">
            <img
              className="w-20"
              src="/src/assets/logo-quantor.png"
              alt="logo quantor solo"
            />
          </Link>

          <div className="flex items-center gap-0">
            <button
              id="navbar-toggle"
              className={`flex flex-col justify-center items-center w-10 h-10 rounded-md border border-slate-700 bg-[#141B2B] transition hover:bg-[#232b2b] focus:outline-none lg:hidden ${
                menuOpen ? "active" : ""
              }`}
              aria-label="Abrir menú"
              onClick={toggleMenu}
            >
              <span className="block w-6 h-0.5 mx-auto bg-[#CEA855] mb-1 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 mx-auto bg-[#CEA855] mb-1 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 mx-auto bg-[#CEA855] transition-all duration-300"></span>
            </button>

            <div className="flex items-center">
              <nav
                className="hidden lg:flex gap-1 flex-wrap text-white"
                aria-label="Secciones"
              >
                <Link
                  to="/"
                  className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
                  aria-current="page"
                >
                  Inicio
                </Link>

                <Link
                  to="/blog"
                  className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
                >
                  Blog
                </Link>

                <Link
                  to="/calculadora"
                  className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
                >
                  Calculadora
                </Link>
                <Link
                  to="/streaming"
                  className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
                >
                  Streaming
                </Link>
                <Link
                  to="/calendario"
                  className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
                >
                  Calendario económico
                </Link>
                <Link
                  to="/nosotros"
                  className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
                >
                  Nosotros
                </Link>
                <Link
                  to="/contacto"
                  className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
                >
                  Contacto
                </Link>
              </nav>
            </div>
          </div>

          <nav
            id="navbar-menu"
            className={`flex-col gap-2 flex-wrap items-end text-white absolute top-full right-0 w-3/4 max-w-xs bg-[#141B2B] border-t border-slate-800 shadow-lg px-4 py-4 transition-all duration-300 z-40 lg:hidden ${
              menuOpen ? "flex" : "hidden"
            }`}
            aria-label="Secciones"
          >
            <Link
              to="/"
              className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link text-right"
              aria-current="page"
              onClick={closeMenu}
            >
              Inicio
            </Link>

            <Link
              to="/blog"
              className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link text-right"
              onClick={closeMenu}
            >
              Blog
            </Link>

            <Link
              to="/calculadora"
              className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link text-right"
              onClick={closeMenu}
            >
              Calculadora
            </Link>
            <Link
              to="/streaming"
              className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link text-right"
              onClick={closeMenu}
            >
              Streaming
            </Link>
            <Link
              to="/calendario"
              className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
              onClick={closeMenu}
            >
              Calendario económico
            </Link>
            <Link
              to="/nosotros"
              className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
              onClick={closeMenu}
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className="px-3 font-semibold py-2 rounded-lg hover:text-[#CEA855] navbar-link"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Overlay para cerrar menú */}
      <div
        id="menu-overlay"
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Header;
