import PageLayout from '@/app/components/PageLayout';

export default function GuidesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-black">Microsoft Dynamics Guides</h1>
            <p className="text-xl mb-8 text-gray-600">
              Our guides provide in-depth analysis, emerging technology updates, advanced ERP and CRM solutions to help you grow.
            </p>
          </div>

          {/* Right Image from public folder */}
          <div className="md:w-1/2">
            <img
              src="/resources/guide-main-banner.avif" 
              alt="Microsoft Dynamics Illustration"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Digital Transformation Section */}
      <div className="py-20 px-4 bg-gray-50 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-black">Make your digital transformation journey a success</h2>
          <p className="text-xl mb-12 text-gray-600">Latest Guides</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/resources/chapter5-5 (1).avif" 
                alt="Business Central Guide"
                className="w-full h-58 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">Business Central: The Definitive Guide For SMBs</h3>
                <a
                  href="#"
                  className="inline-block mt-2 px-5 py-2 rounded-lg border border-[#4B2E83] text-[#4B2E83] font-semibold hover:bg-[#f0f0f0] transition"
                >
                  View the Guide
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/resources/group-2308.avif" 
                alt="Power BI Guide"
                className="w-full h-58 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">Power BI: The Definitive Guide For SMBs</h3>
                <a
                  href="#"
                  className="inline-block mt-2 px-5 py-2 rounded-lg border border-[#4B2E83] text-[#4B2E83] font-semibold hover:bg-[#f0f0f0] transition"
                >
                  View the Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
