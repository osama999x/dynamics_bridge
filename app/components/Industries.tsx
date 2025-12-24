export default function Industries() {
  const industries = [
    {
      name: 'Education',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      description: 'Empowering educational institutions with innovative solutions.',
    },
    {
      name: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      description: 'Streamlining operations for manufacturing excellence.',
    },
    {
      name: 'Food & Beverages',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      description: 'Optimizing supply chains and quality control.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83] mb-4">
            Your Industry? Our Expertise!
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Dynamics Square brings decades of profound industry expertise that merges ongoing industry insights with Microsoft technology to help you capitalise on your biggest opportunities. As a trusted Microsoft Dynamics 365 implementation partner, we deliver solutions customised for your business growth. Whether you&apos;re in retail, manufacturing, education, or healthcare, we&apos;re the Microsoft Dynamics 365 implementation partner UK businesses trust to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

