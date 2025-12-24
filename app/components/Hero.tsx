export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#4B2E83] to-[#6B46C1] text-white py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-dashed border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-dashed border-white rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg mb-4 opacity-90">UK&apos;s Trusted Microsoft Dynamics 365 Partner</p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            When results count,<br />
            <span className="text-red-500">Dynamics Square</span> delivers!
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            As a certified Microsoft Dynamics 365 partner in the UK, we empower businesses with future-ready technologies that deliver impact. Dominate and thrive with AI-powered Microsoft solutions. With Dynamics Square, your success is powered by years of proven expertise—no matter the industry!
          </p>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-3 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Book a Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <p className="text-sm opacity-75">
              Trusted by 500+ businesses • No obligation • Fast response
            </p>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-20 flex justify-between items-end">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="bg-[#4B2E83] px-4 py-2 rounded-lg text-sm font-semibold">
              Industry Leaders
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="bg-[#4B2E83] px-4 py-2 rounded-lg text-sm font-semibold">
              Trusted Partner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

