"use client";
import { useState } from 'react';
import PageLayout from '@/app/components/PageLayout';

export default function ContactUsPage() {

  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    company: '',
    lookingFor: '',
    requirements: '',
    agreeToTerms: false,
    countryCode: 'GB +44',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitStatus(res.ok ? 'success' : 'error');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>

      {/* HERO + FORM */}
      <section className="bg-[#f5f6fb] py-12 md:py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2d1b69] leading-tight mb-4 md:mb-6">
              Ready for Digital <br />
              Transformation? Let’s <br />
              connect!
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-10 max-w-xl">
              Get Microsoft solutions optimised for your business.
              Be a future-ready organisation!
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-[#2d1b69] mb-4 md:mb-6">
              Why Choose Dynamics Zentrum
            </h3>

            <ul className="space-y-4 md:space-y-6">
              {[
                "350+ Successful Implementations and Counting!",
                "150+ Certified Professionals at Your Service!",
                "4x Improved Productivity!",
                "24/7 Support to Keep Your Business Up and Running!",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 md:gap-4 items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 text-purple-700 rounded-md flex items-center justify-center text-sm md:text-base">
                    ✓
                  </div>
                  <p className="text-gray-700 text-sm md:text-base">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* FORM */}
          <div className="rounded-xl p-6 md:p-8 shadow-xl w-full max-w-full md:max-w-md mx-auto lg:ml-auto bg-white border">
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="* Name"
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none" />

                <input type="text" name="jobTitle" placeholder="Job title"
                  value={formData.jobTitle} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none" />
              </div>

              <input type="email" name="email" required placeholder="* Work email"
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none" />

              <div className="flex flex-col sm:flex-row gap-3">
                <select name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-md bg-gray-200 w-full sm:w-28">
                  <option>GB +44</option>
                  <option>US +1</option>
                  <option>PK +92</option>
                </select>

                <input type="text" name="phone" placeholder="Phone number"
                  value={formData.phone} onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-md bg-gray-200 outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="company" required placeholder="* Company name"
                  value={formData.company} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none" />

                <select name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200">
                  <option>Looking for?</option>
                  <option>Consulting</option>
                  <option>Implementation</option>
                  <option>Support</option>
                </select>
              </div>

              <textarea name="requirements" required rows={3}
                placeholder="* Any specific requirements?"
                value={formData.requirements} onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none" />

              <label className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                <input type="checkbox" name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange} required />
                I agree to the Privacy Policy and Terms of Service.
              </label>

              <button type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition">
                {isSubmitting ? 'Submitting...' : "Let’s Connect"}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm">Form submitted successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm">Something went wrong.</p>
              )}
            </form>

            <div className="mt-6 md:mt-8 border-t pt-4 md:pt-6 text-sm">
              <h4 className="font-semibold text-base md:text-lg mb-2">Get in touch Instantly</h4>
              <p>📧 info@dynamicszentrum.com</p>
            </div>
          </div>

        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[#f5f6fb] pb-12 md:pb-20">
        <div className="container mx-auto px-4">

          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
            Locations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

            {[{
              img: "/uk1.png",
              title: "London Office",
              address: `Suite 1835
124 City Road
London EC1V 2NX
United Kingdom`,
              phone: "+44 7988 586 885"
            },
            {
              img: "/us.jpg",
              title: "Wyoming Office",
              address: `1910 Thomas Ave
Cheyenne, WY 82001-3527
United States`,
              phone: "+1 307 427 2797"
            },
            {
              img: "/pk.jpg",
              title: "Pakistan Office",
              address: `2nd Floor, Emirate Tower, M-13
F-7 Markaz, Islamabad
Pakistan`,
              phone: "+92 307 510 4500"
            }].map((loc, i) => (

              <div key={i}
                className="bg-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition flex flex-col justify-between min-h-[280px] md:min-h-[320px]">

                <div>
                  <img src={loc.img} alt="" className="w-7 md:w-8 mb-3 md:mb-4 object-contain" />

                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    {loc.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">
                    {loc.address}
                  </p>
                </div>

                <p className="mt-4 md:mt-6 text-sm md:text-base font-medium text-gray-800">
                  Phone number: <span className="font-semibold">{loc.phone}</span>
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

    </PageLayout>
  );
}