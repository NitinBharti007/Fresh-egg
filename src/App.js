import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Episodes from "./components/Episodes";
import EpisodesAll from "./pages/EpisodesAll";
import About from "./pages/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/Whovr";

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
      <WhoWeAre />
      <Testimonials />
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
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/9654234208?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-green-500 hover:bg-green-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-2xl transform transition duration-500 ease-in-out pulse hover:scale-110 hover:shadow-lg glow"
          aria-label="Chat with us on WhatsApp"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
