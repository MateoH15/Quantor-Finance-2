import { useState, useEffect } from "react";

const useCountryRisk = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const getRiesgoPais = async () => {
      try {
        const url =
          "https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo";
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setValue(datos.valor);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar riesgo país:", err);
        setLoading(false);
      }
    };

    getRiesgoPais();
  }, []);

  return { loading, value };
};

export default useCountryRisk;
