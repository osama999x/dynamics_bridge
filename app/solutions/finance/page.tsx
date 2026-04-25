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
    question: "What is Microsoft Dynamics 365 Finance?",
    answer: "Microsoft Dynamics 365 Finance is an enterprise-grade ERP solution that enables organizations to manage global finance operations, improve accuracy, and make faster, data-driven decisions."
  },
  {
    question: "What are the features of Dynamics 365 Finance?",
    answer: "Dynamics 365 Finance offers financial reporting, budgeting and forecasting, cash and treasury management, tax management, AI-powered insights, compliance, and automation across finance processes."
  },
  {
    question: "How Microsoft Dynamics 365 Finance management can help your business to succeed?",
    answer: "By streamlining financial operations, providing real-time visibility, reducing manual tasks, and enabling predictive insights, Dynamics 365 Finance helps businesses increase efficiency, reduce risk, and drive growth."
  },
  {
    question: "What is included in Dynamics 365 Finance & Operations?",
    answer: "Dynamics 365 Finance & Operations includes modules for finance, supply chain management, human resources, project management, reporting, compliance, and AI-driven business intelligence."
  },
  {
    question: "What is the Microsoft Dynamics 365 finance and operations model?",
    answer: "It is a unified, cloud-based ERP platform that integrates finance, operations, and analytics, providing a scalable system for global business management with real-time insights and AI-powered automation."
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


export default function FinancePage() {
  const [activeTab, setActiveTab] = useState("forrester");
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">

        {/* TEXT CONTAINER */}
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-sm text-gray-600 mb-3">
            Microsoft Dynamics 365 Finance
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
            Deploy AI-powered Dynamics 365<br />
            Finance with a proven 106 percent ROI in three years.
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
            Boost your organisation's ability to develop, modify, and control budgets,
            while enabling faster financial decision-making with Microsoft Dynamics 365 Finance.
          </p>

          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Tell me more →
          </a>

        </div>

        {/* IMAGE FULL WIDTH */}
        <div className="mt-14">
          <img
            src="/solutions/f-mobile-banner-one.avif"
            alt="Dynamics 365 for Retail"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* NEW TWO-COLUMN SECTION INSIDE HERO */}
        <div className="-mt-20 max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-60">

          {/* LEFT SIDE TEXT */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-[#6b3d6e] mb-6">
              What is Dynamics 365 Finance?
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Microsoft Dynamics 365 Finance is an enterprise-grade ERP software solution that helps organisations achieve financial accuracy and transparency. Implementing Dynamics 365 Finance enables you to track and monitor your financial operations in real-time, predict financial outcomes, and manage global risks to drive agility while maximising growth in your business.
            </p>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              See It in Action →
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:w-1/2">
            <img
              src="/solutions/dynamics-365-finance.svg"
              alt="Dynamics 365 Finance Overview"
              className="w-60 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>

      </section>



      {/* BUSINESS CHALLENGES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/solutions/ff-finance-side.avif"
                alt="Business Challenges"
                className="w-[480px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#6b3d6e]">
                Dynamics 365 Finance Implementation: Why Your Business Needs It
              </h3>

              <p className="text-gray-600 leading-relaxed">
                If you face these challenges, your financial health is already at risk.
              </p>

              <p className="text-gray-600 leading-relaxed">
                You need a single finance system that gives accuracy, automation, and intelligence. This is where Dynamics 365 Finance helps you gain control.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Companies using Dynamics 365 Finance have observed faster book closure, improved cash flow, and better profit margins.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether your organisation is growing across cities or expanding worldwide, Dynamics 365 Finance gives the strength and clarity you need.
              </p>

              <a
                href="/contact-us"
                className="inline-block mt-4 bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Schedule Your Finance Demo Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* DYNAMICS 365 FINANCE RESULTS SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* TOP TEXT */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
            See Dynamics 365 Finance Results: A Total Economic Impact™ Study
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
            A study by Forrester found that companies running Dynamics 365 Finance cut legacy costs, boosted productivity, and achieved remarkable ROI.
          </p>

          {/* RESULT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                src="/solutions/bc-8-01.png"
                alt="106% ROI over 3 years"
                className="w-20 h-20 mb-4"
              />
              <p className="text-xl font-bold text-[#6b3d6e]">106%</p>
              <p className="text-gray-600 text-center mt-2">ROI over 3 years</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                src="/solutions/bc-8-02.png"
                alt="$3.9M Legacy cost savings"
                className="w-20 h-20 mb-4"
              />
              <p className="text-xl font-bold text-[#6b3d6e]">$3.9M</p>
              <p className="text-gray-600 text-center mt-2">Legacy cost savings</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                src="/solutions/bc-8-03.png"
                alt="$8.9M Productivity improvements"
                className="w-20 h-20 mb-4"
              />
              <p className="text-xl font-bold text-[#6b3d6e]">$8.9M</p>
              <p className="text-gray-600 text-center mt-2">Productivity improvements</p>
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
            <p className="text-gray-200 mb-8 leading-relaxed">
              Power Your Finance Future
            </p>

            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-6">
              <span className="text-pink-400">Drive growth with AI-driven insights, automation, and control across every financial decision.</span>

            </h2>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
            >
              Get Started Today
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
                Dynamics 365 Finance Benefits: The Edge Every Business Needs
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
                Every successful enterprise has one thing in common: they run finance on systems that drive growth, not slow it down. Dynamics 365 Finance is the clarity and control your business needs. As a Dynamics 365 Finance partner, we make sure you get the most out of this Microsoft cloud ERP.
              </p>

              {/* SCROLLABLE CARDS */}
              <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#4B2F7F] scrollbar-track-gray-200 scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#361f5b] transition-colors duration-300">
                {[
                  {
                    title: "Close Books Faster, With Accuracy",
                    text: "Still taking weeks to reconcile and report? Dynamics 365 Finance automates journal entries, reconciliations, and reporting so your team closes books in days, not months."
                  },
                  {
                    title: "Strengthen Cash Flow & Reduce Risk",
                    text: "Unclear visibility into cash can choke expansion. With predictive analytics and AI powered forecasts, you see cash flow in real time and act before problems hit."
                  },
                  {
                    title: "Automate Collections & Protect Margins",
                    text: "Chasing payments drains resources. With Copilot, automate collections, predict customer payment behaviour, and cut write-offs while improving on-time payments."
                  },
                  {
                    title: "Plan with Confidence, Not Guesswork",
                    text: "Budgeting errors cost growth. Dynamics 365 Finance uses intelligent budget proposals and rolling forecasts, helping you align strategy with real data instead of assumptions."
                  },
                  {
                    title: "Scale Globally Without Compliance Headaches",
                    text: "Expanding across countries adds complexity. Dynamics 365 Finance supports multi-entity, multi-currency, and global compliance so you stay aligned with local tax and regulatory requirements everywhere."
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

              <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
                Companies that implement Dynamics 365 Finance have reported faster closings, stronger compliance, and productivity improvements worth millions.
              </p>

              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
              >
                Claim Your Free Consultation!
                <span className="text-lg transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/solutions/finance-new-side-pic.avif"
                  alt="Dynamics Square Team"
                  className="w-[420px] h-[520px] object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DYNAMICS 365 FINANCE MODULES SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TOP HEADING */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
            Dynamics 365 Finance Modules: Everything Finance Demands, Together
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
            Enterprises need more than basic accounting tools. You need an intelligent, centralised system that unifies global finance, strengthens compliance, and delivers AI powered insights.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
            Here’s what Dynamics 365 Finance covers:
          </p>

          {/* MODULE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                img: "/solutions/ff-finance-i-01.png",
                title: "Financial Planning & Analysis",
                text: "AI powered budgeting, forecasting, and performance analytics with Copilot assistance."
              },
              {
                img: "/solutions/ff-finance-i-02.png",
                title: "Accounting & Financial Close",
                text: "Automated journal entries, reconciliations, and faster financial closing cycles."
              },
              {
                img: "/solutions/ff-finance-i-03.png",
                title: "Cash & Treasury Management",
                text: "Real time cash flow tracking, predictive liquidity insights, and credit risk automation."
              },
              {
                img: "/solutions/ff-finance-i-04.png",
                title: "Tax Management",
                text: "Centralised tax rules, automated calculation, and regulatory compliance across regions."
              },
              {
                img: "/solutions/ff-finance-i-05.png",
                title: "Quote to Cash",
                text: "AI driven billing, collections automation, and smarter accounts receivable management."
              },
              {
                img: "/solutions/ff-finance-i-06.png",
                title: "Global Compliance & Governance",
                text: "Multi-currency, multi-entity, and country specific regulatory support in one system."
              },
              {
                img: "/solutions/ff-finance-i-07.png",
                title: "Subscription & Revenue Management",
                text: "Flexible recurring billing, contract management, and revenue recognition automation."
              },
              {
                img: "/solutions/ff-finance-i-08.png",
                title: "Expense & Cost Management",
                text: "Automated expense reporting, cost tracking, and role-based approvals to control spend."
              },
              {
                img: "/solutions/ff-finance-i-09.png",
                title: "AI (Copilot) & Business Intelligence",
                text: "Predictive insights, automated reports, and real time decision support with Microsoft Copilot."
              }
            ].map((module, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={module.img}
                  alt={module.title}
                  className="w-16 h-16 mb-4"
                />
                <h4 className="text-lg font-semibold text-[#6b3d6e] mb-2 text-center">{module.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{module.text}</p>
              </div>
            ))}

          </div>

          {/* BOTTOM CTA */}
          <p className="text-gray-600 max-w-3xl mx-auto mt-12 leading-relaxed text-base">
            Why manage finance with scattered tools when one intelligent system brings everything together? Unify your finance and accelerate growth with Dynamics 365 Finance.
          </p>

        </div>
      </section>





      {/* MICROSOFT COPILOT IN BUSINESS CENTRAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TOP HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
            Copilot in Dynamics 365 Finance: AI That Redefines Finance
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            What if your finance system worked like a strategic advisor instead of a record keeper? Copilot in Dynamics
            365 Finance brings AI powered intelligence, automation, and real-time insights to finance leaders. It eliminates
            bottlenecks and accelerates financial clarity.
          </p>

          {/* CENTER IMAGE */}
          <div className="flex justify-center mb-16">
            <img
              src="/solutions/solution-new-six-img.avif"
              alt="Copilot in Business Central"
              className="w-[900px] max-w-full h-auto object-contain"
            />
          </div>

         {/* FEATURE CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {[
    {
      title: "Enhanced Collections Management",
      detail: "Summarise account details, track overdue payments, and identify customers with pending balances instantly."
    },
    {
      title: "Plan with Precision",
      detail: "Budgeting, forecasting, and scenario planning powered by AI means finance leaders can respond faster with data-backed decisions."
    },
    {
      title: "Get Instant Financial Insights",
      detail: "Spot trends, market shifts, and demand patterns with data captured in real time to support faster decisions."
    },
    {
      title: "Automate Manual Tasks",
      detail: "Cut repetitive finance activities through automation and save time with AI-generated summaries."
    },
    {
      title: "Stay Ahead with Predictive Intelligence",
      detail: "Detect financial risks and opportunities before they impact business outcomes with proactive intelligence."
    },
    {
      title: "Simplify Compliance and Reporting",
      detail: "Generate accurate reports, automate tax processes, and keep pace with changing regulations confidently."
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

            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-6">
              <span className="text-pink-400">The Right Time for Smarter Finance Is Now</span>

            </h2>
             <p className="text-gray-200 mb-8 leading-relaxed">
              Every day without an intelligent finance system means higher risks, delayed insights, and missed savings. 
              Choose Dynamics 365 Finance ERP: The Smartest Cloud Finance Solution for Modern Enterprises.
            </p>
             <h2 className="text-2xl lg:text-2xl font-bold text-white mb-6">
              <span className="text-gray-200">Don’t Wait. Take the Step Toward Intelligent Finance. </span>

            </h2>


            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
            >
              Try Dynamics  365 Finance Today
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
              Dynamics 365 Finance Pricing & Licensing
            </h2>

            <p className="text-gray-600 mb-3">
              Financial clarity drives better decisions, faster growth, and lasting resilience. With Dynamics 365 Finance,
               businesses in the UK gain the power to simplify complexity, strengthen control, and scale with confidence.
            </p>
          </div>

          {/* PRICING CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

  {/* CARD 1 */}
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
    <h3 className="font-semibold text-lg mb-2">Dynamics 365 Finance</h3>
    <h4 className="text-xl mb-4">Standard</h4>

    <p className="text-gray-600 text-sm mb-6 flex-grow">
      Take control with an intelligent and automated financial management platform built to support accuracy, compliance, and speed.
    </p>

    <p className="text-2xl font-bold text-blue-600 mb-6">
      £161.50 <span className="text-lg text-gray-600">/user/month</span>
    </p>

    <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
      Contact us
    </button>

    <p className="text-xs text-gray-500 mt-4">
      *Excluding VAT (billed annually)
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
    <h3 className="font-semibold text-lg mb-2">Dynamics 365 Finance Premium</h3>

    <p className="text-gray-600 text-sm mb-6 flex-grow">
      Equip your teams with advanced business performance tools for sharper decisions and stronger outcomes.
    </p>

    <p className="text-2xl font-bold text-blue-600 mb-6">
      £230.70 <span className="text-lg text-gray-600">/user/month</span>
    </p>

    <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
      Contact us
    </button>

    <p className="text-xs text-gray-500 mt-4">
      *Excluding VAT (billed annually)
    </p>
  </div>

</div>

        </div>
      </section>

      {/* ATTACH LICENSES SECTION */}
<section className="bg-gray-50 py-20">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* TOP HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
      Expand Your Capabilities with Attach Licenses
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
      Strengthen Dynamics 365 Finance by attaching other Microsoft business applications at a reduced rate. Pay less while gaining connected power across functions. Perfect for businesses ready to expand without overspending.
    </p>

    {/* TABLE */}
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-6 py-3 text-left text-gray-700 font-semibold">
              Attach License Type
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-gray-700 font-semibold">
              Price per User/Month (ex VAT)
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { type: "Sales Attach", price: "£16.50" },
            { type: "Customer Service Attach", price: "£16.50" },
            { type: "Field Service Attach", price: "£16.50" },
            { type: "Project Operations Attach", price: "£16.50" },
            { type: "Commerce Attach", price: "£16.50" },
            { type: "Supply Chain Management Attach", price: "£24.70" }
          ].map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-200 px-6 py-3 text-gray-600">{item.type}</td>
              <td className="border border-gray-200 px-6 py-3 text-gray-600">{item.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} className="border border-gray-200 px-6 py-3 text-xs text-gray-500">
              Note: Actual pricing may vary slightly based on currency conversion, contracts, or Microsoft price changes.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

 <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">

          {/* CENTER TITLE */}
          <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
           What Dynamics 365 Finance Services Do We Offer?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
           Strategically work towards fulfilling your financial vision with Dynamics Square - most trusted 
           and reliable Microsoft Solutions Partner in UK.
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


      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Have you got<br />questions about Dynamics 365 Finance?
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
