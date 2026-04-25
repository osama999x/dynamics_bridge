import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const services = [
  {
    title: "Education",
    img: "/education.avif",
    description:
      "Modernising education with technology-driven solutions and tools.",
  },
  {
    title: "Manufacturing",
    img: "/manufacturing.avif",
    description:
      "Optimising manufacturing operations with scalable digital solutions.",
  },
  {
    title: "Food & Beverages",
    img: "/food.avif",
    description:
      "Streamlining food & beverage processes with intelligent systems.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E83] text-center mb-14">
        Our Industry Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
              <h3 className="text-2xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Hidden paragraph (appears on hover) */}
              <p className="text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-14 text-center">
        <a href="/industries/industries">
          <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg transition">
            Discover Our Industry Expertise
            <HiArrowNarrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>

    </section>
  );
}
