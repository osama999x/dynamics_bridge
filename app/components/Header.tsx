'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {

 const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

const toggleAccordion = (menu: string) => {
  setMobileAccordion(mobileAccordion === menu ? null : menu);
};

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'company' | 'solution'>('company');
  const [activeSolution, setActiveSolution] = useState('ERP');


  const solutions = [
    { name: 'Microsoft Dynamics 365', href: '/solutions/dynamics-365' },
    { name: 'Business Central', href: '/solutions/business-central' },
    { name: 'Finance', href: '/solutions/finance' },
    { name: 'Supply Chain Management', href: '/solutions/supply-chain' },
    { name: 'Sales', href: '/solutions/sales' },
    { name: 'Customer Service', href: '/solutions/customer-service' },
    { name: 'Field Service', href: '/solutions/field-service' },
    { name: 'Marketing', href: '/solutions/marketing' },
    { name: 'Commerce', href: '/solutions/commerce' },
    { name: 'Human Resource', href: '/solutions/human-resource' },
    { name: 'Azure IoT', href: '/solutions/azure-iot' },
    { name: 'Machine Learning', href: '/solutions/machine-learning' },
    { name: 'CRM Solutions', href: '/solutions/crm-solutions' },
    { name: 'Web Development', href: '/solutions/web-development' },
  ];
  const companySizeCards = [
    {
      title: 'Startup',
      desc: 'Smart ERP solutions to kickstart growth',
      icon: '/store.png',
      link: '/solutions/startup'  // startup page ka URL 
    },
    {
      title: 'Small Business',
      desc: 'Simplifying business for small teams',
      icon: '/storefront.png',
      link: '/solutions/small-business'  // small business page ka URL
    },
    {
      title: 'Mid Size',
      desc: 'Powering growth for mid-sized firms',
      icon: '/group-3535.png',
      link: '/solutions/mid-size'  // mid-size page ka URL
    },
    {
      title: 'Enterprise',
      desc: 'Advanced ERP for global enterprises',
      icon: '/factory.png',
      link: '/solutions/enterprise'  // enterprise page ka URL
    },
  ];


  const solutionCards: Record<string, any[]> = {
    ERP: [
      { title: 'Business Central', desc: 'All-in-one business solution', icon: '/solution/dynamics-365-businesscentral.svg', link: '/solutions/business-central' },
      { title: 'Finance', desc: 'Improve finance practices', icon: '/solution/dynamics-365-finance.svg', link: '/solutions/finance' },
      { title: 'Supply Chain', desc: 'Optimize operations', icon: '/solution/dynamics-365-supplychainmanagement.svg', link: '/solutions/supply-chain' },
      { title: 'Human Resource', desc: 'Resource utilization', icon: '/solution/dynamics-365-HRM.svg', link: '/solutions/human-resource' },
      { title: 'Commerce', desc: 'Unified commerce experience', icon: '/solution/dynamics-365-commerce.svg', link: '/solutions/commerce' },
      { title: 'Project Operations', desc: 'Automate projects', icon: '/solution/dynamics-365-project-management.svg', link: '/solutions/project-operations' },
    ],

    CRM: [
      { title: 'Sales', desc: 'Boost sales productivity', icon: '/solution/dynamics-365-sales.svg', link: '/solutions/sales' },
      { title: 'Marketing', desc: 'Personalized marketing journeys', icon: '/solution/dynamics-365-marketing.svg', link: '/solutions/marketing' },
      { title: 'Field Service', desc: 'Connected field service', icon: '/solution/dynamics-365-fieldservice.svg', link: '/solutions/field-service' },
      { title: 'Customer Service', desc: 'Exceptional customer support', icon: '/solution/dynamics-365-customer-service.svg', link: '/solutions/customer-service' },
    ],

    'Power Platform': [
      { title: 'Power BI', desc: 'Data-driven insights', icon: '/solution/power-bi.svg', link: '/solutions/power-bi' },
      { title: 'Power Apps', desc: 'Build low-code apps', icon: '/solution/power-apps.svg', link: '/solutions/power-apps' },
      { title: 'Power Automate', desc: 'Automate workflows', icon: '/solution/power-automate.svg', link: '/solutions/power-automate' },
      { title: 'Power Virtual Agents', desc: 'AI chatbots', icon: '/solution/virtual agent.svg', link: '/solutions/virtual-agent' },
    ],

    'Legacy Dynamics': [
      { title: 'Dynamics NAV', desc: 'Legacy ERP solution', icon: '/services/NAV.png', link: '/solutions/dynamics-nav' },
      { title: 'Dynamics CRM', desc: 'Legacy CRM platform', icon: '/services/CRM.png', link: '/solutions/dynamics-crm' },
      { title: 'Dynamics AX', desc: 'Enterprise ERP', icon: '/services/AX.png', link: '/solutions/dynamics-ax' },
      { title: 'Dynamics GP', desc: 'Financial management', icon: '/solution/GP.png', link: '/solutions/dynamics-gp' },
      { title: 'Dynamics ERP', desc: 'Legacy ERP system', icon: '/solution/ERP.png', link: '/solutions/dynamics-erp' },
      { title: 'Dynamics F&O', desc: 'Finance & Operations', icon: '/solution/F&Q.png', link: '/solutions/dynamics-f&o' },
    ],
    'Integration': [
      { title: 'Continia Integration', desc: 'Scan, analyse, and process documents with optimum quality', icon: '/solutions/continia.png', link: '/solutions/continia-integration' },
      { title: 'Insight Works', desc: 'Optimise your inventory and distribution operations effortlessly', icon: '/solutions/Insight_Work.png', link: '/solutions/insight-works' },
      { title: 'Sana Commerce', desc: 'Avail a cloud e-commerce solution to supercharge your online store', icon: '/solutions/Sana_Commerce.png', link: '/solutions/sana-commerce' },
      { title: "Tasklet's Mobile WMS", desc: 'Optimize warehouse operations, simplify inventory, boost profits', icon: '/solutions/taskley-logo-im.png', link: '/solutions/tasklets-mobile-wms' },
      { title: 'Continia OCR', desc: 'Transform document management, streamline processing, manage easily', icon: '/solutions/continia.png', link: '/solutions/continia-ocr' },
      { title: 'Expense Management', desc: 'Monitor corporate expenses', icon:'/solutions/continia.png', link: '/solutions/expense-management' },
      { title: 'Shopify Connector', desc: 'Synchronize orders, inventory, and customers across platforms', icon: '/solutions/shopify-integration-logo.svg', link: '/solutions/shopify-connector' },
      { title: 'Yavrio Integration', desc: 'Connect banking data to ERP for automated workflows', icon: '/solutions/image-541.png', link: '/solutions/yavrio-integration' },
    ],
  };


  const industries = [
    {
      name: 'Distribution',
      desc: 'Drive seamless supply flow with connected operations',
      href: '/industries/distribution',
      icon: '/distribution-truck.png',
    },
    {
      name: 'Manufacturing (Microsoft Cloud)',
      desc: 'Connect your people and operations to drive profitability',
      href: '/industries/manufacturing',
      icon: '/MAnufacturing.png',
    },
    {
      name: 'Education',
      desc: 'Effectively manage students and staff for overall growth',
      href: '/industries/education',
      icon: '/education.png',
    },
    {
      name: 'Ecommerce',
      desc: 'Optimise e-commerce processes with real-time stocks',
      href: '/industries/ecommerce',
      icon: '/E-commerce.png',
    },
    {
      name: 'Professional Services',
      desc: 'Streamline administration leveraging automation',
      href: '/industries/professional-services',
      icon: '/Professional-ervice.png',
    },
    {
      name: 'Food & Beverages',
      desc: 'Manage supply and inventory with real-time data',
      href: '/industries/food-beverages',
      icon: '/Food.png',
    },
    {
      name: 'Healthcare',
      desc: 'Track clinical operations & patient experience',
      href: '/industries/healthcare',
      icon: '/healthcare.png',
    },
    {
      name: 'Retail',
      desc: 'Optimize retail operations with seamless UX',
      href: '/industries/retail',
      icon: '/retail-icon.png',
    },
  ];

  const services = [
    { name: 'Implementation Services', href: '/services/implementation' },
    { name: 'Support Services', href: '/services/support' },
    { name: 'Upgrade Services', href: '/services/upgrade' },
    { name: 'Dynamics 365 Training', href: '/services/training' },
    { name: 'Dynamics 365 Consultants', href: '/services/consultants' },
  ];

  const company = [
    { name: 'About Us', href: '/company/about-us' },
    { name: 'Why Us', href: '/company/why-us' },
    { name: 'Partners', href: '/company/partners' },
    { name: 'Careers', href: '/company/careers' },
  ];

  const resources = [
    { name: 'Blogs', href: '/resources/blogs' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'eBooks', href: '/resources/ebooks' },
    { name: 'Guides', href: '/resources/guides' },
    { name: 'White Papers', href: '/resources/white-papers' },
    { name: 'ERP Calculator', href: '/resources/erp-calculator' },
    { name: 'ERP Comparison', href: '/resources/erp-comparison' },
  ];

  const handleMouseEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="bg-[#4B2E83] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-lg md:text-xl font-bold">
              DYNAMICS <span className="text-red-600">Zentrum</span>™
            </div>
            <div className="h-8 w-px bg-white"></div>
            <div className="flex items-center gap-2">
              {/* Colored squares arranged in 2x2 grid */}
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <div className="w-3 h-3 bg-blue-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
              </div>

              {/* Text content */}
              <div className="text-sm">
                <div className="font-semibold text-white">Microsoft</div>
                <div className="text-white">Solutions Partner</div>

              </div>
            </div>

          </Link>
       {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-6">

  {/* ================= SOLUTIONS MEGA MENU ================= */}
  <div
    className="relative"
    onMouseEnter={() => handleMouseEnter('solutions')}
    onMouseLeave={handleMouseLeave}
  >
    <button className="flex items-center gap-1 hover:text-red-400 transition">
      Solution
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {openDropdown === 'solutions' && (
      <div
        className="
          fixed
          left-1/2
          -translate-x-1/2
          top-[72px]
          w-[95vw]
          max-w-[1200px]
          bg-[#F5F5F7]
          rounded-2xl
          shadow-[0_25px_60px_rgba(0,0,0,0.18)]
          p-8
          z-50
        "
        onMouseEnter={() => handleMouseEnter('solutions')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid grid-cols-12 gap-4">

          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl p-6 h-full">
              <p
                onClick={() => setActiveCategory('company')}
                className="cursor-pointer text-sm font-semibold text-gray-900 mb-4"
              >
                Company By Size
              </p>

              {['ERP','CRM','Integration','Power Platform','Legacy Dynamics'].map(item => (
                <div
                  key={item}
                  onClick={() => {
                    setActiveCategory('solution');
                    setActiveSolution(item);
                  }}
                  className={`py-2 px-3 mb-1 rounded-lg cursor-pointer font-medium text-sm ${
                    activeSolution===item && activeCategory==='solution'
                      ? 'bg-[#F1EEFA] text-[#4B2E83]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-6">
            <div className="bg-white rounded-xl p-6">

              {activeCategory === 'solution' && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {solutionCards[activeSolution]?.map(item => (
                    <Link 
                      key={item.title} 
                      href={item.link} 
                      className="block"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <div className="flex items-start gap-3 hover:bg-gray-50 rounded-lg p-3 transition cursor-pointer">
                        <img src={item.icon} alt={item.title} className="w-9 h-9 mt-1 flex-shrink-0" />
                        <div className="max-w-[260px]">
                          <h4 className="text-[15px] font-semibold text-gray-900 whitespace-nowrap">
                            {item.title}
                          </h4>
                          <p className="text-[13px] text-gray-600 mt-1 leading-snug line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {activeCategory === 'company' && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {companySizeCards.map(item => (
                    <Link 
                      key={item.title} 
                      href={item.link} 
                      className="block"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <div className="flex items-start gap-3 hover:bg-gray-50 rounded-lg p-3 transition cursor-pointer">
                        <img src={item.icon} alt={item.title} className="w-9 h-9 mt-1 flex-shrink-0" />
                        <div className="max-w-[260px]">
                          <h4 className="text-[15px] font-semibold text-gray-900 whitespace-nowrap">
                            {item.title}
                          </h4>
                          <p className="text-[13px] text-gray-600 mt-1 leading-snug line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Right Tool */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Get Your ERP Cost Estimate
                </h4>
                <p className="text-xs text-gray-600">
                  Quick, free, and tailored to your business.
                </p>
              </div>

              <Link
                href="/resources/erp-calculator"
                onClick={() => setOpenDropdown(null)}
                className="mt-6 text-sm text-red-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Check Now →
              </Link>
            </div>
          </div>

        </div>
      </div>
    )}

  </div>






           {/* Industries */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter('industries')}
  onMouseLeave={handleMouseLeave}
>
  {/* Link wraps the button text */}
  <Link href="/industries/industries" className="flex items-center gap-1 hover:text-red-400 transition-colors">
    Industries
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </Link>

  {openDropdown === 'industries' && (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[900px] bg-white text-gray-800 rounded-xl shadow-2xl p-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {industries.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition block"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <img src={item.icon} alt={item.name} className="w-10 h-10" />
            </div>

            {/* Text */}
            <div>
              <div className="font-semibold text-gray-900">{item.name}</div>
              <p className="text-sm text-gray-500 mt-1 leading-snug">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )}
</div>

           {/* Our Services */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter('services')}
  onMouseLeave={handleMouseLeave}
>
  {/* Link wraps the button text */}
  <Link
    href="/services/our-services"
    className="flex items-center gap-1 hover:text-red-400 transition-colors"
  >
    Our Services
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </Link>

  {openDropdown === 'services' && (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-4">
      <div className="px-4 font-semibold mb-2 text-[#4B2E83]">Our Services</div>
      {services.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>

            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1  hover:text-red-400 transition-colors">
                Company
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-4">
                  <div className="px-4 font-semibold mb-2 text-[#4B2E83]">Company</div>
                  {company.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1  hover:text-red-400 transition-colors">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-4">
                  <div className="px-4 font-semibold mb-2 text-[#4B2E83]">Resources</div>
                  {resources.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact-us"
            className="hidden md:block bg-white text-[#4B2E83] font-semibold px-6 py-2 rounded-lg shadow-md transition-colors duration-500 hover:bg-[#4B2E83] hover:text-white"
          >
            Contact Us
          </Link>



          {/* Mobile Menu Button */}
        <button
  className="md:hidden"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? (
    // ❌ CROSS ICON
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    // ☰ HAMBURGER ICON
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>
        </div>

      {/* Mobile Menu */}
{isMenuOpen && (
 <nav className="md:hidden mt-4 pb-4 bg-white text-gray-800 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
    <div className="divide-y">

      {/* Company By Size */}
      <div className="py-3">
        <button
          onClick={() => toggleAccordion("companySize")}
          className="w-full flex justify-between items-center px-4 font-semibold"
        >
          Company By Size
          <span>{mobileAccordion === "companySize" ? "−" : "+"}</span>
        </button>

        {mobileAccordion === "companySize" && (
          <div className="mt-2 space-y-2 pl-6">
            {companySizeCards.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="block text-sm py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Solutions */}
      <div className="py-3">
        <button
          onClick={() => toggleAccordion("solutions")}
          className="w-full flex justify-between items-center px-4 font-semibold"
        >
          Solutions
          <span>{mobileAccordion === "solutions" ? "−" : "+"}</span>
        </button>

        {mobileAccordion === "solutions" && (
          <div className="mt-2 space-y-2 pl-6">
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Industries */}
      <div className="py-3">
        <button
          onClick={() => toggleAccordion("industries")}
          className="w-full flex justify-between items-center px-4 font-semibold"
        >
          Industries
          <span>{mobileAccordion === "industries" ? "−" : "+"}</span>
        </button>

        {mobileAccordion === "industries" && (
          <div className="mt-2 space-y-2 pl-6">
            {industries.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Our Services */}
      <div className="py-3">
        <button
          onClick={() => toggleAccordion("services")}
          className="w-full flex justify-between items-center px-4 font-semibold"
        >
          Our Services
          <span>{mobileAccordion === "services" ? "−" : "+"}</span>
        </button>

        {mobileAccordion === "services" && (
          <div className="mt-2 space-y-2 pl-6">
            {services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Company */}
      <div className="py-3">
        <button
          onClick={() => toggleAccordion("company")}
          className="w-full flex justify-between items-center px-4 font-semibold"
        >
          Company
          <span>{mobileAccordion === "company" ? "−" : "+"}</span>
        </button>

        {mobileAccordion === "company" && (
          <div className="mt-2 space-y-2 pl-6">
            {company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Resources */}
      <div className="py-3">
        <button
          onClick={() => toggleAccordion("resources")}
          className="w-full flex justify-between items-center px-4 font-semibold"
        >
          Resources
          <span>{mobileAccordion === "resources" ? "−" : "+"}</span>
        </button>

        {mobileAccordion === "resources" && (
          <div className="mt-2 space-y-2 pl-6">
            {resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
     <Link
      href="/contact-us"
      className="m-4 block bg-[#4B2E83] text-white py-2 rounded-lg text-center"
      onClick={() => setIsMenuOpen(false)}
    >
      Contact Us
    </Link>
  </nav>
)}
      </div>
    </header>
  );
}
