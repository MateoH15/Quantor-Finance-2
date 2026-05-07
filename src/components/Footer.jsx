import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 mt-20">
      <div className="w-full py-12 px-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold tracking-tighter text-amber-500 font-manrope mb-4">QUANTOR FINANCE</div>
          <p className="font-manrope text-xs leading-relaxed text-slate-500">
            © 2024 QUANTOR FINANCE. <br/>
            Excelencia en Gestión Institucional.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest text-xs font-bold">Navegación</h4>
          <ul className="space-y-3">
            <li><NavLink className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity" to="/">Inicio</NavLink></li>
            <li><NavLink className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity" to="/productos">Productos</NavLink></li>
            <li><NavLink className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity" to="/calculadora">Calculadora</NavLink></li>
            <li><NavLink className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity" to="/streaming">Streaming</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest text-xs font-bold">Legal</h4>
          <ul className="space-y-3">
            <li><a className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity" href="#">Términos y Condiciones</a></li>
            <li><a className="font-manrope text-xs text-slate-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-opacity" href="#">Privacidad</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest text-xs font-bold">Newsletter</h4>
          <p className="text-xs text-slate-500 mb-4">Reciba reportes exclusivos de mercado.</p>
          <div className="flex">
            <input className="bg-surface-container border border-white/10 text-xs py-2 px-3 focus:ring-primary-container focus:border-primary-container w-full rounded-l text-on-surface" placeholder="Email" type="email"/>
            <button className="bg-primary-container text-on-primary-container p-2 rounded-r hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-manrope text-xs leading-relaxed text-slate-500">© 2024 QUANTOR FINANCE. Excelencia en Gestión Institucional.</span>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors cursor-pointer">public</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors cursor-pointer">share</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors cursor-pointer">lock</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
