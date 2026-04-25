import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Consulting',
      description: 'We study how your business runs today and show where Microsoft Dynamics 365 can add real value. Every feature is matched carefully with your goals so that the system supports you in the best way.',
      link: '/services/consultants',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Implementation',
      description: 'From Dynamics 365 Business Central to Dynamics 365 Finance and other systems, we manage every part of setup. Our aim is to deliver a clean start that keeps daily work running without stress or stops.',
      link: '/services/implementation',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Upgrade',
      description: 'Our team works quietly in the background, so your systems stay smooth and strong. This helps your people focus fully on growing the business without worrying about slowdowns.',
      link: '/services/upgrade',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      ),
      title: 'Ongoing Support',
      description: 'Dynamics Square stays beside you after the system goes live. Our experts keep things working at their best so you can stay focused on building success while feeling secure about your technology.',
      link: '/services/support',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E83] mb-4">
            Our Services: Simple, Clear, and Focused
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Dynamics Zentrum, we bring far more than software setup. We help businesses reach full strength by guiding them with clear advice, smooth execution, and steady support. As a trusted Microsoft Business Solutions Partner, we make work simple by turning problems into chances for growth with consulting, careful delivery, and care that continues long after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-[#4B2E83] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#4B2E83] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <a
                href={service.link}
                className="relative inline-block mt-4 text-[#4B2E83] font-semibold transition-all duration-300 group"
              >
                Learn more
                <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4B2E83] transition-all duration-300 group-hover:w-full"></span>
              </a>

            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services/our-services">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
              Explore More <HiArrowNarrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
