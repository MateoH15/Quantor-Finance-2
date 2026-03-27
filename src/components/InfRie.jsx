import useInflation from "../hooks/useInflation";
import useCountryRisk from "../hooks/useCountryRisk";

const InfRie = () => {
  const { loading: loadingInflation, monthly, annual, date } = useInflation();
  const { loading: loadingRisk, value: riskValue } = useCountryRisk();

  return (
    <section
      id="inflacion-riesgo-pais"
      className="bg-slate-900/20 border border-slate-800 rounded-2xl p-4"
      aria-labelledby="tit-cotizaciones-bonos"
    >
      <h2 id="tit-cotizaciones-bonos" className="text-lg font-semibold mb-2">
        🔴 Inflación Argentina
      </h2>
      <div className="flex justify-center mb-2">
        <p id="fecha-inflacion">{date || "--/--/----"}</p>
      </div>
      <div
        id="container-inflacion"
        className="overflow-auto rounded-xl border border-slate-800 min-h-[120px] flex justify-center flex-col items-center p-5 relative mb-3"
      >
        {loadingInflation ? (
          <p className="text-gray-400">Cargando...</p>
        ) : (
          <>
            <p className="text-gray-400">Mensual</p>
            <p id="inflacion-mensual" className="text-4xl mb-4">
              {monthly !== null ? `${monthly}%` : "-"}
            </p>
            <p className="text-gray-400">Interanual</p>
            <p id="inflacion-interanual" className="text-2xl">
              {annual !== null ? `${annual}%` : "-"}
            </p>
          </>
        )}
      </div>
      <h2 id="tit-riesgo-pais" className="text-lg font-semibold mb-3">
        📈 Riesgo País
      </h2>
      <div className="overflow-auto rounded-xl border border-slate-800 flex justify-center items-center">
        {loadingRisk ? (
          <p className="text-gray-400 p-10">Cargando...</p>
        ) : (
          <p id="riesgo-pais" className="text-4xl p-10 m-0 font-medium">
            {riskValue !== null ? riskValue : "-"}
          </p>
        )}
      </div>
    </section>
  );
};

export default InfRie;
