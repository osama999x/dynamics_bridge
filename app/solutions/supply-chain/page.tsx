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





export default function SupplyChainPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Dynamics 365 Supply<br /> Chain Management
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Explore new Supply Chain capabilities, optimize resources, maximize operational efficiency, and accelerate
                time to market while keeping real-time eyes in your end-to-end supply chain operations.
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
                src="/solutions/Supplychainbanner.avif"
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
            What is dynamics 365 Supply Chain Management?
          </h2>

          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
            Microsoft Dynamics 365 Supply Chain helps organizations simplify, streamline, and accelerate their supply
            chain practices just to produce, drive, and scale high. You can bring a unified view of your entire supply
            chain cycle from inventory, warehousing, manufacturing, logistics, and more along with predictive data to
            support instant and strategic decision-making.
          </p>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT ACCORDION - 3 ITEMS */}
            <div className="space-y-4">
              {/* ITEM 1 */}
              <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/Accelerate-Time-to-Market.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">Accelerate Time to Market</h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Reduce development cycles and get products to market faster with streamlined processes and integrated analytics.
                </p>
              </details>

              {/* ITEM 2 */}
              <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/Demand-Analysis-Fulfillment.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">Demand Analysis & Fulfillment</h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Optimize inventory and fulfill customer demand efficiently using predictive analytics and smart planning tools.
                </p>
              </details>

              {/* ITEM 3 */}
              <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/Sell-smarter-and-improve-customer-service.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">Optimize Inventory & Logistics</h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Improve warehouse efficiency, reduce stockouts, and enhance delivery accuracy with integrated logistics management.
                </p>
              </details>
            </div>

            {/* RIGHT ACCORDION - 2 ITEMS */}
            <div className="space-y-4">
              {/* ITEM 4 */}
              <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/4.jpg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">Intelligent Manufacturing Operations</h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Use AI-driven insights to monitor production, optimize resource usage, and improve manufacturing efficiency.
                </p>
              </details>

              {/* ITEM 5 */}
              <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/Increase-Asset-Uptime.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">Increase Asset Uptime</h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Maximize equipment availability and reduce unplanned downtime with predictive maintenance and monitoring tools.
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
                Dynamics 365 Supply Chain Management Features
              </h2>
              <p className="text-lg text-gray-600">
                The solution includes a number of features that make it an <br />effective tool for managing supply chains.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* CARD 1 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Automate Your Supply Chain
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Bring automation in your entire supply chain pipeline to accelerate processes while reducing redundant tasks. Streamline operations with a unified data view of inventory, manufacturing, warehousing, logistics, and more.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Drive Innovation & Scalability
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Maximize operational efficiency, optimize workforce productivity, and drive scalability by bringing transparency to your supply chain cycle from ordering, warehousing and automation.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Drive Strategic Planning
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Avail the Dynamics 365 Supply Chain insights and turn your supply chain and logistics data into predictive analytics to make informed decisions and drive strategic planning for better revenue outcomes.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Optimize Resources
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Keep tracking your inventory levels, improve cost management, predict customer demand, and enable better resource and inventory planning to drive productive growth while reducing downtime.
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
           Supply Chain Management Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
           Strategically Work Towards Fulfilling Your Financial Visions
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
      Copilot in Dynamics 365 Supply Chain Management
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
      Copilot in Dynamics 365 Supply Chain Management makes it easy for businesses to handle the complicated aspects of the supply chain. Artificial intelligence (AI) is used to make things easier, more efficient, and run more smoothly everywhere. With Copilot, supply chain management becomes more intuitive, allowing your team to focus on delivering value at every stage.
    </p>

    {/* LEFT & RIGHT FEATURES */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">

      {/* LEFT FEATURES */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Smarter Demand Forecasting</h4>
            <p className="text-gray-700">
              Copilot analyses historical trends and market data to predict demand, helping you optimise inventory levels and reduce overstock or shortages.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Effortless Supplier Communication</h4>
            <p className="text-gray-700">
              It drafts supplier communications, such as order requests or follow-ups, saving time and maintaining clarity in your supplier relationships.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FEATURES */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Proactive Risk Alerts</h4>
            <p className="text-gray-700">
              Copilot identifies potential supply chain disruptions, like delays or shortages, and provides actionable recommendations to mitigate risks before they impact operations.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Clear Inventory Insights</h4>
            <p className="text-gray-700">
              It delivers concise inventory summaries, highlighting key metrics like stock availability and reorder points, so you’re always ready to meet customer needs.
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
      Dynamics 365 Supply Chain Management Pricing
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Check out the flexible, cost-effective, and effective Dynamics 365 Supply Chain Management Pricing.
    </p>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Supply Chain Management
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-2">£161.50</p>
        <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
        <p className="text-gray-600 mb-4">
          Build resilience with an agile supply chain. Enhance customer service, drive business sales, manage topline revenue, market smarter. Includes cloud-based CRM, customer support, automate sales, and marketing features.
        </p>
       
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Supply Chain Management Premium
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-2">£230.70</p>
        <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
        <p className="text-gray-600 mb-4">
          All Dynamics 365 SCM standard features along with added Copilot capabilities for smarter, faster operations.
        </p>
        
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Intelligent Order Management
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-2">£242.24</p>
        <p className="text-sm text-gray-500 mb-4">per month</p>
        <p className="text-gray-600 mb-4">
          Manage up to 1,000 order lines/month with AI-driven insights and real-time inventory tracking for smarter order fulfillment.
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

{/* SCM MODULES SECTION */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Dynamics 365 SCM Modules
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
      Dynamics 365 Supply Chain Management modules offer seamless features and capabilities to help you streamline the entire supply chain while maximising revenue by utilising existing resources. Some of the modules are:
    </p>

    {/* TWO COLUMN LAYOUT */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">

      {/* LEFT COLUMN */}
      <div className="space-y-6">
        {/* Asset Management */}
        <div className="flex flex-col items-start bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img src="/solutions/asset-management-icons.png" alt="Asset Management" className="w-12 h-12 mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Asset Management</h4>
          <p className="text-gray-700 text-sm">
            Dynamics 365 SCM effectively manages all the assets, irrespective of the purpose, including maintaining, operating, selling, and developing. It allows the organisation to track and record all products precisely without any errors.
          </p>
        </div>

        {/* Product Information Management */}
        <div className="flex flex-col items-start bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img src="/solutions/product-information-management-icons.png" alt="Product Information Management" className="w-12 h-12 mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Product Information Management</h4>
          <p className="text-gray-700 text-sm">
            Product information management (PIM) is the process of organising and sharing product data across an organization, from initial conception to final sale. This module can automate and streamline tasks to improve efficiency and support business growth.
          </p>
        </div>

        {/* Inventory Management */}
        <div className="flex flex-col items-start bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img src="/solutions/inventory-management-icons.png" alt="Inventory Management" className="w-12 h-12 mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Inventory Management</h4>
          <p className="text-gray-700 text-sm">
            Offers efficient inventory management to all organisations, collecting and recording inventory and providing real-time insights to eliminate restrictions on shipment.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">
        {/* Warehouse Management */}
        <div className="flex flex-col items-start bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img src="/solutions/warehouse-management-icons.png" alt="Warehouse Management" className="w-12 h-12 mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Warehouse Management</h4>
          <p className="text-gray-700 text-sm">
            Lets the organisation supervise all warehouse operations. Integrated with manufacturing, transportation, quality control, sales, transfers, purchasing, and returns for better data flow.
          </p>
        </div>

        {/* Transportation Management */}
        <div className="flex flex-col items-start bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img src="/solutions/transportation-management-icons.png" alt="Transportation Management" className="w-12 h-12 mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Transportation Management</h4>
          <p className="text-gray-700 text-sm">
            Manages all transportation communications with accurate data tracking, supervising all transport transactions entering or leaving the organisation.
          </p>
        </div>

        {/* Rebate Management */}
        <div className="flex flex-col items-start bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img src="/solutions/rebate-management-icons.png" alt="Rebate Management" className="w-12 h-12 mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Rebate Management</h4>
          <p className="text-gray-700 text-sm">
            Helps businesses create legal contracts with end customers, calculate rebates, deductions, and royalties efficiently, centralising all data for easier review and processing.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>


      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
           Create an intelligent and adaptable supply chain
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
            Contact us to discuss your current business needs so that we can help you get a personalised solution
             for your business for more growth and revenue.
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
              Have you got<br />questions about Supply Chain Management?
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
