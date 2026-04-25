'use client';

import PageLayout from '@/app/components/PageLayout';
import Link from 'next/link';

export default function WhitePapersPage() {
  const whitePapers = [
    {
      title: "Microsoft Copilot: The Catalyst for Transformation in Your Business",
      img: "/resources/whitepaper-one.png",
      link: "/resources/white-papers/microsoft-copilot" 
    },
    {
      title: "Dynamics 365 Finance with Copilot WhitePaper",
      img: "/resources/finace-white-papper-banner.png",
      link: "/resources/white-papers/microsoft-finance"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-black">White Paper</h1>
            <p className="text-xl mb-8 text-gray-600">
              Explore our white paper to gain insights into how Microsoft business solutions 
              are driving business transformation and helping companies reach new heights.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/resources/whit-indexbanner.png"
              alt="Microsoft Dynamics Illustration"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Latest Papers */}
      <div className="py-20 px-4 bg-gradient-to-b from-[#f3f6fb] to-[#e9eef7]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Latest Papers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whitePapers.map((paper, i) => (
              <div
                key={i}
                className="bg-[#eef1f6] rounded-xl p-10 text-center hover:shadow-xl transition duration-300"
              >
                <img
                  src={paper.img}
                  alt={paper.title}
                  className="h-64 mx-auto mb-8 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {paper.title}
                </h3>

                {/* Link Button */}
                <Link
                  href={paper.link}
                  className="inline-block border border-gray-700 px-8 py-3 rounded-md text-gray-800 hover:bg-gray-800 hover:text-white transition"
                >
                  Read Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}