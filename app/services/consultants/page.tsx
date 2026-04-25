'use client';
import PageLayout from '@/app/components/PageLayout';

export default function ConsultantsPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Microsoft Dynamics <br />365  Consultants: Specialised and Reliable
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Get seamless support from top Dynamics 365 consultants based in UK to empower your
                business for growth, digital transformation, and success.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/services/Microsoft-Dynamics-365-consulting.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>

          </div>

          {/* second section content */}
          <div className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24 ">
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
                  150+ Microsoft Dynamics 365 Consultants Available at your Fingertips
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  With a team of 150+ certified Microsoft dynamics 365 consultants from different domains,
                  Dynamics Square can offer you the best possible support to get your business back on
                  track. Being a Microsoft certified solution partner, we have been helping businesses
                  like yours to resolve even complex issues with minimal time and resources. It makes
                  us stand out while offering cost-effective and trustworthy services.

                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our 12+ years of extensive experience in offering Dynamics 365 ERP and CRM solutions
                  in the UK has helped us build a brand you can rely on. This trust in us can
                  supercharge your business operations, minimise complexities from the system,
                  utilise the resources, and accelerate the business towards steep growth.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Microsoft has entitled us a UK's top Gold partner to offer all
                  businesses best-in-class Dynamics 365 implementation, support,
                  and upgrade services. However, Microsoft has transformed the partner
                  programme and replaced this title (Microsoft Gold Partner) with a unified
                  designation: Microsoft Solution Partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE DYNAMICS SQUARE SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">

          {/* Top Description */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">
              Why Choose Dynamics Square for your Business?
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              Dynamics Square is the leading Microsoft Solution Partner offering its services to businesses in the UK and Europe. We have separate experienced consultants available to deal with various issues of different industries. Our experts include technical consultants, functional consultants, ERP/CRM architects, and business analysts to streamline your business irrespective of complexity.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              We have consultants who not only deal with Microsoft Dynamics 365 business application issues but also offer their services for Microsoft Power Platform. With sufficient resources and a good number of CRM/ERP consultants, we are readily available to boost your business while simplifying the existing resources.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto font-semibold">
              We can Help you with:
            </p>
          </div>

          {/* Items split into two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left Column - 3 items */}
            <div className="flex flex-col gap-6">
              {/* Solution Selection */}
              <div>
                <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Solution Selection</h4>
                <p className="text-gray-600 leading-relaxed">
                  Choosing a Microsoft ERP or CRM solution for a business is a complex task until the requirements are clear. Most businesses run on unique strategies and methodologies that make their requirements specific. Our expert consultancy helps find the perfect solution to accelerate growth.
                </p>
              </div>

              {/* Implementation Strategy */}
              <div>
                <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Implementation Strategy</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team's Dynamics 365 consulting aligns with your business processes, demands, and future requirements to ensure a smooth, successful implementation.
                </p>
              </div>

              {/* Architecture Planning */}
              <div>
                <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Architecture Planning</h4>
                <p className="text-gray-600 leading-relaxed">
                  We capture your business processes, multi-locations, data storage, customizations, and integrations to create the perfect business flow.
                </p>
              </div>
            </div>

            {/* Right Column - 4 items */}
            <div className="flex flex-col gap-6">
              {/* Software Customisation */}
              <div>
                <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Software Customisation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Microsoft certified consultants customise the solution to perfectly align with your business needs, no matter the complexity.
                </p>
              </div>

              {/* System Migration */}
              <div>
                <h4 className="text-xl font-bold text-[#1F2A44] mb-2">System Migration</h4>
                <p className="text-gray-600 leading-relaxed">
                  We migrate your current system to Microsoft business solutions, including data, integrations, and customizations, without hassle.
                </p>
              </div>

              {/* Troubleshooting Errors */}
              <div>
                <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Troubleshooting Errors</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our technical consultants are available 24/7 to resolve simple and complex errors quickly, keeping your business on track.
                </p>
              </div>

              {/* Seamless Support */}
              <div>
                <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Seamless Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  We offer ad hoc, prepaid, and annual support services to streamline your business flow based on your requirements.
                </p>
              </div>
            </div>

          </div>


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
             Want to achieve great heights of your business while optimizing the processes?
            </h1>

            <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
             Sel Dynamics 365 consultants can take your business to the next level (of growth and success).
            </p>

            <a
              href="/contact-us"
              className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Let's Discuss the Process Over a Call!
            </a>
          </div>

        </div>
      </section>
      {/* OUR CORE FEATURES SECTION */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">

    {/* Heading */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-8">
        Our Core Features:
      </h2>
    </div>

    {/* Numbers Row */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
      <div>
        <p className="text-3xl font-bold text-red-500">12+</p>
        <p className="text-gray-600 text-sm mt-1">years Partnership<br/>with Microsoft</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-red-500">150+</p>
        <p className="text-gray-600 text-sm mt-1">Microsoft Certified<br/>Consultants</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-red-500">350+</p>
        <p className="text-gray-600 text-sm mt-1">Global<br/>Clients</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-red-500">20+</p>
        <p className="text-gray-600 text-sm mt-1">Microsoft Product<br/>Expertise</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-red-500">99%</p>
        <p className="text-gray-600 text-sm mt-1">Customer<br/>Satisfaction</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-red-500">100+</p>
        <p className="text-gray-600 text-sm mt-1">Technical<br/>Consultants</p>
      </div>
    </div>

    {/* Features Items */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
      {/* Process Optimization */}
      <div>
        <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Process Optimization</h4>
        <p className="text-gray-600 leading-relaxed">
          Once you optimise the processes, they can enhance a business's overall efficiency, enabling it to get more output with limited resources. While working with 350+ clients, our certified consultants have understood the perfect way to optimise processes while maximising them for better results.
        </p>
      </div>

      {/* Easy Scalability */}
      <div>
        <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Easy Scalability</h4>
        <p className="text-gray-600 leading-relaxed">
          With the growth of a business, here comes the scalability of the processes so that they can align with the growth. As a certified Microsoft Dynamics Partner in the UK, our Dynamics 365 consultancy service knows how to scale the processes and operations to support business growth from all directions.
        </p>
      </div>

      {/* Instant Troubleshooting */}
      <div>
        <h4 className="text-xl font-bold text-[#1F2A44] mb-2">Instant Troubleshooting</h4>
        <p className="text-gray-600 leading-relaxed">
          Issues and errors can lead a business towards substantial financial loss if not resolved when they arrive. Whether the issue is simple or complex, we are readily available to fix this with the perfect solution.
        </p>
      </div>
    </div>

  </div>
</section>






    </PageLayout>
  );
}
