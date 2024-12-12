import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-50 to-blue-200 flex items-center justify-center text-center px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-xl sm:max-w-3xl mx-auto"
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-transparent to-purple-300 opacity-20 pointer-events-none -z-10"></div>
          <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 bg-purple-500 opacity-40 rounded-full blur-lg"></div>
          <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-24 h-24 sm:w-48 sm:h-48 bg-blue-500 opacity-30 rounded-full blur-2xl"></div>

          {/* Hero Content */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide text-gray-800 leading-snug drop-shadow-lg">
            Redefining Innovation
          </h1>
          <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
            Harnessing the power of creativity and cutting-edge technology to
            shape a better tomorrow.
          </p>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-gray-600">
              At our core, we believe in turning challenges into opportunities,
              driving progress through purpose and passion.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Join us in crafting solutions that inspire, empower, and transform
              lives globally.
            </p>
          </div>

          {/* Animated Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-1 w-40 sm:w-60 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-lg"
          ></motion.div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-indigo-50 text-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-black mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We believe in a future where technology and creativity work in
            perfect harmony to elevate human experience. We are committed to
            pushing boundaries while staying grounded in sustainability and
            innovation.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
        >
          {/* CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src="CEO.png"
              alt="CEO"
              className="rounded-xl shadow-lg w-full md:w-2/4 mx-auto"
            />
          </motion.div>

          {/* CEO Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl font-extrabold text-black mb-4">
              Ashish Rawat
            </h2>
            <h3 className="text-2xl font-medium text-gray-700 mb-6">
              Founder & CEO
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ashish Rawat is a visionary leader with a passion for innovation
              and creativity. With over a decade of experience leading teams and
              developing groundbreaking solutions, she inspires us to push
              boundaries and create lasting impacts. Her philosophy emphasizes
              sustainability, collaboration, and a deep commitment to making a
              difference in the world.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-indigo-50 text-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6 text-black">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We are driven by a mission to create innovative solutions that not
            only address the needs of today but anticipate the challenges of
            tomorrow. Through creativity and technology, we aim to make a
            real-world impact.
          </p>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-black mb-8">
            What People Say About Us
          </h2>
          <div className="space-y-6">
            <blockquote className="text-xl text-gray-700 italic">
              "This company has changed the way we think about creativity and
              technology. Their ability to innovate and push boundaries is truly
              inspiring!"
            </blockquote>
            <blockquote className="text-xl text-gray-700 italic">
              "A team that is driven by purpose. They don’t just deliver
              products; they deliver experiences."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-50 text-black text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Together, we can build the solutions of tomorrow. Reach out to us to
            explore potential collaborations or just to chat about the future of
            innovation.
          </p>
          <Link
            to={"/contact"}
            className="inline-block bg-[#f4a261] text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-[#e9c46a] transition duration-300"
          >
            Get in Touch
          </Link>
          <a></a>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
