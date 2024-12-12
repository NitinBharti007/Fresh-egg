import React, { useState } from "react";
import { motion } from "framer-motion";

function BecomePartOfCommunity() {
  const [result, setResult] = useState(""); 
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setLoading(true);  // Show loading state
    const formData = new FormData(event.target);

    formData.append("access_key", "c2993e71-217e-4e5e-a472-de11ab15b1c3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email Sent Successfully");
      } else {
        setResult(data.message || "Error submitting form.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);  // Hide loading state
      event.target.reset(); // Reset form fields
      setTimeout(() => {
        setResult("");  // Hide the result message after 4 seconds
      }, 4000); // 4 seconds delay
    }
  };

  return (
    <section className="py-16 bg-indigo-50 text-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-black">
          Become a Part of Our Community
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Stay connected with us! Subscribe with your email to get updates and special offers.
        </p>
      </motion.div>

      {/* Web3 Email Subscription Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg mx-auto bg-gray-100 p-8 rounded-xl shadow-lg space-y-6"
      >
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          type="email"
          name="email"  // Field for email
          placeholder="Your Email"
          required
          aria-label="Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f4a261] text-gray-900 placeholder-gray-500"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#f4a261] text-white py-3 rounded-lg hover:bg-[#e9c46a] transition"
          disabled={loading}
        >
          {loading ? (
            <span className="flex justify-center items-center">
              <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </span>
          ) : (
            "Join Our Community"
          )}
        </motion.button>
      </motion.form>

      {/* Result message */}
      <div className="text-center mt-4">
        {result && (
          <span
            className={`text-lg ${
              result.includes("Success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {result}
          </span>
        )}
      </div>
    </section>
  );
}

export default BecomePartOfCommunity;
