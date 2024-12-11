// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Footer Header */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center md:text-left leading-tight tracking-wide"
          >
            Join Our Community & Stay Connected
          </motion.h3>

          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg space-y-4 max-w-md leading-relaxed"
          >
            <p>
              Freshegg Media brings you the latest in creative conversations,
              thought-provoking insights, and inspiring stories. Stay connected
              for the freshest perspectives on trending topics.
            </p>
          </motion.div>

          {/* Footer Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-lg space-y-2 flex flex-col md:items-start"
            aria-label="Footer Navigation"
          >
            <Link
              to="/"
              className="hover:text-indigo-200 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/episodes"
              className="hover:text-indigo-200 transition duration-300"
            >
              Episodes
            </Link>
            <Link
              to="/about"
              className="hover:text-indigo-200 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-indigo-200 transition duration-300"
            >
              Contact
            </Link>
          </motion.nav>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Contact Information */}
          <motion.address
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-lg not-italic space-y-4"
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl" />
              <span>connect@freshegg.in</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-xl" />
              <span>+91 9654234208</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaLocationArrow className="text-xl" />
              <span>
                B-36, 2nd Floor, Sector-67, Noida, Uttar Pradesh - 201301
              </span>
            </div>
          </motion.address>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2 }}
            className="flex gap-6 justify-center md:justify-start"
          >
            <motion.a
              href="https://twitter.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-500 hover:text-blue-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/fresheggmedia"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-700 hover:text-blue-600 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={30} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/fresheggmedia/"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-pink-500 hover:text-pink-400 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/fresheggmedia/"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600 hover:text-blue-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="text-lg text-center mt-12 border-t-2 pt-4"
      >
        <p>
          &copy; {new Date().getFullYear()} Freshegg Media. All Rights
          Reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
