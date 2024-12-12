import React from "react";

function Testimonials() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-black mb-12">
          What Our Listeners Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="Monika.jpeg"
                alt="User 1"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-800 italic mb-4">
              "Just watched the Freshegg Media Podcast—it’s engaging and packed with great insights! Looking forward to hearing testimonials from others!"
            </p>
            <p className="text-gray-600 font-semibold">- Monika Chandola</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="Ayushi.jpeg"
                alt="User 2"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-800 italic mb-4">
              "Freshegg Media Podcast: Informative, engaging, and a must-watch! Looking forward to testimonials from fellow listeners!"
            </p>
            <p className="text-gray-600 font-semibold">- Ayushi Juyal</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="Sunita.jpeg"
                alt="User 3"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-800 italic mb-4">
              "Enjoyed the Freshegg Media Podcast! It’s packed with valuable information. Would be great to see some testimonials too!"
            </p>
            <p className="text-gray-600 font-semibold">- Sunita Rawat</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
