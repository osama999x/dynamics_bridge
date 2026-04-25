export default function Testimonials() {
  const testimonials = [
    {
      name: 'Terence Turner',
      role: 'General Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.',
    },
    {
      name: 'Jonathan W',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      quote: 'We have worked with Dynamics Square since 2019. Our working relationship has built during this period, and we have found them to be very professional.',
    },
    {
      name: 'Mark Shaxted',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      quote: 'Dynamics Square has been a solid partner for 4 years, skillfully upgrading our Microsoft Dynamics NAV to Dynamics 365 Business Central. They offer great value and professionalism.',
    },
  ];

  // New studies data
  const caseStudies = [
    {
      title: "Ireland's Leading Saddlery Retailer Boosted Warehouse Efficiency by 60%",
      category: 'Upgrade',
      image: '/resources/old-mill-feature.jpg',
      link: '/case-studies/ireland-saddlery', // add individual page link
    },
    {
      title: 'Food trader boosted operational control by 162% ROI',
      category: 'Implementation',
      image: '/resources/mgg-food-feautre.jpg',
      link: '/case-studies/food-trader', // add individual page link
    },
    {
      title: 'Manufacturing company improved reporting efficiency',
      category: 'Support',
      image: '/resources/ALMI-Group.jpg',
      link: '/case-studies/manufacturing-company', // add individual page link
    },
    {
      title: 'Car Restoration & Customization Leader Boosts ROI by 30% with Business Central',
      category: 'Implementation',
      image: '/resources/Omicron-Engineering.jpg',
      link: '/case-studies/car-restoration', // add individual page link
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E83] mb-4">
              Delivering Impact Where It Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Dynamics Zentrum, we&apos;ve guided businesses to optimise operations and boost
               performance. As a results-driven Microsoft Dynamics 365 partner in the UK, we&apos;
               ve helped clients achieve 4x revenue growth, 87% customer retention, and real 
               transformation through strategic implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4B2E83]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E83] mb-4">
              See how our customers drive impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3 leading-relaxed">{study.title}</p>

                 
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/resources/case-studies"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Explore more use cases →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
