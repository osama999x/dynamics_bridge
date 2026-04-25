'use client';

import PageLayout from '@/app/components/PageLayout';
import ExpertiseSlider from '@/app/components/ExpertiseSlider';

export default function AboutUsPage() {
  return (
    <PageLayout>

      {/* ================= HERO + PARTNER SECTION ================= */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= HERO ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Transforming Businesses Through Cloud Technology
              </h1>
              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Dynamics Square is mustering the energy to create a better world and
                solve your critical business challenges through digital transformation
                led by innovative Microsoft cloud technology — making your business
                more agile and resilient.
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

          {/* ================= PARTNER INFO ================= */}
          <div className="grid grid-cols-12 gap-10 items-start">
            {/* LEFT TITLE */}
            <div className="col-span-12 lg:col-span-4">
              <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
                We’re Microsoft <br />
                Solutions Partner
              </h2>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block w-[2px] bg-gray-600 h-32 mx-12"></div>

            {/* RIGHT PARAGRAPH */}
            <div className="col-span-12 lg:col-span-7">
              <p className="text-gray-600 text-lg leading-relaxed">
                As a Microsoft Gold Partner or Microsoft Solutions Partner, we are
                trusted by 350+ global clients for our reliable and smooth Dynamics 365
                solutions. Our team of 150+ Microsoft consultants is proactively
                delivering cloud technology, high-tech innovations, effective
                training, and consistent support to ensure substantial growth for your
                organisation.
              </p>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-24 text-center">
            <div>
              <h3 className="text-5xl font-semibold text-red-700">350+</h3>
              <p className="mt-2 text-gray-600 text-lg">Clients Worldwide</p>
            </div>
            <div>
              <h3 className="text-5xl font-semibold text-red-700">150+</h3>
              <p className="mt-2 text-gray-600 text-lg">Certified Professionals</p>
            </div>
            <div>
              <h3 className="text-5xl font-semibold text-red-700">14+</h3>
              <p className="mt-2 text-gray-600 text-lg">Years Experience</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE DYNAMICS SQUARE ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">

          {/* Top Description */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">
              Your Trusted Microsoft Partner
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              Your Trusted Microsoft Partner Relationships are built over an ever-valuable
              commodity: Trust. We're out with a simple motto in mind: Be the most preferred 
              technology solution provider in the Global IT Infrastructure by building strong
              relationships among companies and clients for rapid business growth.
            </p>
          </div>

          {/* Mission, Vision, Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <img src="/company/mission.avif" alt="Mission Icon" className="w-16 h-16" />
              <h3 className="text-xl font-semibold text-[#1F2A44]">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower every business on the planet to achieve more and cope with the world's next wave through Microsoft Business Apps such as D365 Business Central, Finance, Sales, Supply Chain - hosted under Microsoft Azure Cloud; a highly secure and advanced cloud network.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <img src="/company/vission.avif" alt="Vision Icon" className="w-16 h-16" />
              <h3 className="text-xl font-semibold text-[#1F2A44]">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To simplify & automate business processes, improve customer experience, boost sales ROI by breaking data silos into meaningful insights by integrating Power BI, AI, and ML - Powered by Microsoft cloud technology.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <img src="/company/approch.avif" alt="Approach Icon" className="w-16 h-16" />
              <h3 className="text-xl font-semibold text-[#1F2A44]">Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to build long-term relationships by making cloud technology accessible. We nurture fundamental values - "customer centricity" and "value proposition". Our clients are at our "central focus" for all our actions - engaging, informing, and adding value to their Vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW PARTNER SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
              <img
                src="/company/miss-lefiimage.avif"
                alt="Microsoft Dynamics 365 Implementation Partner"
                className="w-[600px] max-w-full h-auto object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Building Long Term Association
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Backed up by our in-house highly secured ways of delivering IT solutions, we offer
                Microsoft Cloud Technology for businesses at a reasonable cost; monthly or yearly
                per-user subscription. It helps us build long-term relationships with our customers.
              </p>
              <p className="text-[#1F2A44] mb-4 font-bold text-1xl leading-relaxed">
                See how our incredible people can help you
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PARTNER IN GROWTH ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] text-center">
            We are not merely an IT Solutions provider,<br/> but your partner in growth.
          </h2>
          <img 
            src="/company/group-2192.svg" 
            alt="Partner in Growth" 
            className="w-full max-w-6xl rounded-lg shadow-lg mt-6"
          />
        </div>
      </section>

        {/* ================= EXPERTISE SLIDER ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Our Expertise and Capabilities
            </h2>
            <p className="text-gray-600">
             With us, businesses grow fast, strong, and at full throttle.
            At Dynamics Square, we follow a unique approach to offer what’s best for the business
             while being cost-efficient at each stage of development. That’s why small to large 
             businesses call us a “people’s company,” the company you can rely on! 
            </p>
          </div>

          <ExpertiseSlider />
        </div>
      </section>

      {/* ================= WHY BUSINESSES TRUST DYNAMICS SQUARE ================= */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">
      Why Businesses Trust Dynamics Square?
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      Being a leading Microsoft Solutions Partner in the UK, Dynamics Square is embracing
      automation and tech-driven cloud solutions to help you achieve exponential growth
      while crossing global boundaries. Our core expertise is not just limited to the UK,
      as our presence is available in other parts of the world, including the USA,
      Australia, South Africa, Poland, Canada, the Netherlands, and Singapore.
    </p>

    <p className="text-[#E06A6A] font-semibold text-lg">
      Global Reach, Local Support
    </p>

  </div>
</section>


    </PageLayout>
  );
}
