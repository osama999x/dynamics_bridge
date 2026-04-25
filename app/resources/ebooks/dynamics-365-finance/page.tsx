'use client';

import PageLayout from '@/app/components/PageLayout';
import { useState } from "react";

 /* ================= TYPES ================= */
type FaqItemType = {
  question: string;
  answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
  {
    question: "Why should I choose Dynamics 365 for Finance?",
    answer:
      "Dynamics 365 Finance is a powerful ERP solution that helps businesses automate financial processes, improve reporting accuracy, and gain real-time insights to make smarter financial decisions."
  },
  {
    question: "Can I customize my Microsoft Dynamics 365 Finance?",
    answer:
      "Yes, Dynamics 365 Finance is highly flexible and can be tailored to match your business processes, compliance requirements, and reporting needs to ensure maximum efficiency and scalability."
  },
  {
    question: "How will this guide help me?",
    answer:
      "This guide provides clear insights into Dynamics 365 Finance capabilities, implementation best practices, and strategic guidance to help you leverage the platform for effective financial management."
  },
  {
    question: "What is included in Dynamics 365 Finance?",
    answer:
      "Dynamics 365 Finance includes modules for general ledger, accounts payable, accounts receivable, budgeting, fixed assets, cash management, project accounting, and real-time analytics to manage all aspects of finance."
  },
  {
    question: "Why do I need to fill out the information requested?",
    answer:
      "The requested information allows us to understand your business needs better so we can provide tailored insights, personalized guidance, and recommendations for a smooth Dynamics 365 Finance adoption."
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


export default function Dynamics365FinancePage(){
 
    return (
        <PageLayout>
           {/* HERO SECTION */}
<section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE - TEXT */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
       A Quick Start Guide To Dynamics 365 Finance
        </h1>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/resources/three-book-mockup (1).avif"  
          alt="Dynamics GP to Business Central Migration"
          className="w-full max-w-md lg:max-w-lg rounded-2xl"
        />
      </div>

    </div>

  </div>
</section>
{/* PERFECT EBOOK GUIDE SECTION */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CENTER HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-16">
      This Ultimate eBook Will Walk You Through
    </h2>

    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-3 gap-12 items-center">

      {/* LEFT SIDE POINTS */}
      <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "History of Microsoft Dynamics 365 Finance",
          "Need of D365 Finance for Growing Industries",
          "Capabilities of Dynamic 365 Finance"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* CENTER IMAGE */}
      <div className="flex justify-center">
        <img
          src="/resources/tablet-ebook-finance.avif"
          alt="Perfect eBook Guide"
          className="w-full max-w-md h-auto rounded-2xl object-cover"
        />
      </div>

      {/* RIGHT SIDE POINTS */}
      <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "Top Benefits of Dynamic 365 Finance",
          "Microsoft Dynamics 365 Finance Pricing",
          "What's new in Dynamics 365 Finance?"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

    </div>

  </div>
</section>

{/* WHAT'S MORE ABOUT THIS EBOOK SECTION */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/resources/erp-left-about.png" 
          alt="What's more about this eBook"
          className="w-full max-w-md h-auto rounded-2xl object-cover"
        />
      </div>

    {/* RIGHT SIDE TEXT */}
<div className="text-gray-700 space-y-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">
    What's more about this eBook?
  </h2>

  <p>
    D365 Finance is an intelligent ERP (Enterprise Resource Planning) solution to manage finance and its various aspects smoothly. Before the modernization of industries, people used to handle everything manually, which was time-consuming and prone to errors.
  </p>

  <p>
    Our eBook is a perfect guide for organisations who are looking for a better, more agile, and highly productive ERP solution to manage complex financial management and analysis.
  </p>

  <p>
    This eBook will clear all your concerns and show you how you can improve productivity, automate processes, and enhance security and mobility across every step of the digital transformation journey.
  </p>

  <p>
    When you decide to adopt D365 Finance, there are several factors you may initially find challenging. With our quick start guide, you will understand why Dynamics 365 Finance is a cornerstone for your growing business and how it can help you make smarter, faster, and more informed financial decisions.
  </p>
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
                          Get started with the Ultimate Guide to  Dynamics 365 Finance
                        </h1>

                        <a
                            href="/contact-us"
                            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                        >
                          Download Now!
                        </a>
                    </div>

                </div>
            </section>

           {/* FAQ SECTION */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT SIDE - FAQ BOX */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          FAQ
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/resources/Cover_Book_Moc (1).avif"
          alt="FAQ Illustration"
          className="rounded-2xl max-w-lg w-full h-auto object-cover"
        />
      </div>

    </div>
  </div>
</section>
           

        </PageLayout>
    );
}