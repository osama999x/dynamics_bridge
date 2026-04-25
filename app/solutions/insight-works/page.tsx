'use client';
import PageLayout from '@/app/components/PageLayout';



export default function InsightWorksPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Insights Works for Dynamics 365 Business Central
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Optimise order fulfilment process, manage counter sales, and streamline warehouse operations by integrating Insights Works
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Integrate Now!
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/solutions/insightworks.avif"
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
                        Enhance Warehouse Efficiency while leveraging Inventory Management
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                       When it comes to streamlining the entire warehouse operations of a business, whether production, manufacturing, or
                        distribution, no one is superior to Insight Works. As a market leader, it provides seamless capabilities for 
                        managing and tracking stocks without error. Insight Works is a solution built to align with Microsoft Dynamics 
                        365 Business Central and Microsoft Dynamics NAV.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Insight Works is a set of 15 applications, of which four are flagship applications and the remaining are available
                         for free. These applications easily integrate with Business Central to offer great warehouse management
                          capabilities and functionalities. Some of the intelligent applications include Fixed Asset Count, DocXtender,
                           Dynamic Express, WMS Express, Warehouse Insight, Shop Floor Data Collection, and Barcode Generator.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                       Automate inventory management, collect floor insights, and improve your operational productivity.
                    </p>
                </div>
            </section>

          {/* WAREHOUSE INSIGHTS SECTION */}
<section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
      Optimise Warehouse Operations with Intelligent <br/>Insight Works Apps
    </h2>

    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-6">
      Warehouse requirements are subject to change with market fluctuations as well as customer demands. To deal with sudden changes, you require an intelligent warehouse management application like Insights Works that can accept the abrupt changes and offer uninterrupted service. It offers various features, among which some are listed below:
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT ACCORDION */}
      <div className="space-y-4">

        {/* ITEM 1 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <h4 className="font-semibold text-[#1F2A44]">Full integration with Business Central</h4>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Seamlessly connect your warehouse operations with Business Central for real-time updates and centralised control.
          </p>
        </details>

        {/* ITEM 2 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <h4 className="font-semibold text-[#1F2A44]">Real-time Reporting</h4>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Get actionable insights instantly to make faster and more informed warehouse decisions.
          </p>
        </details>

      </div>

      {/* RIGHT ACCORDION */}
      <div className="space-y-4">

        {/* ITEM 3 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <h4 className="font-semibold text-[#1F2A44]">Ensure Accurate Inventory</h4>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Maintain precise stock levels to prevent shortages, overstocking, or mismanaged warehouse items.
          </p>
        </details>

        {/* ITEM 4 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <h4 className="font-semibold text-[#1F2A44]">Enhanced ROI</h4>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Optimise warehouse efficiency and resource allocation to maximise return on investment.
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
                       Get accurate inventory levels, track stocks, enhance ROI, and avail a reliable solution for your warehouse needs with Insights Works
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                      Want to explore more possibilities with Insight Works?
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                       Schedule Demo 
                    </a>

                </div>
            </section>

            {/* WAREHOUSE INSIGHTS SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TOP HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
      Warehouse Insights
    </h2>

    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
      By providing accurate mobile device integration with barcodes, Warehouse Insights eliminates manual inventory tracking errors and ensures precise warehouse operations. It includes NAV location and item tracking configuration to accurately process all warehouse transactions. Some of its features are:
    </p>

    {/* FEATURE CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

      {/* ITEM 1 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col">
        <h3 className="text-xl font-semibold text-[#1F2A44] mb-4">
          Warehouse Insights
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          - Easily conforms to Business Central configuration.<br/>
          - Manage all inventory using a handheld device.<br/>
          - Tracks serial number and lot number of each movement.<br/>
          - Comes with a responsive and interactive user interface.<br/>
          - Using a handheld device, scan all sales documents.
        </p>
      </div>

      {/* ITEM 2 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col">
        <h3 className="text-xl font-semibold text-[#1F2A44] mb-4">
          Shop Floor Insights
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          - Automate data entry using barcodes.<br/>
          - Tracks employee attendance and calculates overtime.<br/>
          - Offers data insights for enhanced productivity.<br/>
          - Eliminates manual time collection costs, reducing labour costs.<br/>
          - Tracks sources of rework and helps reduce it.
        </p>
      </div>

      {/* ITEM 3 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col">
        <h3 className="text-xl font-semibold text-[#1F2A44] mb-4">
          Advanced Inventory Count
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          - Supports all types of inventory counts, from direct pick to optional bins.<br/>
          - Easy to create count sheets based on desired parameters.<br/>
          - Ensures accurate count data.<br/>
          - Enables multi-user data entry.<br/>
          - Provides interactive UI with integrations.
        </p>
      </div>

      {/* ITEM 4 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col">
        <h3 className="text-xl font-semibold text-[#1F2A44] mb-4">
          Dynamic Ship
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          - Provides shipment data in real-time.<br/>
          - Easily integrates with 100+ global carriers.<br/>
          - Offers detailed information about a product.<br/>
          - Comes with simple UI and easy functionality.<br/>
          - Enables package tracking at every step.
        </p>
      </div>

    </div>
  </div>
</section>


        </PageLayout>
    );
}
