import PageLayout from '@/app/components/PageLayout';

export default function WebDevelopmentPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-[#4B2E83] to-[#6B46C1] text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">Web Development Services</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Build custom web applications and integrations that extend your Dynamics 365 capabilities and create seamless digital experiences.
          </p>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#4B2E83] mb-6">Custom Web Solutions</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our web development services help you build custom applications, portals, and integrations that extend your Dynamics 365 platform and meet your unique business requirements.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#4B2E83] mb-4">Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Custom web applications</li>
                  <li>✓ Customer and partner portals</li>
                  <li>✓ API development and integration</li>
                  <li>✓ Power Apps development</li>
                  <li>✓ Third-party system integration</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4B2E83] mb-4">Benefits</h3>
              <p className="text-gray-600 mb-4">Extend your Dynamics 365 capabilities, integrate with existing systems, and create tailored solutions that fit your business needs.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/contact-us" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

