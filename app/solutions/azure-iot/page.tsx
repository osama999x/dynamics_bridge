'use client';
import PageLayout from '@/app/components/PageLayout';

export default function AzureIoTPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Azure IoT<br/>
             (Internet Of Things)
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Extend Your Business Capabilities by Establishing Secure Connection Between Your Devices and Azure IoT Apps.
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
                src="/solutions/azure-Banner.avif"
                alt="Dynamics 365 Upgrade Services"
                className="w-[680px] max-w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>
     {/* AZURE IOT SOLUTIONS SECTION */}
<section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-6">
      Deliver A Flexible, Scalable Solution
    </h2>

    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
      That adapts to your needs & processes. Streamline your supply chain, avoid production delays and 
      equipment downtime, ensure quality delivery, and remotely monitor your devices & service equipment 
      all through by implementing Azure IoT intelligence in your business.
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
              <img src="/solutions/icons-azure_cloud-embed.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">
                Azure IoT Hub
              </h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Azure IoT Hub enables secure, bi-directional communication between IoT applications and the devices it manages, 
            supporting device-to-cloud telemetry and command-and-control functionalities at scale.
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
              <img src="/solutions/icons-azure_agile.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">
                Azure IoT Central
              </h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Azure IoT Central is a fully managed IoT app platform that simplifies the process of connecting, monitoring, 
            and managing IoT assets with minimal cloud development expertise required.
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
              <img src="/solutions/icons-azure_machine-learning.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">
                Azure Machine Learning
              </h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
           Strengthen your development capability and equip your developers to develop, deploy, and manage high-end 
           data models. With Azure Machine Learning , leverage integrated tools and ensure premium support to available 
           open-source frameworks and libraries. Deploy data models with just a single click and manage efficiently all 
           through Machine Learning Operations.
          </p>
        </details>

      </div>

      {/* RIGHT ACCORDION */}
      <div className="space-y-4">

        {/* ITEM 4*/}
        <details
          className="group bg-white rounded-xl p-6
          border border-transparent group-open:border-[#C7D7F5]
          transition-all duration-300"
        >
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/icons-azure_project-management.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">
                Azure Sphere
              </h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Azure Sphere provides a secured, high-level application platform with built-in communication and security features for connected devices.
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
              <img src="/solutions/icons-azure_innovation.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">
                Azure Digital Twins
              </h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Azure Digital Twins enables the creation of comprehensive digital models of physical environments, 
            allowing businesses to simulate and optimize IoT-enabled operations in real-time.
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
              <img src="/solutions/icons-azure_security.svg" className="w-10 h-10" />
              <h4 className="font-semibold text-[#1F2A44]">
                Azure IoT Edge
              </h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Implement Azure IoT Edge on-premises to centralize data and seamlessly drive operational data in the Microsoft Azure
             cloud. Ensure secure and remote deployment of cloud-native processes or workloads including AI, Azure services, etc.
              to directly connect and process on your IoT devices. Effectively drive IoT connected approach with cloud intelligence 
              implemented locally on IoT devices.
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
          Azure IoT (Internet of Things) Features
        </h2>
        <p className="text-lg text-gray-600">
          How IoT implementation helps to improve your operational flow.
        </p>
      </div>

      {/* RIGHT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* CARD 1 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Optimize <br /> Supply Chain
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            Optimize your supply chain by monitoring and regulating in real-time. Stay updated with inventory levels, warehousing flow, product delivery, and more to ensure continuity.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Improve <br /> Production Flow
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            Get notified whenever there is a moisture or temperature imbalance, so that you can intervene in production to maintain product quality standards while minimizing waste.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Reduce <br /> Equipment Downtime
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            With Dynamics 365 and Azure IoT, get notified whenever outage threshold gets exceeded so that production can be rescheduled or equipment sent for maintenance.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
          <h3 className="text-xl font-semibold group-hover:hidden">
            Reduce <br /> Production Delays
          </h3>
          <p className="text-gray-600 hidden group-hover:block">
            Compare actual production cycle time with the planned one. With Microsoft IoT Suite, get notified when production is on schedule and when interventions are needed.
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
          Maximize your business potentials
          </h1>

          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-90">
          Drive new business challenges by implementing Azure IoT
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#D9363E] hover:bg-[#c12f36] text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            Get Started Now
          </a>

        </div>
      </section>

      {/* MICROSOFT AZURE IOT SERVICES SECTION */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
<div className="flex justify-center">
  <img
    src="/solutions/InternetTHingsSide.avif" 
    alt="Microsoft Azure IoT Service"
    className="w-full max-w-xl rounded-xl" 
  />
</div>


      {/* RIGHT TEXT & CARDS */}
      <div className="space-y-8">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-[#1F2A44]">
          Microsoft Azure IoT Service
        </h2>
        <p className="text-lg text-gray-600">
          We offer a full range of IoT services to support you on your Dynamics journey including implementation, upgrade, and support.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">

          {/* CARD 1 */}
          <div className="group bg-white rounded-xl shadow-lg p-6 transition-all duration-300 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <img src="/solutions/Business-Central-Implementation-icons.svg" className="w-10 h-10" alt="Implementation" />
              <h4 className="text-xl font-semibold text-[#1F2A44]">Implementation</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Start uplifting your business with our Dynamics 365 and Microsoft IoT implementation.
            </p>
            <a href="/contact-us" className="text-red-600 font-semibold">Get Started</a>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white rounded-xl shadow-lg p-6 transition-all duration-300 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <img src="/solutions/Business Central Upgrade-icons.svg" className="w-10 h-10" alt="Upgrade" />
              <h4 className="text-xl font-semibold text-[#1F2A44]">Upgrade</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Continuously grow and scale your business with our optimum IoT support services.
            </p>
            <a href="/contact-us" className="text-red-600 font-semibold">Get Started</a>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white rounded-xl shadow-lg p-6 transition-all duration-300 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <img src="/solutions/Business-Central-Support-icons.svg" className="w-10 h-10" alt="Support" />
              <h4 className="text-xl font-semibold text-[#1F2A44]">Support</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Integrate IoT and Dynamics 365 to upgrade and level-up your system capabilities.
            </p>
            <a href="/contact-us" className="text-red-600 font-semibold">Get Started</a>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


 

    </PageLayout>
  );
}
