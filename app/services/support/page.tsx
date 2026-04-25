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
    question: "What is Microsoft Dynamics 365 Support?",
    answer:
      "Microsoft Dynamics 365 Support provides technical assistance, issue resolution, performance optimization, and guidance to ensure smooth and uninterrupted operation of Dynamics 365 applications."
  },
  {
    question: "Is it necessary to get support?",
    answer:
      "Yes, ongoing support is essential to maintain system stability, resolve issues quickly, optimize performance, and ensure your business processes run without disruption."
  },
  {
    question: "How can I avail instant support for Dynamics 365 applications?",
    answer:
      "You can avail instant support by partnering with a certified Dynamics 365 support provider who offers on-demand assistance, remote support, and quick issue resolution."
  },
  {
    question: "Can I avail support for other Microsoft solutions as well?",
    answer:
      "Yes, support is available not only for Dynamics 365 but also for other Microsoft solutions such as Power BI, Power Apps, Power Automate, SharePoint, and Microsoft 365."
  },
  {
    question: "Does support from partners help with system updates or upgrades?",
    answer:
      "Absolutely. Partner support includes assistance with system updates, version upgrades, testing, and ensuring compatibility without impacting business operations."
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
const BusinessFlowIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <path
      d="M12 32h40"
      stroke="#1F2A44"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M44 26l8 6-8 6"
      stroke="#E11D48"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="32" r="4" fill="#1F2A44" />
  </svg>
);


const AdaptChangeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="20" stroke="#1F2A44" strokeWidth="3" />
    <path
      d="M32 14v10h10"
      stroke="#E11D48"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 50V40H22"
      stroke="#1F2A44"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);


const SimplifyFlowIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <rect
      x="14"
      y="18"
      width="36"
      height="28"
      rx="6"
      stroke="#1F2A44"
      strokeWidth="3"
    />
    <path
      d="M24 32h16"
      stroke="#E11D48"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);


const TrendsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <path
      d="M14 40l12-12 10 10 14-14"
      stroke="#1F2A44"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="22" r="4" fill="#E11D48" />
  </svg>
);


const CustomSupportIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="26" r="8" stroke="#1F2A44" strokeWidth="3" />
    <path
      d="M16 48c2-8 28-8 32 0"
      stroke="#E11D48"
      strokeWidth="3"
    />
    <path
      d="M32 14v-6"
      stroke="#1F2A44"
      strokeWidth="3"
    />
  </svg>
);

const CostEffectiveIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="26" stroke="#1F2A44" strokeWidth="3" />
    <path
      d="M26 28c0-4 12-4 12 0s-12 4-12 8 12 4 12 8-12 4-12 0"
      stroke="#E11D48"
      strokeWidth="3"
      fill="none"
    />
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


