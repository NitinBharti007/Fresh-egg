import React, { useState } from "react";

const service = {
  title: "Ecommerce Consultancy",
  description:
    "We help your products to thrive on marketplace channels. Our e-commerce services include product content writing, onboarding, photography, & ad promotions.",
  icon: "🛒",
  services: [
    {
      name: "Amazon",
      img: "https://assets.mspimages.in/gear/wp-content/uploads/2021/07/Amazon-1.jpg",
    },
    {
      name: "Flipkart",
      img: "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/5630da1b95da8f9ec1c8513919c07e25e02b0ac8d548a6abaf04828a8957edd6.png",
    },
    {
      name: "Blinkit",
      img: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2023/04/Blinkit-Enters-Hyperlocal-social.png",
    },
    {
      name: "Myntra",
      img: "https://pimwp.s3-accelerate.amazonaws.com/2023/09/Untitled-design-2023-09-21T174041.903.png",
    },
    {
      name: "Nykaa",
      img: "https://startuptrak.com/wp-content/uploads/2021/11/nykaa.jpg",
    },
    { name: "Ajio", img: "https://sellerrocket.in/img/gif_ajio.gif" },
    {
      name: "Swiggy",
      img: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/17/thumb/fitandfill/1200X900/1689574606-2001.png",
    },
    {
      name: "Meesho",
      img: "https://img-cdn.thepublive.com/filters:format(webp)/tice-news-prod/media/post_attachments/6e77b763-742.jpg",
    },
  ],
};

const ServicePage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", form);
  };

  return (
    <div className="mt-10 bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h1 className="text-6xl">{service.icon}</h1>
        <h2 className="text-4xl font-bold mt-4">{service.title}</h2>
        <p className="text-lg max-w-2xl mx-auto mt-4 leading-relaxed">{service.description}</p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {service.services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <img src={s.img} alt={s.name} className="h-24 w-auto mb-4 rounded-lg" />
              <p className="text-lg font-medium">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
          <p className="text-lg mb-8">We'd love to hear from you! Please fill out the form below.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ServicePage;
