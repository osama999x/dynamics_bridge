'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const cards = [
  { title: "Years of Expertise", desc: "Our team of consultants bring together their many years of experience to new projects. Our consultants have numerous successful projects to their credit." },
  { title: "Experienced Team", desc: "Dynamics Square consultants are leading subject matter experts in their fields. They bring their solid credibility and impressive experience to every client's project." },
  { title: "Quality Driven", desc: "Our dynamic professional teams help your business implement the best software solutions for your particular needs. We take the utmost pride in the quality of our work." },
  { title: "Timely Execution", desc: "Every project is completed on schedule without compromising quality, keeping your business operations smooth and efficient." },
  { title: "Fuelled by Passion", desc: "Each project is driven by enthusiasm and dedication, ensuring solutions that are both impactful and innovative." },
  { title: "Focused on Innovation", desc: "Leveraging the latest technologies, we constantly innovate to optimize your business operations and results." },
  { title: "High Customer Satisfaction", desc: "Delivering outstanding results is our priority. Our clients’ satisfaction and long-term success are at the core of everything we do." },
  { title: "Innovation Driven Team", desc: "Our team thrives on finding creative solutions, implementing the most effective technologies to elevate your business." },
  { title: "Customer-Centric Approach", desc: "Our clients are always at the heart of everything we do, ensuring solutions that truly meet their needs and expectations." },
];

export default function WhyUsSlider() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={24}
          loop={true}
          autoHeight={false} // 🔥 important
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="relative"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} className="flex h-full">
              <div className="p-6 bg-white rounded-lg shadow-md flex flex-col h-full min-h-[220px] mb-8">
                
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#E06A6A] text-2xl">✔</span>
                  <h3 className="text-xl font-semibold text-[#1F2A44]">
                    {card.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed line-clamp-6">
                  {card.desc}
                </p>

              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination mt-6 flex justify-center"></div>
        </Swiper>
      </div>
    </section>
  );
}
