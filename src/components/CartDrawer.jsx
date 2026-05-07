import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, cartTotal, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems, userData })
      });
      
      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      console.error(err);
      alert('Error al iniciar el pago. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => {
          setIsCartOpen(false);
          setShowForm(false);
        }}
      ></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-[#101415] shadow-2xl border-l border-white/10 glass-panel">
            {/* Header */}
            <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shopping_cart</span>
                {showForm ? 'Datos de Envío' : 'Tu Carrito'}
              </h2>
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  setShowForm(false);
                }}
                className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {!showForm ? (
                cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-4xl text-slate-600">shopping_basket</span>
                    </div>
                    <h3 className="text-white font-bold mb-2">Tu carrito está vacío</h3>
                    <p className="text-slate-500 text-sm max-w-[200px]">Explora nuestras herramientas institucionales y comienza a gestionar tus activos con precisión.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-primary/20 transition-all">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-white font-bold text-sm truncate pr-2">{item.name}</h4>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-500 hover:text-error transition-colors"
                            >
                              <span className="material-symbols-outlined text-lg">delete</span>
                            </button>
                          </div>
                          <p className="text-primary font-bold text-lg mb-1">${item.price.toFixed(2)}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Licencia Única</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="fade-in">
                  <p className="text-slate-400 text-sm mb-8">Necesitamos tu información para enviarte las plantillas una vez confirmado el pago.</p>
                  <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Nombre Completo</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ej: Juan Pérez"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-all"
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Correo Electrónico</label>
                      <input 
                        required
                        type="email" 
                        placeholder="tu@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-all"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      />
                    </div>
                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                      <p className="text-[10px] text-primary leading-relaxed">
                        <span className="font-bold">IMPORTANTE:</span> Asegúrate de que el email sea correcto. Recibirás el link de descarga automáticamente allí.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="px-6 py-8 border-t border-white/5 bg-white/[0.01]">
                {!showForm ? (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Total</span>
                      <span className="text-2xl font-bold text-white">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => setShowForm(true)}
                      className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-fixed-dim transition-all shadow-xl shadow-primary/20 mb-4"
                    >
                      CONTINUAR AL PAGO
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <button 
                        onClick={() => setShowForm(false)}
                        className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                      >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Volver al carrito
                      </button>
                      <span className="text-xl font-bold text-white">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button 
                      form="checkout-form"
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-fixed-dim'}`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"></div>
                          PROCESANDO...
                        </>
                      ) : (
                        <>
                          PAGAR CON MERCADO PAGO
                        </>
                      )}
                    </button>
                  </>
                )}
                {!showForm && (
                  <button 
                    onClick={clearCart}
                    className="w-full py-2 text-slate-500 hover:text-slate-300 transition-colors text-[10px] font-bold uppercase tracking-widest"
                  >
                    Vaciar Carrito
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
