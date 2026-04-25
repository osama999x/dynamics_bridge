'use client';
import {
  Boxes,
  Clock,
  GitMerge,
  Truck,
  Percent,
  ShoppingCart,
  BarChart3,
  TrendingDown,
  ShieldAlert,
  Users
} from "lucide-react";

type ChallengeItemProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function ChallengeItem({ icon, title, text }: ChallengeItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex items-start justify-center h-12 w-12 rounded-lg  text-[#6b3d6e]">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600 leading-relaxed text-sm">
          {text}
        </p>
      </div>
    </div>
  );

}
type FeatureCardProps = {
  title: string;
  text: string;
};

function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
      <h4 className="font-semibold text-lg mb-2 text-[#3F2A56]">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

type TableRowProps = {
  criteria: string;
  bc: string;
  fscm: string;
};

function TableRow({ criteria, bc, fscm }: TableRowProps) {
  return (
    <tr className="hover:bg-[#FAF9FD] transition">
      <td className="px-6 py-4 font-medium text-gray-700">
        {criteria}
      </td>
      <td className="px-6 py-4 text-gray-600">
        {bc}
      </td>
      <td className="px-6 py-4 text-gray-600">
        {fscm}
      </td>
    </tr>
  );
}




import PageLayout from '@/app/components/PageLayout';