export default function SupportPage() {
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
                Microsoft Dynamics <br /> 365 Support
              </h1>
              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Elevate system performance, resolve complex issues in no time,
                and optimise your solution with our premium, reliable, and
                cost-effective Dynamics 365 Support Services.
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Talk to an Expert Now!
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end mt-10">
              <img
                src="/services/support-service-banner.avif"
                alt="Dynamics 365 Implementation"
                className="w-[680px] max-w-full h-auto object-contain translate-y-6"
              />
            </div>
          </div>

          {/* 🔽 CENTERED CONTENT (UPDATED) */}
          <div className="mt-24 flex justify-center">
            <div className="max-w-4xl text-center">

              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Peace of Mind with Dynamics 365: <br />24/7 Support at Your Fingertips
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Resolve complex issues, resume business operations instantly, and drive continuous growth
                by partnering with a top-tier Microsoft Dynamics 365 support partner. Open doors to endless
                opportunities, embrace scalability, and maximise the ROI of your intelligent Microsoft
                Dynamics 365 solution with Dynamics Square - trusted and reliable Microsoft Solutions Partner UK.
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
                src="/services/supper-img.avif"
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
                Ensure reliability and smoother domain practices by leveraging our
                flexible support services available to global businesses.

              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                - With the right set of resources, tools, and expertise in your domain,
                you can avail of our trustworthy Dynamics 365 support services to drive
                uninterrupted operational flow and enable you to focus on growing business.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                - We have a highly equipped team of expert professionals who are proficient
                in offering implementation, support, and upgrade services with a 100% success rate.
              </p>


              <p className="text-gray-600 mb-4 leading-relaxed">
                - Say goodbye to downtime and hello to a business boost! Our Dynamics 365
                consultants use Microsoft's proven methods to solve any issue swiftly and
                effectively.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                - Get back to the business of growth with our Microsoft-certified Dynamics 365
                consultants. They'll handle any issue, big or small, so you can focus on boosting
                your operations.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* DOMAIN-SPECIFIC IMPLEMENTATION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mt-24 flex justify-center">
            <div className="max-w-4xl text-center">

              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Stop Overpaying for D365 Support: Customised Plans, Optimised Spending
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Drive an innovative and strategic approach through your business
                premises with intelligent connected processes, data insights, and adaptive
                Dynamics 365 CRM & ERP solutions. Regardless of the issue you are facing while
                streamlining smooth business operations, we have got you covered. Depending on the
                issue you are facing, we have diverse support plans available for you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What you need to do is analyse your business issues and choose the most relevant
                plan that can get your business back on track. If you are unable to choose the
                perfect plan, no worries; call us directly. We are more than happy to assist you
                in any business situation.
              </p>

            </div>
          </div>
          {/* SUPPORT PLANS CARDS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative bg-[#1F2A44] h-32 overflow-hidden">
                <img
                  src="/services/ad-hoc-support.png"
                  alt="Ad-hoc Support"
                  className="absolute inset-0 m-auto w-48 h-48 object-contain"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-semibold text-[#1F2A44] mb-4">
                  Ad-hoc Support
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Instantly and accurately resolve the system issue that is hampering
                  your operational workflow.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative bg-[#1F2A44] h-32 overflow-hidden">
                <img
                  src="/services/prepaid-hours-support.png"
                  alt="Prepaid Hours Support"
                  className="absolute inset-0 m-auto w-48 h-48 object-contain"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-semibold text-[#1F2A44] mb-4">
                  Prepaid Hours Support
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get 50-hour support on a priority basis from leading Dynamics 365
                  experts and get back to business in no time.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative bg-[#1F2A44] h-32 overflow-hidden">
                <img
                  src="/services/annual-support-icons.png"
                  alt="Annual Support"
                  className="absolute inset-0 m-auto w-48 h-48 object-contain"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-semibold text-[#1F2A44] mb-4">
                  Annual Support
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enrol in our reliable annual support plan to resolve issues, upgrade
                  the system, and integrate other solutions.
                </p>
              </div>
            </div>

          </div>
          {/* HERO IMPLEMENTATION SUPPORT SECTION */}
          <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

            <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

              <h1 className="text-2xl md:text-3xl font-semibold mb-4">
               Speak to your Microsoft Dynamics Expert!
              </h1>

              <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
               Give your unique business a must-needed boost to eliminate redundancies from
                the system and overpower competition with digital transformation.
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Get in touch
              </a>

            </div>
          </section>

          {/* SUPPORT SERVICES BLOCKS */}
          <div className="mt-20"></div>
          {/* SECTION HEADING */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2A44] mb-4">
              Break Free from One-Size-Fits-All:
              <br />
              Tailored Dynamics 365 Support Services to Fit Your Needs
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Choose flexible, scalable, and expert-led Dynamics 365 support services
              designed around your business requirements.
            </p>
          </div>
          {/* DOMAIN BLOCKS */}
          <div className="bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

              {/* Technical Support */}
              <div className="flex gap-6">
                <img src="/services/technical-supports.svg" className="w-16 h-16" alt="Technical Support" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Technical Support
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Resolve errors, enhance system performance, and get reliable technical
                    assistance from certified Microsoft Dynamics 365 professionals.
                  </p>
                </div>
              </div>

              {/* Consultation */}
              <div className="flex gap-6">
                <img src="/services/Consultation.svg" className="w-16 h-16" alt="Consultation" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Consultation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Facing challenges in decision-making? Consult our experts to discuss
                    business issues and receive personalised Dynamics 365 solutions.
                  </p>
                </div>
              </div>

              {/* Integrations */}
              <div className="flex gap-6">
                <img src="/services/integration.svg" className="w-16 h-16" alt="Integrations" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Integrations
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Extend Dynamics 365 capabilities by seamlessly integrating third-party
                    solutions and add-ons without operational disruptions.
                  </p>
                </div>
              </div>

              {/* System Upgrade */}
              <div className="flex gap-6">
                <img src="/services/System-upgrade.svg" className="w-16 h-16" alt="System Upgrade" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    System Upgrade
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Seamlessly manage change and upgrade your existing Dynamics 365 system
                    to meet evolving market and customer demands.
                  </p>
                </div>
              </div>

              {/* Customisations */}
              <div className="flex gap-6">
                <img src="/services/Customisation.svg" className="w-16 h-16" alt="Customisations" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    Customisations
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Tailor your Dynamics 365 solution with strategic customisations aligned
                    to changing trends, customer expectations, and business growth.
                  </p>
                </div>
              </div>

              {/* User Trainings */}
              <div className="flex gap-6">
                <img src="/services/User-Training.svg" className="w-16 h-16" alt="User Trainings" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">
                    User Trainings
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Empower your teams with expert-led training to maximise Dynamics 365
                    adoption, productivity, and ROI.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* D365 SUPPORT SOLUTIONS SECTION */}
      <section className="bg-gradient-to-b from-[#F3F6FB] to-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2A44] mb-6">
            Dedicated Support For Microsoft Dynamics 365 Suite Of Solutions
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-4xl mx-auto mb-14 text-sm md:text-base leading-relaxed">
            Regardless of the system you use and your business requirements, we have experts
            in all Dynamics 365 products. We are committed to offering exceptional support
            services at cost-effective prices to deliver high-quality support in no time.
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Dynamics NAV", icon: "/services/NAV.png" },
              { title: "Dynamics AX", icon: "/services/AX.png" },
              { title: "Customer Engagement", icon: "/services/SV.svg" },
              { title: "Business Central", icon: "/services/businesscall.svg" },
              { title: "Dynamics 365 Finance", icon: "/services/finance.svg" },
              { title: "Dynamics 365 CRM", icon: "/services/CRM.png" },
              { title: "Power BI", icon: "/services/power-bi.svg" },
              { title: "Microsoft SharePoint", icon: "/services/sharepoint.svg" },
              { title: "PowerApps", icon: "/services/power-apps.svg" },
              { title: "Power Automate", icon: "/services/power-automate.svg" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg
      transition-all duration-300 flex items-center gap-4
      px-6 py-5 text-left"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />

                <div className="relative">
                  <span
                    className="block whitespace-nowrap text-[#1F2A44] font-medium
          text-xs md:text-sm transition-colors duration-300
          group-hover:text-[#D9363E]"
                  >
                    {item.title}
                  </span>

                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#D9363E]
          transition-all duration-300 group-hover:w-full"
                  ></span>
                </div>
              </div>
            ))}

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
                  <BusinessFlowIcon />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  For Uninterrupted<br />Business Flow
                </h4>
              </div>

              {/* PARAGRAPH */}
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 text-gray-600 text-sm leading-relaxed">
                Ensures seamless business operations with minimal downtime by implementing stable,
                secure, and scalable Dynamics solutions that keep your workflows running smoothly.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-10 text-center min-h-[260px] flex items-center justify-center">

              <div className="group-hover:opacity-0 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <AdaptChangeIcon />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  To Adapt and <br /> Drive Changes
                </h4>
              </div>

              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 text-gray-600 text-sm leading-relaxed">
                Our expert team helps your organization quickly adapt to market changes
                and evolving business needs through flexible and future-ready Dynamics implementations.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-10 text-center min-h-[260px] flex items-center justify-center">

              <div className="group-hover:opacity-0 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <SimplifyFlowIcon />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  To Simplify <br />Operational Flow
                </h4>
              </div>

              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-6 text-gray-600 text-sm leading-relaxed">
                We streamline complex business processes by automating
                operations and integrating systems to improve efficiency and reduce manual workload.
              </p>
            </div>

          </div>


          {/* BOTTOM HOVER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl p-10 min-h-[260px] flex items-center justify-center text-center">
              <div className="group-hover:opacity-0 transition">
                <div className="flex justify-center mb-6"><TrendsIcon /></div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  To Remain Updated <br /> With Trends
                </h4>
              </div>
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6 text-gray-600 text-sm transition">
                Stay ahead with modern Dynamics solutions aligned with the latest
                technology trends, compliance standards, and industry best practices.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl p-10 min-h-[260px] flex items-center justify-center text-center">
              <div className="group-hover:opacity-0 transition">
                <div className="flex justify-center mb-6"><CustomSupportIcon /></div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  Customized <br />  Support Model
                </h4>
              </div>
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6 text-gray-600 text-sm transition">
                We provide a tailored support model designed around your business needs,
                offering proactive assistance, optimization, and continuous improvements.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl p-10 min-h-[260px] flex items-center justify-center text-center">
              <div className="group-hover:opacity-0 transition">
                <div className="flex justify-center mb-6"><CostEffectiveIcon /></div>
                <h4 className="text-xl font-semibold text-[#1F2A44]">
                  Cost Effective <br /> Solution
                </h4>
              </div>
              <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6 text-gray-600 text-sm transition">
                Delivering high-quality Dynamics implementations that optimize costs,
                improve ROI, and ensure maximum value without compromising performance.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* PARTNER HIGHLIGHT SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT CONTENT */}
           <div className="mt-6 lg:mt-22">
              <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
                Dynamics Square: Your Partner in Growth
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Get reliable and cost-effective Dynamics 365 support from a trusted
                Microsoft Solutions Partner. We help businesses transform operations
                with automation, innovation, and scalable technology solutions.
              </p>
            </div>
            {/* RIGHT ACCORDION */}
            <div className="space-y-4">

              {/* ITEM 1 */}
              <details
                open
                className="group bg-white rounded-xl p-6
                   border border-transparent
                     group-open:border-[#C7D7F5]
                     transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img
                      src="/services/partner-icon-1.svg"
                      alt="Partner Icon"
                      className="w-20 h-20 object-contain"
                    />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Leading Dynamics 365 Partner in the UK
                    </h4>
                  </div>

                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Being a certified Microsoft Solutions Partner for over a decade,
                  we bring proven expertise and industry best practices to deliver
                  reliable Dynamics 365 support services.
                </p>
              </details>

              {/* ITEM 2 */}
              <details
                className="group bg-white rounded-xl p-6
                border border-transparent
                 group-open:border-[#C7D7F5]
                  transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img
                      src="/services/partner-icon-2.svg"
                      alt="Location Icon"
                      className="w-20 h-20 object-contain"
                    />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Remote and On-Site Availability
                    </h4>
                  </div>

                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Our consultants provide flexible support through remote assistance
                  as well as on-site services to meet your operational requirements.
                </p>
              </details>

              {/* ITEM 3 */}
              <details
                className="group bg-white rounded-xl p-6
                  border border-transparent
                    group-open:border-[#C7D7F5]
                      transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img
                      src="/services/partner-icon-3.svg"
                      alt="Value Icon"
                      className="w-20 h-20 object-contain"
                    />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Value-for-money Services
                    </h4>
                  </div>

                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  We offer cost-effective Dynamics 365 support plans that maximize ROI
                  while ensuring system performance, security, and scalability.
                </p>
              </details>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Most Searched <br /> Microsoft Dynamics 365 Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click to explore the best answer!
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
