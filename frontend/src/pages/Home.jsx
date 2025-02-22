import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Home;
