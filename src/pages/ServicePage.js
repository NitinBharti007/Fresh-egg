import React, { useState } from "react";
import { motion } from "framer-motion";

const service = {
  title: "Ecommerce Consultancy",
  description:
    "Our services include quick commerce onboarding and onboarding for fashion e-commerce marketplaces, helping businesses streamline their operations and reach their target audience effectively.",
  icon: "🛒",
  services: [
    {
      name: "Zepto",
      img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Logo_of_Zepto.png",
    },
    {
      name: "Blinkit",
      img: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2023/04/Blinkit-Enters-Hyperlocal-social.png",
    },
    {
      name: "Zomato",
      img: "https://www.indifi.com/blog/wp-content/uploads/2019/12/How-To-Successfully-Sell-On-Zomato.jpg",
    },
    {
      name: "Swiggy",
      img: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/17/thumb/fitandfill/1200X900/1689574606-2001.png",
    },
    {
      name: "Amazon",
      img: "https://assets.mspimages.in/gear/wp-content/uploads/2021/07/Amazon-1.jpg",
    },
    {
      name: "Flipkart",
      img: "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/5630da1b95da8f9ec1c8513919c07e25e02b0ac8d548a6abaf04828a8957edd6.png",
    },
    {
      name: "Myntra",
      img: "https://pimwp.s3-accelerate.amazonaws.com/2023/09/Untitled-design-2023-09-21T174041.903.png",
    },
    { name: "Ajio", img: "https://sellerrocket.in/img/gif_ajio.gif" },
    {
      name: "Meesho",
      img: "https://img-cdn.thepublive.com/filters:format(webp)/tice-news-prod/media/post_attachments/6e77b763-742.jpg",
    },
    {
      name: "Nykaa",
      img: "https://startuptrak.com/wp-content/uploads/2021/11/nykaa.jpg",
    },
  ],
};

const ServicePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    const form = new FormData(e.target);
    form.append("access_key", "c2993e71-217e-4e5e-a472-de11ab15b1c3");

    const object = Object.fromEntries(form);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setIsSubmitting(false);
        setSubmissionStatus(
          "Thank you for your message! We will get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmissionStatus("");
        }, 5000);
      } else {
        setIsSubmitting(false);
        setSubmissionStatus(
          "Oops! Something went wrong. Please try again later."
        );

        setTimeout(() => {
          setSubmissionStatus("");
        }, 5000);
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmissionStatus(
        "Error: Unable to submit the form. Please try again later."
      );
    }
  };

  return (
    <div className="mt-10 bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 text-white">

        <h1 className="text-6xl">{service.icon}</h1>
        <h2 className="text-4xl font-bold mt-4">{service.title}</h2>
        <p className="text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          {service.description}
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <h3 className="text-4xl font-extrabold text-center text-black mb-10">
          Our Services
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {service.services.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={s.img}
                alt={s.name}
                className="h-20 w-auto mb-3 rounded-lg object-contain"
              />
              <p className="text-lg font-medium">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-white shadow-lg max-w-2xl mx-auto rounded-xl">
        <h3 className="text-3xl font-semibold text-center text-teal-800 mb-6">
          Send Us a Message
        </h3>
        {submissionStatus && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            {submissionStatus}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-teal-600 text-white py-3 px-6 rounded-lg w-full font-semibold hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </section>
    </div>
  );
};

export default ServicePage;
