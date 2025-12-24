'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Discovery',
        desc: 'We analyze your business workflows to identify pain points and automation opportunities.'
    },
    {
        num: '02',
        title: 'Architecture',
        desc: 'Our engineers design a scalable, Next.js-based framework tailored to your data needs.'
    },
    {
        num: '03',
        title: 'Development',
        desc: 'Agile sprints with constant updates, ensuring the product evolves with your feedback.'
    },
    {
        num: '04',
        title: 'Deployment',
        desc: 'Seamless launch protocols followed by automated maintenance and monitoring.'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-pistle-navy border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-pistle-gold font-bold tracking-[0.2em] text-sm uppercase mb-3">How We Work</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                        From Concept to <span className="text-pistle-gold">Live Solution</span>
                    </h3>
                </div>

                <div className="relative">
                    {/* Connecting Line (Mobile: Hidden, Desktop: Visible) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pistle-gold/30 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="w-24 h-24 bg-pistle-navy border border-pistle-gold/30 rounded-full flex items-center justify-center text-3xl font-display font-bold text-pistle-gold mb-8 relative z-10 group-hover:bg-pistle-gold group-hover:text-pistle-navy transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] mx-auto lg:mx-0">
                                    {step.num}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 text-center lg:text-left">{step.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed text-center lg:text-left">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
