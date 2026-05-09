import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();

  // Mock data - in a real app this would come from an API or a shared state/file
  const products = [
    {
      id: 1,
      name: "Quantum Portfolio Manager 2.0",
      description: "La solución definitiva para la gestión de carteras multiactivos con simulación Monte Carlo integrada y análisis de sensibilidad dinámico.",
      longDescription: "Diseñado para gestores de fondos e inversores institucionales, el Quantum Portfolio Manager 2.0 ofrece una suite completa de herramientas analíticas. Permite la modelización de escenarios complejos, optimización de pesos mediante algoritmos avanzados y un dashboard interactivo que resume el perfil de riesgo-retorno en tiempo real.",
      price: 499.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfXd74fXdb2uRdulpWswMkG_Ww8M_04vTm8amrA2KINub59r_KWm-e8u0DF8Bs7HP9USw7WhtF_xtKvgmCvpme5hddNxuw_mHo5PzaKang449hlkUJFUDUEaUaY2fMJuwKV3Y3wMfMDP7SiQyvkby7mluaykTeK6DFFF0Qt_uvPgnLcCdbBdTZmbicw55PYVZJOoYPqkvaI3cRvCbH2MR0v7rLiIp243IVQwlkcxac5EcsMpboKLgCpuCkouoWPK50GNWpF6Ws",
      features: ["Simulación Monte Carlo", "Análisis de Sensibilidad", "Optimización Mean-Variance", "Reportes PDF Automatizados"]
    },
    {
      id: 2,
      name: "Advanced Risk Matrix",
      description: "Gestión integral de riesgos operativos y de mercado para fondos de cobertura.",
      longDescription: "Nuestra matriz de riesgo avanzada permite identificar, medir y monitorear los riesgos en múltiples dimensiones. Incluye Value-at-Risk (VaR), Expected Shortfall y Stress Testing bajo parámetros personalizables para cumplir con los estándares regulatorios más exigentes.",
      price: 185.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChjRSWAx-SxAzH7X7FW7bmdIbAXz8MFMdkZF7C6S4ekg9YaYQvRqcYdKCu_W-a9hmRhOApySF1tSaLACgVpoRUslTGVk7a11nAnyhZObcKL-J5fQMjjlqXvHdTI8QvUjFjfY4MEevZzqjcKz2n1uAd1hPBNFzElnzIWbJzffHc251UvpOoh6r3ptTyeFZxyD8PIHNyKiQ2hyOR3as8lnPmmdveY1pWUjmwCkF9eYq42AOxg3kL2ppylB5vo4bcEKUskF0eyZ4j",
      features: ["Value-at-Risk (VaR)", "Stress Testing", "Heatmaps de Riesgo", "Alertas en Tiempo Real"]
    },
    {
      id: 3,
      name: "Institutional Cash Flow Pro",
      description: "Modelado de flujos de caja proyectados con integración de escenarios macro.",
      longDescription: "Proyecte flujos de caja con precisión quirúrgica. Este modelo integra variables macroeconómicas como inflación, tasas de interés y tipos de cambio para ofrecer proyecciones dinámicas que se ajustan automáticamente a los cambios del mercado.",
      price: 220.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcaJ0dOnw4utu0HbQjYPjm9jXLGgRsmUXuqdaBluJel2QSqdjMBEbQInyrhkaVCAO8CPoGBbQUSXQX1tHFNEBW4HR2l9RC1KCd3CR1FwFqtAhVmOVr5PHxtiZKiO3daEI7Oj34af0NSCVeeFXSSeI4fffVjWR1SeqCPvxf2U9lWXJaD8Kxtupbu5ik2IJ88GCTWTVpS4aiCNj_atIYfGzIJ5U1-daxdqu9lNcElzYhAW7HeVCeOOkrqMGFdi_E5AILkV_l9YWw",
      features: ["Proyecciones Dinámicas", "Ajuste por Inflación", "Escenarios Multi-Moneda", "Dashboard de Liquidez"]
    },
    {
      id: 4,
      name: "Macro Monitor 360",
      description: "Actualización en tiempo real vía API. Visualización de curvas de rendimiento. Alertas de volatilidad configurables.",
      longDescription: "El Macro Monitor 360 es una consola centralizada para el seguimiento de la economía global. Conecta directamente con proveedores de datos para visualizar curvas soberanas, spreads de crédito e indicadores líderes de actividad económica.",
      price: 299.00,
      image: "https://images.unsplash.com/photo-1611974717484-78393952f4c9?auto=format&fit=crop&q=80&w=1000",
      features: ["Curvas de Rendimiento", "Spreads de Crédito", "Indicadores Líderes", "API Data Connect"]
    },
    {
      id: 5,
      name: "Dynamic Asset Allocator",
      description: "Optimización de pesos de cartera basada en la teoría de Markowitz moderna.",
      longDescription: "Encuentre la frontera eficiente de su cartera. Nuestra herramienta de asignación dinámica utiliza optimización cuadrática para determinar los pesos ideales que maximizan el retorno para un nivel de riesgo dado.",
      price: 140.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXrbdTPbm5Kl_XpfvNY7dyAclcHn4CFHkq8SrBEJsl9TLcSPfoT6g---E95MG7XfooyjnZ5f4hg-kIcdKIJMZPS7udzoR3hYk1oYWISEw36CUyjGCmCSKRYo3n4xkIatjnLkhUfDVSO85cX4yQFWY0FBXxViMt7JVzCkzeZejofJpLKXfOnWN3XO7bFxku4WhFDlsdclkNGqmnNHwvh5ZYkjZkTMcvemVf6oe3ZIixSpp7x-EzyYl8Gap-NofaD5o_hO6zqIJ6",
      features: ["Frontera Eficiente", "Optimización Cuadrática", "Rebalanceo Automático", "Análisis de Correlación"]
    }
  ];

  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="pt-32 pb-24 min-h-screen hero-gradient flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Producto no encontrado</h1>
        <p className="text-slate-400 mb-8">Lo sentimos, la herramienta que busca no existe o ha sido movida.</p>
        <Link to="/productos" className="text-primary hover:underline">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-32 pb-24 min-h-screen hero-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link 
          to="/productos" 
          className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8 md:mb-12 group"
        >
          <span className="material-symbols-outlined transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Volver al catálogo</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Image & Specs */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl overflow-hidden order-2 lg:order-1">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 md:h-[400px] object-cover rounded-xl mb-6 md:mb-8" 
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Formato</span>
                <span className="text-white font-bold text-sm md:text-base">Excel / VBA</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Versión</span>
                <span className="text-white font-bold text-sm md:text-base">2024.1.0</span>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <div className="flex flex-col order-1 lg:order-2">
            <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4">Herramienta Institucional</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{product.name}</h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="mb-10">
              <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Características Principales</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 mt-auto">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Inversión</span>
                <span className="text-3xl md:text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="w-full sm:w-auto bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-fixed-dim transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                ADQUIRIR AHORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
