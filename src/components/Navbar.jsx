import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { setIsCartOpen, cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-5 max-w-full bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/40">
      <NavLink to="/" className="text-2xl font-black tracking-widest text-amber-600 dark:text-amber-500 font-manrope">
        QUANTOR FINANCE
      </NavLink>
      <div className="hidden lg:flex space-x-8 items-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => `font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          Inicio
        </NavLink>
        <NavLink 
          to="/productos" 
          className={({ isActive }) => `font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          Productos
        </NavLink>
        <NavLink 
          to="/calculadora" 
          className={({ isActive }) => `font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          Calculadora
        </NavLink>
        <NavLink 
          to="/streaming" 
          className={({ isActive }) => `font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          Streaming
        </NavLink>
        <NavLink 
          to="/calendario" 
          className={({ isActive }) => `font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          Calendario Económico
        </NavLink>
        <NavLink 
          to="/contacto" 
          className={({ isActive }) => `font-manrope tracking-tight text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          Contacto
        </NavLink>
        
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
    </nav>
  );
};

export default Navbar;
