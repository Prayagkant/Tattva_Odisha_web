import { assets } from "../assets/assets";
const testimonials = [
  {
    id: 1,
    name: "Rani Kumar",
    review:
      "Absolutely love the craftsmanship! The wooden elephant I bought is stunning and beautifully detailed.",
    image: `${assets.pp_1}`,
  },
  {
    id: 2,
    name: "Ayush Patnaik",
    review:
      "The stone Jagannath idol is a masterpiece. The quality and finishing are amazing!",
    image: `${assets.pp_2}`,
  },
  {
    id: 3,
    name: "Priya Meher",
    review:
      "Authentic Odisha art! The Pattachitra painting I ordered is breathtaking. Highly recommended!",
    image: `${assets.pp_3}`,
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <p className="mt-2 text-gray-600">Real stories from happy customers</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 text-center bg-white rounded-lg shadow-md"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="object-cover w-16 h-16 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
            <p className="mt-2 text-gray-700">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
