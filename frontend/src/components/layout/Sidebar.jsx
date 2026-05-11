import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Pill, Droplet, Calendar, Settings, HeartPulse } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, exact: true },
  { name: 'AI Assistant', path: '/dashboard/ai-assistant', icon: <MessageSquare className="w-5 h-5" /> },
  { name: 'Medicines', path: '/dashboard/medicines', icon: <Pill className="w-5 h-5" /> },
  { name: 'Blood Network', path: '/dashboard/blood-network', icon: <Droplet className="w-5 h-5" /> },
  { name: 'Appointments', path: '/dashboard/appointments', icon: <Calendar className="w-5 h-5" /> },
  { name: 'Settings', path: '/dashboard/settings', icon: <Settings className="w-5 h-5" /> },
];

function Sidebar() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`w-64 h-screen hidden md:flex flex-col sticky top-0 border-r transition-colors duration-300 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <HeartPulse className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">MedAI</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.exact}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : darkMode
                    ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className={`p-4 m-4 rounded-xl border ${darkMode ? 'bg-emerald-900/20 border-emerald-800' : 'bg-emerald-50 border-emerald-100'}`}>
        <h4 className={`font-semibold mb-1 text-sm ${darkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>Emergency Info</h4>
        <p className={`text-xs mb-3 ${darkMode ? 'text-emerald-500' : 'text-emerald-600'}`}>Keep your blood group and allergies updated.</p>
        <button className="w-full py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition cursor-pointer">Update Profile</button>
      </div>
    </div>
  );
}

export default Sidebar;
