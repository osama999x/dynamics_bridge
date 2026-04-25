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
    question: "What are the standard features of Microsoft Field Service?",
    answer:
      "Microsoft Dynamics 365 Field Service includes features like work order management, resource scheduling, asset management, preventive maintenance, mobile access, and analytics to optimize field operations."
  },
  {
    question: "Is Dynamics 365 Field Service available on-premise?",
    answer:
      "No, Dynamics 365 Field Service is primarily a cloud-based solution offered through Microsoft’s cloud platform, providing regular updates, accessibility, and integration capabilities."
  },
  {
    question: "How do I install field services in Dynamics 365?",
    answer:
      "You can install the Field Service module from the Dynamics 365 admin center by selecting Field Service and following the guided setup to configure resources, territories, and work order processes."
  },
  {
    question: "How is the Field Service mobile app beneficial for enterprises?",
    answer:
      "The Field Service mobile app allows technicians to access work orders, update tasks, capture data, and communicate with the back office in real time, increasing efficiency and reducing service delays."
  },
  {
    question: "Can the Field Service Mobile app be used even when not connected to the internet?",
    answer:
      "Yes, the mobile app supports offline mode, allowing technicians to continue working without internet connectivity. Data syncs automatically once the device reconnects."
  },
  {
    question: "How much does it cost to implement a Dynamics 365 Field Service module?",
    answer:
      "Pricing depends on the chosen plan, number of users, and any additional modules or customizations. Microsoft provides plans like Free Trial, Full Field Service, and Field Service Contractor with tenant/month pricing."
  },
  {
    question: "What sort of key capabilities can be availed after implementing Dynamics 365 Field Service?",
    answer:
      "After implementation, businesses can leverage proactive service scheduling, resource optimization, connected field service experience, AI-enabled insights, and reporting/analytics to improve customer satisfaction and operational efficiency."
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





export default function FieldServicePage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Dynamics 365<br/> Field Service
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
               Streamline Your Field Operations & Optimize Your Resources<br/> Leveraging Microsoft Dynamics 365 Field Service
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
                src="/solutions/FieldServicebanner.avif"
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
           What is dynamics 365 Field Service?
          </h2>

          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
           Stimulate your field services, improve your customer engagement, and encourage your workforce 
           collaboration by enabling them with the right information at right time. Empower your field 
           executives with real-time data insights and enable them to make instant decisions to drive improved 
           customer experience impacting your overall scalable growth. Here are the key capabilities of Dynamics 
           365 Field Service:
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
                    <img src="/solutions/icons_customer-resolution.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                     Streamline Customer Resolution
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Identify your customer requirement and provide instant technician support at the
                   customer location. Empower your field executives to complete more service calls
                    and fix more customer issues.
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
                    <img src="/solutions/icons_resource-scheduling.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                     Optimize Resource Scheduling
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Schedule visits suited to customer convenience and assign right task to the right
                   technician. Enable your field executives to stay updated with schedule changes to efficiently navigate through.
                </p>
              </details>
            </div>
            
            

            {/* RIGHT ACCORDION */}
            <div className="space-y-4">

              {/* ITEM 3 */}
              <details
                open
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/icons_seamless-integration.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Seamless Integration
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                 Addressing your specific business needs, you can integrate your Dynamics 365 Field Service
                  with any of Microsoft's products or services to enrich your capabilities and maximize efficiency.
                </p>
              </details>

               {/* ITEM 4 */}
              <details
                open
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/solutions/icons_real-time-insight.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                     Real-Time Insights
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                 Empower your field technicians with actual and real-time information about customer issues,
                  customer schedules, and routes as well as enable them to update customers with the status 
                  of the service calls.
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
                Microsoft Dynamics 365 Field Service Features
              </h2>
              <p className="text-lg text-gray-600">
               How Dynamics 365 Field Service Helps to Boost Your Field Service Performance
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

             {/* CARD 1 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Create & Manage Work Orders
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Create and manage orders at customer locations. Identify their requirement and instantly support them by leveraging real-time customer data and updates.
  </p>
</div>

{/* CARD 2 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Automate Resource Scheduling
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Manage resources and required equipment to fulfill customer service, get notified for on-site appointments, and manage service scheduling.
  </p>
</div>

{/* CARD 3 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Connected Field Service
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Drive improved connected field service experience by enabling collaboration between field service technicians, customers, and stakeholders.
  </p>
</div>

{/* CARD 4 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Key Reporting & Analytics
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    With AI-enabled insights and key customer data, access and manage work orders, scheduling activities, and drive engagement with customers.
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
           Dynamics 365 Field Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
           Enhance your field service experience and strengthen communication between executives through
            D365 Field Service implementation.
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
      Copilot in Dynamics 365 Field Service
    </h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
      Copilot in Dynamics 365 Field Service is your helpful assistant, simplifying complex tasks and making field service operations smoother. 
      With AI-driven suggestions and automation, it empowers teams to work smarter, not harder and deliver exceptional service every day.
    </p>
  </div>

  {/* 2x2 ITEMS GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    
    {/* ITEM 1 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">Proactive Work Order Suggestions</h4>
        <p className="text-gray-600 leading-relaxed">
          Copilot analyses patterns and customer history to recommend the next best actions for work orders, ensuring your team is always one step ahead.
        </p>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">Intelligent Scheduling Assistance</h4>
        <p className="text-gray-600 leading-relaxed">
          It helps schedule the right technician with the right skills at the right time, balancing workloads efficiently while keeping customer satisfaction high.
        </p>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">Automated Report Generation</h4>
        <p className="text-gray-600 leading-relaxed">
          Creating reports is hassle-free with Copilot. It quickly summarises field data into clear, professional reports, giving your team more time to focus on service.
        </p>
      </div>
    </div>

    {/* ITEM 4 */}
    <div className="flex gap-4 items-start">
      <span className="text-red-600 text-2xl mt-1">✓</span>
      <div>
        <h4 className="font-semibold text-[#1F2A44] mb-2">On-the-Go Knowledge Sharing</h4>
        <p className="text-gray-600 leading-relaxed">
          Technicians can access AI-curated knowledge articles directly in the field, making troubleshooting faster and reducing downtime for customers.
        </p>
      </div>
    </div>

  </div>
</section>

   <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">

    {/* SECTION HEADING (NO BG CHANGE) */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Dynamics 365 Sales Pricing
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Choose The Applications That Are Right For Your Business Needs.
    </p>

    {/* PRICING CARDS */}
<div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">

  {/* CARD 1 - Free Trial */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Field Service<br/>Free Trial
      </h3>
    </div>
    <p className="text-4xl font-bold text-red-600 mb-4">£0</p>
    <p className="text-gray-600 mb-4">
      Deliver exceptional, proactive service that resolves customer issues the first time.
    </p>
    <p className="text-red-600 font-semibold">
      Try for Free
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Field Service
      </h3>
    </div>
    <p className="text-4xl font-bold text-red-600 mb-2">£80.70</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
    <p className="text-gray-600">
      Resolve service issues the first time, every time.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Field Service Contractor
      </h3>
    </div>
    <p className="text-4xl font-bold text-red-600 mb-2">£38.40</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>
    <p className="text-gray-600">
      Assign and manage external frontline technicians.
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
           Maximize your business potentials
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
           Drive new business challenges by implementing Dynamics 365 Sales
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
             Have you got<br/>questions about Field Service?
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
