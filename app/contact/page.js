'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle2, Building2 } from '../../components/Icons';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    
    const formData = new FormData(e.target);
    const email = formData.get('email');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: email,
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      alert("Apps Script URL not configured. Please add NEXT_PUBLIC_APPS_SCRIPT_URL to your .env.local file.");
      setLoading(false);
      return;
    }

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for direct POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error!', error.message);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-slate-100">
          <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-primary-900 mb-2">Message Sent!</h2>
          <p className="text-slate-500 mb-8">Thank you for reaching out. Our team will contact you within 24 hours.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-primary-900 text-white font-bold py-4 rounded-xl hover:bg-primary-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary-900 sm:text-5xl md:text-6xl">
            Let's Build Something <span className="text-accent-500">Amazing</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Ready to scale your business with custom technology? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Values */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <Building2 className="h-6 w-6 text-accent-500 mr-2" />
                Contact Information
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <div className="flex items-start">
                  <div className="h-10 w-10 border-2 border-accent-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-500 font-bold text-xs uppercase">Dir</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-800">Direct Line</p>
                    <p>Senior Manager: 9579026326</p>
                    <p>Project Manager: 7057318654</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 border-2 border-accent-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-accent-500 font-bold">
                    @
                  </div>
                  <div>
                    <p className="font-semibold text-primary-800">Email Address</p>
                    <a href="mailto:pistleai@gmail.com" className="hover:text-accent-600 transition-colors">pistleai@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 border-2 border-accent-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-500 font-bold text-xs uppercase">Loc</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-800">Office Address</p>
                    <p>1st Floor, Sai Leela Apt, Bhakti Dham, Santosh Bhuvan, NSP(E)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle2 className="h-32 w-32" />
              </div>
              <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3">
                {[
                  'Custom-built solutions for your specific needs',
                  'Dedicated project manager for clear communication',
                  'Enterprise-grade security and scalability',
                  '24/7 technical monitoring and support'
                ].map((text, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-primary-900 mb-2">Request a Free Consultation</h2>
            <p className="text-slate-500 mb-8">Fill in the details below and our team will get back to you within 24 hours.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input name="name" type="text" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input name="company" type="text" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="Acme Inc." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  onChange={() => setEmailError('')}
                  className={`w-full border ${emailError ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all shadow-sm`} 
                  placeholder="john@example.com" 
                />
                {emailError && <p className="mt-1 text-sm text-red-500 font-medium">{emailError}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input name="phone" type="tel" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="+91 98765 43210" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                <select name="service" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all shadow-sm appearance-none bg-white">
                  <option>Website Development</option>
                  <option>Software Development</option>
                  <option>Business Consulting</option>
                  <option>Automation Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                <textarea name="message" rows="4" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all shadow-sm resize-none" placeholder="Tell us more about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold py-4 px-8 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
