'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    countryCode: '+92',
    company: '',
    lookingFor: '',
    requirements: '',
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    const checked =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');

        setFormData({
          name: '',
          jobTitle: '',
          email: '',
          phone: '',
          countryCode: '+92',
          company: '',
          lookingFor: '',
          requirements: '',
          agreeToTerms: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.log(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#eef0f7] to-white flex items-center py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center max-w-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 text-[#8B3A62]">
              Let’s build the future of your business—
              <br className="hidden md:block" />
              together!
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The right technology can change everything, and Dynamics Zentrum
              ensures your business gets the tools it needs to succeed.
            </p>
          </div>

          {/* FORM */}
          <div className="rounded-xl p-6 md:p-8 w-full max-w-full md:max-w-md mx-auto lg:ml-auto bg-white shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME + JOB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  placeholder="* Name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none"
                />

                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  placeholder="Job title"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none"
                />
              </div>

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="* Work email"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none"
              />

              {/* PHONE */}
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-md bg-gray-200 w-full sm:w-28"
                >
                  <option value="+44">GB +44</option>
                  <option value="+1">US +1</option>
                  <option value="+92">PK +92</option>
                </select>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone number"
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-md bg-gray-200 outline-none"
                />
              </div>

              {/* COMPANY + SERVICE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  placeholder="* Company name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none"
                />

                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none"
                >
                  <option value="">Looking for?</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Implementation">Implementation</option>
                  <option value="Support">Support</option>
                </select>
              </div>

              {/* MESSAGE */}
              <textarea
                name="requirements"
                required
                rows={3}
                value={formData.requirements}
                placeholder="* Any specific requirements?"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-200 outline-none"
              />

              {/* CHECKBOX */}
              <label className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />

                I agree to the Privacy Policy and Terms of Service.
              </label>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition"
              >
                {isSubmitting ? 'Submitting...' : "Let’s Connect"}
              </button>

              {/* STATUS */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm">
                  Form submitted successfully!
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm">
                  Something went wrong.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}