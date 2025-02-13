import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const featuredProducts = [
  {
    id: 1,
    name: "Handcrafted Wooden Elephant",
    price: "₹1,299",
    image: `${assets.w_elephant}`,
  },
  {
    id: 2,
    name: "Stone Carved Lord Jagannath",
    price: "₹499",
    image: `${assets.s_jagannath}`,
  },
  {
    id: 3,
    name: "Pattachitra Wall Art",
    price: "₹1,999",
    image: `${assets.pattachitra}`,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 py-12 bg-slate-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold prata-regular md:text-5xl">
          Featured Products
        </h2>
        <p className="mt-2 font-semibold text-gray-600">
          Explore our handcrafted best-sellers
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-56 rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="mt-2 font-bold text-yellow-600">{product.price}</p>
            <button className="w-full px-4 py-2 mt-4 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="/products" className="text-lg font-semibold text-yellow-600">
          View All Products →
        </a>
      </div>
    </section>
  );
}
