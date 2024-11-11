import React from "react";

function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">What Our Listeners Are Saying</h2>
      <div className="container mx-auto flex justify-center gap-10">
        <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-800 italic mb-4">
            "Podcastify has given me so many insights into tech trends. I can't stop listening!"
          </p>
          <p className="text-gray-600">- Sarah J., Tech Enthusiast</p>
        </div>
        <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-800 italic mb-4">
            "The quality of discussions on Podcastify is unmatched. I highly recommend it!"
          </p>
          <p className="text-gray-600">- Mark D., Entrepreneur</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
