import { useState, useEffect } from "react";

const useDolarQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState({
    blue: { compra: null, venta: null, varCompra: null, varVenta: null },
    oficial: { compra: null, venta: null, varCompra: null, varVenta: null },
    mep: { compra: null, venta: null, varCompra: null, varVenta: null },
    ccl: { compra: null, venta: null, varCompra: null, varVenta: null },
    cripto: { compra: null, venta: null, varCompra: null, varVenta: null },
    tarjeta: { compra: null, venta: null, varCompra: null, varVenta: null },
    mayorista: { compra: null, venta: null, varCompra: null, varVenta: null },
  });
  const [lastUpdate, setLastUpdate] = useState(null);

  const calcularVariacion = (hoy, ayer) => {
    return (((hoy - ayer) / ayer) * 100).toFixed(2);
  };

  const obtenerFechaAyer = () => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1);
    const dia = String(hoy.getDate()).padStart(2, "0");
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const año = hoy.getFullYear();
    return { dia, mes, año };
  };

  const cargarCotizacion = async (tipo, urlHoy, esBlue = false) => {
    try {
      const respuestaHoy = await fetch(urlHoy);
      const hoy = await respuestaHoy.json();

      const { dia, mes, año } = obtenerFechaAyer();
      const urlAyer = `https://api.argentinadatos.com/v1/cotizaciones/dolares/blue/${año}/${mes}/${dia}`;
      const respuestaAyer = await fetch(urlAyer);
      const ayer = await respuestaAyer.json();

      const varCompra = calcularVariacion(hoy.compra, ayer.compra);
      const varVenta = calcularVariacion(hoy.venta, ayer.venta);

      if (esBlue) {
        const fechaISO = hoy.fechaActualizacion;
        const fecha = new Date(fechaISO);
        const añoActualizacion = fecha.getFullYear();
        const mesActualizacion = String(fecha.getMonth() + 1).padStart(2, "0");
        const diaActualizacion = String(fecha.getDate()).padStart(2, "0");
        const horas = String(fecha.getHours()).padStart(2, "0");
        const minutos = String(fecha.getMinutes()).padStart(2, "0");
        setLastUpdate(
          `${añoActualizacion}/${mesActualizacion}/${diaActualizacion} ${horas}:${minutos}`
        );
      }

      return {
        compra: hoy.compra,
        venta: hoy.venta,
        varCompra: parseFloat(varCompra),
        varVenta: parseFloat(varVenta),
      };
    } catch (err) {
      console.error(`Error al cargar cotización ${tipo}:`, err);
      return { compra: null, venta: null, varCompra: null, varVenta: null };
    }
  };

  useEffect(() => {
    const cargarTodasCotizaciones = async () => {
      setLoading(true);

      const [blue, oficial, mep, ccl, cripto, tarjeta, mayorista] =
        await Promise.all([
          cargarCotizacion(
            "blue",
            "https://dolarapi.com/v1/dolares/blue",
            true
          ),
          cargarCotizacion(
            "oficial",
            "https://dolarapi.com/v1/dolares/oficial"
          ),
          cargarCotizacion("mep", "https://dolarapi.com/v1/dolares/bolsa"),
          cargarCotizacion(
            "ccl",
            "https://dolarapi.com/v1/dolares/contadoconliqui"
          ),
          cargarCotizacion("cripto", "https://dolarapi.com/v1/dolares/cripto"),
          cargarCotizacion(
            "tarjeta",
            "https://dolarapi.com/v1/dolares/tarjeta"
          ),
          cargarCotizacion(
            "mayorista",
            "https://dolarapi.com/v1/dolares/mayorista"
          ),
        ]);

      setQuotes({ blue, oficial, mep, ccl, cripto, tarjeta, mayorista });
      setLoading(false);
    };

    cargarTodasCotizaciones();
  }, []);

  return { loading, quotes, lastUpdate };
};

export default useDolarQuotes;
