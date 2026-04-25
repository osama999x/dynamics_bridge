'use client';
import ExploreIndustriesSlider from "@/app/components/ExploreIndustriesSlider";

import PageLayout from '@/app/components/PageLayout';

export default function RetailPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                               Dynamics 365 for Retail
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                             Manage end-to-end retail operations, offer an exceptional customer experience, 
                             and handle multiple sales channels from a single screen with Dynamics 365 for Retail.
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                               Get in Touch
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/industries/Dynamics-365-for-Retail.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    {/* 🔽 CENTERED CONTENT (UPDATED) */}
                    <div className="mt-24 flex justify-center">
                        <div className="max-w-4xl text-center">

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                            Unify your Diverse Retail Business with Dynamics 365<br/> for Retail
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                            Microsoft Cloud for Retail industry unifies digital and onsite stores to help you
                             streamline the operations of your multi-channel business. It comes with multi-outlet 
                             management, POS (point-of-sale), streamlining online and offline store operations, 
                             merchandising management, and more capabilities as well. 
                            </p>
                             <p className="text-gray-600 leading-relaxed mb-4">
                            Dynamics 365 for Retail comes with an interactive and responsive interface 
                            fueled with advanced tools to eliminate complexity for retailers. With the set 
                            of required tools, it will help you manage back-end processes so that you can focus 
                            on expanding your business. 
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
                         Why Choose Dynamics 365 for Retail?
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                           Microsoft Dynamics 365 for Retail eliminates the different data silos with a
                            centralised system to offer an omnichannel experience. You can access entire data,
                             manage goods, maintain catalogues, track stock levels, perform fulfilment, and trace
                              pricing with just a click. 
                        </p>
                         <p className="text-gray-600 mb-4 leading-relaxed">
                           Also, it empowers the business to offer an optimum level of customer experience 
                           by personalising all interactions. With this customer-centric approach, you can
                            enhance the shopping experience, which directly leads to more sales opportunities
                             and maximum revenue. 
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
                               
                            Digitalize the shopping experience by building and deploying mobile apps 
                            and web portals without hiring a developer or writing code. Also, it lets you 
                            automate costs, reduce process complexity, get deep insights, and integrate with 
                            other solutions or add-ons with ease. 
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

                             Get real-time, actionable insights to perform accurate stock fulfilment and boost
                              inventory utilization.You can even manage the stock levels of multiple stores (online or offline)
                               to deliver the inventory before it becomes out of stock. 
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

                             Understand the market, customers, trends, and competition to simplify replenishment and
                              product sourcing. Also, you can target products to run marketing campaigns while managing 
                              all merchandising
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
                        Talk to the Retail Experts of the Industry
                        </h1>

                        <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
                          Let us understand your requirements, simplify operations, and implement the personalised solution 
                          that your business is craving. Let's scale your business together


                        </p>

                        <a
                            href="/contact-us"
                            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                        >
                            Schedule a Free Demo Now!
                        </a>
                    </div>

                </div>
            </section>



            {/* OUR CORE PURPOSE OF TRAINING */}
            <section className="mt-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-[#1F2A44] mb-4">
                    Dynamics 365 for Retail - Best in the Industry Features
                    </h2>
                     <p className="text-gray-600 mb-4 leading-relaxed">
                           Microsoft Dynamics 365 for Retail Services offers best-in-class features in 
                           the industry that empower you to grow your business while offering a good customer experience. 
                        </p>
                </div>

                <div className="mt-12 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

                        {/* Workforce Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Workforce-Management.png"
                                className="w-16 h-16 object-contain"
                                alt="Workforce Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Workforce Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Manage your workforce, track their work hours, maintain their efficiency, and trace
                                     the quality of all employees using a single screen. Also, you can empower your workforce 
                                     by providing a suitable work environment to enhance productivity and control costs.
                                </p>
                            </div>
                        </div>

                        {/* Comes with In-built AI*/}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Comes-with-In-built-AI.png"
                                className="w-16 h-16 object-contain"
                                alt="Comes with In-built AI"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Comes with In-built AI</h4>
                                <p className="text-gray-600 leading-relaxed">
                                Leverage the power of AI and Microsoft Copilot to understand deeper insights and use them 
                                to make informed decisions for business growth. These technologies can help you track high-selling
                                 products, cross-sell and up-sell products, resolve queries, and give access to customer insights. 
                                </p>
                            </div>
                        </div>

                        {/* Establish Loyalty*/}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Establish-Loyalty.png"
                                className="w-16 h-16 object-contain"
                                alt="Establish Loyalty"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Establish Loyalty</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Utilise data, understand insights, and give a personalised experience to the customers they 
                                    are looking for. With the changing demands of customers, you can quickly understand the trends 
                                    and make them loyal to your business.
                                </p>
                            </div>
                        </div>

                        {/* Streamline Store Operations */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Streamline-Store-Operations.png"
                                className="w-16 h-16 object-contain"
                                alt="Streamline Store Operations"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Streamline Store Operations</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Behind a successful store, there are numerous operations that need to be managed successfully
                                  and precisely. And Dynamics 365 for Retail is one such powerful solution that successfully 
                                  streamlines store operations without complicating the new changes. 
                                </p>
                            </div>
                        </div>
                        {/* Integrations with Software and Hardware Solutions */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Integrations-with-Software.png"
                                className="w-16 h-16 object-contain"
                                alt="Integrations with Software and Hardware Solutions"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Integrations with Software and Hardware Solutions</h4>
                                <p className="text-gray-600 leading-relaxed">
                                 Integrate various software and hardware solutions with Dynamics 365 Retail to enhance the 
                                 capabilities of the solution. You can link solutions with cloud computing and modern point
                                  of sale to expand the credit capabilities of the business. 
                                </p>
                            </div>
                        </div>

                        {/*Channel Management */}
                        <div className="flex gap-6">
                            <img
                                src="/industries/Channel-Management.png"
                                className="w-16 h-16 object-contain"
                                alt="Channel Management"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Channel Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                   With digitalization, we have a variety of stores (online, offline, virtual, or call centres) to sell 
                                   services or products to a global audience. D365 for Retail will centralise the data of all stores and 
                                   offer you a unified platform to maintain, track, plan, and execute everything from a single screen.
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
                     Unify your Commerce Business without Complexity!
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                     Maximise customer satisfaction, bring transparency, and drive more revenue by 
                     unifying different channels with intelligent insights and an enhanced shopping experience. 

                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Drive Growth with a Certified Dynamics 365 Partner!
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
                                src="/industries/Shopping-experience-side.avif"
                                alt="Microsoft Dynamics 365 Implementation Partner"
                                className="w-[500px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                           Elevate Shopping Experience with D365 for Retail
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                           Microsoft Dynamics 365 for Retail empowers businesses to offer exceptional 
                           shopping experiences to customers by leveraging real-time insights. You can
                            cater to the personalised experience by offering gift cards, coupons, a mobile app,
                             and tracking returns of all goods. This is the easiest way to pamper the customer and
                              make them feel special. 
                            </p>
                             <p className="text-gray-600 mb-4 leading-relaxed">
                           If you want to understand your customer requirements and feel special about them,
                            implement Dynamics 365 for Retail.
                            </p>
                            <a
                                href="/contact-us"
                                className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                            >
                                Book a Call Now!
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
