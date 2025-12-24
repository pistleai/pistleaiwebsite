'use client';

import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Solutions from '../components/Solutions';
import Process from '../components/Process';
import ContactModal from '../components/ContactModal';
import { useState } from 'react';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pistle-navy">
      <main>
        <Hero onCtaClick={() => setIsContactOpen(true)} />
        <TrustBar />
        <Solutions />
        <Process />
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
