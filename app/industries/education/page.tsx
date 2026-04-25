'use client';
import ExploreIndustriesSlider from "@/app/components/ExploreIndustriesSlider";

import PageLayout from '@/app/components/PageLayout';

export default function EducationPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Dynamics 365 <br />For Education
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Effectively manage your students, staff, and stakeholders for the overall growth of
                                the institution by implementing Microsoft Dynamics 365 for Education.
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
                                src="/industries/dynamics-365-for-education.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    {/* 🔽 CENTERED CONTENT (UPDATED) */}
                    <div className="mt-24 flex justify-center">
                        <div className="max-w-4xl text-center">

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                                Why you Should Implement Dynamics 365 Education<br />in Your Institution?
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dynamics 365 for Education is a ERP + CRM solution that centralises the data of all
                                students and streamlines communication while providing real-time insights. You can
                                not only manage students' data but also the data related to programme curriculum
                                and stakeholders. Based on AI and ML technologies, it is capable to maintaining
                                relationships with students, simplifying most of the existing processes,
                                optimising the use of resources, and much more.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            {/* DYNAMICS 365 TRAINING TYPES SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">

                    {/* Left Side Description */}
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A44] mb-4">
                            How Dynamics 365 for Education is the Best CRM + ERP for Education Industry?
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Microsoft Dynamics for Education offers powerful capabilities with a simplified user
                            interface to enable all levels of users to properly utilise it. With Dynamics 365 for
                            higher education, you can optimise the student journey, enhance staff engagement,
                            maximise institution efficiency, provide data insights in real-time, forecast future
                            possibilities, and predict results.
                        </p>
                    </div>

                    {/* Right Side Training Types */}
                    <div className="md:w-1/2 flex flex-col gap-6">

                        {/* Basic User Training */}
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 mt-1 text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-600 leading-relaxed">
                                Dynamics 365 for Education is a CRM for higher education that provides dashboard access
                                to stakeholders, student data and insights, an admin dashboard, and much more.
                            </p>
                        </div>

                        {/* Advanced User Training */}
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 mt-1 text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-600 leading-relaxed">

                                Dynamics 365 Education is also available for K-12 education to offer a parent-student
                                portal, a student management form, and more. In short, it offers various other
                                capabilities that make it a suitable ERP for the education sector.
                            </p>
                        </div>

                        {/* Technical Training */}
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 mt-1 text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <p className="text-gray-600 leading-relaxed">

                                Microsoft Dynamics 365 for Education offers a uniform platform that can streamline the
                                management of all stakeholders and their data from a single screen. Later, users can integrate
                                other native Microsoft applications, like  D365 for Sales , Dynamics 365 Marketing and Dynamics
                                365 for Customer Service, to collect and share data in real-time.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B]  mt-12 overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

                    {/* Left Side Image */}
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <img
                            src="/services/MaskGroup8.png" // your image in public folder
                            alt="Training Illustration"
                            className="w-2/3 max-w-xs object-contain"
                        />
                    </div>

                    {/* Right Side Content */}
                    <div className="md:w-1/2 text-center md:text-left text-white">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
                            Talk to Our Education Industry Expert Team
                        </h1>

                        <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
                            Talk to our experts and let them show you the right path towards the
                            great success of your education institution.
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



            {/* OUR CORE PURPOSE OF TRAINING */}
            <section className="mt-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-[#1F2A44] mb-4">
                        Top Benefits of Microsoft Dynamics 365 For Education
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Being a CRM and ERP software for educational institutes, D365 for Education
                        offers real-time transparency to all operations while enhancing the overall
                        ROI.
                    </p>
                </div>

                <div className="mt-12 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

                        {/* Educate You */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Distribution-Delivery.svg"
                                className="w-16 h-16 object-contain"
                                alt="Educate You"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">All-Around View of Institution</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    With the centralised data platform, you can easily create,
                                    collect, and share data across the entire platform.
                                    Such information includes student data, staff details,
                                    fee information, curriculum information, and much more.
                                </p>
                            </div>
                        </div>

                        {/* Empower You */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Design-and-Training.svg"
                                className="w-16 h-16 object-contain"
                                alt="Empower You"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Fully Secured Data</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Microsoft Azure is a cloud service provider that ensures data
                                    security while remaining accessible to users 24 hours a day,
                                    seven days a week.
                                </p>
                            </div>
                        </div>

                        {/* Simplify Operations */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Asset-Management.svg"
                                className="w-16 h-16 object-contain"
                                alt="Simplify Operations"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Enhanced Student Retention</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    The captured data will let you track the interactions of
                                    students while simplifying and automating the processes related
                                    to them.
                                </p>
                            </div>
                        </div>

                        {/* Transform Business */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Service-Management.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Centralizes all Departments</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    There is no need to manually share the data with other
                                    departments, as D365 for Education unifies all departments
                                    and connects their processes with one another.
                                </p>
                            </div>
                        </div>
                        {/* Reduce Complexities from Processes */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Customer-Management.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Reduce Complexities from Processes</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    As a cutting-edge AI and ML application, it eliminates
                                    redundancies in the system, making it more efficient and
                                    effective.
                                </p>
                            </div>
                        </div>

                        {/*Empower Productivity with Integrations */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/predict-opportunity.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Empower Productivity with Integrations</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Microsoft has made this software adaptable in terms of
                                    connecting native and third-party integration in order to
                                    maximise productivity and efficiency.
                                </p>
                            </div>
                        </div>
                        {/*Unifies Data and Promotes Teamwork */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Production-Mnagement.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Unifies Data and Promotes Teamwork</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Dynamics 365 for Education is a cloud-based application capable
                                    of connecting entire data sources and promoting collaboration for
                                    sustainable growth.
                                </p>
                            </div>
                        </div>
                        {/*Offers Seamless Reporting */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons-ax-_sales-management.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Offers Seamless Reporting</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Being a cloud-based CRM and ERP for the education sector, it
                                    offers a seamless reporting feature to share the relevant
                                    information and reports with other fellow users.
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
                        Let's Discuss your Issues and Find you a Better Solution
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                        Because each educational institution has its own distinct methodology, they must deal
                        with unique requirements. You can book a call with our Microsoft certified consultant
                        to discuss your current needs and predict your future requirements. It will open up
                        the possibility of new future goals.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Let's Get Started
                    </a>

                </div>
            </section>

            {/* NEW PARTNER SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
                            <img
                                src="/industries/dynamics-365-for-higher-education.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[500px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                                How can Dynamics 365 for <br />Education help you <br />Enhance your Revenue?
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Let us understand your business and offer you the most suitable
                                solutions for all those factors that are stopping you from making
                                more profits.
                            </p>
                            <a
                                href="/contact-us"
                                className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                            >
                                Schedule a Demo
                            </a>


                        </div>


                    </div>
                </div>
            </section>
            {/* ===============================EXPLORE OTHER INDUSTRIES================================ */}
            <section className="bg-[#F9FAFC] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TITLE IN PAGE */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2A44] mb-8">
                        Explore Other Industries
                    </h2>

                    {/* SLIDER */}
                    <ExploreIndustriesSlider />

                </div>
            </section>
        </PageLayout>
    );
}
