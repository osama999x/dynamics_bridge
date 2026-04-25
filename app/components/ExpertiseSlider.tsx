'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    {
        image: '/company/new-side-1.avif',
        title: 'Outpace Your Competition With Microsoft Cloud-based ERP Solutions',
        desc: 'Streamline finance, operations, and supply chain with a unified ERP platform. Empower teams with real-time insights and scalable cloud intelligence.',
        tags: [
            { label: 'Business Central', icon: '/company/group-2122.png' },
            { label: 'Finance', icon: '/company/group-2123.avif' },
            { label: 'Commerce', icon: '/company/group-2124.avif' },
            { label: 'Human Resource', icon: '/company/group-2125.avif' },
            { label: 'Supply Chain', icon: '/company/group-2126.avif' },
            { label: 'Project Operations', icon: '/company/group-2127.png' },
        ],
    },
    {
        image: '/company/group-2152.avif',
        title: 'Uncover Deeper Insights to Deliver Extraordinary Customer Experience',
        desc: 'Connect sales, service, and marketing to create personalized customer journeys. Drive loyalty with data-driven engagement across every touchpoint.',
        tags: [
            { label: 'Sales', icon: '/company/group-2138.avif' },
            { label: 'Marketing', icon: '/company/group-2139.png' },
            { label: 'Field Service', icon: '/company/group-2137.png' },
            { label: 'Customer Service', icon: '/company/group-2136.avif' },
        ],
    },
    {
        image: '/company/group-215.avif',
        title: 'Integrate Microsoft Business Apps With Power Platform for Impactful Solutions',
        desc: 'Automate workflows and build custom apps with low-code innovation. Turn data into action using seamless Power Platform integrations.',
        tags: [
            { label: 'Power BI', icon: '/company/group-2214.avif' },
            { label: 'Power Automate', icon: '/company/group-2213.avif' },
            { label: 'Power Apps', icon: '/company/group-2211.avif' },
            { label: 'Virtual Agents', icon: '/company/group-22101.png' },
        ],
    },
    {
        image: '/company/group-2154.avif',
        title: 'Leverage Emerging Technologies for Sustainability',
        desc: 'Adopt AI, Azure, and Mixed Reality to innovate responsibly. Build intelligent solutions that drive growth while supporting sustainability goals. Enable smarter decisions and long-term impact with emerging cloud technologies.',
        tags: [
            { label: 'Mixed Reality', icon: '/company/group-1998.avif' },
            { label: 'Azure', icon: '/company/group-2164.avif' },
            { label: 'AI', icon: '/company/group-1977.avif' },
        ],
    },
];

export default function ExpertiseSlider() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={80}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            className="expertise-slider w-full"
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full max-w-[520px] object-contain"
                            />
                        </div>

                        {/* CONTENT */}
                        <div>
                            <h3 className="text-4xl font-bold text-[#E06A6A] mb-6">
                                {slide.title}
                            </h3>

                            <p className="text-gray-700 mb-10 leading-relaxed max-w-xl">
                                {slide.desc}
                            </p>

                            {/* TAG ICONS */}
                            <div className="flex gap-4 flex-wrap">
                                {slide.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center w-[80px] text-gray-700"
                                    >
                                        <img
                                            src={tag.icon}
                                            alt={tag.label}
                                            className="w-14 h-14 object-contain mb-1"
                                        />
                                        <span className="text-[11px] leading-tight text-center">
                                            {tag.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
