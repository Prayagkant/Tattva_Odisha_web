import React from "react";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    // <div className="flex flex-col sm:flex-row border border-gray-400">
    //   {/* Herosection left side */}
    //   <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
    //     <div className="text-[#414141]">
    //       <div className="flex items-center gap-2">
    //         <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
    //         <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
    //       </div>
    //       <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
    //         Latest Arrivals
    //       </h1>
    //       <div className="flex items-center gap-2">
    //         <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
    //         <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Herosection right side */}
    //   <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
    // </div>
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${assets.hero_img})`, backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center max-w-2xl px-6">
        <h1 className="prata-regular text-4xl md:text-5xl font-bold mb-4">Authentic Handcrafted Treasures</h1>
        <p className="text-lg md:text-xl mb-6">Discover the beauty of Odisha’s heritage through our handcrafted wooden and stone showpieces.</p>
        <a href="/products" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md text-lg">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
