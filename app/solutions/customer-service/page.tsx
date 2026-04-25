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
    question: "What is Microsoft Dynamics Customer Service?",
    answer: "Microsoft Dynamics Customer Service is a CRM solution designed to help businesses manage customer interactions, provide consistent support, and enhance customer satisfaction."
  },
  {
    question: "What is Dynamics 365 Customer Service Insights?",
    answer: "Dynamics 365 Customer Service Insights provides actionable analytics and AI-driven recommendations to improve service performance, monitor KPIs, and optimize customer interactions."
  },
  {
    question: "How do I install Dynamics 365 Customer Service?",
    answer: "You can install Dynamics 365 Customer Service from the Dynamics 365 admin center by selecting the Customer Service module and following the guided setup to configure users, queues, and service processes."
  },
  {
    question: "What are the key features of Dynamics 365 Customer Service?",
    answer: "Key features include case management, unified routing, SLAs, knowledge base, AI-powered insights, omnichannel communication, dashboards, and reporting tools."
  },
  {
    question: "What is the difference between D365 Sales and Customer Service?",
    answer: "D365 Sales focuses on managing leads, opportunities, and sales processes, while Customer Service is designed to handle customer support, case management, and service operations to ensure satisfaction and retention."
  },
  {
    question: "What are the benefits of Dynamics 365 Customer Service?",
    answer: "Benefits include faster case resolution, improved customer satisfaction, better agent productivity, data-driven insights, consistent omnichannel experiences, and streamlined service operations."
  },
  {
    question: "How does Dynamics 365 Customer Service CRM help improve customer service?",
    answer: "It centralizes customer data, automates workflows, provides AI-powered insights, and integrates with multiple channels, enabling agents to deliver faster, personalized, and consistent support."
  },
  {
    question: "Can Dynamics 365 Customer Service CRM be customised for specific business needs?",
    answer: "Yes, it is fully customizable to align with your business processes, service levels, workflows, and integration requirements with other Microsoft or third-party applications."
  },
  {
    question: "What is the role of the knowledge base in Dynamics 365 Customer Service CRM?",
    answer: "The knowledge base stores relevant information, FAQs, and procedures, allowing both agents and customers to quickly find solutions, ensuring faster resolutions and consistent service delivery."
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





export default function CustomerServicePage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Dynamics 365<br /> Customer Service
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Enhance the Customer Experience, Empower your Agents using AI, and Collect Customer Insights to Offer a
                Personalised Experience With Microsoft Dynamics 365 Customer Service.
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
                src="/solutions/customer-service-banner.avif"
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
            What is dynamics 365 Customer Service?
          </h2>

          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-6">
            Microsoft Dynamics 365 Customer Service is a powerful solution that empowers businesses to
            offer an exceptional customer experience. Dynamics 365 Customer Service offers an omnichannel
            experience to the agents so that they can avail of real-time insights, communicate with customers
            using channels, collect necessary data, and get a 360-degree view of customer issues.
          </p>
          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto ">
            It lets you analyse the data insights to pitch customers with personalised offers and services. This will
            retain customers in the long run while offering an optimum level of customer satisfaction. Being a part of
            Microsoft Dynamics CRM  solutions, it can be customised to align with unique business needs. Also, Microsoft
            allows seamless integration with native and third-party applications to enhance the overall capability of D365
            Customer Service.
          </p>

        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">

          {/* TOP HEADING AND PARAGRAPHS */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
              Why does a Business need Dynamics 365 CRM Customer Service?
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              In today's competitive business landscape, retaining customers is crucial for survival and growth. Dynamics 365 CRM Customer Service empowers businesses to foster lasting customer relationships that drive business success.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Dynamics 365 CRM Customer Service breaks down communication barriers by unifying customer interactions across various channels, including phone, email, chat, and social media, providing a consistent and personalised customer experience.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              With Dynamics 365 CRM Customer Service, businesses can align customer interactions with their core values, offerings, and service principles, ensuring that every touchpoint reinforces the brand promise and fosters customer loyalty.
            </p>
            <p className="text-gray-600 text-lg">
              By analysing customer data and preferences, Dynamics 365 CRM Customer Service empowers businesses to anticipate customer needs, deliver personalised recommendations, and offer tailored services that exceed customer expectations, leading to increased customer retention and loyalty.
            </p>
          </div>

          {/* LEFT + RIGHT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE - BULLET POINTS */}
            <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg">
              <li>Connects all communication channels, like text, call, and chat, for collected insights.</li>
              <li>Tracks customers throughout the issue resolution process.</li>
              <li>Records all communication and interaction with the customer.</li>
              <li>Collects data from the knowledge base and shares it with customers whenever required.</li>
              <li>Comes with unified routing features that let you efficiently route items.</li>
              <li>Built with AI to offer you accurate and predictive insights.</li>
              <li>Supercharge agent performance using a unified data dashboard.</li>
              <li>Enhances the overall productivity of the agent.</li>
              <li>Optimises resources to maximise the ROI.</li>
              <li>Automates recurring and manual processes to increase efficiency.</li>
            </ul>


            {/* RIGHT SIDE - IMAGE */}
            <div className="flex justify-center">
              <img
                src="/solutions/microosoft-partner (1).avif"
                alt="Dynamics 365 Customer Service"
                className="rounded-xl max-w-full h-auto"
              />
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
                Dynamics 365 Customer <br/>Service Features
              </h2>
              <p className="text-lg text-gray-600">
                Some of the unique and most important features are listed below:
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* CARD 1 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Omnichannel Experience
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Get a unified view of customer data and interactions across multiple modes of communication on a common dashboard. It will allow you to track each customer and their activity to offer consistent customer experiences.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Get AI-Powered Insights
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  Dynamics 365 Customer Service is built using the latest technology that includes AI, BI, and ML to perform a deep 
                  analysis of each customer movement. 
                </p>
              </div>

              {/* CARD 3 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  In-Built Knowledge Base
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  It comes with a knowledge base that stores the information you need to offer support to the customer. Both the customer and the customer service agent can access this knowledge base to get the desired information.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
                <h3 className="text-xl font-semibold group-hover:hidden">
                  Unified Routing & SLAs
                </h3>
                <p className="text-gray-600 hidden group-hover:block">
                  D365 Customer Service comes with unified routing that transfers customer queries to the agent based on qualification, 
                  availability, workload, and skill set.
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
           Dynamics 365 Customer Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
           Dynamics 365 Customer Service will revolutionise the way you deal with your agents, empowering 
           them to meet customer satisfaction at all levels. 
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

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

            {/* CARD 2 */}
            <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <img
                src="/solutions/outbound.png"
                alt="Upgrade"
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Upgrade</h3>
              <p className="text-gray-700 mb-6">
                Uplift your business deliveries by upgrading your system with
                Microsoft’s Sales Management Solution.
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
      Copilot in Dynamics 365 Customer Service
    </h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
      Copilot in Dynamics 365 Customer Service transforms how teams deliver support. Simplifying tasks and providing AI-driven insights enable quicker resolutions and better customer experiences. With Copilot, customer service becomes more intuitive and impactful, empowering your team to focus on what matters most — delighting your customers.
    </p>
  </div>

  {/* 2x2 ITEMS GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

    {/* ITEM 1 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">Instant Case Summaries</h4>
        <p className="text-gray-600 leading-relaxed">
          Copilot summarises case details and customer interactions, giving agents all the context they need to resolve issues efficiently and confidently.
        </p>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">Suggested Responses</h4>
        <p className="text-gray-600 leading-relaxed">
          It offers helpful, pre-drafted responses for common queries, allowing agents to reply faster while maintaining a professional and empathetic tone.
        </p>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">Knowledge Article Generation</h4>
        <p className="text-gray-600 leading-relaxed">
          Copilot helps turn closed cases into knowledge-based articles, so your team always has the most up-to-date information to help customers.
        </p>
      </div>
    </div>

    {/* ITEM 4 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">Sentiment Analysis Insights</h4>
        <p className="text-gray-600 leading-relaxed">
          It evaluates customer sentiment during interactions, helping agents adjust their approach to foster positive experiences and stronger relationships.
        </p>
      </div>
    </div>

  </div>
</section>


      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">

          {/* SECTION HEADING (NO BG CHANGE) */}
          <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
           Dynamics 365 Customer Service Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Dynamics 365 Customer Service Pricing is simple and cost-effective for all businesses. It comes in two plans - Dynamics 365
             Customer Service Professional and Enterprise. Below, you can do a Dynamics 365 Customer Service Professional vs Enterprise
              comparison to analyse its features and capabilities and find the best plan that suits you.Also, you can avail yourself of
               the Microsoft Dynamics 365 Customer Service trial to know its capabilities based on your unique business requirements.
          </p>
{/* PRICING CARDS */}
<div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">

  {/* CARD 1 - Free Trial */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Customer Service<br />Free Trial
      </h3>
    </div>
    <p className="text-4xl font-bold text-red-600 mb-4">£0</p>
    <p className="text-gray-600 mb-4">
      Deliver outstanding service that meets and exceeds customer expectations.
    </p>
    <p className="text-red-600 font-semibold">
      Try for Free
    </p>
  </div>

  {/* CARD 2 - Professional */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Customer Service<br />Professional
      </h3>
    </div>
    <p className="text-4xl font-bold text-red-600 mb-2">£38.40</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
    <div className="flex flex-col space-y-2 text-gray-600">
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Case management</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Knowledge management</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>SLAs</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Templates</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Unlimited number of users</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Additional Capabilities</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Personal Views and Dashboards</span>
      </div>
    </div>
  </div>

  {/* CARD 3 - Enterprise */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Customer Service<br />Enterprise
      </h3>
    </div>
    <p className="text-4xl font-bold text-red-600 mb-2">£80.70</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
    <div className="flex flex-col space-y-2 text-gray-600">
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>All features of the Professional set</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Unified service desk</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Embedded intelligence</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Context-driven suggestions</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Service gamification</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Customization and extensibility</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Analytics and KPI reporting</span>
      </div>
    </div>
  </div>

  {/* CARD 4 - Premium */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Customer Service<br />Premium
      </h3>
    </div>
    <p className="text-4xl font-bold text-red-600 mb-2">£149.90</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
    <div className="flex flex-col space-y-2 text-gray-600">
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Transform customer engagement with an integrated contact center and CRM service solution powered by generative AI</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>All features of the Professional set</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Unified service desk</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Embedded intelligence</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Service gamification</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-600 font-bold mt-1">✓</span>
        <span>Customization and extensibility</span>
      </div>
    </div>
  </div>

</div>


          {/* CTA BUTTON */}
          <div className="text-center">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
            >
              Get Personalised Pricing Now!
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
            Empower Exceptional Customer Service: Discover<br/> the Power of Dynamics 365 Customer Service
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
          Transform customer interactions into exceptional experiences with Dynamics 365 Customer
           Service consultants, the unified solution that empowers agents to deliver personalized 
           support anytime, anywhere. 
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            Schedule a Free Demo Today!
          </a>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Have you got<br />questions about Microsoft Dynamics Customer?
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
