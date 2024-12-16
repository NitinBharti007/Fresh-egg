import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

function YouTubeShorts() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const CHANNEL_ID = "UC25ghOzZBpdI15kbTGpOU0Q";

  // Fetch all videos using pagination
  const fetchAllVideos = useCallback(async () => {
    let nextPageToken = "";
    let allVideos = [];
    setLoading(true);

    try {
      do {
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=50&pageToken=${nextPageToken}`;
        const response = await fetch(searchUrl);
        const data = await response.json();

        const fetchedVideos = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          link: `https://www.youtube.com/embed/${item.id.videoId}`,
        }));

        allVideos = [...allVideos, ...fetchedVideos];
        nextPageToken = data.nextPageToken || "";
      } while (nextPageToken);

      setVideos(allVideos);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    } finally {
      setLoading(false);
    }
  }, [API_KEY, CHANNEL_ID]);

  useEffect(() => {
    fetchAllVideos();
  }, [fetchAllVideos]);

  return (
    <section className="py-20 bg-gradient-to-tr from-gray-50 to-gray-200 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-black mb-14 mt-16">
        All YouTube Videos
      </h2>

      {loading ? (
        <p className="text-center text-xl text-gray-700">Loading...</p>
      ) : (
        <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              className="relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={video.link}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-t-xl"
                  aria-label={`Watch ${video.title} on YouTube`}
                ></iframe>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <FaYoutube className="text-red-600 text-3xl mr-2" />
                  <h3 className="text-gray-800 text-lg font-semibold">
                    {video.title.split(" ").slice(0, 5).join(" ")}
                    {video.title.split(" ").length > 5 && "..."}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default YouTubeShorts;