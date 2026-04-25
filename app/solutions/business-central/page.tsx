'use client';
import React, { useState } from "react";
import PageLayout from '@/app/components/PageLayout';

/* ================= TYPES ================= */
type FaqItemType = {
    question: string;
    answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
   {
    question: "What is Microsoft Dynamics 365 Business Central?",
    answer:
      "Microsoft Dynamics 365 Business Central is a cloud-based ERP solution designed for small and medium-sized businesses to manage finance, sales, purchasing, inventory, projects, and operations in one integrated system."
  },
  {
    question: "Who can use Dynamics 365 Business Central?",
    answer:
      "Dynamics 365 Business Central is ideal for small to medium-sized businesses across industries such as retail, manufacturing, distribution, and services that need an all-in-one business management solution."
  },
  {
    question: "Is Dynamics 365 Business Central cloud-based?",
    answer:
      "Yes, Dynamics 365 Business Central is primarily a cloud-based solution, but it can also be deployed on-premises if required."
  },
  {
    question: "How does Business Central help small businesses?",
    answer:
      "Business Central helps small businesses streamline financials, automate processes, manage inventory, improve reporting, and make faster decisions using real-time data."
  },
  {
    question: "Is Business Central an ERP system?",
    answer:
      "Yes, Business Central is a full ERP (Enterprise Resource Planning) system that connects finance, operations, sales, and customer service in one platform."
  },
  {
    question: "What can you do with Dynamics 365 Business Central?",
    answer:
      "With Business Central, you can manage accounting, sales, purchasing, inventory, projects, manufacturing, reporting, and business analytics from a single system."
  },
  {
    question: "How is Business Central different from Dynamics NAV?",
    answer:
      "Business Central is the modern cloud-based evolution of Dynamics NAV, offering a better user experience, cloud access, automatic updates, and deeper Microsoft 365 integration."
  },
  {
    question: "Can Dynamics 365 Business Central be used on mobile?",
    answer:
      "Yes, Business Central works on mobile devices through dedicated apps and web access, allowing users to manage business tasks from anywhere."
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


export default function BusinessCentralPage() {
  const [activeTab, setActiveTab] = useState("forrester");
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* TOP LABEL */}
          <p className="text-sm text-gray-600 mb-3">
            Microsoft Dynamics 365 Business Central
          </p>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
            Deploy a solution trusted <br />
            by over 50,000 SMBs across the world
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
            Microsoft Dynamics 365 Business Central eliminates the need for multiple tools and acts as a single
            source of truth across your operations. Business Central is an advanced Microsoft ERP with out-of-the-box
            AI capabilities and has less than 6 months of payback on investment.
          </p>

          {/* CTA BUTTON */}
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Talk to our business central experts →
          </a>

          {/* IMAGE */}
          <div className="mt-14 flex justify-center">
            <img
              src="/solutions/business-new-banner.avif"
              alt="Dynamics 365 for Retail"
              className="w-[900px] max-w-full h-auto object-contain rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* DYNAMICS 365 BUSINESS CENTRAL SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
                What is Dynamics 365 Business Central?
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Microsoft Dynamics 365 Business Central ties together your finance,
                operations, sales, customer service, project management and more to
                deliver a 360-degree business management system through AI, automation,
                and real-time insights.
              </p>

              <p className="text-gray-600 leading-relaxed">
                D365 Business Central brings your teams and business processes in sync
                to help your company scale and thrive with precision and efficiency.
                Microsoft Business Central serves as one smart system which helps you
                stay steady, save time, and make better decisions to take your
                business into the right direction.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Due to its modular structure and cloud-based deployment, Dynamics 365
                Business Central is highly flexible in terms of customisation. Businesses
                can add/remove Business Central functionalities based on their requirements.
                This means Business Central ERP can be customised to cater to different
                industries and operations.
              </p>

              <p className="text-gray-600 leading-relaxed font-semibold">
                In short, Microsoft Business Central is:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>All-in-one system for finance and operations</li>
                <li>An AI-powered ERP with out-of-the-box Copilot</li>
                <li>A scalable cloud platform that grows with your business</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mb-6">
                Ready to move to this powerful cloud-based Microsoft ERP to unlock the
                growth of your business?
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Book Your Free Business Central Demo
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/solutions/bb-cc-busneww.avif"
                alt="Dynamics 365 Business Central"
                className="w-[520px] max-w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* BUSINESS CHALLENGES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
              Business Challenges Solved by Business Central
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Dynamics 365 Business Central capabilities address challenges that a modern business can potentially face. Some of the most certain challenges include:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/solutions/bb-cc-busnew-01.avif"
                alt="Business Challenges"
                className="w-[440px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Operating on outdated, legacy solutions like Dynamics NAV</li>
                <li>Disconnected systems (no single source of truth)</li>
                <li>Reduced productivity due to repetitive manual tasks</li>
                <li>Issues navigating complex processes or data-heavy systems</li>
                <li>Financial close cycles take too long, causing reporting delays</li>
                <li>Poor forecasting due to fragmented data & manual entries</li>
                <li>No multi-site capabilities, resulting in errors and duplication</li>
                <li>Bank reconciliations wasting hours and remain prone to human error</li>
                <li>Difficulty staying compliant with local tax and reporting laws</li>
                <li>And the list goes on…</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mt-4">
                Business Central ERP is an integrated system that addresses all these aforementioned problems and beyond. It helps future-proof your business whether you are a startup that has just kicked off its operations or a promising growing business.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether starting small or growing fast, D365 Business Central is what you need.
              </p>

              <a
                href="/contact-us"
                className="inline-block mt-4 bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Book Your Free Demo!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CENTRAL CAPABILITIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP HEADING */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
              Dynamics 365 Business Central Capabilities
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Microsoft Dynamics 365 Business Central capabilities make it a widely preferred choice by small and midsize businesses.
              <br /><br />
              Is Business Central for Accounting? Yes… and no. D365 BC is much more than just being accounting software. It supports companies across industries and keeps teams connected anywhere in the world.
              <br /><br />
              Business Central comes with the following capabilities:
            </p>
          </div>

          {/* ACCORDION GRID */}
          <div className="space-y-4">

            {/* CAPABILITY ITEM */}
            {[
              {
                title: "Financial Management",
                detail: "General ledger, accounts payable and receivable, VAT and tax management, budgets, cash flow forecast, fixed assets, multi-currency support"
              },
              {
                title: "Supply Chain Management",
                detail: "Purchasing, inventory control, demand forecasting, warehouse management, manufacturing, planning and availability"
              },
              {
                title: "Sales Management",
                detail: "Sales quotes, order management, flexible pricing, invoice discounts, return management, Copilot sales assistance"
              },
              {
                title: "Ecommerce Management",
                detail: "Shopify integration, multi-store management, customer sync, inventory synchronization, e-documents support"
              },
              {
                title: "Customer Relationship Management",
                detail: "Contact management, campaigns, opportunity tracking, email logging, Dynamics 365 Sales integration"
              },
              {
                title: "Project Management",
                detail: "Project setup, budgeting, time tracking, resource allocation, invoicing, WIP calculation"
              },
              {
                title: "Service Management",
                detail: "Service contracts, work order management, dispatching, service pricing, warranty tracking, Field Service integration"
              },
              {
                title: "Human Resources Management",
                detail: "Employee records, absence tracking, payments, reimbursements"
              },
              {
                title: "Business Intelligence: Analytics and Reporting",
                detail: "Power BI integration, 300+ built-in KPIs, financial reporting, data analysis with Copilot, 400+ reports"
              },
              {
                title: "Security",
                detail: "Access control, compliance tools, multi-factor authentication, Microsoft Cloud security"
              },
              {
                title: "Workflows and Automation",
                detail: "Approval workflows, Power Automate integration, AI assistance"
              }
            ].map((item, idx) => (
              <details
                key={idx}
                className="group border rounded-xl p-6 border-gray-200 bg-white transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="font-semibold text-[#1F2A44] text-lg">{item.title}</h4>
                  <span className="text-2xl font-bold group-open:hidden">+</span>
                  <span className="text-2xl font-bold hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>

      {/* MICROSOFT COPILOT IN BUSINESS CENTRAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TOP HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
            Microsoft Copilot in Business Central
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            What if your ERP wasn’t just a system but an intelligent assistant that worked alongside you? Copilot in Dynamics 365 Business Central brings AI-powered automation, smart insights, and real-time assistance to transform how your business operates. No more guesswork, no more wasted hours: just seamless efficiency!
          </p>

          {/* CENTER IMAGE */}
          <div className="flex justify-center mb-16">
            <img
              src="/solutions/copilotbc-new.avif"
              alt="Copilot in Business Central"
              className="w-[900px] max-w-full h-auto object-contain"
            />
          </div>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Chat with Copilot Gives Guidance Inside Business Central",
                detail: "Ask questions in plain words, learn features, and follow guided steps directly in the app to complete daily work faster."
              },
              {
                title: "Responsible AI Safeguards Company Data Always",
                detail: "Data remains within tenant boundaries, with permissions carried through, and privacy and compliance supported by Microsoft’s Responsible AI principles."
              },
              {
                title: "Bank Reconciliation Assist Matches Transactions with Confidence Faster",
                detail: "AI improves matching of bank statement lines, suggests ledger accounts, and helps finance teams reconcile balances with less manual effort."
              },
              {
                title: "Electronic Document Mapping Links Vendor Invoices with Purchase Orders",
                detail: "Copilot speeds invoice processing by suggesting mappings between vendor e-documents and purchase orders, reducing errors and saving processing time."
              },
              {
                title: "Item Substitution Suggestions Save Time and Prevent Duplicates",
                detail: "Copilot identifies close alternatives for items by scanning descriptions, which helps staff avoid duplicates and improves catalogue accuracy."
              },
              {
                title: "Marketing Text Suggestions Speed Product Listings and Pages",
                detail: "AI drafts item descriptions based on product attributes, giving brand-friendly phrasing to list items faster across sales channels."
              },
              {
                title: "AI Agents Like Sales Order Agent Transform Daily Workflows",
                detail: "Agents such as the Sales Order Agent handle customer requests end-to-end, turning conversations into orders with user oversight."
              },
              {
                title: "Copilot Studio Builds Conversational Experiences Tied to Data",
                detail: "Businesses can design chat experiences connected to records and workflows, enabling staff to query data and act on processes easily."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Ready to move faster? See Copilot in Action!
            </p>

            {/* BUTTON */}
            <a
              href="/contact-us"
              className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* BUSINESS CENTRAL PREFERENCE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TOP HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
            Why Business Central is Preferred by Small <br />and Midsize Businesses
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Irrespective of the industry, Dynamics 365 Business Central is the go-to choice for most SMBs. Some of the industries where this Microsoft Cloud ERP is deployed are:
          </p>

          {/* INDUSTRY LIST */}
          <p className="text-gray-700 font-medium mb-12">
            Manufacturing & Distribution | Logistics & Supply Chain | Healthcare & Medical Service Providers | Education | Food and Beverages
          </p>

          <p className="text-gray-600 mb-8">
            And the list goes on… Let’s explore more about the Business Central ERP solution.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("forrester")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "forrester"
                  ? "bg-[#1F355E] text-white"
                  : "bg-white text-[#1F355E] border border-gray-300 hover:bg-[#1F355E] hover:text-white"
                }`}
            >
              Forrester Study
            </button>
            <button
              onClick={() => setActiveTab("success")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "success"
                  ? "bg-[#D9363E] text-white"
                  : "bg-white text-[#D9363E] border border-gray-300 hover:bg-[#D9363E] hover:text-white"
                }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => setActiveTab("best")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "best"
                  ? "bg-[#1F355E] text-white"
                  : "bg-white text-[#1F355E] border border-gray-300 hover:bg-[#1F355E] hover:text-white"
                }`}
            >
              Best ERP Solution
            </button>
            <button
              onClick={() => setActiveTab("highlyRated")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "highlyRated"
                  ? "bg-[#D9363E] text-white"
                  : "bg-white text-[#D9363E] border border-gray-300 hover:bg-[#D9363E] hover:text-white"
                }`}
            >
              Highly Rated
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="max-w-5xl mx-auto text-left space-y-6">
            {activeTab === "forrester" && (
              <div>
                <p className="text-gray-600 mb-4">
                  A 2024 Total Economic Impact™ Study by Forrester looked at how companies
                  using Business Central cut costs and ran things more smoothly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
                  <div className="p-4 bg-white border rounded-lg shadow-sm text-center">
                    <h3 className="text-2xl font-bold text-[#1F355E]">265%</h3>
                    <p>Return over 3 years</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg shadow-sm text-center">
                    <h3 className="text-2xl font-bold text-[#1F355E]">&lt; 6 months</h3>
                    <p>Payback on investment</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg shadow-sm text-center">
                    <h3 className="text-2xl font-bold text-[#1F355E]">Up to 12.5%</h3>
                    <p>Productivity boost for finance and ops teams</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "success" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md flex flex-col text-center overflow-hidden">
                  <img
                    src="/solutions/bb-cc-busnew-03.avif"
                    alt="Oil & Gas brand"
                    className="w-full h-48 object-cover mb-4"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Oil & Gas brand</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Up to 5x faster financial reporting, 400% faster month-end close process
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md flex flex-col text-center overflow-hidden">
                  <img
                    src="/solutions/bb-cc-busnew-04.avif"
                    alt="Lab equipment manufacturer"
                    className="w-full h-48 object-cover mb-4"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Lab equipment manufacturer</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      20% reduction in order processing times, from 3 days to 2 hours reduction in data repair times
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md flex flex-col text-center overflow-hidden">
                  <img
                    src="/solutions/bb-cc-busnew-05.avif"
                    alt="Freight company"
                    className="w-full h-48 object-cover mb-4"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Freight company</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      33% improvement in close time, 18% boost in on-time collections
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "best" && (
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Business Central is the best cloud-based ERP for growing businesses. Key aspects:
                </p>
                <ul className="space-y-4 text-gray-700 border border-gray-200 rounded-lg p-6">
                  <li><strong>Integrated Microsoft ERP:</strong> Connects easily with Microsoft 365 apps like Outlook, Excel, Teams, OneDrive, and Power Platform.</li>
                  <li><strong>Out-of-the-box Microsoft Copilot:</strong> AI assistant across business functions for daily tasks.</li>
                  <li><strong>Cloud-based flexibility:</strong> Scalable, easy onboarding, secure and compliant.</li>
                  <li><strong>Fast to implement, easy to configure:</strong> Tailor for industries with in-product wizards.</li>
                  <li><strong>Built-in analytics:</strong> KPIs, dashboards, and Power BI integration.</li>
                  <li><strong>Global-ready:</strong> Supports 50+ languages and 170+ localizations.</li>
                </ul>
              </div>
            )}

            {activeTab === "highlyRated" && (
              <div>
                <p className="text-gray-600 mb-4">
                  Rated highly by leading tech platforms:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <img src="/solutions/rartin-log-01.avif" alt="Rating 1" className="w-24 md:w-32 h-auto mx-auto" />
                  <img src="/solutions/rartin-log-02.avif" alt="Rating 2" className="w-24 md:w-32 h-auto mx-auto" />
                  <img src="/solutions/rartin-log-03.avif" alt="Rating 3" className="w-24 md:w-32 h-auto mx-auto" />
                  <img src="/solutions/rartin-log-04.avif" alt="Rating 4" className="w-24 md:w-32 h-auto mx-auto" />
                  <img src="/solutions/rartin-log-05.avif" alt="Rating 5" className="w-24 md:w-32 h-auto mx-auto" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BUSINESS CENTRAL SERVICES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TOP HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
            Trusted Microsoft Dynamics 365 Business Central Services by Dynamics Square
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            We are among the UK’s most trusted Microsoft Dynamics 365 Business Central partners. Our team helps small and mid-sized businesses run better with Dynamics 365 Business Central. From first setup to ongoing care, we make sure your system supports your goals at every step.
            <br /><br />
            With our industry knowledge, firms manage finance, sales, projects, and supply chains in one connected place. This reduces waste, improves clarity, and helps decision-makers act with confidence.
          </p>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                img: "/solutions/new-b-i01.png",
                title: "Implementation",
                text: "Our team at Dynamics Square carries out smooth Business Central implementations. We study your business needs carefully and configure the system so that every process runs in line with your goals."
              },
              {
                img: "/solutions/new-b-i02.png",
                title: "Upgrade and Migration",
                text: "Older systems can slow down growth. Microsoft Dynamics 365 Business Central helps firms move data safely from on-premises legacy systems into a cloud ERP that always stays up to date."
              },
              {
                img: "/solutions/new-b-i03.png",
                title: "Support and Maintenance",
                text: "Dynamics Square provides Business Central support and regular system care. Our focus is on keeping your ERP running smoothly, solving issues quickly, and improving efficiency without disruption."
              },
              {
                img: "/solutions/new-b-i04.png",
                title: "Consulting",
                text: "Our consultants guide firms on how to get the best from Business Central. With better planning, clearer reporting, and smoother workflows, businesses improve daily results."
              },
              {
                img: "/solutions/new-b-i05.png",
                title: "Customisation",
                text: "Every company works in its own way. Dynamics 365 Business Central allows tailored extensions and add-ons. Dynamics Square designs changes that match the way your teams actually work."
              },
              {
                img: "/solutions/new-b-i06.png",
                title: "Integration",
                text: "Business Central connects easily with Microsoft 365, Power Platform, and other third-party applications from ISVs. Dynamics Square integrates these systems so that staff can work from one source of truth."
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-2 transition-transform duration-300"
              >
                {/* SMALL ICON IMAGE */}
                <img src={service.img} alt={service.title} className="w-16 h-16 object-contain mb-4" />

                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.text}</p>
                <a
                  href="/contact-us"
                  className="mt-auto text-[#D9363E] font-medium hover:text-[#c12f36] transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}

          </div>

          {/* FINAL CTA */}
          <div className="mt-12">
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Our team of specialists is ready to help you make Business Central work for your business. Speak with us today and take the next step in managing finance, supply chain, sales, and service through one trusted system.
            </p>

            <a
              href="/contact-us"
              className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Talk to Our Experts
            </a>
          </div>

        </div>
      </section>




      {/* CTA SECTION */}
      <section
        className="relative py-20 lg:py-18 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/industries/n-015.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E2F5B]/95 to-[#5B4B8A]/85"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-gray-200 mb-8 leading-relaxed">
              Case Story
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              <span className="text-pink-400">Learn How UK Defence Apparel Maker Boosted Efficiency By Up To 50% with Business Central ERP.</span>

            </h2>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
            >
              Read Case Story
              <span className="text-lg transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* PARTNERING SECTION UPDATED */}
      <section className="bg-gradient-to-r from-[#F7F5FB] to-[#FFFFFF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* LEFT SCROLLABLE CARDS */}
            <div>
              {/* TOP HEADING */}
              <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
                Why Dynamics Square
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
                Dynamics Square is a trusted Microsoft Dynamics 365 implementation partner in the UK. We help small and mid-sized businesses manage finance, supply chain, sales, service, and projects with Microsoft Dynamics 365 Business Central. Our team focuses on steady results, clear guidance, and strong support. Businesses choose Dynamics Square as their Business Central implementation partner because we are:
              </p>

              {/* SCROLLABLE CARDS */}
              <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#4B2F7F] scrollbar-track-gray-200 scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#361f5b] transition-colors duration-300">
                {[
                  {
                    title: "Certified Experts",
                    text: "Our team holds Microsoft certifications ensuring top-level implementation expertise for Business Central."
                  },
                  {
                    title: "End-to-End Support",
                    text: "We assist from initial setup to ongoing maintenance, keeping your ERP system efficient and reliable."
                  },
                  {
                    title: "Industry Knowledge",
                    text: "With experience across multiple industries, we provide tailored solutions that match your business needs."
                  },
                  {
                    title: "Focus on Results",
                    text: "We prioritize measurable outcomes, helping your teams work efficiently and make informed decisions."
                  },
                  {
                    title: "Trusted Partner",
                    text: "Over 350+ global clients rely on Dynamics Square for implementing and managing Microsoft Dynamics 365 solutions."
                  }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">{card.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
                  </div>
                ))}
              </div>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
              >
                Get Free Consultation!
                <span className="text-lg transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/industries/wholesale-pic-28.avif"
                  alt="Dynamics Square Team"
                  className="w-[420px] h-[520px] object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ADD-ONS / APPS SECTION */}
      <section className="bg-[#f9f7fb] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP CENTER TEXT */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
              Make Business Central Work Smarter for Your Business
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Add trusted apps that help shape Business Central around your needs.
              From payments to mobility, reporting to sales, find tools that fit
              right in and make daily work easier.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Shopify Connector",
                desc: "Keep stock, orders, and customer details in sync",
                img: "/solutions/bc-8-13.avif",
              },
              {
                title: "Bank Feeds and Payments",
                desc: "Handle bank transactions and payments directly",
                img: "/solutions/bc-8-14.avif",
              },
              {
                title: "Document Management",
                desc: "Scan, store, and track documents easily",
                img: "/solutions/bc-8-15.avif",
              },
              {
                title: "Mobile WMS",
                desc: "Pick, pack, and move stock on the go",
                img: "/solutions/bc-8-16.avif",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-sm
          hover:shadow-xl hover:-translate-y-3 hover:scale-105
          transition-all duration-500 ease-out
          cursor-pointer"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-28 w-auto object-contain mb-6
                  group-hover:scale-110 transition duration-500"
                />


                <h3 className="font-semibold text-lg mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {card.desc}
                </p>

                <a
                  href="/contact-us"
                  className="text-[#6b3d6e] font-semibold 
            inline-flex items-center gap-2 
            no-underline
            group-hover:gap-3 transition-all duration-300"
                >
                  Get Started
                  <span className="transform group-hover:translate-x-2 transition">
                    →
                  </span>
                </a>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CUSTOM SOLUTION SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e]">
        Dynamics’ Square Custom Business Central Solution
      </h2>
    </div>

    {/* CONTENT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <img
          src="/solutions/bc-cotainer.avif" 
          alt="Import Consignment Solution"
          className="w-full max-w-lg rounded-2xl object-cover"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Import Consignment Solution
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Manufacturers and supply chain firms in the UK depend heavily on
          overseas shipments. Delays, poor visibility, and scattered
          paperwork often create planning gaps that affect production.
          Import Consignment Solution is a Business Central based solution
          created by Dynamics Square to fix these challenges in a simple and
          direct way.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          With this extension, companies can see every container linked with
          purchase orders, record shipment details, and manage critical
          documents in one system. Teams can follow expected arrival times,
          split orders where needed, and track real dates against original
          plans. This means fewer surprises, steady production flow, and
          greater control over consignments.
        </p>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700
          text-white px-7 py-3 rounded-lg font-semibold 
          transition-all duration-300 hover:gap-3"
        >
          Explore the Solution
          <span className="transform hover:translate-x-1 transition">
            →
          </span>
        </a>
      </div>

    </div>
  </div>
</section>

 {/* CTA SECTION */}
      <section
        className="relative py-20 lg:py-18 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/industries/n-015.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E2F5B]/95 to-[#5B4B8A]/85"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">

            <h1 className="text-1xl lg:text-3xl font-bold text-white mb-6">
              <span className="text-pink-400">Act Now or Watch Others Take the Lead</span>

            </h1>
             <p className="text-gray-200 mb-8 leading-relaxed">
              Every moment without an integrated and AI-powered system is a lost opportunity, wasted time, and unnecessary expense.
               Choose Business Central: The Smartest Cloud ERP for Your Business!
            </p>
            <h1 className="text-1xl lg:text-2xl font-bold text-white mb-6">
              <span className="text-gray-200">If Not Now, When?</span>

            </h1>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
            >
             Get Your Free Trial of BC Today
              <span className="text-lg transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
<section className="bg-[#f9f7fb] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CONTENT */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
        D365 Business Central Pricing & Licensing: Invest in Growth, Not Complexity
      </h2>

      <p className="text-gray-600 mb-3">
        Effortless scaling unlocks when you choose to invest in Business Central Cloud ERP.
        Decisions that used to wait for days, now take seconds!
      </p>

      <p className="text-lg font-semibold text-gray-800">
        Transparent Pricing for UK Businesses
      </p>
    </div>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">Business Central</h3>
        <h4 className="text-xl mb-4">Free Trial</h4>

        <p className="text-gray-600 text-sm mb-6 flex-grow">
          Begin a 30-day trial to see how finance, sales, service, and operations
          align within a single experience.
        </p>

        <p className="text-2xl font-bold text-blue-600 mb-6">£0.0*</p>

        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
          Try for Free
        </button>

        <p className="text-xs text-gray-500 mt-4">
          *Get a 30-day free trial to see it for yourself.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">Business Central</h3>
        <h4 className="text-xl mb-4">Essentials</h4>

        <p className="text-gray-600 text-sm mb-6 flex-grow">
          Handle finance, sales, and operations through one smart system.
          Built-in Copilot helps drive clarity and speed.
        </p>

        <p className="text-2xl font-bold text-blue-600 mb-6">
          £61.50 <span className="text-lg text-gray-600">/user/month</span>
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
          Contact us
        </button>

        <p className="text-xs text-gray-500 mt-4">*Excluding VAT</p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">Business Central</h3>
        <h4 className="text-xl mb-4">Premium</h4>

        <p className="text-gray-600 text-sm mb-6 flex-grow">
          Access every feature from Essentials plus advanced tools
          for service and manufacturing.
        </p>

        <p className="text-2xl font-bold text-blue-600 mb-6">
          £84.60 <span className="text-lg text-gray-600">/user/month</span>
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
          Contact us
        </button>

        <p className="text-xs text-gray-500 mt-4">*Excluding VAT</p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">Business Central</h3>
        <h4 className="text-xl mb-4">Team Member</h4>

        <p className="text-gray-600 text-sm mb-6 flex-grow">
          Gain access to view records, approve requests, and edit
          specific details across departments.
        </p>

        <p className="text-3xl font-bold text-blue-600 mb-6">
          £6.60 <span className="text-lg text-gray-600">/user/month</span>
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
          Contact us
        </button>

        <p className="text-xs text-gray-500 mt-4">*Excluding VAT</p>
      </div>

    </div>

  </div>
</section>

 {/* FAQ SECTION */}
            <section className="py-20 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Have you got<br />questions about Business Central?
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
