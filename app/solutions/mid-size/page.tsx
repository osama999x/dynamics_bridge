'use client';

import { useState } from 'react';
import PageLayout from '@/app/components/PageLayout';

export default function MidSizePage() {
    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        email: '',
        phone: '',
        company: '',
        lookingFor: '',
        requirements: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // You can integrate API call here
        alert('Thank you! We will contact you soon.');
    };

    return (
        <PageLayout>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="space-y-6">
                            <p className="text-lg  text-purple-500">
                                Dynamics 365 for Medium Businesses
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Take Your Business Global with Confidence and Clarity
                            </h2>
                            <p className="text-lg text-gray-700">
                                Expand without limits! Gain the confidence to succeed in a <br />connected global market.
                            </p>

                            <ul className="space-y-3 list-disc list-inside text-gray-700">
                                <li>Faster time-to-market</li>
                                <li>Global reach</li>
                                <li>Omnichannel customer engagements</li>
                                <li>Optimized supply chain</li>
                                <li>AI-powered insights</li>
                            </ul>
                        </div>

                        {/* RIGHT CONTACT FORM */}
                        <div className="bg-white rounded-xl p-8 shadow-md max-w-md ml-auto">
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="* Name"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                                    />

                                    <input
                                        type="text"
                                        name="jobTitle"
                                        placeholder="Job title"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                                    />
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="* Work email"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                                />

                                <div className="flex gap-3">
                                    <select
                                        className="px-4 py-3 rounded-md bg-gray-200 text-gray-600 outline-none w-28"
                                    >
                                        <option>GB +44</option>
                                    </select>

                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone number"
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="company"
                                        required
                                        placeholder="* Company name"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                                    />

                                    <select
                                        name="lookingFor"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-600 outline-none"
                                    >
                                        <option>Looking for?</option>
                                        <option>Consulting</option>
                                        <option>Implementation</option>
                                        <option>Support</option>
                                    </select>
                                </div>

                                <textarea
                                    name="requirements"
                                    required
                                    rows={3}
                                    placeholder="* Any specific requirements?"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                                />

                                <label className="flex items-start gap-2 text-sm text-gray-600">
                                    <input type="checkbox" required />
                                    I agree to the Privacy Policy and Terms of Service.
                                </label>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold"
                                >
                                    Let’s Connect
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* STARTUP CHALLENGES SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#f4f7fe] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-grey-300 uppercase tracking-wide">
                            Challenges
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Medium-Sized Business, Big Challenges? Here’s <br /> What Might Be Slowing You Down:
                        </h2>


                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* COLUMN 1 */}
                        <div className="space-y-10">

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Managing growth effectively
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Balancing growth with stability can be tough, but with the right tools, it becomes achievable.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">74%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    of business leaders report rising costs hinder growth
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Recruiting and retaining skilled employees
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Hiring and keeping the best talent requires effort and strategy, but it’s key to success.
                                </p>
                            </div>

                        </div>

                        {/* COLUMN 2 */}
                        <div className="space-y-10">

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">46%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    of medium business leaders face labor shortages
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Attracting customers and retaining them
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Finding and keeping happy customers is challenging, but their loyalty is what drives your business.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">22%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    of small businesses fail due to low demand
                                </p>
                            </div>

                        </div>

                        {/* COLUMN 3 */}
                        <div className="space-y-10">

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Developing new products or innovation
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Innovation can feel overwhelming, but it’s the lifeblood that keeps your business ahead of the competition.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">77%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    of mid-sized firms find advanced business solutions expensive
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Limited access to advanced solutions
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Limited resources shouldn’t limit your potential; affordable, powerful solutions can level the playing field.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* KEY SOLUTION WITH CARDS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-grey-300 uppercase tracking-wide">
                            Key Solutions
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Smarter Solutions for Growing Businesses
                        </h2>

                        <p className="text-gray-600 text-base max-w-3xl mx-auto mt-4 leading-relaxed">
                            For a small business, every decision counts! It can be hard to keep track of
                            finances, customer relationships, and growth. Microsoft Dynamics 365 makes
                            these things easier by giving you customised solutions that work in great
                            tandem to facilitate smooth operations. This saves you time and helps you
                            make intelligent choices. Get the tools you need to beat the competition and
                            steer your business to achieve greatness.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* CARD 1 */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/dynamics-365-businesscentral.svg"
                                alt="Business Central"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                                Core Recommendation
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Dynamics 365<br /> Business Central
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Streamline operations, manage finances effectively, and integrate
                                seamlessly with other Microsoft tools.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/dynamics-365-sales.svg"
                                alt="Dynamics 365 Sales"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                                For CRM Needs
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Dynamics 365<br /> Sales
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Centralize customer data, track leads, and close deals faster with
                                AI-driven insights and simplified quoting.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/dynamics-365-businesscentral.svg"
                                alt="Customer Insights"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                                For Marketing Needs
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Dynamics 365 <br /> Customer Insights
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Discover patterns, predict behaviour, and create personalized customer
                                journeys.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>

                        {/* CARD 4 */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/power-pltform.png"
                                alt="Power Platform"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                                To Extend ERP Functionality
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Microsoft <br />Power Platform
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Create custom apps, automate repetitive tasks, and visualize key
                                metrics with real-time dashboards.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>
                          {/* CARD 5 */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/dynamics-365-supplychainmanagement.svg"
                                alt="Power Platform"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                               Production & Supply Chain
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                               Supply Chain <br />Management
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Reimagine operations with demand forecasting, supplier management, and real time supply chain analytics.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>
                        {/* CARD 6 */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/dynamics-365-HRM.svg"
                                alt="Power Platform"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                              For Workforce Empowerment
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                               Dynamics 365 <br />Human Resources
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                               Enhance employee experience, simplify HR processes and improve workforce productivity.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>
                         {/* CARD 7*/}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/dynamics-365-customer-service.svg"
                                alt="Power Platform"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                              For Customer Excellence
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                               Dynamics 365 <br />Customer Service
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                              Deliver exceptional support with AI insights, omnichannel engagement,and seamless case management.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>
                        {/* CARD 8*/}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <img
                                src="/solutions/dynamics-365-fieldservice.svg"
                                alt="Power Platform"
                                className="h-12 mb-4"
                            />

                            <p className="text-sm text-purple-600 font-semibold mb-1">
                              For Field Operations
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                               Dynamics 365 <br />Field Service
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                              Improve on-site service delivery with intelligent schedulling and real-time updates.
                            </p>

                            <button className="text-red-600 font-semibold  hover:text-red-700">
                                Get Started
                            </button>
                        </div>

                    </div>
                </div>
            </section>

           {/* Features */}
<section className="py-20 bg-gradient-to-b from-white to-[#f4f7fe]">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <div className="text-center mb-16">
      <p className="text-sm font-semibold text-grey-300 uppercase tracking-wide">
        Features
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 max-w-4xl mx-auto">
        Why Choose Dynamics 365?
      </h2>
    </div>

    {/* FEATURES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Feature Card Template */}
      {[
        "Streamlined Growth Management|Effortlessly manage business expansion with integrated solutions that ensure smooth scaling and profitability.",
        "Talent Empowerment and Retention|Improve employee experience, streamline HR processes, and retain top talent to support long-term growth.",
        "Customer-Centric Innovation|Easily innovate and improve your products or services based on deep customer insights and AI-driven analytics.",
        "Simplified Financial Management|Gain full financial control with automated accounting, accurate forecasting, and real-time budget visibility.",
        "Optimized Supply Chain Visibility|Address supply chain challenges with real-time insights, accurate demand forecasting, and stronger supplier relationships.",
        "Data-Driven Decisions at Your Fingertips|Leverage AI-powered insights to make informed decisions, predict trends, and unlock new growth opportunities.",
        "Effortless Regulatory Compliance|Simplify compliance with built-in tools that keep you up-to-date with the latest regulations and requirements.",
        "Omnichannel Engagement Made Simple|Engage customers across all touchpoints with a seamless experience that increases satisfaction and loyalty.",
        "Agile and Flexible Solutions|Adapt easily to changing market demands and evolving business needs with scalable and customizable features.",
        "Global Expansion with Local Adaptability|Take your business globally without losing the local touch; kudos to tools that ensure smooth international operations.",
        "Increased Efficiency with Automation|Reduce manual work and streamline operations by automating key tasks, freeing up resources for innovation.",
        "Centralized Collaboration|Foster teamwork across departments with centralized tools that connect your entire workforce in real-time.",
        "Real-Time Analytics for Smarter Growth|Make confident decisions with access to real-time dashboards, tracking KPIs, and performance metrics.",
        "Customizable to Fit Your Business|Tailor the platform to your unique workflows, ensuring the solution adapts to your specific business needs.",
        "Integrated Fraud Protection|Protect your business from fraud with advanced detection tools that ensure a secure operating environment.",
       
      ].map((feature, index) => {
        const [title, description] = feature.split("|");
        return (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
            {/* Red check icon */}
            <div className="flex-shrink-0">
              <span className="text-red-600 text-2xl">✔</span>
            </div>
            {/* Feature text */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        );
      })}

    </div>
  </div>
</section>



            {/* CTA SAVINGS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="bg-gradient-to-r from-[#3b2f5c] via-[#5b4b87] to-[#6a5fa0] 
                    rounded-full py-16 px-8 text-center">

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            <span className="text-yellow-400">Save upto 40%</span> on deployment and upgrade costs!
                        </h2>

                        <button
                            className="mt-8 bg-red-600 hover:bg-red-700 text-white
                   px-8 py-4 rounded-md font-semibold transition"
                        >
                            See How It Works for Your Startup?
                        </button>

                    </div>

                </div>
            </section>

            {/* ABOUT DYNAMICS SQUARE SECTION */}
            <section className="py-20 mb-20 bg-gradient-to-r from-[#3b2f5c] via-[#5b4b87] to-[#6a5fa0]">
                <div className="max-w-7xl mx-auto px-6 text-white">

                    {/* TOP CONTENT */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Fuel Your Startup’s Journey with the Right Tools<br /> See How Dynamics Square Can Help
                        </h2>

                        <div className="mt-6 flex flex-col items-center text-center gap-3">
                            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md font-semibold">
                                Find out our Approach
                            </button>

                            <p className="text-sm text-gray-200">
                                With no-obligation Free Consultation
                            </p>
                        </div>

                    </div>

                    {/* ABOUT STATS */}
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold">About Dynamics Square</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* CARD 1 */}
                        <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                            <div className="text-4xl font-bold text-yellow-400 mb-2">350+</div>
                            <h4 className="font-semibold mb-2">Project Succesess</h4>
                            <p className="text-sm text-gray-200">
                                Over 350 projects delivered & counting! Join our journey to success.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                            <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
                            <h4 className="font-semibold mb-2">Microsoft Certified Consultant</h4>
                            <p className="text-sm text-gray-200">
                                Proactive & dedicated Microsoft experts at your service.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                            <h4 className="font-semibold mb-2">Dedicated Support</h4>
                            <p className="text-sm text-gray-200">
                                Get help anytime with our full range of services.
                            </p>
                        </div>

                    </div>

                </div>
            </section>



        </PageLayout>
    );
}
