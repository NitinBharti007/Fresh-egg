import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Episodes from "./components/Episodes";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      <Episodes />
     <About />
       <Contact />
      <Footer />
    </div>
  );
}

export default App;
