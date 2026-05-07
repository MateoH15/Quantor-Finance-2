import React, { useEffect, useRef, memo } from 'react';

const TradingViewCalendar = () => {
  const container = useRef();

  useEffect(
    () => {
      const currentContainer = container.current;
      if (!currentContainer) return;

      // Prevent duplicate injection
      if (currentContainer.querySelector('script')) return;

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "colorTheme": "dark",
          "isMaximized": true,
          "width": "100%",
          "height": "100%",
          "locale": "es",
          "importanceFilter": "-1,0,1",
          "countryFilter": "ar,br,cl,co,mx,us,eu,gb,jp,cn"
        }`;
      
      currentContainer.appendChild(script);

      return () => {
        if (currentContainer) {
          currentContainer.innerHTML = '';
        }
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container" style={{ height: "700px", width: "100%" }}>
      <div ref={container} className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright" style={{ textAlign: 'center', marginTop: '12px' }}>
        <a href="https://es.tradingview.com/" rel="noopener nofollow" target="_blank" style={{ color: '#94a3b8', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Datos proporcionados por <span className="text-primary font-bold">TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewCalendar);
