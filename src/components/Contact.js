import React from "react";
import { motion } from "framer-motion";

function BecomePartOfCommunity() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#4a4e69] to-[#22223b] text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-[#f4a261]">Become a Part of Our Community</h2>
        <p className="text-lg max-w-2xl mx-auto text-[#e9c46a]">
          We would love to collaborate with all forms of artists. Join us today and stay connected!
        </p>
      </motion.div>

      {/* Email Subscription Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f4a261] text-gray-900 placeholder-gray-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#f4a261] text-gray-900 py-3 rounded-lg hover:bg-[#e9c46a] transition"
        >
          Join Our Community
        </motion.button>
      </motion.form>
    </section>
  );
}

export default BecomePartOfCommunity;
