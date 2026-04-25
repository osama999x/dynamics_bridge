'use client';
import PageLayout from '@/app/components/PageLayout';
import { useState } from 'react';

/* ================= TYPES ================= */
type FaqItemType = {
  question: string;
  answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
    {
    question: "What is Supply Chain Management in Dynamics 365?",
    answer:
      "Dynamics 365 Supply Chain Management is a cloud-based ERP solution designed to streamline and optimize your entire supply chain, from procurement to production, inventory, and delivery."
  },
  {
    question: "How Supply Chain Management helps in business?",
    answer:
      "It helps businesses improve efficiency, reduce operational costs, enhance inventory management, automate processes, and gain real-time insights for smarter decision-making."
  },
  {
    question: "Why Dynamics 365 Supply Chain Management?",
    answer:
      "Dynamics 365 SCM provides a unified platform with AI-driven insights, predictive analytics, and automation capabilities, enabling organizations to build resilient, agile, and scalable supply chains."
  },
  {
    question: "What are the key features of Dynamics 365 Supply Chain Management?",
    answer:
      "Key features include inventory management, warehouse management, production planning, procurement, logistics, demand forecasting, predictive analytics, and AI-powered insights."
  },
  {
    question: "How D365 Supply Chain Management helps to drive smarter?",
    answer:
      "By providing real-time data, predictive insights, and automation, D365 SCM enables proactive decision-making, faster response to market changes, and optimized operations across the supply chain."
  },
  {
    question: "How much does it cost to implement Dynamics 365 Supply Chain Management?",
    answer:
      "The implementation cost depends on the plan (Standard, Premium, or Intelligent Order Management), the size of your business, and any additional modules or customizations required."
  },
  {
    question: "Can I customize or integrate my Supply Chain Management?",
    answer:
      "Yes, Dynamics 365 SCM can be customized to your business processes and integrated with other Microsoft applications or third-party tools to create a connected and efficient supply chain ecosystem."
  },
  {
    question: "What is D365 Commerce?",
    answer:
      "Dynamics 365 Commerce is Microsoft’s integrated retail solution that enables omnichannel operations, connecting e-commerce, in-store, and mobile experiences with intelligent analytics and AI-driven insights."
  },
  {
    question: "What is D365 Commerce scale?",
    answer:
      "D365 Commerce scales from small stores to enterprise-level retail operations, supporting multiple channels, international expansion, complex inventory, and personalized customer experiences."
  },
  {
    question: "Is Dynamics 365 Retail the same as Dynamics 365 Commerce?",
    answer:
      "Dynamics 365 Commerce is the modern evolution of Dynamics 365 Retail, unifying online, in-store, and mobile operations into a single intelligent platform with enhanced AI and analytics."
  },
  {
    question: "What are the top benefits of D365 Commerce?",
    answer:
      "Benefits include omnichannel shopping experiences, real-time inventory visibility, AI-driven recommendations, operational efficiency, personalized customer engagement, and improved revenue growth."
  },
  {
    question: "What are some important capabilities of D365 Commerce?",
    answer:
      "Key capabilities include e-commerce management, POS systems, customer insights, loyalty programs, promotions management, inventory and order management, and AI-powered analytics."
  },
  {
    question: "Are integrations allowed with this business application?",
    answer:
      "Yes, D365 Commerce integrates with other Dynamics 365 applications, Microsoft Power Platform, third-party systems, payment gateways, and ERP tools to provide a seamless retail ecosystem."
  },
  {
    question: "What is the cost of a Dynamics 365 Commerce implementation?",
    answer:
      "The implementation cost depends on the chosen modules, scale of operations, integrations, and any customizations required. Microsoft partners can provide a tailored quote based on your business needs."
  }
];

function FaqItem({ item }: { item: FaqItemType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h4 className={`text-lg font-semibold ${open ? 'text-red-600' : 'text-[#1F2A44]'}`}>
          {item.question}
        </h4>
        <span className={`text-2xl font-bold ${open ? 'text-red-600' : 'text-[#1F2A44]'}`}>
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
          {item.answer}
        </p>
      )}
    </div>
  );
}





export default function CommercePage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
              Microsoft Dynamics <br/>365 Commerce
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                (Previously Dynamics 365 Retail)
             Deliver Seamless Omnichannel Retail, from Storefront to Back Office, with Microsoft Dynamics 365 Commerce.
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Demo
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/solutions/commerce-banner.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>
      {/* PARTNER HIGHLIGHT SECTION */}
