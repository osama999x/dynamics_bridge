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
  question: "What is the difference between ERP and CRM?",
  answer:
    "ERP (Enterprise Resource Planning) focuses on managing core business processes such as finance, supply chain, manufacturing, and operations, while CRM (Customer Relationship Management) is designed to manage customer interactions, sales, marketing, and customer service. ERP optimizes internal processes, whereas CRM improves customer relationships."
},
{
  question: "What is Microsoft Dynamics ERP?",
  answer:
    "Microsoft Dynamics ERP is a suite of enterprise resource planning solutions developed by Microsoft to help organizations manage finance, operations, supply chain, human resources, and business processes efficiently."
},
{
  question: "What are the major ERP solutions from Microsoft?",
  answer:
    "Major Microsoft ERP solutions include Dynamics 365 Business Central for small and medium-sized businesses and Dynamics 365 Finance and Supply Chain Management for large and enterprise-level organizations."
},
{
  question: "State some benefits of Microsoft Dynamics ERP.",
  answer:
    "Benefits of Microsoft Dynamics ERP include improved operational efficiency, real-time financial insights, scalability, seamless integration with Microsoft tools, enhanced data security, and support for data-driven decision-making."
},
{
  question: "What are the top features of Microsoft Dynamics ERP?",
  answer:
    "Top features include financial management, supply chain optimization, inventory and warehouse management, human resources and payroll, reporting and analytics, automation, and cloud-based accessibility."
},
{
  question: "What are the top industries that are actively using Microsoft Dynamics ERP?",
  answer:
    "Industries actively using Microsoft Dynamics ERP include manufacturing, retail, healthcare, finance, professional services, distribution, education, and the public sector."
},
{
  question: "How much does Microsoft ERP implementation cost, and how much time will it take?",
  answer:
    "The cost and timeline of Microsoft ERP implementation vary based on business size, solution type, customization, and complexity. Typically, implementation can range from a few weeks to several months, with costs depending on licensing, deployment model, and partner services."
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





export default function DynamicsERPPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Microsoft <br />Dynamics  ERP
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                               Simplify and Manage Your Enterprise Practices by an <br/>Integrated Microsoft Dynamics ERP Solution
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Schedule a Demo
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/solutions/ERP-banner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* NEW PARTNER SECTION */}
            <section className="py-20 bg-gray-50  ">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                           Quick Start Your Business Efficiency with<br/>Microsoft ERP System Implementation
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                           Support your end-to-end concurrent as well as futuristic enterprise practices with Microsoft Dynamics ERP.
                            Seamlessly connect people across your organization to drive efficiency and have real-time eyes into every 
                            business process. With AI-based reports and key analytics, make informed decisions with a timely effect to 
                            reinforce productivity, encourage scalability, and drive profitability.Experts at Dynamics Square can help 
                            you to build highly customized ERP solutions for enterprises seeking to support their continuously growing 
                            processes. Upgrading the Microsoft ERP system helps enterprises to trigger their operational practices by 
                            connecting and bringing processes, people, and systems together. Dynamics 365 ERP comes with built-in 
                            intelligence and adaptability for process optimization that helps brands to innovate, drive, and scale.
                        </p>
                    </div>

                </div>
            </section>

              {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">


                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                       Effectively manage, track, and review your Financials, Supply Chain & Operations, E-commerce, Manufacturing,
                        Projects, and Human Resources.
                    </p>

                </div>

            </section>

              {/* PARTNER HIGHLIGHT SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
                       How to Drive Effective Approach Through<br/>Microsoft Dynamics ERP?
                    </h2>
                     <p className="text-gray-600 text-center leading-relaxed">
                          Microsoft ERP is designed to manage your core business functions by bridging the gap between your system, 
                          workforce, and customers. It helps to seamlessly connect your departments and enable your workforce to 
                          rapidly adapt to the changes supporting your business pillars to drive smarter and efficiently. Here are
                           key business practices it involves:
                        </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                      

                            {/* LEFT ACCORDION */}
                            <div className="space-y-4">

                                {/* ITEM 1 */}
                                <details open className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons-commerce.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                               Commerce
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Microsoft Dynamics ERP helps e-commerce owners to drive omnichannel experience by unifying 
                                        back-office, in-store, and digital happening altogether. With ERP implementation, you allow 
                                        your customers to enjoy a seamless experience. Its AI capabilities help to serve personalized 
                                        delivery while improving employee productivity and eliminating redundancies to support overall
                                         business growth.
                                    </p>
                                </details>

                                {/* ITEM 2 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons_finance-1.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                               Finance
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                       Microsoft ERP is embedded to enable simplification, accelerate profitability, and support 
                                       scalability while ensuring global compliance management. Leveraging AI-based data-driven
                                        methodologies, key reporting insights, and single-view dashboards; businesses can manage 
                                        their finance in real-time and can make healthy financial decisions supporting their 
                                        concurrent as well as futuristic growth.
                                    </p>
                                </details>

                                {/* ITEM 3 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons_HR-management-1.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                               Human Resource
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Manage end-to-end employees' data while streamlining related tasks including onboarding, payroll,
                                         and other internal happenings. With simplified data-driven practices, ERP solution helps 
                                         organizations retain their talent, track their performance, and identify issues in advance 
                                         to prevent them from taking place. Moreover, data automation eliminates manual data processing 
                                         that drives efficiency.
                                    </p>
                                </details>


                            </div>

                            {/* RIGHT ACCORDION */}
                            <div className="space-y-4">

                                {/* ITEM 4*/}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons_manufacturing-1.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                               Manufacturing
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Implementing Microsoft ERP system enables manufacturing hubs to streamline their business communication
                                         and automate their daily data practices leveraging robotic process automation. It enables manufacturing 
                                         firms to fulfill the customers' needs in a timely manner while managing real-time resources, optimizing 
                                         services, managing costs, and production planning.
                                    </p>
                                </details>

                                {/* ITEM 5*/}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons_supply-chain-1.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Supply Chain
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Stay updated with real-time stock and warehousing data with Microsoft ERP. It helps brands to 
                                        simplify and automate their supply chain pipeline to drive a cost-effective delivery model. A 
                                        single view dashboard helps to make quick decisions and IoT connected devices & data-sharing 
                                        facilitation helps to stay updated with the real-time stock-flow and actual inventory level.
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
                       Looking to implement Microsoft ERP System?
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                       Simplify and Manage Your Enterprise Practices by an Integrated Microsoft Dynamics ERP
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                       Schedule demo
                    </a>

                </div>

            </section>


           <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* ROW 1 – Image Left | Text Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <img
          src="/solutions/nav-banner (1).avif"
          alt="Dynamics GP Support"
          className="w-full rounded-2xl"
        />
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
          Dynamics NAV
        </h3>
        <p className="text-gray-600 leading-relaxed mb-2">
         Designed for small to mid-sized organizations embedded with proven domain-specific functionality and seamless navigation 
         to effectively drive finance, supply chain, manufacturing, and operations. Microsoft Dynamics NAV (Navision) enables brands 
         to make early and productive decisions based on recent AI-enabled historical data, events, or business flow.
         </p>
        <a
          href="/solutions/dynamics-nav"
          className="text-red-600 font-semibold inline-block hover:text-red-700 transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* ROW 2 – Text Left | Image Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
          Dynamics AX
        </h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          Optimize your finance & operations with Microsoft Dynamics AX (Axapta) to bring transparency across your financial
           flow. It helps enterprises to globally manage, automate, and roll out processes whether on-premises or on-cloud
            embedded with AI-based data-driven insights that help to accelerate processes and support to make informed and 
            productive decisions.
            </p>
        <a
          href="/solutions/dynamics-ax"
          className="text-red-600 font-semibold inline-block hover:text-red-700 transition"
        >
          Learn More
        </a>
      </div>

      <div>
        <img
          src="/solutions/ax.avif"
          alt="Dynamics GP Upgrade"
          className="w-full rounded-2xl"
        />
      </div>
    </div>

   {/* ROW 3 – Image Left | Text Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <img
          src="/solutions/gp.avif"
          alt="Dynamics GP Support"
          className="w-full rounded-2xl"
        />
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
          Dynamics GP
        </h3>
        <p className="text-gray-600 leading-relaxed mb-2">
         Microsoft Dynamics GP (Great Plains) is an efficient accounting and ERP package wrapped with artificial intelligence techniques
          to gain depth financial insights leveraging the recent historical data combined with the current financial flow and involved
           strategies. Designed for small to mid-sized organizations, Dynamics GP helps enterprises to streamline their finance and 
           accounting to impact overall business growth.
         </p>
        <a
          href="/solutions/dynamics-gp"
          className="text-red-600 font-semibold inline-block hover:text-red-700 transition"
        >
          Learn More
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
                            Have you got<br /> questions about Microsoft Dynamics ERP?
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
