'use client';
import PageLayout from '@/app/components/PageLayout';
import { useState } from 'react';

/* ================= TYPES ================= */
type FaqItemType = {
  question: string;
  answer: string;
};

/* ================= FAQ DATA ================= */
const faqData: FaqItemType[] = [
   {
    question: "Are Microsoft Dynamics 365 Marketing and Microsoft Dynamics 365 Insights - Journey same?",
    answer:
      "No, Microsoft Dynamics 365 Marketing is focused on end-to-end marketing automation and campaigns, whereas Dynamics 365 Insights - Journey provides analytics and insights to optimize customer journeys within marketing efforts."
  },
  {
    question: "What is Dynamics 365 for Marketing?",
    answer:
      "Dynamics 365 for Marketing is a comprehensive marketing automation solution that helps businesses manage campaigns, nurture leads, engage customers, and track marketing performance."
  },
  {
    question: "Which features are available in Dynamics 365 Marketing?",
    answer:
      "Key features include email marketing, event management, customer journeys, lead scoring, marketing analytics, landing pages, forms, social media integration, and campaign automation."
  },
  {
    question: "Is Dynamics 365 Marketing ERP or CRM?",
    answer:
      "Dynamics 365 Marketing is a CRM-based application focused on marketing automation and customer engagement. It is not an ERP solution."
  },
  {
    question: "Which one is for me, Microsoft Dynamics 365 Marketing or Salesforce?",
    answer:
      "The choice depends on your existing infrastructure and business needs. Dynamics 365 Marketing integrates seamlessly with Microsoft ecosystem (including Dynamics 365 Sales), whereas Salesforce is a separate CRM platform with its own marketing cloud."
  },
  {
    question: "How much does D365 Marketing cost?",
    answer:
      "Pricing varies based on the plan and number of contacts. Microsoft offers different plans such as tenant/month pricing, and additional modules or add-ons may incur extra cost."
  },
  {
    question: "What are the server deployment options for Dynamics 365 Marketing?",
    answer:
      "Dynamics 365 Marketing is primarily a cloud-based solution deployed via Microsoft’s cloud platform, ensuring continuous updates and remote accessibility. On-premises deployment is not typically available."
  },
  {
    question: "What is the difference between Dynamics 365 Marketing and Dynamics CRM?",
    answer:
      "Dynamics 365 Marketing is focused on marketing automation and customer engagement, while Dynamics CRM (now part of Dynamics 365 Sales) is primarily for sales automation and relationship management."
  },
  {
    question: "Can I avail myself of a trial of Dynamics 365 Marketing?",
    answer:
      "Yes, Microsoft offers trial versions of Dynamics 365 Marketing, allowing businesses to test the platform and its features before subscribing."
  },
  {
    question: "How do I integrate Dynamics 365 Marketing with my existing Dynamics 365 solution?",
    answer:
      "Dynamics 365 Marketing can be integrated with existing Dynamics 365 solutions such as Sales and Customer Service, enabling unified data, seamless workflows, and coordinated campaigns."
  },
  {
    question: "Where is Dynamics Square based in the UK for D365 Marketing Partner?",
    answer:
      "Dynamics Square operates in the UK and provides certified Dynamics 365 Marketing partner services, including implementation, customization, support, and consulting."
  }
];

function FaqItem({ item }: { item: FaqItemType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h4 className={`text-lg font-semibold ${open ? 'text-red-600' : 'text-[#1F2A44]'}`}>
          {item.question}
        </h4>
        <span className={`text-2xl font-bold ${open ? 'text-red-600' : 'text-[#1F2A44]'}`}>
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
          {item.answer}
        </p>
      )}
    </div>
  );
}





