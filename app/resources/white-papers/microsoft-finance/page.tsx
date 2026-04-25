'use client';

import PageLayout from '@/app/components/PageLayout';

export default function MicrosoftFinancePage(){
 
    return (
        <PageLayout>
           {/* HERO SECTION */}
<section className="bg-gradient-to-r from-[#FFF5F5] to-white pt-10 lg:pt-16 pb-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE - TEXT */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
     The Future of Finance Management: Transform the way Finance works with Microsoft Copilot
        </h1>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/resources/finace-white-papper-banner (1).png"  
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
          "The Future of Finance Management: Dynamics 365 Finance",
          "Finance Microsoft – Your Partner for Business Success",
          "Common Financial Challenges in Modern Industries"
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
          src="/resources/finace-whitper-center.avif"
          alt="Perfect eBook Guide"
          className="w-full max-w-md h-auto rounded-2xl object-cover"
        />
      </div>

      {/* RIGHT SIDE POINTS */}
      <ul className="flex flex-col justify-around h-[65%] text-gray-700">
        {[
          "The Perfect Solution to Eliminate all Financial Challenges",
          "Microsoft 365 Copilot for Finance",
          
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
    The whitepaper goes into great detail about Microsoft Dynamics 365 Finance, and Microsoft Copilot comes integrated into it, showing how they can completely change the way you handle your finances. It starts by listing the main financial problems that companies have, like inefficient processes, poor data quality, regulatory compliance complexities, lack of integration, and multi-entity management. These problems make it harder to make decisions, run operations efficiently, and keep track of finances correctly.
  </p>

  <p>
    Microsoft Dynamics 365 Finance is a strong business solution that improves finance-related tasks, automates work processes, and gathers all data in one place. It helps increase the output of various crucial processes such as automated bank reconciliation, cash flow management, and customised financial reporting.
  </p>

  <p>
    The integrated Microsoft Copilot helps automate repetitive processes, offer real-time information, and improve the abilities of users by acting as a personal assistant to them. Copilot’s functionalities, such as tracking customer balances, generating automated emails, and centralizing financial data, are emphasized for their ability to save time and improve accuracy.
  </p>

  <p>
    The white paper concludes with an emphasis on using an advanced financial management tool like Dynamics 365 Finance powered with Copilot to deal with challenges. The solution helps drive business growth through new ideas and increase overall efficiency through process automation. No wonder why it is the preferred choice for companies that want to improve their finances and be successful in the long run.
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