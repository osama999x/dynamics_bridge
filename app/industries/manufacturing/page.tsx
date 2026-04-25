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
  question: "What is the Microsoft Cloud for Manufacturing?",
  answer:
    "Microsoft Cloud for Manufacturing is an industry-specific cloud solution that brings together data, AI, and advanced analytics to help manufacturers improve productivity, optimise operations, and drive innovation across the value chain."
},
{
  question: "What are the features of Microsoft Cloud for Manufacturing?",
  answer:
    "Key features include real-time data integration, AI-powered insights, predictive maintenance, supply chain optimisation, digital twins, IoT integration, and seamless connectivity with Dynamics 365, Azure, and Power Platform."
},
{
  question: "Is Microsoft Cloud for Manufacturing an ERP or CRM?",
  answer:
    "Microsoft Cloud for Manufacturing is not a standalone ERP or CRM. Instead, it integrates ERP and CRM capabilities through Microsoft Dynamics 365, combining operational data and customer insights into a unified manufacturing platform."
},
{
  question: "Can Microsoft Cloud for Manufacturing enhance manufacturing capabilities?",
  answer:
    "Yes, it enhances manufacturing capabilities by improving operational visibility, enabling predictive maintenance, reducing downtime, optimising supply chain performance, and supporting data-driven decision-making through AI and analytics."
},
{
  question: "Which industries can utilise Microsoft Cloud for Manufacturing?",
  answer:
    "Microsoft Cloud for Manufacturing can be utilised across various industries, including automotive, electronics, consumer goods, industrial equipment, chemicals, pharmaceuticals, food and beverage, and heavy machinery manufacturing."
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



export default function ManufacturingPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                               Microsoft Cloud<br/>For Manufacturing
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Connect your people, workflow, and operations to impact your productivity
                                 level, improve your customer satisfaction, and uplift your outcomes with 
                                 Microsoft Cloud for Manufacturing Solutions.
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
                                src="/industries/manufacturing-banner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    {/* 🔽 CENTERED CONTENT (UPDATED) */}
                    <div className="mt-24 flex justify-center">
                        <div className="max-w-4xl text-center">

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                              Manage it all, with Microsoft Cloud for Manufacturing!
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                              With Microsoft cloud for Manufacturing, improve your capabilities to manage and 
                              drive your core processes and bring continuous flow in your operations. With the
                               help of integrated manufacturing cloud solutions, uncover new manufacturing capabilities
                                to effectively connect your employees, workflow, processes, and to drive transparency, 
                                profitability, and agility.
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
                          Why Choose Microsoft Cloud for Manufacturing?
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            By enabling IoT-connected experience integrated with AI, Mixed Reality, and 
                            Predictive technologies, Cloud Manufacturing solution is designed to maximize 
                            operational capability, empower frontline workers, enable remote efficiency, 
                            unlock cloud-based potentials, and maximize the overall productivity wrapped
                             with regulatory compliance, required privacy, and transparency.
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
                               
                               Improve your employees' skills, streamline your production line, 
                               and maximize your customer satisfaction with highly integrated 
                               cloud manufacturing solutions.
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

                               Connect across your digital channels including Dynamics 365, Microsoft 365,
                                Microsoft Teams, Power Platforms, HoloLens 2, and Microsoft Azure with Microsoft 
                                Cloud Manufacturing to drive a highly innovative, productive, and customer-driven experience.
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

                               Start delivering new products, improved services, and maximized experiences 
                               to your customers by upskilling your workforce capability, introducing smart 
                               factory modernization, and enabling intelligent systems all through with integrated
                                and embedded cloud manufacturing solutions.
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
                            Let's explore and extend modernized capabilities with Microsoft Cloud solution for Manufacturing.
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
                       Microsoft Cloud <br/>For Manufacturing Features
                    </h2>
                </div>

                <div className="mt-12 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

                        {/* Workforce Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/custom-crm-solutions.svg"
                                className="w-16 h-16 object-contain"
                                alt="Workforce Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Workforce Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Strengthen your workforce capability by enabling them to connect, operate,
                                     and collaborate from anywhere. Support your remote work securely and effectively
                                </p>
                            </div>
                        </div>

                        {/* Customer Engagement */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_customer-relation.svg"
                                className="w-16 h-16 object-contain"
                                alt="Customer Engagement"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Customer Engagement</h4>
                                <p className="text-gray-600 leading-relaxed">
                                  Empower your sellers, marketers, and service team to connect and engage customers 
                                  across your digital platforms to improve their experience while reserving profit margins.
                                </p>
                            </div>
                        </div>

                        {/* Drive Agility */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_flexibility.svg"
                                className="w-16 h-16 object-contain"
                                alt="Drive Agility"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Drive Agility</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Bring agile manufacturing capabilities with Microsoft's cloud manufacturing 
                                    solutions. Enable your workforce to cope with the complexities and drive challenges.
                                </p>
                            </div>
                        </div>

                        {/* Improved Visibility */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_Improved-Visibility.svg"
                                className="w-16 h-16 object-contain"
                                alt="Improved Visibility"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Improved Visibility</h4>
                                <p className="text-gray-600 leading-relaxed">
                                  Boost your service team's capability to proactively know their customer 
                                  issues before the customer could realize and quickly detect as well as
                                   resolve the problem.
                                </p>
                            </div>
                        </div>
                        {/* Resilient Supply Chain */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_supply-chain.svg"
                                className="w-16 h-16 object-contain"
                                alt="Resilient Supply Chain"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Resilient Supply Chain</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Connect both your internal and external supply chain, stakeholders, customers, 
                                   and key data to improve your supply chain resilience while reducing the supply 
                                   chain disruption.
                                </p>
                            </div>
                        </div>

                        {/*Streamline Operations */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_Streamline-Operations.svg"
                                className="w-16 h-16 object-contain"
                                alt="Streamline Operations"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Streamline Operations</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Securely connect employees, products, and processes with real-time 
                                   efficiency to quickly optimize the issues and drive improved workflow 
                                   with manufacturing cloud solutions.
                                </p>
                            </div>
                        </div>
                        {/*Digital Transformation */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons-power-automate_Enhanced-Efficiency (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Digital Transformation"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Digital Transformation</h4>
                                <p className="text-gray-600 leading-relaxed">
                                  Build digital twins and bring digital thread capability to uplift your product and services.
                                   Leverage IoT intelligence to improve visibility and drive digital innovation.
                                </p>
                            </div>
                        </div>
                        {/*Manufacturing Intelligence*/}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_Manufacturing-Intelligence.svg"
                                className="w-16 h-16 object-contain"
                                alt="Manufacturing Intelligence"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Manufacturing Intelligence</h4>
                                <p className="text-gray-600 leading-relaxed">
                                  Leveraging AI-powered automation combined with IoT and Mixed Reality, optimize processes,
                                   improve equipment effectiveness, protect industrial IoT, and ensure OT security.
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
                                src="/industries/manufacturing-side.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[500px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                               How to Adopt New Manufacturing <br />Capabilities and Maximize Your <br />Service Capability?
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                              This is how to deploy smart factory experience, adapt faster, and drive digital 
                              transformation through dedicated cloud manufacturing solutions.
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

             {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                       How to Maximize Your Business Capabilities with<br/> Microsoft Cloud Manufacturing
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                       A healthy conversation with us could be a profitable deal for your business ahead.
                        Let's come closure, share your operational limitations or difficulty with us, and
                         understand your business scope with cloud manufacturing solutions.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                         Get Started Now
                    </a>

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
            Have you got<br/>questions about Microsoft Cloud for<br/> Manufacturing?
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
