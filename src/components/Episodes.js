import React from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

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
    <section className="py-20 bg-gradient-to-tr from-gray-50 to-gray-200 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-red-600 mb-14">
        Trending YouTube Shorts
      </h2>

      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
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
