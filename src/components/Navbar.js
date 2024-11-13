import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-[#502461] via-[#502461] to-[#502461] p-3 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with animation */}
        <motion.div
          className="cursor-pointer flex items-center"
          whileHover={{
            scale: 1.1,
            rotate: 10,
            transition: { yoyo: Infinity, duration: 0.5 },
          }}
        >
          <a href="/" className="flex items-center">
            <img
              src="f-2.png" // Path to your logo image (e.g., public/logo.png)
              alt="Purple Logo"
              className="h-20 ml-7 w-auto transition-all duration-300 ease-in-out" // Increased height for better visibility
            />
          </a>
        </motion.div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex gap-12 items-center">
          <motion.a
            href="#home"
            className="text-white text-xl relative"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              transition: { duration: 0.3 },
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6a2c7d] transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </motion.a>
          <motion.a
            href="#episodes"
            className="text-white text-xl relative"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              transition: { duration: 0.3 },
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Episodes
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6a2c7d] transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </motion.a>
          <motion.a
            href="#about"
            className="text-white text-xl relative"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              transition: { duration: 0.3 },
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#641d7a] transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </motion.a>
          <motion.a
            href="#contact"
            className="text-white text-xl relative"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              transition: { duration: 0.3 },
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6a2c7d] transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-white text-3xl"
            whileTap={{ scale: 0.9, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-gradient-to-r from-[#502461] via-[#6a2c7d] to-[#502461] p-6 mt-4 rounded-lg shadow-lg"
        >
          <motion.a
            href="/"
            className="block text-white py-3 px-6 hover:bg-[#6a2c7d] rounded-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#episodes"
            className="block text-white py-3 px-6 hover:bg-[#6a2c7d] rounded-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Episodes
          </motion.a>
          <motion.a
            href="#about"
            className="block text-white py-3 px-6 hover:bg-[#6a2c7d] rounded-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            className="block text-white py-3 px-6 hover:bg-[#6a2c7d] rounded-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
