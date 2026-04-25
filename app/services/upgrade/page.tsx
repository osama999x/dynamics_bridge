'use client';
import PageLayout from '@/app/components/PageLayout';



export default function UpgradePage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Dynamics 365<br />Upgrade Services
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Upgrade your system capabilities, process flow, adapt operational change,
                and bring quick user acceptance through our highly integrated and
                requirement-specific Dynamics 365 upgrade services.
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Demo
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/services/upgrade-service-banner.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>
      {/* NEW PARTNER SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP HEADING */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2A44] mb-6">
              Why Upgrade To Dynamics 365?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Are you looking to upgrade solution to Dynamics 365? Discover all the
              answers right here.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/services/upgrade-why.png"
                alt="Microsoft Dynamics 365 Upgrade"
                className="w-[600px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                To support dynamically changing <span className="text-red-500">processes</span> and operational flow,
                enterprises are required to upgrade their systems to fulfill timely
                business needs. When process flows become inefficient, managing data
                can become complex and risky in terms of reliability and security.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                With Dynamics 365 upgrade <span className="text-red-500">services</span>, businesses can enhance existing
                workflows and prepare themselves to cope with future challenges.
                However, system upgrade requirements may vary from business to business.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Dynamics Square brings vast <span className="text-red-500">experience</span> and expertise to assess your
                current system and recommend the most suitable solution, including
                custom configurations and essential integrations.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you plan to move from a legacy <span className="text-red-500">system</span> to the cloud, upgrade
                NAV to Business Central, or migrate AX to Finance & Supply Chain,
                we deliver seamless and cost-effective upgrade solutions.
              </p>
              {/* BUTTON UNDER RIGHT CONTENT */}
              <a
                href="/contact-us"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </div>

          </div>
        </div>
      </section>

   {/* MICROSOFT DYNAMICS 365 UPGRADE SOLUTIONS */}
<section className="bg-gradient-to-r from-[#F4F7FE] to-[#FFFFFF] py-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-[34px] font-bold text-[#1F2A44] mb-3">
        Microsoft Dynamics 365 Upgrade Solutions
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
        Leverage new functionalities and capabilities by upgrading your current
        ERP or CRM systems to Dynamics 365.
      </p>
    </div>

    {/* ===== FIRST BLOCK ===== */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">


      {/* LEFT CONTENT */}
      <div>
        <h3 className="text-[26px] font-semibold text-[#1F2A44] mb-4">
          NAV To Business Central Upgrade
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          Expand your business scope and maximize your profitability by upgrading
          your NAV system to Business Central either on-premises or on-cloud.
          Since Microsoft has abandoned support for older NAV versions, it’s time
          to ensure
          <span className="text-red-600 font-medium">
            {" "}NAV to Business Central upgrade.
          </span>
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/services/nav-logo-icons-1.png"
          alt="Microsoft Dynamics NAV Upgrade"
          className="w-[320px] max-w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* ===== SECOND BLOCK ===== */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">


      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start order-2 lg:order-1">
        <img
          src="/services/nav-ax-log.png"
          alt="Dynamics AX Upgrade"
          className="w-[320px] max-w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="order-1 lg:order-2">
        <h3 className="text-[26px] font-semibold text-[#1F2A44] mb-4">
          AX To Finance & Supply Chain Upgrade
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          Since Microsoft disabled Dynamics AX for new customers, existing
          customers can still avail additional benefits or AX support.
          Upgrading your AX account with
          <span className="text-red-600 font-medium">
            {" "}Dynamics 365 Finance & Supply Chain
          </span>{" "}
          enables enterprises to drive scalable growth.
        </p>
      </div>
    </div>

    {/* ===== THIRD BLOCK ===== */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">

      {/* LEFT CONTENT */}
      <div>
        <h3 className="text-[26px] font-semibold text-[#1F2A44] mb-4">
         Upgrade To Dynamics 365
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          When your enterprise's processes or data-driven practices start compromising and
           you are still relying on your legacy systems other than
            <span className="text-red-600 font-medium">
            {" "}Microsoft Dynamics 365</span>{" "},
            it could be the best time to upgrade to Dynamics 365. If you are willing to streamline,
             automate, and simplify your day-to-day enterprise practices, upgrading to Business
              Central could be a quite productive decision to maximize growth and scalability.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/services/upgrade-logo.png"
          alt="CRM to Dynamics 365 Upgrade"
          className="w-[280px] max-w-full h-auto object-contain"
          />
      </div>
    </div>

  </div>
</section>



      {/* HERO IMPLEMENTATION SUPPORT SECTION */}
      <section className="relative bg-gradient-to-r from-[#1F355E] to-[#243E6B] py-16 mt-12 overflow-hidden">

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Looking for Dynamics 365 Upgrade Services?
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
            Our team of experts will work with you to ensure a smooth and seamless upgrade experience.
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            Get Started Now
          </a>

        </div>
      </section>



      {/* PARTNER HIGHLIGHT SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP HEADING */}
          <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-16">
            How upgrading to Dynamics 365 with Dynamics <br />Square could be a growth
            hacking deal<br /> for your enterprise?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT ACCORDION */}
            <div className="space-y-4">

              {/* ITEM 1 */}
              <details
                open
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/services/partner-icon-4.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Authorized Gold Partner
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  As an authorized Microsoft Gold Partner, we deliver certified,
                  compliant, and industry-best Dynamics 365 solutions.
                </p>
              </details>

              {/* ITEM 2 */}
              <details
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/services/partner-icon-7.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Seamless Upgrade
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  We ensure a smooth and disruption-free upgrade to Dynamics 365
                  while maintaining business continuity.
                </p>
              </details>

              {/* ITEM 3 */}
              <details
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/services/partner-icon-5.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Highly Customized Solution
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  We build Dynamics 365 solutions tailored specifically to your
                  workflows, goals, and industry needs.
                </p>
              </details>

            </div>

            {/* RIGHT ACCORDION */}
            <div className="space-y-4">

              {/* ITEM 4 */}
              <details
                open
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/services/partner-icon-8.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Competitive Pricing
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Our pricing models are transparent and cost-effective,
                  ensuring maximum ROI with no hidden charges.
                </p>
              </details>

              {/* ITEM 5 */}
              <details
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/services/partner-icon-6.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Secure Data Migration
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  We migrate your data securely with zero data loss,
                  ensuring accuracy, compliance, and integrity.
                </p>
              </details>

              {/* ITEM 6 */}
              <details
                className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <img src="/services/partner-icon-9.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Reliable Post Support
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Our post-go-live support ensures continuous system
                  optimization, performance monitoring, and quick resolutions.
                </p>
              </details>

            </div>

          </div>
        </div>
      </section>




    </PageLayout>
  );
}
