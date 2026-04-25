import { GiSparkles } from "react-icons/gi";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-gradient-to-b from-[#4B2E83] to-[#6B46C1] text-white">

      {/* Background circles */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-dashed rounded-full"></div>
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[950px] h-[950px] border border-dashed rounded-full"></div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-32 text-center max-w-5xl">

        <p className="text-lg mb-6 opacity-90">
          UK&apos;s Trusted Microsoft Dynamics 365 Partner
        </p>

        <h1 className="text-1xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-5">
          When results count,
          <br />
          <span className="text-white">Dynamics Zentrum</span> delivers!
        </h1>

        <p className="text-base md:text-lg opacity-80 max-w-4xl mx-auto mb-7 leading-relaxed">
          As a certified Microsoft Dynamics 365 partner in the UK, we empower
          businesses with future-ready technologies that deliver impact.
          Dominate and thrive with AI-powered Microsoft solutions. With Dynamics
          Zentrum, your success is powered by years of proven expertise—no matter
          your industry!
        </p>

        {/* Button with animated sparkle icon */}
        <Link href="/contact-us">
        <button className="bg-red-500 hover:bg-red-700 transition-transform duration-300 px-10 py-4 rounded-full
        opacity-90 text-lg font-semibold flex items-center gap-3 mx-auto shadow-lg transform hover:scale-105">
          <GiSparkles className="text-white w-5 h-5 animate-bounce" />
          Book a Free Consultation
          <span className="text-xl">→</span>
        </button>
        </Link>


        <p className="mt-4 text-sm opacity-80">
          Trusted by 500+ businesses • No obligation • Fast response
        </p>
      </div>

      {/* LEFT FLOATING BOX */}
      <div className="hidden lg:block absolute bottom-10 left-10 z-20">
        <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-3xl shadow-2xl">
          <div className="relative w-56 h-44">
            <img
              src="/hero1.jpg"
              className="absolute top-0 left-0 w-44 h-28 object-cover rounded-2xl shadow-lg"
              alt=""
            />
            <img
              src="/hero2.jpg"
              className="absolute bottom-0 right-0 w-32 h-24 object-cover rounded-2xl shadow-lg border-4 border-white/20"
              alt=""
            />
          </div>
          <div className="absolute bottom-2 left-8 bg-[#4B2E83] px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
            Industry Leaders
          </div>
        </div>
      </div>

      {/* RIGHT FLOATING BOX */}
      <div className="hidden lg:block absolute bottom-10 right-10 z-20">
        <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-3xl shadow-2xl">
          <div className="relative w-56 h-44">
            <img
              src="/hero3.jpg"
              className="absolute top-0 right-0 w-44 h-28 object-cover rounded-2xl shadow-lg"
              alt=""
            />
            <img
              src="/hero4.jpg"
              className="absolute bottom-0 left-0 w-32 h-24 object-cover rounded-2xl shadow-lg border-4 border-white/20"
              alt=""
            />
          </div>
          <div className="absolute bottom-2 right-8 bg-[#4B2E83] px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
            Trusted Partner
          </div>
        </div>
      </div>

    </section>
  );
}
