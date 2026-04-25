export default function Resources() {
  const resources = [
    {
      type: 'Whitepaper',
      title: 'Microsoft Copilot: The Catalyst for Transformation in Your Business',
      image: '/resource1.avif',
      link: '/resources/white-papers', 
    },
    {
      type: 'Whitepaper',
      title: 'The Future of Finance Management',
      image: '/resource2.avif',
      link: '/resources/white-papers', 
    },
    {
      type: 'Guide',
      title: 'A Complete Guide to Dynamics CRM',
      image: '/resource3.avif',
      link: '/resources/guides', 
    },
    {
      type: 'Calculator',
      title: 'Dynamics 365 ERP Implementation Price Calculator',
      image: '/resource4.avif',
      link: '/resources/erp-calculator', 
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#4B2E83] mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover knowledge-packed resources designed to help you make informed decisions with the support of a reliable Microsoft Dynamics ERP partner and innovation-led Microsoft Solutions Partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Full Image */}
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-auto object-cover"
              />

              <div className="p-4">
                <span className="inline-block bg-purple-100 text-[#4B2E83] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {resource.type}
                </span>
                <h3 className="text-lg text-[#4B2E83] mb-3">{resource.title}</h3>

                {/* Animated Read More */}
                <a
                  href={resource.link}
                  className="text-[#4B2E83] font-semibold relative inline-block group"
                >
                  Read more
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#4B2E83] transition-all group-hover:w-full"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
