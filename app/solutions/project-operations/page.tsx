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
    question: "What is Supply Chain Management in Dynamics 365?",
    answer:
      "Dynamics 365 Supply Chain Management is a cloud-based ERP solution designed to streamline and optimize your entire supply chain, from procurement to production, inventory, and delivery."
  },
  {
    question: "How Supply Chain Management helps in business?",
    answer:
      "It helps businesses improve efficiency, reduce operational costs, enhance inventory management, automate processes, and gain real-time insights for smarter decision-making."
  },
  {
    question: "Why Dynamics 365 Supply Chain Management?",
    answer:
      "Dynamics 365 SCM provides a unified platform with AI-driven insights, predictive analytics, and automation capabilities, enabling organizations to build resilient, agile, and scalable supply chains."
  },
  {
    question: "What are the key features of Dynamics 365 Supply Chain Management?",
    answer:
      "Key features include inventory management, warehouse management, production planning, procurement, logistics, demand forecasting, predictive analytics, and AI-powered insights."
  },
  {
    question: "How D365 Supply Chain Management helps to drive smarter?",
    answer:
      "By providing real-time data, predictive insights, and automation, D365 SCM enables proactive decision-making, faster response to market changes, and optimized operations across the supply chain."
  },
  {
    question: "How much does it cost to implement Dynamics 365 Supply Chain Management?",
    answer:
      "The implementation cost depends on the plan (Standard, Premium, or Intelligent Order Management), the size of your business, and any additional modules or customizations required."
  },
  {
    question: "Can I customize or integrate my Supply Chain Management?",
    answer:
      "Yes, Dynamics 365 SCM can be customized to your business processes and integrated with other Microsoft applications or third-party tools to create a connected and efficient supply chain ecosystem."
  },
  // ----- Project Operations Questions -----
  {
    question: "What is Project Operations in Dynamics 365?",
    answer:
      "Dynamics 365 Project Operations is a unified solution that helps organizations manage project sales, resourcing, delivery, and financials to maximize efficiency, revenue, and profitability."
  },
  {
    question: "Does Microsoft Project Operation integrate with Business Central?",
    answer:
      "Yes, Dynamics 365 Project Operations can integrate seamlessly with Business Central for finance, accounting, and operational insights across project-based workflows."
  },
  {
    question: "How do I install Project Operations in Dynamics 365?",
    answer:
      "Project Operations can be installed from the Microsoft Dynamics 365 admin center by selecting the appropriate environment and adding the Project Operations app, following Microsoft’s guided setup."
  },
  {
    question: "What are the core modules in Dynamics 365 Project Operations?",
    answer:
      "Core modules include Project Management, Resource Management, Project Accounting, Time & Expense, Sales, and Analytics & Reporting."
  },
  {
    question: "What is the price of D365 Project Operations?",
    answer:
      "Dynamics 365 Project Operations pricing starts with a free trial and the paid plan costs £103.80 per user/month, paid yearly."
  },
  {
    question: "Can D365 Project Operations help businesses boost sales and enhance revenue?",
    answer:
      "Yes, by providing real-time project insights, resource optimization, and financial management, Project Operations enables businesses to improve delivery, close deals faster, and maximize profitability."
  },
  {
    question: "How to start using Dynamics 365 Project Operations?",
    answer:
      "You can start by signing up for a trial, setting up your project environment, adding your team and resources, and configuring the modules as per your business needs."
  },
  {
    question: "What are the core functions of Dynamic 365 Project Operations?",
    answer:
      "Core functions include project planning, resource allocation, project delivery tracking, time and expense management, project financials, and analytics for decision-making."
  },
  {
    question: "How does Project Operation work?",
    answer:
      "Project Operations works by unifying sales, resourcing, delivery, and financial processes into a single platform, enabling real-time insights, AI-driven recommendations, and seamless collaboration across all project stages."
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





export default function ProjectOperationsPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
               Dynamics 365<br/>Project Operations
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Bring Agility, Improve Transparency, and Streamline Your <br/>Projects with Dynamics 365 Project Operations
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
                src="/solutions/project-operation-banner.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>
      {/* PARTNER HIGHLIGHT SECTION - Project Operations */}
<section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
      What is Dynamics 365 Project Operations?
    </h2>

    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
      Empower your team to drive visibility and agility for ensuring on-time project deliveries while optimizing budget for maximum revenue with Dynamics 365 Project Operations. Seamlessly manage all projects of your business, from sales to finance, by leveraging this unified Microsoft solution. It brings teams together, accelerates delivery, and maximises growth potential.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT ACCORDION - 3 ITEMS */}
      <div className="space-y-4">
        {/* ITEM 1 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icon-automation.svg" className="w-10 h-10" alt="Project Automation" />
              <h4 className="font-semibold text-[#1F2A44]">Project Automation</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Automate project tasks, workflows, and approvals to increase efficiency and reduce manual overhead across your teams.
          </p>
        </details>

        {/* ITEM 2 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons_resource-management.svg" className="w-10 h-10" alt="Resource Management" />
              <h4 className="font-semibold text-[#1F2A44]">Resource Management</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Assign the right people to the right projects, track utilization, and ensure optimal allocation of resources for maximum productivity.
          </p>
        </details>

        {/* ITEM 3 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons_resource-management (1).svg" className="w-10 h-10" alt="Superior Deal Management" />
              <h4 className="font-semibold text-[#1F2A44]">Superior Deal Management</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Track project opportunities, manage contracts, and ensure profitable deals while maintaining alignment with your business goals.
          </p>
        </details>
      </div>

      {/* RIGHT ACCORDION - 3 ITEMS */}
      <div className="space-y-4">
        {/* ITEM 4 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons_finance-management.svg" className="w-10 h-10" alt="Finance Management" />
              <h4 className="font-semibold text-[#1F2A44]">Finance Management</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Keep project budgets under control, monitor costs, and ensure financial visibility for all ongoing projects.
          </p>
        </details>

        {/* ITEM 5 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons_data-management.svg" className="w-10 h-10" alt="Data Management" />
              <h4 className="font-semibold text-[#1F2A44]">Data Management</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Centralize project data, reports, and analytics to enable informed decision-making and greater project visibility.
          </p>
        </details>

        {/* ITEM 6 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons_data-management.svg" className="w-10 h-10" alt="Manage Time and Expense" />
              <h4 className="font-semibold text-[#1F2A44]">Manage Time and Expense</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Track time, submit expense reports, and simplify approvals to ensure accurate billing and effective resource utilization.
          </p>
        </details>
      </div>

    </div>
  </div>
</section>

{/* D365 PROJECT OPERATIONS BENEFITS SECTION */}
<section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
      Microsoft Dynamics 365 Project Operations Benefits
    </h2>

    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
      Optimise your existing resources and boost revenue potential using D365 Project Operations modules.
    </p>

    {/* ACCORDION */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* ITEM 1 */}
      <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="font-semibold text-[#1F2A44]">Project Financial Management</h4>
          <span className="text-xl group-open:hidden">+</span>
          <span className="text-xl hidden group-open:block">−</span>
        </summary>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Gain real-time access to project financials, enabling decisions that directly improve business performance and project efficiency, supported by Microsoft Dynamics 365 Project Operations.
        </p>
      </details>

      {/* ITEM 2 */}
      <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="font-semibold text-[#1F2A44]">Enhance Project Transparency</h4>
          <span className="text-xl group-open:hidden">+</span>
          <span className="text-xl hidden group-open:block">−</span>
        </summary>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Bring visibility, eliminate data silos, and access business intelligence to track each project accurately and precisely.
        </p>
      </details>

      {/* ITEM 3 */}
      <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="font-semibold text-[#1F2A44]">Maximised Customer Satisfaction</h4>
          <span className="text-xl group-open:hidden">+</span>
          <span className="text-xl hidden group-open:block">−</span>
        </summary>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Streamline project management, enhance the customer experience, and keep customers updated for each milestone of a project to offer optimum customer satisfaction.
        </p>
      </details>

      {/* ITEM 4 */}
      <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="font-semibold text-[#1F2A44]">Accelerate Team Collaboration</h4>
          <span className="text-xl group-open:hidden">+</span>
          <span className="text-xl hidden group-open:block">−</span>
        </summary>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Access a unified platform, get a 360-degree holistic view, and connect all departments to accelerate team collaboration for maximised returns.
        </p>
      </details>

    </div>
  </div>
