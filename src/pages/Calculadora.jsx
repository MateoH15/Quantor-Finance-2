import { useState } from "react";

const Calculadora = () => {
  const [inversionInicial, setInversionInicial] = useState("");
  const [aporteMensual, setAporteMensual] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [frecuencia, setFrecuencia] = useState("anual");
  const [resultados, setResultados] = useState([]);
  const [balanceFinal, setBalanceFinal] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    setError("");
    setResultados([]);
    setBalanceFinal(null);

    const inicial = parseFloat(inversionInicial);
    const aporte = parseFloat(aporteMensual) || 0;
    const años = parseInt(periodo);
    const tasa = parseFloat(tasaInteres) / 100;

    if (!inicial || inicial <= 0) {
      setError("Ingresa una monto inicial válido.");
      return;
    }
    if (!años || años <= 0) {
      setError("Ingresa un período válido.");
      return;
    }
    if (!tasaInteres || tasa <= 0) {
      setError("La tasa de interés debe ser mayor que 0.");
      return;
    }
    if (aporte < 0) {
      setError("Ingresa un aporte mensual válido.");
      return;
    }

    const m = frecuencia === "mensual" ? 12 : 1;
    const N = años * m;
    const i = tasa / m;
    const PMT = frecuencia === "mensual" ? aporte : aporte * 12;

    const fvPrincipal = inicial * Math.pow(1 + i, N);
    let fvAnualidad = 0;
    if (i === 0) {
      fvAnualidad = PMT * N;
    } else {
      fvAnualidad = PMT * ((Math.pow(1 + i, N) - 1) / i);
    }

    const fvTotal = fvPrincipal + fvAnualidad;
    setBalanceFinal(fvTotal);

    const resultadosTemp = [];
    let capital = inicial;
    let interesesAcumulados = 0;
    let aportesAcumulados = 0;

    if (frecuencia === "mensual") {
      // Solo mostrar resultado final
      for (let k = 1; k <= N; k++) {
        const inicioPeriodo = capital;
        const interesPeriodo = inicioPeriodo * i;
        const despuesInteres = inicioPeriodo + interesPeriodo;
        aportesAcumulados += PMT;
        const finPeriodo = despuesInteres + PMT;
        interesesAcumulados += interesPeriodo;
        capital = finPeriodo;
      }

      resultadosTemp.push({
        periodo: `Mes ${N} (final)`,
        balanceInicial: capital,
        balanceFinal: capital,
        beneficioTotal: interesesAcumulados,
        gananciaTotal: interesesAcumulados + aportesAcumulados,
      });
    } else {
      // Mostrar resultados por año
      for (let y = 1; y <= años; y++) {
        const inicioAnio = capital;
        const aporteAnual = PMT;
        const interesAnual = inicioAnio * i;
        const despuesInteres = inicioAnio + interesAnual;
        aportesAcumulados += aporteAnual;
        const finAnio = despuesInteres + aporteAnual;
        interesesAcumulados += interesAnual;

        resultadosTemp.push({
          periodo: `Año ${y}`,
          balanceInicial: inicioAnio,
          balanceFinal: finAnio,
          beneficioTotal: interesAnual,
          gananciaTotal: interesesAcumulados + aportesAcumulados,
        });

        capital = finAnio;
      }
    }

    setResultados(resultadosTemp);
  };

  return (
    <main className="min-h-screen py-4 px-4">
      <div className="bg-slate-900/20 border border-slate-800 rounded-2xl p-6 w-full max-w-4xl mx-auto mb-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-[#CEA855] text-center">
          Calculadora de Interés Compuesto
        </h1>
        <p className="text-slate-200 text-center">
          Calcula de forma rápida y sencilla cómo crece tu inversión con nuestra
          calculadora de interés compuesto. Ingresa el capital, la tasa y el
          tiempo para visualizar tus
          <strong className="text-[#CEA855]"> ganancias</strong> estimadas.
        </p>
      </div>

      <section className="bg-slate-900/20 border border-slate-800 rounded-2xl p-6 w-full max-w-4xl mx-auto shadow-lg">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label
                htmlFor="inversion-inicial"
                className="mb-2 text-slate-200 font-medium"
              >
                Inversión Inicial:
              </label>
              <input
                id="inversion-inicial"
                className="bg-white text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#CEA855]"
                type="number"
                placeholder="Ej: 10000"
                value={inversionInicial}
                onChange={(e) => setInversionInicial(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="aporte-mensual"
                className="mb-2 text-slate-200 font-medium"
              >
                Aporte Mensual (opcional):
              </label>
              <input
                id="aporte-mensual"
                className="bg-white text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#CEA855]"
                type="number"
                placeholder="Ej: 500"
                value={aporteMensual}
                onChange={(e) => setAporteMensual(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label
                htmlFor="periodo"
                className="mb-2 text-slate-200 font-medium"
              >
                Cantidad de tiempo en años:
              </label>
              <input
                id="periodo"
                className="bg-white text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#CEA855]"
                type="number"
                placeholder="Ej: 5"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="tasa-interes"
                className="mb-2 text-slate-200 font-medium"
              >
                Tasa de Interés (Anual %):
              </label>
              <input
                id="tasa-interes"
                className="bg-white text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#CEA855]"
                type="number"
                placeholder="Ej: 5"
                value={tasaInteres}
                onChange={(e) => setTasaInteres(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mb-6">
            <label
              htmlFor="frecuencia"
              className="mb-2 text-slate-200 font-medium"
            >
              Frecuencia de capitalización:
            </label>
            <select
              id="frecuencia"
              className="bg-white text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#CEA855] w-[50%]"
              value={frecuencia}
              onChange={(e) => setFrecuencia(e.target.value)}
            >
              <option value="anual">Anual</option>
              <option value="mensual">Mensual</option>
            </select>
          </div>

          {error && (
            <div className="col-span-1 md:col-span-2 text-center my-4">
              <h2 className="text-red-500 font-medium">{error}</h2>
            </div>
          )}

          <div className="md:col-span-2 flex justify-center flex-col items-center mb-6">
            <button
              type="button"
              onClick={calcular}
              className="bg-[#CEA855] text-black font-semibold py-2 px-8 rounded-lg hover:bg-[#b89448] transition-colors duration-300 shadow-md cursor-pointer"
            >
              Calcular
            </button>
          </div>
        </form>

        {balanceFinal && (
          <div className="text-center text-[#CEA855] font-semibold my-4">
            <span>Balance final: </span>
            <span className="text-white">${balanceFinal.toFixed(2)}</span>
          </div>
        )}

        <section className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead className="bg-slate-800 text-[#CEA855]">
              <tr>
                <th className="py-3 px-4">Períodos</th>
                <th className="py-3 px-4">Balance Inicial</th>
                <th className="py-3 px-4">Balance Final</th>
                <th className="py-3 px-4">Beneficio Total</th>
                <th className="py-3 px-4">Ganancias Totales</th>
              </tr>
            </thead>
            <tbody className="text-slate-200">
              {resultados.length === 0 ? (
                <tr className="even:bg-slate-800/40">
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">-</td>
                  <td className="py-2 px-4">-</td>
                </tr>
              ) : (
                resultados.map((res, idx) => (
                  <tr key={idx} className="even:bg-slate-800/40">
                    <td className="py-2 px-4">{res.periodo}</td>
                    <td className="py-2 px-4">
                      ${res.balanceInicial.toFixed(2)}
                    </td>
                    <td className="py-2 px-4">
                      ${res.balanceFinal.toFixed(2)}
                    </td>
                    <td className="py-2 px-4">
                      ${res.beneficioTotal.toFixed(2)}
                    </td>
                    <td className="py-2 px-4">
                      ${res.gananciaTotal.toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
};

export default Calculadora;
