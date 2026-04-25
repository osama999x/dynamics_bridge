'use client';
import Link from "next/link";


import PageLayout from '@/app/components/PageLayout';

export default function OurServicesPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* TOP LABEL */}
          <p className="text-sm text-gray-600 mb-3">
            OUR SERVICES
          </p>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
           Microsoft Business Applications, <br/>Tailored for Your Success
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
           At Dynamics Square, we have the Microsoft expertise, solutions and experience to help
            you navigate continual change—whether it’s to solve the most formidable business
             challenge or seize the next big opportunity.
          </p>


        </div>
      </section>
     
     <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Side Text */}
    <div className="lg:w-1/2">
      <h3 className="inline-block text-red-600 font-semibold text-lg mb-2 border-2 border-red-600 px-3 py-1 rounded-md">
  Consulting
</h3>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan with Confidence, Execute with Precision</h2>
      <p className="text-gray-700 mb-6">
        Our expert consultants analyze your business needs and recommend the best Microsoft Dynamics 365 solution.
        Whether you need process optimization or digital transformation, we help you achieve faster ROI with future-ready strategies.
      </p>

      <Link
        href="/services/consultants"
        className="inline-block text-red-600 font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Find out more
      </Link>
    </div>

   {/* Right Side Image */}
<div className="lg:w-1/2 flex justify-center">
  <img
    src="/services/our-ser-01.avif"
    alt="Consulting"
    className="w-4/5 md:w-3/4 h-auto rounded-lg"
  />
</div>


  </div>
</section>
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Side Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="/services/our-ser-02.avif"
        alt="Implementation"
        className="w-4/5 md:w-3/4 h-auto rounded-lg"
      />
    </div>

    {/* Right Side Text */}
    <div className="lg:w-1/2">
      <h3 className="inline-block text-red-600 font-semibold text-lg mb-2 border-2 border-red-600 px-3 py-1 rounded-md">
        Implementation
      </h3>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Seamless Microsoft Dynamics 365 Implementation
      </h2>

      <p className="text-gray-700 mb-6">
        Our end-to-end implementation services ensure a smooth, risk-free transition to Microsoft Dynamics 365.
        From initial setup to go-live, we help you minimize downtime and maximize efficiency.
      </p>

      <Link
        href="/services/implementation"
        className="inline-block text-red-600 font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Find out more
      </Link>
    </div>

  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Side Text */}
    <div className="lg:w-1/2">
      <h3 className="inline-block text-red-600 font-semibold text-lg mb-2 border-2 border-red-600 px-3 py-1 rounded-md">
        Upgrade
      </h3>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Stay Ahead with the Latest Dynamics 365 Features
      </h2>

      <p className="text-gray-700 mb-6">
        Running an outdated ERP? Upgrade to the latest Dynamics 365 version with zero disruptions and improved scalability. We handle the entire upgrade process, ensuring your data and workflows remain intact.
      </p>

      <Link
        href="/services/upgrade"
        className="inline-block text-red-600 font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Find out more
      </Link>
    </div>

    {/* Right Side Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="/services/our-ser-03.avif"
        alt="Upgrade"
        className="w-4/5 md:w-3/4 h-auto rounded-lg"
      />
    </div>

  </div>
</section>
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Side Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="/services/our-ser-04.avif"
        alt="Support & Training"
        className="w-4/5 md:w-3/4 h-auto rounded-lg"
      />
    </div>

    {/* Right Side Text */}
    <div className="lg:w-1/2">
      <h3 className="inline-block text-red-600 font-semibold text-lg mb-2 border-2 border-red-600 px-3 py-1 rounded-md">
        Support & Training
      </h3>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Expert Support, Whenever You Need It
      </h2>

      <p className="text-gray-700 mb-6">
        From troubleshooting to user training, our dedicated support team ensures your Dynamics 365 solution performs optimally. We offer flexible support plans and in-depth training to empower your workforce.
      </p>

      <Link
        href="/services/support"
        className="inline-block text-red-600 font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Find out more
      </Link>
    </div>

  </div>
</section>

<section className="py-20 bg-gray-50" id="integration-services">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Side Text */}
    <div className="lg:w-1/2">
      <h3 className="inline-block text-red-600 font-semibold text-lg mb-2 border-2 border-red-600 px-3 py-1 rounded-md">
        Integration Services
      </h3>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Connect, Automate, and Scale with Smart Integrations
      </h2>

      <p className="text-gray-700 mb-6">
        Enhance productivity by integrating Dynamics 365 with third-party apps, CRMs, eCommerce platforms, and legacy systems. Our tailored integrations ensure seamless data flow across your business.
      </p>

      {/* Scroll link to top of Services page */}
      <Link
        href="/services/our-services#top"
        className="inline-block text-red-600 font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Find out more
      </Link>
    </div>

    {/* Right Side Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="/services/our-ser-05.avif"
        alt="Integration Services"
        className="w-4/5 md:w-3/4 h-auto rounded-lg"
      />
    </div>

  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-[#6b3d6e] mb-4">
      Why Work with Us?
    </h2>

    {/* Subheading */}
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
      At Dynamics Square, we don’t just implement Microsoft solutions—we help businesses unlock their full potential. As your trusted Microsoft Business Solutions Partner, we transform the way you work by turning challenges into opportunities with tailored consulting, seamless implementation, and dedicated support.
    </p>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-3xl font-bold text-red-600 mb-2">500+</h3>
        <p className="text-gray-700">
          Innovative implementations delivered with strategy, precision, and success.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-3xl font-bold text-red-600 mb-2">150+</h3>
        <p className="text-gray-700">
          Skilled professionals with deep, industry-specific expertise driving innovation.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-3xl font-bold text-red-600 mb-2">14+</h3>
        <p className="text-gray-700">
          Years of industry mastery, delivering excellence in every solution.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-3xl font-bold text-red-600 mb-2">12+</h3>
        <p className="text-gray-700">
          Industries transformed with cutting-edge technology and innovation.
        </p>
      </div>

    </div>
  </div>
</section>







    </PageLayout>
  );
}
