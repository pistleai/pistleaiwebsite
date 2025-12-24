'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from '../../components/Icons';
import { motion } from 'framer-motion';
import ContactModal from '../../components/ContactModal';

const maintenanceTiers = [
  {
    name: 'Basic Maintenance',
    price: '₹15k',
    period: '/ month',
    description: 'Essential support for small businesses to keep their digital presence healthy.',
    features: [
      'Website Hosting',
      'Monthly Content Updates',
      'Security Patches',
      'Email Support (24h turnaround)',
      'SSL Certificate Management',
      'Monthly Backup'
    ]
  },
  {
    name: 'Business Growth',
    price: '₹35k',
    period: '/ month',
    recommended: true,
    description: 'Proactive management and consulting to scale your business performance.',
    features: [
      'Everything in Basic',
      'Priority Phone Support',
      'Quarterly Strategy Consulting',
      'Performance Optimization',
      'Small Feature Additions',
      'Weekly Backups',
      'SEO Health Reports'
    ]
  },
  {
    name: 'Enterprise Partner',
    price: 'Custom',
    period: '',
    description: 'Comprehensive technical partnership for large-scale operations and custom builds.',
    features: [
      'Dedicated Project Manager',
      'Custom Software Development',
      '24/7 Monitoring',
      'Automated Backups',
      'On-site Consultation',
      'Unlimited Support',
      'Infrastructure Management'
    ]
  }
];

export default function PricingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pistle-navy pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pistle-gold font-bold tracking-[0.2em] text-sm uppercase mb-3"
          >
            Pricing & Plans
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Transparent Pricing for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Continuous Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto"
          >
            We don't just build and leave. We ensure your technology continues to drive value for years to come through our dedicated maintenance and partnership tiers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {maintenanceTiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative rounded-3xl p-8 bg-white/5 border flex flex-col transition-all duration-300 hover:bg-white/10 ${
                tier.recommended ? 'border-pistle-gold ring-1 ring-pistle-gold' : 'border-white/10'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 -mt-4 mr-8 px-4 py-1 bg-pistle-gold text-pistle-navy text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
              <div className="mb-6 flex items-baseline text-white">
                <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="ml-2 text-lg font-medium text-slate-400">{tier.period}</span>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                {tier.description}
              </p>
              
              <div className="flex-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">What's Included:</h4>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-slate-300">
                      <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-pistle-gold mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setIsContactOpen(true)}
                className={`w-full py-4 px-6 rounded-xl text-center font-bold tracking-wide transition-all duration-300 ${
                  tier.recommended 
                    ? 'bg-pistle-gold text-pistle-navy hover:bg-[#e5c158] shadow-lg shadow-pistle-gold/10' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto"
        >
            <h3 className="text-xl font-bold text-white mb-2">Need a custom software solution?</h3>
            <p className="text-slate-400 mb-6 text-sm">We provide per-project pricing for custom development. Let's discuss your specific requirements.</p>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center text-pistle-gold font-bold hover:text-white transition-colors"
            >
              Get a Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
            </button>
        </motion.div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
