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

  const caseStudies = [
    {
      title: "London's top college boosts departmental synergy by 80% with a system upgrade.",
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
    },
    {
      title: 'A car restoration company boosted ROI by 30% through custom solutions.',
      category: 'Automotive',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
    },
    {
      title: 'A renowned UK defence apparel company maximised efficiency by 50%.',
      category: 'Defense',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    },
    {
      title: 'Strategic advancements led an orthopedic implant manufacturer to 60% more visibility.',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83] mb-4">
              Delivering Impact Where It Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Dynamics Square, we&apos;ve guided businesses to optimise operations and boost performance. As a results-driven Microsoft Dynamics 365 partner in the UK, we&apos;ve helped clients achieve 4x revenue growth, 87% customer retention, and real transformation through strategic implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-purple-50 p-6 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83] mb-4">
              See how our customers drive impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3 leading-relaxed">{study.title}</p>
                  <a href="#" className="text-[#4B2E83] font-semibold hover:underline">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore more use cases →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

