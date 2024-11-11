import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const featuredEpisodes = [
  {
    id: 1,
    title: "Episode 1 - The Future of AI",
    description: "Exploring the possibilities of AI in our daily lives.",
    date: "2024-10-01",
  },
  {
    id: 2,
    title: "Episode 2 - The Rise of Cryptocurrencies",
    description: "Discussing the impact of blockchain and digital currencies.",
    date: "2024-10-15",
  },
  {
    id: 3,
    title: "Episode 3 - Sustainable Energy",
    description: "Exploring the latest trends in renewable energy.",
    date: "2024-10-20",
  },
  {
    id: 4,
    title: "Episode 4 - Innovations in Medicine",
    description: "A deep dive into medical breakthroughs.",
    date: "2024-11-01",
  },
];

function FeaturedEpisodes() {
  return (
    <section className="py-20 bg-gradient-to-tr from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative Background SVG */}
      <svg
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
      >
        <circle cx="400" cy="400" r="300" fill="url(#gradient)" />
      </svg>

      <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-14">
        Featured Episodes
      </h2>

      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {featuredEpisodes.map((episode) => (
          <motion.div
            key={episode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: episode.id * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f7f7f7",
            }}
            className="p-6 bg-white shadow-lg rounded-xl transition duration-300 transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-200 hover:to-indigo-200 flex flex-col"
          >
            <div className="flex items-center mb-3">
              <span className="text-gray-500 text-sm mr-3">{episode.date}</span>
              <FaPlay className="text-blue-600 text-lg" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-800">
              {episode.title}
            </h3>
            <p className="text-gray-600 mb-6">{episode.description}</p>
            
            {/* Align button at the bottom */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 text-white py-2 px-5 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 mt-auto"
            >
              Listen Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedEpisodes;
