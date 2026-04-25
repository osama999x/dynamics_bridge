"use client";

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
    question: "What are the top ERP systems for 2026?",
    answer:
      "Top ERP systems include Microsoft Dynamics 365, SAP S/4HANA, Oracle NetSuite, and Odoo, catering to different industries and business sizes."
  },
  {
    question: "How does cloud ERP differ from on-premises ERP systems?",
    answer:
      "Cloud ERP is hosted online for easier updates and scalability; on-premises is installed locally, offering more control but higher maintenance."
  },
  {
    question: "Which ERP software is best for small businesses in 2026?",
    answer:
      "Microsoft Dynamics 365 Business Central, Oracle NetSuite, and Odoo are ideal for small businesses, offering essential modules at reasonable cost."
  },
  {
    question: "What factors should I consider when comparing ERP software pricing?",
    answer:
      "Consider license type, user count, customization, implementation costs, and support fees to calculate total cost of ownership."
  },
  {
    question: "How does AI enhance ERP system functionality in 2026?",
    answer:
      "AI automates tasks, provides predictive analytics, detects anomalies, and improves decision-making."
  },
  {
    question: "How to choose the right ERP system?",
    answer:
      "Evaluate business size, industry needs, scalability, budget, and integration requirements before shortlisting ERP systems."
  },
  {
    question: "How to compare two ERP systems?",
    answer:
      "Compare features, costs, usability, support, and conduct demos or trials to see which fits best."
  },
  {
    question: "What are the leading ERP vendors?",
    answer:
      "Leading vendors include Microsoft, SAP, Oracle, NetSuite, Odoo, and Infor, each with different strengths."
  }
];

/* ================= FAQ ITEM COMPONENT ================= */
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

/* ================= PAGE COMPONENT ================= */
export default function ERPComparisonPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-white text-black py-32 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
            Compare the Top ERP Systems for Your Business in 2026
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
            Start with our side-by-side ERP software comparison 2026 tool, covering top ERP systems for 2026 in terms of features, pricing, and deployment. Assess capabilities, estimate ERP cost per user, and shortlist platforms that match your requirements across cloud ERP systems for 2026 and on-premises ERP systems.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Request ERP demos and price quotes for leading options below or browse categories to compare industry picks and other popular segments. Read our selection guide packed with practical insights to support a confident choice among the top 10 ERP systems for 2026 so you choose the best ERP software for your business in 2026.
          </p>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative grid grid-cols-1 md:grid-cols-4 border border-[#E5E7EB] rounded-xl overflow-hidden">

            {/* Card 1 */}
            <div className="relative p-8 flex flex-col items-center justify-center border-r border-[#E5E7EB] text-gray-500">
              <img src="/resources/e-r-p-logo.png" alt="Select ERP" className="h-14 mb-4" />
              <p>Select ERP</p>
            </div>

            {/* Card 2 */}
            <div className="relative p-8 flex flex-col items-center justify-center border-r border-[#E5E7EB] text-gray-500">
              <img src="/resources/e-r-p-logo.png" alt="Select ERP" className="h-14 mb-4" />
              <p>Select ERP</p>

              {/* VS */}
              <div className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-[#C4B5FD] text-white text-xs font-semibold w-10 h-10 rounded-full items-center justify-center shadow">
                VS
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative p-8 flex flex-col items-center justify-center border-r border-[#E5E7EB] text-gray-500">
              <img src="/resources/e-r-p-logo.png" alt="Select ERP" className="h-14 mb-4" />
              <p>Select ERP</p>

              {/* VS */}
              <div className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-[#C4B5FD] text-white text-xs font-semibold w-10 h-10 rounded-full items-center justify-center shadow">
                VS
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative p-8 flex flex-col items-center justify-center text-gray-500">
              <img src="/resources/e-r-p-logo.png"alt="Select ERP" className="h-14 mb-4" />
              <p>Select ERP</p>

              {/* VS */}
              <div className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-[#C4B5FD] text-white text-xs font-semibold w-10 h-10 rounded-full items-center justify-center shadow">
                VS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Have you got<br />questions about ERP?
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
