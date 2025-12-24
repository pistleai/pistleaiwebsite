'use client';

import React from 'react';
import { Building2, Phone, Mail, MapPin } from './Icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0f1025] text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="h-10 w-10 border-2 border-pistle-gold rounded-full flex items-center justify-center mr-3 transition-transform group-hover:scale-105">
                 <span className="text-pistle-gold font-bold text-xs">P-AI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white tracking-widest leading-none">PISTLE AI</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your technology partner for business growth. We architect digital experiences that drive conversion and automate operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-pistle-gold uppercase tracking-widest mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-pistle-gold transition-colors">Home</Link></li>
              <li><Link href="/#solutions" className="hover:text-pistle-gold transition-colors">Services</Link></li>
              <li><Link href="/#process" className="hover:text-pistle-gold transition-colors">Process</Link></li>
              <li><Link href="/pricing" className="hover:text-pistle-gold transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-pistle-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact 1 */}
          <div>
            <h3 className="text-sm font-bold text-pistle-gold uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                 <Phone className="w-4 h-4 text-pistle-gold mt-1 mr-3 flex-shrink-0" />
                 <div>
                    <span className="block text-white font-medium">Senior Manager</span>
                    <a href="tel:9579026326" className="hover:text-white transition-colors">9579026326</a>
                 </div>
              </li>
              <li className="flex items-start">
                 <Phone className="w-4 h-4 text-pistle-gold mt-1 mr-3 flex-shrink-0" />
                 <div>
                    <span className="block text-white font-medium">Project Manager</span>
                    <a href="tel:7057318654" className="hover:text-white transition-colors">7057318654</a>
                 </div>
              </li>
              <li className="flex items-start">
                 <Mail className="w-4 h-4 text-pistle-gold mt-1 mr-3 flex-shrink-0" />
                 <a href="mailto:pistleai@gmail.com" className="hover:text-white transition-colors">pistleai@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-bold text-pistle-gold uppercase tracking-widest mb-6">Location</h3>
            <div className="flex items-start text-sm text-slate-400">
               <MapPin className="w-4 h-4 text-pistle-gold mt-1 mr-3 flex-shrink-0" />
               <address className="not-italic">
                 1st Floor, Sai Leela Apt,<br/>
                 Bhakti Dham, Santosh Bhuvan,<br/>
                 NSP(E)
               </address>
            </div>
            
            {/* Simple Map Placeholder - Deep Dark Theme */}
            <div className="mt-6 h-32 w-full rounded-lg bg-[#1a1b2e] border border-white/10 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Nalisapora&zoom=14&size=400x200&sensor=false&style=feature:all|element:all|saturation:-100|lightness:-50')] bg-cover bg-center opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"></div>
                <span className="relative z-10 text-xs text-white/50 group-hover:text-white transition-colors">View on Map</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pistle AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-pistle-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-pistle-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
