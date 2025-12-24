'use client';

import React from 'react';
import { Smartphone, CheckCircle2, ShieldCheck, BarChart3, Zap, ArrowRight, Server } from './Icons';
import { motion } from 'framer-motion';

import Link from 'next/link';

const services = [
    {
        slug: 'web-development',
        icon: Smartphone,
        title: 'Web Development',
        description: 'Next-gen, SEO-optimized websites built with Next.js for unmatched speed and performance.',
        features: ['Custom Design System', 'E-Commerce Ready', 'SEO & Performance', 'Responsive Layouts']
    },
    {
        slug: 'software-development',
        icon: Server,
        title: 'Software Development',
        description: 'Scalable, custom-built software architectures designed to solve complex business logic and workflows.',
        features: ['Custom CRM/ERP', 'Cloud Native', 'API Integration', 'Secure Architecture']
    },
    {
        slug: 'business-consulting',
        icon: BarChart3,
        title: 'Business Consulting',
        description: 'Strategic digital transformation guide to align your technology roadmap with your ROI goals.',
        features: ['Digital Strategy', 'IT Roadmap', 'Workflow Audit', 'Growth Hacking']
    },
    {
        slug: 'intelligent-automation',
        icon: Zap,
        title: 'Intelligent Automation',
        description: 'Automate repetitive tasks with AI-driven workflows to save hundreds of man-hours annually.',
        features: ['Process Automation', 'AI Integration', 'Data Processing', 'Bot Development'],
        highlight: true
    }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-pistle-navy relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pistle-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-pistle-gold font-bold tracking-[0.2em] text-sm uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            Comprehensive <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Digital Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${
                  service.highlight 
                  ? 'bg-gradient-to-b from-pistle-gold/10 to-transparent border-pistle-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-pistle-gold/30 hover:bg-white/10'
              }`}
            >
              <div className="flex-grow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                    service.highlight ? 'bg-pistle-gold text-pistle-navy' : 'bg-white/10 group-hover:bg-pistle-gold group-hover:text-pistle-navy text-pistle-gold'
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-pistle-gold transition-colors">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-pistle-gold mr-2 flex-shrink-0" />
                          {feature}
                      </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={`/services/${service.slug}`}
                className="inline-flex items-center justify-center px-6 py-2 bg-pistle-gold hover:bg-[#e5c158] text-pistle-navy font-bold rounded-lg transition-all duration-300 text-sm uppercase tracking-wider shadow-lg hover:shadow-pistle-gold/20 active:scale-95"
              >
                Know More
              </Link>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-pistle-gold transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
