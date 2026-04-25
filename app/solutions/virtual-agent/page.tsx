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
  question: "What is Power Virtual Agents?",
  answer: "Power Virtual Agents is a Microsoft service that allows you to create intelligent chatbots that can engage with customers, employees, or other audiences across websites, apps, and messaging platforms."
},
{
  question: "Is Power Virtual Agent available for free?",
  answer: "Power Virtual Agents offers a free trial for users to explore and create chatbots with limited sessions, allowing you to test the features before subscribing to a paid plan."
},
{
  question: "Is Power Virtual Agent included with Power Platform?",
  answer: "Yes, Power Virtual Agents is part of the Microsoft Power Platform suite, alongside Power BI, Power Apps, and Power Automate, providing seamless integration across the platform."
},
{
  question: "What type of offering is Power Virtual Agents?",
  answer: "Power Virtual Agents is a cloud-based service offered as a subscription plan, with pricing based on the number of sessions and add-ons for additional capacity."
},
{
  question: "What types of bots can I create using Power Virtual Agents?",
  answer: "You can create a wide range of bots, including customer support bots, internal employee assistants, FAQ bots, and interactive chatbots that automate tasks and answer common queries."
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






export default function VirtualAgentPage() {
    return (
        <PageLayout>
            {/* HERO / MAIN SECTION */}

            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-8 lg:pt-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl font-bold text-[#1F2A44] mb-6 leading-tight">
                              Microsoft <br/>Power Virtual Agents
                            </h1>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-8 text-base">
                               Enhance customer experience and boost sales using AI enabled chatbots built with Power Virtual Agents.
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
                                src="/solutions/virtual-agent-banner-01.svg"
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
                      What is Power Virtual Agents?
                    </h2>

                    <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
                       Power Virtual Agents is a tool to build powerful chatbots without the need to write code, and 
                       that allows you to automate communication with potential clients or employees. The goal is to easily
                        create and maintain virtual agents without programming, using a guided graphical interface without 
                        the need for data analysts or developers.
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
                                        <img src="/solutions/icons-power-apps_Quick-and-Easy (1).svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                           Easy Chatbot Creation
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                   The very first feature of the platform is no doubt the easy-to-use graphical interface that helps 
                                   in creating chatbots in a super comfortable and easy way. The creator does not have to be any 
                                   developer, data scientist, or AI expert.
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
                                        <img src="/solutions/icons-power-apps_App-Development.svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Instant Actions
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                  Not only creating the chatbots is easy, taking action with the chatbots is equally convenient. Once the
                                   chatbot is ready, you can instantly integrate it into the service or product that you have targeted 
                                   earlier.It also allows you to check records of conversations that have already taken place for taking 
                                   references. Also, the tool allows you to integrate functions such as handing over the chat conversation
                                    to some live agents in case of extreme necessity or also to call up the APIs.
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
                                        <img src="/solutions/icons-power-apps_Enhancing-Capabilities (1).svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                            Smarter Bots
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                   The platform does not just help you in coming up with chatbots but also helps you in creating them 
                                   in a much smarter way. Thus it offers you suggestions about the topics on which you can create 
                                   chatbots. It helps you in creating rich chats that are not just customized but are available in
                                    natural language to convince the customers and clients much better.
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
                                        <img src="/solutions/icons-power-apps_Responsive-Design (1).svg" className="w-10 h-10" />
                                        <h4 className="font-semibold text-[#1F2A44]">
                                           Easy to Start
                                        </h4>
                                    </div>
                                    <span className="text-xl group-open:hidden">+</span>
                                    <span className="text-xl hidden group-open:block">−</span>
                                </summary>

                                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                 Once you are convinced with the features and working of the tool, you will surely wish to try out
                                  this wonder option to create chatbots for your organization too.The best thing is that if you are 
                                  already using Microsoft Office 365, you will already get this tool integrated into it. The existence 
                                  of power virtual agents for office 365 is a great thing that will allow the users to make use of the 
                                  tool without the requirement of downloading any extra tool on the systems.
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
                              Why choose Power <br/>Virtual Agents?
                            </h2>
                             <p className="text-lg text-gray-600">
                              What are Power Virtual Agents Features
                            </p>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                         {/* CARD 1 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Easy Registration & Setup
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Easily register, create your bot, and embed it on your website with just a few clicks—no infrastructure or complex systems required.
  </p>
</div>

{/* CARD 2 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    No Coding Required
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Train your teams to build bots easily without intermediaries, coding knowledge, or AI expertise, making bot creation accessible to everyone.
  </p>
</div>

{/* CARD 3 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Automate Queries
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Automatically handle common queries with Power Virtual Agent chatbots, freeing up teams for more complex tasks.
  </p>
</div>

{/* CARD 4 */}
<div className="group bg-white rounded-xl shadow-lg p-6 h-48 flex items-center justify-center text-center transition-all duration-300">
  <h3 className="text-xl font-semibold group-hover:hidden">
    Improve Customer Satisfaction
  </h3>
  <p className="text-gray-600 hidden group-hover:block">
    Enhance customer experience by enabling 24/7 self-service, personalized bot conversations, and quick resolution of issues.
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
                      Power Virtual Agents Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                      We offer a full range of services to support you on your Dynamics journey including implementation, upgrade and support.
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

    {/* SECTION HEADING */}
    <h2 className="text-4xl font-bold text-[#1F2A44] mb-4">
      Power Virtual Agents Pricing
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Explore Power Apps Plans, Costs, And Availability To Start Running Your Business Apps.
    </p>

    {/* PRICING CARDS */}
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mb-16">

      {/* CARD 1 – Power Virtual Agents Standard */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
          <h3 className="text-white font-semibold text-lg">
            Power Virtual Agents
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-1">£164.40</p>
        <p className="text-sm text-gray-500 mb-4">per month for 2,000 sessions</p>

        <p className="text-gray-600 mb-4">
          Run intelligent chatbots across websites and other channels. Only pay for two-way engagement between users and your bots, with sessions covering each end-to-end interaction.
        </p>
      </div>

      {/* CARD 2 – Power Virtual Agents Sessions Add-on */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-80 hover:shadow-xl transition">
        <div className="bg-[#1F2A44] rounded-lg py-3 mb-4 text-center">
          <h3 className="text-white font-semibold text-lg">
            Sessions Add-on
          </h3>
        </div>

        <p className="text-4xl font-bold text-red-600 mb-1">£82.20</p>
        <p className="text-sm text-gray-500 mb-4">per month for 1,000 sessions</p>

        <p className="text-gray-600 mb-4">
          Add additional sessions to your Power Virtual Agents plan. Requires a Power Virtual Agents license.
        </p>
      </div>

    </div>

{/* CTA BUTTON */}
<div className="text-center">
  <a
    href="/contact-us"
    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
  >
    Get Best Price Quotes
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
                            Have you got<br />questions about Microsoft Power Virtual Agents?
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
