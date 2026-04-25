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
    question: "What is Microsoft Dynamics 365 Sales?",
    answer:
      "Microsoft Dynamics 365 Sales is a CRM solution designed to help businesses manage their sales processes, track customer interactions, and close deals more efficiently."
  },
  {
    question: "What is Dynamics 365 for Sales used for?",
    answer:
      "Dynamics 365 for Sales is used to automate sales processes, gain actionable insights, manage leads and opportunities, and improve customer engagement."
  },
  {
    question: "How does Microsoft Dynamics 365 help in Sales?",
    answer:
      "It helps sales teams by providing AI-driven insights, unified customer data, pipeline management, and tools to personalize customer interactions to drive conversions."
  },
  {
    question: "Is Dynamics 365 Sales available on-premises?",
    answer:
      "No, Microsoft Dynamics 365 Sales is a cloud-based solution and is primarily available through Microsoft’s cloud platform, ensuring regular updates and remote accessibility."
  },
  {
    question: "How much does it cost to implement Microsoft Dynamics 365 for Sales?",
    answer:
      "The cost depends on the plan you choose (Free Trial, Professional, Enterprise, Premium) and any additional modules or customizations required for your business."
  },
  {
    question: "How does Dynamics 365 Sales Work?",
    answer:
      "Dynamics 365 Sales works by centralizing customer data, automating sales workflows, providing actionable analytics, and integrating with Microsoft 365 apps to enhance productivity."
  },
  {
    question: "How do I access Dynamics 365 Sales Professional?",
    answer:
      "You can access Dynamics 365 Sales Professional by subscribing to the Professional plan through Microsoft, logging in via the Dynamics 365 portal, and configuring your environment based on your business needs."
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





export default function SalesPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Dynamics 365 Sales
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Better sales, engaged customers & improved revenue. Grow your business with
                high-velocity sales and personalised customer engagement with Dynamics 365 sales.
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
                src="/solutions/Sales-banner.avif"
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
            What is Dynamics 365 Sales?
          </h2>

          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
            Microsoft Dynamics 365 for Sales (formerly known as Dynamics CRM) helps to
            improve end-to-end sales practices, build and strengthen customer
            relationships, and close sales deals faster. With actionable sales insights
            configured for mobile devices, it enables instant, productive decision-making,
            better customer engagement, and more effective sales strategies.
          </p>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT ACCORDION */}
            <div className="space-y-4">

              {/* ITEM 1 */}
              <details
                open
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/sales-hub-app.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Sales Hub App
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Developed on unified interface framework configured with responsiveness that facilitates
                  users with interactive app view and navigation for any screen or device. The Sales Hub app
                  is designed to be used by both desktops and mobile devices and comes with Microsoft Dynamics
                  365 Sales Enterprise Plan.
                </p>
              </details>


            </div>

            {/* RIGHT ACCORDION */}
            <div className="space-y-4">

              {/* ITEM 2 */}
              <details
                open
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/sales-proffesional-app.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Sales Professional App
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Sales Professional App is designed similar to the Sales Hub app. The only difference is- the
                  entities that Sales Professional app comprises are a subset of entities included in the Sales
                  Enterprise licensing. This app comes and can be availed of with Microsoft Dynamics 365 Sales
                  Professional licensing Plan.
                </p>
              </details>
            </div>

          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
                Dynamics 365 For Sales Features
              </h2>
              <p className="text-lg text-gray-600">
                Explore the benefits of implementing Microsoft <br />Dynamics 365 Sales for
                your business.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* CARD 1 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Build & Improve <br /> Customer Relationship
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  With a unified view of interactions and real-time engagement,
                  connect and build strong customer relationships to drive conversions.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Collaborate & <br /> Engage Faster
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Gain real-time insights, collaborate with your sales team, and manage
                  your entire sales pipeline from a single workspace.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Close <br /> Sales Faster
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Use AI-based insights to engage the right customers across channels
                  and close deals faster through virtual collaboration.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Make Informed <br /> Decisions
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  With AI-driven, data-based insights, make smarter decisions that
                  improve sales performance and forecasting accuracy.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">

          {/* CENTER TITLE */}
          <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
            Dynamics 365 Sales Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            We offer a full range of services to support you on your Dynamics 365 Sales
            journey including implementation, upgrade, and support.
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




      {/* NEW PARTNER SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP HEADING */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
              Microsoft Copilot for Dynamics 365 Sales
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Microsoft Copilot comes embedded in Dynamics 365 Sales and serves as an intelligent AI
              assistant to accelerate lead capture and closing deals faster. It is a boon for sales
              executives because it helps them resolve queries instantly and offers an optimum level
              of customer satisfaction.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/solutions/sales-copilote-side-pic.avif"
                alt="Microsoft Dynamics 365 Upgrade"
                className="w-[600px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-1xl font-bold text-[#1F2A44] mb-2">
                Faster Sales Cycle
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Copilot is capable enough to summarise leads and opportunities to close deals
                with the minimum resources. Also, it can track the sales history to collect
                customer data and help sales professionals pitch personalised offers.
              </p>


             <h2 className="text-1xl font-bold text-[#1F2A44] mb-2">
                 Improved Deal Closure Rate
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Copilot can filter out the high-potential and critical leads so that a business can distribute the
                resources accordingly. With Copilot, we can identify cross-sell and upsell opportunities.
              </p>
                <h2 className="text-1xl font-bold text-[#1F2A44] mb-2">
                 Optimised Processes
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sales executives can generate leads while optimising the process with a personalised approach.
                It aids businesses to build stronger relationships with customers, supercharging relationships.
              </p>
                 <h2 className="text-1xl font-bold text-[#1F2A44] mb-2">
                Enhanced Customer Satisfaction
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Drive a customer-centric approach to offer great customer satisfaction. Establish a streamlined
                communication channel to understand customer requirements and interests.
              </p>
            </div>

          </div>
        </div>
      </section>

   <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">

    {/* SECTION HEADING (NO BG CHANGE) */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Dynamics 365 Sales Pricing
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Choose The Applications That Are Right For Your Business Needs.
    </p>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Sales<br/>Free Trial
          </h3>
        </div>
       
        <p className="text-4xl font-bold text-red-600 mb-4">£0</p>
        <p className="text-gray-600 mb-4">
          This helps your sales team stay focused, boost productivity, and build
          customer trust.
        </p>
        <p className="text-red-600 font-semibold">
          Try for Free
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Sales<br/>Professional
          </h3>
        </div>
        <p className="text-4xl font-bold text-red-600 mb-2">£50.40</p>
        <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
        <p className="text-gray-600">
          Core sales force automation and Microsoft 365 integration.
        </p>
        <p className="text-red-600 mt-2 flex items-center justify-center gap-2">
          <span>✓</span>
          Microsoft Sales Copilot available at an additional cost
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Sales<br/>Enterprise
          </h3>
        </div>
        <p className="text-4xl font-bold text-red-600 mb-2">£80.70</p>
        <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
        <p className="text-gray-600">
          Industry-leading sales force automation with contextual insights and
          advanced customisation capabilities.
        </p>
        <p className="text-red-600 mt-2 flex items-center justify-center gap-2">
          <span>✓</span>
          Includes now Microsoft Sales Copilot
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Sales<br/>Premium
          </h3>
        </div>
        <p className="text-4xl font-bold text-red-600 mb-2">£115.30</p>
        <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
        <p className="text-gray-600">
          Dynamics 365 Sales Enterprise plus prebuilt customisable intelligence
          solutions for sellers and managers.
        </p>
        <p className="text-red-600 mt-2 flex items-center justify-center gap-2">
          <span>✓</span>
          Includes now Microsoft Sales Copilot
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
           Maximize your business potentials
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
           Drive new business challenges by implementing Dynamics 365 Sales
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
             Have you got<br/>questions about Sales?
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
