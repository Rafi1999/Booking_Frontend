'use client';

import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/restaurant-banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-yellow-400">WeServe Delights</span>
        </h1>
        <p className="text shadow-md-lg sm:text-xl mb-8 max-w-lg">
          Book a table and enjoy the finest dining experience with flavors that delight every taste bud.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/booking">
            <p className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all">
              Reserve Now
            </p>
          </Link>
          <Link href="tel:+1234567890">
            <p className="flex items-center px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-md hover:bg-yellow-500 hover:text-black transition-all">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9-9m0 0l9 9m-9-9v18"
                />
              </svg>
              Call Us
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
