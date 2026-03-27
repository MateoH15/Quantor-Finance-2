import TradingViewTicker from "../components/TradingViewTicker";
import DollarList from "../components/DollarList";
import InfRie from "../components/InfRie";

const Home = () => {
  return (
    <main>
      <TradingViewTicker />

      <div className="flex flex-wrap gap-4 mb-8 justify-center py-4 mx-auto">
        <DollarList />
        <InfRie />
      </div>
    </main>
  );
};

export default Home;