<section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
      What is Dynamics 365 Commerce?
    </h2>

    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-6">
      Microsoft Dynamics 365 Commerce enables businesses to deliver a truly connected 
      shopping experience across online, in-store, and mobile channels. Every interaction 
      feels personalised and aligned with customer expectations, creating smooth and 
      meaningful buying journeys.
    </p>

    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
      It goes beyond transactions by connecting your entire retail ecosystem. From late-night 
      browsing to in-store returns, everything works together in harmony. The result is stronger 
      customer loyalty, lasting relationships, and operations that run with clarity and control. 
      Personalise engagement, maximise revenue, improve employee productivity, and optimise 
      operations while reducing costs.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT ACCORDION */}
      <div className="space-y-4">

        {/* ITEM 1 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons-commerce_user-experience.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">User Experience</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Deliver consistent and personalised shopping journeys across web, mobile, and stores with unified customer data.
          </p>
        </details>

        {/* ITEM 2 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons-commerce_back-office.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">Back Office</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Centralise pricing, inventory, promotions, and customer data to keep operations aligned across channels.
          </p>
        </details>

      </div>

      {/* RIGHT ACCORDION */}
      <div className="space-y-4">

        {/* ITEM 3 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons-commerce_ecommerce-platform.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">E-commerce Platform</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Run scalable digital storefronts with rich content, AI-driven recommendations, and seamless checkout.
          </p>
        </details>

        {/* ITEM 4 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons-commerce_Commerce-Surround-Services.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">Commerce Surround Services</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Extend commerce with loyalty programs, customer insights, fraud protection, and connected services.
          </p>
        </details>

      </div>

    </div>

  </div>
</section>

{/* COMMERCE FEATURES SECTION */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Dynamics 365 Commerce Features
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
      Use Dynamics 365 Commerce to strengthen retail operations and boost profit margins 
      with intelligent, connected, and customer-focused capabilities.
    </p>

    {/* LEFT & RIGHT FEATURES */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">

      {/* LEFT FEATURES */}
      <div className="space-y-6">

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Omnichannel Experience</h4>
            <p className="text-gray-700">
              Enable customers to shop easily across phones, tablets, and desktops. 
              Offer modern payment options and deliver consistent experiences across every touchpoint.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Unified Data Experience</h4>
            <p className="text-gray-700">
              Act on real-time insights powered by AI and machine learning to predict trends, 
              improve decision-making, and increase operational efficiency.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT FEATURES */}
      <div className="space-y-6">

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Interconnected Processes</h4>
            <p className="text-gray-700">
              Align workflows and automate data flows to connect teams and departments, 
              reducing friction and improving visibility across operations.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Equipped with AI & Analytics</h4>
            <p className="text-gray-700">
              Use built-in intelligence to identify patterns, eliminate waste, 
              and ensure reliable transportation and distribution from start to finish.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>


     
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">

          {/* CENTER TITLE */}
          <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
           Dynamics 365 Commerce Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Get fast, safe, and future-ready services from Dynamics Square, a Microsoft Certified Partner.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <img
                src="/solutions/settings_b.png"
                alt="Implementation"
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-700 mb-6">
                Proactively manage your sales with an improved customer experience by
                implementing Dynamics 365 Sales.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>

            {/* CARD 2 */}
            <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <img
                src="/solutions/outbound.png"
                alt="Upgrade"
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Upgrade</h3>
              <p className="text-gray-700 mb-6">
                Uplift your business deliveries by upgrading your system with
                Microsoft’s Sales Management Solution.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>

            {/* CARD 3 */}
            <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <img
                src="/solutions/person_pin.png"
                alt="Support"
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-700 mb-6">
                Bring continuity and drive sales efficiency through Dynamics 365 Sales
                support services.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>

            {/* CARD 4 */}
            <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <img
                src="/solutions/forum.png"
                alt="Consulting"
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-gray-700 mb-6">
                Get optimum D365 Sales services suited to your customised business
                needs.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>

          </div>
        </div>
      </section>

     {/* COPILOT SECTION */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Copilot in Dynamics 365 Commerce
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
      Meet Copilot in Dynamics 365 Commerce, your AI-powered assistant that makes 
      managing retail simpler and smarter. Microsoft Copilot enhances customer 
      experiences, streamlines operations, and helps you make better business decisions.
    </p>

    {/* LEFT & RIGHT FEATURES */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">

      {/* LEFT FEATURES */}
      <div className="space-y-6">

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">
              Personalised Customer Recommendations
            </h4>
            <p className="text-gray-700">
              Copilot suggests products based on customer preferences and behaviour, 
              making shopping easier and more engaging while increasing conversions.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">
              Efficient Inventory Management
            </h4>
            <p className="text-gray-700">
              Monitor stock levels intelligently and receive guidance to avoid 
              stockouts or overstocking, keeping inventory balanced and efficient.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT FEATURES */}
      <div className="space-y-6">

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">
              Simplified Content Creation
            </h4>
            <p className="text-gray-700">
              Generate high-quality product descriptions and marketing content 
              quickly, saving time while maintaining brand consistency.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">
              Intelligent Sales Insights
            </h4>
            <p className="text-gray-700">
              Gain actionable sales insights to identify trends, understand 
              performance, and make data-driven decisions that support growth.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>


     <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Dynamics 365 Commerce Pricing
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Below, check out the most efficient D365 Commerce pricing for this powerful 
      business application.
    </p>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Commerce
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-2">£161.50</p>
        <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>

        <p className="text-gray-600 mb-4">
          Includes core capabilities to manage omnichannel retail operations.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            E-Commerce Add-In for Dynamics 365 Commerce
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-2">£3,075.80</p>
        <p className="text-sm text-gray-500 mb-2">user/month, paid yearly</p>

        <p className="text-gray-600 mb-2">
          Includes e-commerce management for Dynamics 365 Commerce.
        </p>

        <p className="text-xs text-gray-500">
          *Requires Dynamics 365 Commerce
        </p>
      </div>

    </div>

    {/* CTA BUTTON */}
    <div className="text-center">
      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
      >
        Get Started Now
        <span className="transition-transform duration-300 hover:translate-x-1">
          →
        </span>
      </a>
    </div>

  </div>
</section>



      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Connect & Share with Experts
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
           Let’s connect to share and discuss your business requirements to reveal revenue-generating solutions.
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            Get Started Now
          </a>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Have you got<br />questions about Dynamics 365 Commerce?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click through to our FAQ for the best answers!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((item, index) => (
              <FaqItem key={index} item={item} />
            ))}
          </div>

        </div>
      </section>

    </PageLayout>
  );
}
