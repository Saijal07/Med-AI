import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import DashboardNavbar from '../components/layout/DashboardNavbar';
import DashboardHome from './DashboardHome';
import AIAssistant from './AIAssistant';
import Medicines from './Medicines';
import BloodNetwork from './BloodNetwork';
import SmartQueue from './SmartQueue';
import HealthAnalytics from './HealthAnalytics';
import Settings from './Settings';
import { useDarkMode } from '../context/DarkModeContext';

function Dashboard() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardNavbar />
        <main className={`flex-1 overflow-x-hidden overflow-y-auto p-6 transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/blood-network" element={<BloodNetwork />} />
            <Route path="/appointments" element={<SmartQueue />} />
            <Route path="/analytics" element={<HealthAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
