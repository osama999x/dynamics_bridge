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
      question: "Why should we migrate from Dynamics GP to Business Central?",
      answer:
        "Business Central offers cloud capabilities, automation, AI integration, and future-ready scalability."
    },
    {
      question: "When will Microsoft stop supporting Dynamics GP?",
      answer:
        "Microsoft has announced long-term support timelines, but innovation is focused on Business Central."
    },
    {
      question: "What is the migration cost?",
      answer:
        "Migration cost depends on customization, data complexity, and licensing structure."
    },
    {
      question: "Is data migration secure?",
      answer:
        "Yes, with proper planning and certified partners, your data migration is fully secure."
    },
    {
      question: "How long does migration take?",
      answer:
        "It depends on business size and system complexity, typically a few weeks to months."
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


export default function GpToBcMigrationPage(){
 
    return (
        <PageLayout>
           {/* HERO SECTION */}
<section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE - TEXT */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          A Complete Guide for Microsoft Dynamics GP (Great Plains) <br className="hidden lg:block" />
          to Business Central Migration
        </h1>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/resources/dynamics-GP-BC-Ebook-banner-image (1).avif"  
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
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
      This Perfect eBook will guide you through:
    </h2>

    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-3 gap-12 items-start">

      {/* LEFT SIDE POINTS */}
       <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "The need of future ready solutions",
          "Why Businesses are upgrading to BC",
          "Top benefits of moving to BC"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">→</span>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>

      {/* CENTER IMAGE */}
      <div className="flex justify-center">
        <img
          src="/resources/dynamics-GP-BC-tablet.avif"
          alt="Perfect eBook Guide"
          className="w-full max-w-md h-auto rounded-2xl object-cover"
        />
      </div>

      {/* RIGHT SIDE POINTS */}
     <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "Why you should migrate",
          "When Microsoft will end supporting GP",
          "Overall migration cost"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">→</span>
            <span className="text-gray-700">{point}</span>
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
          The world is accepting cutting-edge technology and AI-powered solutions to handle the complex business scenarios we are facing around the globe. Business Central is one such solution that empowers you to streamline complex operations while pushing you to attain a greater level of business growth.
        </p>

        <p>
          With intense embedded AI and automation capabilities, Business Central can help you reduce the overall operational cost while automating your business for good.
        </p>

        <p>
          With graphics and visual content, you will be able to understand all the practical factors of accepting Business Central as your primary support partner for growth.
        </p>

        <p>
          It is designed in such a way that all businesses, regardless of size, can discover the benefits of moving to Business Central with confidence and knowledge.
        </p>

        <p>
          This eBook will guide you through the most frequently asked queries of international businesses that have migrated their systems from GP (Great Plains) to Business Central. Also, it will help you decide whether it is the right time for your unique business to migrate to Business Central or not.
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
                           Start your Business Central Journey Right Now!
                        </h1>

                        <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
                           Discover the path of efficient business to drive a smoother future with Microsoft Dynamics 365 Business Central.
                        </p>

                        <a
                            href="/contact-us"
                            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                        >
                           Get your free copy now!
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