export default function Resources() {
  const resources = [
    {
      type: 'Whitepaper',
      title: 'Microsoft Copilot: The Catalyst for Transformation in Your Business',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    },
    {
      type: 'Whitepaper',
      title: 'The Future of Finance Management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      type: 'Guide',
      title: 'A Complete Guide to Dynamics CRM',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      type: 'Calculator',
      title: 'Dynamics 365 ERP Implementation Price Calculator',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83] mb-4">
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
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-purple-100 text-[#4B2E83] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {resource.type}
                </span>
                <h3 className="text-lg font-semibold text-[#4B2E83] mb-3">{resource.title}</h3>
                <a href="#" className="text-[#4B2E83] font-semibold hover:underline">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

