import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Episodes from "./components/Episodes";
import EpisodesAll from "./pages/EpisodesAll";
import About from "./pages/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Testimonials from "./components/Testimonials";

// ScrollToTop component
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}

function HomePage() {
  return (
    <>
      <Hero />
      <Episodes />
      <Testimonials/>
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-900 text-gray-100">
        <Navbar />
        <ScrollToTop /> {/* Scroll to top on route change */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/episodes" element={<EpisodesAll />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
