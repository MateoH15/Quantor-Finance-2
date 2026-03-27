import { useParams, Link, Navigate } from "react-router-dom";
import articles from "../data/articles.json";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="flex-1 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="text-[#CEA855] font-semibold text-sm hover:underline flex items-center gap-1 mb-8"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Volver al Blog
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
              <span className="bg-[#CEA855]/10 text-[#CEA855] text-xs font-bold px-2 py-1 rounded">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>•</span>
              <span>Por {article.author}</span>
            </div>
          </header>

          <div
            className="article-content text-slate-300 leading-relaxed text-lg space-y-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer className="mt-16 pt-8 border-t border-slate-800">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 text-center">
              <h3 className="text-xl font-bold text-[#CEA855] mb-4">
                ¿Te gustó este artículo?
              </h3>
              <p className="text-slate-400 mb-6">
                Suscríbete a nuestro boletín para recibir análisis semanales y
                herramientas financieras directamente en tu correo.
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#CEA855]"
                />
                <button className="bg-[#CEA855] text-slate-900 font-bold px-6 py-2 rounded-lg hover:bg-[#d4b46b] transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
};

export default ArticleDetail;
