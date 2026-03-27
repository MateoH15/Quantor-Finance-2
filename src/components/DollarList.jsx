import useDolarQuotes from "../hooks/useDolarQuotes";
import DollarCard from "./DollarCard";

const DollarList = () => {
  const { loading, quotes, lastUpdate } = useDolarQuotes();

  if (loading) {
    return (
      <section
        id="cotizaciones-divisas"
        className="bg-slate-900/20 border border-slate-800 rounded-2xl p-4 w-full max-w-3xl"
        aria-labelledby="tit-cotizaciones-divisas"
      >
        <h2
          id="tit-cotizaciones-divisas"
          className="text-lg font-semibold mb-3"
        >
          💲 Dólar
        </h2>
        <div className="flex justify-center items-center min-h-[300px]">
          <p className="text-slate-400">Cargando cotizaciones...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="cotizaciones-divisas"
      className="bg-slate-900/20 border border-slate-800 rounded-2xl p-4 w-full max-w-3xl"
      aria-labelledby="tit-cotizaciones-divisas"
    >
      <h2 id="tit-cotizaciones-divisas" className="text-lg font-semibold mb-3">
        💲 Dólar
      </h2>
      <div className="flex flex-row gap-6 flex-wrap">
        {/* Columna izquierda: Blue y Oficial */}
        <div className="flex flex-col gap-4 flex-1 min-w-[220px]">
          {/* Dólar Blue */}
          <DollarCard
            name="Dólar Blue"
            buyPrice={quotes.blue.compra}
            sellPrice={quotes.blue.venta}
            buyVariation={quotes.blue.varCompra}
            sellVariation={quotes.blue.varVenta}
            isHighlighted={true}
          />

          {/* Dólar Oficial */}
          <DollarCard
            name="Dólar Oficial"
            buyPrice={quotes.oficial.compra}
            sellPrice={quotes.oficial.venta}
            buyVariation={quotes.oficial.varCompra}
            sellVariation={quotes.oficial.varVenta}
          />

          {/* Dólar MEP */}
          <DollarCard
            name="Dólar MEP"
            buyPrice={quotes.mep.compra}
            sellPrice={quotes.mep.venta}
            buyVariation={quotes.mep.varCompra}
            sellVariation={quotes.mep.varVenta}
          />
          <p className="text-xs mt-2 mb-2 mx-4 underline text-center">
            {lastUpdate
              ? `Actualizado por última vez: ${lastUpdate}`
              : "Actualizado por última vez: -"}
          </p>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-4 flex-1 min-w-[220px]">
          <DollarCard
            name="Dólar CCL"
            buyPrice={quotes.ccl.compra}
            sellPrice={quotes.ccl.venta}
            buyVariation={quotes.ccl.varCompra}
            sellVariation={quotes.ccl.varVenta}
          />

          <DollarCard
            name="Dólar Cripto"
            buyPrice={quotes.cripto.compra}
            sellPrice={quotes.cripto.venta}
            buyVariation={quotes.cripto.varCompra}
            sellVariation={quotes.cripto.varVenta}
          />

          <DollarCard
            name="Dólar Tarjeta"
            buyPrice={quotes.tarjeta.compra}
            sellPrice={quotes.tarjeta.venta}
            buyVariation={quotes.tarjeta.varCompra}
            sellVariation={quotes.tarjeta.varVenta}
          />

          <DollarCard
            name="Dólar Mayorista"
            buyPrice={quotes.mayorista.compra}
            sellPrice={quotes.mayorista.venta}
            buyVariation={quotes.mayorista.varCompra}
            sellVariation={quotes.mayorista.varVenta}
          />
        </div>
      </div>
    </section>
  );
};

export default DollarList;
