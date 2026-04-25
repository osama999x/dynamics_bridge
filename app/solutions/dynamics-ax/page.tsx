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
    question: "What is Microsoft Dynamics AX used for?",
    answer:
      "Microsoft Dynamics AX is used to manage enterprise resource planning (ERP) functions, including finance, supply chain, production, human resources, and project management for medium to large organizations."
  },
  {
    question: "Is Microsoft Dynamics AX still available?",
    answer:
      "Microsoft Dynamics AX is no longer actively sold as a standalone product; it has been evolved into Dynamics 365 Finance and Supply Chain Management as part of the Dynamics 365 suite."
  },
  {
    question: "Is Dynamics 365 the same as AX?",
    answer:
      "Dynamics 365 is the modern cloud-based evolution of Microsoft Dynamics AX, offering similar ERP capabilities along with cloud deployment, AI features, and seamless integration with other Microsoft products."
  },
  {
    question: "Is Microsoft Dynamics AX free?",
    answer:
      "No, Microsoft Dynamics AX is not free. Licensing costs depend on deployment, number of users, and required modules or customizations."
  },
  {
    question: "What is Dynamics AX called now?",
    answer:
      "Dynamics AX has evolved and is now part of the Dynamics 365 suite, primarily under Dynamics 365 Finance and Dynamics 365 Supply Chain Management."
  },
  {
    question: "What is the difference between Microsoft Dynamics NAV and AX?",
    answer:
      "Dynamics NAV is targeted at small to medium businesses focusing on financials, inventory, and sales, whereas Dynamics AX is designed for larger enterprises with advanced needs in finance, manufacturing, and supply chain."
  },
  {
    question: "Who uses Microsoft Dynamics AX?",
    answer:
      "Dynamics AX is used by medium to large enterprises across industries such as manufacturing, retail, distribution, professional services, and public sector organizations to manage operations efficiently."
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





export default function DynamicsAXPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Microsoft <br />Dynamics AX
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                The Most Complete, Agile And Powerful ERP For The<br /> Management Of Medium And Large Companies.
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
                                src="/solutions/ax-feature1.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Heading */}
                    <div className="text-center mb-16">
                    </div>

                    {/* ROW 1 – Image Left | Text Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <img
                                src="/solutions/ax-feature1 (1).avif"
                                alt="Dynamics 365 for Sales"
                                className="w-full rounded-2xl "
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
                                What is Microsoft Dynamics AX?
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Microsoft Dynamics AX (Axapta) is a complete business management solution for medium-sized and large organizations that work with popular Microsoft software to improve staff productivity.
                                Dynamics AX has been created to make it easier to conduct business in different locations and countries.
                                Microsoft Dynamics AX consolidates and standardizes processes, improving visibility across the organization and simplifying compliance.
                                With Microsoft Dynamics AX (Axapta), you can be sure that your business management solution is, and will continue to be, relevant to the needs of your staff and to the demands of your industry and business.
                            </p>
                        </div>
                    </div>

                    {/* ROW 2 – Text Left | Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
                                Dynamics AX Features
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Microsoft Dynamics AX 2012 (formerly Axapta) is an ERP solution designed
                                for companies with financial management, operations management, and
                                human resources needs, providing specific integrated capabilities for
                                sectors such as manufacturing, distribution, services, or the public sector.
                                Therefore, if you are looking for a powerful and very flexible ERP, Microsoft
                                Dynamics AX may be your best bet.
                            </p>

                            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                                <li>It can be used on-premise as well as on cloud</li>
                                <li>It comes with a transparent pricing</li>
                                <li>Simple to understand interface for everyone</li>
                                <li>Business intelligence that is superior</li>
                                <li>Support and commitment from the brand Microsoft</li>
                            </ul>

                        </div>

                        <div>
                            <img
                                src="/solutions/ax-feature-1-1024x630.avif"
                                alt="Dynamics 365 Customer Service"
                                className="w-full rounded-2xl "
                            />
                        </div>
                    </div>


                </div>
            </section>



            {/* DYNAMICS AX CAPABILITIES SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Dynamics<br /> AX Capabilities
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Microsoft Dynamics AX (Axapta) can help you manage your by-products and collateral,<br />
                            comply with legal obligations, meet changing customer demands, and improve your <br />processes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 1 */}
                            <details open className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_financial.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Financial Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Manage budgeting, cash flow, accounts, and financial reporting with accurate and real-time insights.
                                </p>
                            </details>

                            {/* ITEM 2 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_production.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Production</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Optimize manufacturing, inventory, distribution, and logistics to increase efficiency and reduce costs.
                                </p>
                            </details>
                            {/* ITEM 3 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_supply-chain.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Supply Chain Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Warehouse management on multiple sites,
                                    Order promising,
                                    Quality management,
                                    Inventory management,
                                    Trade agreements,
                                    Planning of distribution.
                                </p>
                            </details>

                            {/* ITEM 4 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_business-intelligence.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Reporting & Business Intelligence</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Generate advanced analytics, reports, and dashboards to make data-driven decisions for your business.
                                </p>
                            </details>

                        </div>

                        {/* RIGHT ACCORDION */}
                        <div className="space-y-4">
                            {/* ITEM 5*/}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_capital-management.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Human Capital Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Manage employee lifecycle, payroll, recruitment, and performance efficiently.
                                </p>
                            </details>

                            {/* ITEM 6 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_procurment.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Sourcing & Procurement</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Streamline vendor management, purchasing, and procurement processes to reduce costs.
                                </p>
                            </details>

                            {/* ITEM 7 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_accounting.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Accounting & Project Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Handle financial accounting, budgeting, and manage projects from planning to execution.
                                </p>
                            </details>

                            {/* ITEM 8 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-ax-_sales-management.svg" alt="" className="w-8 h-8" />
                                        <h4 className="font-semibold text-[#1F2A44]">Sales Management</h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Manage your sales processes, leads, opportunities, and pipeline efficiently across teams.
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
                        Let's Talk to Our Experts
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                        It's time to connect and share with experts at Dynamics Square to reveal business solutions defining
                        your core business values and process flow.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Schedule Demo
                    </a>

                </div>
            </section>


            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Benefits Of Using <br /> Dynamics AX
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Streamline your financial operations and lead your business towards growth
                            and easy scalability while implementing Dynamics AX. Check out some of the
                            benefits to understand how it can help you achieve maximised profitability.
                        </p>
                    </div>

                    {/* CARDS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            {
                                title: "Flexibility",
                                desc: "Dynamics AX adapts to changing business requirements and scales seamlessly with your growth."
                            },
                            {
                                title: "Customization",
                                desc: "Tailor modules and workflows according to your unique business processes and industry needs."
                            },
                            {
                                title: "Integration",
                                desc: "Easily integrate with other Microsoft tools and third-party applications for a unified ecosystem."
                            },
                            {
                                title: "User Interface",
                                desc: "Enjoy an intuitive and simple interface that reduces training time and improves adoption across teams."
                            },
                            {
                                title: "Pricing",
                                desc: "Transparent pricing ensures predictable costs while providing maximum ROI for your business."
                            },
                            {
                                title: "Preferred Vendor",
                                desc: "Work with certified Microsoft partners to ensure successful implementation and ongoing support."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg p-10 min-h-[250px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl"
                            >
                                {/* HEADING */}
                                <h3 className="text-2xl font-semibold text-[#1F2A44] transition-opacity duration-300 group-hover:opacity-0">
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Dynamics AX Recent Update
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Microsoft Dynamics AX is now available with its latest update that offers a lot of extended benefits and features for the users.
                        </p>
                    </div>

                    {/* POINTS ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* POINT 1 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4 text-center">
                                Modern Interface
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                The latest interface of the tool is modern and is even simpler in looks as well as use.
                                Time and money are saved as organizations do not have to invest in training employees.
                                The interface is easy to understand, allowing quick adoption with minimal learning.
                            </p>
                        </div>

                        {/* POINT 2 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4 text-center">
                                Productivity Tools
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                Dynamics AX now integrates seamlessly with Office 365 applications, loaded with productivity tools
                                for smoother operation. The integration of Workplaces makes managing multiple apps easier and more efficient.
                            </p>
                        </div>

                        {/* POINT 3 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4 text-center">
                                Cortana Integration
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                With Cortana integration, users can perform tasks using voice commands, allowing multitasking
                                and saving time and effort. This feature enhances operational efficiency and transforms business workflows.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* FAQ SECTION */}
            <section className="py-20 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Have you got<br /> Questions About Dynamics AX?
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