</section>


      
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
          Microsoft Dynamics 365 <br/> Project Operations Features
        </h2>
        <p className="text-lg text-gray-600">
          Streamline your Project Operations & Accelerate Delivery<br/> with D365 Project Operations.
        </p>
      </div>

      {/* RIGHT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* CARD 1 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Optimize Resource Utilization
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            With Dynamics 365 Project Service Automation, assign the right people to the right project leveraging skill-matching, scheduling, and resourcing insights.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Accelerate Project Management
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            Make effective use of inbuilt Microsoft Project Management capabilities such as Kanban boards, Gantt charts, etc. to speed up project delivery.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Streamline Project Financials
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            Streamline your project financials from project accounting, budgeting to ensuring global financial reporting standards compliance.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Time & Expense Management
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            Effortlessly submit time and expenses, automate the entire workflow, and improve your submissions, approvals, and reporting capabilities.
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
           Dynamics 365 Project Operations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Avail a range of hassle-free implementation, upgrade, and support services to boost your project operations.
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

      {/* COPILOT SECTION */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Copilot in Dynamics 365 Project Operations
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base">
      Copilot in Dynamics 365 Project Operations is your trusted assistant, helping you simplify project management tasks and work smarter. It brings AI-powered efficiency to every step of your project journey. With Copilot, project management becomes simpler and more productive, letting your team focus on delivering value every step of the way.
    </p>

    {/* LEFT & RIGHT FEATURES */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">

      {/* LEFT FEATURES */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Effortless Project Planning</h4>
            <p className="text-gray-700">
              Copilot suggests timelines, resources, and budgets based on historical data, helping you plan projects quickly while staying aligned with goals and constraints.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Smart Resource Recommendations</h4>
            <p className="text-gray-700">
              It identifies the best-suited team members for tasks based on skills, availability, and past performance, ensuring your projects run smoothly from start to finish.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FEATURES */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Quick Financial Insights</h4>
            <p className="text-gray-700">
              Copilot provides clear financial summaries and makes it easy to keep track of costs, revenues, and profits, giving you actionable information to keep project finances in check.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">✓</span>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Hassle-Free Status Updates</h4>
            <p className="text-gray-700">
              It generates concise, professional project status reports by summarizing progress, challenges, and milestones, helping you keep stakeholders informed.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

     <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Dynamics 365 Project Operations Pricing
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Find Dynamics 365 Project Operations plans and pricing to choose the applications that are right for your business needs.
    </p>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Project Operations - Free Trial
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-2">£0</p>
        <p className="text-sm text-gray-500 mb-4">Free Trial</p>
        <p className="text-gray-600 mb-4">
          Drive your project success and profitability with a single solution.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
          <h3 className="text-white font-semibold text-lg">
            Dynamics 365 Project Operations
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-2">£103.80</p>
        <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
        <p className="text-gray-600 mb-4">
          Get the visibility, collaboration, and agility needed to drive success across your project-centric business.
        </p>
      </div>

    </div>

    {/* CTA BUTTON */}
    <div className="text-center">
      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
      >
        Get Started Now
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
           Experience Value Before You Invest
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
           Curious whether it fits your setup? A Microsoft Dynamics 365 Project Operations Trial lets your team explore, test, and witness real improvements in planning, delivery, and forecasting.
           With our experts guiding the process, there’s zero risk and a real chance to see how your business can shift gears without disrupting ongoing operations.
           <br/>Read to test the waters with D365 Project Operations? 
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            Schedule a Call Today!
          </a>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
              Have you got<br />questions about Project Operations?
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
