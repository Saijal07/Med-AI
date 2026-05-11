import React from 'react';
import { Activity, Heart, Flame, Calendar, Pill, Phone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

function DashboardHome() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const card = darkMode
    ? 'bg-slate-800 border-slate-700 text-slate-100'
    : 'bg-white border-slate-200 text-slate-800';
  const sub = darkMode ? 'text-slate-400' : 'text-slate-500';
  const row = darkMode
    ? 'bg-slate-700/50 border-slate-600 hover:bg-slate-700 hover:border-blue-700'
    : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-blue-100';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Welcome back, Vijay!</h2>
          <p className={`mt-1 ${sub}`}>Here's your health overview for today.</p>
        </div>
        <button onClick={() => navigate('/dashboard/appointments')} className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors cursor-pointer">
          <Phone className="w-4 h-4" />
          Emergency
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow ${card}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium mb-1 ${sub}`}>Heart Rate</p>
              <h3 className="text-3xl font-bold">72 <span className={`text-lg font-normal ${sub}`}>bpm</span></h3>
            </div>
            <div className="p-3 bg-red-50 rounded-xl text-red-500">
              <Heart className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded mr-2">Normal</span>
            <span className={sub}>Resting average</span>
          </div>
        </div>

        <div className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow ${card}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium mb-1 ${sub}`}>Blood Pressure</p>
              <h3 className="text-3xl font-bold">120/80</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded mr-2">Optimal</span>
            <span className={sub}>Last checked 2d ago</span>
          </div>
        </div>

        <div className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow ${card}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium mb-1 ${sub}`}>Daily Steps</p>
              <h3 className="text-3xl font-bold">8,432</h3>
            </div>
            <div className="p-3 bg-orange-50 rounded-xl text-orange-500">
              <Flame className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className={`w-full rounded-full h-2 mr-3 ${darkMode ? 'bg-slate-600' : 'bg-slate-100'}`}>
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <span className={`font-medium ${sub}`}>75%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointments Widget */}
        <div className={`rounded-2xl border shadow-sm p-6 ${card}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Upcoming Appointments</h3>
            <button onClick={() => navigate('/dashboard/appointments')} className="text-blue-500 text-sm font-medium hover:underline flex items-center cursor-pointer">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            <div className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${row}`}>
               <div className="bg-blue-100 text-blue-600 p-3 rounded-xl hidden sm:block">
                 <Calendar className="w-6 h-6" />
               </div>
               <div className="flex-1">
                 <h4 className="font-bold">Dr. Sarah Jenkins</h4>
                 <p className={`text-sm ${sub}`}>Cardiologist • City General Hospital</p>
               </div>
               <div className="text-right">
                 <p className="font-bold">Today</p>
                 <p className="text-sm font-semibold text-blue-500">02:30 PM</p>
               </div>
            </div>
            <div className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${row}`}>
               <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl hidden sm:block">
                 <Calendar className="w-6 h-6" />
               </div>
               <div className="flex-1">
                 <h4 className="font-bold">General Checkup</h4>
                 <p className={`text-sm ${sub}`}>Metro Health Clinic</p>
               </div>
               <div className="text-right">
                 <p className="font-bold">Oct 24</p>
                 <p className="text-sm font-semibold text-indigo-500">10:00 AM</p>
               </div>
            </div>
          </div>
        </div>

        {/* Medicines Widget */}
        <div className={`rounded-2xl border shadow-sm p-6 ${card}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Medicine Availability</h3>
            <button onClick={() => navigate('/dashboard/medicines')} className="text-blue-500 text-sm font-medium hover:underline flex items-center cursor-pointer">
              Manage <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            <div className={`flex items-center justify-between p-4 border rounded-xl ${darkMode ? 'border-slate-600' : 'border-slate-100'}`}>
               <div className="flex items-center gap-3">
                 <div className="bg-emerald-50 p-2 rounded-lg text-emerald-500"><Pill className="w-5 h-5"/></div>
                 <div>
                   <h4 className="font-bold">Amoxicillin 500mg</h4>
                   <p className={`text-xs ${sub}`}>2 Pharmacies nearby</p>
                 </div>
               </div>
               <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-full">In Stock</span>
            </div>
            <div className={`flex items-center justify-between p-4 border rounded-xl ${darkMode ? 'border-slate-600' : 'border-slate-100'}`}>
               <div className="flex items-center gap-3">
                 <div className="bg-orange-50 p-2 rounded-lg text-orange-500"><Pill className="w-5 h-5"/></div>
                 <div>
                   <h4 className="font-bold">Lisinopril 10mg</h4>
                   <p className={`text-xs ${sub}`}>Checking nearest pharmacies...</p>
                 </div>
               </div>
               <span className="px-3 py-1 bg-orange-100 text-orange-700 font-bold text-xs rounded-full">Low Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
