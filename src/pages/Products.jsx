import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const products = [
    {
      id: 1,
      name: "Quantum Portfolio Manager 2.0",
      description:
        "La solución definitiva para la gestión de carteras multiactivos con simulación Monte Carlo integrada y análisis de sensibilidad dinámico.",
      price: 499.0,
      tag: "PREMIUM SELECTION",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBfXd74fXdb2uRdulpWswMkG_Ww8M_04vTm8amrA2KINub59r_KWm-e8u0DF8Bs7HP9USw7WhtF_xtKvgmCvpme5hddNxuw_mHo5PzaKang449hlkUJFUDUEaUaY2fMJuwKV3Y3wMfMDP7SiQyvkby7mluaykTeK6DFFF0Qt_uvPgnLcCdbBdTZmbicw55PYVZJOoYPqkvaI3cRvCbH2MR0v7rLiIp243IVQwlkcxac5EcsMpboKLgCpuCkouoWPK50GNWpF6Ws",
    },
    {
      id: 2,
      name: "Advanced Risk Matrix",
      description:
        "Gestión integral de riesgos operativos y de mercado para fondos de cobertura con Value-at-Risk y Stress Testing.",
      price: 185.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuChjRSWAx-SxAzH7X7FW7bmdIbAXz8MFMdkZF7C6S4ekg9YaYQvRqcYdKCu_W-a9hmRhOApySF1tSaLACgVpoRUslTGVk7a11nAnyhZObcKL-J5fQMjjlqXvHdTI8QvUjFjfY4MEevZzqjcKz2n1uAd1hPBNFzElnzIWbJzffHc251UvpOoh6r3ptTyeFZxyD8PIHNyKiQ2hyOR3as8lnPmmdveY1pWUjmwCkF9eYq42AOxg3kL2ppylB5vo4bcEKUskF0eyZ4j",
    },
    {
      id: 3,
      name: "Institutional Cash Flow Pro",
      description:
        "Modelado de flujos de caja proyectados con integración de escenarios macro, inflación y tipos de cambio.",
      price: 220.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAcaJ0dOnw4utu0HbQjYPjm9jXLGgRsmUXuqdaBluJel2QSqdjMBEbQInyrhkaVCAO8CPoGBbQUSXQX1tHFNEBW4HR2l9RC1KCd3CR1FwFqtAhVmOVr5PHxtiZKiO3daEI7Oj34af0NSCVeeFXSSeI4fffVjWR1SeqCPvxf2U9lWXJaD8Kxtupbu5ik2IJ88GCTWTVpS4aiCNj_atIYfGzIJ5U1-daxdqu9lNcElzYhAW7HeVCeOOkrqMGFdi_E5AILkV_l9YWw",
    },
    {
      id: 4,
      name: "Macro Monitor 360",
      description:
        "Actualización en tiempo real vía API. Visualización de curvas de rendimiento y alertas de volatilidad configurables.",
      price: 299.0,
      tag: "TOP VENTAS",
      image:
        "https://images.unsplash.com/photo-1611974717484-78393952f4c9?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 5,
      name: "Dynamic Asset Allocator",
      description:
        "Optimización de pesos de cartera basada en la teoría de Markowitz moderna y frontera eficiente.",
      price: 140.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAXrbdTPbm5Kl_XpfvNY7dyAclcHn4CFHkq8SrBEJsl9TLcSPfoT6g---E95MG7XfooyjnZ5f4hg-kIcdKIJMZPS7udzoR3hYk1oYWISEw36CUyjGCmCSKRYo3n4xkIatjnLkhUfDVSO85cX4yQFWY0FBXxViMt7JVzCkzeZejofJpLKXfOnWN3XO7bFxku4WhFDlsdclkNGqmnNHwvh5ZYkjZkTMcvemVf6oe3ZIixSpp7x-EzyYl8Gap-NofaD5o_hO6zqIJ6",
    },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-12 mb-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2">
            PRODUCTOS INSTITUCIONALES
          </span>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Herramientas de Precisión para el Éxito Financiero
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Acceda a nuestra suite exclusiva de plantillas Excel diseñadas para
            la gestión de activos de alto nivel, análisis de riesgo y
            proyecciones macroeconómicas.
          </p>
        </div>
      </section>

      {/* Uniform Grid Catalog */}
      <section className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/productos/${product.id}`}
              className="group glass-panel rounded-2xl flex flex-col h-full border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  src={product.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101415] to-transparent opacity-60"></div>
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-full text-[10px] font-bold border border-primary/30 tracking-widest uppercase z-10">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Precio
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-primary group-hover:text-inherit">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-12 mt-24">
        <div className="glass-panel rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="max-w-xl text-center md:text-left mb-8 md:mb-0 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              ¿Necesita una solución a medida?
            </h2>
            <p className="text-slate-400">
              Desarrollamos modelos financieros personalizados para necesidades
              institucionales específicas.
            </p>
          </div>
          <Link
            to="/contacto"
            className="bg-white text-slate-950 px-10 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all uppercase tracking-widest text-xs relative z-10 shadow-xl shadow-white/5"
          >
            CONTACTAR CON UN CONSULTOR
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;
