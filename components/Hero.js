'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from './Icons';
import Link from 'next/link';

const GlobeAnimation = () => {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Core Globe (CSS-only representation for performance) */}
            <div className="absolute inset-0 rounded-full border border-pistle-gold/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-pistle-gold/10 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-12 rounded-full border border-pistle-gold/5 animate-[spin_10s_linear_infinite]" />
            
            {/* Glowing Particles */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-pistle-gold/5 to-transparent blur-3xl" />
            
            {/* Central Grid representation */}
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-full h-full rounded-full border-[0.5px] border-pistle-gold/20 grid grid-cols-6 grid-rows-6 opacity-30 transform rotate-12 bg-pistle-navy/50 mix-blend-overlay"></div>
            </div>
        </div>
    );
};

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative min-h-[110vh] flex items-center bg-pistle-navy overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-radial from-pistle-navy/0 via-pistle-navy/50 to-pistle-navy z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-pistle-gold/30 bg-pistle-gold/5 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-pistle-gold mr-2 animate-pulse"></span>
                <span className="text-pistle-gold text-xs tracking-widest uppercase font-semibold">Future Ready Technology</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight text-white mb-6">
              Automating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pistle-gold to-[#fff5cc]">Future</span>, <br />
              Empowering <span className="relative">
                Growth
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-pistle-gold opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed font-light">
              Pistle AI delivers cutting-edge Web Development, Software Solutions, and Intelligent Automation tailored for the modern enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <button 
                onClick={onCtaClick}
                className="group relative px-8 py-4 bg-pistle-gold text-pistle-navy font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <Link 
                href="/pricing"
                className="px-8 py-4 border border-pistle-gold/50 text-white rounded-lg hover:bg-pistle-gold/10 transition-all flex items-center justify-center font-medium backdrop-blur-sm w-full sm:w-auto hover:border-pistle-gold"
              >
                View Pricing
              </Link>
              
              <button 
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-slate-400 hover:text-white transition-all flex items-center justify-center font-medium w-full sm:w-auto"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mr-3 hidden sm:flex">
                   <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Explore Solutions
              </button>
            </div>
          </motion.div>
          
          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, opacity: 0 }}
            animate={{ opacity: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end relative"
          >
             <GlobeAnimation />
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-10 left-10 md:left-20 bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-30 max-w-[200px]"
             >
                <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-white font-mono">System Status</span>
                </div>
                <div className="text-sm font-bold text-white">All Systems Operational</div>
                <div className="text-[10px] text-slate-400 mt-1">Latency: 24ms</div>
             </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-pistle-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
