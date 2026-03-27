import { useState, useEffect } from "react";

const useNews = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const cargarNoticias = async () => {
      let todasNoticias = [];

      try {
        const urlSEC = "https://www.sec.gov/news/pressreleases.rss";
        const resp = await fetch(urlSEC);
        const texto = await resp.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(texto, "application/xml");
        const items = xml.querySelectorAll("item");

        items.forEach((item, index) => {
          if (index < 6) {
            const titulo = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const fecha = new Date(item.querySelector("pubDate").textContent);
            const descripcion =
              item.querySelector("description")?.textContent || "";

            todasNoticias.push({
              titulo,
              link,
              fecha,
              fuente: "SEC",
              descripcion,
            });
          }
        });
      } catch (err) {
        console.error("Error SEC:", err);
      }

      // Ordenar por fecha descendente
      todasNoticias.sort((a, b) => b.fecha - a.fecha);
      setNews(todasNoticias.slice(0, 6));
      setLoading(false);
    };

    cargarNoticias();
  }, []);

  return { loading, news };
};

export default useNews;