export default function MarketingPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}

      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                Dynamics 365 Marketing
              </h1>

              <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                Automate your marketing activities, create engaging content <br/>leveraging AI, and increase
                 your conversion rates with <br/>Dynamics 365 Marketing.
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
                src="/solutions/marketing-banners.avif"
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
            What is Dynamics 365 Marketing?
          </h2>

          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
           Dynamics 365 Marketing is a marketing automation application that allows you to transform leads
            into fruitful relationships in a more efficient and profitable way. With Dynamics 365 Marketing 
            you will be able to tailor the customer journey to your needs and transform it into a unique experience
             until the sale is achieved, and even beyond.
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
                    <img src="/solutions/icons_centeralised-source.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                     Centralized Source
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                 The platform offers a centralized source for all types of marketing information. This way, 
                 the members do not have to stay dependent upon different individuals for getting any data. 
                 They can simply log into the platform and get the desired information. When everything is 
                 available at one place and employees do not have to spend time searching and collecting data
                  from different team members, it definitely saves a lot of time. When time is saved and the 
                  information is available at one single place, the operations of the organization continues 
                  to happen much smoothly and efficiently.
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
                    <img src="/solutions/icons_Personalized-Communication-.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                     Personalized Communication
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  The platform offers a customized form of communication for the employees. Different customers
                   need different marketing strategies depending upon the requirements and the product or service 
                   that is being marketed. Dynamic 365 allows the users to customize such communication or marketing 
                   strategy well by carefully segmenting the customers in different segments according to diverse factors.
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
                    <img src="/solutions/icons_Journey-Mapping.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                     Journey Mapping
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  It is not always possible to track the activities that the customers are performing 
                  after a marketing campaign has been conducted. The platform offers the feature of 
                  noticing journey mapping of the customers through which they can know the journey of 
                  a customer after a marketing campaign has been conducted.
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
                    <img src="/solutions/icons_Email-Templates-.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Email Templates
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                 There are several templates available for emails that has to be sent to the customers
                  and clients for the purpose of marketing. The platform also allows the users to customize 
                  these email templates so that they can be personalized as per the customer segmentation and
                   according to the products and services for which the marketing campaign is being conducted.
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
                    <img src="/solutions/icons_Customer-Feedback-.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                     Customer Feedback
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                 As there are forms for surveys and marketing campaigns, there are also forms that 
                 can be used for the purpose of feedback from the customers. It is extremely essential 
                 to collect feedback from the customers in order to understand whether the product or service 
                 marketed is gaining likes from the customers or not. Based on this feedback survey, teh organizations
                  can either continue with the product or may think of making any changes in it.
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
                    <img src="/solutions/icons_Automated-Lead-Scoring.svg" className="w-10 h-10" />
                    <h4 className="font-semibold text-[#1F2A44]">
                      Automated Lead Scoring
                    </h4>
                  </div>
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                 Lead scoring is an essential method as it is the basic way to converted leads into potential
                  customers. Dynamics 365 ensures to automate the process of lead scoring through different marketing 
                  campaigns. Ultimately, it leads to a smooth and efficient mode of lead scoring that also leads to welcoming 
                  of more number of potential customers on board.
                </p>
              </details>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* LEFT CONTENT */}
     <div className="flex flex-col  justify-center  pt-20 lg:pt-32">
  <h2 className="text-4xl font-bold text-[#1F2A44] mb-6">
    What Comes in <br /> the Package?
  </h2>
  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
    Dynamics 365 for Marketing comes as an overall marketing package. Here are the elements that come included in the package.
  </p>
