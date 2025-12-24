export default function FeaturedOn() {
  const platforms = [
    { name: 'Manufacturing Today', logo: 'MT' },
    { name: 'Tech Partner Impact Awards', logo: 'TPIA' },
    { name: 'Forbes Technology Council', logo: 'FTC' },
    { name: 'ERP Blog', logo: 'ERP' },
    { name: 'MSDynamicsWorld', logo: 'MSDW' },
    { name: 'Clutch', logo: 'Clutch' },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83] mb-4">
            Featured On
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to share that our work and insights have appeared across respected platforms like Clutch, Manufacturing Today, Forbes Technology Council, Tech Partner Impact Awards, and ERPSoftwareBlog, reflecting the trust and recognition we carry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#4B2E83] to-purple-600 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm text-center">{platform.logo}</span>
              </div>
              <p className="text-sm text-gray-600 text-center font-semibold">{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

