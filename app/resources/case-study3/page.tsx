'use client';

import PageLayout from '@/app/components/PageLayout';

export default function CaseStudy3Page() {
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
                                Sage ERP to Microsoft Dynamics 365 Business Central
                            </h1>

                            <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg max-w-xl">
                                Resolved different operational challenges while achieving high ROI.
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
                                    For more than 25 years in the industry, the business has been helping builders' merchants grow their businesses. During this journey, they have built an extensive supply chain to find products that are not easily available on the market.
                                    Irrespective of the complexity of the order, whether urgent or irregular, the business will find and supply it before the deadline. This helps businesses grow by increasing the inquiry-to-order ratio.
                                    With good response time and an efficient supply chain, the business has 327 active branches at the moment, with a turnaround time of less than 2 hours.
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
                                "The business was running on SAGE ERP integrated with SQL BE (database) and the outdated Access FE platform to manage different departments.",
                                "The entire setup started generating complexities due to business growth and incompetent tools.",
                                "They faced inadequate data reporting and a high risk of errors because of manual data management.",
                                "Outdated tools were not suitable for handling modern business challenges.",
                                "Due to diverse operations, the business required remote access to manage, track, and control processes in real-time.",
                                "They were unable to effectively track and monitor the status of SLAs."

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
                Solution 
                Delivered
            </h2>
            <p className="mt-4 text-gray-600 text-base lg:text-lg">
                Upgraded their system from SAGE ERP to D365 Business Central.
            </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
                {
                    title: "Food & Beverage",
                    icon: "/resources/material-lightbulb-outline.svg",
                    description:
                        "The business is now able to get advanced support and hassle-free updates from Microsoft without any additional charge."
                },
                {
                    title: "Not for Profit",
                    icon: "/resources/material-lightbulb-outline.svg",
                    description:
                        "The company can now take control of all financial data including cash flow, bank reconciliations, fixed assets, budgeting, and project costing while shortening cycle times with the late payment-prediction extension."
                },
                {
                    title: "Ecommerce",
                    icon: "/resources/material-lightbulb-outline.svg",
                    description:
                        "They can access advanced procurement capabilities including vendor management, purchase order creation, inventory tracking, and overall inventory management."
                }

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
                        "The business can get real-time data analytics to enhance decision-making.",
                        "Users can avail themselves of advanced procurement capabilities.",
                        "They can now get auto-upgrades and updates installed by Microsoft without any hassle or charge.",
                        "The organization can access centralised database and remote connectivity.",
                        "Users can access automation to simplify business processes and enhance productivity."
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
