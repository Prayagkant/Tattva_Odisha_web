import { assets } from "../assets/assets";
import { useState } from "react";

import products from "../assets/Productsfile/products";

const categories = ["All", "Wooden", "Stone", "Pattachitra"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="px-6 py-12 bg-[#F5E6DA]">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="mt-2 text-gray-600">
          Explore handcrafted treasures from Odisha
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md font-semibold ${
              selectedCategory === cat
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.alt}
                className="object-contain w-full h-56 mx-auto rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 font-bold text-yellow-600">₹{product.price}</p>
              <a
                href={`/product/${product.id}`}
                className="block px-4 py-2 mt-4 text-center text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              >
                View Details
              </a>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No products available.
          </p>
        )}
      </div>
    </section>
  );
}
