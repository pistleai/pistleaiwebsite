import React from 'react';
import { CheckCircle2 } from './Icons';

const maintenanceTiers = [
  {
    name: 'Basic Maintenance',
    price: '₹15k',
    period: '/ month',
    features: [
      'Website Hosting',
      'Monthly Content Updates',
      'Security Patches',
      'Email Support (24h turnaround)'
    ]
  },
  {
    name: 'Business Growth',
    price: '₹35k',
    period: '/ month',
    recommended: true,
    features: [
      'Everything in Basic',
      'Priority Phone Support',
      'Quarterly Strategy Consulting',
      'Performance Optimization',
      'Small Feature Additions'
    ]
  },
  {
    name: 'Enterprise Partner',
    price: 'Custom',
    period: '',
    features: [
      'Dedicated Project Manager',
      'Custom Software Development',
      '24/7 Monitoring',
      'Automated Backups',
      'On-site Consultation'
    ]
  }
];

const Pricing = ({ onPlanSelect }) => {
  return (
    <section id="pricing" className="py-16 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-accent-500 font-semibold tracking-wide uppercase">Maintenance & Support</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Long-term Partnership
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 lg:mx-auto">
            We don't just build and leave. We ensure your technology continues to drive value for years to come.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {maintenanceTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative rounded-2xl p-8 bg-primary-800 border ${
                tier.recommended ? 'border-accent-500 ring-2 ring-accent-500' : 'border-primary-700'
              } flex flex-col`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-accent-500 text-primary-900 text-xs font-bold rounded-full uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline text-white">
                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="ml-1 text-xl font-medium text-slate-400">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-accent-500" />
                    <span className="ml-3 text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={onPlanSelect}
                className={`mt-8 w-full block py-3 px-6 border border-transparent rounded-md text-center font-medium transition-colors ${
                  tier.recommended ? 'bg-accent-500 hover:bg-accent-600 text-primary-900' : 'bg-primary-700 hover:bg-primary-600 text-white'
                }`}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
