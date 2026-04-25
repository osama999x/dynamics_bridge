'use client';
import PageLayout from '@/app/components/PageLayout';



export default function SanaCommercePage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Sana Commerce for Dynamics 365 Business Central
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                                Sell to global customers with a superior customer experience using Sana Commerce, a powerful e-commerce
                                solution for Business Central.
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
                                src="/solutions/sana-Commerce.avif"
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
                        Power Up your E-commerce Game while Empowering your Customers
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Sana Commerce is a flexible and scalable e-commerce platform that integrates seamlessly with Business Central or NAV and provides a competitive advantage over others in the market. It allows businesses to build an online store without compromising their current offline business flow. With its exceptional capability of centralising all business data, it eliminates unnecessary complexities from the system to achieve a better result.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Business Central is a renowned ERP (enterprise resource planning) solution available for SMBs. With modernization, it is a must for distributors, wholesalers, and manufacturers to sell their products globally using an online store. Here, Sana Commerce integrates with Business Central to help sell online, centralise the ERP data, manage the entire process from providing a quote to delivering the order, and fortify the customer experience. Sana Commerce works on cloud servers to offer a uniform source of data using different channels while offering exact and real-time information whenever needed.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        Streamline online sales, offer a superior customer experience, and implement a ready-to-go, scalable commerce solution.
                    </p>
                </div>
            </section>

            {/* PARTNER HIGHLIGHT SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
                        Align with Customer and Market Demands with<br/> Sana Commerce
                    </h2>

                    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                        Customer and market demands change with time. Sana Commerce is a reliable and adaptable solution that matches changing needs and exceeds all expectations. Due to cloud computing, it expanded its capabilities based on a sudden change in industry to offer seamless services. It connects the ERP system with the online store to provide extremely fast performance in both B2B and B2C industries. Some of its features are:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 1 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <h4 className="font-semibold text-[#1F2A44]">Great Performance</h4>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Sana Commerce delivers smooth and high-speed performance across all digital touchpoints.
                                </p>
                            </details>

                            {/* ITEM 2 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <h4 className="font-semibold text-[#1F2A44]">Real-time Data Insights</h4>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Gain actionable insights from up-to-date data for smarter business decisions.
                                </p>
                            </details>

                        </div>

                        {/* RIGHT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 3 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <h4 className="font-semibold text-[#1F2A44]">Maximised Customer Experience</h4>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Offer seamless and personalised shopping experiences across online and offline channels.
                                </p>
                            </details>

                            {/* ITEM 4 */}
                            <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <h4 className="font-semibold text-[#1F2A44]">Efficient Order Processing</h4>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>
                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Streamline your order management to save time, reduce errors, and improve operational efficiency.
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
                        Get a SaaS-based, scalable e-commerce solution with out-of-the-box features to tackle modern e-commerce issues.
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                       Want to generate more ROI with a huge list of satisfied customers?
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                       Schedule a Demo with Us!
                    </a>

                </div>
            </section>

            {/* SHIPPING & TAX SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TOP HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
      Simplified Shipping and Tax
    </h2>

    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
      When a customer purchases a product from your Sana Commerce-powered online store, all sales invoices and taxes are calculated precisely. Also, using the ERP data, it will calculate the upfront shipping fees so that a customer can get the exact information (cost and fees) before actually purchasing a product.
    </p>

    {/* THREE FEATURE CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

      {/* ITEM 1 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col">
        <h3 className="text-xl font-semibold text-[#6b3d6e] mb-4">
          Secure Payment Gateway
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Sana Commerce offers a fully secured payment gateway using PCI DSS certification with support for local currencies and different payment modes. Once a payment is completed, it securely deposits the payment to the primary account, offering instant credit visibility.
        </p>
      </div>

      {/* ITEM 2 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col">
        <h3 className="text-xl font-semibold text-[#6b3d6e] mb-4">
          Secured Data Servers
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          The servers of Sana Commerce are deployed using Azure hosting, the most secure and reliable cloud data servers offered by Microsoft, hosted on SQL Azure servers. With 99.9% uptime, Azure offers optimal performance and the best architecture for all data transactions.
        </p>
      </div>

      {/* ITEM 3 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col">
        <h3 className="text-xl font-semibold text-[#6b3d6e] mb-4">
          Scalable
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Whenever your business grows, you can scale the entire system with ease. It can easily adapt to high order volumes while optimising the existing processes to get more results out of the limited resources. All such changes can be done with the help of your Sana Commerce implementation partner.
        </p>
      </div>

    </div>
  </div>
</section>



        </PageLayout>
    );
}
