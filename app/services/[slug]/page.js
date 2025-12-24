'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { CheckCircle2, ArrowRight } from '../../../components/Icons';
import { motion } from 'framer-motion';

const serviceData = {
  'web-development': {
    title: 'Web Development',
    headline: 'Next-Gen Web Development with PISTLE AI',
    description: 'Our use of Next.js for SEO optimization, speed, and scalability ensures your business stays ahead of the competition with a lightning-fast digital presence.',
    features: [
      { name: 'Custom Design System', desc: 'Tailored UI/UX for brand identity' },
      { name: 'E-Commerce Ready', desc: 'Seamless integration with payment gateways and product catalogs' },
      { name: 'SEO & Performance', desc: 'Optimized code, fast load times, and structured metadata' },
      { name: 'Responsive Layouts', desc: 'Mobile-first design with adaptive components' }
    ]
  },
  'software-development': {
    title: 'Software Development',
    headline: 'Custom Software Architecture with PISTLE AI',
    description: 'We build scalable, high-performance software systems that solve complex business challenges and drive operational efficiency.',
    features: [
      { name: 'Custom CRM/ERP', desc: 'Built specifically for your operational needs' },
      { name: 'Cloud Native', desc: 'Optimized for modern cloud infrastructure' },
      { name: 'API Integration', desc: 'Connect your business tools seamlessly' },
      { name: 'Secure Architecture', desc: 'Enterprise-grade security protocols' }
    ]
  },
  'business-consulting': {
    title: 'Business Consulting',
    headline: 'Strategic Business Consulting with PISTLE AI',
    description: 'Align your technology roadmap with your long-term ROI and growth goals through our expert strategic guidance.',
    features: [
      { name: 'Digital Strategy', desc: 'Full-scale transformation planning' },
      { name: 'IT Roadmap', desc: 'Clear path to technical excellence' },
      { name: 'Workflow Audit', desc: 'Optimize internal processes for growth' },
      { name: 'Growth Hacking', desc: 'Technology-driven marketing strategies' }
    ]
  },
  'intelligent-automation': {
    title: 'Intelligent Automation',
    headline: 'Intelligent Business Automation with PISTLE AI',
    description: 'Leveraging AI and smart workflows to save time, reduce manual overhead, and eliminate human error in your business processes.',
    features: [
      { name: 'Process Automation', desc: 'Streamline daily operations' },
      { name: 'AI Integration', desc: 'Smart decision-making engines' },
      { name: 'Data Processing', desc: 'High-speed automated data analysis' },
      { name: 'Bot Development', desc: 'Custom conversational and task-oriented bots' }
    ]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug;
  const service = serviceData[slug];

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-pistle-navy flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: service.title,
      message: formData.get('message'),
    };

    const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    try {
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
      setSubmitted(true);
    } catch (error) {
      console.error('Error!', error.message);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pistle-navy pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <a href="/#solutions" className="text-pistle-gold hover:text-white transition-colors flex items-center text-sm font-medium">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Services
          </a>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {service.headline}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-pistle-gold/30 transition-all group">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-pistle-gold mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold mb-1 group-hover:text-pistle-gold transition-colors">{feature.name}</h3>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold text-pistle-navy mb-2">Inquiry Received</h2>
              <p className="text-slate-500 mb-8">Thank you for your interest in our {service.title} services. We will get back to you within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-pistle-navy text-white font-bold py-3 px-8 rounded-xl hover:bg-pistle-navy/90 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-pistle-navy mb-2">Get Started with {service.title}</h2>
              <p className="text-slate-500 mb-8">Ready to transform your business? Fill out the form below for a free consultation.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input name="name" type="text" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pistle-gold focus:border-transparent outline-none transition-all shadow-sm text-pistle-navy" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input name="email" type="email" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pistle-gold focus:border-transparent outline-none transition-all shadow-sm text-pistle-navy" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">How can we help with your {service.title} needs?</label>
                  <textarea name="message" rows="4" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pistle-gold focus:border-transparent outline-none transition-all shadow-sm resize-none text-pistle-navy" placeholder="Tell us more about your project..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full bg-pistle-gold hover:bg-[#e5c158] text-pistle-navy font-bold py-4 px-8 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
