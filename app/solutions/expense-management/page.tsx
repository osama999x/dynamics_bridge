'use client';
import { useState } from 'react';

/* ================= TYPES ================= */
type FaqItemType = {
  question: string;
  answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
    {
    question: "Is Continia Expense Management embedded or a separate tool?",
    answer:
      "Continia Expense Management is fully embedded within Business Central, so there’s no separate system to manage or learn."
  },
  {
    question: "Can I customise expense policies or approval flows?",
    answer:
      "Yes, you can tailor expense policies and approval workflows to match your company’s requirements and ensure compliance."
  },
  {
    question: "What’s the setup time for Continia Expense Management?",
    answer:
      "Setup time varies depending on your business size and complexity, but most deployments are completed efficiently within a few weeks."
  },
  {
    question: "Does the app support mileage and per diem calculations?",
    answer:
      "Absolutely. Continia Expense Management handles mileage, per diem, and other travel-related calculations automatically."
  },
  {
    question: "What is Continia Expense Management pricing like?",
    answer:
      "Pricing depends on the modules you choose and your organization’s size. Contact us for a tailored quote."
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




type ChallengeItemProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function ChallengeItem({ icon, title, text }: ChallengeItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex items-start justify-center h-12 w-12 rounded-lg  text-[#6b3d6e]">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600 leading-relaxed text-sm">
          {text}
        </p>
      </div>
    </div>
  );

}
type FeatureCardProps = {
  title: string;
  text: string;
};

function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
      <h4 className="font-semibold text-lg mb-2 text-[#3F2A56]">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

type TableRowProps = {
  criteria: string;
  bc: string;
  fscm: string;
};

function TableRow({ criteria, bc, fscm }: TableRowProps) {
  return (
    <tr className="hover:bg-[#FAF9FD] transition">
      <td className="px-6 py-4 font-medium text-gray-700">
        {criteria}
      </td>
      <td className="px-6 py-4 text-gray-600">
        {bc}
      </td>
      <td className="px-6 py-4 text-gray-600">
        {fscm}
      </td>
    </tr>
  );
}




import PageLayout from '@/app/components/PageLayout';

export default function ExpenseManagementPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* TOP LABEL */}
          <p className="text-sm text-gray-600 mb-3">
         Continia Expense Management for D365 Business Central
          </p>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
          Manual receipts waste time. And your business bleeds revenue
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
           Solution? Continia. It automates manual processes. Give your team fast, paperless, policy-driven expense control that 
           actually works. Upgrade your process with Continia Expense Management for D365 Business Central. 
          </p>

          {/* CTA BUTTON */}
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
           Book Demo Now! →
          </a>

          {/* IMAGE */}
          <div className="mt-14 flex justify-center">
            <img
              src="/solutions/exp-mangnet-banner.avif"
              alt="Dynamics 365 for Retail"
              className="w-[900px] max-w-full h-auto object-contain rounded-xl "
            />
          </div>

        </div>
      </section>
    {/* OUTCOMES SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          Consequences of Not Using Continia Expense Management
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          When you don't have Continia Expense Management for D365 Business Central, you’re not “managing” expenses. You’re firefighting and the worst part, you’re losing.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Without a proper Business Central Expense Management system:
        </p>

        <ul className="space-y-4 mb-6">
          {[
            "Receipts get lost before Finance ever sees them",
            "Duplicate entries and missed credit card matches go unchecked",
            "Manual per diem and mileage claims waste team hours",
            "Policy compliance becomes guesswork",
            "Month-end close becomes clean-up time",
            "Audits trigger panic, not confidence",
            "The longer this goes unmanaged, the harder it is to fix",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEAF7] text-[#6b3d6e] text-sm font-bold">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Optimise with Continia and regain control of your expenses effortlessly.
        </p>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Know How It Works
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/solutions/con-side-01.avif"
          alt="Dynamics 365 Expense Management Consequences"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>

{/* CONTINIA EXPENSE MANAGEMENT SECTION */}
<section className="bg-gray-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/solutions/con-side-03.avif"
          alt="Continia Expense Management for Business Central"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          What Is Continia Expense Management for Business Central ERP?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          It’s not another app on the side. It’s embedded where your finances live. Continia Expense Management for Business Central ERP gives you a fully integrated, mobile-enabled way to manage expenses, right from submission to approval to booking.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Whether it’s a coffee receipt, a multi-city trip, or a corporate card bill, everything flows inside Dynamics 365. Employees get a mobile app. Managers get a web portal. Finance gets full control.
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          And the best part? Continia integrates with Business Central natively, which means no separate system and no added complexity.
        </p>

        <a
          href="/book-demo"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Get the Edge. Book a Free Demo
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
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

      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
        <span className="text-pink-400">Missing receipts or late claims? Don't let these gaps become a norm</span>
       
      </h2>

      <p className="text-gray-200 mb-8 leading-relaxed">
      Your ERP deserves a productivity engine. Choose Conitina to upgrade your expense management process. Because it can only get fixed with Continia. 
      </p>

      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
      >
       Fix Expense Chaos  
        <span className="text-lg transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>

    </div>
  </div>
</section>


{/* OUTCOMES SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          Leverage the Potential of the Hidden Genius: Continia OCR Business Central
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          This is the power most businesses underestimate.
        </p>

        <ul className="space-y-4 mb-6">
          {[
            "14+ years of experience in Continia Business Central deployments",
            "UK-based support and implementation specialists",
            "Microsoft Gold Partner and Continia-certified",
            "Tailored deployment, testing, and training plans",
            "Ongoing support and updates, not just a one-time install",
            "Processes documents your vendor emailed without a subject line, half-cropped, sideways—no rotation or renaming needed",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEAF7] text-[#6b3d6e] text-sm font-bold">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Talk to Us. Limited Weekly Slots
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/solutions/exp-mangnet-pic-09.avif"
          alt="Continia OCR Business Central"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>


 {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
            Frequently asked questions
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
