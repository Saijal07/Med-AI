import React from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

function DashboardNavbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30 border-b transition-colors duration-300 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className="flex items-center flex-1">
        <div className="max-w-md w-full relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className={`h-5 w-5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
          </div>
          <input
            type="text"
            className={`block w-full pl-10 pr-3 py-2 border rounded-xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
            placeholder="Search medicines, hospitals, AI..."
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors cursor-pointer ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className={`relative p-2 rounded-full transition-colors cursor-pointer ${darkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-100'}`}>
          <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          <Bell className="w-5 h-5" />
        </button>
        
        <div className={`flex items-center gap-3 pl-4 border-l ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
          <button className="flex items-center space-x-2 focus:outline-none cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
              V
            </div>
            <span className={`hidden md:block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Vijay</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardNavbar;
