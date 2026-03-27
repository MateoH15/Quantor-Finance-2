import { useEffect, useRef, memo } from "react";

const Calendario = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Check if script already exists to prevent duplication
    if (containerRef.current && containerRef.current.querySelector("script")) {
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      isTransparent: true,
      locale: "es",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
      importanceFilter: "-1,0,1",
      width: "100%",
      height: "1000",
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        const existingScript = containerRef.current.querySelector("script");
        if (existingScript) {
          containerRef.current.removeChild(existingScript);
        }
      }
    };
  }, []);

  return (
    <main className="flex-1 py-4 px-4 flex flex-col h-full">
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 w-full max-w-5xl mx-auto mb-4 shadow-lg flex flex-col h-full">
        <h1 className="text-3xl font-bold mb-4 text-[#CEA855] text-center">
          Calendario Económico
        </h1>
        <p className="text-slate-200 text-center mb-4">
          Calendario con eventos económicos y noticias relevantes del mercado,
          mostrado con horarios e indicadores de impacto para ayudarte a
          mantenerte informado.
        </p>

        <style>
          {`
            .tradingview-widget-container__widget, 
            .tradingview-widget-container__widget iframe {
              height: 1000px !important;
              width: 100% !important;
            }
          `}
        </style>

        {/* TradingView Widget BEGIN */}
        <div className="tradingview-widget-container w-full" ref={containerRef}>
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://es.tradingview.com/economic-calendar/"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="blue-text">Calendario Económico</span>
            </a>{" "}
            por TradingView
          </div>
        </div>
        {/* TradingView Widget END */}
      </div>
    </main>
  );
};

export default memo(Calendario);
