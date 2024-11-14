import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-[#4a4e69] to-[#22223b] flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-6xl font-bold tracking-wide mb-4 text-[#f4a261]">Welcome to Innovation</h1>
          <p className="text-xl font-medium max-w-xl mx-auto text-[#e9c46a]">
            Merging creativity with cutting-edge technology to shape the future.
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#2b2d42] text-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-[#f4a261] mb-6">Our Vision</h2>
          <p className="text-lg text-[#e9c46a] max-w-2xl mx-auto">
            We believe in a future where technology and creativity work in perfect harmony to elevate human experience. We are committed to pushing boundaries while staying grounded in sustainability and innovation.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#22223b]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold text-[#f4a261] mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#2b2d42] text-white rounded-xl p-6 shadow-xl hover:bg-[#4a4e69] transform hover:translate-y-2 transition-all duration-300"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                alt="Team Member"
                className="rounded-full mb-4 mx-auto border-4 border-[#e9c46a]"
              />
              <h3 className="text-2xl font-semibold text-[#f4a261]">Alice Johnson</h3>
              <p className="text-[#e9c46a]">Founder & CEO</p>
            </motion.div>
            {/* Team Member 2 */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#2b2d42] text-white rounded-xl p-6 shadow-xl hover:bg-[#4a4e69] transform hover:translate-y-2 transition-all duration-300"
            >
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt="Team Member"
                className="rounded-full mb-4 mx-auto border-4 border-[#e9c46a]"
              />
              <h3 className="text-2xl font-semibold text-[#f4a261]">James Smith</h3>
              <p className="text-[#e9c46a]">Co-Founder & CTO</p>
            </motion.div>
            {/* Team Member 3 */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#2b2d42] text-white rounded-xl p-6 shadow-xl hover:bg-[#4a4e69] transform hover:translate-y-2 transition-all duration-300"
            >
              <img
                src="https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?semt=ais_hybrid"
                alt="Team Member"
                className="rounded-full mb-4 mx-auto border-4 border-[#e9c46a]"
              />
              <h3 className="text-2xl font-semibold text-[#f4a261]">Sophia Lee</h3>
              <p className="text-[#e9c46a]">Lead Designer</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-[#4a4e69] to-[#22223b] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#f4a261]">Our Mission</h2>
          <p className="text-lg text-[#e9c46a] max-w-2xl mx-auto">
            We are driven by a mission to create innovative solutions that not only address the needs of today but anticipate the challenges of tomorrow. Through creativity and technology, we aim to make a real-world impact.
          </p>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#2b2d42] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-[#f4a261] mb-8">What People Say About Us</h2>
          <div className="space-y-6">
            <blockquote className="text-xl text-[#e9c46a] italic">
              "This company has changed the way we think about creativity and technology. Their ability to innovate and push boundaries is truly inspiring!"
            </blockquote>
            <blockquote className="text-xl text-[#e9c46a] italic">
              "A team that is driven by purpose. They don’t just deliver products; they deliver experiences."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#e9c46a] to-[#f4a261] text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-lg text-[#2b2d42] mb-6">
            Together, we can build the solutions of tomorrow. Reach out to us to explore potential collaborations or just to chat about the future of innovation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#f4a261] text-gray-900 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-[#e9c46a] transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
