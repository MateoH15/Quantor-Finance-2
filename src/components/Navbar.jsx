import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo-quantor-recortado.JPG";

const Navbar = () => {
  const { setIsCartOpen, cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/productos", label: "Productos" },
    { to: "/calculadora", label: "Calculadora" },
    { to: "/streaming", label: "Streaming" },
    { to: "/calendario", label: "Calendario Económico" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#141B2B] backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="Quantor"
            className="h-8 md:h-10 w-auto object-contain rounded-sm"
          />
          <div className="flex items-baseline gap-1 md:gap-2">
            <span className="font-raleway font-bold text-lg md:text-xl tracking-widest text-white uppercase group-hover:text-amber-500 transition-colors">
              Quantor
            </span>
            <span className="font-raleway font-normal text-lg md:text-xl tracking-widest text-white uppercase group-hover:text-amber-500 transition-colors">
              Finance
            </span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${isActive ? "text-amber-500 border-b-2 border-amber-500 pb-1" : "text-slate-400 hover:text-white hover:bg-white/5"}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10 ml-4"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#141B2B] border-b border-white/5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-manrope text-sm uppercase font-bold py-2 ${isActive ? "text-amber-500" : "text-slate-400"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
