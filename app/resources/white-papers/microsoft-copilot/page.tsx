'use client';

import PageLayout from '@/app/components/PageLayout';

export default function MicrosoftCopilotPage(){
 
    return (
        <PageLayout>
           {/* HERO SECTION */}
<section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE - TEXT */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
      Get Started with Microsoft Copilot: A Guide to AI-induced Business Transformation

        </h1>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/resources/whitepaper-one (1).png"  
          alt="Dynamics GP to Business Central Migration"
          className="w-full max-w-md lg:max-w-lg rounded-2xl"
        />
      </div>

    </div>

  </div>
</section>
{/* PERFECT EBOOK GUIDE SECTION */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CENTER HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-16">
     The White paper will Walk you Through
    </h2>

    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-3 gap-12 items-center">

      {/* LEFT SIDE POINTS */}
      <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "The Role of AI in Building the Future",
          "An Overview of Microsoft Copilot",
          "Copilot: The Need for Modern Businesses"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* CENTER IMAGE */}
      <div className="flex justify-center">
        <img
          src="/resources/tablet-ebook-one.avif"
          alt="Perfect eBook Guide"
          className="w-full max-w-md h-auto rounded-2xl object-cover"
        />
      </div>

      {/* RIGHT SIDE POINTS */}
      <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "The Essence of the Cloud for Productivity",
          "Dealing with Evolving Business Needs",
          "Copilot for Individuals and Organisations"
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

    </div>

  </div>
</section>

{/* WHAT'S MORE ABOUT THIS EBOOK SECTION */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE IMAGE */}
<div className="flex justify-center lg:justify-start">
  <img
    src="/resources/erp-left-about.png"
    alt="What's more about this eBook"
    className="w-full max-w-sm h-auto rounded-2xl object-cover"
  />
</div>

   <div className="text-gray-700 space-y-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">
    What’s More in This White Paper?
  </h2>

  <p>
    This white paper will guide you through the substantial impact of AI on our daily lives as well as business. It will help you understand the impact of AI for businesses, the introduction to Microsoft's in-house AI assistance - Copilot, and its integration with other solutions in the Dynamics 365 Ecosystem.
  </p>

  <p>
    From start to finish, you will find the facts and latest statistics to justify the statements about AI, digital transformation, business efficiency, and innovation-driven digital transformation. This white paper offers the essential information you need to know about the current scenarios of AI and its different aspects.
  </p>

  <p>
    Reading this in-depth piece of knowledge enables businesses to implement automation, increase productivity, and ensure high-end data security. Even so, you will get to know the different deployment options and what suits you best to meet your business needs.
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
                         Want to digitally transform your business with AI and modern tech?
                        </h1>
                          <p className="text-sm md:text-base max-w-lg mb-5 opacity-90">
                          Press the Download Now button and uncover the knowledge, especially curated for you. </p>
                        <a
                            href="/contact-us"
                            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                        >
                          Get a copy now!
                        </a>
                    </div>

                </div>
            </section>

          
           

        </PageLayout>
    );
}