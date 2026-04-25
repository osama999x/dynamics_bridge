'use client';
import React, { useState } from "react";
import PageLayout from '@/app/components/PageLayout';

/* ================= TYPES ================= */
type FaqItemType = {
  question: string;
  answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
  {
  question: "What is Dynamics 365 HR?",
  answer: "Dynamics 365 Human Resources is Microsoft’s cloud-based HR solution that helps organisations manage employee data, payroll integration, benefits, leave, performance, and compliance in one connected system."
},
{
  question: "What is Dynamics 365 Human Resources Self Service?",
  answer: "Dynamics 365 Human Resources Self Service allows employees and managers to handle leave requests, personal data updates, training enrolment, and performance tracking without HR intervention, improving efficiency and transparency."
},
{
  question: "What are the benefits of D365 HR?",
  answer: "D365 HR improves workforce visibility, automates HR processes, supports compliance, enhances employee experiences, and provides analytics for smarter people decisions."
},
{
  question: "Is Dynamics 365 Human Resources free?",
  answer: "No, Dynamics 365 Human Resources is a licensed Microsoft product. Pricing is subscription-based and depends on the number of users and required features."
},
{
  question: "What are the top features of D365 Human Resources?",
  answer: "Key features include payroll integration, benefits and compensation management, leave and absence tracking, employee self-service, performance management, workforce analytics, and AI-powered Copilot assistance."
},
{
  question: "What is the cost of D365 Human Resource Implementation?",
  answer: "Implementation costs vary based on company size, complexity, integrations, and customisation needs. A Microsoft partner like Dynamics Square can provide a tailored estimate."
},
{
  question: "How much time will it take to implement D365 HR?",
  answer: "Implementation typically takes a few weeks to several months depending on business requirements, data migration, integrations, and user training."
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


export default function HumanResourcePage() {
  const [activeTab, setActiveTab] = useState("forrester");
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">

        {/* TEXT CONTAINER */}
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-sm text-gray-600 mb-3">
            Dynamics 365 Human Resources
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
            Create a workplace where people and<br />
           business thrive together
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
           Dynamics 365 for HR combines every process in one platform with the help of AI (Microsoft Copilot) and automation to
            help managers and employees work smarter. Be it payroll or performance tracking, everything runs with greater accuracy 
            and speed. This connected cloud ERP brings employee self-service, predictive insights, and a faster return on investment 
            for organisations seeking stronger HR management. 
          </p>

          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Tell me more →
          </a>

        </div>

        {/* IMAGE FULL WIDTH */}
        <div className="mt-14">
          <img
            src="/solutions/hr-banner.avif"
            alt="Dynamics 365 for Retail"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* NEW TWO-COLUMN SECTION INSIDE HERO */}
        <div className="-mt-20 max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-60">

          {/* LEFT SIDE TEXT */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-[#6b3d6e] mb-6">
              What is Dynamics 365 Human Resources?
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
             Dynamics 365 Human Resources serves as a complete HR management solution from Microsoft that centralises 
             every core function of your workforce in one smart system. The answer to the question: what is Dynamics 365 
             Human Resources, lies in its ability to connect payroll, recruitment, performance, and self-service experiences together.</p>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore More Use Cases →
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:w-1/2">
            <img
              src="/solutions/hr-banner-icon.png"
              alt="Dynamics 365 Finance Overview"
              className="w-60 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>

      </section>



      {/* BUSINESS CHALLENGES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/solutions/hr-side-01.avif"
                alt="Business Challenges"
                className="w-[480px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#6b3d6e]">
               Dynamics 365 Human Resources Implementation: Why Is It Necessary?
              </h3>

              <p className="text-gray-600 leading-relaxed">
               If your organisation faces these challenges, efficiency and employee satisfaction suffer badly.
              </p>

              <p className="text-gray-600 leading-relaxed">
                You need a connected system with AI and automation to transform HR management. This is where Dynamics 365 Human Resources becomes critical.
              </p>

              <p className="text-gray-600 leading-relaxed">
               Organisations using Dynamics 365 Human Resources streamline leave and absence programmes with global compliance, 
               connect payroll providers for accurate reporting, and improve recruitment with LinkedIn Talent Solutions.
              </p>

              <a
                href="/contact-us"
                className="inline-block mt-4 bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Book Your Free Demo!
              </a>
            </div>

          </div>
        </div>
      </section>

     
      {/* CTA SECTION */}
      <section
        className="relative py-20 lg:py-18 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/industries/n-015.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E2F5B]/95 to-[#5B4B8A]/85"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-gray-200 mb-8 leading-relaxed">
             CASE STORY
            </p>

            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-6">
              <span className="text-pink-400">Check out some of our case studies to see how Dynamics 365 has made a difference for our clients.</span>

            </h2>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
            >
              Read Case Story
              <span className="text-lg transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* PARTNERING SECTION UPDATED – HR VERSION */}
<section className="bg-gradient-to-r from-[#F7F5FB] to-[#FFFFFF] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

      {/* LEFT SCROLLABLE CARDS */}
      <div>
        {/* TOP HEADING */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
          Benefits of Dynamics 365 Human Resources
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
          Every strong organisation relies on systems that support both business and people. Dynamics 365 Human Resources creates efficiency, clarity, and better employee experiences across every level of the company.
        </p>

        {/* SCROLLABLE CARDS */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#4B2F7F] scrollbar-track-gray-200 scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#361f5b] transition-colors duration-300">
          {[
            {
              title: "Scale Without Barriers",
              text: "Managing expanding teams, new locations, and global compliance rules can feel overwhelming. Dynamics 365 Human Resources automates routine administration, connects payroll and benefits, and gives managers full visibility to scale confidently."
            },
            {
              title: "Improve Cash Flow & Control HR Costs",
              text: "Financial blind spots in payroll or benefits directly affect profitability. With integrated payroll systems, budget tracking, and Copilot-driven forecasts, you always see how compensation, taxes, and expenses impact your business."
            },
            {
              title: "Self-Service for Employees & Managers",
              text: "Employees get quick access to leave, training, and performance data. With HR self-service inside Microsoft Teams, admin workload drops while satisfaction rises."
            },
            {
              title: "Automate HR Tasks & Save Hours",
              text: "Manual HR administration consumes valuable time. Automating payroll, absence tracking, and compliance frees HR teams to focus on retention and employee growth."
            },
            {
              title: "Make Decisions with Real-Time Insights",
              text: "With real-time dashboards, workforce analytics, and predictive AI, managers adjust compensation, recruitment, or benefits using data instead of guesswork."
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">{card.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
          Connected HR systems improve compliance and productivity while reducing HR costs across the organisation. Companies using Dynamics 365 report higher retention and better employee satisfaction.
        </p>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Claim Your Free Consultation!
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative">
          <img
            src="/solutions/hr-side-08.avif"
            alt="Dynamics 365 Human Resources"
            className="w-[420px] h-[520px] object-cover rounded-xl"
          />
        </div>
      </div>

    </div>
  </div>
</section>


     {/* DYNAMICS 365 HUMAN RESOURCES MODULES SECTION */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TOP HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
      Modules in Dynamics 365 Human Resources
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed text-base">
      HR requires more than payroll or leave tracking. With Dynamics 365 Human Resources, every function connects in one place for a complete view of people, costs, and compliance.
    </p>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
      Here is what Dynamics 365 covers:
    </p>

    {/* MODULE CARDS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          img: "/solutions/hr-banner-icon-01.png",
          title: "Payroll and Finance",
          text: "Integrated payroll with providers, real-time cost tracking, and compliance-ready reporting."
        },
        {
          img: "/solutions/hr-banner-icon-02.png",
          title: "Benefits and Compensation",
          text: "Create flexible benefits packages, manage enrolment, and roll out company-wide compensation changes."
        },
        {
          img: "/solutions/hr-banner-icon-03.png",
          title: "Recruiting Add-On",
          text: "Track applicants, automate interviews, and connect with LinkedIn Talent Solutions for faster hiring."
        },
        {
          img: "/solutions/hr-banner-icon-04.png",
          title: "Employee Self-Service",
          text: "Leave requests, training enrolment, and performance tracking via Teams and mobile access."
        },
        {
          img: "/solutions/hr-banner-icon-05.png",
          title: "Performance and Training",
          text: "Set goals, track feedback, and monitor certifications to improve employee growth and retention."
        },
        {
          img: "/solutions/hr-banner-icon-06.png",
          title: "Workforce Insights and Analytics",
          text: "Power BI dashboards and embedded analytics for smarter workforce planning."
        },
        {
          img: "/solutions/hr-banner-icon-07.png",
          title: "Service and Case Management",
          text: "Automate scheduling, track HR cases in real time, and monitor service agreements."
        },
        {
          img: "/solutions/hr-banner-icon-08.png",
          title: "Leave and Absence Management",
          text: "Create compliant leave programs that adapt to global regulations and keep employees informed."
        },
        {
          img: "/solutions/hr-banner-icon-09.png",
          title: "Microsoft Copilot and AI Agents",
          text: "AI-driven predictions, chat assistance, and workforce insights to help HR teams act faster."
        }
      ].map((module, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={module.img}
            alt={module.title}
            className="w-16 h-16 mb-4"
          />
          <h4 className="text-lg font-semibold text-[#6b3d6e] mb-2 text-center">
            {module.title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            {module.text}
          </p>
        </div>
      ))}

    </div>

    {/* BOTTOM CTA */}
    <p className="text-gray-600 max-w-3xl mx-auto mt-12 leading-relaxed text-base">
      Dynamics 365 Human Resources payroll and every other module work as part of one connected system.
    </p>

    <a
      href="/contact-us"
      className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
    >
      Book Your Free Demo Today
      <span className="text-lg transform group-hover:translate-x-1 transition-transform">
        →
      </span>
    </a>

  </div>
</section>

      {/* MICROSOFT COPILOT IN BUSINESS CENTRAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TOP HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
           Copilot in Dynamics 365 Human Resources
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Imagine an HR system that acts as a partner instead of a tool. Copilot in Dynamics 365 Human Resources brings
             AI-powered automation, smart insights, and instant assistance to every stage of HR management. No wasted time,
              only seamless efficiency.
          </p>

          {/* CENTER IMAGE */}
          <div className="flex justify-center mb-16">
            <img
              src="/solutions/solution-new-six-img.avif"
              alt="Copilot in Business Central"
              className="w-[900px] max-w-full h-auto object-contain"
            />
          </div>

      {/* FEATURE CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {[
    {
      title: "Transform the Way HR Works",
      detail: "Copilot automates repetitive tasks, giving HR teams time to focus on people, not paperwork."
    },
    {
      title: "Get Answers in Seconds",
      detail: "No need to search through reports. Ask Copilot, and the information appears instantly."
    },
    {
      title: "Support Recruiting and Employee Growth",
      detail: "Copilot helps create and refine job descriptions, performance reviews, and employee communications."
    },
    {
      title: "Empower Managers and Employees",
      detail: "From leave requests to payroll cheques, Copilot acts as an AI agent in Dynamics 365 HR to simplify processes."
    },
    {
      title: "Spot Trends Before They Impact Performance",
      detail: "Copilot identifies workforce patterns and risks early so HR leaders can act with confidence."
    },
    {
      title: "Strengthen Decision-Making with Predictive Insights",
      detail: "Predictive analytics forecast workforce needs, helping leaders plan accurately."
    }
  ].map((item, idx) => (
    <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">{item.title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
    </div>
  ))}
</div>

{/* CTA SECTION */}
<div className="text-center mt-8">
  <p className="text-gray-600 mb-4">
    Ready to experience smarter HR management? See Copilot in action today.
  </p>

  <a
    href="/contact-us"
    className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
  >
    Book a Demo!
  </a>
</div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="relative py-20 lg:py-18 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/industries/n-015.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E2F5B]/95 to-[#5B4B8A]/85"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">

            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-6">
              <span className="text-pink-400">Start Your HR Transformation Now</span>

            </h2>
             <p className="text-gray-200 mb-8 leading-relaxed">
              Every HR delay affects payroll, compliance, and talent. Start a Dynamics 365 Human Resources trial with expert 
              guidance for faster processes, engaged employees, and confident decision-making.
            </p>


            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
            >
             Experience HR in Action Today
              <span className="text-lg transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

          </div>
        </div>
      </section>

     

      {/* PRICING SECTION */}
<section className="bg-[#f9f7fb] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CONTENT */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
        Dynamics 365 Human Resources Pricing
      </h2>

      <p className="text-gray-600 mb-3">
        Microsoft keeps the pricing of Dynamics 365 Human Resources transparent and affordable,
        helping organisations manage workforce costs while improving employee satisfaction.
      </p>
    </div>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">
          Dynamics 365 Human Resources
        </h3>

        <p className="text-gray-600 text-sm mb-6 flex-grow">
          Includes full application capabilities such as payroll integration,
          benefits management, leave tracking, and performance monitoring.
        </p>

        <p className="text-2xl font-bold text-blue-600 mb-6">
          £103.80 <span className="text-lg text-gray-600">/user/month, paid yearly</span>
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
          Contact us
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Paid yearly, excluding VAT.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">
          Dynamics 365 Human Resources Self Service
        </h3>

        <p className="text-gray-600 text-sm mb-6 flex-grow">
          Provides employee and manager self-service features for requests,
          training, and performance tracking.
        </p>

        <p className="text-2xl font-bold text-blue-600 mb-6">
          £3.10 <span className="text-lg text-gray-600">/user/month, paid yearly</span>
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
          Connect With Us to Get Started
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Paid yearly, excluding VAT.
        </p>
      </div>

    </div>

  </div>
</section>

{/* DYNAMICS SQUARE HR SERVICES SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-4">
        Dynamics Square Services for Dynamics 365 Human Resources
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Deploying Dynamics 365 Human Resources effectively requires the right partner. 
        At Dynamics Square, we provide tailored services that ensure you gain the full 
        value of your HR investment.
      </p>
    </div>

    {/* SERVICE CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          img: "/solutions/hr-banner-icon-11.png",
          title: "Dynamics 365 HR Implementation",
          text: "Seamless deployment of HR capabilities, aligned with your business processes."
        },
        {
          img: "/solutions/hr-banner-icon-12.png",
          title: "Dynamics 365 HR Support",
          text: "Continuous assistance to keep systems optimised and aligned with HR goals."
        },
        {
          img: "/solutions/hr-banner-icon-13.png",
          title: "Payroll Integration",
          text: "Configure and connect Dynamics 365 HR payroll with providers for accurate salary processing and compliance."
        },
        {
          img: "/solutions/hr-banner-icon-14.png",
          title: "Recruiting Add-On",
          text: "Integrate the recruiting add-on with LinkedIn Talent Solutions to attract and hire better talent."
        },
        {
          img: "/solutions/hr-banner-icon-15.png",
          title: "Finance and Supply Chain Integration",
          text: "Extend HR capabilities by linking with Dynamics 365 Finance and Supply Chain Management."
        }
      ].map((card, idx) => (
        <div
          key={idx}
          className="group bg-[#faf9fc] rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-16 h-16 mb-5 transform group-hover:scale-110 transition duration-300"
          />

          <h4 className="text-lg font-semibold text-[#1F2A44] mb-3">
            {card.title}
          </h4>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {card.text}
          </p>

          <a
            href="/contact-us"
            className="inline-block text-red-600 font-semibold no-underline hover:text-red-700 transition transform group-hover:translate-x-1"
            style={{ textDecoration: "none" }}
          >
            Get Started →
          </a>
        </div>
      ))}

    </div>

  </div>
</section>



      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Have you got<br />questions about Human Resources?
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
