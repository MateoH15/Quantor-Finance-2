import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Calculator from './pages/Calculator';
import Streaming from './pages/Streaming';
import EconomicCalendar from './pages/EconomicCalendar';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Success from './pages/Success';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import './App.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="app">
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/productos/:productId" element={<ProductDetail />} />
              <Route path="/calculadora" element={<Calculator />} />
              <Route path="/streaming" element={<Streaming />} />
              <Route path="/calendario" element={<EconomicCalendar />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
