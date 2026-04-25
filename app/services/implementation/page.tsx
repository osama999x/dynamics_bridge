'use client';
import PageLayout from '@/app/components/PageLayout';
import { useEffect, useState } from 'react';

/* ================= TYPES ================= */
type FaqItemType = {
  question: string;
  answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
 {
    question: "What is Dynamics 365 implementation?",
    answer:
      "Dynamics 365 implementation involves configuring, customizing, and deploying Microsoft Dynamics 365 to align with your business processes."
  },
  {
    question: "How long does a Dynamics 365 implementation take?",
    answer:
      "The timeline depends on project scope, but typically ranges from a few weeks to several months."
  },
  {
    question: "Do you provide post-implementation support?",
    answer:
      "Yes, we offer ongoing support, optimization, and training after deployment."
  },
  {
    question: "Can Dynamics 365 be customized for my business?",
    answer:
      "Absolutely. Dynamics 365 is highly customizable to meet specific business needs."
  },
  {
    question: "What are the key benefits of Dynamics 365?",
    answer:
      "It streamlines business processes, enhances data insights, improves collaboration, and increases overall efficiency."
  },
  {
    question: "Which modules are included in Dynamics 365?",
    answer:
      "Modules include Sales, Customer Service, Field Service, Finance, Supply Chain, Human Resources, and more depending on your plan."
  },
  {
    question: "Is Dynamics 365 cloud-based or on-premises?",
    answer:
      "Dynamics 365 is primarily cloud-based, but on-premises options are also available for certain modules."
  },
  {
    question: "How secure is Dynamics 365?",
    answer:
      "Microsoft ensures enterprise-grade security with data encryption, compliance certifications, and regular updates."
  },
  {
    question: "Can Dynamics 365 integrate with other software?",
    answer:
      "Yes, it supports integration with Microsoft products like Teams, Power BI, Office 365, as well as third-party applications."
  },
  {
    question: "Do you provide training for Dynamics 365 users?",
    answer:
      "Yes, we offer user training sessions and documentation to help your team get the most out of Dynamics 365."
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



//cards icons
const MicrosoftIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64">
    <rect x="8" y="8" width="20" height="20" fill="#F25022" />
    <rect x="36" y="8" width="20" height="20" fill="#7FBA00" />
    <rect x="8" y="36" width="20" height="20" fill="#00A4EF" />
    <rect x="36" y="36" width="20" height="20" fill="#FFB900" />
  </svg>
);

const TeamIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <circle cx="22" cy="24" r="8" stroke="#E11D48" strokeWidth="3" />
    <circle cx="42" cy="24" r="8" stroke="#1F2A44" strokeWidth="3" />
    <path d="M10 48c2-8 24-8 26 0" stroke="#E11D48" strokeWidth="3" />
    <path d="M28 48c2-8 24-8 26 0" stroke="#1F2A44" strokeWidth="3" />
  </svg>
);

const SupportIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <path d="M16 32v-6c0-9 7-16 16-16s16 7 16 16v6"
      stroke="#1F2A44" strokeWidth="3" />
    <rect x="10" y="32" width="8" height="14" rx="4" fill="#E11D48" />
    <rect x="46" y="32" width="8" height="14" rx="4" fill="#E11D48" />
  </svg>
);

const CostIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="28" stroke="#E11D48" strokeWidth="3" />
    <path d="M32 18v28" stroke="#1F2A44" strokeWidth="3" />
    <path d="M24 26c0-4 16-4 16 0s-16 4-16 8 16 4 16 8-16 4-16 0"
      stroke="#1F2A44" strokeWidth="3" fill="none" />
  </svg>
);

const CustomizeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <rect x="10" y="10" width="44" height="44" rx="10"
      stroke="#E11D48" strokeWidth="3" />
    <circle cx="32" cy="32" r="6" stroke="#1F2A44" strokeWidth="3" />
    <path d="M32 20v24M20 32h24" stroke="#1F2A44" strokeWidth="3" />
  </svg>
);

const FlexibleIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <path d="M12 32c0-11 9-20 20-20h8"
      stroke="#1F2A44" strokeWidth="3" />
    <path d="M52 32c0 11-9 20-20 20h-8"
      stroke="#E11D48" strokeWidth="3" />
  </svg>
);


