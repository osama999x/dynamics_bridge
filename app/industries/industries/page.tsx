'use client';

import PageLayout from '@/app/components/PageLayout';
import Link from 'next/link';

const industries = [
    {
        title: "Distribution",
        image: "/industries/distuburation.jpg",
        heading: "Optimise Supply Chains",
        subheading: "Accelerate Order Fulfilment",
        link: "/industries/distribution",
        points: [
            "Improved Inventory Visibility",
            "Faster Order Processing",
            "Smarter Demand Forecasting",
        ],
    },
    {
        title: "Manufacturing",
        image: "/industries/rectangle-01.jpg",
        heading: "Streamline Processes",
        subheading: "Maximise Production",
        link: "/industries/manufacturing",
        points: [
            "Increased Inventory Management",
            "Improved Production Planning",
            "Streamlined Quality Control",
        ],
    },
    {
        title: "Retail",
        image: "/industries/rectangle-02.jpg",
        heading: "Digitalise Retail",
        subheading: "Empower Customers",
        link: "/industries/retail",
        points: [
            "Personalised Customer Experiences",
            "Optimised Inventory Management",
            "Seamless Omnichannel Retailing",
        ],
    },
    {
        title: "Healthcare",
        image: "/industries/rectangle-03.jpg",
        heading: "Boost Patient Care",
        subheading: "Maximise Efficiency",
        link: "/industries/healthcare",
        points: [
            "Better Patient Care",
            "Enriched Clinical Efficiency",
            "Efficient Medical Administration",
        ],
    },
    {
        title: "E-Commerce",
        image: "/industries/rectangle-10.jpg",
        heading: "Elevate Sales",
        subheading: "Capture Global Customers",
        link: "/industries/ecommerce",
        points: [
            "Developed Customer Experience",
            "Maximised Inventory Management",
            "Omnichannel Integration",
        ],
    },

    {
        title: "Professional Services",
        image: "/industries/rectangle-05.jpg",
        heading: "Delight Customers",
        subheading: "Build Strong Relationships",
        link: "/industries/professional-services",
        points: [
            "Boosted Project Visibility",
            "Improved Resource Optimisation",
            "Amplified Client Satisfaction",
        ],
    },
    {
        title: "Food & Beverages",
        image: "/industries/rectangle-11.jpg",
        heading: "Delight Your Customers",
        subheading: "Grow Your Brand",
        link: "/industries/food-beverages",
        points: [
            "Optimized Operations",
            "Customer Engagement",
            "Data-Driven Insights",
        ],
    },

    {
        title: "Education",
        image: "/industries/rectangle-09.jpg",
        heading: "Empower Students",
        subheading: "Transform Teaching",
        link: "/industries/education",
        points: [
            "Personalized Learning Experiences",
            "Improved Campus Management",
            "Enhanced Alumni Engagement",
        ],
    },
];

export default function IndustriesPage() {
    return (
        <PageLayout>

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h1 className="text-4xl lg:text-5xl font-bold bg-gray-50 leading-tight mb-6">
                        Unlock the Power of Dynamics 365 <br />
                        Tailored to Your Industry Needs
                    </h1>

                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
                        Explore how Dynamics 365 transforms your industry,
                        empowering your business to <br/>innovate, grow, and succeed.
                    </p>

                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mb-4"
                    >
                        Contact Us
                    </Link>

                    <p className="text-sm text-gray-600">
                        Discover how we can customize Dynamics 365
                        <br />
                        for your specific business needs.
                    </p>

                </div>
            </section>

            {/* INDUSTRIES CARDS */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {industries.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                        >

                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-56 w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h4 className="font-semibold text-lg">
                                    {item.heading}<br />
                                    {item.subheading}
                                </h4>

                                <ul className="mt-4 space-y-2 text-gray-600 text-sm list-disc list-inside">
                                    {item.points.map((p, idx) => (
                                        <li key={idx}>{p}</li>
                                    ))}
                                </ul>

                                <Link
                                    href={item.link}
                                    className="inline-block mt-4 text-red-600 font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Learn More
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>
            </section>

            <section className="py-20 bg-gray-50">
  {/* Top Centered Heading */}
  <div className="text-center max-w-3xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
    <h3 className="text-2xl text-red-600 font-semibold mb-4">Your Business. Our Expertise</h3>
    <p className="text-gray-700">
      We're more than a service provider; we're your strategic partner in growth. From simplifying business operations
      to resolving critical errors, our tailored solutions are designed to drive efficiency, improve profitability,
      and deliver exceptional results.
    </p>
  </div>

  {/* Cards */}
  <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
    
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img src="/industries/in-icon-01.png" alt="Successful Implementation" className="mx-auto mb-4 w-16 h-16" />
      <h4 className="text-xl font-semibold mb-2">Successful Implementation</h4>
      <p className="text-gray-600">350+ Businesses Trust Us: Successful businesses have chosen us for transformative results.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img src="/industries/in-icon-02.png" alt="Certified Professionals" className="mx-auto mb-4 w-16 h-16" />
      <h4 className="text-xl font-semibold mb-2">Certified Professionals</h4>
      <p className="text-gray-600">150+ Consultants are just a call away: Our expert consultants are always ready to assist you.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img src="/industries/in-icon-03.png" alt="Quick Turnaround Time" className="mx-auto mb-4 w-16 h-16" />
      <h4 className="text-xl font-semibold mb-2">Quick Turnaround Time</h4>
      <p className="text-gray-600">24/7 Availability for Constant Growth: We're committed to your success, offering round-the-clock assistance.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img src="/industries/in-icon-04.png" alt="Long-term Commitment" className="mx-auto mb-4 w-16 h-16" />
      <h4 className="text-xl font-semibold mb-2">Long-term Commitment</h4>
      <p className="text-gray-600">14+ Years of Industrial Experience: Leverage our deep-rooted industry knowledge and proven track record.</p>
    </div>

  </div>
</section>


        </PageLayout>
    );
}
