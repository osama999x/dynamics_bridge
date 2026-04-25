'use client';
import PageLayout from '@/app/components/PageLayout';
import { useState } from "react";

// -----------------------
// BUSINESS CENTRAL ACCORDION
// -----------------------
function Accordion() {
    const [open, setOpen] = useState<number | null>(null);

    const items = [
        {
            title: "Inventory Management",
            content:
                "Track stock levels, manage warehouses, and maintain optimal inventory to avoid shortages or overstocking.",
        },
        {
            title: "Order Fulfilment",
            content:
                "Manage the complete order lifecycle from sales to delivery while ensuring accuracy and customer satisfaction.",
        },
        {
            title: "Financial Management",
            content:
                "Handle accounting, budgeting, reporting, and cash flow management with real-time financial insights.",
        },
    ];

    return (
        <div className="space-y-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="border rounded-xl shadow-sm hover:shadow-md transition"
                >
                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex justify-between items-center p-5 text-left"
                    >
                        <span className="font-semibold text-lg">{item.title}</span>
                        <span
                            className={`text-2xl font-bold transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                }`}
                        >
                            +
                        </span>
                    </button>

                    <div
                        className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden px-5 pb-5 text-gray-600">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// -----------------------
// SHOPIFY ACCORDION
// -----------------------
function ShopifyAccordion() {
    const [open, setOpen] = useState<number | null>(null);

    const items = [
        {
            title: "Build Store with Ease",
            content:
                "Create and customise your online store using drag-and-drop tools and ready-made templates without coding.",
        },
        {
            title: "Seamless Product Management",
            content:
                "Easily add, update, and organise products, inventory, and pricing from a single dashboard.",
        },
        {
            title: "Simplified Payment Processing",
            content:
                "Accept global payments securely with multiple gateways and smooth checkout experiences.",
        },
    ];

    return (
        <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
                Shopify: Your Interactive Shopfront for Global Customers
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
                Shopify is an interactive and user-friendly platform that empowers
                businesses to build and deploy e-commerce stores within minutes. It
                enables you to list products and sell globally with ease.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
                With pre-built templates and drag-and-drop features, even beginners
                can build stores. Core functions include:
            </p>

            <div className="space-y-4">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="border rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex justify-between items-center p-5 text-left"
                        >
                            <span className="font-semibold text-lg">{item.title}</span>
                            <span
                                className={`text-2xl font-bold transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                    }`}
                            >
                                +
                            </span>
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden px-5 pb-5 text-gray-600">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ShopifyConnectorAccordion() {
    const [open, setOpen] = useState<number | null>(null);

    const items = [
        {
            title: "BI-Directional Sync",
            content:
                "Synchronise data seamlessly between Shopify and Business Central in real-time, ensuring accurate information across platforms.",
        },
        {
            title: "Streamline Stock Management",
            content:
                "Automatically update inventory levels, track stock movement, and prevent overselling or stockouts.",
        },
        {
            title: "Streamlined Customer Experience",
            content:
                "Improve customer satisfaction by automating order updates, payments, and shipping notifications.",
        },
    ];

    return (
        <div className="space-y-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="border rounded-xl shadow-sm hover:shadow-md transition"
                >
                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex justify-between items-center p-5 text-left"
                    >
                        <span className="font-semibold text-lg">{item.title}</span>
                        <span
                            className={`text-2xl font-bold transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                }`}
                        >
                            +
                        </span>
                    </button>

                    <div
                        className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden px-5 pb-5 text-gray-600">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
const caseStudies = [
    {
        title: "Case Study 1",
        challenge:
            "A clothing store was unable to get inventory updates in real-time between their POS system and Shopify Store. This was leading them to a loss due to stock-outs and missed sales leads.",
        solution:
            "The integration of Shopify with Business Central synced inventory levels automatically across platforms. It provided them with real-time stock visibility and avoided any chances of overstocking or stocking out. This reduced the chances of stock-outs and provided them with enhanced sales opportunities.",
    },
    {
        title: "Case Study 2",
        challenge:
            "A personalised jewellery brand is unable to get clear visibility across the buying patterns of customers and their behaviour. It is becoming difficult for them to pitch customers with personalised offers through targeted marketing campaigns.",
        solution:
            "The integration of Shopify with Business Central enables businesses to collect customer data in real-time along with a complete customer profile in Business Central. It allows the business to analyse customer interactions and build personalised marketing campaigns, leading to enhanced sales, a better customer experience, and more revenue.",
    },
    {
        title: "Case Study 3",
        challenge:
            "An electronics business is facing delays in processing online orders due to manual data entry in their ERP system. This critical issue is leading the business towards low order fulfilment rates and unsatisfied customers.",
        solution:
            "The integration of Business Central with Shopify through Shopify Connector has solved the issue they were facing. Now, they can fulfil orders on time, eliminating the need to enter manual data. Also, the processing time has increased, and customers are happy with the service they are offering.",
    },
];

const leftBenefits = [
    {
        iconSrc: "/solutions/Increased-Sales-sofi.avif",
        title: "Increased Sales",
        description:
            "Automation and streamlined order processing lead businesses to generate more sales with their existing resources.",
    },
    {
        iconSrc: "/solutions/_Lowered-Overall-Costs.avif",
        title: "Lowered Overall Costs",
        description:
            "Elimination of manual data entry and reduction of human errors count for saving time as well as money.",
    },
    {
        iconSrc: "/solutions/_Enhanced-Inventory-Management.avif",
        title: "Enhanced Inventory Management",
        description:
            "Get real-time visibility of the entire inventory and track the stock status to perform proper order fulfilment.",
    },
];

const rightBenefits = [
    {
        iconSrc: "/solutions/Increased-Customer-Satisfaction.avif",
        title: "Increased Customer Satisfaction",
        description:
            "Captured customer profiles and data lead the business to contact the customer with a personalised approach, resulting in better customer satisfaction.",
    },
    {
        iconSrc: "/solutions/_Centralises-Data.avif",
        title: "Centralises Data",
        description:
            "Leverage the power of cloud data deployment to centralise the data available in Shopify and Business Central.",
    },
    {
        iconSrc: "/solutions/_Improved-Data-Accuracy-sofi.png",
        title: "Improved Data Accuracy",
        description:
            "Accurate data synchronisation drives the business to lower the rate of errors to achieve a lower complaint and return rate.",
    },
];


// -----------------------
// PAGE COMPONENT
// -----------------------
export default function ShopifyConnectorPage() {
    return (
        <PageLayout>
            {/* HERO */}
            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                                Shopify Connector for Microsoft Dynamics 365 Business Central
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8">
                                Digitalise your commerce business to serve global customers,
                                earn maximised profits, and simplify your business operations
                                with Shopify Connector for Microsoft Dynamics 365 Business
                                Central.
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Get Started Now!
                            </a>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/solutions/Shopify-Connector-banner.avif"
                                alt="Shopify Connector"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
                        Uplift your E-commerce Business with Shopify & Business Central
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        In a world of sheer market competition, the success of a business depends on the systematic approach of leveraging
                        technologies to simplify business operations and make data-driven decisions for better output. The collaboration of
                        Dynamics 365 Business Central and Shopify can empower you to maximise profits and achieve your goals on time.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        You can leverage the capabilities of Shopify Connector to easily connect Shopify with Business Central, enabling
                        you to streamline your business operations while supercharging your e-commerce game.
                    </p>
                </div>
            </section>

            {/* BUSINESS CENTRAL ACCORDION */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
                                Business Central: Your all-in-one Business Management Solution
                            </h2>

                            <p className="text-gray-600 mb-6">
                                Microsoft Dynamics 365 Business Central is a powerful yet flexible solution with advanced tools and capabilities to
                                manage a business from scratch. D365 BC is a cloud-based solution that can streamline different processes, centralise
                                the entire database, offer collaboration opportunities, and empower you to make real-time decisions.
                            </p>

                            <p className="text-gray-600 mb-6">
                                For e-commerce companies, the implementation of Business Central acts as a backend solution that manages all back-office
                                functions with full accuracy. However, it can perform other functions as well, like:
                            </p>

                            <Accordion />
                        </div>

                        <div className="flex justify-center">
                            <img
                                src="/solutions/all-in-one-bc.avif"
                                alt="Business Central"
                                className="w-[600px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* SHOPIFY ACCORDION SECTION */}
            <section className="bg-gray-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src="/solutions/Interactive-Shopfront.avif"
                                alt="Shopify Store"
                                className="w-[600px] max-w-full h-auto object-contain"
                            />
                        </div>

                        {/* RIGHT ACCORDION */}
                        <ShopifyAccordion />

                    </div>
                </div>
            </section>

            {/* SHOPIFY CONNECTOR AUTOMATION SECTION */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE: TEXT + ACCORDION */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
                                Automate Your E-Commerce with the Shopify Connector
                            </h2>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                The Shopify Connector is an application that can establish a connection
                                between Business Central and Shopify with ease. It builds a reciprocating
                                connection between solutions so that an update in one solution is reflected
                                in the other in real-time.
                            </p>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                With a full-user Business Central licence, a user can access Shopify Connector
                                from Microsoft’s marketplace. After downloading, one can proceed to establish
                                a connection by entering the necessary information, like APIs or access keys.
                            </p>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                The integration of Shopify with Business Central eliminates manual data entry
                                and automates core e-commerce processes. Major features include:
                            </p>

                            {/* ACCORDION */}
                            <ShopifyConnectorAccordion />
                        </div>

                        {/* RIGHT SIDE: IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src="/solutions/Automate-Your-E-Commerce.avif"
                                alt="Shopify Connector Integration"
                                className="w-[600px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* HERO IMPLEMENTATION SUPPORT SECTION */}
            <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                        Streamline your e-commerce with Shopify Connector
                    </h1>

                    <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
                        Simplify business operations, get valuable insights, and achieve consistent growth in tough competition with expert guidance.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                    >
                        Contact a Dynamics 365 Integration Expert!
                    </a>

                </div>
            </section>

            {/* CASE STUDIES SECTION */}
            <section className="bg-gray-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT SIDE: TEXT */}
                        <div className="mt-18">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
                                Successful Shopify<br /> Integration with <br />Business Central
                            </h2>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We have integrated Shopify Connector into<br /> different industries to resolve
                                complex <br />challenges and push them towards growth. <br />Some of the case studies are:
                            </p>
                        </div>


                        {/* RIGHT SIDE: SCROLLABLE CASE STUDIES */}
                        <div className="overflow-y-auto max-h-[600px] space-y-8 pr-4">
                            {caseStudies.map((caseItem, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
                                    <h3 className="text-xl font-semibold text-[#1F2A44] mb-4">
                                        {caseItem.title}
                                    </h3>

                                    <div className="mb-3">
                                        <span className="font-semibold">Challenge:</span>
                                        <p className="text-gray-700 mt-1">{caseItem.challenge}</p>
                                    </div>

                                    <div>
                                        <span className="font-semibold">Solution:</span>
                                        <p className="text-gray-700 mt-1">{caseItem.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

           {/* BENEFITS SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-6">
      Benefits of Shopify Connector
    </h2>

    <p className="text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      The integration of Shopify with Business Central features numerous benefits for businesses. Some of the major benefits are:
    </p>

    {/* GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* LEFT COLUMN */}
      <div className="space-y-6">
        {leftBenefits.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <img
              src={item.iconSrc}
              alt={item.title}
              className="w-12 h-12"
            />
            <div className="text-left">
              <h3 className="font-semibold text-lg text-[#1F2A44]">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">
        {rightBenefits.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <img
              src={item.iconSrc}
              alt={item.title}
              className="w-12 h-12"
            />
            <div className="text-left">
              <h3 className="font-semibold text-lg text-[#1F2A44]">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>

  </div> 
</section> 





        </PageLayout >
    );
}
