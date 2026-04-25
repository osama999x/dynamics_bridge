'use client';

import PageLayout from '@/app/components/PageLayout';
import WhyUsSlider from '@/app/components/WhyUsSlider';

export default function CareersPage() {
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
                If you are striving <br />
                to be the best <br />
                <span className="text-red-700">we want you!</span>
              </h1>


            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/company/carrer-banner.avif"
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
                  src="/company/carrer-left-pic.avif"
                  alt="Microsoft Dynamics 365 Implementation Partner"
                  className="w-[500px] max-w-full h-auto object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <h2 className="text-3xl font-bold text-[#1F2A44] mb-8">
                  What Is Dynamics Square?
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Dynamics Square is the UK trustworthy and Microsoft's Authorized Gold Partner 
                  for highly customized business solutions to bring digital transformation in
                   businesses through Microsoft Business Applications.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                 Our effective leaders knows- their company’s success depends upon not just a 
                 vision or product, but the people who carry out the vision and build the product
                  day in and day out – their employees
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                 That’s why Dynamics Square is a successful company who is carrying foster culture
                  that allow their employees to thrive and grow. We’ve rounded up some insights
                   from great minds that drive home the importance of having a happy, empowered,
                    curious and mission-driven team.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16">
    
    {/* Left Side - Title & Paragraph */}
    <div className="lg:w-1/2 mb-12 lg:mb-0">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
        Your best work starts here.
      </h2>
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
        When people ask what it's like to work at Dynamics Square, you'll usually hear the same few sentiments.
      </p>
    </div>

    {/* Right Side - Cards */}
    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-red-700 text-2xl">✔</span>
          <h3 className="text-lg font-semibold text-[#1F2A44]">There's no inner circle.</h3>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-red-700 text-2xl">✔</span>
          <h3 className="text-lg font-semibold text-[#1F2A44]">Diverse perspectives are celebrated.</h3>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-red-700 text-2xl">✔</span>
          <h3 className="text-lg font-semibold text-[#1F2A44]">Everyone's empowered to work autonomously.</h3>
        </div>
      </div>

      {/* Card 4 */}
      <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-red-700 text-2xl">✔</span>
          <h3 className="text-lg font-semibold text-[#1F2A44]">Employees are treated like people, not line items.</h3>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ================= EMPLOYEE FEEDBACK SECTION ================= */}
<section className="py-24 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 text-center">
    
    <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] mb-6">
      What employees are saying
    </h2>

    <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
      Thanks to Employees' feedback and reviews over the years, we've been lucky to be named a great place to work.
    </p>

    {/* Star Rating */}
    <div className="flex justify-center items-center gap-2 mb-4">
      <span className="text-red-700 text-2xl">★ ★ ★ ★ ☆</span>
      <span className="text-gray-700 font-semibold text-lg">4.5</span>
    </div>

    <p className="text-gray-700 mb-6 text-lg">
      90% of Employees on Glassdoor Recommend Dynamics Square
    </p>

    <p className="text-gray-700 text-lg">
      Send us your CV at:{" "}
      <a href="mailto:info@dynamicssquare.co.uk" className="text-red-700 font-semibold underline">
        info@dynamicssquare.co.uk
      </a>
    </p>

  </div>
</section>


     

    </PageLayout>
  );
}
