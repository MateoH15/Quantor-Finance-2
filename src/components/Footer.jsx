import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-quantor-recortado.JPG";

const Footer = () => {
  return (
    <footer className="w-full bg-[#141B2B] border-t border-white/10 mt-20">
      <div className="w-full py-12 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={logo}
              alt="Quantor"
              className="h-8 w-auto object-contain rounded-sm"
            />
            <div className="flex items-baseline gap-2">
              <span className="font-raleway font-bold text-lg tracking-widest text-white uppercase">
                Quantor
              </span>
              <span className="font-raleway font-normal text-lg tracking-widest text-white uppercase">
                Finance
              </span>
            </div>
          </div>
          <p className="font-manrope text-xs leading-relaxed text-slate-500 max-w-xs">
            © 2026 QUANTOR FINANCE. <br />
            Excelencia en Gestión Institucional.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest text-xs font-bold">
            Navegación
          </h4>
          <ul className="space-y-3">
            <li>
              <NavLink
                className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity"
                to="/productos"
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity"
                to="/calculadora"
              >
                Calculadora
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity"
                to="/streaming"
              >
                Streaming
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest text-xs font-bold">
            Legal
          </h4>
          <ul className="space-y-3">
            <li>
              <NavLink
                className="font-manrope text-xs text-slate-500 hover:text-primary transition-colors"
                to="/terminos"
              >
                Términos y Condiciones
              </NavLink>
            </li>
            <li>
              <a
                className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity"
                href="#"
              >
                Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-manrope text-xs leading-relaxed text-slate-500">
          © 2026 QUANTOR FINANCE. Excelencia en Gestión Institucional.
        </span>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors cursor-pointer">
            public
          </span>
          <span className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors cursor-pointer">
            share
          </span>
          <span className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors cursor-pointer">
            lock
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
