import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-8 lg:px-16">
      <section className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 sm:p-10">
        <h1 className="text-4xl font-bold text-primary text-center mb-6">About Us</h1>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>WeServe</strong>, where we pride ourselves on offering delicious meals at prices that won't break the bank. Located at the heart of the community, we have been serving our customers with love and care since <strong>1985</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Our journey began in a small corner shop with a simple goal: to provide hearty, homemade meals that bring people together. Over the years, we've grown, but our core values remain the same. We believe in quality, affordability, and creating a warm, welcoming atmosphere for all our guests.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we are proud to be a favorite dining spot for families, friends, and food enthusiasts alike. From classic comfort dishes to modern culinary delights, our menu has something for everyone.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe that great food doesn't have to come at a high price. That’s why we source the finest ingredients, prepare everything with care, and keep our prices affordable. Whether you're here for a quick bite or a celebratory meal, we want every visit to feel special.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Our Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to making every dining experience memorable. Our friendly staff, cozy ambiance, and flavorful dishes are all part of our promise to you. We thank our loyal patrons for their continued support and look forward to welcoming new faces to our restaurant.
          </p>

          <p className="text-center text-lg text-gray-800 font-semibold">
            <em>Come join us for a meal and experience the perfect blend of taste, value, and tradition!</em>
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
