'use client';

import PageLayout from '@/app/components/PageLayout';

export default function CaseStudy4Page() {
    return (
        <PageLayout>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT SIDE - TEXT */}
                        <div className="text-center lg:text-left">

                            <h3 className="text-lg text-red-600 mb-2">
                                Case Study
                            </h3>

                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Access Dimension ERP to Business Central Upgrade
                            </h1>

                            <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg max-w-xl">
                                Simplified the processes of calculating cost and predicting profit margins.
                            </p>

                        </div>

                        {/* RIGHT SIDE - IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/resources/business-central-implementation-banner-1.svg"
                                alt="Microsoft Dynamics 365 Business Central"
                                className="w-full max-w-md lg:max-w-lg rounded-2xl"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* BIG CENTER CARD */}
            <section className="pb-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="bg-gray-100 rounded-3xl shadow-lg px-8 lg:px-16 py-12">

                        <div className="grid lg:grid-cols-3 gap-8 items-start">

                            {/* SMALL IMAGE - LEFT */}
                            <div className="flex justify-center lg:justify-start">
                                <img
                                    src="/resources/casestudy-pic.png"
                                    alt="Business Growth"
                                    className="w-38 lg:w-40 rounded-xl "
                                />
                            </div>

                            {/* TEXT - RIGHT */}
                            <div className="lg:col-span-2">

                                <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-6">
                                    The business is a leading car restoration and customization company in the UK, specializing in classic Lancia vehicles. They also offer spare parts for classic and antique cars, with a vast inventory of over 11,000 parts available for global delivery. 
                                    With their exceptional services, they have built a client base spanning over 70 countries. Their fully equipped workshop provides partial and full restorations, along with modifications such as trim, bodywork, engine enhancements, gearbox rebuilds, performance upgrades, and servicing.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* BUSINESS CHALLENGES SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP CENTER HEADING */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                            What are The <br className="hidden lg:block" />
                            Business Challenges
                        </h2>
                    </div>

                    {/* CONTENT GRID */}
                    <div className="grid lg:grid-cols-2 gap-14 items-start">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/resources/cast-stu-pic.avif"
                                alt="Business Challenges"
                                className="rounded-2xl  max-w-lg w-full h-auto object-cover"
                            />
                        </div>

                        {/* RIGHT TEXT POINTS */}
                        <ul className="space-y-6 list-disc pl-6 marker:text-black-600 marker:text-xl">

                            {[
                                "The business was using a conventional on-premises ERP solution called Access Dimension that offers limited functionality for financial management.",
                                "It was unable to align with the purpose of managing the growing operations of the business.",
                                "The business was not able to manage different projects, track inventory, predict profit margins on each project, and calculate costs.",
                                "The business was facing continuous errors and glitches while relying on manual data entry using Excel sheets."
                            ].map((point, index) => (
                                <li key={index} className="text-gray-700 leading-relaxed text-base lg:text-lg">
                                    {point}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </section>

            {/* SOLUTION DELIVERED SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP CENTER HEADING */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                            Solution Delivered
                        </h2>
                        <p className="mt-4 text-gray-600 text-base lg:text-lg">
                            Upgraded their system from Access Dimension ERP to Dynamics 365 Business Central
                        </p>
                    </div>

                    {/* CARDS GRID */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Food & Beverage",
                                icon: "/resources/material-lightbulb-outline.svg",
                                description:
                                    "Our team has facilitated the global connectivity for the business, leading to a 2X increase in team collaboration."
                            },
                            {
                                title: "Not for Profit",
                                icon: "/resources/material-lightbulb-outline.svg",
                                description:
                                    "We added a project management module to track all projects, providing a 100% transparent view of costs, time, parts, and profits."
                            },
                            {
                                title: "Ecommerce",
                                icon: "/resources/material-lightbulb-outline.svg",
                                description:
                                    "The inventory management module allowed the business to manage even the minutest details of their spare parts inventory, resulting in 100% resource utilization."
                            },
                           
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
                            >
                                <div className="mb-6">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}

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
                            Consult To Reveal Best Approach
                        </h1>

                        <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
                            Connect with us to facilitate your system to drive a parallel approach in the market
                            you deal with. We help enterprises to implement their unique needs.
                        </p>

                        <a
                            href="/contact-us"
                            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                        >
                            Schedule a Demo
                        </a>
                    </div>

                </div>
            </section>

            {/* WHAT THE BUSINESS NEEDED SECTION - UPDATED WITH BENEFITS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* CONTENT GRID */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT TEXT CONTENT */}
                        <div>
                            <div className="space-y-6">

                                {/* Benefits Points */}
                                {[
                                    "With Business Central, the business can now track, feed, and share inventory data in real-time, ensuring better control over stock levels.",
                                    "By creating and sharing invoices directly with customers while tracking all costs, the company has streamlined the invoicing process and improved transparency and reliability.",
                                    "The company can now effectively monitor their finances, including assets, liabilities, liquidity, budget, and cash flow.",
                                    "Based on their evolving requirements, the business can now manage customer communication and enhance the overall customer experience."
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-4">

                                        {/* RED ARROW WITH WHITE CIRCLE */}
                                        <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                                            <span className="text-red-600 text-lg font-bold">
                                                →
                                            </span>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/resources/Group1435.avif"
                                alt="Business Benefits"
                                className="rounded-2xl max-w-lg w-full h-auto object-cover"
                            />
                        </div>

                    </div>

                </div>
            </section>

        </PageLayout>
    );
}