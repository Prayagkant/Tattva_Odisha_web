import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${assets.hero_img})`,
      }}
    >
      <div className="text-center max-w-2xl px-6">
        <h1 className="prata-regular text-4xl md:text-5xl font-bold mb-4">
          Authentic Handcrafted Treasures
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the beauty of Odisha’s heritage through our handcrafted
          wooden and stone showpieces.
        </p>
        <Link
          to="/products"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md text-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
