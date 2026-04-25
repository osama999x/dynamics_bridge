'use client';

import PageLayout from '@/app/components/PageLayout';


export default function HealthcarePage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Dyanamics 365<br />for Healthcare
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Streamline your entire clinical operations and enhance<br /> the patient
                                experience while opting Microsoft cloud for <br />Healthcare Industry
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Schedule Free Health Care
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/industries/Dynamics-365-for-Healthcare.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    {/* 🔽 CENTERED CONTENT (UPDATED) */}
                    <div className="mt-24 flex justify-center">
                        <div className="max-w-4xl text-center">

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                                Dynamics 365 for Healthcare; a Powerful Clinic Management Solution
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Following the COVID-19 pandemic, healthcare has become one of the most volatile
                                industries, requiring total reformation to deal with current situations. We have
                                faced a lot of challenges during this tough time, witnessed the collapse of global
                                healthcare, and found various flows in our existing systems, which we used to believe
                                were complete and successful. This industry needs a digital transformation to smooth
                                the global supply chain, track drug manufacturing and distribution, ensure the
                                availability of medical equipment, track patient health, and much more. Implementing
                                the right ERPs (enterprise resource planning) and CRMs (customer relationship management)
                                can revolutionise the ways a business operates its processes.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dynamics 365 for the healthcare industry holds the power to become a boon in the
                                era of technology and AI. Microsoft cloud for healthcare is so powerful that it
                                can manage a company's finances while also running complex global supply chain
                                operations. Before getting into more depth, let's get a sound knowledge of Microsoft
                                Dynamics 365.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                        Dynamics 365 for Healthcare accelerator
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                        Identify your current system performance and upgrading needs with Dynamics 365 for Healthcare.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Book a Free Healthcare
                    </a>

                </div>
            </section>

            {/* NEW PARTNER SECTION */}
            <section className="py-20 bg-gray-50">
                {/* 🔽 CENTERED CONTENT (UPDATED) */}
                <div className="mt-24 flex justify-center">
                    <div className="max-w-4xl text-center">

                        <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                            What is the need of Dynamics 365 <br />for healthcare?
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            We are going through an era where building foolproof healthcare systems must be the priority.
                            In the past few years, we have witnessed the loss of millions of lives due to various reasons,
                            and among them, the global healthcare system is the major one. There can be various suitable and
                            effective solutions to improve the existing healthcare system across various verticals among which
                            Dynamics 365 for healtchare is the popular one. When we think about it in a technical way,
                            implementing Dynamics 365 for healthcare accelerator can streamline and connect the operations
                            of the entire system while leveraging the power of automation.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Dynamic 365 for healthcare industry is the right solution to manage the administrative processes
                            of a business while also offering a comprehensive and clinical treatment system. It offers flawless
                            features, including an interactive patient experience, medical records tracking, patient data management,
                            patient communication management, and centralised clinical data. Such features allow the healthcare business
                            to offer
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
                            <img
                                src="/industries/Dynamics-365-for-Health-care-side.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[480px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>

                            <ul className="text-black text-lg mb-4 list-disc pl-5 space-y-2 leading-7">
                                <li>Smooth patient journey</li>
                                <li>Fetching previous medical records</li>
                                <li>Building patient profiles with medical history</li>
                                <li>Assisting in patient care</li>
                                <li>Make data-based decisions in real-time</li>
                                <li>Registration, appointments, and diagnostic management</li>
                                <li>Invoicing and payment management</li>
                                <li>Collecting patient data for CRM</li>
                                <li>Modernize daily clinical operations</li>
                                <li>Better financial management</li>
                                <li>Personalized patient care</li>
                                <li>Engaging the patient journey and experience</li>
                            </ul>

                        </div>


                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
    {/* Heading & Intro */}
    <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-black mb-4">
            Microsoft Cloud for Healthcare; Top Benefits You Should Checkout
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
            Microsoft D365 Cloud for Healthcare is one of the top patient engagement
            hospital solutions that offers seamless features and a smooth business
            experience with a patient-centric approach. Using AI and analytics data,
            it provides excellent patient satisfaction and resolves most clinical
            issues while optimising results for better outcomes. It offers more
            benefits too, like:
        </p>
    </div>

    {/* Content Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    Improve Patient Engagement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Dynamics 365 provides great capabilities for all businesses,
                    resulting in personalised and engaging patient experiences.
                    It allows real-time communication with staff for instant issue
                    resolution related to finances or doctor availability.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    Get Patient Insights
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    With cloud deployment, healthcare organisations can collaborate,
                    share, and track patient data in real-time. It delivers true
                    insights that help management make informed decisions and improve
                    healthcare efficiency.
                </p>
            </div>
             <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    Automate Operations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Microsoft Dynamics 365 for Healthcare automates repetitive and
                    manual tasks, ensuring smooth data flow across systems and
                    boosting productivity for clinical staff.
                </p>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    Encourage Clinical Staff Collaboration
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    It enables clinical teams to utilise shared data and collaborate
                    efficiently, helping them design flexible treatment plans and
                    deliver better patient care.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    Examine Previous Records
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Access to previous medical records allows doctors to understand
                    patient history and existing conditions, enabling more accurate
                    and sustainable treatment decisions.
                </p>
            </div>
        </div>
    </div>
</section>

<section className="py-16 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
            Conclusion
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
            As per the market reports, implementing Dynamics 365 in the healthcare
            industry has enhanced operational efficiency by 40%, resulting in a
            25% increase in ROI. No doubt, it is a powerful solution that helps
            healthcare organisations improve patient care, streamline operations,
            and drive business growth. Its ability to integrate with other native
            and third-party systems, like EHRs (electronic health records), is
            remarkable. This allows healthcare providers to access patient
            information in real-time, reducing the risk of errors and improving
            patient care. It also includes a range of security and compliance
            features for the protection of patient data.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Overall, Microsoft Dynamics 365 for Healthcare is an excellent solution
            for organisations looking to improve the patient journey, simplify
            existing operations, and accelerate business growth.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
            Perhaps it is time to implement Dynamics 365 for Healthcare in your
            organisation to simplify operations, increase revenue, and focus more
            on business growth rather than day-to-day challenges. For Dynamics 365
            pricing and Microsoft Cloud for Healthcare licensing, contact Dynamic
            Square, the UK's Microsoft Certified Gold Partner. You can email us at
            <span className="font-medium text-black"> info@dynamicssquare.co.uk </span>
            or call us at
            <span className="font-medium text-black"> 0207-193-2502 </span>
            for immediate assistance.
        </p>
    </div>
</section>



        </PageLayout>
    );
}
