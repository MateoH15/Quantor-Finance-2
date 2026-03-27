import { useState, useEffect } from "react";

const useInflation = () => {
  const [loading, setLoading] = useState(true);
  const [monthly, setMonthly] = useState(null);
  const [annual, setAnnual] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const getInflacion = async () => {
      try {
        const urlMensual =
          "https://api.argentinadatos.com/v1/finanzas/indices/inflacion";
        const respuestaMensual = await fetch(urlMensual);
        const datosMensual = await respuestaMensual.json();
        const ultimoMensual = datosMensual.at(-1);

        const urlInteranual =
          "https://api.argentinadatos.com/v1/finanzas/indices/inflacionInteranual";
        const respuestaInteranual = await fetch(urlInteranual);
        const datosInteranual = await respuestaInteranual.json();
        const ultimoInteranual = datosInteranual.at(-1);

        setMonthly(ultimoMensual.valor);
        setAnnual(ultimoInteranual.valor);
        setDate(ultimoMensual.fecha);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar inflación:", err);
        setLoading(false);
      }
    };

    getInflacion();
  }, []);

  return { loading, monthly, annual, date };
};

export default useInflation;
