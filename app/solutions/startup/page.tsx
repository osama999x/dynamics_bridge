'use client';

import { useState } from 'react';
import PageLayout from '@/app/components/PageLayout';

export default function StartupPage() {
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
                                Dynamics 365 ERP for Startups
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Scale Smarter, Grow Faster with Microsoft Solutions
                            </h2>
                            <p className="text-lg text-gray-700">
                                Acquire tools that can help your business evolve from your first day to your breakthrough success.
                            </p>

                            <ul className="space-y-3 list-disc list-inside text-gray-700">
                                <li>Effortless Setup</li>
                                <li>Real-Time Data Insights</li>
                                <li>Scalable Solutions for Growth</li>
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
                            Tackling Startup Hurdles with Microsoft <br />ERP Solutions
                        </h2>

                        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                            Overcoming Startup Challenges with Microsoft ERP Solutions
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* COLUMN 1 */}
                        <div className="space-y-10">

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Tight Budgets and Resource Crunches
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    No hefty upfront costs! Adopt enterprise-grade tools with
                                    startup-friendly pricing and scalable growth options.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">82%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    of organizations report challenges with data integration.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Compliance and Regulatory Demands
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Stay ahead of legal and regulatory requirements with built-in tools
                                    for reporting and compliance management—no stress, no hassle.
                                </p>
                            </div>


                        </div>

                        {/* COLUMN 2 */}
                        <div className="space-y-10">

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">38%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    of startups fail due to cash flow problems
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Manual Workflows and Inefficiencies
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Automate routine operations and reduce administrative
                                    workload to focus on innovation.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">56%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    faster decision-making with integrated ERP systems
                                </p>
                            </div>

                        </div>

                        {/* COLUMN 3 */}
                        <div className="space-y-10">

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Data Silos and Disconnected Systems
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Integrate all business operations into a unified
                                    Microsoft ERP platform.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-red-600">40%</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    increase in productivity due to automation
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Resource Constraints & Project Management
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Manage projects, people, and finances efficiently with
                                    real-time visibility.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

           {/* KEY SOLUTION SECTION */}
<section className="py-20 bg-gradient-to-b from-white to-[#f4f7fe]">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <div className="text-center mb-16">
      <p className="text-sm font-semibold text-grey-300 uppercase tracking-wide">
        Key Solution
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 max-w-4xl mx-auto">
        Microsoft Dynamics 365 Business Central—Your Comprehensive Solution
        for Smarter Business Management
      </h2>
    </div>

    {/* CENTER IMAGE ONLY */}
    <div className="flex justify-center">
      <img
        src="/solutions/smart-busimess-mamangemt.png"
        alt="Microsoft Dynamics 365 Business Central"
        className="w-full max-w-6xl rounded-xl"
      />
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
        Fuel Your Startup’s Journey with the Right Tools<br/> See How Dynamics Square Can Help
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
