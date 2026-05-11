import React from 'react';
import { Activity, Heart, Flame, ChevronDown } from 'lucide-react';

function HealthAnalytics() {
  const weeklySteps = [
    { day: 'Mon', value: 6500 },
    { day: 'Tue', value: 8200 },
    { day: 'Wed', value: 10500 },
    { day: 'Thu', value: 7800 },
    { day: 'Fri', value: 9100 },
    { day: 'Sat', value: 12400 },
    { day: 'Sun', value: 8432 }
  ];
  
  const maxSteps = Math.max(...weeklySteps.map(s => s.value));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Health Analytics</h2>
          <p className="text-slate-500 mt-1">Track your vital signs and daily physical activity.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 hover:bg-slate-50 rounded-xl font-semibold transition-colors shadow-sm">
          This Week <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Weekly Steps
            </h3>
            <span className="text-sm font-bold text-slate-500">Avg: 8,990</span>
          </div>
          
          <div className="flex justify-between items-end h-64 gap-2">
            {weeklySteps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 gap-2">
                <div className="w-full relative flex items-end h-48 bg-slate-50 rounded-xl overflow-hidden group">
                  <div 
                    className="w-full bg-gradient-to-t from-orange-400 to-orange-300 rounded-xl group-hover:from-orange-500 group-hover:to-orange-400 transition-all cursor-pointer relative"
                    style={{ height: `${(item.value / maxSteps) * 100}%` }}
                  >
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                       {item.value}
                     </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Heart Rate Trend */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              Resting Heart Rate
            </h3>
            <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">-2 bpm</span>
          </div>
          
          <div className="h-64 flex flex-col justify-end relative">
            <svg viewBox="0 0 100 40" className="w-full h-full preserve-aspect-ratio-none overflow-visible">
              <path d="M0 30 Q 15 25, 30 20 T 60 15 Q 80 18, 100 10" fill="none" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="flex justify-between items-center mt-4">
              {['Mon', 'Wed', 'Fri', 'Sun'].map(day => (
                <span key={day} className="text-xs font-semibold text-slate-500">{day}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Blood Pressure */}
        <div className="lg:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 border border-slate-700">
           <div className="flex-1">
             <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
               <Activity className="w-5 h-5 text-blue-400" />
               Latest Vitals
             </h3>
             <p className="text-slate-400 text-sm">Your blood pressure and oxygen levels are in the healthy range.</p>
           </div>
           
           <div className="flex gap-6 sm:gap-10 w-full md:w-auto">
             <div>
               <p className="text-slate-400 text-sm mb-1">Blood Pressure</p>
               <p className="text-3xl font-bold text-white">120/80 <span className="text-sm font-normal text-slate-500">mmHg</span></p>
             </div>
             <div>
               <p className="text-slate-400 text-sm mb-1">Blood Oxygen</p>
               <p className="text-3xl font-bold text-blue-400">98% <span className="text-sm font-normal tracking-wide text-blue-800">SpO2</span></p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default HealthAnalytics;