export default function DistributionPage() {
  return (
    <PageLayout>
      {/* HERO / MAIN SECTION */}
      <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] pt-10 lg:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* TOP LABEL */}
          <p className="text-sm text-gray-600 mb-3">
            Dynamics 365 for Wholesale and Distribution
          </p>

          {/* HEADING */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#6b3d6e] leading-tight mb-6">
            Every Process Connected. <br />
            Every Decision Profitable
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
            Dynamics 365 for Wholesale and Distribution is built for distributors who want their data,
            processes, people, and systems aligned. Invest in a solution that connects every process
            so that every decision creates profit.
          </p>

          {/* CTA BUTTON */}
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Distribution Transformation →
          </a>

          {/* IMAGE */}
          <div className="mt-14 flex justify-center">
            <img
              src="/industries/wholesale-pic-01.avif"
              alt="Dynamics 365 for Retail"
              className="w-[900px] max-w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>
      {/* WHAT IS D365 FOR DISTRIBUTION */}
      <section className="bg-[#F7F7FB] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
            What is Dynamics 365 for <br className="hidden lg:block" />
            Distribution Companies?
          </h2>

          <p className="text-gray-600 max-w-3xl mb-12 leading-relaxed">
            Dynamics 365 for Distribution Companies comprises two major
            solutions from the Dynamics 365 suite:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* BUSINESS CENTRAL */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-5">
                1. Dynamics 365 Business Central
              </h3>

              <div className="bg-[#E6E0F0] rounded-lg flex items-center justify-center h-40 mb-6">
                <img
                  src="/industries/wholesale-pic-02.avif"
                  alt="Dynamics 365 Business Central"
                  className="h-20"
                />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="text-red-600 font-semibold">
                  Dynamics 365 Business Central
                </span>{" "}
                for Distribution targets small to mid-sized distribution
                businesses that need an all-in-one ERP system with fast
                implementation, lower cost, and complete control over sales,
                inventory, purchasing, finance, and service in one unified
                solution.
              </p>

              <p className="font-semibold mb-3">
                Growing distribution companies would go for it when:
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The company has limited entities but growing operations.</li>
                <li>
                  It needs strong control over stock, purchases, and cash flow
                  without heavy customisation.
                </li>
                <li>
                  The team wants a single, easy-to-use system that handles
                  everything from sales to invoicing.
                </li>
                <li>
                  The business depends on accurate inventory, automated order
                  processing, and quick decision-making.
                </li>
                <li>The focus is on scalability, not massive complexity.</li>
              </ul>
            </div>

            {/* FINANCE & SUPPLY CHAIN */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-5">
                2. Dynamics 365 Finance & Supply Chain Management
              </h3>

              <div className="bg-[#E6E0F0] rounded-lg flex items-center justify-center h-40 mb-6">
                <img
                  src="/industries/wholesale-pic-03.avif"
                  alt="Dynamics 365 Finance & Supply Chain"
                  className="h-20"
                />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Distribution target large, enterprise-level distribution
                companies with highly complex operations, multiple entities,
                global supply chains, and advanced manufacturing or logistics
                needs. Based on their business requirements, wholesale and
                distribution companies can choose either Dynamics 365 Supply
                Chain Management or both solutions in case they have complex
                finance operations.
              </p>

              <p className="font-semibold mb-3">
                Large distribution companies would go for these solutions when:
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The company operates across multiple countries or legal entities.</li>
                <li>
                  It needs deep financial consolidation, intercompany
                  transactions, or multiple currencies.
                </li>
                <li>
                  The supply chain involves production planning, complex
                  procurement, or advanced warehouse automation.
                </li>
                <li>
                  The business uses IoT, AI, or predictive maintenance for
                  large-scale logistics.
                </li>
                <li>
                  It has thousands of SKUs and wants detailed cost management,
                  transportation management, and vendor collaboration portals.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* CHALLENGES SECTION */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
            Challenges in the Wholesale and Distribution Industry
          </h2>

          <p className="text-gray-600 max-w-4xl mb-14 leading-relaxed">
            Every wholesale and distribution company operates with a certain
            precision so that their business moves without friction and they
            stay profitable. Some of the prominent challenges of the wholesale
            and distribution industry in the UK include:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="space-y-8">
              <ChallengeItem
                icon={<Boxes />}
                title="Limited Clarity on Stock Levels"
                text="When stock information stays in different systems, teams cannot see what is available. This causes wrong orders, empty shelves, and blocked cash flow."
              />

              <ChallengeItem
                icon={<Clock />}
                title="Slow, Manual Order Handling"
                text="When every order passes through many people, mistakes and delays increase. This slows delivery and hurts customer trust."
              />

              <ChallengeItem
                icon={<GitMerge />}
                title="Disconnected Systems"
                text="When finance, sales, and warehouse teams work on separate tools, data stays scattered. This creates confusion and poor decisions."
              />

              <ChallengeItem
                icon={<Truck />}
                title="Supplier Delays"
                text="When supplier performance is tracked by hand, problems stay hidden. Late shipments then stop deliveries and upset customers."
              />

              <ChallengeItem
                icon={<Percent />}
                title="Unclear Pricing and Margins"
                text="When cost and sales data do not connect, profit visibility fades. This leads to poor pricing and weak margins."
              />
            </div>

            {/* RIGHT */}
            <div className="space-y-8">
              <ChallengeItem
                icon={<ShoppingCart />}
                title="Complex Multi-Channel Selling"
                text="When sales come from many channels without one system, order tracking breaks. This increases manual work and billing errors."
              />

              <ChallengeItem
                icon={<BarChart3 />}
                title="Limited Financial Visibility"
                text="When financial reports are not linked to operations, leaders cannot see true cash flow. This slows planning and growth."
              />

              <ChallengeItem
                icon={<TrendingDown />}
                title="Weak Forecasting"
                text="When planning depends on guesses, stock levels go wrong. This causes shortages or piles of unsold items."
              />

              <ChallengeItem
                icon={<ShieldAlert />}
                title="Compliance Challenges"
                text="When records stay manual, tracking product batches becomes hard. This risks errors, penalties, and recall costs."
              />

              <ChallengeItem
                icon={<Users />}
                title="Scattered Customer Information"
                text="When customer data stays spread across teams, service slows down. This weakens relationships and repeat sales."
              />
            </div>

          </div>
        </div>
      </section>
      {/* WHY DYNAMICS 365 SECTION */}
      <section className="bg-gradient-to-r from-[#F7F5FB] to-[#FFFFFF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/industries/wholesale-pic-27.avif"
                  alt="Warehouse Operations"
                  className="w-[480px] h-[480px] object-cover "
                />

              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-10">
                Why Dynamics 365 is the Best ERP for
                Wholesale and Distribution Industry?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* CARD */}
                <FeatureCard
                  title="Connected Operations"
                  text="Finance, sales, inventory, and logistics operate in one space, improving communication and decision-making."
                />

                <FeatureCard
                  title="Scalable Platform"
                  text="Suitable for small, medium, and large distributors with flexible modules that grow with business needs."
                />

                <FeatureCard
                  title="Automation Built-In"
                  text="Reduces manual work while improving data accuracy and productivity."
                />

                <FeatureCard
                  title="Cloud-Powered Security"
                  text="Keeps business data safe and accessible anywhere."
                />

                <FeatureCard
                  title="AI and Insights"
                  text="Transforms raw data into meaningful predictions that drive performance."
                />

                <FeatureCard
                  title="Tailored for the UK Market"
                  text="Perfect fit for businesses seeking ERP for wholesale distribution in the UK with compliance-ready modules."
                />

                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Now
                  <span className="text-lg">→</span>
                </a>


              </div>

            </div>


          </div>
        </div>
      </section>
{/* ERP COMPARISON SECTION */}
<section className="bg-gradient-to-r from-[#F7F5FB] to-[#FFFFFF] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
      Choosing The Best ERP Software for <br />
      Wholesale and Distribution Industry
    </h2>

    <p className="text-gray-600 max-w-4xl mb-12 leading-relaxed">
      Before selecting a system, it's important to understand how each
      Dynamics 365 solution fits different distribution needs. Let’s
      break down each solution:
    </p>

    {/* TABLE */}
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-[#EFEAF7]">
          <tr>
            <th className="text-left px-6 py-4 font-semibold text-gray-700">
              Criteria
            </th>
            <th className="text-left px-6 py-4 font-semibold text-gray-700">
              Business Central
            </th>
            <th className="text-left px-6 py-4 font-semibold text-gray-700">
              Finance & Supply Chain Management
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          <TableRow
            criteria="Company Size"
            bc="Small to Mid-sized"
            fscm="Large Enterprise"
          />
          <TableRow
            criteria="Users"
            bc="10–300"
            fscm="300+"
          />
          <TableRow
            criteria="Operations"
            bc="Single or few entities"
            fscm="Multi-entity, multi-country"
          />
          <TableRow
            criteria="Warehouse Complexity"
            bc="Basic to moderate"
            fscm="Highly complex, automated"
          />
          <TableRow
            criteria="Manufacturing"
            bc="Light or outsourced"
            fscm="Advanced, in-house"
          />
          <TableRow
            criteria="Implementation Time"
            bc="2–6 months"
            fscm="6–12 months"
          />
          <TableRow
            criteria="Cost"
            bc="Lower"
            fscm="Higher"
          />
          <TableRow
            criteria="Reporting"
            bc="Built-in"
            fscm="Deep financial consolidation"
          />
          <TableRow
            criteria="Flexibility"
            bc="High, user-friendly"
            fscm="Extensive, configurable"
          />
          <TableRow
            criteria="Maintenance"
            bc="Easier"
            fscm="Easier"
          />
          <TableRow
            criteria="Best for"
            bc="Growing distributors focusing on efficiency and speed"
            fscm="Global distributors needing complex logistics control"
          />
        </tbody>
      </table>
    </div>

  </div>
</section>
{/* CTA SECTION */}
<section
  className="relative py-20 lg:py-18 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/industries/n-015.png')",
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#3E2F5B]/95 to-[#5B4B8A]/85"></div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="max-w-2xl">

      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
        <span className="text-pink-400">Improve Your Distribution Cycle</span>
        <br />
        with the Right ERP
      </h2>

      <p className="text-gray-200 mb-8 leading-relaxed">
        Deploy Dynamics 365 for your distribution business <br/>to keep
        your process aligned end-to-end.
      </p>

      <a
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
      >
        Get Started Now
        <span className="text-lg transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>

    </div>
  </div>
</section>

{/* PARTNERING SECTION */}
<section className="bg-gradient-to-r from-[#F7F5FB] to-[#FFFFFF] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          Partnering with Dynamics Square, UK
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Implementing wholesale and distribution ERP solutions works
          best with a trusted partner who understands your industry
          inside out.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Dynamics Square in the UK has helped several reputed trade and
          distribution businesses adopt Microsoft Dynamics 365 for the
          wholesale industry with smooth{" "}
          <span className="text-red-600 font-semibold">
            implementation
          </span>
          , training, and support.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          As a Microsoft Dynamics 365 Partner in the UK, Dynamics Square
          brings certified expertise and hands-on guidance to help your
          business realise value faster.
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Whether you need automation, reporting, or warehouse
          visibility, our Dynamics 365 experts for wholesale distribution
          in the UK ensure your system delivers measurable results from
          day one.
        </p>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Transform Your Business
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative">

          <img
            src="/industries/wholesale-pic-28.avif"
            alt="Dynamics Square Team"
            className="w-[420px] h-[520px] object-cover "
          />

        </div>
      </div>

    </div>
  </div>
</section>
{/* OUTCOMES SECTION */}
<section className="bg-white py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/industries/wholesale-pic-29.avif"
          alt="Dynamics 365 Distribution Outcomes"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6b3d6e] mb-6">
          The Outcomes to Expect with Dynamics 365 For Wholesale and
          Distribution Industry
        </h2>

        <ul className="space-y-4 mb-6">
          {[
            "Inventory accuracy above 95 per cent",
            "40 per cent faster order-to-cash cycle",
            "Clear margin insights across all channels",
            "Complete supplier and shipment traceability",
            "Single dashboard for all business data",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#EFEAF7] text-[#6b3d6e] text-sm font-bold">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 mb-8 leading-relaxed">
          These are proven outcomes achieved by businesses already
          running Dynamics 365 Distribution Management through Dynamics
          Square, UK.
        </p>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition-all group"
        >
          Schedule A Free Consultation Today
          <span className="text-lg transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

    </div>
  </div>
</section>




    </PageLayout>
  );
}
