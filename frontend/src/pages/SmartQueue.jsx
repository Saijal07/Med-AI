import React, { useState } from 'react';
import { Clock, Users, Calendar, X, Building2, ChevronRight, Stethoscope, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function SmartQueue() {
  const [activeTab, setActiveTab] = useState('active');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const activeQueue = {
    hospital: 'City General Hospital',
    doctor: 'Dr. Sarah Jenkins (Cardiology)',
    tokenNumber: 'A-42',
    currentServing: 'A-38',
    estimatedWaitTime: '25 mins',
    peopleAhead: 4,
    status: 'On Time'
  };

  const hospitals = [
    { id: 1, name: 'City General Hospital', distance: '1.2 miles', specialists: 24, waitTime: '~15 mins' },
    { id: 2, name: 'Metro Health Care', distance: '3.5 miles', specialists: 18, waitTime: '~45 mins' },
    { id: 3, name: 'Sunrise Medical Center', distance: '5.0 miles', specialists: 32, waitTime: '~10 mins' },
  ];

  const handleBook = (hospital) => {
    setSelectedHospital(hospital);
    setShowBookingModal(true);
    setIsBooked(false);
  };

  const confirmBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      setShowBookingModal(false);
      setSelectedHospital(null);
    }, 2000);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Smart Queue System</h2>
          <p className="text-slate-500 mt-1">Track appointments and live waiting token status.</p>
        </div>
        <button onClick={() => handleBook(null)} className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 rounded-xl font-semibold transition-colors shadow-sm flex items-center gap-2 cursor-pointer">
          <Calendar className="w-4 h-4" />
          Book Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Tracking Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            
            <div className="flex justify-between items-start relative z-10 mb-8">
              <div>
                <h3 className="font-bold text-xl">{activeQueue.hospital}</h3>
                <p className="text-blue-100 mt-1 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" /> {activeQueue.doctor}
                </p>
              </div>
              <span className="px-3 py-1 bg-white/20 rounded-lg text-sm font-semibold backdrop-blur-md">
                {activeQueue.status}
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/20">
                <p className="text-blue-100 text-sm mb-1">Your Token</p>
                <p className="text-3xl font-bold">{activeQueue.tokenNumber}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/20">
                <p className="text-blue-100 text-sm mb-1">Current</p>
                <p className="text-3xl font-bold">{activeQueue.currentServing}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/20">
                <p className="text-blue-100 text-sm mb-1">Ahead</p>
                <p className="text-3xl font-bold flex items-center gap-2">
                  <Users className="w-6 h-6" /> {activeQueue.peopleAhead}
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/20 animate-pulse"></div>
                <p className="text-blue-100 text-sm mb-1 relative z-10">Wait Time</p>
                <p className="text-3xl font-bold flex items-center gap-2 relative z-10">
                  <Clock className="w-6 h-6" /> {activeQueue.estimatedWaitTime}
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-4 relative z-10">
              <button onClick={() => alert("Check-in marked. The hospital has been notified.")} className="flex-1 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-sm cursor-pointer">
                I've Reached
              </button>
              <button onClick={() => alert("Appointment cancelled.")} className="px-4 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/20 cursor-pointer">
                <X className="w-5 h-5" /> Cancel
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4">Past Appointments</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <div>
                   <h4 className="font-bold text-slate-800">General Checkup - Dr. Michael Chen</h4>
                   <p className="text-sm text-slate-500">Metro Health Care • Oct 10, 2025</p>
                 </div>
                 <button onClick={() => alert("Downloading Prescription PDF...")} className="text-blue-600 text-sm font-semibold hover:underline cursor-pointer">View Prescription</button>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Hospitals */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <Building2 className="w-5 h-5 text-indigo-500" />
             Book Walk-in Checkup
           </h3>
           <div className="space-y-4">
             {hospitals.map(hospital => (
               <div key={hospital.id} onClick={() => handleBook(hospital)} className="p-4 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50 rounded-xl transition-all cursor-pointer group">
                 <h4 className="font-bold text-slate-800 flex justify-between">
                   {hospital.name}
                   <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                 </h4>
                 <div className="flex items-center justify-between mt-2 text-sm text-slate-500">
                   <span>{hospital.distance} • {hospital.specialists} Specialists</span>
                 </div>
                 <div className="mt-3 flex items-center gap-2">
                   <div className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                     <Clock className="w-3.5 h-3.5" /> Wait: {hospital.waitTime}
                   </div>
                 </div>
               </div>
             ))}
           </div>
           <button onClick={() => alert("Opening Google Maps integration...")} className="w-full mt-4 py-3 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl border border-indigo-100 transition-colors cursor-pointer">
              View Directory Map
           </button>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm shadow-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
            >
               <button onClick={() => setShowBookingModal(false)} className="absolute top-4 right-4 text-slate-400 hover:bg-slate-100 p-2 rounded-full cursor-pointer">
                 <X className="w-5 h-5"/>
               </button>
               
               {isBooked ? (
                 <div className="text-center py-8">
                   <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-800">Appointment Confirmed!</h3>
                   <p className="text-slate-500 mt-2">Your token number is <strong>B-12</strong>. Please arrive 15 minutes early.</p>
                 </div>
               ) : (
                 <div className="py-2">
                   <h3 className="text-xl font-bold text-slate-800 mb-2">Book Appointment</h3>
                   <p className="text-slate-500 mb-6">
                     You are booking a checkup at: <br/> 
                     <strong className="text-indigo-600">{selectedHospital ? selectedHospital.name : 'Selected Hospital'}</strong>
                   </p>
                   
                   <div className="space-y-4 mb-6">
                     <div>
                       <label className="text-sm font-medium text-slate-700 block mb-1">Select Department</label>
                       <select className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 bg-slate-50 cursor-pointer">
                         <option>General Medicine</option>
                         <option>Cardiology</option>
                         <option>Orthopedics</option>
                         <option>Pediatrics</option>
                       </select>
                     </div>
                     <div>
                       <label className="text-sm font-medium text-slate-700 block mb-1">Select Time Slot</label>
                       <select className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 bg-slate-50 cursor-pointer">
                         <option>Today, 02:00 PM</option>
                         <option>Today, 04:30 PM</option>
                         <option>Tomorrow, 10:00 AM</option>
                       </select>
                     </div>
                   </div>
                   
                   <button onClick={confirmBooking} className="w-full bg-indigo-600 text-white rounded-xl py-3 font-bold hover:bg-indigo-700 transition shadow-md cursor-pointer">
                     Confirm Booking
                   </button>
                 </div>
               )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SmartQueue;
