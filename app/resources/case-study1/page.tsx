'use client';

import PageLayout from '@/app/components/PageLayout';

export default function CaseStudy1Page() {
    return (
        <PageLayout>

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-sm text-red-600">
                        Case Study
                    </p>

                    <h1 className="text-4xl lg:text-5xl font-bold bg-gray-50 leading-tight mb-6">
                        Microsoft Business Central<br /> Reimplementation
                    </h1>

                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
                        How An Ireland-based Saddlery Business Reinvented Its Retail and Warehouse<br /> Operations with Dynamics Square
                    </p>

                    {/* BIG CENTER CARD */}
                    <div className="bg-gray-100 rounded-3xl shadow-lg px-8 lg:px-16 py-12 max-w-6xl mx-auto mt-14">

                        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6">
                            A Quiet Revolution from the Far North of Ireland
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-6">
                            Deep in the rugged northern stretch of Ireland, near the sea where few
                            technology firms venture, a forward-looking saddlery brand was quietly
                            grappling with growing operational pain points.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                            The brand, a respected name among equestrian circles and local farming
                            communities, was ready for a change. What followed was far from a regular
                            ERP project. It became a full-fledged transformation, marked by trust,
                            on-ground commitment, and a strategic vision for smarter retail and
                            warehouse operations.
                        </p>

                    </div>
                </div>
            </section>

            {/* CLIENT OVERVIEW SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE TEXT */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                                Client Overview
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
                                The business is a prominent equestrian retail brand based in Northern Ireland.
                                Known for premium riding gear, equine products, and farming supplies, the company
                                serves both walk-in customers and online shoppers. Their retail store caters largely
                                to local farmers, while a technologically advanced warehouse behind the store powers
                                operations using robotics. They also sell products through their website, Amazon, and eBay.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                At its core, the business blends traditional retail with advanced warehouse robotics.
                                However, behind this promising setup, lay systems that were underperforming, loosely
                                connected, and difficult to maintain.
                            </p>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="relative flex justify-center lg:justify-end">
                            <img
                                src="/resources/case-s-01.avif"
                                alt="Client Overview"
                                className="rounded-2xl shadow-xl w-4/5 lg:w-3/4 h-auto object-cover"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* BUSINESS CHALLENGES SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP CENTER HEADING */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                            What are The <br className="hidden lg:block" />
                            Business Challenges
                        </h2>

                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-base lg:text-lg">
                            Although the company had already adopted Microsoft Dynamics Navision
                            and warehouse robotics from Hikrobot (a recognised Chinese automation brand),
                            several operational challenges lingered:
                        </p>
                    </div>

                    {/* CONTENT GRID */}
                    <div className="grid lg:grid-cols-2 gap-14 items-start">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/resources/cast-stu-pic.avif"
                                alt="Business Challenges"
                                className="rounded-2xl shadow-xl max-w-lg w-full h-auto object-cover"
                            />
                        </div>

                        {/* RIGHT TEXT POINTS */}
                        <ul className="space-y-6 list-disc pl-6 marker:text-black marker:text-xl">

                            {[
                                "Robotics were running in isolation, with little to no direct integration with Navision.",
                                "A custom middleware was in place to bridge ERP and warehouse systems, but stability and support were recurring issues.",
                                "The ePOS system at the retail counter had limited support, placing heavy reliance on a third-party developer.",
                                "Decision-makers were hesitant to overhaul the setup due to previous implementation complexities and lack of reliable partners.",
                                "Reporting capabilities were fragmented and manual, leading to delays in inventory tracking and sales analysis.",
                                "These gaps had started to impact their agility and risked their ability to manage peak seasons effectively."
                            ].map((point, index) => (
                                <li key={index} className="text-gray-700 leading-relaxed text-base lg:text-lg">
                                    {point}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </section>

            {/* WHAT THE BUSINESS NEEDED SECTION */}
<section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">

        {/* TOP CENTER HEADING */}
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                What the Business Needed
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-base lg:text-lg">
                The company did not need another quick patch or plugin. They needed a comprehensive yet controlled digital transformation that could address the following:
            </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
                <img
                    src="/resources/case-s-02.avif"
                    alt="Business Needs"
                    className="rounded-2xl  max-w-lg w-full h-auto object-cover"
                />
            </div>

            {/* RIGHT CONTENT */}
            <div>

                <div className="space-y-6">

                    {[
                        "Streamlined integration between their warehouse robotics and ERP",
                        "Reliable data flow across retail, warehouse, website, and marketplaces",
                        "A future-ready ERP that could grow with the business",
                        "In-person support from a partner who would not disappear after go-live",
                        "A clear pricing model to avoid financial surprises mid-project"
                    ].map((point, index) => (
                        <div key={index} className="flex items-start gap-4">

                            {/* RED ARROW WITH WHITE CIRCLE */}
                            <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                                <span className="text-red-600 text-lg font-bold">
                                    →
                                </span>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                                {point}
                            </p>

                        </div>
                    ))}

                </div>

                {/* Closing Paragraph */}
                <p className="text-gray-600 leading-relaxed mt-8 text-base lg:text-lg">
                    They needed someone who could travel the distance, both literally and technically,
                    to build something solid and sustainable.
                </p>

            </div>

        </div>

    </div>
</section>

{/* BUSINESS OBJECTIVES SECTION */}
<section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

        {/* TOP HEADING */}
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Business Objectives
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-base lg:text-lg">
                From the outset, the company outlined specific business goals:
            </p>
        </div>

        {/* OBJECTIVE CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

            {[
                "Deploy a unified ERP system with integrated warehouse and retail capabilities",
                "Ensure seamless goods-in and goods-out workflows powered by robotic movements",
                "Replace fragmented systems with centralised, reliable solutions",
                "Automate report generation for daily sales by category, vendor, and posting group",
                "Deliver improved inventory visibility across all sales channels",
                "Achieve go-live before September to support the seasonal business rush"
            ].map((item, index) => (
                <div
                    key={index}
                    className="border border-gray-300 rounded-xl px-6 py-5 bg-white hover:shadow-md transition duration-300"
                >
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        {item}
                    </p>
                </div>
            ))}

        </div>

    </div>
</section>

{/* SOLUTIONS PROPOSED SECTION */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP IMAGE */}
    <div className="mb-16 text-center">
      <img
        src="/resources/case-s-03.png"
        alt="Solutions Proposed"
        className="w-full max-w-5xl mx-auto rounded-xl object-cover"
      />
    </div>

     {/* TWO COLUMN LAYOUT */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">

      {/* LEFT SIDE HEADING + INTRO TEXT */}
      <div className="flex flex-col justify-start">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-30">
          Solutions Proposed by<br/> Dynamics Square
        </h2>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mt-6">
          Dynamics Square approached the project with care, clarity, and a deep understanding of retail and warehouse synergy.
          Based on a detailed onsite discovery visit, the following solutions were proposed:
        </p>
      </div>

      {/* RIGHT SIDE SCROLLABLE SOLUTIONS LIST */}
      <div className="max-h-[500px] overflow-y-auto space-y-6 pr-2">
        {[
          {
            title: "Reimplementation on Microsoft Dynamics 365 Business Central",
            desc: "A full-scale implementation of Business Central to replace their existing Navision setup. Tailored configuration to support saddlery-specific inventory, vendor management, and multi-channel sales tracking."
          },
          {
            title: "Tasklet Mobile WMS",
            desc: "Warehouse mobility enabled for goods-in processes including receiving, bin placement, and stock movement. Improved picking accuracy and speed through barcode scanning and real-time updates."
          },
          {
            title: "Robotics Coordination for Goods-Out",
            desc: "Warehouse robots to manage goods-out movement based on rack availability and dispatch instructions. Clear demarcation between human-managed goods-in and automated goods-out functions."
          },
          {
            title: "Continia Document Capture",
            desc: "Automated capture and processing of vendor documents and purchase orders. Reduced manual entry and processing delays, improving vendor response times."
          },
          {
            title: "Website and Marketplace Middleware Integration",
            desc: "Existing middleware connected Business Central with website, Amazon, eBay, and ePOS systems. Dynamics Square ensured smooth data flow and process orchestration across all touchpoints."
          },
          {
            title: "Reporting Automation",
            desc: "Enabled category-wise, vendor-wise, and posting group-based daily sales reports. Reduced manual data handling and errors through automated report scheduling."
          },
          {
            title: "Support Model with Onsite Access",
            desc: "A 50-hour prepaid support package was offered at a fixed rate to handle report building, development, and training. Assurance of onsite support and direct access to UK-based consultants throughout the project life cycle."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl px-6 py-5 bg-white hover:shadow-md transition duration-300"
          >
            <h3 className="text-gray-800 font-semibold text-lg lg:text-xl mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

{/* RESULTS AND IMPACT SECTION */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CENTER HEADING */}
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
        Results and Impact: What This Transformation Means
      </h2>
      <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-base lg:text-lg">
        Speaking of the impact of this digital transformation, some of the early shifts and projected results include:
      </p>
    </div>

    {/* TWO COLUMN POINTS */}
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">

      {/* LEFT SIDE POINTS */}
      <div className="space-y-6">
        {[
          {
            title: "Stronger Retail Operations",
            desc: "Retail counter transactions, inventory tracking, and vendor coordination expected to become faster and error-free."
          },
          {
            title: "Digitally Synchronized Warehouse",
            desc: "A hybrid warehouse model that blends robotic automation with mobile warehouse management, improving picking and dispatch accuracy."
          },
          {
            title: "Decreased Dependency on External Developers",
            desc: "With core processes handled by Business Central, the business moved away from fragile middleware dependencies."
          }
        ].map((point, index) => (
          <div key={index} className="flex items-start">
            <span className="text-red-600 text-xl mr-3">✔</span>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">{point.title}</h3>
              <p className="text-gray-700 text-base lg:text-lg">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE POINTS */}
      <div className="space-y-6">
        {[
          {
            title: "Reliable Reports, Faster Decisions",
            desc: "Daily insights across categories and vendors equipped managers with better control over stock, pricing, and promotions."
          },
          {
            title: "Improved Vendor Management",
            desc: "Automated purchase order processes and document handling improved vendor relationships and reduced delays."
          },
          {
            title: "End-to-End Visibility",
            desc: "All sales channels, inventory points, and warehouse movements connected in one central system."
          }
        ].map((point, index) => (
          <div key={index} className="flex items-start">
            <span className="text-red-600 text-xl mr-3">✔</span>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">{point.title}</h3>
              <p className="text-gray-700 text-base lg:text-lg">{point.desc}</p>
            </div>
          </div>
        ))}
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
              src="/services/MaskGroup8.png" 
              alt="Training Illustration"
              className="w-2/3 max-w-xs object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 text-center md:text-left text-white">
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">
              Consult To Reveal Best Approach
            </h1>

            <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
              Connect with us to facilitate your system to drive a parallel approach in the market
               you deal with. We help enterprises to implement their unique needs.
               </p>

            <a
              href="/contact-us"
              className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>

        </div>
      </section>

{/* WHY THIS CASE MATTERS SECTION */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE TEXT */}
      <div className="space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Why This Case Matters
        </h2>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          This was never just about another ERP implementation. For Dynamics Square, this project was a statement. It reflected a willingness to step out of comfort zones and build deep trust in a region often overlooked by service providers. It proved that a Microsoft partner could reach the farthest corners of the Irish market, listen carefully, and then deliver solutions that matter.
        </p>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          The company is now on the brink of a powerful transformation. It was a project won with empathy, delivered with focus, and set to redefine what small and medium retailers in complex domains like saddlery can achieve with the right technology partner by their side.
        </p>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          Let this story remind others: sometimes, the greatest shifts happen quietly, far from the spotlight, in places where real commitment still matters.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="text-center lg:text-right">
        <img
          src="/resources/case-s-04.avif"
          alt="Why This Case Matters"
          className="w-full max-w-md mx-auto rounded-xl object-cover"
        />
      </div>

    </div>
  </div>
</section>

        </PageLayout>
    );
}
