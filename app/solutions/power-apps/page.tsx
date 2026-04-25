'use client';
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
  question: "Which apps are included in Power Apps?",
  answer: "Power Apps includes Canvas apps, Model-driven apps, and Portal apps, allowing users to create web and mobile applications tailored to business needs."
},
{
  question: "What kinds of apps can I build using Power Apps?",
  answer: "With Power Apps, you can build a wide variety of applications including data-driven apps, workflow automation apps, customer-facing portals, and internal business process apps."
},
{
  question: "Is there any need to learn code to build apps?",
  answer: "No, Power Apps is a low-code platform, which means you can design and deploy apps using drag-and-drop components and prebuilt templates. Coding knowledge is optional for advanced customizations."
},
{
  question: "How much time will it take to build an app using Power Apps?",
  answer: "The time varies depending on the complexity of the app. Simple apps can be built in hours using templates, while more complex, custom apps may take several days or weeks."
},
{
  question: "How many apps or services can I connect with Power Apps?",
  answer: "Power Apps provides over 200+ connectors to integrate with Microsoft services like SharePoint, Teams, Dynamics 365, as well as third-party services like Salesforce, Dropbox, and SQL databases."
},
{
  question: "What are the top features of Power Apps?",
  answer: "Top features include drag-and-drop app design, prebuilt templates, AI builder components, integration with Dataverse, responsive mobile-ready apps, role-based customization, and extensive connector support."
},
{
  question: "What are the available Power Apps pricing options?",
  answer: "Power Apps offers multiple plans: Developer (Free), Premium per user (£15.40/month), and Premium with 2,000-seat minimum (£9.20/user/month). Each plan provides different entitlements for app building, AI Builder credits, and Dataverse storage."
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





export default function PowerAppsPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                               Microsoft Power Apps
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                               Build low-code applications, drive swiftness and modernize processes across your organization
                                without compromising quality and speed with Microsoft Power Apps.
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
                                src="/solutions/power-apps-banner-01.svg"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* PARTNER HIGHLIGHT SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
                       What are Power Apps?
                    </h2>

                    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
                       Microsoft Power Apps is a collection of powerful services, solutions, and data platforms to help you build 
                       customised apps for your changing business requirements. These customised apps allow users to turn most of the 
                       manual and recurring tasks into automated processes with the flexibility to operate on any device, whether web,
                        mobile, or PC. Power Apps is capable of revolutionising the way of building customised apps rapidly without using
                         code, resulting in low investment and high revenue.
                    </p>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 1 */}
                            <details
                                open
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-power-apps_Quick-and-Easy.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                           Quick & Easy
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Power Apps offers easy-to-use tools that allow your team in developing the best applications in a much
                                     faster way. There are several essential features and tools to use such as prebuilt templates that
                                      help in developing the right application in a much shorter time. The user just can develop the 
                                      required application by customizing and offering some modifications to the already existing 
                                      templates.
                                </p>
                            </details>

                            {/* ITEM 2 */}
                            <details
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-power-apps_App-Development.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Professional App Development
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                   Power Apps enable the employees to create applications that are well featured with advanced 
                                   functionalities to offer a professional look to the applications.The platform includes AI 
                                   (Artificial Intelligence) components that are pre-built-in order to offer features and specifications
                                    to the applications that are high-end so that they offer a professional look and experience.
                                </p>
                            </details>
                             {/* ITEM 3 */}
                            <details
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-power-apps_Enhancing-Capabilities.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Enhancing Capabilities
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                   Making use of the Power Apps Microsoft platform ensures that you allow your employees the freedom 
                                   to develop the applications in the best possible way. There are several functions and tools to allow
                                    the users to integrate several features and specifications in the applications to make them super 
                                    professional. Apart from this, the platform also enables the users to enhance the capabilities of 
                                    the applications from time to time.
                                </p>
                            </details>
                        </div>




                        {/* RIGHT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 4 */}
                            <details
                                open
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-power-apps_Responsive-Design.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Responsive Design
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Power Apps ensure that the applications that are getting developed are perfect for several
                                     platforms and devices. It is due to the responsive design of the applications attained that 
                                     the applications designed on this platform run well on any of the browsers and on devices such
                                      as smartphones as well as tablets.
                                </p>
                            </details>
                             {/* ITEM 5*/}
                            <details
                                open
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-power-apps_Data.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Data
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                   The platforms enable the customized applications to make use of the data already 
                                   available on the platform for analysis purposes. The applications can collect such data
                                    from the platform and can use them for the results. Apart from the data already existing 
                                    on the platform, the applications also are offered the capabilities to extract data from 
                                    external sources and use them to get the desired result.
                                </p>
                            </details>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
                               What are Power Apps <br/>Features
                            </h2>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                           {/* CARD 1 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Built for Every Skill Level
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Power Apps empowers everyone—from data analysts to professional developers—
    to build efficient business solutions using pre-built templates, AI components,
    and low-code or minimal-code development.
  </p>
</div>

{/* CARD 2 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Develop Smart Applications
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Use Power Apps canvas to design applications from scratch or professionally
    customize every element to optimize workflows, tasks, and business functions.
  </p>
</div>

{/* CARD 3 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Create Apps from Your Data
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Automatically generate responsive and immersive business applications directly
    from your data model. Customize user experiences with a drag-and-drop designer
    tailored to specific roles.
  </p>
</div>

{/* CARD 4 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Integrate & Extend Easily
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Connect with 200+ built-in connectors to integrate existing systems and data.
    Extend Power Apps with custom connectors, logic, and advanced capabilities as
    your business grows.
  </p>
</div>



                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">

                    {/* CENTER TITLE */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                        Power Apps Service
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                        We offer a full range of services to support you on your Dynamics journey including implementation,
                         upgrade and support.
                    </p>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">


                        {/* CARD 1 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/settings_b.png"
                                alt="Implementation"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                            <p className="text-gray-700 mb-6">
                                Proactively manage your sales with an improved customer experience by
                                implementing Dynamics 365 Sales.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                        {/* CARD 3 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/person_pin.png"
                                alt="Support"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Support</h3>
                            <p className="text-gray-700 mb-6">
                                Bring continuity and drive sales efficiency through Dynamics 365 Sales
                                support services.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                        {/* CARD 4 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/forum.png"
                                alt="Consulting"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Consulting</h3>
                            <p className="text-gray-700 mb-6">
                                Get optimum D365 Sales services suited to your customised business
                                needs.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                    </div>
                </div>
            </section>




            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center mb-16">
                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
                       Copilot in Power Apps
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                       Microsoft Copilot enables AI-powered automation, app optimisation, and intelligent recommendations in
                        Power Apps, hence simplifying app development. It helps users create and run apps with little code required. 
                    </p>
                </div>

                {/* 2x2 ITEMS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* ITEM 1 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">AI-Driven App Creation</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Copilot suggests layouts, components, and workflows depending on business demands so users can 
                                create low-code apps faster. It simplifies app development by lowering the need for manual setups. 
                            </p>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">Enhanced Data Integration</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Copilot guarantees flawless integration with Microsoft Dataverse, third-party APIs, and business
                                 systems by cleverly connecting and mapping data from many sources. This quickens data-driven 
                                 decision-making. 
                            </p>
                        </div>
                    </div>

                    {/* ITEM 3 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">Conversational Automation</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Copilot facilitates internal and customer process automation driven by artificial 
                                intelligence. It can improve user engagement by generating automated responses, handling
                                 requests, and instantly starting processes. 
                            </p>
                        </div>
                    </div>

                    {/* ITEM 4 */}
                    <div className="flex gap-4 items-start">
                        <span className="text-red-600 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="font-semibold text-[#1F2A44] mb-2">Streamline Repetitive Tasks</h4>
                            <p className="text-gray-600 leading-relaxed">
                               Automate approvals, notifications, and repeated activities to replace manual interventions. 
                               AI-generated summaries from Copilot offer rapid process overviews, hence improving efficiency 
                               and lowering workload. 
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">

                    {/* SECTION HEADING (NO BG CHANGE) */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                        Microsoft Power Apps Pricing
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                        Explore Power Apps Plans, Costs, And Availability To Start Running Your Business Apps.
                    </p>

                   {/* PRICING CARDS */}
<div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mb-16">

  {/* CARD 1 – Power Apps Developer (Free) */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
      <h3 className="text-white font-semibold text-lg">
        Power Apps Developer<br />Free
      </h3>
    </div>

    <p className="text-4xl font-bold text-red-600 mb-4">Free</p>

    <p className="text-gray-600 mb-4">
      Sign up for a free developer account to build and test unlimited apps and automations.
    </p>

    <ul className="space-y-2 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Three developer environments
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Use prebuilt, custom, and on-premises connectors
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Microsoft Dataverse entitlement of 2 GB database
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Run up to 750 automation flows per month
      </li>
    </ul>
  </div>

  {/* CARD 2 – Power Apps Premium */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
      <h3 className="text-white font-semibold text-lg">
        Power Apps<br />Premium
      </h3>
    </div>

    <p className="text-4xl font-bold text-red-600 mb-1">£15.40</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>

    <p className="text-gray-600 mb-4">
      Licensed users can build, modernize, and deploy unlimited applications without restrictions.
    </p>

    <ul className="space-y-2 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Unlimited Power Apps and Power Pages for assigned user
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        500 AI Builder credits
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Use prebuilt, custom, and on-premises connectors
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Dataverse entitlements of 250 MB database and 2 GB file storage
      </li>
    </ul>
  </div>

  {/* CARD 3 – Power Apps Premium (2,000-seat minimum) */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
      <h3 className="text-white font-semibold text-lg">
        Power Apps<br />Premium (2,000-seat minimum)
      </h3>
    </div>

    <p className="text-4xl font-bold text-red-600 mb-1">£9.20</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>

    <p className="text-gray-600 mb-4">
      Ideal for businesses needing unlimited apps per user and willing to purchase at least 2,000 licenses.
    </p>

    <ul className="space-y-2 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Unlimited Power Apps and Power Pages for assigned user
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        500 AI Builder credits
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Use prebuilt, custom, and on-premises connectors
      </li>
      <li className="flex items-start gap-2">
        <span className="text-red-600 font-bold">✔</span>
        Dataverse entitlements of 250 MB database and 2 GB file storage
      </li>
    </ul>
  </div>

</div>

{/* CTA BUTTON */}
<div className="text-center">
  <a
    href="/contact-us"
    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
  >
    Get Power Apps Now
    <span className="transition-transform duration-300 hover:translate-x-1">
      →
    </span>
  </a>
</div>

                </div>
            </section>



            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                       Looking to reduce development costs and improve overall efficiency?
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                      Talk to our Power Apps experts to schedule a free demo.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Get Started Now
                    </a>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Have you got<br />questions about Microsoft Power Apps?
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
