import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <section className="bg-indigo-50 py-20 px-6">
      {" "}
      {/* Updated background color */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-gray-800"
          >
            Who We Are at Freshegg Media
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            At Freshegg Media, we believe in the power of stories to shape
            perspectives, ignite imagination, and inspire change. We are a team
            of storytellers, tech enthusiasts, and creatives passionate about
            bringing local narratives to a global audience. Our mission is to
            explore the intersections of culture, technology, and life through
            dynamic and engaging audio content.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <button className="bg-[#f4a261] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#e9c46a] transition shadow-md">
              <Link to="/about" className="text-white">
                Learn More About Us
              </Link>
            </button>
            <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 shadow-md">
              <Link to="/contact" className="text-Black">
                Join Our Community
              </Link>
            </button>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Our Mission",
              description:
                "To create a platform where diverse voices can share their stories, connect with others, and inspire meaningful conversations across cultures and borders.",
            },
            {
              title: "Our Vision",
              description:
                "A world where stories bridge gaps, ignite new ideas, and foster understanding, with Freshegg Media at the forefront of storytelling innovation.",
            },
            {
              title: "Our Values",
              description:
                "We value authenticity, creativity, and inclusivity, believing that every voice deserves to be heard and that great stories can come from anywhere.",
            },
            {
              title: "Our Team",
              description:
                "A passionate group of creators, tech experts, and cultural enthusiasts, working together to bring fresh perspectives and powerful stories to life.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
