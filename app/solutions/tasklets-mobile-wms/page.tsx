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
    question: "What are the basic requirements to implement Mobile WMS?",
    answer:
      "To implement Mobile WMS, you need a Business Central or Dynamics NAV setup, mobile devices, and a certified partner to configure the system according to your warehouse needs."
  },
  {
    question: "Is Mobile WMS programmable?",
    answer:
      "Yes, Mobile WMS can be customized and configured with add-ons and workflows to fit your unique warehouse processes."
  },
  {
    question: "How much time does it take a certified partner to implement Mobile WMS?",
    answer:
      "The implementation timeline depends on the complexity and size of your warehouse, but typically a fully functional setup can be completed within a week."
  },
  {
    question: "What is the total number of devices we can use with Mobile WMS?",
    answer:
      "Mobile WMS supports multiple devices simultaneously, allowing all warehouse staff to work efficiently in real-time without limitations on device count."
  },
  {
    question: "What type of barcode does Mobile WMS support?",
    answer:
      "Mobile WMS supports all standard barcode types including Code128, Code39, QR codes, EAN, and more, ensuring compatibility with your existing systems."
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





export default function TaskletsMobileWMSPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Best Mobile WMS for Business Central
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                               Warehouse Management Become Effortless
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/solutions/wms-bc-banner.avif"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* SANA COMMERCE SECTION */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
                       Mobile WMS for Dynamics 365 Business Central
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      Streamline your barcode scanning needs by leveraging the effective, productive, and efficient mobile WMS solution 
                      built by Tasklet Factory. It is a widely recognised tool capable of optimising the existing warehouse operations 
                      for a more promising output while reducing the chances of errors. It is one of the most important warehouse 
                      management add-ons available for Dynamics 365 Business Central, which simplifies the scanning operation. Want to 
                      know more about its capabilities?
                    </p>
                    <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                               Request a Demo
                            </a>

                   
                </div>
            </section>

            {/* MOBILE WMS SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/solutions/wms-team-business-central.avif" 
          alt="Mobile WMS for Business Central"
          className="w-[600px] max-w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
          Enhancing Efficiency
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Mobile WMS for Business Central supports the core warehouse processes seamlessly while pushing the team towards more efficiency and productivity. It also supports basic workflow and offers easy integration with Business Central and Microsoft Dynamics NAV.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          With a simple user interface and an attractive graphical evaluation, Mobile WMS for Business Central is easy to configure for all kinds of warehouse requirements. Even for unique business needs, the performance and capability of Mobile WMS from Tasklet Factory can be extended to meet all custom needs.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Warehouse Management in Business Central is a separate module to tackle all kinds of complex warehouse operations. Based on the unique requirements of a business, you have to integrate add-ons to make it ideal for your business. It integrates with the standard functionalities of D365 Business Central or Dynamics NAV ERP, making it a stable and perfect WMS tool.
        </p>

        <p className="text-gray-600 leading-relaxed">
          We live in an era of centralised businesses where data transfer happens in real-time. Without online connectivity, warehouse operations may stop, leading to financial as well as efficiency losses. But, Mobile WMS from Tasklet Factory has you covered, as you can use the app with full functionality in offline mode too. Whatever the task you are performing, whether counting, moving, receiving items, or sending them to distribution, you can perform it without any issue.
        </p>
      </div>

    </div>
  </div>
</section>

{/* WHY CHOOSE MOBILE WMS SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TOP HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-12">
      Why you Should Choose Mobile WMS?
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

      {/* LEFT COLUMN */}
      <div className="space-y-6">
        {/* ITEM 1 */}
        <div className="flex items-start gap-4">
          <img
            src="/solutions/Group1407.svg"
            alt="Works with Most Popular Operating System"
            className="w-12 h-12"
          />
          <div className="text-left">
            <h3 className="font-semibold text-lg text-[#1F2A44]">
              Works with Most Popular Operating System
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              You can access Mobile WMS on Android-based mobile phones using the official mobile application.
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-start gap-4">
          <img
            src="/solutions/Add-ons.svg"
            alt="Interactive User-Interface"
            className="w-12 h-12"
          />
          <div className="text-left">
            <h3 className="font-semibold text-lg text-[#1F2A44]">
              Interactive User-Interface
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              This has a responsive and user-friendly interface, with ease of access for new users as well.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">
        {/* ITEM 3 */}
        <div className="flex items-start gap-4">
          <img
            src="/solutions/Group1408.svg"
            alt="Works in Online and Offline Mode"
            className="w-12 h-12"
          />
          <div className="text-left">
            <h3 className="font-semibold text-lg text-[#1F2A44]">
              Works in Online and Offline Mode
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              The standard functions and features can be operated online as well as offline to keep processes running 24x7.
            </p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex items-start gap-4">
          <img
            src="/solutions/Modifications.svg"
            alt="Fully Functional within a Week"
            className="w-12 h-12"
          />
          <div className="text-left">
            <h3 className="font-semibold text-lg text-[#1F2A44]">
              Fully Functional within a Week
            </h3>
            <p className="text-gray-600 mt-1 text-sm">
              The total installation and proper working of all functionality of Mobile WMS takes less than a week if you select the right Business Central implementation partner.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* BENEFITS OF MOBILE WMS SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/solutions/wms-mobile.avif" 
          alt="Benefits of Mobile WMS by Tasklet Factory"
          className="w-[600px] max-w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
          Benefits of Using Mobile WMS <br/> by Tasklet Factory
        </h2>

        {/* BENEFIT 1 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
            Make Staff Productive
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Your staff can scan the barcode in a single scan, resulting in more productivity while saving a lot of time.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
            Eliminate the Errors
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Mobile WMS works while centralising the data, resulting in the elimination of errors and other similar bugs.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div>
          <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
            Reduce Warehouse Expenditure
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Locating the exact product in the entire warehouse within a single click saves significant time and money, resulting in higher warehouse ROI.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>




           {/* TASKLET MOBILE WMS FUNCTIONALITY SECTION */}
<section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
      Tasklet Mobile WMS Functionality
    </h2>

    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-12">
      Some of the top functionalities of Tasklet Factory Mobile WMS are:
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT ACCORDION */}
      <div className="space-y-4">
        {[
          { title: "Receive", description: "Process incoming goods accurately and update the system in real-time." },
          { title: "Pick", description: "Select the correct items efficiently for orders with barcode scanning support." },
          { title: "Move", description: "Move items within the warehouse while keeping inventory synchronized." },
          { title: "Unplanned Move", description: "Handle unexpected movements of items without disrupting operations." },
          { title: "Count", description: "Perform regular stock counts to maintain inventory accuracy." },
          { title: "Unplanned Count", description: "Handle spontaneous counting requests to verify inventory quickly." },
          { title: "Adjust Quantity", description: "Easily adjust item quantities to reflect actual stock levels." },
        ].map((item, i) => (
          <details key={i} className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h4 className="font-semibold text-[#1F2A44]">{item.title}</h4>
              <span className="text-xl group-open:hidden">+</span>
              <span className="text-xl hidden group-open:block">−</span>
            </summary>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </details>
        ))}
      </div>

      {/* RIGHT ACCORDION */}
      <div className="space-y-4">
        {[
         
          { title: "Bulk Move", description: "Move multiple items at once to save time during warehouse operations." },
          { title: "Locate Item", description: "Quickly find items in the warehouse using mobile WMS location tracking." },
          { title: "Item Cross Reference", description: "Check alternative items or product codes efficiently." },
          { title: "Print Label", description: "Generate and print labels for products or locations directly from mobile devices." },
          { title: "Substitute Item", description: "Replace items in orders seamlessly if the primary item is unavailable." },
          { title: "Shipping", description: "Manage shipment processing directly from the mobile WMS interface." },
        ].map((item, i) => (
          <details key={i} className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h4 className="font-semibold text-[#1F2A44]">{item.title}</h4>
              <span className="text-xl group-open:hidden">+</span>
              <span className="text-xl hidden group-open:block">−</span>
            </summary>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </details>
        ))}
      </div>

    </div>
  </div>
</section>


            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                       Best Mobile WMS for Business Central
                    </h1>
                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                       Request a Demo
                    </a>

                </div>
            </section>

            {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
           Most Asked FAQs
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
