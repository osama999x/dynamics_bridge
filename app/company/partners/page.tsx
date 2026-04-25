'use client';

import PageLayout from '@/app/components/PageLayout';
import WhyUsSlider from '@/app/components/WhyUsSlider';

export default function PartnersPage() {
  return (
    <PageLayout>

      {/* ================= HERO + PARTNER SECTION ================= */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= TOP HEADING ================= */}
          <div className="text-center mb-38">
            <h2 className="text-4xl font-bold text-[#1F2A44]">
              Our Partners
            </h2>
          </div>

          {/* ================= SECOND SECTION ================= */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT IMAGE */}
              <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
                <img
                  src="/company/miss-lefiimage.avif"
                  alt="Microsoft Dynamics 365 Implementation Partner"
                  className="w-[500px] max-w-full h-auto object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <h2 className="text-3xl font-bold text-[#1F2A44] mb-8">
                  What Is Dynamics Square?
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Dynamics Square is the UK trustworthy and Microsoft's Authorized Gold Partner
                  for highly customized business solutions to bring digital transformation in
                  businesses through Microsoft Business Applications.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our effective leaders knows- their company’s success depends upon not just a
                  vision or product, but the people who carry out the vision and build the product
                  day in and day out – their employees
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  That’s why Dynamics Square is a successful company who is carrying foster culture
                  that allow their employees to thrive and grow. We’ve rounded up some insights
                  from great minds that drive home the importance of having a happy, empowered,
                  curious and mission-driven team.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MICROSOFT DYNAMICS 365 UPGRADE SOLUTIONS */}
      <section className="bg-gradient-to-r from-[#F4F7FE] to-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto px-6">


          {/* ===== FIRST BLOCK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">


            {/* LEFT CONTENT */}
            <div>

              <p className="text-gray-600 leading-relaxed text-sm">
                Anveo is a trade mark of conion media GmbH located in Hamburg, Germany.
                Conion media GmbH was founded in 2005 to build business software with Microsoft
                Dynamics NAV.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our passion is to build horizonal solutions as add-ons for Microsoft Dynamics NAV.
                These add-ons, the Anveo product family, is highly optimized to be implemented by other
                Microsoft Dynamics NAV partners on their own.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Anveo is sold world wide via more than 200 Anveo partners
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-red-600 font-medium">
                  {" "}www.anveonav.com
                </span>
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/company/p4.jpg"
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
                src="/company/p3.jpg"
                alt="Dynamics AX Upgrade"
                className="w-[320px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 lg:order-2">

              <p className="text-gray-600 leading-relaxed text-sm">
                An Independent Software Vendor (ISV) of Microsoft Dynamics 365 Enterprise and
                Business Operations solutions. To Increase create software solutions and deliver
                services that enable companies to innovate as they serve their customers and
                collaborate with their partners and vendors.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                To Increase offers powerful Industry Specific and Add-on Solutions on Dynamics 365
                for Operations, AX2012, and NAV.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-red-600 font-medium">
                  {" "}www.to-increase.com
                </span>
              </p>
            </div>
          </div>

          {/* ===== THIRD BLOCK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">

            {/* LEFT CONTENT */}
            <div>


              <p className="text-gray-600 leading-relaxed text-sm">
                A Member of the Agiles Group provides certified industry solutions for shipping
                companies, fresh food and Non-food traders including BI Programs on Microsoft
                Dynamics NAV. beside from Industry solutions, Agiles deliver the only workflow
                application that is fully integrated for Microsoft Dynamics NAV.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-red-600 font-medium">
                  {" "}www.agilesworkflow.com
                </span>
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/company/p2.jpg"
                alt="CRM to Dynamics 365 Upgrade"
                className="w-[280px] max-w-full h-auto object-contain"
              />
            </div>
          </div>
          {/* ===== FORTH BLOCK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">


            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/company/new1.jpg"
                alt="Dynamics AX Upgrade"
                className="w-[320px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 lg:order-2">

              <p className="text-gray-600 leading-relaxed text-sm">
                E-Con Solutions offers nearly 20 years of focused, expert, experience with CPQ for
                Microsoft Dynamics. Their proven, innovative toolset brings together everyone and
                everything involved in configuration, from first glance at your offerings through
                after-sales. More than 300 businesses and 25,000 users in 25 countries use e-Con
                every day to turn complexity into success.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-red-600 font-medium">
                  {" "}www.e-consolutions.com
                </span>
              </p>
            </div>
          </div>
          {/* ===== FIFTH BLOCK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">

            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-[26px] font-semibold text-[#1F2A44] mb-4">
               WMS Mobile - Tasklet Factory
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                WMS Mobile is a powerful solution capable of streamlining warehouse operations and
                optimising existing processes for enhanced ROI. Along with a user-friendly scanner
                solution, it offers seamless connectivity in online as well as offline modes,
                eliminating the dependability of a sustainable internet connection. WMS Mobile is
                so powerful that it easily integrates with Microsoft Dynamics 365 SCM/FO/AX or
                Microsoft Dynamics 365 BC/NAV without any issue, resulting in consistent growth
                and rapid scalability.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-red-600 font-medium">
                  {" "}www.taskletfactory.com
                </span>
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/company/tasklet-factoty-logo.png"
                alt="CRM to Dynamics 365 Upgrade"
                className="w-[280px] max-w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ===== SIX BLOCK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">


            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/company/continialogo.svg"
                alt="Dynamics AX Upgrade"
                className="w-[320px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 lg:order-2">
              <h3 className="text-[26px] font-semibold text-[#1F2A44] mb-4">
              Continia - Expense Management
              </h3>


              <p className="text-gray-600 leading-relaxed text-sm">
               With more than 30 years of experience, Continia has been in the industry to automate
                and simplify complex financial processes. It has over 15000+ global customers who 
                are availing of a fully connected experience after integrating this solution with
                 Business Central. With effective use, you can automate up to 90% of your recurring 
                 and manual processes to get enhanced productivity and maximised revenue.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-red-600 font-medium">
                  {" "}https://www.continia.com
                </span>
              </p>
            </div>
          </div>

          {/* ===== FIFTH BLOCK ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">

            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-[26px] font-semibold text-[#1F2A44] mb-4">
               WMS Mobile - Tasklet Factory
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
               Would you like to connect your bank accounts to Microsoft Business Central with ease?
                 Whether you're conducting domestic or international business, Yavrio streamlines
                  your financial processes. Yavrio provides safe transaction services and bank
                   feeds thanks to its connections to over 10,000 banks across the United Kingdom,
                    Europe, the United States, and the Middle East. With the help of Dynamics
                     Square, Yavrio created an easy-to-install application that enables you to link
                      your bank accounts to Dynamics 365 Business Central.  <br/>
                      Integrate Yavrio with your banking operations to streamline your authentication processes.<br/>
                        Acquire current insights from financial data.<br/>
                        Increase output with efficient procedures that maintain security.<br/>
                       Send secure transactions from Microsoft Dynamics 365 Business Central.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-red-600 font-medium">
                  {" "}www.yavr.io
                </span>
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/company/Yavrio-CMYK.svg"
                alt="CRM to Dynamics 365 Upgrade"
                className="w-[280px] max-w-full h-auto object-contain"
              />
            </div>
          </div>



          
        </div>
      </section>





    </PageLayout>
  );
}
