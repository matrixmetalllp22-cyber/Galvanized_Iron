
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// ThemeContext removed — dark mode disabled

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import CertificationSection from "./pages/Certificaton";
// import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Applications from "./pages/Applications";
import CaseStudies from "./pages/CaseStudies";
import ClientsSection from "./pages/clientsSection";

// Service Pages
import Slitting from "./pages/services/Slitting";
import CutToLength from "./pages/services/CutToLength";
import Packing from "./pages/services/Packing";
import Blanking from "./pages/services/Blanking";

// Product Pages
import HotRolled from "./components/keyProducts/HotRolled";
import ColdRolled from "./components/keyProducts/ColdRolled";
import ColourCoated from "./components/keyProducts/ColourCoated";
import Galvanized from "./components/keyProducts/Galvanized";
import Chequered from "./components/keyProducts/Chequered";
import HRPO from "./components/keyProducts/HRPO";
import WeldedPipes from "./components/keyProducts/WeldedPipes";
import SteelPlates from "./components/keyProducts/SteelPlates";


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientsSlider from "./pages/clientsSection";
import CommandPalette from "./components/CommandPalette";

function AppContent() {
  useEffect(() => {
    // 🔒 Disable right-click (prevents "Inspect" & "Save As")
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 🔒 Disable copy / cut / paste
    const disableCopy = (e) => e.preventDefault();
    document.addEventListener("copy", disableCopy);
    document.addEventListener("cut", disableCopy);
    document.addEventListener("paste", disableCopy);

    // 🔒 Disable key shortcuts like Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12
    const disableShortcuts = (e) => {
      if (
        (e.ctrlKey && ["u", "s", "c", "x", "i", "j"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        alert("Action disabled for content protection.");
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("cut", disableCopy);
      document.removeEventListener("paste", disableCopy);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen select-none">
        <Header />
        <CommandPalette />
        <main className="grow pt-16 bg-linear-to-br from-slate-50 to-white-300 :from-slate-900 dark:to-white   transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            {/* <Route path="/careers" element={<Careers />} /> */}
            {/* <Route path="/news" element={<News />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/Certificaton" element={<CertificationSection />} />
            <Route path="/clientsSection" element={<ClientsSection />} />


            {/* Service Routes */}
            <Route path="/services/slitting" element={<Slitting />} />
            <Route path="/services/cut-to-length" element={<CutToLength />} />
            <Route path="/services/packing" element={<Packing />} />
            <Route path="/services/blanking" element={<Blanking />} />

            {/* Product Routes */}
            <Route path="/products/hot-rolled" element={<HotRolled />} />
            <Route path="/products/cold-rolled" element={<ColdRolled />} />
            <Route path="/products/colour-coated" element={<ColourCoated />} />
            <Route path="/products/galvanized" element={<Galvanized />} />
            <Route path="/products/chequered" element={<Chequered />} />
            <Route path="/products/hrpo" element={<HRPO />} />
            <Route path="/products/welded-pipes" element={<WeldedPipes />} />
            <Route path="/products/steel-plates" element={<SteelPlates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function App() {
  return <AppContent />;
}

export default App;
