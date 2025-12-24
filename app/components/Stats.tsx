export default function Stats() {
  const stats = [
    {
      number: '500+',
      description: 'Innovative implementations delivered with strategy, precision, and success.',
    },
    {
      number: '150+',
      description: 'Skilled professionals with deep, industry-specific expertise driving innovation.',
    },
    {
      number: '14+',
      description: 'Years of industry mastery, delivering excellence in every solution.',
    },
    {
      number: '12+',
      description: 'Industries transformed with cutting-edge technology and innovation.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4B2E83] mb-4">
                {stat.number}
              </div>
              <p className="text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

