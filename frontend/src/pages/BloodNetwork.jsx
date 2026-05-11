import React, { useState } from 'react';
import { Search, MapPin, Droplet, User, Phone, AlertCircle, Clock, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function BloodNetwork() {
  const [activeTab, setActiveTab] = useState('find');
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const donors = [
    { id: 1, name: 'Alex Johnson', group: 'O+', location: 'Downtown Area', distance: '0.8 miles', lastDonated: '3 months ago', available: true },
    { id: 2, name: 'Sarah Williams', group: 'A-', location: 'Westside', distance: '2.4 miles', lastDonated: '5 months ago', available: true },
    { id: 3, name: 'Michael Chen', group: 'B+', location: 'North Hills', distance: '4.1 miles', lastDonated: '2 months ago', available: false },
    { id: 4, name: 'Emma Davis', group: 'O-', location: 'City Center', distance: '1.5 miles', lastDonated: '8 months ago', available: true },
  ];

  const handleEmergency = () => {
    setEmergencyActive(true);
    setTimeout(() => {
      setEmergencyActive(false);
      setSuccessMsg("Emergency broadcast sent to 12 nearby donors!");
      setTimeout(() => setSuccessMsg(""), 4000);
    }, 1500);
  };

  const handleContact = (donorName) => {
    setSuccessMsg(`Contact request sent to ${donorName}.`);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    setShowRegisterModal(false);
    setSuccessMsg("Successfully registered as a donor!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Blood Donation Network</h2>
          <p className="text-slate-500 mt-1">Find donors or register to save lives.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleEmergency} className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 hover:bg-red-700 rounded-xl font-semibold transition-all shadow-md shadow-red-600/20 cursor-pointer">
            {emergencyActive ? <Clock className="w-4 h-4 animate-spin" /> : <AlertCircle className="w-4 h-4" />}
            {emergencyActive ? 'Broadcasting...' : 'Emergency Request'}
          </button>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {successMsg && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-slate-800 text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 border border-slate-700"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">{successMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Search/Filter Box */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex flex-col md:flex-row gap-4">
               <div className="flex-1 relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                 <input type="text" placeholder="Search by location..." className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all" />
               </div>
               <div className="flex gap-4">
                 <select className="px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-red-500 text-slate-700 cursor-pointer">
                   <option>Blood Group</option>
                   <option>A+</option><option>A-</option>
                   <option>B+</option><option>B-</option>
                   <option>O+</option><option>O-</option>
                   <option>AB+</option><option>AB-</option>
                 </select>
                 <button className="bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition cursor-pointer">
                   Filter
                 </button>
               </div>
             </div>
          </div>

          {/* Donors List */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-lg">Available Donors Nearby</h3>
            {donors.map(donor => (
              <div key={donor.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xl border-2 border-red-100 shrink-0">
                      {donor.group}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{donor.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {donor.distance}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Donated: {donor.lastDonated}</span>
                      </div>
                    </div>
                 </div>
                 <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-0 border-slate-100">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${donor.available ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {donor.available ? 'Available' : 'Unavailable'}
                    </span>
                    <button 
                      onClick={() => handleContact(donor.name)}
                      disabled={!donor.available}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition ${donor.available ? 'bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer' : 'bg-slate-50 text-slate-400 cursor-not-allowed'}`}
                    >
                      <Phone className="w-4 h-4" /> Contact
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-lg border border-slate-700">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-red-400" />
              Become a Donor
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your donation can save up to 3 lives. Join our network of heroes today and get notified when someone nearby needs blood.
            </p>
            <button onClick={() => setShowRegisterModal(true)} className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-red-600 transition shadow-md cursor-pointer flex items-center justify-center gap-2">
              Register Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Eligibility
            </h3>
            <ul className="space-y-2 text-sm text-red-700/80">
              <li className="flex gap-2"><span>•</span> Age between 18-65 years</li>
              <li className="flex gap-2"><span>•</span> Weight above 50 kg</li>
              <li className="flex gap-2"><span>•</span> Normal hemoglobin levels</li>
              <li className="flex gap-2"><span>•</span> No recent tattoos or major surgery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <AnimatePresence>
        {showRegisterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
            >
               <button onClick={() => setShowRegisterModal(false)} className="absolute top-4 right-4 text-slate-400 hover:bg-slate-100 p-2 rounded-full cursor-pointer">
                 <X className="w-5 h-5" />
               </button>
               <h3 className="text-xl font-bold text-slate-800 mb-1">Donor Registration</h3>
               <p className="text-slate-500 text-sm mb-6">Join the MedAI blood donation network.</p>
               
               <form onSubmit={submitRegistration} className="space-y-4">
                 <div>
                   <label className="text-sm font-medium text-slate-700 block mb-1">Blood Group</label>
                   <select required className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-red-500 outline-none text-slate-700 bg-slate-50 cursor-pointer">
                     <option value="">Select Group...</option>
                     <option>A+</option><option>O+</option><option>B+</option><option>AB+</option>
                   </select>
                 </div>
                 <div>
                   <label className="text-sm font-medium text-slate-700 block mb-1">Last Donated Date</label>
                   <input type="date" className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-red-500 outline-none text-slate-700 bg-slate-50 cursor-pointer" />
                 </div>
                 <button type="submit" className="w-full bg-red-600 text-white rounded-xl py-3 font-bold hover:bg-red-700 transition cursor-pointer mt-2">
                   Complete Registration
                 </button>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BloodNetwork;
