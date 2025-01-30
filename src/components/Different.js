import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "fas fa-chart-line",
    title: "Growth Marketing Framework",
    desc: "Creating a digital ecosystem to ensure long-term success with cost-effective marketing solutions.",
  },
  {
    icon: "fas fa-stopwatch",
    title: "Timely Delivery",
    desc: "Quick responses & outputs delivered within deadlines, ensuring efficiency and reliability.",
  },
  {
    icon: "fas fa-star",
    title: "Quality Assurance",
    desc: "We adhere to industry-leading quality standards, maintaining trust and high performance.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-black text-lg font-semibold uppercase tracking-wider">
            What Makes Us Different
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Why Freshegg Media & Marketing?
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a results-driven company blending creativity with strategic marketing to craft impactful solutions that drive engagement.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 8 }}
                className="text-[#f4a261] text-5xl mb-4 transition-transform duration-300"
              >
                <i className={item.icon}></i>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-3">{item.desc}</p>
              <motion.div
                className="w-10 h-1 bg-[#f4a261] mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
