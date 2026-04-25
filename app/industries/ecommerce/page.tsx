'use client';
import ExploreIndustriesSlider from "@/app/components/ExploreIndustriesSlider";

import PageLayout from '@/app/components/PageLayout';

export default function EcommercePage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                               Microsoft Dynamics 365<br/>For Ecommerce
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                               Optimize Your End-To-End Ecommerce Processes And Improve Your Customer
                                Experience With Microsoft Dynamics 365 For ECommerce .
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
                                src="/industries/ecommercebanner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    {/* 🔽 CENTERED CONTENT (UPDATED) */}
                    <div className="mt-24 flex justify-center">
                        <div className="max-w-4xl text-center">

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                              What is Dynamics 365 for Ecommerce?
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                             Dynamics 365 for eCommerce is a cloud-based e-commerce solution that helps
                              businesses to streamline online operations while saving time, mitigating risks,
                               and reducing redundant efforts. With Dynamics 365 for eCommerce, you can enable
                                fast shipping, drive impressive relationships with customers and vendors, predict 
                                sales, and make informed decisions.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                            With Dynamics 365 Ecommerce ERP, simplify your critical e-commerce operations while saving time, 
                            mitigating risks, and, reducing redundant efforts. With Dynamics 365 for Ecommerce, Enterprises 
                            can enable fast shipping, drive impressive relationships with customers and vendors, and improve
                             their visibility into supply chain and warehousing that eventually helps to trigger growth and 
                             productivity.
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
                          Why Microsoft Dynamics 365 for Ecommerce ?
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                           Digitally transform your business and drive innovation in your entire Ecommerce 
                           operations by leveraging highly customized and integrated eCommerce solutions. 
                           Microsoft Dynamics 365 implementation for Ecommerce companies can help to manage 
                           and accelerate the entire flow of e-commerce practices.
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
                               
                              Dynamics 365 for eCommerce business enables brands to automate
                               and synchronize the data across the online channels.
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

                              With built-in-intelligence capabilities and real-time insights, manage your finance and 
                              operations seamlessly and empower your workforce to make instant decisions impacting the 
                              entire productive growth.
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

                              Stay updated with real-time inventory data information and actual stock level.
                               Faster your order management, track orders & shipping status, manage product 
                               delivery along with a return & refund all through Microsoft ERP solutions for Ecommerce.
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
                          Connect With Our Professionals
                        </h1>

                        <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
                           Connect and talk to our professionals, we can suggest and implement the best-in-class solution.


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
                      Microsoft Dynamics 365 <br/>For E-Commerce Features
                    </h2>
                </div>

                <div className="mt-12 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

                        {/* Order Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Distribution-Delivery (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Order Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Order Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Track, manage, and fulfill your orders seamlessly and efficiently by upgrading 
                                    your e-commerce system or implementing Dynamics 365 for Ecommerce businesses.
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
                                 Have real-time eyes into your end-to-end supply chain practices to drive 
                                 efficiency with Dynamics 365 ERP solutions for eCommerce.
                                </p>
                            </div>
                        </div>

                        {/* Inventory Management*/}
                        <div className="flex gap-6">
                            <img
                                src="/industries/inventory-management-icon-01.svg"
                                className="w-16 h-16 object-contain"
                                alt="Inventory Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Inventory Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Stay updated with actual inventory status and flow. With real-time data efficiency, 
                                    manage the right level of stock at the right place.
                                </p>
                            </div>
                        </div>

                        {/* Production Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Service-Management (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Production Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Production Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                  Bring transparency into your entire production cycle. Streamline your planning,
                                   organizing, directing, and controlling with Ecommerce ERP.
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
                                  Interact and engage the right customers with AI-based data insights and real-time
                                   reporting. Serve them a personalized experience they anticipate.
                                </p>
                            </div>
                        </div>

                        {/*Procurement */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons-ax-_procurment.svg"
                                className="w-16 h-16 object-contain"
                                alt="Procurement"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Procurement</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   Enable smoother and consistent flow in every step of your procurement process
                                    all through Dynamics 365 for Ecommerce businesses.
                                </p>
                            </div>
                        </div>
                        {/*Finance Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Production-Mnagement (1).svg"
                                className="w-16 h-16 object-contain"
                                alt="Finance Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Finance Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Manage your finance and drive an efficient flow in your entire financial events. 
                                 With an Ecommerce ERP solution, gain financial insights to make smarter financial decisions.
                                </p>
                            </div>
                        </div>
                        {/*Reporting & Analytics*/}
                        <div className="flex gap-6">
                            <img
                                src="/industries/icons_Constituent Analytics.svg"
                                className="w-16 h-16 object-contain"
                                alt="Reporting & Analytics"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Reporting & Analytics</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Empower your workforce and strengthen your business capabilities with AI-Based real-time
                                  insights, IoT embedded data, and equipment security.
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
                                src="/industries/Ecommerce-side.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[500px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                              How Dynamics 365 for <br />Ecommerce Empower Enterprises <br />To Drive Ecommerce Efficiency
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                             Let’s understand how Microsoft Dynamics 365 implementation for eCommerce companies 
                             can help to manage their entire eCommerce processes.
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
                      We are here to help you out. Talk to us!
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                      Every healthy conversation starts from somewhere. Let’s connect, collaborate, and discuss your
                       business values and find out the best possible solution addressing your customized business 
                       requirements and impacting your futuristic growth. Dynamics 365 for eCommerce businesses can 
                       be customized and configured to simplify your overall operational practices.

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

           
        </PageLayout>
    );
}