const steps = [
  {
    title: 'Analysis Phase',
    icon: '/services/Component-1-icon.svg',
    text:
      'Before we begin, we listen to your project ideation. \
   We understand your current processes and workflows. \
   Our experts analyze business challenges and goals. \
   We assess how Dynamics 365 fits your operations. \
   This ensures improved efficiency and smarter practices.',
  },
  {
    title: 'Design Phase',
    icon: '/services/Component-2-icon.svg',
    text:
      'We design a solution architecture tailored to your needs. \
   Workflows are aligned with your business objectives. \
   Our approach ensures scalability and long-term growth. \
   Performance is optimized across all business processes. \
   This delivers a reliable and future-ready solution.',
  },
  {
    title: 'Development Phase',
    icon: '/services/Component-3-icon.svg',
    text:
      'Our experts configure Dynamics 365 solutions precisely. \
   We customize features to match your business needs. \
   Development follows Microsoft best practices strictly. \
   Quality, security, and performance are always ensured. \
   This results in a stable and scalable solution.',

  },
  {
    title: 'Deployment Phase',
    icon: '/services/Component-4-icon.svg',
    text:
      'Our experts configure Dynamics 365 solutions with precision. ' +
      'We customize features to align perfectly with your business needs. ' +
      'Development follows Microsoft best practices and standards. ' +
      'Quality, security, and performance are consistently ensured. ' +
      'This results in a stable, scalable, and future-ready solution.',

  },
  {
    title: 'Post-Go-Live Support',
    icon: '/services/Component-5-icon.svg',
    text:
      'After launch, we provide continuous system support and monitoring. ' +
      'We deliver refinements based on real user feedback. ' +
      'Ongoing training helps users adapt quickly and confidently. ' +
      'Performance, security, and stability are consistently optimized. ' +
      'This ensures long-term adoption and sustained business value.',

  },
];

function MethodologyIconSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* HEADING */}
      <h2 className="text-4xl font-bold text-[#1F2A44] mb-6 -mt-6">
        Our Dynamics 365 Implementation Methodology
      </h2>

      <p className="text-gray-600 leading-relaxed max-w-2xl mb-12">
        We adapt standard yet custom approach by embracing Microsoft's Sure Step
        Methodology to streamline your business processes, ensuring maximum
        security and transparency.
      </p>

      {/* ICONS */}
      <div className="flex gap-8 mb-12 items-center">
        {steps.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`cursor-pointer transition-all duration-300
        ${active === index ? 'scale-110' : 'opacity-70 hover:opacity-100'}
      `}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* ACTIVE CONTENT */}
      <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
        {steps[active].title} </h3> <p className="text-gray-600 leading-relaxed max-w-md">
        {steps[active].text} </p> </div>);
}


