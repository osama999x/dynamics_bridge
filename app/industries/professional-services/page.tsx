'use client';
import ExploreIndustriesSlider from "@/app/components/ExploreIndustriesSlider";

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
    question: "What is Microsoft Dynamics 365 for Professional Services industry?",
    answer:
      "Microsoft Dynamics 365 for Professional Services is a suite of tools designed to help service-based organizations manage projects, resources, finances, and client relationships efficiently."
  },
  {
    question: "What is included in Dynamics 365 for Professional Services industry?",
    answer:
      "It includes project management, resource scheduling, time and expense tracking, financial management, customer engagement, analytics, and collaboration tools tailored for professional services."
  },
  {
    question: "What are the benefits of Microsoft Dynamics 365 for the Professional Services industry?",
    answer:
      "The benefits include improved project delivery, optimized resource utilization, enhanced client satisfaction, streamlined operations, real-time insights, and better financial performance."
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



export default function ProfessionalServicesPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Dynamics 365 <br />For Professional Services
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Streamline and efficiently manage your professional services from
                                 end-to-end administration to project automation to financial
                                  management, and more.
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
                                src="/industries/professionalservicebanner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    {/* 🔽 CENTERED CONTENT (UPDATED) */}
                    <div className="mt-24 flex justify-center">
                        <div className="max-w-4xl text-center">

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                               Boost Your Professional Services<br/>with Dynamics 365
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                               Enable project automation, budget control, time management, accuracy in reports
                                and invoices, resource management, warehouse management and more by implementing
                                 Dynamics 365 for Professional Services. At Dynamics Square, we have experts to help
                                  boost your operational efficiency and transform your professional services by 
                                  upgrading your system with Microsoft Dynamics 365 solutions.
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
                           How Dynamics 365 Professional Services Can Boost Your Business Potentials?
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Dynamics 365 solutions for Professional Services are designed to manage your 
                            end-to-end project execution, track project status in real-time, manage & automate 
                            finance, and drive an efficient and innovative approach across your project
                             development cycle.
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
                                With an all-in-one integrated ERP solution, enterprises can manage
                                 their day-to-day tasks with data automation, simplify their 
                                 decision-making process with AI-based reports & key analytics in 
                                 real-time.
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

                               Project managers can focus more on successful project completion
                                rather than indulging in repetitive and time-consuming data-driven
                                 practices.
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

                                It is seamless data-driven practices that eliminate the data 
                                redundancies and enable everyone involved in the project can stay
                                 updated with real-time project completion levels and ongoing
                                  activities to ensure hassle-free and timely completion of the 
                                  project.
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
                           Talk to Our Expert Team
                        </h1>

                        <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
                            Connect, discuss, and allow us to diagnose your business 
                            requirementssuited to your customized professional service needs. 
                            can support and serve your mission purpose.
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
                        Dynamics 365 Solutions For Your Professional Services
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        How professional services firms can use Microsoft Dynamics 365 to transform their business
                    </p>
                </div>

                <div className="mt-12 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

                        {/* Educate You */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons-commerce_user-experience.svg"
                                className="w-16 h-16 object-contain"
                                alt="Educate You"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Custom CRM Solution</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Get a 360-degree view of your clients or customer data from 
                                    lead generation to opportunity management, making proposals to
                                     managing finance, and more.
                                </p>
                            </div>
                        </div>

                        {/* Empower You */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_Customer-Feedback- (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Empower You"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">HR & Payroll</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Accelerate onboarding, improve your resource utilization, 
                                   quickly resolve issues, maximize adaption rate in your 
                                   organization with D365 for Professional Services.
                                </p>
                            </div>
                        </div>

                        {/* Custom Development */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons-implementation-service_HR.svg"
                                className="w-16 h-16 object-contain"
                                alt="Simplify Operations"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Custom Development</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Get custom-built deployment to support across your customized
                                     processes to streamline your processes and drive consistent 
                                     flow throughout your organization.
                                </p>
                            </div>
                        </div>

                        {/* Budgeting & Planning */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Budgeting-Planning.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Budgeting & Planning</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Leverage AI and ML-based insights in real-time to forecast data,
                                    manage finances, and plan budgeting to accelerate processes and maximize 
                                    productivity.
                                </p>
                            </div>
                        </div>
                        {/* Employee Collaboration Portal */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Customer-Management.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Employee Collaboration Portal</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Enable your workforce to collaborate and drive effective communication along 
                                   with a centralized data-driven approach with Professional Service industry solutions.
                                </p>
                            </div>
                        </div>

                        {/*Time & Expense Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Time-Expense-Management.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Time & Expense Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Dynamics 365 for Professional Services when configured and 
                                   integrated with your other applications can help to seamlessly
                                    manage time and expenses to boost productivity.
                                </p>
                            </div>
                        </div>
                        {/*Business Intelligence Analytics */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons-implementation-service_Sales-.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Business Intelligence Analytics</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Support and ensure productive decision making, future predictions,
                                    and more with AI-based insights and IoT-connected data experience.
                                </p>
                            </div>
                        </div>
                        {/*Control & Analysis */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/control-icon-analysis.svg"
                                className="w-16 h-16 object-contain"
                                alt="Transform Business"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Control & Analysis</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Insights based on past project performance and other business
                                    data help to manage control and analyze things to faster the
                                     project delivery and ensure project success.
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
                       How Microsoft's Professional Service Solution Can Help Your Business to Uplift High
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                        If your processes are compromising at some level, nothing will work out, 
                        and making productive decisions in business can lead your business toward 
                        a productive path. Share your pain business points with us, experts at 
                        Dynamics Square can reveal your business requirement and suggest a 
                        productive solution for your business.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                         Get Started Now
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
                                src="/industries/proffesionalserviceside.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[500px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                                How Dynamics 365 <br />For Professional Services <br />Can Maximize Your Business Potentials?
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                               Let's have a complete visualization of how Dynamics 365 Solutions for
                                Professional Services can help your business to improve the overall
                                 business flow, simplify practices, and accelerate service delivery.
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

            {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
             Have you got <br/>questions about Professional Services industry?
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
