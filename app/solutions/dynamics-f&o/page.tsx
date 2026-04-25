'use client';
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
    question: "What is included in Dynamics 365 Finance and Operations?",
    answer:
      "Dynamics 365 Finance and Operations includes two core ERP solutions: Dynamics 365 Finance and Dynamics 365 Supply Chain Management. Together, they cover financial management, budgeting, accounting, procurement, inventory, manufacturing, warehousing, and supply chain optimization."
  },
  {
    question: "Do we need a minimum number of Dynamics 365 Finance & Operations licenses?",
    answer:
      "Yes, Microsoft requires a minimum of 20 user licenses to implement Dynamics 365 Finance or Supply Chain Management. This requirement applies to full user licenses such as Finance or SCM."
  },
  {
    question: "What kind of system software is Dynamics 365 for Finance and Operations?",
    answer:
      "Dynamics 365 for Finance and Operations is a cloud-based Enterprise Resource Planning (ERP) system designed to manage complex financial and operational business processes across global enterprises."
  },
  {
    question: "How much is Dynamics 365 F&O?",
    answer:
      "Dynamics 365 Finance and Supply Chain Management are priced at £161.50 per user per month, billed annually. Pricing may vary depending on licensing type, additional modules, and partner services."
  },
  {
    question: "Which are the major functions managed by Dynamics 365 Finance and Operations?",
    answer:
      "Major functions include financial management, budgeting, procurement and sourcing, inventory and warehouse management, manufacturing, supply chain planning, asset management, compliance, and reporting."
  },
  {
    question: "Is there any training available by Microsoft to learn D365 Finance and Operation?",
    answer:
      "Yes, Microsoft offers official training through Microsoft Learn, instructor-led courses, certifications, and learning paths specifically designed for Dynamics 365 Finance and Supply Chain Management."
  },
  {
    question: "What are the key features of D365 for Finance and Operation?",
    answer:
      "Key features include real-time financial insights, automation of core processes, AI-driven analytics, global compliance support, cash flow forecasting, supply chain optimization, and seamless Microsoft ecosystem integration."
  },
  {
    question: "Can I upgrade my Dynamics AX to D365 F&O?",
    answer:
      "Yes, Dynamics AX can be upgraded to Dynamics 365 Finance and Operations. Microsoft provides structured upgrade paths, tools, and best practices to ensure a smooth transition to the cloud-based ERP."
  },
  {
    question: "How do I get the trial version of D365 for F&O?",
    answer:
      "You can request a trial version of Dynamics 365 Finance and Operations through a Microsoft partner. Trial access is typically provided as a guided demo or sandbox environment rather than a self-service trial."
  },
  {
    question: "Does D365 for F&O support integrations?",
    answer:
      "Yes, Dynamics 365 F&O supports integrations with Microsoft Power Platform, Office 365, Azure services, third-party applications, and external systems using APIs and connectors."
  },
  {
    question: "What is D365 Finance and Operations used for?",
    answer:
      "Dynamics 365 Finance and Operations is used to manage enterprise-level financial and operational processes, enabling organizations to improve efficiency, reduce costs, gain real-time insights, and scale globally."
  },
  {
    question: "Does D365 for Finance and Operations fit for my organization?",
    answer:
      "D365 Finance and Operations is ideal for medium to large organizations with complex financial and operational requirements. A detailed business assessment helps determine the right licensing and modules for your needs."
  },
  {
    question: "Does D365 for F&O enable businesses to adapt to modern compliance?",
    answer:
      "Yes, Dynamics 365 F&O supports modern regulatory and compliance requirements including global tax rules, financial reporting standards, data security, audit trails, and industry-specific compliance needs."
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





export default function DynamicsFinanceandOperationsPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Dynamics 365 <br />Finance & Operations
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Implementing D365 Finance and Operations is the perfect option for large or diversified businesses that
                                need to control and streamline their finances, inventory, and supply chain operations through digital means.
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Talk to F&O Expert
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/solutions/Dynamics-365-Finance-Banner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* D365 FINANCE & OPERATIONS OVERVIEW SECTION */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-4xl font-bold text-[#1F2A44] mb-6 leading-snug">
                                What is D365 Finance & Operations?
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-base">
                                Microsoft Dynamics 365 for Finance and Operations, Enterprise edition,
                                is a powerful business application designed for enterprises to make
                                smarter decisions through real-time insights and intelligence.
                                <br /><br />
                                D365 Finance and Operations helps organizations transform by delivering
                                proven business logic and enabling them to redesign business processes
                                faster—allowing quicker time to value and continuous innovation.
                                <br /><br />
                                It provides the flexibility to scale at your own pace and empowers
                                businesses to operate nearly anywhere, anytime.
                            </p>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-8">

                            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
                                    Make Smarter Decisions
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Unifying financial and operational data delivers real-time visibility
                                    across your organization for faster and more accurate decision-making.
                                </p>
                            </div>

                            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
                                    Transform Business Faster
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Redesign and optimize business processes easily without disrupting
                                    daily operations—helping organizations stay competitive.
                                </p>
                            </div>

                            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
                                    Grow at Your Pace
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Scale and modernize your business with flexibility, enabling teams
                                    to work and operate from anywhere, anytime.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* NEW PARTNER SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
                            <img
                                src="/services/proffesionalserviceside.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[600px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                                Get started with Dynamics 365 for <br />Finance and Operations free Demo!
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                All decision-makers and business professionals want the best for their businesses, right? So,
                                before choosing a solution, getting an insightful demo is always a good option. It will let
                                you analyse the benefits of all the tools and capabilities that can help your business grow.

                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                So why not try it out and see how Dynamics 365 Finance and Operations can help your business grow?
                            </p>
                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Schedule a Demo
                            </a>
                        </div>

                    </div>
                </div>
            </section>





            {/* PARTNER HIGHLIGHT SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
                        Microsoft Dynamics 365<br />Finance and Operations Features
                    </h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        Let's Take A Closer Look At How Finance And Operations Can Help You To Take Smarter Decisions,
                        Transform Business Faster, And Grow At Your Pace.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">



                        {/* LEFT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 1 */}
                            <details open className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Budget.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Finance Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Microsoft Dynamics ERP enables organizations to manage budgets, cash flow,
                                    compliance, and financial reporting in real time. AI-driven insights and
                                    unified dashboards help businesses make informed financial decisions while
                                    ensuring accuracy, transparency, and scalability.
                                </p>
                            </details>

                            {/* ITEM 2 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Supply-chain.png" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Supply Chain Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Streamline procurement, logistics, and supplier collaboration with
                                    end-to-end supply chain visibility. Dynamics ERP helps reduce costs,
                                    optimize operations, and ensure timely delivery through automation and
                                    real-time insights.
                                </p>
                            </details>

                            {/* ITEM 3 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Stock-Management.png" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Stock Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Gain real-time control over inventory levels across multiple locations.
                                    ERP-driven stock management minimizes overstocking, prevents shortages,
                                    and improves demand forecasting for smoother operations.
                                </p>
                            </details>

                            {/* ITEM 4 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/project-management.png" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Project Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Plan, execute, and monitor projects efficiently with integrated budgeting,
                                    timelines, and resource allocation. Microsoft ERP helps ensure projects
                                    are delivered on time and within budget.
                                </p>
                            </details>

                        </div>

                        {/* RIGHT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 5 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Project.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Manufacturing</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Optimize production planning, resource utilization, and quality control
                                    through automated workflows. Dynamics ERP empowers manufacturers to reduce
                                    costs, improve efficiency, and meet customer demand effectively.
                                </p>
                            </details>

                            {/* ITEM 6 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/services.png" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Services</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Manage service operations, contracts, billing, and customer engagements
                                    seamlessly. ERP solutions help service-based businesses deliver consistent
                                    experiences while maximizing profitability.
                                </p>
                            </details>

                            {/* ITEM 7 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Asset-Management.png" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Assets Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Track, maintain, and optimize organizational assets throughout their
                                    lifecycle. Microsoft ERP ensures compliance, reduces downtime, and
                                    improves asset utilization.
                                </p>
                            </details>

                            {/* ITEM 8 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/warehouse-management.png" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Warehouse Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Improve warehouse efficiency with real-time inventory tracking, automated
                                    picking, packing, and shipping processes. ERP-powered warehouse management
                                    ensures accuracy and faster order fulfillment.
                                </p>
                            </details>

                        </div>
                    </div>

                </div>
            </section>





            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                        Get 100% process visibility and make informed decisions<br /> with Dynamics 365 Finance and Operations
                    </h1>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Sign Up for Request a Demo!
                    </a>

                </div>

            </section>

            {/* D365 WHAT'S NEW SECTION */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* CENTER HEADING */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">
                            Microsoft Dynamics 365 for Finance and Operations: What&apos;s New?
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            D365 F&O has come a long way from a simple accounting software known as IBM
                            Axapta to a powerful ERP solution as Dynamics 365 Finance and Operations.
                            But the modern ways of doing business require more capabilities to deal
                            with changing requirements and increasing global complexity.
                            <br /><br />
                            Microsoft recognises the fact and has split D365 F&O into two separate
                            applications, Dynamics 365 Finance and Dynamics 365 Supply Chain
                            Management. Nonetheless, most customers, business owners, and consultants
                            are familiar with it as a whole; Finance and Operations (D365 F&O).
                        </p>
                    </div>

                    {/* LEFT & RIGHT CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* LEFT CARD */}
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col">
                            <img
                                src="/solutions/finance-icns-1.svg"
                                alt="Dynamics 365 Finance"
                                className="w-14 h-14 mb-4"
                            />

                            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
                                Dynamics 365 Finance
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                It is an ERP solution focused on streamlining finance operations while
                                offering sufficient tools to manage other business operations as well.
                                It can increase your decision-making capabilities, predict future
                                outcomes, automate core operations, reduce operational costs, and help
                                you scale the business on a global platform.
                            </p>

                            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                                <li>Cash Management</li>
                                <li>Tax Management</li>
                                <li>Business Accounting</li>
                                <li>Financial Planning</li>
                                <li>Optimise Cash Flow</li>
                                <li>Pricing</li>
                            </ul>

                            <div className="mt-auto flex items-center justify-between">
                                <span className="font-semibold text-[#1F2A44]">
                                    £161.50 <span className="text-sm font-normal">user/month, paid yearly</span>
                                </span>

                                <a href="#" className="text-red-600 font-medium ">
                                    See More →
                                </a>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col">
                            <img
                                src="/solutions/supply-chain-icons.svg"
                                alt="Dynamics 365 Supply Chain Management"
                                className="w-14 h-14 mb-4"
                            />

                            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
                                Dynamics 365 Supply Chain Management
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                D365 Supply Chain Management is also an ERP solution built for complex
                                businesses that includes the flow of goods or services from one place
                                to another. It supports the business from purchasing the raw materials
                                to delivering the final product to the customer.
                            </p>

                            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                                <li>Procurement and Sourcing Management</li>
                                <li>Supply Chain Planning</li>
                                <li>Shop Floor Management</li>
                                <li>Order Management</li>
                                <li>Order Fulfilment</li>
                                <li>Assets Management</li>
                                <li>Pricing</li>
                            </ul>

                            <div className="mt-auto flex items-center justify-between">
                                <span className="font-semibold text-[#1F2A44]">
                                    £161.50 <span className="text-sm font-normal">user/month, paid yearly</span>
                                </span>

                                <a href="#" className="text-red-600 font-medium ">
                                    See More →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* COPILOT IN D365 FINANCE & OPERATIONS */}
            <section className="bg-[#F9FAFB] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP CENTER CONTENT */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">
                            Copilot in Microsoft Finance and Operations
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            D365 Finance is a complex yet powerful solution where Copilot simplifies
                            most of the operations. Microsoft Copilot in Dynamics 365 Finance and
                            Operations offers AI-based, comprehensive support to users so that they
                            can streamline different financial processes.
                        </p>
                    </div>

                    {/* LEFT IMAGE & RIGHT CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/solutions/f-and-o-copilote-side-pic.avif"
                                alt="Copilot in Dynamics 365 Finance and Operations"
                                className="w-[520px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT TEXT CONTENT */}
                        <div className="space-y-8">

                            <div>
                                <h4 className="text-xl font-semibold text-[#1F2A44] mb-2">
                                    Effective Communication
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Copilot eliminates the method of collecting data from different
                                    departments. It lets you summarise customer data and send
                                    personalised emails based on intentions to collect overdue payments.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-[#1F2A44] mb-2">
                                    Better Financial Health
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Copilot captures the entire customer data to find exciting trends
                                    and pending issues of financial health. It empowers the team to
                                    build consistent cash flow to enhance financial health.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-[#1F2A44] mb-2">
                                    Enhance Business Productivity
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Eliminate recurring and manual tasks with automation to enhance
                                    overall productivity. It enables users to focus on important tasks
                                    rather than being stuck with system redundancies.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-[#1F2A44] mb-2">
                                    Supports Team Collaboration
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    You can integrate other business solutions in the Microsoft Dynamics
                                    365 ecosystem to enhance performance and establish seamless
                                    collaboration between different departments.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* D365 LICENSING & PRICING SECTION */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP CENTER CONTENT */}
                    <div className="text-center max-w-5xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">
                            Dynamics 365 Finance and Operations Licensing & Pricing
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Currently, there is no pricing or licencing available for Dynamics 365
                            Finance and Operations as a whole. Because Microsoft has already
                            separated this single solution into two powerful ERPs. So, Dynamics 365
                            Finance and Dynamics 365 Supply Chain licencing are a bit different and
                            available in different terms. However, you will be required to purchase
                            at least 20 user licences to avail yourself of any of the solutions.
                            <br /><br />
                            Dynamics 365 Finance is a powerful ERP solution specifically designed to
                            monitor and supercharge complex financial processes in real-time. Based
                            on your requirements, you can access this ERP using four licencing
                            options: Team Members, Operations Activity, Finance, and Finance Premium.
                            <br /><br />
                            Dynamics 365 Supply Chain comes with asset management and intelligent
                            order management capacity and is available in three licencing options:
                            Team Members, Operations Activity, and SCM.
                        </p>
                    </div>

                    {/* LEFT IMAGE & RIGHT CONTENT */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/solutions/microosoft-partner (3).avif"
                                alt="Dynamics 365 Licensing and Pricing"
                                className="w-[520px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">
                                How Dynamics Square can be your partner of growth?
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                In the world of complex business scenarios, managing the financial and
                                operational activities of a business isn&apos;t easy at all. You will
                                need an advanced solution to deal with all issues without complicating
                                the operations. In such a scenario, Dynamics Square is available by
                                your side to help you analyse your business requirements and offer you
                                a highly personalised solution that can facilitate your business
                                growth.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                With 350+ global clients and 150+ Dynamics 365 technical consultants, we
                                offer you our consistent and reliable support to keep you going
                                regardless of the complexity. With a track record of successful
                                implementation, Dynamics Square has gained the trust of business
                                owners while transforming their businesses towards steady growth and
                                business scalability.
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-[#D9363E] mt-6 hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                            >
                                Talk to our expert
                            </a>
                        </div>


                    </div>
                </div>
            </section>

            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                        Standardize adapting to changing market fluctuations with Dynamics 365 F&O.
                    </h1>

                    <p className="text-gray-200 text-base leading-relaxed mb-6">
                        Accept market and customer requirements while offering optimum
                        satisfaction. On-board Dynamics 365 for Finance and Operations experts
                        to give your business a must needed digital transformation.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Request a Call Back
                    </a>

                </div>

            </section>





            {/* FAQ SECTION */}
            <section className="py-20 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Have you got questions about Dynamics 365<br/> Finance & Operations?
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
