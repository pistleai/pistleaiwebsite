'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Google Cloud'
];

const TrustBar = () => {
    return (
        <section className="py-10 bg-pistle-navy border-b border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-semibold uppercase text-slate-500 tracking-widest mb-8">
                    Powering Next-Gen Applications With
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Text Logos for Tech Stack - Ideally SVGs */}
                    {techs.map((tech) => (
                        <div key={tech} className="text-sm font-bold text-white/40 hover:text-pistle-gold transition-colors cursor-default">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
