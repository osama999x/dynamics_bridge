'use client';
import ExploreIndustriesSlider from "@/app/components/ExploreIndustriesSlider";

import PageLayout from '@/app/components/PageLayout';

export default function FoodBeveragesPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Dynamics 365<br/>For Food & Beverages
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                              Efficiently manage your inventory and supply chain by implementing Dynamics 365 for Food and Beverages business.
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
                                src="/industries/food-and-beverages-banner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    {/* 🔽 CENTERED CONTENT (UPDATED) */}
                    <div className="mt-24 flex justify-center">
                        <div className="max-w-4xl text-center">

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                             Why Dynamics 365 for your<br/>food & beverages industry?
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                             Dynamics 365 for Food and Beverages business solution can be implemented to 
                             support your entire food & beverage management system. At Dynamics Square, 
                             we implement a highly customized solution for Food & Beverage industry helping
                              brands to seamlessly manage their customers, ensure quality control, and drive 
                              desired outcomes while enabling process automation and real-time efficiency.
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
                         How Dynamics 365<br/>Food & Beverage ERP<br/>Helps to Unify Your Business Practices
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                           Microsoft Dynamics 365 Food & Beverage ERP is designed to connect, streamline, 
                           and drive end-to-end processes from human resource management to financial management
                            to warehousing, distribution, and quality assurance. With real-time tracking and depth 
                            insights, it allows enterprises to make profitable decisions.
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
                               
                             Dynamics 365 for Food and Beverages helps manufacturing units to analyze demand,
                              manage inventory levels, and drive real-time financial visibility to minimize 
                              costs and maximize outcomes.
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

                             Drive seamless ordering and delivery model by implementing Dynamics 365 for Food 
                             and Beverages industry. With improved insights into the warehousing pipeline, instantly
                              respond to fulfill timely changing demands and customer anticipations.
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

                             Connect, communicate, and roll out effective business strategy in your food and
                              beverage operations with Dynamics 365 Food & Beverage ERP.
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
                          Talk to our Dynamics 365 expert to get the best solution for your Food & Beverage industry.



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
                    Microsoft Dynamics 365 For Food & Beverage <br/>industry Features
                    </h2>
                     <p className="text-gray-600 mb-4 leading-relaxed">
                           Bring real-time transparency into every step of your goods movement while 
                           minimizing the transportation cost and maximizing efficiency.
                        </p>
                </div>

                <div className="mt-12 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

                        {/* Warehouse & Distribution Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Distribution-Delivery (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Warehouse & Distribution Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Warehouse & Distribution Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Bring real-time transparency into every step of your goods movement while
                                     minimizing the transportation cost and maximizing efficiency.
                                </p>
                            </div>
                        </div>

                        {/* Supply Chain Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Design-and-Training (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Supply Chain Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Supply Chain Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                Streamline and bring transparency across your supply chain pipeline and drive
                                 efficiency by implementing Dynamics 365 for Food & Beverages industry.
                                </p>
                            </div>
                        </div>

                        {/* Marketing & Sales*/}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Asset-Management (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Marketing & Sales"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Marketing & Sales</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Track and manage all your customers' activities, marketing campaigns, and sales pipeline
                                     leveraging a single integrated system with Food & Beverage ERP.
                                </p>
                            </div>
                        </div>

                        {/* Analytics & Insights */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Service-Management (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Analytics & Insights"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Analytics & Insights</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Make smarter yet productive data-driven decisions instantly without waiting for
                                  manual reports leveraging AI-equipped Dynamics 365 Food & Beverage ERP.
                                </p>
                            </div>
                        </div>
                        {/* Customer Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/connect-collaborate.svg"
                                className="w-16 h-16 object-contain"
                                alt="Customer Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Customer Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Connect, engage, and sustain a healthy relationship with your customers. Serve them a
                                  personalized deal with Dynamics 365 for Food & Beverages.
                                </p>
                            </div>
                        </div>

                        {/*Production & Quality Control */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/predict-opportunity (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Production & Quality Control"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Production & Quality Control</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Have control over the right production cycle and maintain the quality standards
                                    while increasing food safety and enabling the right planning & execution strategy.
                                </p>
                            </div>
                        </div>
                        {/*Manufacturing Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Production-Mnagement (2).svg"
                                className="w-16 h-16 object-contain"
                                alt="Manufacturing Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Manufacturing Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Drive seamless manufacturing from planning & organizing to production and supply.
                                  Keep tracing and stay updated with your manufacturing operations.
                                </p>
                            </div>
                        </div>
                        {/*Financial Management*/}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons-ax-_sales-management (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Financial Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Financial Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Keep real-time eyes on your every financial move. Drive strategic flow from tax & duty 
                                 management to discount management, and more.
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
                     Talk to Us to Reveal Your Actual Requirements
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                     Every specific industry comprises a different set of practices and hence,
                      requires a highly customized solution to drive innovation, flexibility, and scalability.
                       So, you are one step away to start driving productive results. With Microsoft Dynamics 365 
                       Food & Beverage ERP, enterprises can efficiently manage their end-to-end operational practices
                        to accomplish the desired results.es.

                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                         Get Started 
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
                                src="/industries/foodandbeverages-side.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[500px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                             How Dynamics 365 <br />Food and Beverages <br />Can Help to Elevate Your <br/>Business Results?
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                            Let's understand, how Microsoft Dynamics 365 for Food & Beverages industry 
                            can simplify & automate your processes and trigger your productivity.
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
