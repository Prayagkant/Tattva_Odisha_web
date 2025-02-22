import { assets } from "../assets/assets";
const categories = [
  {
    id: 1,
    name: "Wooden Art",
    image: `${assets.w_elephant}`,
  },
  {
    id: 2,
    name: "Stone Art",
    image: `${assets.s_jagannath}`,
  },
  {
    id: 3,
    name: "Pattachitra Paintings",
    image: `${assets.pattachitra}`,
  },
];

export default function Categories() {
  return (
    <section className="px-6 py-12 bg-slate-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold prata-regular md:text-5xl">Explore by Category</h2>
        <p className="mt-2 font-semibold text-gray-600">
          Find your favorite handcrafted treasures
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="overflow-hidden bg-white rounded-lg shadow-md"
          >
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-56"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <a
                href="/products"
                className="inline-block mt-2 font-semibold text-yellow-600"
              >
                View Products →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
