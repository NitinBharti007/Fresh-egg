import React from "react";

function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          What Our Listeners Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="User 1"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-800 italic mb-4">
              "Podcastify has given me so many insights into tech trends. I can't stop listening!"
            </p>
            <p className="text-gray-600 font-semibold">- Sarah J., Tech Enthusiast</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/24.jpg"
                alt="User 2"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-800 italic mb-4">
              "The quality of discussions on Podcastify is unmatched. I highly recommend it!"
            </p>
            <p className="text-gray-600 font-semibold">- Mark D., Entrepreneur</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/15.jpg"
                alt="User 3"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-800 italic mb-4">
              "Podcastify is my go-to for staying up to date with the latest trends. Absolutely love it!"
            </p>
            <p className="text-gray-600 font-semibold">- Jessica T., Digital Marketer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
