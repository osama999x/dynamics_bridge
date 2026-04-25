import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4B2E83] text-white pt-16 pb-10 px-4">
      <div className="container mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-14">

          {/* COMPANY INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4">DYNAMICS Zentrum™</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Dynamics Zentrum is UK's leading Microsoft Gold Certified Partner that
              caters to organisations seeking next-gen Microsoft Business Apps.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <p>Dynamics Zentrum<br/> 124 City Road, London, EC1V 2NX.</p>
              <p>+44 798 858 6885</p>
              <p>info@dynamicszentrum.com</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">Partners</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Tools</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Implementation</li>
              <li>Upgrade</li>
              <li>Support</li>
              <li>Consulting</li>
              <li>Audit</li>
              <li>Training</li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Wholesale & Distribution</li>
              <li>Manufacturing</li>
              <li>Financial Services</li>
              <li>Professional Services</li>
              <li>Healthcare</li>
              <li>Food & Beverage</li>
              <li>Not For Profit</li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Dynamics 365</li>
              <li>Business Central</li>
              <li>Finance</li>
              <li>Supply Chain</li>
              <li>Marketing</li>
              <li>Sales</li>
              <li>Customer Service</li>
              <li>Field Service</li>
            </ul>
          </div>

          {/* FOLLOW US */}
<div>
  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

  <div className="flex gap-4 mb-8 text-white">

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/company/dynamicszentrum/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 hover:text-pink-500"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.941v5.665H9.358V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.6 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.999 20.452H3.674V9h3.325v11.452z"/>
      </svg>
    </a>

    {/* Facebook */}
    <a 
      href="https://www.facebook.com/dynamicszentrum/about/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 hover:text-pink-500"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a 
      href="https://www.instagram.com/dynamics_zentrum/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 hover:text-pink-500"
      >
        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm4.25 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z"/>
      </svg>
    </a>

  </div>


            <img
              src="/microsoft-partner-footer.png"
              alt="Microsoft Partner"
              className="w-40 mb-6"
            />

            <img
              src="/forber.png"
              alt="Forbes Technology Council"
              className="w-28"
            />
          </div>
        </div>

        {/* CENTER BADGES */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          <img
            src="/Tech-For-Socil-Impact.svg"
            alt="Microsoft Tech for Social Impact"
            className="w-56"
          />
          <img
            src="/UK-badge.png"
            alt="Clutch Badge"
            className="w-24"
          />
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          <p>© Copyright 2025 Dynamics Zentrum UK. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2 underline">
            <Link href="/TermOfUse">Terms of Use</Link>
            <Link href="/Coockies">Cookie</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
