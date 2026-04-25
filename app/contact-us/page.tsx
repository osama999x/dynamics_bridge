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
      <section className="bg-[#f5f6fb] py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl font-bold text-[#2d1b69] leading-tight mb-6">
              Ready for Digital <br />
              Transformation? Let’s <br />
              connect!
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              Get Microsoft solutions optimised for your business. 
              Be a future-ready organisation!
            </p>

            <h3 className="text-xl font-semibold text-[#2d1b69] mb-6">
              Why Choose Dynamics Zentrum
            </h3>

            <ul className="space-y-6">
              {[
                "350+ Successful Implementations and Counting!",
                "150+ Certified Professionals at Your Service!",
                "4x Improved Productivity!",
                "24/7 Support to Keep Your Business Up and Running!",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-md flex items-center justify-center">
                    ✓
                  </div>
                  <p className="text-gray-700">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-xl p-8 shadow-xl max-w-md ml-auto bg-white border">
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="* Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                />
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="* Work email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
              />

              <div className="flex gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-md bg-gray-200 text-gray-600 outline-none w-28"
                >
                  <option>GB +44</option>
                  <option>US +1</option>
                  <option>IN +91</option>
                </select>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="* Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
                />

                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-600 outline-none"
                >
                  <option>Looking for?</option>
                  <option>Consulting</option>
                  <option>Implementation</option>
                  <option>Support</option>
                </select>
              </div>

              <textarea
                name="requirements"
                required
                rows={3}
                placeholder="* Any specific requirements?"
                value={formData.requirements}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 outline-none"
              />

              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                I agree to the Privacy Policy and Terms of Service.
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : "Let’s Connect"}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2">Form submitted successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>

            {/* SUPPORT INFO BELOW BUTTON */}
            <div className="mt-8 border-t pt-6 space-y-4 text-gray-700 text-sm">
              <h4 className="font-semibold text-lg mb-2">Get in touch Instantly</h4>

              <div className="flex items-center gap-2">
                <span className="text-purple-600">📞</span>
                <span>Technical Support: +44 798 858 6885</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-purple-600">📧</span>
                <span>Email Us: info@dynamicszentrum.com</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 14px;
          border-radius: 8px;
          background: #f9fafb;
          outline: none;
        }
        .input:focus {
          border-color: #6b46c1;
          background: white;
        }
      `}</style>
    </PageLayout>
  );
}
