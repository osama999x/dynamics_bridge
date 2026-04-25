import PageLayout from '@/app/components/PageLayout';

export default function CRMSolutionsPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-[#4B2E83] to-[#6B46C1] text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">CRM Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Increase Revenue and Customer Satisfaction with comprehensive CRM solutions that help you manage customer relationships and drive sales growth.
          </p>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#4B2E83] mb-6">Complete CRM Platform</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our CRM solutions combine Dynamics 365 Sales, Customer Service, Marketing, and Field Service to provide a complete view of your customer relationships.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#4B2E83] mb-4">Key Components</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Sales force automation</li>
                  <li>✓ Customer service management</li>
                  <li>✓ Marketing automation</li>
                  <li>✓ Field service operations</li>
                  <li>✓ Customer analytics and insights</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4B2E83] mb-4">Benefits</h3>
              <p className="text-gray-600 mb-4">Improve customer relationships, increase sales productivity, and deliver exceptional customer experiences across all touchpoints.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/contact-us" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Explore CRM Solutions →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

