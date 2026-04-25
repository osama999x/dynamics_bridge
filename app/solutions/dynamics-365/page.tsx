import PageLayout from '@/app/components/PageLayout';

export default function Dynamics365Page() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-[#4B2E83] to-[#6B46C1] text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">Microsoft Dynamics 365</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Transform your business with Microsoft Dynamics 365, a comprehensive suite of intelligent business applications that unify CRM and ERP capabilities.
          </p>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#4B2E83] mb-6">What is Microsoft Dynamics 365?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Microsoft Dynamics 365 is a cloud-based business applications platform that combines Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) capabilities. It provides a comprehensive suite of applications designed to help organizations manage their entire business operations from a single platform.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With Dynamics 365, businesses can streamline operations, improve customer relationships, and drive growth through intelligent automation and AI-powered insights.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4B2E83] mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unified CRM and ERP capabilities in one platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered insights and automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Scalable cloud-based architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Seamless integration with Microsoft 365</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time analytics and reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#4B2E83] mb-8">Core Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Business Central', desc: 'Complete ERP solution for SMBs' },
                { name: 'Finance', desc: 'Financial management and operations' },
                { name: 'Supply Chain', desc: 'Supply chain optimization' },
                { name: 'Sales', desc: 'Sales force automation' },
                { name: 'Customer Service', desc: 'Customer support management' },
                { name: 'Field Service', desc: 'Field service operations' },
                { name: 'Marketing', desc: 'Marketing automation' },
                { name: 'Commerce', desc: 'E-commerce platform' },
                { name: 'Human Resources', desc: 'HR management system' },
              ].map((app, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#4B2E83] mb-2">{app.name}</h3>
                  <p className="text-gray-600">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact-us"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started with Dynamics 365 →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

