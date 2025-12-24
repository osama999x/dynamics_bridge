'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    company: '',
    lookingFor: '',
    requirements: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Promotional Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4B2E83] to-pink-600 bg-clip-text text-transparent mb-6">
              Let&apos;s build the future of your business— together!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The right technology can change everything, and Dynamics Square ensures your business gets the tools it needs to succeed. Take the first step towards smarter solutions now!
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    *Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                    Job title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    *Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83]">
                      <option>🇬🇧 +44</option>
                      <option>🇺🇸 +1</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    *Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lookingFor" className="block text-sm font-semibold text-gray-700 mb-2">
                    Looking For?
                  </label>
                  <select
                    id="lookingFor"
                    name="lookingFor"
                    value={formData.lookingFor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="consulting">Consulting</option>
                    <option value="implementation">Implementation</option>
                    <option value="upgrade">Upgrade</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-semibold text-gray-700 mb-2">
                  *Any specific requirements or questions?
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  required
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="underline text-[#4B2E83]">Privacy Policy</a> and{' '}
                  <a href="#" className="underline text-[#4B2E83]">Terms of Service</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Let&apos;s Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

