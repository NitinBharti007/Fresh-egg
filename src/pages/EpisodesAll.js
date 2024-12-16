// components/YouTubeShorts.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

function YouTubeShorts() {
  const [shorts, setShorts] = useState([]);

  const API_KEY = "AIzaSyDz632coRWs-chDzeDUO4S48LNM__i98jw";
  const CHANNEL_ID = "UC25ghOzZBpdI15kbTGpOU0Q";

  // Fetch Shorts from YouTube API
  const fetchShorts = async () => {
    try {
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=10`;
      const response = await fetch(searchUrl);
      const data = await response.json();

      // Filter results for Shorts based on video duration if needed
      const fetchedShorts = data.items.map((item, index) => ({
        id: index + 1,
        title: item.snippet.title,
        link: `https://www.youtube.com/embed/${item.id.videoId}`,
      }));

      setShorts(fetchedShorts);
    } catch (error) {
      console.error("Error fetching YouTube Shorts:", error);
    }
  };

  useEffect(() => {
    fetchShorts();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-tr from-gray-50 to-gray-200 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-black mb-14 mt-16">
        Trending YouTube Shorts
      </h2>

      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {shorts.map((short) => (
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
                <h3 className="text-gray-800 text-lg font-semibold">
                  {short.title.split(" ").slice(0, 3).join(" ")}
                  {short.title.split(" ").length > 4 && "..."}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default YouTubeShorts;
