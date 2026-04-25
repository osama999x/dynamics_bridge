'use client';
import PageLayout from '@/app/components/PageLayout';


export default function PowerAutomatePage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                              Microsoft Power Automate
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                               Automate processes and increase productivity with Power<br/> Automate. No coding Required.
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
                                src="/solutions/power-automate-banner.svg"
                                alt="Dynamics 365 Upgrade Services"
                                className="w-[680px] max-w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* PARTNER HIGHLIGHT SECTION */}
            <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP HEADING */}
                    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
                      What is Power Automate?
                    </h2>

                    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
                       Power Automate offers the ability to easily create workflows directly in your applications with a no-code
                        approach that connects to hundreds of popular applications and services on the market. Sync files, get 
                        notifications, collect data, and much more.
                    </p>


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
                                        <img src="/solutions/icons-power-automate_Quick-and-Secure.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                           Quick & Secure
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Creating automated systems through Power Automate is not just quick and easy but also quite secure.
                                     The platform comes loaded with features such as drag and drop, prebuilt connectors, and low code 
                                     to create repetitive activities in automated flows that are also very easy. Most importantly, all
                                      the automated tasks are kept secure within your Microsoft cloud and you do not have to worry about
                                       any data getting leaked or stolen.
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
                                        <img src="/solutions/icons-power-automate_Enhanced-Efficiency.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Enhanced Efficiency
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                  While the platform helps in creating automated flows, it also allows you to record the processes from
                                   start to end. You can visualize the recording process and analyze the flow and understand it will 
                                   actually happen. This way, you can check out in advance how the flow is going to work and look before
                                    you actually finalize a particular automated flow. Thus, no more guesswork as you can be pretty sure 
                                    about the automated flow process that you are finalizing for your data or system.
                                </p>
                            </details>
                        </div>




                        {/* RIGHT ACCORDION */}
                        <div className="space-y-4">

                            {/* ITEM 3*/}
                            <details
                                open
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-power-automate_AI-Support.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            AI Support
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                    Another great thing about Power Automate is that it is supported by an AI system. The Artificial 
                                    Intelligence system does not just make the working of the system interesting and easy but also quite 
                                    helpful for the users. It is due to AI technology that you will be able to create new flows on the
                                     basis of models that are existing already. The platform can detect texts and images to help you
                                      in creating your flow or even help you in analyzing data.
                                </p>
                            </details>
                             {/* ITEM 4*/}
                            <details
                                open
                                className="group bg-white rounded-xl p-6
                border border-transparent group-open:border-[#C7D7F5]
                transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-4">
                                        <img src="/solutions/icons-power-automate_Highly-Compatible.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                           Highly Compatible
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                  Another great thing about this platform is that it is highly compatible with different devices and 
                                  platforms. Whether you are using Power Automate for web on your desktop or you are using it in the 
                                  form of an application on your smartphone, it will work the same and will offer you the same features 
                                  and functions. Thus, you can get the right one based on your comfort and requirement and start using 
                                  it at your own convenience.
                                </p>
                            </details>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
                               What are Power Automate<br/> Features
                            </h2>
                             <p className="text-lg text-gray-600">
                               Power Automate is available in four different versions from which you
                                can select the right one depending upon your requirements.
                            </p>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                          {/* CARD 1 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    For Desktop
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Select Power Automate for Desktop to work from your office and create automated flows on Windows 11 OS with ease and efficiency.
  </p>
</div>

{/* CARD 2 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    For Mobile
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    With Power Automate for Mobile, you can create automated flows anytime, anywhere directly from your phone, ensuring productivity on the go.
  </p>
</div>

{/* CARD 3 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    For Web
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Build your flows on the web by signing in from any browser on any device. Save and manage your flows to access later from your preferred device.
  </p>
</div>

{/* CARD 4 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    For Microsoft Teams
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Power Automate for Microsoft Teams enables your team to create, share, and manage flows collaboratively in the Microsoft cloud, boosting team efficiency.
  </p>
</div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">

                    {/* CENTER TITLE */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                       Power Automate Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                       We offer a full range of services to support you on your Dynamics journey including implementation, 
                       upgrade and support.
                    </p>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">


                        {/* CARD 1 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/settings_b.png"
                                alt="Implementation"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                            <p className="text-gray-700 mb-6">
                                Proactively manage your sales with an improved customer experience by
                                implementing Dynamics 365 Sales.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                        {/* CARD 3 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/person_pin.png"
                                alt="Support"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Support</h3>
                            <p className="text-gray-700 mb-6">
                                Bring continuity and drive sales efficiency through Dynamics 365 Sales
                                support services.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                        {/* CARD 4 */}
                        <div className="bg-[#F3E8FF] rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <img
                                src="/solutions/forum.png"
                                alt="Consulting"
                                className="w-14 h-14 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Consulting</h3>
                            <p className="text-gray-700 mb-6">
                                Get optimum D365 Sales services suited to your customised business
                                needs.
                            </p>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-[#8B5CF6] font-semibold transition-all duration-300 hover:gap-4"
                            >
                                Get Started
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>

                        </div>

                    </div>
                </div>
            </section>



            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">

                    {/* SECTION HEADING (NO BG CHANGE) */}
                    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
                        Microsoft Power Apps Pricing
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                        Explore Power Apps Plans, Costs, And Availability To Start Running Your Business Apps.
                    </p>

                  {/* PRICING CARDS */}
<div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mb-16">

  {/* CARD 1 – Power Apps Developer / Free Trial */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
      <h3 className="text-white font-semibold text-lg">
        Power Apps Developer<br />Plan Free
      </h3>
    </div>

    <p className="text-4xl font-bold text-red-600 mb-4">Free</p>

    <p className="text-gray-600 mb-4">
      Experience Power Automate, including premium features, free for 30 days.
    </p>
    
  </div>

  {/* CARD 2 – Power Automate Premium */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
      <h3 className="text-white font-semibold text-lg">
        Power Automate<br />Premium
      </h3>
    </div>

    <p className="text-4xl font-bold text-red-600 mb-1">£11.50</p>
    <p className="text-sm text-gray-500 mb-4">user/month, paid yearly</p>

    <p className="text-gray-600 mb-4">
      Scale workflows using cloud and desktop flows, premium connectors, process mining, AI, and automation tools.
    </p>

  </div>

  {/* CARD 3 – Power Automate Process (RPA) */}
  <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
    <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
      <h3 className="text-white font-semibold text-lg">
        Power Automate<br />Process
      </h3>
    </div>

    <p className="text-4xl font-bold text-red-600 mb-1">£115.30</p>
    <p className="text-sm text-gray-500 mb-4">bot/month, paid yearly</p>

    <p className="text-gray-600 mb-4">
      License a bot for unattended desktop or cloud flows, accessible by unlimited users across your organization for scalable automation and workflow execution.
    </p>
  </div>

</div>


{/* CTA BUTTON */}
<div className="text-center">
  <a
    href="/contact-us"
    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
  >
    Get Power Automate Now
    <span className="transition-transform duration-300 hover:translate-x-1">
      →
    </span>
  </a>
</div>

                </div>
            </section>


        </PageLayout>
    );
}
