'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Rocket,
  Factory,
  HandHeart,
  HeartPulse,
} from "lucide-react";

const industries = [
  {
    title: "Startups",
    description:
      "Scale faster with agile, cloud-based Microsoft Dynamics 365 solutions built for startups.",
    link: "/industries/startups",
    icon: <Rocket size={26} />,
  },
  {
    title: "Manufacturing & Distribution",
    description:
      "Optimize production, inventory, supply chain, and distribution using Dynamics 365 ERP.",
    link: "/industries/manufacturing-distribution",
    icon: <Factory size={26} />,
  },
  {
    title: "Not for Profit",
    description:
      "Maximize social impact, donor engagement, and operational efficiency with Dynamics 365.",
    link: "/industries/not-for-profit",
    icon: <HandHeart size={26} />,
  },
  {
    title: "Healthcare",
    description:
      "Transform patient care and healthcare operations with intelligent Dynamics 365 solutions.",
    link: "/industries/healthcare",
    icon: <HeartPulse size={26} />,
  },
];

export default function ExploreIndustriesSlider() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        1024: { slidesPerView: 2 }, // desktop = 2 cards
      }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true, dynamicBullets: true, el: undefined }} // <-- adds center dots
      className="pb-8" // optional: adds space at bottom for dots
    >
      {industries.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white border border-gray-200 rounded-xl p-8 h-full
                          hover:shadow-lg transition-all duration-300 flex flex-col mb-8">

            {/* ICON */}
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-6">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {item.description}
            </p>

            {/* LINK */}
            <a
              href={item.link}
              className="mt-auto text-red-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Explore Now <span>→</span>
            </a>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
