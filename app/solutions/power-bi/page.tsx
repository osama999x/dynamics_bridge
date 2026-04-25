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
  question: "What is Power BI?",
  answer: "Power BI is a business analytics solution by Microsoft that enables organizations to visualize data, create interactive reports and dashboards, and share insights across teams to support data-driven decision making."
},
{
  question: "Does Power BI produce paginated reports?",
  answer: "Yes, Power BI supports paginated reports, which are pixel-perfect, printable reports ideal for invoices, statements, and operational reporting. These are available with Power BI Premium or Power BI Report Server."
},
{
  question: "Can I use Power BI for budgeting and forecasting?",
  answer: "Power BI can be used for budgeting and forecasting by integrating with Excel models, financial systems, and planning tools. It allows organizations to analyze trends, compare actuals vs forecasts, and visualize financial performance in real time."
},
{
  question: "How is Power BI different from traditional BI implementations?",
  answer: "Unlike traditional BI tools, Power BI offers faster deployment, cloud-based accessibility, real-time data updates, self-service analytics, and seamless integration with Microsoft and third-party applications at a lower total cost."
},
{
  question: "What is Power BI Report Server? Does it support on-premises systems?",
  answer: "Power BI Report Server is an on-premises report server that allows organizations to host and manage Power BI reports behind their firewall. It is ideal for businesses that require local data storage or have regulatory compliance needs."
},
{
  question: "How is Power BI licensed? How much does Power BI Premium cost?",
  answer: "Power BI is available under multiple licensing options including Free, Pro, and Premium. Power BI Pro is licensed per user, while Power BI Premium offers capacity-based pricing for enterprise-scale deployments."
},
{
  question: "What if I need more functionality or want to scale?",
  answer: "Power BI is highly scalable and can be extended with advanced analytics, AI features, custom visuals, embedded analytics, and integration with Azure services, allowing organizations to grow and adapt as their reporting needs evolve."
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





export default function PowerBiPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Microsoft Power BI
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Our Power BI experts help to transform your data into actionable insights. Get customised Power BI plans to bring
                                more scalability and flexibility to your business. Talk to our Power BI consultant today.
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/solutions/Power-BI-1024x586.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* PARTNER HIGHLIGHT SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
                        Get Microsoft Power BI Consulting Services
                    </h2>

                    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
                        With our dedicated Power BI consulting services you can transform and strengthen your data into actionable
                        insights. With Microsoft Power BI solution, you can visualize data, create immersive reports and can share
                        the same across their organization to strengthen everyone with productive decision-making capabilities.
                    </p>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 1 */}
                            <details
                                open
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Power-BI-Desktop.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Power BI Desktop
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Leveraging Power BI Desktop, connect all your data sources, create data models, and finally
                                    prepare interactive visuals and key analytics to make smarter decisions with instant efficiency.
                                </p>
                            </details>

                            {/* ITEM 2 */}
                            <details
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Power-Bi-Service.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Power BI Service
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Streamline your data visualization and key analytics across your business channels so as everyone can
                                    make effective and productive decisions fulfilling the timely need.
                                </p>
                            </details>
                        </div>



                        {/* RIGHT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 3 */}
                            <details
                                open
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/Power-Bi-Mobile.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Power BI Mobile
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Stay connected to your data with mobile intelligence. With Power BI Mobile, access, view, and leverage
                                    the Power BI reports & insights whenever and wherever required.
                                </p>
                            </details>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
                                Power BI Features & <br />Capabilities
                            </h2>
                            <p className="text-lg text-gray-600">
                                Why Choose Power BI as a Business Intelligence <br />Solution?
                            </p>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* CARD 1 */}
                            <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                                <h3 className="text-xl font-semibold group-hover:hidden">
                                    Highly Customized
                                </h3>
                                <p className="text-gray-600 hidden group-hover:block">
                                    Customized and suited to your specific business requirements. Businesses can seamlessly integrate Power BI with existing Microsoft applications or third-party tools.
                                </p>
                            </div>

                            {/* CARD 2 */}
                            <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                                <h3 className="text-xl font-semibold group-hover:hidden">
                                    Transform Your Data
                                </h3>
                                <p className="text-gray-600 hidden group-hover:block">
                                    With Power BI, create interactive visual reports and analytics, publish and share insights, and empower data-driven decision-making across your organization.
                                </p>
                            </div>

                            {/* CARD 3 */}
                            <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                                <h3 className="text-xl font-semibold group-hover:hidden">
                                    Secure & Reliable
                                </h3>
                                <p className="text-gray-600 hidden group-hover:block">
                                    Power BI is a highly secure and reliable platform that complies with global regulations, ensuring safe and controlled data sharing across regions.
                                </p>
                            </div>

                            {/* CARD 4 */}
                            <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                                <h3 className="text-xl font-semibold group-hover:hidden">
                                    Easy User Adoption
                                </h3>
                                <p className="text-gray-600 hidden group-hover:block">
                                    Built with intuitive Microsoft drag-and-drop features, Power BI enables quick adoption, easy report creation, and effortless sharing across teams.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">

                    {/* CENTER TITLE */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                        Your Trusted Power BI Partner
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                        Uplift Your Business with our Power BI Consulting Services.
                    </p>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">


                        {/* CARD 1 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/settings_b.png"
                                alt="Implementation"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                            <p className="text-gray-700 mb-6">
                                Proactively manage your sales with an improved customer experience by
                                implementing Dynamics 365 Sales.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                        {/* CARD 3 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/person_pin.png"
                                alt="Support"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Support</h3>
                            <p className="text-gray-700 mb-6">
                                Bring continuity and drive sales efficiency through Dynamics 365 Sales
                                support services.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                        {/* CARD 4 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/forum.png"
                                alt="Consulting"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Consulting</h3>
                            <p className="text-gray-700 mb-6">
                                Get optimum D365 Sales services suited to your customised business
                                needs.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                    </div>
                </div>
            </section>




            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center mb-16">
                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
                        Copilot in Power BI
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Microsoft Copilot enhances Power BI features. It enables business users and data analysts to rapidly review
                        and understand data. Acting as an intelligent assistant, real-time, AI-generated insights help to simplify
                        decision-making, automate activities, and improve reports.
                    </p>
                </div>

                {/* 2x2 ITEMS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* ITEM 1 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">Advanced Data Storytelling</h4>
                            <p className="text-gray-600 leading-relaxed">
                                By aggregating important trends, anomalies, and business patterns, Copilot turns unprocessed data into
                                gripping stories. It saves hours of laborious analysis by automatically creating reports and dashboards
                                with insightful commentary.
                            </p>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">Interactive Query Assistance</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Users can interact with Copilot using natural language to ask complex queries and receive accurate,
                                contextual insights. It eliminates the need for extensive DAX or SQL knowledge, making data analytics
                                more accessible.
                            </p>
                        </div>
                    </div>

                    {/* ITEM 3 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">Real-time Insights & Predictive Analytics</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Copilot offers forecast insights and constantly watches data patterns to enable companies to make
                                proactive decisions. Real-time updates from cloud-based artificial intelligence models guarantee
                                reliable, data-backed strategies.
                            </p>
                        </div>
                    </div>

                    {/* ITEM 4 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">Automate Report Generation</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Reduce manual effort with AI-driven report creation. Copilot automates data structuring, visualisation,
                                and summary writing, ensuring teams focus more on analysis rather than repetitive tasks.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">

                    {/* SECTION HEADING (NO BG CHANGE) */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                        Microsoft Power BI Pricing
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                        Being a trusted Power BI implementation partner, we can reveal the best-suited Power
                        Power BI pricing plans for your business to grow.
                    </p>

                    {/* PRICING CARDS */}
                    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mb-16">

                        {/* CARD 1 – Free Trial */}
                        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
                            <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
                                <h3 className="text-white font-semibold text-lg">
                                    Microsoft Power BI<br />Free Trial
                                </h3>
                            </div>

                            <p className="text-4xl font-bold text-red-600 mb-4">£0</p>

                            <p className="text-gray-600 mb-4">
                                Create rich, interactive reports that put visual analytics at your fingertips.
                            </p>

                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Included in Microsoft Fabric free account
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    No credit card required
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Upgrade to Pro or Premium to share reports
                                </li>
                            </ul>
                        </div>

                        {/* CARD 2 – Power BI Pro */}
                        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
                            <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
                                <h3 className="text-white font-semibold text-lg">
                                    Power BI<br />Pro
                                </h3>
                            </div>

                            <p className="text-4xl font-bold text-red-600 mb-1">£10.80</p>
                            <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>

                            <p className="text-gray-600 mb-4">
                                Access Power BI reports shared with you and publish your own for greater impact.
                            </p>

                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Publish and share Power BI reports
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Included in Microsoft 365 E5 & Office 365 E5
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Available to buy now with a credit card
                                </li>
                            </ul>
                        </div>

                        {/* CARD 3 – Power BI Premium */}
                        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
                            <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
                                <h3 className="text-white font-semibold text-lg">
                                    Power BI<br />Premium
                                </h3>
                            </div>

                            <p className="text-4xl font-bold text-red-600 mb-1">£18.50</p>
                            <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>

                            <p className="text-gray-600 mb-4">
                                License data professionals with enterprise-scale Power BI capabilities.
                            </p>

                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Includes all Power BI Pro features
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Access larger model sizes
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    More frequent data refreshes
                                </li>
                            </ul>
                        </div>

                        {/* CARD 4 – Power BI Embedded */}
                        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
                            <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
                                <h3 className="text-white font-semibold text-lg">
                                    Microsoft Power BI<br />Embedded
                                </h3>
                            </div>

                            <p className="text-4xl font-bold text-red-600 mb-4">Variable</p>

                            <p className="text-gray-600 mb-4">
                                Build customer-facing reports, dashboards, and analytics directly into your applications.
                            </p>

                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Brand Power BI reports as your own
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Automate monitoring, management, and deployment
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✔</span>
                                    Reduce developer overhead
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* CTA BUTTON */}
                    <div className="text-center">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
                        >
                            Get Power Bi Now
                            <span className="transition-transform duration-300 hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>

                </div>
            </section>



            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                       Do you want to watch Power BI in Action?
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                       Discuss your business problems with our Power BI experts, we can reveal the best-in-class
                        Power BI solution customized to your business.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Get Started Now
                    </a>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Have you got<br />questions about Power BI?
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
