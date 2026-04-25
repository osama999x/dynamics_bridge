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
    question: "How long does Continia integration with Business Central take?",
    answer:
      "The timeline depends on your business size and complexity, but most integrations are completed within a few weeks to a couple of months."
  },
  {
    question: "Can Continia process scanned documents from old archives?",
    answer:
      "Yes, Continia OCR can handle scanned PDFs and images from old archives, extracting relevant data efficiently."
  },
  {
    question: "Is Continia expense management Business Central module mobile-friendly?",
    answer:
      "Absolutely. Continia Expense Management is fully accessible on mobile devices, allowing your team to capture and approve expenses on the go."
  },
  {
    question: "Does Continia work with international suppliers and multi-currency?",
    answer:
      "Yes, Continia supports multi-currency transactions and works seamlessly with international suppliers."
  },
  {
    question: "Can I start with just one Continia module?",
    answer:
      "Yes, you can implement individual Continia modules based on your business needs and expand later as required."
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

export default function ContiniaIntegrationPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* TOP LABEL */}
          <p className="text-sm text-gray-600 mb-3">
          Continia for Dynamics 365 Business Central
          </p>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
           Finance Chaos Ends Here
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
           Are your invoices piling up? Expense claims crawl through spreadsheets? Output delivery still needs a human nudge?
            Gain full control with Continia for Dynamics 365 Business Central. It eliminates every blind spot before it costs you.
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
              src="/solutions/cont-shape-pic.avif"
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
          The Consequences of Manual Finance
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Be it a missed invoice, lost receipt, or late payment, it isn’t your finance team but the outdated system and manual processes.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Here’s what your business is grappled with when you manually manage your invoices:
        </p>

        <ul className="space-y-4 mb-6">
          {[
            "Vendor invoices enter the system three days late",
            "Receipts for field expenses are emailed, lost, then questioned",
            "Payment approvals pause every weekend",
            "Reports take hours to compile",
            "Audits bring dread and overtime",
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
          These are not small problems. And by the time you realise you're spending millions in salaries to fight fires created by bad systems, it’s too late. This is where Continia for Dynamics 365 Business Central comes to your rescue.
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
          alt="Dynamics 365 Distribution Outcomes"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>


{/* CONTINIA SECTION */}
<section className="bg-gray-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TOP HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
      What is Continia for Dynamics 365 Business Central?
    </h2>

    <p className="text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed text-lg">
      Continia is a native extension for Microsoft Dynamics 365 Business Central, built to eliminate the everyday friction in finance and operations. It’s not another system to manage but the automation layer your ERP was always meant to have.
      <br /><br />
      With Continia for Dynamics 365 Business Central, you get a tightly integrated suite that covers:
    </p>

    {/* FOUR CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {[
        {
          img: "/solutions/con-ic-01.png",
          title: "Document Capture",
          desc: "to process invoices without lifting a finger",
        },
        {
          img: "/solutions/con-ic-02.png",
          title: "Expense Management",
          desc: "that eliminates paper receipts and messy spreadsheets",
        },
        {
          img: "/solutions/con-ic-03.png",
          title: "Payment Management",
          desc: "that keeps errors and missed deadlines off your books",
        },
        {
          img: "/solutions/con-ic-04.png",
          title: "Document Output",
          desc: "for seamless, consistent communication with vendors and clients",
        },
      ].map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
          <img
            src={card.img}
            alt={card.title}
            className="w-42 h-42 mb-4 object-contain"
          />
          <h3 className="text-xl font-semibold mb-2 text-[#6b3d6e]">{card.title}</h3>
          <p className="text-gray-600 text-sm">{card.desc}</p>
        </div>
      ))}
    </div>

    {/* BOTTOM TEXT */}
    <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed text-lg">
      This is how you remove inefficiency without replacing your systems. Just add Continia and let Business Central work smarter, not harder.
    </p>

    <a
      href="/contact-us"
      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all group"
    >
      Automate with Continia
      <span className="text-lg transform group-hover:translate-x-1 transition-transform">
        →
      </span>
    </a>

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
        <span className="text-pink-400">Avoid late tax submissions because receipts weren’t coded</span>
       
      </h2>

      <p className="text-gray-200 mb-8 leading-relaxed">
       Manual work creates liabilities. Continia integration prevents them. Don’t risk your reputation.
      </p>

      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
      >
        Stay Audit-ready with Continia 
        <span className="text-lg transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>

    </div>
  </div>
</section>



{/* PARTNERING / CONTINIA SECTION */}
<section className="bg-gradient-to-r from-[#F7F5FB] to-[#FFFFFF] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/solutions/con-side-06.avif"
          alt="Business Central Continia"
          className="w-[620px] h-[520px] object-cover rounded-2xl "
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          Business Central Continia: Precision Builds Reputation
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          With Continia integration with Business Central, you gain decision clarity and better control over your financial processes.
        </p>

        {/* FOUR ICON CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {[
            {
              img: "/solutions/autostop-07.avif",
              text: "Know which vendors delay payments and which team delays approvals",
            },
            {
              img: "/solutions/autostop-08.avif",
              text: "See which expense types bleed budget",
            },
            {
              img: "/solutions/autostop-09.avif",
              text: "Receive alerts for invoice duplicates before payment",
            },
            {
              img: "/solutions/autostop-10.avif",
              text: "Trace every action to a human or a rule",
            },
          ].map((card, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={card.img}
                alt={`Icon ${index + 1}`}
                className="w-8 h-8 object-contain mt-1"
              />
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Empower Your Business with Continia Today
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

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
            "Scans scanned PDFs and images",
            "Reads handwriting (where possible)",
            "Extracts header, line item, tax data",
            "Routes to approval",
            "Learns over time",
            "Processes documents without asking you to rotate or rename",
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
          Experience OCR Now
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/solutions/con-side-07.avif"
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
