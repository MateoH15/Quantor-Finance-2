import React from 'react';
import Hero from '../components/Hero';
import CurrencyMonitor from '../components/CurrencyMonitor';
import TradingViewTicker from '../components/TradingViewTicker';

const Home = () => {
  return (
    <>
      <TradingViewTicker />
      <Hero />
      <CurrencyMonitor />
    </>
  );
};

export default Home;
