'use client';
import PageLayout from '@/app/components/PageLayout';

export default function TrainingPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Microsoft Dynamics<br />365 Training
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Understand all functionalities, boost productivity, and utilize Microsoft Solutions
                at its best by leveraging simplified Dynamics 365 training.
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Talk to an Expert Now!
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/services/Microsoft-Dynamics-365-Training.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>

          </div>
          {/* 🔽 CENTERED CONTENT (UPDATED) */}
          <div className="mt-24 flex justify-center">
            <div className="max-w-4xl text-center">

              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Empower your Team with Tailored Dynamics 365 <br />Training
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Get proper Dynamics 365 training in the UK from an authorised Microsoft Solutions
                Partner to utilise your Microsoft ERP or CRM solution at its best. By investing
                in tailored training, you can empower your team to harness the power of the
                Microsoft ERP solution, utilising its tools, capabilities, and functionalities.
                With the precise knowledge of a solution, you can drive your team towards
                enhanced productivity with maximised output.
              </p>

            </div>
          </div>
        </div>
      </section>
   {/* DYNAMICS 365 TRAINING TYPES SECTION */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">

    {/* Left Side Description */}
    <div className="md:w-1/2">
    <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A44] mb-4">
        Dynamics 365 Training Types
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
          Once we close an implementation deal, the training of a specific solution comes as a
           complement to our proposal. This lets us help you save a lot of resources by not 
           investing in highly priced training sessions.
      </p>
      <p className="text-gray-600 leading-relaxed">
        However, some businesses require training at different milestones of growth, 
        like with new integrations, customizations, and newly added add-ons. The types of 
        training they can opt for are:
      </p>
    </div>

    {/* Right Side Training Types */}
    <div className="md:w-1/2 flex flex-col gap-6">
      
      {/* Basic User Training */}
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 mt-1 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-gray-600 leading-relaxed">
          <strong>Basic User Training:</strong> Choose this training to understand the basic functionality of a system so that you can operate it and process simple operations.
        </p>
      </div>

      {/* Advanced User Training */}
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 mt-1 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-gray-600 leading-relaxed">
          <strong>Advanced User Training:</strong> Choose this training to deep dive into the advanced capabilities of a solution to properly utilise the solution.
        </p>
      </div>

      {/* Technical Training */}
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 mt-1 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-gray-600 leading-relaxed">
          <strong>Technical Training:</strong> Avail this training to understand and modify the technicalities of a Dynamics 365 CRM or ERP solution.
        </p>
      </div>

      {/* Instructor Training */}
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 mt-1 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-gray-600 leading-relaxed">
          <strong>Instructor Training:</strong> Empower your instructor with the required knowledge so that your team can get the training from an in-house member.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B]  mt-12 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

          {/* Left Side Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/services/MaskGroup8.png" 
              alt="Training Illustration"
              className="w-2/3 max-w-xs object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 text-center md:text-left text-white">
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">
              Get Seamless and Cost-effective Training
            </h1>

            <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
              Choose the training based on your implemented solution and tailor it as per your needs.
              Get onboard by our training specialists to ensure the right working of your Dynamics solution.
            </p>

            <a
              href="/contact-us"
              className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Schedule a Call Now
            </a>
          </div>

        </div>
      </section>



      {/* OUR CORE PURPOSE OF TRAINING */}
      <section className="mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#1F2A44] mb-4">
            Our Core Purpose of Training
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Based on our expertise, we have built user-adoption criteria that build a strong,
            transparent bridge between the trainee and the trainer to ensure the right training.
            These training standards empower us to
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-b from-white to-[#FFE9EC] rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

            {/* Educate You */}
            <div className="flex gap-6">
              <img
                src="/services/icons-commerce_user-experience.svg"
                className="w-16 h-16 object-contain"
                alt="Educate You"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Educate You</h4>
                <p className="text-gray-600 leading-relaxed">
                  We will educate your team to understand the sole purpose of the implemented Microsoft solution.
                </p>
              </div>
            </div>

            {/* Empower You */}
            <div className="flex gap-6">
              <img
                src="/services/icons_Customer-Feedback.svg"
                className="w-16 h-16 object-contain"
                alt="Empower You"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Empower You</h4>
                <p className="text-gray-600 leading-relaxed">
                  We will empower you to properly utilise the solution to streamline business operations and enhance team efficiency.
                </p>
              </div>
            </div>

            {/* Simplify Operations */}
            <div className="flex gap-6">
              <img
                src="/services/connect-collaborate-1.svg"
                className="w-16 h-16 object-contain"
                alt="Simplify Operations"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Simplify Operations</h4>
                <p className="text-gray-600 leading-relaxed">
                  We will help you understand all the tools and functionality of Microsoft Solutions to simplify your business with cutting-edge technology.
                </p>
              </div>
            </div>

            {/* Transform Business */}
            <div className="flex gap-6">
              <img
                src="/services/icons-implementation-service_Sales-.svg"
                className="w-16 h-16 object-contain"
                alt="Transform Business"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#1F2A44] mb-2">Transform Business</h4>
                <p className="text-gray-600 leading-relaxed">
                  We will help you transform your business by leveraging modern AI technology to automate processes and unlock the full potential of your business solution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Trainings for all Business Requirement – Remote, On-site, <br />and Hybrid
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
            Based on the complexity of business solutions, we offer training in all forms,
            including remote, on-site, and hybrid training solutions. As per the training
            requirements, you can choose the most reliable Microsoft Dynamics 365 training.
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            Get Started Now
          </a>

        </div>
      </section>

      {/* NEW PARTNER SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
              <img
                src="/services/proffesionalserviceside.avif"
                alt="Microsoft Dynamics 365 Implementation Partner"
                className="w-[600px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
                Why trust Dynamics Square to <br />Understand a Microsoft Solution?
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                With 12+ years of experience in the industry, we can ensure you that we
                have all the essential resources that can help you get started with your
                Microsoft 365 solution. We have a proven track record of success in helping
                organisaitons with understanding and implementing Dynamics 365 solutions.
                With the deep expertise with the solutions of Microsoft 365 ecosystem,
                we can tailor the training program to suit your specific needs.

              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Here are the reasons why you should choose Dynamics Square for any training:
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Expertise: With a team of highly skilled and experienced Dynamics 365 consultants,
                we are available to help you understand Dynamics 365 solution with the best
                possible support and training.
              </p>


              <p className="text-gray-600 mb-4 leading-relaxed">
                Experience: While working with 350+ global clients of all sizes, we have gained
                extensive experience of dealing with various business challenges and opportunities.
                This experience will let us develop unique training programs to address your
                unique business needs.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Business-Centric Approach: We follow a business centric approach to understand
                your business needs, goals, and complexity of solution. Once we have the data,
                we prepare the training programs that are aligned with the specific business
                needs resulting in getting the most out of your investment in Microsoft solutions.
              </p>
            </div>

          </div>
        </div>
      </section>




    </PageLayout>
  );
}
