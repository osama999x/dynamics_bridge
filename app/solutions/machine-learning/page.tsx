import PageLayout from '@/app/components/PageLayout';

export default function MachineLearningPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-[#4B2E83] to-[#6B46C1] text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">Machine Learning Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Leverage the power of AI and machine learning to gain predictive insights, automate processes, and drive intelligent decision-making.
          </p>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#4B2E83] mb-6">AI & Machine Learning</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Build, deploy, and manage machine learning models with Azure Machine Learning and integrate AI capabilities into your business applications.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#4B2E83] mb-4">Key Capabilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Azure Machine Learning platform</li>
                  <li>✓ Pre-built AI models and APIs</li>
                  <li>✓ Custom model development</li>
                  <li>✓ Automated ML workflows</li>
                  <li>✓ Integration with Dynamics 365</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4B2E83] mb-4">Benefits</h3>
              <p className="text-gray-600 mb-4">Unlock predictive insights, automate decision-making, and create intelligent applications that learn and adapt.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/contact-us" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

