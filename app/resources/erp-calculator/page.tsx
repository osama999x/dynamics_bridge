"use client";
import { useState } from "react";
import PageLayout from "@/app/components/PageLayout";

/* ================= TYPES ================= */
type FaqItemType = {
  question: string;
  answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
  {
    question: "What is ERP implementation?",
    answer:
      "ERP implementation involves planning, configuring, and deploying an ERP system to align with your business processes and goals."
  },
  {
    question: "What are the steps for implementing a new ERP system?",
    answer:
      "The key steps include requirement analysis, system selection, configuration, customization, data migration, testing, training, and go-live support."
  },
  {
    question: "How long does ERP implementation take?",
    answer:
      "The duration depends on the size and complexity of your business, but typical implementations range from a few weeks to several months."
  },
  {
    question: "What costs are included in the ERP implementation cost?",
    answer:
      "Costs usually include software licensing, deployment, customization, integration, training, and post-implementation support."
  },
  {
    question: "How accurate is the ERP Implementation Cost Calculator?",
    answer:
      "The calculator provides an estimate based on key factors such as number of users, deployment type, licenses, and customization requirements. For precise costs, consulting with certified ERP experts is recommended."
  },
  {
    question: "What are the ERP pricing models?",
    answer:
      "ERP pricing can be subscription-based (SaaS), perpetual licensing, or a combination of software, implementation, and support fees depending on the vendor."
  },
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



const PURPLE = "#4B2E83";

type Option = {
  id: number;
  name: string;
  price: number;
  required?: boolean;
  details: string[];
};

const options: Option[] = [
  {
    id: 1,
    name: "Core Finance Setup & Data Migration",
    price: 3000,
    required: true,
    details: [
      "Environment setup for 1 legal entity",
      "User roles & permissions for up to 10 profiles",
      "General Ledger & Dimensions configuration",
      "Accounts Payable & Receivable setup",
      "3 bank accounts with manual reconciliations",
      "Custom layouts: 1 sales invoice & 1 cheque format",
      "Base Income Statement & Balance Sheet",
      "Data migration: Chart of Accounts, Customers, Vendors, Open Balances",
    ],
  },
  {
    id: 2,
    name: "Do You Need Advanced Finance Setup?",
    price: 1500,
    details: [
      "For 1 to 3 Companies:",
      "Intercompany transaction setup",
      "1 financial consolidation",
      "Shared Chart of Accounts and Dimensions",

      "For 4 to 6 Companies:",
      "Intercompany transaction setup across multiple entities",
      "2 financial consolidations",
      "Unified Chart of Accounts and Dimensions",

      "For 7+ Companies:",
      "Let’s tailor a solution to fit your needs. Contact us to discuss further.",
    ],
  },
  {
    id: 3,
    name: "Do You Need Multicurrency Setup?",
    price: 800,
    details: [
      "Multicurrency configuration",
      "1 additional manual bank reconciliation (not eBank Rec)",
      "1 additional bank account setup",
      "Support for up to 10 currencies",
      "Automated currency exchange rate downloads",
    ],
  },
  {
    id: 4,
    name: "Is Advanced Banking Setup Right for You?",
    price: 1200,
    details: [
      "EFT/ACH configuration for Accounts Payable",
      "80-byte file format setup",
      "eBank Reconciliation setup",
      "Note: Microsoft Exchange Online is required for email remittances; SMTP settings are not supported.",
    ],
  },
  {
    id: 5,
    name: "Looking to Streamline Your Sales Process?",
    price: 1000,
    details: [
      "Sales Order Processing (SOP) setup",
      "Configuration for Quotes, Orders, and Returns",
      "Standard report setup for Sales Quote, Sales Order, and Sales Return Order reports",
    ],
  },
  {
    id: 6,
    name: "Need an Efficient Purchasing Setup?",
    price: 900,
    details: [
      "Purchase Order Processing (POP) for Quotes, Orders, and Returns",
      "Standard report setup for Purchase Quote, Purchase Order Confirmation, and Purchase Return Order reports",
      "Setup of 1 purchase workflow with 2 levels of hierarchy",
      "Documentation and training to configure advanced workflow approval matrices",
      "Have complex workflow needs? Let’s discuss your requirements.",
    ],
  },
  {
    id: 7,
    name: "Do You Need Inventory Setup?",
    price: 1100,
    details: [
      "Inventory module configuration",
      "Unit of Measures setup",
      "Support for up to 5 locations",
      "Import of items and open balances",
      "Cycle counting configuration",
      "Landed cost setup",
    ],
  },
  {
    id: 8,
    name: "Is Advanced Inventory Setup What You Need?",
    price: 1300,
    details: [
      "Serialized tracing and lot tracking",
      "Item price level setup",
      "Bin configuration by location",
      "Import of open serial/lot balances",
      "Item substitution setup and data import",
    ],
  },
  {
    id: 9,
    name: "Do You Need Assembly Setup for Your Operations?",
    price: 1000,
    details: [
      "Configuration of Assembly BOMs (Bill of Materials)",
      "Setup for Assembly Orders",
    ],
  },
];

export default function ERPCalculatorPage() {
  const [selected, setSelected] = useState<Record<number, boolean>>(() => {
    const init: Record<number, boolean> = {};
    options.forEach((o) => (init[o.id] = !!o.required));
    return init;
  });

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [showTotal, setShowTotal] = useState(false);

  const toggleOption = (id: number) => {
    const item = options.find((o) => o.id === id);
    if (!item || item.required) return;

    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleDetails = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // ✅ total calculation
  const total = options
    .filter((o) => selected[o.id])
    .reduce((sum, o) => sum + o.price, 0);

  return (
    <PageLayout>
      {/* HEADER */}
      <div className="bg-white py-14 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          Dynamics 365 ERP Implementation Price Calculator
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Easily create your customised fixed price package by simply selecting the capabilities you want in Dynamics 365 ERP.
        </p>

      </div>

      {/* CALCULATOR GRID */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-2 bg-gray-200 p-4 font-semibold">
          <div>Capabilities</div>
          <div className="text-right">Select Options</div>
        </div>

        {options.map((o) => (
          <div key={o.id} className="border-b p-5">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  {o.name} {o.required && "(Required) *"}
                </h3>
                <button
                  onClick={() => toggleDetails(o.id)}
                  style={{ color: PURPLE }}
                  className="text-sm mt-1 font-medium"
                >
                  {expanded[o.id] ? "See Less" : "See More"}
                </button>
              </div>

              <button
                onClick={() => toggleOption(o.id)}
                className="w-20 h-9 rounded-full flex items-center px-1 transition"
                style={{
                  backgroundColor: selected[o.id] ? PURPLE : "#9CA3AF",
                  opacity: o.required ? 0.6 : 1,
                }}
              >
                <div
                  className={`bg-white w-7 h-7 rounded-full shadow-md transform transition ${selected[o.id] ? "translate-x-10" : ""
                    }`}
                />
              </button>
            </div>

            {expanded[o.id] && (
              <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-1">
                {o.details.map((d, i) => {
                  const boldLines = [
                    "For 1 to 3 Companies:",
                    "For 4 to 6 Companies:",
                    "For 7+ Companies:",
                  ];
                  const isBold = boldLines.includes(d);
                  return (
                    <li
                      key={i}
                      className={isBold ? "font-bold text-black" : ""}
                    >
                      {d}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}

        {/* SEND ESTIMATE BUTTON */}
        <div className="text-center mt-10">
          {/* Show estimated cost above the button */}
          {showTotal && (
            <div className="mb-4 text-3xl font-bold" style={{ color: PURPLE }}>
              Estimated Cost: £{total.toLocaleString()}
            </div>
          )}

          <button
            onClick={() => setShowTotal(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-semibold"
          >
            Send My Estimate
          </button>
        </div>

        {/* NEW SECTION 1 */}
        <div className="mt-20 text-center max-w-4xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-6">
            ERP Implementation Cost Calculator Tool
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Save Time, Get Accurate ERP Pricing
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            One of the biggest concerns of the businesses is to identify the exact cost of ERP implementation.
            Because it empowers businesses to optimise their finances, get a transparent view of ERP adaptation,
            and get a rough estimation of overall cost.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            If you are also keen to know the precise cost of an ERP solution so that you can calculate ROI
            and value over long-term investment, Dynamics Square brings you a perfectly built ERP implementation
            cost calculator tool.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This tool brings you precise data of the cost that is backed by different factors, like software cost,
            number of users, kind of licenses, type of deployment, training cost, and maintenance costs.
            To obtain an accurate estimate, utilize the tool above and provide simple answers related to your unique business.
          </p>
        </div>

        {/* NEW SECTION 2 */}
        <div className="mt-20 text-center max-w-4xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-6">
            Benefits of the ERP Pricing Calculator
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The basics of our ERP ROI calculator are simple. This tool considers the costs of different parameters that come under an ERP implementation and shows you the complete cost implementation. Such parameters are:
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>ERP Pricing Calculator = </strong>
            software cost + deployment cost (cloud/on-premises) + customisation cost + number of users + types of license fees + integration cost + software training cost + post implementation support cost.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These are the background factors when it comes to calculating the price of an ERP implementation. In case you are not aware of any of these factors, the actual cost of implementation can be determined with the help of certified ERP consultants. You can contact us, discuss your business, and get the cost in no time.
          </p>
        </div>


      </div>

      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16  overflow-hidden">

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Start Your ERP Implementation Project Now with Our Implementation Cost Calculator
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
            Our ERP Implementation Cost Calculator makes the investment of ERP projects simpler by offering accurate cost
            assessments. Take control of your ERP project budget today—use our calculator to plan a successful implementation
            journey towards increased efficiency and productivity!
          </p>

        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the most asked questions that businesses ask us during the process of identifying the ERP implementation cost.
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
