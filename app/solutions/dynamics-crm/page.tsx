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
  question: "What is Microsoft Dynamics CRM used for?",
  answer:
    "Microsoft Dynamics CRM is used to manage customer relationships, automate sales, marketing, and service processes, and provide actionable insights to improve business performance."
},
{
  question: "Is Dynamics 365 a CRM or ERP?",
  answer:
    "Dynamics 365 is a suite that includes both CRM and ERP applications, enabling businesses to manage sales, customer service, operations, finance, and other core processes in one platform."
},
{
  question: "Is Microsoft Dynamics CRM free?",
  answer:
    "No, Microsoft Dynamics CRM is not free. Pricing depends on the plan selected and the number of users, with options for Professional, Enterprise, and additional modules."
},
{
  question: "What are the main areas in Dynamics CRM?",
  answer:
    "The main areas include Sales, Customer Service, Field Service, Marketing (Customer Insights – Journeys), and Project Service Automation, all integrated for a unified experience."
},
{
  question: "What is Dynamics CRM known for in 2022?",
  answer:
    "In 2022, Dynamics CRM is known for its AI-driven insights, seamless integration with Microsoft 365, Copilot-powered automation, and ability to improve sales, service, and marketing efficiency."
},
{
  question: "Does Microsoft Dynamics CRM work on the web?",
  answer:
    "Yes, Dynamics CRM is fully web-based, accessible via modern browsers, and also provides mobile applications for iOS and Android devices."
},
{
  question: "What is Microsoft Dynamics CRM online?",
  answer:
    "Dynamics CRM Online is the cloud-hosted version of Microsoft Dynamics CRM, offering scalable deployment, automatic updates, and remote access without the need for on-premises infrastructure."
},
{
  question: "Does Microsoft Dynamics 365 CRM support customizations?",
  answer:
    "Yes, Dynamics 365 CRM supports extensive customizations, including custom fields, forms, workflows, and apps, allowing businesses to tailor the system to their processes."
},
{
  question: "Does Microsoft Dynamics 365 CRM support integrations?",
  answer:
    "Absolutely. It integrates seamlessly with Microsoft 365 apps, Power BI, Power Automate, third-party applications, and industry-specific solutions to streamline operations."
},
{
  question: "Is it easy to implement Microsoft Dynamics 365 CRM for any business?",
  answer:
    "Yes, Dynamics 365 CRM can be implemented for small, medium, and large businesses. With certified partners, deployment can be quick and tailored to industry-specific requirements."
},
{
  question: "Does industry-specific application are available with Microsoft Dynamics CRM?",
  answer:
    "Yes, Dynamics 365 CRM offers industry-specific applications and templates for sectors like retail, finance, manufacturing, healthcare, and more to meet specialized business needs."
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





export default function DynamicsCRMPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Microsoft <br />Dynamics CRM
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Improve & Drive Surpassing Customer Experience with Microsoft Dynamics CRM
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
                                src="/solutions/CRM-header-banner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* NEW PARTNER SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                            What Is Microsoft Dynamics CRM?
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Microsoft Dynamics CRM (currently known as Dynamics 365 Customer Engagement) is a customer relationship management
                            software which enables businesses to streamline their processes from sales & marketing to service divisions to customers
                            and delivery. Implementing Microsoft's CRM solution can help brands to strengthen their customer relationship as well as
                            support customer retention. Enterprises can bring process automation and data centralization that enables transformation
                            throughout the organizational flow. And now, with the integration of the AI-powered assistant called Copilot, managing
                            processes with Dynamics 365 CRM has become easier than ever.
                        </p>
                    </div>

                    {/* CONTENT GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/solutions/CRMbanner.avif"
                                alt="Microsoft Dynamics 365 Upgrade"
                                className="w-[600px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>

                            <h2 className="text-xl font-bold text-[#1F2A44] mb-3">
                                Why Choose Microsoft Dynamics CRM?
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                If you want to enable sales & service automation, efficiently connect & engage customers, and improve your customer
                                anticipations, choose a Microsoft Dynamics CRM solution. With the help of Dynamics CRM, you can leverage Copilot powered
                                AI efficiency and IoT connected data-driven practices, streamline your enterprise practices, build & sustain customer
                                relationships, increase productivity, and impact your revenue model.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                With the help of Dynamics CRM, you can seamlessly align your sales & marketing, improve team collaboration, and ensure
                                the success of your digital campaigns. Moreover, you can automate data, streamline tasks, understand your customers’ behavior,
                                elevate sales level, and bring transparency in your entire sales process with real-time efficiency to maximize your growth potential.
                            </p>


                        </div>


                    </div>
                </div>
            </section>



            {/* PARTNER HIGHLIGHT SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
                        Microsoft Dynamics CRM Benefits
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                      

                            {/* LEFT ACCORDION */}
                            <div className="space-y-4">

                                {/* ITEM 1 */}
                                <details open className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons_simplify-marketing.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Simplify Sales & Marketing
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Streamline sales and marketing activities through a unified platform,
                                        helping teams collaborate efficiently and close deals faster.
                                    </p>
                                </details>

                                {/* ITEM 2 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons_maximise-sales.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Maximize Sales
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Increase revenue by identifying high-value leads, improving pipeline
                                        visibility, and optimizing sales strategies.
                                    </p>
                                </details>

                                {/* ITEM 3 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/Build-and-Manage-Opportunities.png" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Build & Manage Opportunities
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Effectively create, track, and manage sales opportunities while
                                        aligning efforts with business goals.
                                    </p>
                                </details>

                                {/* ITEM 4 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/Get-Real-time-Performance-Data.png" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Get Real-Time Performance Data
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Access real-time analytics and reports to monitor performance and
                                        make informed, data-driven decisions.
                                    </p>
                                </details>

                            </div>

                            {/* RIGHT ACCORDION */}
                            <div className="space-y-4">

                                {/* ITEM 5 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/icons_customer-relation.svg" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Build Sustainable Customer Relationships
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Strengthen customer relationships by maintaining consistent,
                                        personalized, and meaningful interactions.
                                    </p>
                                </details>

                                {/* ITEM 6 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/AvaiL-Actionable-Insights.png" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Avail Actionable Insights
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Leverage intelligent insights to identify trends, uncover
                                        opportunities, and improve business outcomes.
                                    </p>
                                </details>

                                {/* ITEM 7 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/Track-Customer-Interaction.png" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Track Customer Interactions
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Monitor every customer interaction across touchpoints to ensure
                                        consistency and better engagement.
                                    </p>
                                </details>

                                {/* ITEM 8 */}
                                <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <img src="/solutions/Centralise-Communication-Channels.png" alt="" className="w-8 h-8" />
                                            <h4 className="font-semibold text-[#1F2A44]">
                                                Centralise Communication Channels
                                            </h4>
                                        </div>
                                        <span className="text-xl group-open:hidden">+</span>
                                        <span className="text-xl hidden group-open:block">−</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                        Centralize all communication channels to ensure seamless
                                        collaboration and unified customer conversations.
                                    </p>
                                </details>

                            </div>
                            </div>



                      
                    </div>
            </section>
            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                       Connect With Our Experts Today
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                       Let's talk about your pain areas and drive your system health check to know your current system requirements.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Schedule Demo
                    </a>

                </div>
            </section>

            <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
        Microsoft Dynamics CRM Applications
      </h2>
    </div>

    {/* ROW 1 – Image Left | Text Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <img
          src="/solutions/dynamics-365-sales.avif"
          alt="Dynamics 365 for Sales"
          className="w-full rounded-2xl "
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
          Dynamics 365 for Sales
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Maximize your sales capabilities by bringing transparency and
          efficiency throughout your sales practices. Engage with your
          customers wherever they are in real-time, build sustainable
          customer relationships, and accelerate your sales. Streamline
          your sales data, collaborate seamlessly, and empower your
          workforce to adapt quickly. With built-in Copilot integration,
          speed up processes like record summarisation, meeting
          preparation, email assistance, and more.
        </p>

        <a
          href="/solutions/sales"
          className="text-red-600 font-semibold inline-block hover:text-red-700 transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* ROW 2 – Text Left | Image Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
          Dynamics 365 for Customer Service
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Support your customers with real-time efficiency and deliver a
          personalised experience. Empower your teams with embedded tools
          to collaborate and drive optimal experiences. Proactively manage
          customer issues using AI insights powered by Microsoft Copilot
          and IoT-connected devices. Copilot helps with rapid response
          generation, case summarisation, and virtual agent creation.
        </p>

        <a
          href="/solutions/customer-service"
          className="text-red-600 font-semibold inline-block hover:text-red-700 transition"
        >
          Learn More
        </a>
      </div>

      <div>
        <img
          src="/solutions/dynamics-for-customer-service.avif"
          alt="Dynamics 365 Customer Service"
          className="w-full rounded-2xl "
        />
      </div>
    </div>

    {/* ROW 3 – Text Left | Image Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
          Dynamics 365 Customer Insights – Journeys
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Previously known as Microsoft Dynamics Marketing, Dynamics 365
          Customer Insights – Journeys empowers marketing teams to plan and
          execute campaigns using Excel and Power BI. Measure campaign
          performance across channels, engage customers one-to-one, build
          your sales pipeline, and demonstrate marketing ROI in real-time.
          Copilot enables real-time campaign creation, segment building,
          lead qualification, and profile summarisation.
        </p>

        <a
          href="/solutions/marketing"
          className="text-red-600 font-semibold inline-block hover:text-red-700 transition"
        >
          Learn More
        </a>
      </div>

      <div>
        <img
          src="/solutions/Project-Service-Automation.avif"
          alt="Dynamics 365 Customer Insights Journeys"
          className="w-full rounded-2xl "
        />
      </div>
    </div>

    {/* ROW 4 – Image Left | Text Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="/solutions/FieldServicebanner (1).avif"
          alt="Dynamics 365 Field Service"
          className="w-full rounded-2xl "
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
          Dynamics 365 Field Service
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          An all-inclusive solution, Dynamics 365 Field Service simplifies
          field service operations and boosts productivity and customer
          satisfaction. It includes scheduling, resource management, and
          real-time communication. With IoT integration, predictive
          maintenance, and mobile capabilities, field professionals can
          deliver proactive service anywhere. Built-in Copilot assists with
          scheduling optimization, knowledge access, and customer insights.
        </p>

        <a
          href="/solutions/field-service"
          className="text-red-600 font-semibold inline-block hover:text-red-700 transition"
        >
          Learn More
        </a>
      </div>
    </div>

  </div>
</section>

            {/* NEW PARTNER SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <div className="max-w-4xl mx-auto text-center mb-14">
                    </div>

                    {/* CONTENT GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/solutions/microosoft-partner (2).avif"
                                alt="Microsoft Dynamics 365 Upgrade"
                                className="w-[600px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>

                            <h2 className="text-3xl font-bold text-[#1F2A44] mb-3">
                                Why should you choose Dynamics<br/> Square as your Growth Partner?
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                With years of expertise and comprehensive experience, our Dynamics 365 CRM consultants are available to
                                 offer you after sales services regardless of the complexity. Being a trusted partner of 350+ global 
                                 clients, we can help you with Dynamics 365 implementation, upgrade, and support services.
                            </p>
                             <p className="text-gray-600 leading-relaxed mb-6">
                               Dynamics Square has been in the market for more than 12 years and pretty much knows what businesses want 
                               to manage customers along with generating maximum revenue. 


                            </p>
                             <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                       Connect With a CRM Expert Now!
                    </a>


                        </div>


                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                            Have you got<br /> questions about Microsoft Dynamics CRM?
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
