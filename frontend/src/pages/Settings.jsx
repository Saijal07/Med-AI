import React, { useState } from 'react';
import { User, Bell, Globe, Moon, Sun, Save, Settings as SettingsIcon } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

function Settings() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  const card = darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200';
  const label = darkMode ? 'text-slate-300' : 'text-slate-700';
  const input = darkMode ? 'bg-slate-700 border-slate-600 text-slate-100 focus:ring-blue-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-500';
  const heading = darkMode ? 'text-slate-100' : 'text-slate-800';
  const subtext = darkMode ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${heading}`}>Settings</h2>
        <p className={`mt-1 ${subtext}`}>Manage your account preferences and settings.</p>
      </div>

      <div className={`rounded-2xl border shadow-sm overflow-hidden ${card}`}>
        {/* Profile Section */}
        <div className={`p-6 border-b ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
           <h3 className={`font-bold text-lg mb-6 flex items-center gap-2 ${heading}`}>
             <User className="w-5 h-5 text-blue-500" />
             Profile Information
           </h3>
           <div className="flex flex-col md:flex-row gap-6 items-start">
             <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold border-4 border-white shadow-lg flex-shrink-0">
               V
             </div>
             <div className="flex-1 space-y-4 w-full">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className={`block text-sm font-medium mb-1 ${label}`}>Full Name</label>
                   <input type="text" defaultValue="Vijay" className={`w-full px-4 py-2 border rounded-xl outline-none transition-all ${input}`} />
                 </div>
                 <div>
                   <label className={`block text-sm font-medium mb-1 ${label}`}>Email</label>
                   <input type="email" defaultValue="vijay@example.com" className={`w-full px-4 py-2 border rounded-xl outline-none cursor-not-allowed opacity-60 ${input}`} disabled />
                 </div>
                 <div>
                   <label className={`block text-sm font-medium mb-1 ${label}`}>Phone</label>
                   <input type="tel" defaultValue="+91 98765 43210" className={`w-full px-4 py-2 border rounded-xl outline-none transition-all ${input}`} />
                 </div>
                 <div>
                   <label className={`block text-sm font-medium mb-1 ${label}`}>Blood Group</label>
                   <select className={`w-full px-4 py-2 border rounded-xl outline-none transition-all cursor-pointer ${input}`}>
                     <option>A+</option><option>A-</option><option>B+</option><option>O+</option>
                   </select>
                 </div>
               </div>
               <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer">
                 <Save className="w-4 h-4" /> Save Changes
               </button>
             </div>
           </div>
        </div>

        {/* Preferences */}
        <div className="p-6">
           <h3 className={`font-bold text-lg mb-6 flex items-center gap-2 ${heading}`}>
             <SettingsIcon className="w-5 h-5 text-emerald-500" />
             Preferences
           </h3>
           <div className="space-y-6 max-w-2xl">
              {/* Language */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Globe className="w-5 h-5" /></div>
                  <div>
                    <h4 className={`font-bold text-sm ${heading}`}>Language</h4>
                    <p className={`text-xs ${subtext}`}>Select your preferred app language</p>
                  </div>
                </div>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className={`px-3 py-1.5 border rounded-lg outline-none text-sm font-semibold cursor-pointer ${input}`}>
                  <option>English</option><option>Hindi</option><option>Spanish</option>
                </select>
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Bell className="w-5 h-5" /></div>
                  <div>
                    <h4 className={`font-bold text-sm ${heading}`}>Push Notifications</h4>
                    <p className={`text-xs ${subtext}`}>Receive alerts for appointments and medicines</p>
                  </div>
                </div>
                <button onClick={() => setNotifications(!notifications)} className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${notifications ? 'bg-blue-600' : darkMode ? 'bg-slate-600' : 'bg-slate-200'}`}>
                  <span className={`block w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${notifications ? 'left-7' : 'left-1'}`}></span>
                </button>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${heading}`}>Dark Mode</h4>
                    <p className={`text-xs ${subtext}`}>Toggle dark appearance across the app</p>
                  </div>
                </div>
                <button onClick={toggleDarkMode} className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${darkMode ? 'bg-blue-600' : 'bg-slate-200'}`}>
                  <span className={`block w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${darkMode ? 'left-7' : 'left-1'}`}></span>
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
