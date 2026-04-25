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
    question: "Why should I choose Dynamics CRM?",
    answer:
      "Microsoft Dynamics CRM helps businesses streamline the entire customer relationship journey. It enables better sales tracking, marketing automation, customer engagement, and data-driven decisions to improve overall customer experience."
  },
  {
    question: "Can I customize my Microsoft Dynamics CRM?",
    answer:
      "Yes, Dynamics CRM is highly flexible and can be customized to match your business processes, marketing workflows, and operational requirements to ensure maximum efficiency and adoption."
  },
  {
    question: "How will this guide help me?",
    answer:
      "This guide provides detailed insights into Dynamics CRM capabilities, best practices for implementation, and strategic guidance to help you leverage the platform to its full potential."
  },
  {
    question: "What are the main areas in Dynamics CRM?",
    answer:
      "Main areas include sales automation, marketing automation, customer service, lead and opportunity management, reporting and analytics, and customer engagement tracking."
  },
  {
    question: "Why do I need to fill out the information requested?",
    answer:
      "The requested information helps us understand your business needs better so we can provide personalized recommendations, relevant insights, and ensure a smooth CRM implementation experience."
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


export default function DynamicsCRMPage(){
 
    return (
        <PageLayout>
           {/* HERO SECTION */}
<section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE - TEXT */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
        A Complete Guide to Dynamics CRM
        </h1>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/resources/dynamics-CRM-Ebook-featured-banner (1).avif"  
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
          "History of Dynamics CRM",
          "Top Applications for Businesses",
          "Most Useful Features"
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
          src="/resources/tablet-ebook-dynamics-CRM.avif"
          alt="Perfect eBook Guide"
          className="w-full max-w-md h-auto rounded-2xl object-cover"
        />
      </div>

      {/* RIGHT SIDE POINTS */}
      <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "Top Benefits to Boost Business Growth",
          "Most Effective Pricing and Licensing",
          "How to Avail Free Trial?"
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
    Microsoft Dynamics CRM is a simple yet powerful tool that can help businesses streamline the entire customer relationship journey. Dynamics 365 CRM is a flexible and customizable tool that offers numerous capabilities, including tracking sales leads, managing marketing campaigns, accelerating sales performance, nurturing sales-ready leads, and customer tracking.
  </p>

  <p>
    Our eBook is a perfect guide for organisations who are looking for a better, more agile and highly productive CRM solution to improve and drive a surpassing customer experience.
  </p>

  <p>
    If you want to enable sales and service automation, efficiently connect and engage customers, and improve your customer expectations, you should read this guide to get a complete overview of this powerful solution.
  </p>

  <p>
    With the help of Dynamics CRM, you can seamlessly align your sales and marketing, improve team collaboration, and ensure the success of your digital campaigns. With this guide, you will learn to automate data, streamline tasks, understand your customers' behaviours, elevate your sales level, and bring transparency in your entire sales process with real-time efficiency to maximise your growth potential.
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
                          Get started with the Ultimate Guide to Microsoft Dynamics CRM
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