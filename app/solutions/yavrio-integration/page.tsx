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
    question: "How does Yavrio Business Central Integration work?",
    answer:
      "Yavrio integrates Microsoft Dynamics 365 Business Central with your bank data to automate reconciliations, payments, and reporting, removing manual processes and improving accuracy."
  },
  {
    question: "What are the benefits of Yavrio and Business Central integration?",
    answer:
      "The integration provides process automation, real-time financial visibility, accurate reconciliations, secure workflows, and faster month-end closes."
  },
  {
    question: "Can Yavrio integration support multi-currency and multiple banks?",
    answer:
      "Yes, Yavrio ERP Integration handles multiple bank accounts and currencies seamlessly within Business Central, ensuring accurate reporting and payments."
  },
  {
    question: "Is Yavrio ERP Integration secure?",
    answer:
      "Absolutely. Yavrio uses banking-grade security standards while Business Central ensures compliance, audit readiness, and data protection."
  },
  {
    question: "Why choose Dynamics Square for Yavrio integration consulting for Business Central?",
    answer:
      "Dynamics Square provides expert implementation, support, and training for Yavrio integration, leveraging years of experience in Business Central deployments to ensure smooth adoption."
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

export default function YavrioIntegrationPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* TOP LABEL */}
          <p className="text-sm text-gray-600 mb-3">
        Yavrio Integration with Business Central
          </p>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
         Precision Banking Now Inside Your ERP
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
           Yavrio integration with Business Central ensures your finance team does not end up spending hours on manual banking 
           tasks such as expense reconciliation and matching records across multiple systems. Transform manual finance into real-time,
            automated, and fully connected operations.
          </p>

          {/* CTA BUTTON */}
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
           Book Your Yavrio Integration Demo Today   →
          </a>

          {/* IMAGE */}
          <div className="mt-14 flex justify-center">
            <img
              src="/solutions/yavrio-banner.avif"
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
          The Consequences of Disconnected Banking
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Be it a missing transaction, delayed payment, or mismatched reconciliation, it is rarely your finance team at fault. The real challenge lies in disconnected bank data and manual entry processes.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Here is what your business experiences when banking and ERP operate in silos:
        </p>

        <ul className="space-y-4 mb-6">
          {[
            "Bank transactions appear in Business Central days after activity",
            "Teams download and import CSV files repeatedly across accounts",
            "Approvals stall because payment data sits outside ERP",
            "Month-end reconciliations stretch into weeks",
            "Cash flow reports lack accuracy until it is too late",
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
          These issues compound quickly. By the time leadership sees the impact, finance teams have already spent countless hours firefighting instead of focusing on strategy. This is where Yavrio integration with Business Central changes the story.
        </p>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Learn How Yavrio Helps
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/solutions/yavrio-side.avif"
          alt="Disconnected Banking Consequences"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>

{/* YAVRIO INTEGRATION SECTION */}
<section className="bg-gray-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">

    {/* TOP CONTENT */}
    <div className="mb-12 lg:mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
        What is Yavrio Integration with Business Central?
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
        Yavrio Business Central Integration connects Microsoft Dynamics 365 Business Central with secure, automated banking workflows. Acting as a Business Central Yavrio Connector, it synchronises account data, enables direct bank feeds, automates reconciliations, and streamlines payment handling.
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
        This Yavrio ERP Integration removes barriers between your bank and ERP so you can run finance operations on autopilot while keeping accuracy, compliance, and transparency at the centre.
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed text-lg font-semibold">
        With Yavrio Bank integration, you get:
      </p>
    </div>

    {/* FEATURE CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      {[
        {
          title: "Secure Bank Feeds",
          description: "Secure, live bank feeds directly connected to Business Central ERP."
        },
        {
          title: "Automated Reconciliation",
          description: "Automated reconciliation ensures accurate matches across accounts and ledgers."
        },
        {
          title: "Seamless Payments",
          description: "API-driven payments processed seamlessly within Business Central workflows."
        },
        {
          title: "Real-time Visibility",
          description: "Real-time financial visibility with compliance and audit-ready reporting."
        }
      ].map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-left">
          <h3 className="text-xl font-semibold text-[#6b3d6e] mb-3">{card.title}</h3>
          <p className="text-gray-700 leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>

    {/* CTA BUTTON */}
    <div className="text-center lg:text-left">
      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
      >
        Automate with Yavrio
        <span className="text-lg transform group-hover:translate-x-1 transition-transform">
          →
        </span>
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

      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
        <span className="text-pink-400">Ready to Move Fast? Then Move Once With Yavrio!</span>
       
      </h2>

      <p className="text-gray-200 mb-8 leading-relaxed">
      Yavrio Integration with Business Central strengthens your ERP. Banking, payments, and reconciliation stay inside Microsoft’s trusted ecosystem, keeping you secure and fully in control.
      </p>

      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
      >
       Unify with Yavrio Today!  
        <span className="text-lg transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>

    </div>
  </div>
</section>


{/* YAVRIO BENEFITS SECTION */}
<section className="bg-gray-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT TEXT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          Benefits of Yavrio and Dynamics 365 Business Central Integration
        </h2>

        <ul className="space-y-6">
          {[
            {
              title: "Process Automation with Precision",
              description: "Yavrio Business Central automation cuts repetitive tasks and delivers end-to-end control."
            },
            {
              title: "Accuracy Where It Matters",
              description: "Direct synchronisation of bank data ensures reliable reconciliation, payments, and reporting."
            },
            {
              title: "Security and Compliance by Design",
              description: "Yavrio ERP Integration uses banking-grade standards for secure transactions, while Business Central ensures compliance and audit readiness."
            },
            {
              title: "Real-Time Visibility",
              description: "With instant bank feeds, dashboards reflect actual balances and transactions across connected accounts."
            },
            {
              title: "Return on Investment",
              description: "Manual finance errors cost money. Automating with Yavrio Dynamics 365 Business Central Integration delivers faster closes, fewer errors, and stronger compliance. You get the efficiency gains that pay back quickly."
            }
          ].map((item, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-[#6b3d6e] mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/solutions/yavrio-side-04.avif"
          alt="Yavrio and Dynamics 365 Business Central Benefits"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
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
        <span className="text-pink-400">Run Banking and ERP as ONE with Yavrio!</span>
       
      </h2>

      <p className="text-gray-200 mb-8 leading-relaxed">
      When every transaction counts, you need more than a connector. You need a system that transforms the way finance 
      operates. The Business Central Yavrio Connector delivers automation that scales with your growth.
      </p>

      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
      >
      Request Your Free Demo  
        <span className="text-lg transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>

    </div>
  </div>
</section>

{/* YAVRIO CONNECTOR SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/solutions/yavrio-side-05.avif"
          alt="Business Central Yavrio Connector"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          Business Central Yavrio Connector: Precision in Finance
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Finance leaders want accuracy, speed, and control. Yavrio integration services for Business Central by Dynamics Square deliver that. Here’s what to expect after the integration:
        </p>

        <ul className="space-y-4 mb-8">
          {[
            "Accuracy in every transaction through direct bank data integration",
            "Speed from automated reconciliation and instant payment processing",
            "Control with secure workflows inside Microsoft’s trusted ERP ecosystem",
            "Transparency that strengthens compliance and builds business reputation"
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
          Empower Your Business With Yavrio Today
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
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