export default function ImplementationPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Dynamics 365 <br /> Implementation Services
              </h1>

              <p className="text-red-600 font-semibold text-lg mb-3">
                Partner with the most experienced Dynamics 365 implementation experts
              </p>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Don't let outdated systems hinder your growth. Choose us for reliable
                Dynamics 365 implementation services. A proper implementation ensures
                long-term success and helps you unlock real business value.
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Talk to Expert
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end mt-10">
              <img
                src="/services/implimenation-service-banner.avif"
                alt="Dynamics 365 Implementation"
                className="w-[680px] max-w-full h-auto object-contain translate-y-6"
              />
            </div>
          </div>

          {/* 🔽 CENTERED CONTENT (UPDATED) */}
          <div className="mt-24 flex justify-center">
            <div className="max-w-4xl text-center">

              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Implementation of Microsoft Dynamics 365 ERP and CRM Solutions
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                To ensure a successful implementation, it is crucial to choose a
                domain-specific solution, leverage modernized methodologies, and
                collaborate with a trustworthy Dynamics 365 implementation partner
                like Dynamics Square.
              </p>

              <p className="text-gray-600 leading-relaxed">
                An ideal partner needs to possess deep industry expertise, a refined
                skill set, and a proven ability to deliver high-quality results within
                the defined time frame and budget, while ensuring seamless integration,
                scalability, and long-term business value.
              </p>

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
                src="/services/microosoft-partner.avif"
                alt="Microsoft Dynamics 365 Implementation Partner"
                className="w-[600px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Microsoft Dynamics 365 <br /> Implementation Partner
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Experts at Dynamics Square - an authorized Microsoft Gold Partner have the proficiency
                to understand your complex business requirement and undertake challenges involved to deliver
                highly customized, process-integrated, and profitability-driven implementation.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                We ensure highly embedded implementation practices whether to support your ERP needs,
                CRM practices, finance operations, project automation respectively, and even your entire
                integrated business needs with a single unified solution.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* DOMAIN-SPECIFIC IMPLEMENTATION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
              <img
                src="/services/Dynamics-365-overview.svg"
                alt="Microsoft Dynamics 365 Implementation Partner"
                className="w-[450px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Delivering Domain-Specific & Agile Implementation Approach
              </h2>

              {/* PARAGRAPH PINK SHADE */}
              <div className="rounded-2xl p-6 mb-12
          bg-gradient-to-b from-white via-[#FFF5F6] to-[#FFE9EC]">

                <p className="text-gray-600 mb-4 leading-relaxed">
                  A successful Dynamics 365 implementation involves technical competence,
                  industry-specific knowledge, and a flexible approach to changing business needs.
                  We achieve seamless integration, minimal disruption, and faster time-to-value
                  with domain-driven strategies and adaptable approaches.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Our agile implementation methodology emphasises iterative development,
                  continuous feedback loops, and scalable solutions that meet your long-term goals.
                  Whether you're in <span className="text-red-600 font-semibold">retail</span>,
                  manufacturing, healthcare, or finance, we tailor every step to improve
                  operational efficiency, user adoption, and business growth.
                </p>
              </div>
            </div>
          </div>

          {/* DOMAIN BLOCKS */}
          <div className="mt-20 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
              {/* Supply Chain */}
              <div className="flex gap-6">
                <img
                  src="/services/supply-chain-icons.svg"
                  className="w-16 h-16 object-contain"
                  alt="Supply Chain"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Supply Chain
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Enabling resilient supply chain operations with AI-powered insights to
                    improve transparency, optimize inventory and logistics, predict disruptions,
                    and accelerate time-to-market.
                  </p>
                </div>
              </div>
              {/* Finance */}
              <div className="flex gap-6">
                <img
                  src="/services/finance-icon.svg"
                  className="w-16 h-16 object-contain"
                  alt="Finance"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Finance
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Unify your finance operations with real-time financial reporting,
                    advanced analytics, and AI-driven insights to automate processes,
                    minimize risks, and manage global financial complexities.
                  </p>
                </div>
              </div>



              {/* Field Service */}
              <div className="flex gap-6">
                <img
                  src="/services/Field-Service-icon.svg"
                  className="w-16 h-16 object-contain"
                  alt="Field Service"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Field Service
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Bring acceleration in your service part comprising customer management,
                    field service, and remote assist. We implement highly configured,
                    connected, and AI-powered solutions.
                  </p>
                </div>
              </div>

              {/* Commerce */}
              <div className="flex gap-6">
                <img
                  src="/services/commerce-icons.svg"
                  className="w-16 h-16 object-contain"
                  alt="Commerce"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Commerce
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    We create unified and omnichannel commerce experiences equipped with
                    AI-driven insights, centralized management, and modern tools to
                    accelerate growth.
                  </p>
                </div>
              </div>

              {/* Finance */}
              <div className="flex gap-6">
                <img
                  src="/services/finance-icon.svg"
                  className="w-16 h-16 object-contain"
                  alt="Finance"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Finance
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    With real-time financial reporting, key analytics, and AI insights,
                    we help enterprises unify finance operations while reducing risks
                    and complexities.
                  </p>
                </div>
              </div>

              {/* Sales */}
              <div className="flex gap-6">
                <img
                  src="/services/sales.svg"
                  className="w-16 h-16 object-contain"
                  alt="Sales"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Sales
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Optimize sales and drive profitability with agile insights and
                    connected sales practices. Predict, manage, and close deals faster.
                  </p>
                </div>
              </div>

              {/* Customer Service */}
              <div className="flex gap-6">
                <img
                  src="/services/Customer-Service.svg"
                  className="w-16 h-16 object-contain"
                  alt="Customer Service"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Customer Service
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Transform customer experience with embedded customer management,
                    personalized solutions, proactive support, and omnichannel engagement.
                  </p>
                </div>
              </div>

              {/* Project Management */}
              <div className="flex gap-6">
                <img
                  src="/services/Project-Management-icons.svg"
                  className="w-16 h-16 object-contain"
                  alt="Project Management"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Project Management
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Track workflows and enable a project-centric approach using a single
                    integrated solution to automate cycles and ensure project success.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
          <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16  overflow-hidden">

            <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

              <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                Get Dedicated Implementation Support!
              </h1>

              <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                Our specialists have implemented Dynamics 365 in businesses of all sizes.
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Request a Call Back
              </a>

            </div>
          </section>


      {/* IMPLEMENTATION METHODOLOGY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/services/imp-left.svg"
                alt="Implementation Methodology"
                className="w-[450px] max-w-full object-contain"
              />
            </div>

            {/* RIGHT ICON SLIDER */}
            <MethodologyIconSlider />

          </div>
        </div>
      </section>
      {/* WHY DYNAMICS SQUARE SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2A44]">
              Why Dynamics Square For <br className="hidden md:block" />
              Implementation Services Applications
            </h2>
          </div>

          {/* TOP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

            {/* CARD 1 */}
            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-10 text-center min-h-[260px] flex items-center justify-center">

              {/* ICON + TITLE */}
              <div className="group-hover:opacity-0 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <MicrosoftIcon />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  Authorized Microsoft <br /> Gold Partner
                </h4>
              </div>

              {/* PARAGRAPH */}
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 text-gray-600 text-sm leading-relaxed">
                As an authorized Microsoft Gold Partner, we follow certified implementation
                standards to deliver secure, compliant, and future-ready Dynamics 365 solutions.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-10 text-center min-h-[260px] flex items-center justify-center">

              <div className="group-hover:opacity-0 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <TeamIcon />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  High-End <br /> Implementation Team
                </h4>
              </div>

              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 text-gray-600 text-sm leading-relaxed">
                Our certified consultants and solution architects bring deep industry expertise
                to implement highly scalable, performance-driven Dynamics 365 solutions.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-10 text-center min-h-[260px] flex items-center justify-center">

              <div className="group-hover:opacity-0 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <SupportIcon />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  Dedicated <br /> Support Model
                </h4>
              </div>

              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 text-gray-600 text-sm leading-relaxed">
                We offer proactive monitoring, continuous optimization, and dedicated post
                go-live support to ensure long-term success and user adoption.
              </p>
            </div>

          </div>


          {/* BOTTOM HOVER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl p-10 min-h-[260px] flex items-center justify-center text-center">
              <div className="group-hover:opacity-0 transition">
                <div className="flex justify-center mb-6"><CostIcon /></div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  Cost Effective <br /> Solution
                </h4>
              </div>
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6 text-gray-600 text-sm transition">
                We deliver cost-effective Dynamics 365 implementations that maximize ROI
                while reducing operational overhead.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl p-10 min-h-[260px] flex items-center justify-center text-center">
              <div className="group-hover:opacity-0 transition">
                <div className="flex justify-center mb-6"><CustomizeIcon /></div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  Highly <br /> Customized
                </h4>
              </div>
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6 text-gray-600 text-sm transition">
                Tailored Dynamics 365 solutions designed to fit your workflows,
                industry needs, and growth plans.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl p-10 min-h-[260px] flex items-center justify-center text-center">
              <div className="group-hover:opacity-0 transition">
                <div className="flex justify-center mb-6"><FlexibleIcon /></div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  Flexible <br /> Delivery
                </h4>
              </div>
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6 text-gray-600 text-sm transition">
                Agile delivery model that adapts to your timelines and evolving
                business requirements.
              </p>
            </div>

          </div>

        </div>
      </section>
{/* FAQ SECTION */}
<section className="py-20 bg-[#F9FAFB]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Everything you need to know about our Dynamics 365 implementation process.
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