</div>


      {/* RIGHT ACCORDION ITEMS */}
      <div className="space-y-4">

        {/* ITEM 1 - Group11 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/Group11.png" className="w-20 h-20" />
              <h4 className="font-semibold text-[#1F2A44]">Core Marketing</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Core marketing features provide tools to manage campaigns, segment audiences, and automate customer engagement, ensuring a strong foundation for all marketing efforts.
          </p>
        </details>

        {/* ITEM 2 - Group12 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/Group12.png" className="w-20 h-20" />
              <h4 className="font-semibold text-[#1F2A44]">Event Management</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Event Management allows you to plan, manage, and analyze events efficiently, helping to engage your audience and track event ROI effectively.
          </p>
        </details>

        {/* ITEM 3 - Group13 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/Group13.png" className="w-20 h-20" />
              <h4 className="font-semibold text-[#1F2A44]">Forms Pro</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Forms Pro helps you collect feedback, conduct surveys, and analyze responses to improve customer engagement and satisfaction across campaigns.
          </p>
        </details>

        {/* ITEM 4 - Group14 */}
        <details className="group bg-white rounded-xl p-6 border border-transparent group-open:border-[#C7D7F5] transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
              <img src="/solutions/Group14.png" className="w-20 2-10" />
              <h4 className="font-semibold text-[#1F2A44]">Add-Ons</h4>
            </div>
            <span className="text-xl group-open:hidden">+</span>
            <span className="text-xl hidden group-open:block">−</span>
          </summary>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Additional add-ons extend the capabilities of Dynamics 365 Marketing, enabling enhanced personalization, analytics, and integration with other tools.
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
               How does Marketing help to Elevate Your marketing Capabilities?
              </h2>
              
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

             {/* CARD 1 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Personalized Customer Journey
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Guide the journey of your potential customers based on their past interactions to adapt the offer and increase the probability of purchase.
  </p>
</div>

{/* CARD 2 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    360 Customer Vision
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Provides a new understanding of the customer for a complete view of the consumer throughout the entire marketing and sales cycle.
  </p>
</div>

{/* CARD 3 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Generate More Leads
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Design omnichannel campaigns through email, social media, landing pages, web, phone calls, personal events, etc. to get more leads.
  </p>
</div>

{/* CARD 4 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Improve the Profitability of Your Investment
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Reduces management expenses and optimizes the use of resources thanks to a scalable platform that adapts to the specific needs of the company.
  </p>
</div>

            </div>
          </div>
        </div>
      </section>


      {/* NEW PARTNER SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/solutions/microosoft-partner.avif"
                alt="Microsoft Dynamics 365 Upgrade"
                className="w-[600px] max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F2A44] mb-4">
                Why Dynamics Square?
              </h2>

              <p className="text-gray-600 leading-relaxed">
               With more than 11 years of experience in the market, we develop and deploy industry solutions 
               based on Microsoft technologies . Our experience, combined with our knowledge of innovation and 
               disruptive technologies, allows us to offer services and solutions that respond to the demands of 
               your market, guaranteeing a sustainable competitive advantage for your company. So, implement Dynamics 
               365 for Marketing .
              </p>
            </div>

          </div>
        </div>
      </section>

   <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">

    {/* SECTION HEADING (NO BG CHANGE) */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Dynamics 365 Marketing Pricing
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
     With the transformation of D365 Marketing into Dynamics 365 Insights – Journey, the pricing of this
      standalone application has been recently announced by Microsoft. 
    </p>

    {/* PRICING CARDS */}
<div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 mb-16">

  {/* CARD 1 - New Customer */}
  <div className="bg-white rounded-2xl shadow-lg p-8 w-full sm:w-96 hover:shadow-2xl transition transform hover:scale-105">
    <div className="bg-[#1F2A44] rounded-lg py-4 mb-6">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Marketing<br />(Dynamics 365 Insights – Journey)
      </h3>
    </div>

    {/* New Customer Label */}
    <p className="text-sm text-red-600 font-semibold mb-2">New Customer</p>

    <p className="text-5xl  text-red-700 mb-4">£1,307.20</p>
    <p className="text-gray-600 mb-4">tenant/month, paid yearly</p>
     <p className="text-gray-600">
      10,000 People Interacted and 100,000 People Unified
    </p>
  </div>

  {/* CARD 2 - Existing Customer */}
  <div className="bg-white rounded-2xl shadow-lg p-8 w-full sm:w-96 hover:shadow-2xl transition transform hover:scale-105">
    <div className="bg-[#1F2A44] rounded-lg py-4 mb-6">
      <h3 className="text-white font-semibold text-lg">
        Dynamics 365 Marketing Attach<br />(Dynamics 365 Insights – Journey)
      </h3>
    </div>

    {/* Existing Customer Label */}
    <p className="text-sm text-red-600 font-semibold mb-2">Existing Customer</p>

    <p className="text-5xl  text-red-700 mb-2">£769.00</p>
    <p className="text-gray-500 mb-4">tenant/month, paid yearly</p>
    <p className="text-gray-600">
      10,000 People Interacted and 100,000 People Unified
    </p>
  </div>

</div>


    {/* CTA BUTTON */}
    <div className="text-center">
      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
      >
        Get Started Now
        <span className="transition-transform duration-300 hover:translate-x-1">
          →
        </span>
      </a>
    </div>

  </div>
</section>

 {/* FAQ SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
             Have you got<br/>questions about D365 for Marketing?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click through to our FAQ for the best answers!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((item, index) => (
              <FaqItem key={index} item={item} />
            ))}
          </div>

        </div>
      </section>

    </PageLayout>
  );
}
