import React from 'react';
import { X, CheckCircle2 } from './Icons';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-primary-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="absolute top-4 right-4 cursor-pointer text-slate-400 hover:text-slate-600" onClick={onClose}>
               <X className="h-6 w-6" />
            </div>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-primary-900" id="modal-title">
                  Start Your Business Growth
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-slate-500">
                    Partner with PISTLE AI. Fill out the form below for a free consultation.
                  </p>
                  
                  <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); onClose(); }}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Your Name</label>
                        <input type="text" required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Company Name</label>
                        <input type="text" required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                        <input type="tel" required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm" placeholder="+91" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Service Needed</label>
                        <select className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm">
                            <option>Website Development</option>
                            <option>Software Development</option>
                            <option>Business Consulting</option>
                            <option>Automation Solutions</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-900 bg-accent-500 hover:bg-accent-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors">
                        Request Consultation
                    </button>
                  </form>
                  
                  <div className="mt-4 bg-primary-50 p-3 rounded-md flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-xs text-primary-800">Your information is secure. We'll reply within 24 hours.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
