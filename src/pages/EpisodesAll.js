// components/EpisodesAll.js

import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const episodesData = [
  { id: 1, title: "Episode 1: Getting Started", description: "An introduction to our series.", date: "2024-10-01" },
  { id: 2, title: "Episode 2: Deep Dive", description: "Exploring advanced topics in-depth.", date: "2024-10-10" },
  { id: 3, title: "Episode 3: Expert Insights", description: "Interviews with industry experts.", date: "2024-10-20" },
  { id: 4, title: "Episode 4: Design Basics", description: "The fundamentals of great design.", date: "2024-10-30" },
  { id: 5, title: "Episode 5: Development Workflow", description: "Optimizing your development process.", date: "2024-11-01" },
  { id: 6, title: "Episode 6: Debugging Tips", description: "Best practices for effective debugging.", date: "2024-11-05" },
  { id: 7, title: "Episode 7: Performance Optimization", description: "How to make your apps faster.", date: "2024-11-10" },
  { id: 8, title: "Episode 8: Accessibility Matters", description: "Making your apps accessible for all.", date: "2024-11-12" },
  { id: 9, title: "Episode 9: Security Essentials", description: "Protecting your applications and users.", date: "2024-11-15" },
  { id: 10, title: "Episode 10: Responsive Design", description: "Creating designs that work on any device.", date: "2024-11-20" },
  { id: 11, title: "Episode 11: State Management", description: "Managing complex application state.", date: "2024-11-25" },
  { id: 12, title: "Episode 12: Testing Strategies", description: "Ensure code reliability with testing.", date: "2024-11-28" },
  { id: 13, title: "Episode 13: Advanced Hooks", description: "Using React hooks for powerful UI logic.", date: "2024-12-01" },
  { id: 14, title: "Episode 14: API Integration", description: "Connecting your app to external data.", date: "2024-12-05" },
  { id: 15, title: "Episode 15: Deployment Guide", description: "How to deploy and maintain your app.", date: "2024-12-10" },
  { id: 16, title: "Episode 16: The Future of AI", description: "Exploring the possibilities of AI in our daily lives.", date: "2024-12-15" },
  { id: 17, title: "Episode 17: The Rise of Cryptocurrencies", description: "Discussing the impact of blockchain and digital currencies.", date: "2024-12-20" },
  { id: 18, title: "Episode 18: Sustainable Energy", description: "Exploring the latest trends in renewable energy.", date: "2024-12-25" },
  { id: 19, title: "Episode 19: Innovations in Medicine", description: "A deep dive into medical breakthroughs.", date: "2025-01-01" },
  { id: 20, title: "Episode 20: Design Systems", description: "Building consistent design patterns for your apps.", date: "2025-01-05" },
];

function EpisodesAll() {
  return (
    <section className="py-20 bg-gradient-to-tr from-gray-50 to-purple-50 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-purple-900 mt-10 mb-14">
        All Episodes
      </h2>

      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {episodesData.map((episode) => (
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
            className="p-6 bg-white shadow-lg rounded-xl transition duration-300 transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-200 hover:to-indigo-200 flex flex-col"
          >
            <div className="flex items-center mb-3">
              <span className="text-gray-500 text-sm mr-3">{episode.date}</span>
              <FaPlay className="text-purple-600 text-lg" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-800">
              {episode.title}
            </h3>
            <p className="text-gray-600 mb-6">{episode.description}</p>
            
            {/* Align button at the bottom */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white py-2 px-5 rounded-full font-semibold shadow-md hover:bg-purple-700 transition-all duration-300 mt-auto"
            >
              Listen Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default EpisodesAll;
