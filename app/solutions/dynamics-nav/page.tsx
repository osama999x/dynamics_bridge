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
  question: "Is Microsoft Dynamics same as Navision?",
  answer:
    "Microsoft Dynamics NAV was previously known as Navision. After being acquired by Microsoft, it became part of the Microsoft Dynamics family and was later evolved into Dynamics 365 Business Central."
},
{
  question: "How much does Microsoft NAV cost?",
  answer:
    "The cost of Microsoft Dynamics NAV depends on factors such as licensing type, number of users, deployment model, and required customizations. Typically, NAV involves a higher upfront investment compared to subscription-based ERP solutions."
},
{
  question: "Can Dynamics NAV be customized as per specific business requirements?",
  answer:
    "Yes, Dynamics NAV is highly customizable and can be tailored to meet specific business processes, industry needs, and operational workflows with the help of a certified Microsoft partner."
},
{
  question: "Which is the latest version of Dynamics NAV?",
  answer:
    "Dynamics NAV 2018 is the last released version of Microsoft Dynamics NAV. After this version, Microsoft transitioned NAV into Dynamics 365 Business Central."
},
{
  question: "Is Dynamics NAV different from Business Central?",
  answer:
    "Yes, Dynamics NAV is primarily an on-premises solution, whereas Dynamics 365 Business Central is a modern, cloud-enabled ERP offering more flexibility, scalability, and regular updates."
},
{
  question: "Is it important to upgrade from Dynamics NAV to Business Central?",
  answer:
    "Upgrading to Business Central is recommended to leverage modern cloud features, enhanced security, better performance, and long-term Microsoft support, especially as NAV reaches end-of-support timelines."
},
{
  question: "If I move to Business Central, is it necessary to opt for cloud deployment?",
  answer:
    "No, Business Central offers flexible deployment options including on-premises, cloud, and hybrid models, allowing businesses to choose what best fits their requirements."
},
{
  question: "Is the upgrade of NAV mandatory?",
  answer:
    "While upgrading is not immediately mandatory, it is strongly advised to ensure continued support, security updates, and access to new features offered by Microsoft."
},
{
  question: "Why choose Dynamics Square as your NAV implementation partner?",
  answer:
    "Dynamics Square offers certified Microsoft experts, industry-specific solutions, end-to-end implementation, customization, and ongoing support to ensure successful NAV deployment and maximum ROI."
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





export default function DynamicsNAVPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
               Microsoft <br/>Dynamics NAV
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
               A Flexible Business Management Solution built to Boost profitability of Small and Medium Business.
               Want to know how Microsoft Dynamics NAV can streamline all your business management processes? 
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
               Book a Demo Today!
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/solutions/nav-banner.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      What is Microsoft Dynamics NAV?
    </h2>

    {/* Top Paragraph */}
    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
      Microsoft Dynamics NAV (Navision) is a stand-alone business management
      solution capable of streamlining and optimising all processes while
      generating opportunities for sustainable growth. Being one of the top
      Microsoft ERP solutions, it offers powerful features to manage and control
      all business processes. Built specifically for SMBs, it connects finance,
      sales, warehousing, operations, customers, supply chain, accounting, and
      inventory.
    </p>

    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
      Dynamics NAV automates recurring and manual processes using AI (Artificial
      Intelligence) and BI (Business Intelligence), improving overall efficiency
      and productivity.
    </p>

    {/* Center Image */}
    <div className="flex justify-center mb-10">
      <img
        src="/solutions/NAV-implementation.avif"
        alt="Microsoft Dynamics NAV"
        className="w-full max-w-3xl rounded-lg shadow-lg"
      />
    </div>

    {/* Bottom Paragraph */}
    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
      Microsoft Navision ERP provides a centralised platform to connect,
      collaborate, and share data using a single dashboard. This enables users
      to take intelligent and fast decisions for sustainable growth. The NAV
      system offers rich functionality to unlock the full potential of your
      business while improving customer relationships.
    </p>

    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
      This flexible ERP solution fits all industries regardless of size.
      With multi-language and multi-currency support, Microsoft NAV enables
      global operations and ensures financial stability even during challenging
      business situations.
    </p>

  </div>
</section>

      {/* PARTNER HIGHLIGHT SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP HEADING */}
          <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
           Benefits Of Microsoft Dynamics NAV
          </h2>

          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
           Microsoft Dynamics NAV is a top-tier ERP solution that connects people with processes for more 
           efficient data flow and continuous growth. It possesses various capabilities and features catering 
           to all industries in order to smooth the entire business management process. With over 550K+ customers,
            it has some functions that no other ERP solution can deliver. Some of the top benefits of Dynamics NAV are:
          </p>


         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

  {/* LEFT ACCORDION */}
  <div className="space-y-4">

    {/* ITEM 1 */}
    <details
      open
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          Maximized ROI
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Microsoft Dynamics NAV helps businesses achieve maximum return on
        investment by automating processes, reducing operational costs,
        and improving overall productivity.
      </p>
    </details>

    {/* ITEM 2 */}
    <details
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          Ease of Deployment
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        The system is easy to deploy with minimal disruption, allowing
        organisations to go live quickly and start benefiting from the
        solution.
      </p>
    </details>

    {/* ITEM 3 */}
    <details
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          Effective User Interface
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Dynamics NAV offers a clean and intuitive user interface that
        improves usability, reduces training time, and boosts user
        adoption across teams.
      </p>
    </details>

    {/* ITEM 4 */}
    <details
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          Transparent Reporting & Planning
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Gain real-time insights with transparent reporting and advanced
        planning tools to support smarter and data-driven business
        decisions.
      </p>
    </details>

  </div>

  {/* RIGHT ACCORDION */}
  <div className="space-y-4">

    {/* ITEM 5 */}
    <details
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          24x7 Support Availability
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Enjoy round-the-clock support to ensure smooth business operations
        and quick resolution of any technical challenges.
      </p>
    </details>

    {/* ITEM 6 */}
    <details
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          Flexible with Customization
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        The solution can be easily customised to match unique business
        processes, industry requirements, and growth strategies.
      </p>
    </details>

    {/* ITEM 7 */}
    <details
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          Better Customer Service
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Improve customer satisfaction by managing interactions,
        communication, and service requests efficiently through a
        centralised system.
      </p>
    </details>

    {/* ITEM 8 */}
    <details
      className="group bg-white rounded-xl p-6 border border-transparent 
      group-open:border-[#C7D7F5] transition-all duration-300"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <h4 className="font-semibold text-[#1F2A44]">
          Efficient Integration
        </h4>
        <span className="text-xl group-open:hidden">+</span>
        <span className="text-xl hidden group-open:block">−</span>
      </summary>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Dynamics NAV integrates seamlessly with other Microsoft tools and
        third-party applications to create a unified and efficient
        business ecosystem.
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
          Looking for a reliable, supportive, and cost- <br/>effective Dynamics NAV Support Partner?
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
          With over 150+ NAV consultants, we are ready to check your system using our advanced and unique way. 
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
           Talk to Our NAV Expert Now!
          </a>

        </div>
      </section>
       {/* NEW PARTNER SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP HEADING */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
             Is your Dynamics NAV inefficient?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              With your current NAV version, you may be experiencing a number of issues, such as performance issues, lags during processing, costly maintenance, a complex user interface, and ineffective features. It might be possible that your current Navision version is inefficient for tackling your current business requirements. If so, your current system needs an urgent upgrade. 

You have two options: upgrade your NAV version to the latest available version or upgrade the whole ERP system to Business Central. Both of these options would cost the same, but upgrading to Business Central is the long-term solution on which you can rely in the future.

If you've been using NAV for a while and want to keep the same user interface and accessibility for a few more years, you can upgrade to the latest version. In both cases, Dynamics Square is available to understand your business and suggest the best possible solution.

“Want to upgrade your current Dynamics NAV version to streamline modern business demands?"

 "Get Started Now!”
            </p>
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

  <h2 className="text-xl font-bold text-[#1F2A44] mb-3">
    Dynamics NAV vs Dynamics 365 Business Central
  </h2>

  <p className="text-gray-600 leading-relaxed mb-6">
    Dynamics 365 Business Central is the evolved and modern version of NAV
    software, specially built to support SMBs with core business management
    processes. Below are the key differences between Microsoft Dynamics NAV
    and Dynamics 365 Business Central.
  </p>

  <h3 className="text-base font-semibold text-[#1F2A44] mb-2">
    Deployment Option
  </h3>
  <p className="text-gray-600 mb-4 leading-relaxed">
    Dynamics NAV supports on-premises deployment only, whereas Dynamics 365
    Business Central offers flexible deployment options including on-premises,
    cloud, and hybrid environments.
  </p>

  <h3 className="text-base font-semibold text-[#1F2A44] mb-2">
    Upfront Investment Cost
  </h3>
  <p className="text-gray-600 mb-4 leading-relaxed">
    NAV implementation requires a significant upfront investment, while
    Business Central follows a subscription-based pricing model, making it
    more cost-effective for businesses.
  </p>

  <h3 className="text-base font-semibold text-[#1F2A44] mb-2">
    Maintenance Cost
  </h3>
  <p className="text-gray-600 mb-4 leading-relaxed">
    Dynamics NAV requires an in-house IT team for maintenance and hardware
    upgrades. In contrast, Business Central is maintained by Microsoft at no
    additional cost, without interrupting ongoing operations.
  </p>

  <h3 className="text-base font-semibold text-[#1F2A44] mb-2">
    Simple User Interface
  </h3>
  <p className="text-gray-600 mb-4 leading-relaxed">
    NAV has a comparatively complex interface that can be challenging for new
    users. Business Central provides a modern, intuitive interface where all
    tools and functions are easily accessible.
  </p>

  <h3 className="text-base font-semibold text-[#1F2A44] mb-2">
    Personalization
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Dynamics NAV offers limited personalization and requires heavy resources
    for customization. Business Central supports extensions, add-ons, and
    ready-to-use apps, allowing businesses to easily tailor the ERP to their
    needs.
  </p>

</div>


          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">

    {/* Section Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
        Dynamics NAV Pricing & Licensing
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
        According to our data, businesses have reported better ROI and increased
        profitability after implementing Dynamics NAV as their business
        management solution. Although it may appear costly initially, it is a
        worthwhile investment. With over 550K+ customers worldwide, Dynamics NAV
        continues to help businesses grow and scale efficiently.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Starter Pack */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
          Starter Pack
        </h3>

        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
          Features
        </h4>

        <p className="text-gray-600 leading-relaxed">
          The Starter Pack allows up to three users within the organisation to
          access the solution and manage finance and trade functionalities.
          Users can utilise essential features including financial management,
          supply chain management, sales management, and project management
          without limitations. It also enables users to gain insights and
          generate detailed reports on all business processes, which can be
          shared with the team instantly.
        </p>
      </div>

      {/* Extended Pack */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-[#1F2A44] mb-4">
          Extended Pack
        </h3>

        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
          Features
        </h4>

        <p className="text-gray-600 leading-relaxed">
          Designed for growing organisations with complex and advanced business
          operations, the Extended Pack includes all the features of the Starter
          Pack along with additional modules. These include manufacturing and
          warehousing as add-ons. Businesses can also implement advanced
          customisations and integrations as their operational requirements
          evolve.
        </p>
      </div>

    </div>

  </div>
</section>

 {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
         Is your NAV working properly with all your<br/> business processes? Upgrade it now!
          </h1>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
          Book a Free Consultation Call
          </a>

        </div>
      </section>



          
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">

          {/* CENTER TITLE */}
          <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
           Microsoft Dynamics NAV Partners UK
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
           Being a leading Microsoft Dynamics NAV partner in the UK, we offer you our cost-effective and advanced services.
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


 {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
             Have you got<br/>questions about Dynamics NAV?
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
