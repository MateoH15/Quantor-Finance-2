import { useEffect } from "react";

const TradingViewTicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { proName: "BCBA:IMV", title: "Merval" },
        { proName: "OANDA:XAUUSD", title: "Oro" },
        { proName: "NYSE:YPF", title: "YPF" },
        { proName: "NASDAQ:MELI", title: "MELI" },
        { proName: "NASDAQ:TSLA", title: "TESLA" },
        { proName: "BINANCE:USDTARS", title: "USDT/ARS" },
      ],
      colorTheme: "dark",
      locale: "es",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: true,
      displayMode: "adaptive",
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://es.tradingview.com/markets/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default TradingViewTicker;
