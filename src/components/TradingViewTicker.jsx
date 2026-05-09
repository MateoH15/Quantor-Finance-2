import React, { useEffect, useRef } from 'react';

const TradingViewTicker = () => {
  const container = useRef();

  useEffect(() => {
    const currentContainer = container.current;
    if (!currentContainer) return;

    // Clear previous content
    currentContainer.innerHTML = '';
    
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container";
    
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetContainer.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "BCBA:IMV", "title": "S&P MERVAL" },
        { "proName": "FX_IDC:USDARS", "title": "USD/ARS" },
        { "proName": "FOREXCOM:SPX500", "title": "S&P 500" },
        { "proName": "FOREXCOM:NSXUSD", "title": "Nasdaq 100" },
        { "proName": "BITSTAMP:BTCUSD", "title": "BTC/USD" },
        { "proName": "BITSTAMP:ETHUSD", "title": "ETH/USD" },
        { "description": "Nvidia", "proName": "NASDAQ:NVDA" }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": true,
      "displayMode": "adaptive",
      "locale": "es"
    });
    
    widgetContainer.appendChild(script);
    currentContainer.appendChild(widgetContainer);

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-ticker-wrapper" ref={container}>
    </div>
  );
};

export default TradingViewTicker;
