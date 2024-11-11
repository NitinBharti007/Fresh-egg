import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden py-40">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-t from-gray-900 via-transparent"></div>
      
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="text-left md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            Discover a World of Stories on <span className="text-yellow-400">Freshegg</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-200 max-w-lg"
          >
            Tune into fascinating stories, insights, and explorations in every episode.
            Join us on a journey through culture, tech, and life, designed to inspire and educate.
          </motion.p>
          <div className="flex gap-4 mt-6 flex-col sm:flex-row">
            <motion.button
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-yellow-400 text-indigo-900 py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition duration-300 w-full sm:w-auto"
            >
              Start Listening
            </motion.button>
            <motion.button
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
            >
              View Episodes
            </motion.button>
          </div>
        </div>

        {/* Right Section: Graphic and Highlights */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {/* Featured Podcast Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 shadow2xl"
          >
            <img
              src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/How-to-design-a-great-podcast-logo.jpg"
              alt="Featured Episode"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-gray-900"
            />
          </motion.div>
          {/* Floating Shapes for Visual Interest */}
          <motion.div
            className="absolute -top-10 -left-10 w-24 h-24 bg-pink-500 rounded-full opacity-40"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-16 right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-30"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-20 h-20 bg-indigo-600 rounded-full opacity-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
