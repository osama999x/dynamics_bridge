'use client';

import PageLayout from '@/app/components/PageLayout';
import WhyUsSlider from '@/app/components/WhyUsSlider';

export default function WhyUsPage() {
  return (
    <PageLayout>

      {/* ================= HERO + PARTNER SECTION ================= */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= HERO ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Why Us?
              </h1>
              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                We inspire clients to make their most challenging <br />
                business decisions with confidence.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/company/about-pic.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ================= SECOND SECTION ================= */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT IMAGE */}
              <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
                <img
                  src="/services/why-side.avif"
                  alt="Microsoft Dynamics 365 Implementation Partner"
                  className="w-[600px] max-w-full h-auto object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <h2 className="text-3xl font-bold text-[#1F2A44] mb-8">
                  Get More Out of Every Pound: Efficient Microsoft Business Solutions
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  At Dynamics Square, our sole job is to resolve the issues that you are facing with
                  your business with premium and timeless solutions. As your trusted partner, our
                  consultants utilise their years of experience and product expertise to help you
                  get more out of your hard-earned investment.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  With a proven track record of working with hundreds of successful businesses
                  around the world, we are helping them push the boundaries to capture more
                  opportunities and generate maximum ROI.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE DYNAMICS SQUARE ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">

          {/* Top Description */}
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">
              How Dynamics Square Can Transform Your Business?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dynamics Square is equipped with the perfect infrastructure to help any business achieve
              its goals with market-leading technologies and proven Microsoft methodologies.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              As a global leader in Microsoft Solutions, Dynamics Square is driving digital transformation
              through automation and cloud-based technologies across the UK, USA, Australia, and beyond.
            </p>

            <p className="text-[#E06A6A] font-semibold text-lg">
              Global Reach, Local Support
            </p>
          </div>

          {/* Slider */}
          <WhyUsSlider />
        </div>
      </section>

      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B]  mt-12 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

          {/* Left Side Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/services/MaskGroup8.png" // your image in public folder
              alt="Training Illustration"
              className="w-2/3 max-w-xs object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 text-center md:text-left text-white">
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">
              Give us a call today
            </h1>

            <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
              Selecting the right implementation partner is most important along with
              right business solution for success of the project.
            </p>

            <a
              href="/contact-us"
              className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Request a Call Back
            </a>
          </div>

        </div>
      </section>
      {/* customers section */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] mb-6">
            Our Valuable Customers
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We employ market-leading technologies, consultants, processes, and proven methodologies to help clients design, implement, and manage their business solutions that align with business priorities, deliver maximum return on investment, and create high-performance organizations.
          </p>
        </div>
      </section>


    </PageLayout>
  );
}
