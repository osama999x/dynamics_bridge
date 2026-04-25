'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/app/components/PageLayout';

export default function CaseStudiesPage() {
  const [active, setActive] = useState('All');

  const filters = ['All', 'Upgrade', 'Implementation', 'Support'];

  const studies = [
    {
      title: "Ireland's Leading Saddlery Retailer Boosted Warehouse Efficiency by 60%",
      category: 'Upgrade',
      img: '/resources/old-mill-feature.jpg',
      link: '/resources/case-study1',
    },
    {
      title: 'Food trader boosted operational control by 162% ROI',
      category: 'Implementation',
      img: '/resources/mgg-food-feautre.jpg',
      link: '/resources/case-study2',
    },
    {
      title: 'Manufacturing company improved reporting efficiency',
      category: 'Support',
      img: '/resources/ALMI-Group.jpg',
      link: '/resources/case-study3',
    },
    {
      title: 'Car Restoration & Customization Leader Boosts ROI by 30% with Business Central',
      category: 'Implementation',
      img: '/resources/Omicron-Engineering.jpg',
      link: '/resources/case-study4',
    },
  ];

  const filtered =
    active === 'All'
      ? studies
      : studies.filter(s => s.category === active);

  return (
    <PageLayout>
      {/* HERO */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-black">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Check out some of our case studies to see how Dynamics 365
              has made a difference for our clients.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/resources/case-icons-list.png"
              className="max-w-md w-full"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* CASE STUDIES */}
      <div className="py-16 px-4 bg-[#f5f7fb]">
        <div className="container mx-auto grid md:grid-cols-4 gap-10">

          {/* LEFT FILTERS */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`block w-full text-left px-4 py-3 rounded-md font-medium transition
                  ${active === f
                      ? 'bg-red-100 border-l-4 border-red-700 text-red-700'
                      : 'hover:bg-gray-100 text-gray-600'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="md:col-span-3 grid md:grid-cols-2 gap-8">
            {filtered.map((study, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={study.img}
                  className="h-56 w-full object-cover"
                  alt=""
                />

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-6 text-gray-800">
                    {study.title}
                  </h3>

                  <Link
                    href={study.link}
                    className="border border-red-700 text-red-700 px-5 py-2 rounded-md hover:bg-red-700 hover:text-white transition inline-block"
                  >
                    Read Case Study
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
