// components/ContactPage.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    // Simulate form submission (you can replace this with actual form submission logic)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section className="relative bg-gradient-to-r from-teal-400 to-blue-500 py-24 px-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1151378540/video/professional-microphone-against-changing-colorful-background.jpg?s=640x640&k=20&c=3atjHnsN3r9MbWQI7FMuMNp9PbKdsOeOPw0Gqv1nKBY=')" }}></div>
      <div className="relative container mx-auto z-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-8 mt-5"
        >
          Get in Touch with Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white p-8 shadow-xl rounded-xl space-y-6"
          >
            <h3 className="text-3xl font-semibold text-teal-800">Contact Information</h3>
            <p className="text-gray-700">
              If you have any questions, feel free to reach out. We'd love to hear from you!
            </p>

            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center"
              >
                <FaEnvelope className="text-teal-600 text-2xl mr-4" />
                <span className="text-gray-600">connect@freshegg.in</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center"
              >
                <FaPhone className="text-teal-600 text-2xl mr-4" />
                <span className="text-gray-600">+91 9654234208</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex items-center"
              >
                <FaGlobe className="text-teal-600 text-2xl mr-4" />
                <a href="https://freshegg.in/" className="text-teal-600 hover:text-teal-800">freshegg.in</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white p-8 shadow-xl rounded-xl"
          >
            <h3 className="text-3xl font-semibold text-teal-800 mb-4">Send Us a Message</h3>
            {submissionStatus && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                {submissionStatus}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-800"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-800"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-800"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-800"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-teal-600 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-teal-700 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
