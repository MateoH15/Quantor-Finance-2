import React from 'react';

const NewsItem = ({ category, title, excerpt, image }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg mb-4 h-48">
        <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image} />
      </div>
      <span className="font-label-caps text-primary text-[10px] font-bold tracking-widest uppercase">{category}</span>
      <h4 className="font-headline-md text-on-surface group-hover:text-primary transition-colors mt-2 text-lg font-bold text-white">{title}</h4>
      <p className="text-sm text-on-surface-variant mt-3 line-clamp-2 text-slate-400">{excerpt}</p>
    </div>
  );
};

const NewsSection = () => {
  const news = [
    {
      category: "MACROECONOMÍA",
      title: "Nuevas proyecciones del FMI sobre la inflación regional",
      excerpt: "Análisis profundo sobre el impacto de las tasas de interés en los mercados emergentes para el cierre del trimestre.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWVRvtpMAoi5li4MYBjSPOouVUv4ODeDUI3Iy3CFWc7R7EMlfm5BJGHFPPudRDo4BNtXdFMTAQG12m7vTB0CdtK4Tpvr8_c3of9ynJteaQrVqQLSP-elgSzSpmlEtVENOZtr377JWaLHhJdeRZNr2dORpsEy_dllPGTlqp3LabTxVg6kta7Y1RjUIu4D9ufmLaLCqr4bsVx3JP0dVYolIxsDqhlWaPkm-xoY2u7D2_L5gXgO0iQa2l9u0OarFvCdzCplJ0DqiW"
    },
    {
      category: "CRIPTOMERCADOS",
      title: "Bitcoin supera barreras técnicas ante adopción institucional",
      excerpt: "Los grandes fondos de inversión aumentan su exposición a activos digitales por tercer mes consecutivo.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjIc0WXskCGLHY3cj7-0TTDyZ0lI7SKxFH14Oq3nAm5j0QPMDOaTx2hSYZvTqvA-GECXnJuhYugL8QNth9i-WY6ONuJMpTsTOpj3hw_XK4-vA7hTvuUlIIS_HsX5NZODwGNRLp10wXwovl92jwfeajZzn83bO4gSRREUzmeEAnx9M6RDuBrcWviFJCrCmAxaGEcEDtWv9lUluYdnXnXNY_R_yzkiGN3nnvzwbZ9PmCqpXDbEoU939gJxj1vHIbXY0qKq_nBMEi"
    },
    {
      category: "CORPORATIVO",
      title: "Fusiones y adquisiciones baten récords en el sector tecnológico",
      excerpt: "El movimiento de capitales sugiere una reestructuración del ecosistema de software financiero.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpBXDf7Ezeth6os0ZXMeHVQrlzNOCJDhsAD_JUsYXaJDiHlpJJKMGwUHMSnIHBrG1MAaBjJ-RbgrG0lHiN3nQIsdO1OiNyLYMxCo3kyjG-PTpq9EC770bBlyy9gLU-zJwez4lUklBHvFQJdPI-kHwSEAr6lgc-cuiLAPDjuuCg1HVwVl-Whmbv9qC1KOzzcHMU7WERmgqkds2_6uRb8KYQHwfi0IeovSFb-7PMzl0T8LErsqy5qb1mz9EODQhYHVR9BXo-gAvd"
    }
  ];

  return (
    <section className="px-12 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-headline-md flex items-center gap-2 text-2xl font-bold text-white">
          <span className="material-symbols-outlined text-primary">news</span>
          Actualidad Financiera
        </h2>
        <a className="text-primary font-label-caps border-b border-primary/30 text-xs font-bold tracking-widest uppercase" href="#">VER TODO</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter gap-8">
        {news.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
