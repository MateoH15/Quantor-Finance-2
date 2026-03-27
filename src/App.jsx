import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NetworkBackground from "./components/NetworkBackground";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Streaming from "./pages/Streaming";
import Calendario from "./pages/Calendario";
import Terminos from "./pages/Terminos";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import "./styles.css";

function App() {
  return (
    <Router>
      <NetworkBackground />
      <div className="text-slate-100 font-sans min-h-screen flex flex-col relative z-10">
        <CustomCursor />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ArticleDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
