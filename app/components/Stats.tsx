import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function DynamicsSquareSection() {
  const stats = [
    {
      number: "500+",
      description:
        "Innovative implementations delivered with strategy, precision, and success.",
    },
    {
      number: "150+",
      description:
        "Skilled professionals with deep, industry-specific expertise driving innovation.",
    },
    {
      number: "14+",
      description:
        "Years of industry mastery, delivering excellence in every solution.",
    },
    {
      number: "12+",
      description:
        "Industries transformed with cutting-edge technology and innovation.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center mb-16">

        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 px-4 lg:px-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4B2E83]">
            Dynamics Zentrum: Your Microsoft Solutions Partner
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
            As a Microsoft Dynamics 365 implementation partner, we have been
            consistently delivering impactful solutions, earning trust through
            innovation & commitment and empowering businesses to achieve
            excellence, irrespective of the industry. Recognised as a trusted
            Microsoft Gold Partner and expert Microsoft Dynamics ERP partner, our
            team drives successful digital transformations through
            industry-aligned expertise and strategic execution.
          </p>

          {/* Text button with arrow */}
          <a
            href="#"
            className="inline-flex items-center font-semibold text-[#4B2E83] hover:text-red-600 transition-colors duration-300 mt-4"
          >
            Learn more about us <HiArrowNarrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block w-[2px] bg-gray-600 h-18 mx-12"></div>

        {/* Right Side: Logo */}
        <div className="lg:w-1/2 flex justify-center lg:justify-center px-4 lg:px-6">
          <img
            src="/microsoft.png"
            alt="Partner Logo"
            className="h-18 w-auto"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-[#4B2E83] mb-4">
              {stat.number}
            </div>
            <p className="text-gray-600 leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
