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
    question: "What is Dynamics GP?",
    answer:
      "Dynamics GP is a Microsoft ERP solution designed to manage financials, operations, and business processes for small and medium-sized businesses."
  },
  {
    question: "Is there a need for a new licence while updating?",
    answer:
      "Typically, an upgrade to a newer version of Dynamics GP may require updated licensing depending on your current license type and number of users."
  },
  {
    question: "How was Dynamics GP built?",
    answer:
      "Dynamics GP was developed as a comprehensive ERP solution for businesses, focusing on financial management, reporting, and operational efficiency, with integration capabilities across Microsoft products."
  },
  {
    question: "How do I upgrade Dynamics GP 2015 or a previous version to the latest version?",
    answer:
      "Upgrading involves planning, database backup, applying the update via Microsoft tools, testing in a sandbox environment, and finally deploying to production. Certified Microsoft partners can assist for smooth migration."
  },
  {
    question: "What does Dynamics GP offer?",
    answer:
      "Dynamics GP offers financial management, human resources, payroll, inventory, project accounting, reporting, and business intelligence, along with tools for sales and customer service management."
  },
  {
    question: "Who are the users of Dynamics GP?",
    answer:
      "The users include small and medium-sized businesses across industries such as manufacturing, retail, services, and distribution who need robust ERP and accounting solutions."
  },
  {
    question: "What are some benefits of Dynamics GP?",
    answer:
      "Benefits include streamlined financial operations, improved decision-making with BI tools, better inventory control, automation of sales and HR processes, and scalable business growth."
  },
  {
    question: "Does Dynamics GP offer integration options?",
    answer:
      "Yes, Dynamics GP integrates seamlessly with Microsoft 365, Power BI, Power Automate, and other third-party applications to streamline workflows and reporting."
  },
  {
    question: "What are the latest Dynamics GP versions?",
    answer:
      "The latest versions include Dynamics GP 2018 and Dynamics GP 2021, each offering modernized features, improved security, and enhanced functionality for enterprise management."
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





export default function DynamicsGPPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Microsoft <br />Dynamics GP
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Streamline your business, avail automation, get a transparent business view, simplify
                                different operations, and integrate desired applications by implementing Dynamics GP (Great Plains).
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
                                src="/solutions/gpbanner.avif"
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
                            What Is Microsoft Dynamics GP (Great Plains)?
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Microsoft Dynamics GP is a standalone ERP solution specifically built for mid-market companies. Some
                            businesses also consider Great Plains as accounting software, but it can streamline all core business
                            operations. You can deploy the servers in the cloud or on-premises based on business requirements. It
                            offers robust features to manage different departments of the business, including finance, inventory,
                            supply chain, manufacturing, operations, and human resources. Due to its flexible customization and
                            integration options, you can implement GP in any business or industry. Such industries include hospitality,
                            retail, automotive, oil & Gas, non-profit, and more. Whether you are an existing brand or a growing
                            organisation, Microsoft GP is perfect for you.
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Microsoft Dynamics GP Features
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Dynamics GP is loaded with some exclusive features that make it absolutely perfect for your enterprise.
                        </p>
                    </div>

                    {/* POINTS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* LEFT POINTS */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Financial Management</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Dynamics GP aids in financial accounting, banking, budgeting, and managing cash flow efficiently with analytics and security.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Business Intelligence</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Pre-built dashboard reports provide instant insights, enabling intelligent and efficient decision-making for your organization.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Inventory Management</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Keep track of returns, orders, and stock efficiently to meet customer requirements while maintaining profit and reputation.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT POINTS */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Sales and Service</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Automate sales processes and enhance customer service while managing invoicing and minimizing operational costs.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">Project Management</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Track project finances and integrate accounts receivable and inventory to ensure accurate billing and reporting.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">HR/Payroll Management</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Optimize employee management with reporting and customized queries for better insight and service.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                        Stuck with the limited capabilities of Dynamics GP 2018 or GP 2021?
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                        Upgrade your system today and avail yourself of advanced features to supercharge your business with enhanced tools, features, and capabilities.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Upgrade Now!
                    </a>

                </div>

            </section>

            {/* ROW 1 – Image Left | Text Right */}
            <section className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT IMAGE */}
                    <div>
                        <img
                            src="/solutions/gp-newimga.avif"
                            alt="Dynamics 365 for Sales"
                            className="w-full rounded-2xl "
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div>
                        <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
                            Try Dynamics GP for Free!
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            No doubt, Dynamics GP is a powerful solution, but is it perfect for your business needs? Trying the system before investing is always a great idea. This helps you understand whether you are choosing the right resource for your business. You can avail a Dynamics GP demo from Dynamics Square, one of the UK’s leading Dynamics GP support partners, to explore its functionality, features, and tools.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            The demo of Dynamics GP is absolutely free, regardless of your industry. It will give you insights into the capabilities of Microsoft GP and how it aligns with businesses. Once satisfied, you can implement Dynamics GP confidently for your enterprise.
                        </p>
                    </div>
                </div>
            </section>
            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                        Get the Dynamics GP Demo for free!
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                        Check out the tools, features, and efficiency of Dynamics GP with a free demo from Microsoft-certified Dynamics GP experts.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Book a Free Dynamics GP Demo
                    </a>

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
                                src="/solutions/gp-newimga (1).avif"
                                alt="Dynamics 365 for Sales"
                                className="w-full rounded-2xl "
                            />
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
                              Has Microsoft ended Dynamics GP Support for all Versions?
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                               Yes, Microsoft has ended the mainstream support of Dynamics GP 2013, 2015, 2016, and 2018 running on a fixed lifecycle policy, or you can also consider it the end of the life of Dynamics GP. It means these versions will not get any kind of updates, upgrades, bug fixes, or patches from Microsoft. However, you can still avail of extended support for Dynamics GP 2015, 2016, and 2018, and Microsoft will continue to release security updates on time until the end of extended support.
                               The latest version (Dynamics GP 18.) is available under modern lifecycle policy, which means Microsoft will continue to release GP updates, upgrades, patches, and more automatically until Microsoft rolls out new information. 
                            </p>

                            
                        </div>
                    </div>

                    {/* ROW 2 – Text Left | Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
                               My Dynamics GP Support has ended - What Should I Do?
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                               If so, it's high time you need to make a smart decision for your business. Because you must provide all necessary resources to empower your business to grow, irrespective of its complexity. Based on your GP version, you have two choices. Either you upgrade your system to the latest Dynamics GP version or you upgrade to Business Central. 
                               Based on our analysis and market research, we have found that upgrading Dynamics GP to Business Central is a better and more cost-effective decision. Because, sooner or later, the support of all Dynamics GP versions will end, and you need to eventually upgrade to a modern ERP solution. If you have to upgrade tomorrow, why not consider upgrading today? It will save a lot of essential resources for your business that can be utilised for business growth rather than investing in upgrading to the latest version of GP. 
                            </p>

                           
                        </div>

                        <div>
                            <img
                                src="/solutions/gp-upgrade-1024x630.avif"
                                alt="Dynamics 365 Customer Service"
                                className="w-full rounded-2xl "
                            />
                        </div>
                    </div>

                    {/* ROW 3 – Text Left | Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
                                Microsoft Dynamics GP Upgrade
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dynamics Square is a Microsoft Dynamics GP 2023 Expert.
         There are a number of organisations that have been using Dynamics GP for a long time now with different versions, like 2013, 2015, 2016, or 2018. The latest update of Dynamics GP version 18.6 (Dynamics GP 2025) offers exceptional features and functions. These features include more fields in the payable transaction workflow, new workflows for different processes, and more. These added functionalities will help your organisation run smoothly. 
        Getting the upgrade to Microsoft Dynamics GP 18.6 will offer you new features over your existing package that will make your operations even more powerful than before. These features will streamline complex operations in different areas such as finances, human resources, inventory management, and many others. 
       You can get a hands-on Dynamics GP trial to understand the latest features and tools and identify whether this is a perfect ERP solution or not based on your business needs. As per Microsoft Dynamics policy, you can avail yourself of a trial of any Dynamics solution for a month to test the solution's reliability. 
       After you have checked out the functioning of the tool for a month, you can proceed further to find the Microsoft Dynamics GP cost and the prices of different licences. 
                            </p>

                        </div>

                        <div>
                            <img
                                src="/solutions/gp-upgrade-1024x630 (1).avif"
                                alt="Dynamics 365 Customer Insights Journeys"
                                className="w-full rounded-2xl "
                            />
                        </div>
                    </div>

                    {/* ROW 4 – Image Left | Text Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/solutions/gp-support-1024x630.avif"
                                alt="Dynamics 365 Field Service"
                                className="w-full rounded-2xl "
                            />
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold text-[#1F2A44] mb-4">
                               Get Dynamics GP Support - Cost Effective and Productive
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Get Dynamics GP support from our dedicated team of Microsoft-certified Great Plains software experts. 
                        Microsoft is known for its brand name and its reliability. Hence, when you are investing your hard-earned money in Dynamics GP, you can surely expect some excellent results according to your requirements. But a technical glitch can happen even with the best options available. But you do not have to worry much, as we offer you the best, most reliable, and most trustworthy Dynamics GP support for all versions. 
                        Our support team ensures to offer a huge list of services such as consulting, licencing, upgrading your older version, implementation, integration, customization, and others. 
                        Regardless of your query, our expert Dynamics consultants will resolve it in no time so that your business can continue to grow. Also, if you are having issues, you can get Microsoft Dynamics GP training to get a deep understanding of this powerful Microsoft ERP solution. 
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
                            Have you got<br /> questions about Microsoft Dynamics GP?
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
