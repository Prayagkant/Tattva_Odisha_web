import { useParams } from "react-router-dom";
import products from "../assets/Productsfile/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product)
    return <p className="text-center text-gray-500">Product not found.</p>;

  return (
    <section className="py-16 px-6 min-h-screen bg-gradient-to-r from-[#F5E6DA] to-[#E8D3C1]">
      <div className="flex flex-col max-w-5xl gap-10 p-10 mx-auto bg-white shadow-2xl rounded-2xl md:flex-row">
        {/* Product Image Section */}
        <div className="flex items-center justify-center flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-center flex-1">
          <h2 className="text-4xl font-extrabold text-gray-800">
            {product.name}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{product.description}</p>

          <p className="mt-6 text-2xl font-semibold text-yellow-600">
            ₹ {product.price}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 font-bold text-white transition bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600">
              Add to Cart
            </button>
            <button className="px-6 py-3 font-bold text-yellow-600 transition border border-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
