'use client';

import PageLayout from '@/app/components/PageLayout';

export default function CaseStudy2Page() {
    return (
        <PageLayout>

           {/* HERO SECTION */}
<section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Top Label */}
    <p className="text-sm text-red-600 mb-2">
      Case Study
    </p>

    {/* Main Heading */}
    <h1 className="text-4xl lg:text-5xl font-bold bg-gray-50 leading-tight mb-6">
      Microsoft Business Central Implementation
    </h1>

    {/* Subheading */}
    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base lg:text-lg">
      A growing food trader built a solid digital core with Dynamics 365 Business Central to streamline and scale operations.
    </p>

    {/* BIG CENTER CARD */}
    <div className="bg-gray-100 rounded-3xl shadow-lg px-8 lg:px-16 py-12 max-w-6xl mx-auto mt-14">

      <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6">
        A Crux of the Case Story: How a Startup Gained Control Before Growth
      </h2>

      <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-6">
        A newly registered European trading firm, dealing in cross-border food products, found itself at the starting line with fast-moving operations but without a reliable system to hold it all together.
      </p>

      <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
        It had bold ambitions but limited internal structure. Through a collaborative effort with Dynamics Square, it traded manual guesswork for measurable accuracy, aligning processes and financial control before scaling.
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
          Business Overview
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
          The client is a startup trading company focused on food products. Its primary operations take place across Europe, with key management based out of the United Kingdom. The business was set up to work through multiple legal entities. At the time of this engagement, it had already registered two legal companies in Denmark and one in the United Kingdom.
        </p>

        <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
          As a newly formed company with global ambitions, the client was aiming to establish operational control across sales, finance, purchasing, inventory, and compliance functions. The trading cycles involved were complex and often time-bound. Without a structured system in place, the business faced the risk of relying on manual coordination for highly regulated transactions.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative flex justify-center lg:justify-end">
        <img
          src="/resources/case-s-08.avif"
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
        Being in its early stages, the business was trying to grow while still putting its internal structure in place. This led to key gaps across teams, tools, and time:
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
      <ul className="space-y-6 list-disc pl-6 marker:text-black-600 marker:text-xl">

        {[
          "Manual entries and patchwork tools made it harder to maintain accuracy.",
          "Finance reporting lacked real-time visibility, slowing decision-making.",
          "Multiple legal entities created confusion around transactions and consolidation.",
          "There was no central platform to align purchase, sales, and stock data.",
          "International trade rules required tighter controls across locations.",
          "Rapid operational needs clashed with the absence of scalable systems.",
          "Remote work was difficult due to limited access to core business tools."
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
        At its core, the business needed a structured and scalable system. It had to align people, processes, and data across three registered entities and an expanding trade footprint. The team wanted a single, dependable system that could grow as they grow.
      </p>
    </div>

    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/resources/case-s-09.avif"
          alt="Business Needs"
          className="rounded-2xl max-w-lg w-full h-auto object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <div className="space-y-6">
          {[
            "A modern ERP system that works across entities and locations",
            "Ability to process sales and purchase orders with traceability",
            "Strong financial controls and real-time tracking of performance",
            "Seamless connection with Microsoft 365 tools to improve collaboration",
            "Data security with minimal manual work",
            "Reporting that reflects actuals, not estimates",
            "Clarity across finance, inventory, purchasing, and compliance"
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
        The business had a clear list of outcomes that it wanted to achieve through the ERP implementation. These goals were designed to create a strong foundation and allow for seamless business expansion in future phases.
      </p>
    </div>

    {/* OBJECTIVE CARDS GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

      {[
        "Automate routine functions in sales, purchasing, finance, and stock management",
        "Gain better visibility of financial health for faster decisions",
        "Improve accuracy and reduce wastage across inventory",
        "Manage customer data in a single space to improve service",
        "Strengthen sales operations with tools to manage interactions",
        "Ensure compliance and data protection across legal entities",
        "Identify areas of operational growth through better reporting",
        "Prepare for expansion into other markets and jurisdictions",
        "Allow staff to work securely from different locations and time zones"
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
        src="/resources/case-s-07.png"
        alt="Solutions Proposed"
        className="w-full max-w-5xl mx-auto rounded-xl object-cover"
      />
    </div>

    {/* TWO COLUMN LAYOUT */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">

      {/* LEFT SIDE HEADING + INTRO TEXT */}
      <div className="flex flex-col justify-start">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Solutions Proposed by<br/> Dynamics Square
        </h2>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mt-6">
          The project called for a well-paced, end-to-end ERP deployment that fits the startup’s current scale and future demands. 
          Dynamics Square proposed the implementation of Microsoft Dynamics 365 Business Central. The project was planned using a 
          blend of remote and onsite efforts, depending on project milestones.<br/>Core ERP Modules Included:
        </p>
      </div>

      {/* RIGHT SIDE SCROLLABLE SOLUTIONS LIST */}
      <div className="max-h-[500px] overflow-y-auto space-y-6 pr-2">

        {[
          {
            title: "Finance (General Ledger)",
            desc: "Chart of accounts, currency set-up, journal entries, VAT tracking. Financial statements and reports, G/L budgets, and year-end closure."
          },
          {
            title: "Sales and Receivables",
            desc: "Customer master, order management, sales invoices and credit notes. Sales journals, customer statements, and receivables reporting."
          },
          {
            title: "Purchasing and Payables",
            desc: "Vendor master, purchase order workflows, returns, quotes, and invoices. Payables reports and purchase-related documentation."
          },
          {
            title: "Inventory Management",
            desc: "Item master, variants, stock transfers, lot and serial tracking. Requisition worksheets, costing, and inventory reports."
          },
          {
            title: "Fixed Assets",
            desc: "Depreciation planning, asset journals, purchase and sale of assets. Registers for tracking and audit purposes."
          },
          {
            title: "Cash and Bank Management",
            desc: "Bank reconciliation, deposit handling, and payment journals."
          },
          {
            title: "Project Execution Methodology",
            desc: "Planning and Project Kick-off, Analysis and Fit-Gap Sessions, Design and Configuration, Deployment and User Training, Post-Go Live Support."
          },
          {
            title: "Support Plans Offered",
            desc: "Five-day post-go-live support to address minor issues or errors. Prepaid support hours with priority-based service windows."
          },
          {
            title: "Additional Requests Addressed",
            desc: "The client required a user manual and associated cost clarity. HR add-on solutions discussed for future roll-out. Office 365 licensing included for the newly registered entity. Revised proposal to include two Danish and one UK legal entity. Future entity in Turkey planned for Phase Two."
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
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12">

      {/* LEFT SIDE POINTS */}
      <div className="space-y-8">
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
            <span className="text-red-600 text-2xl mr-4 mt-1">✔</span>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">{point.title}</h3>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE POINTS */}
      <div className="space-y-8">
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
            <span className="text-red-600 text-2xl mr-4 mt-1">✔</span>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">{point.title}</h3>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">{point.desc}</p>
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
         Why This Case Matters and Future Prospects
        </h2>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
         This story stands as a clear example of how a startup, when supported with the right technology and guidance, can build 
         clarity before complexity takes over. It reflects how businesses with small teams and big goals can unlock their full 
         potential when their systems work for them, rather than around them. </p>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
         Phase Two will include the addition of a Turkish legal entity and expansion of features like HR add-ons and extended 
         analytics. For now, the business has made its first strong step, one that balances structure with flexibility and speed
          with stability.</p>
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
