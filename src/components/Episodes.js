import React from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const youtubeShorts = [
  {
    id: 1,
    title: "Deepinder Goyal",
    link: "https://www.youtube.com/embed/sOqe0yI-HdM",
  },
  {
    id: 2,
    title: "Kunal Bahl",
    link: "https://www.youtube.com/embed/_bMGhJAFwD0",
  },
  {
    id: 3,
    title: "Ashneer Grover",
    link: "https://www.youtube.com/embed/0rXME2YH208",
  },
  {
    id: 4,
    title: "Priyanka Chopra",
    link: "https://www.youtube.com/embed/YYw3YqspjYg",
  },
];

function YouTubeShorts() {
  return (
    <section className="py-5 bg-gradient-to-tr from-gray-50 to-gray-200 relative overflow-hidden">
      {/* Marquee Effect with Scrollable Link */}
      <div className="marquee-container">
        <div className="marquee-content">
          <Link
            to="/ecommerce"
            className="text-2xl text-yellow-400 font-semibold hover:underline"
          >
            E-commerce Services: A Journey of Exploration !!
          </Link>
          <span className="mx-4 text-2xl text-gray-800 font-semibold">|</span>
          <Link
            to="/ecommerce"
            className="text-2xl text-blue-500 hover:text-blue-700 hover:underline"
          >
            Click Me
          </Link>
        </div>
      </div>

      {/* CSS for marquee effect */}
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 10px 0;
          margin-top: 10px;
        }

        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .marquee-content:hover {
          animation-play-state: paused;  /* Pause animation on hover */
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <h2 className="text-4xl font-extrabold text-center text-black mb-14 mt-5">
        Trending YouTube Shorts
      </h2>

      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 mb-10">
        {youtubeShorts.map((short) => (
          <motion.div
            key={short.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: short.id * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl"
          >
            {/* Video Embed */}
            <div className="aspect-w-9 aspect-h-16 w-full">
              <iframe
                src={short.link}
                title={short.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-t-xl"
                aria-label={`Watch ${short.title} on YouTube`}
              ></iframe>
            </div>

            {/* Title and Icon */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <FaYoutube className="text-red-600 text-3xl mr-2" />
                <h3 className="text-gray-800 text-lg font-semibold">{short.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}

export default YouTubeShorts;
