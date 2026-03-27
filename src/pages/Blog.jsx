import { Link } from "react-router-dom";
import articles from "../data/articles.json";

const Blog = () => {
  return (
    <main className="flex-1 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-[#CEA855] text-center">
          Blog de Finanzas y Mercados
        </h1>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Explora nuestros artículos detallados sobre economía, herramientas
          financieras y guías para mejorar tu gestión patrimonial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#CEA855]/10 text-[#CEA855] text-xs font-bold px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-slate-500 text-xs">{article.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-100 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${article.id}`}
                    className="text-[#CEA855] font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    Leer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
