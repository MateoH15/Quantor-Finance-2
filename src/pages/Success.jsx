import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Limpiamos el carrito al llegar a la página de éxito
    clearCart();
  }, []);

  return (
    <main className="pt-32 pb-24 min-h-screen hero-gradient flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon Container */}
        <div className="mb-10 relative inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
          <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 mx-auto border-4 border-[#101415]">
            <span className="material-symbols-outlined text-5xl text-on-primary">check</span>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          ¡Transacción Exitosa!
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
          Tu pago ha sido procesado correctamente. En breves minutos recibirás un correo electrónico con tus herramientas institucionales y las instrucciones de uso.
        </p>

        <div className="glass-panel p-8 rounded-2xl border border-white/5 mb-12 text-left bg-white/[0.02]">
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">info</span>
            Siguientes Pasos
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-300 text-sm">
              <span className="text-primary font-bold">1.</span>
              Revisa tu bandeja de entrada (y la carpeta de spam por si acaso).
            </li>
            <li className="flex items-start gap-3 text-slate-300 text-sm">
              <span className="text-primary font-bold">2.</span>
              Descarga los archivos Excel adjuntos o desde el link proporcionado.
            </li>
            <li className="flex items-start gap-3 text-slate-300 text-sm">
              <span className="text-primary font-bold">3.</span>
              Si tienes dudas técnicas, responde directamente al mail que recibiste.
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-fixed-dim transition-all shadow-xl shadow-primary/20"
          >
            VOLVER AL INICIO
          </Link>
          <Link 
            to="/productos" 
            className="w-full sm:w-auto border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            VER MÁS PRODUCTOS
          </Link>
        </div>

        <p className="mt-12 text-slate-600 text-xs uppercase tracking-[0.2em]">
          Quantor Finance - Precision in Every Asset
        </p>
      </div>
    </main>
  );
};

export default Success;
