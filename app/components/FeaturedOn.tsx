import React from "react";

export default function FeaturedOn() {
  const platforms = [
    { logo: "/feat-1.avif" },
    { logo: "/feat-2.png" },
    { logo: "/feat-3.png" },
    { logo: "/feat-4.png" },
    { logo: "/feat-5.png" },
    { logo: "/feat-6.avif" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4B2E83] mb-4">
            Featured On
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our expertise and insights have been recognized across leading
            platforms including Manufacturing Today, Forbes Technology Council,
            Tech Partner Impact Awards, ERP Blog, MSDynamicsWorld, and Clutch.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-3"
            >
              <img
                src={platform.logo}
                alt="Featured logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
