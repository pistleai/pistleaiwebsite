import React, { useState } from 'react';
import { Calculator, Zap } from './Icons';

const RoiCalculator = () => {
  // Automation Savings State
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(300); // INR
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(5);

  // Calculations
  const weeklySavings = employees * hourlyRate * hoursSavedPerWeek;
  const annualSavings = weeklySavings * 52;
  const efficiencyGain = (hoursSavedPerWeek / 40) * 100; // Assuming 40hr week

  return (
    <section id="calculator" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-accent-600 font-semibold tracking-wide uppercase">Value Estimator</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-900 sm:text-4xl">
            The Value of Automation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            See how much your business could save by automating repetitive tasks through custom software.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200 max-w-4xl mx-auto">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Number of Employees Performing Manual Tasks</label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="w-full mt-2 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="mt-1 text-right font-bold text-primary-800">{employees} Employees</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Average Hourly Wage (₹)</label>
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="mt-1 block w-full border-slate-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Hours Saved Per Employee / Week</label>
                    <p className="text-xs text-slate-500">Automation typically saves 5-10 hours/week per person.</p>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={hoursSavedPerWeek}
                      onChange={(e) => setHoursSavedPerWeek(Number(e.target.value))}
                      className="w-full mt-2 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-500"
                    />
                    <div className="mt-1 text-right font-bold text-accent-600">{hoursSavedPerWeek} Hours</div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 flex flex-col justify-center items-center text-center border border-primary-100">
                  <Zap className="h-12 w-12 text-accent-500 mb-4" />
                  <h3 className="text-lg font-medium text-primary-900">Potential Annual Savings</h3>
                  <div className="text-4xl font-extrabold text-primary-800 my-4">
                    ₹{annualSavings.toLocaleString('en-IN')}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Plus a <span className="font-bold text-green-600">{efficiencyGain.toFixed(1)}%</span> increase in workforce efficiency.
                  </p>
                  <p className="text-xs text-slate-400">
                    *Estimates based on input data. Actual results may vary.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
