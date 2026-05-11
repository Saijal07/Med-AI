import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Clock, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              AI-Powered Healthcare
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Healthcare Made <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Simple & Smart</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your intelligent health companion. Get instant symptom analysis, track medications, connect with blood donors, and manage hospital visits all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 group">
                Start Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#features" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium text-lg hover:bg-slate-50 hover:border-slate-300 transition-colors">
                Learn More
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>24/7 Available</span>
              </div>
            </div>
          </motion.div>
          
          {/* Illustration/Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            {/* Main glassmorphism card looking like an interface */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              
              <div className="relative bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">MedAI Assistant</h3>
                      <p className="text-xs text-slate-500">Online</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0"></div>
                    <div className="bg-slate-100 text-slate-700 p-3 rounded-2xl rounded-tl-none text-sm w-5/6">
                      I've been having a mild headache and fever since yesterday.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                      <HeartPulse className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm w-5/6 shadow-md">
                      Based on your symptoms, it might be a viral infection. Have you taken your temperature? I can also help you find a doctor nearby.
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 border-t border-slate-100 mt-4">
                  <div className="h-10 bg-white border border-slate-200 rounded-xl px-4 flex items-center text-sm text-slate-400">
                    Type your symptoms...
                  </div>
                </div>
              </div>
              
              {/* Floating feature pill 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-8 top-12 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-sm font-semibold text-slate-700">Health Normal</div>
              </motion.div>
              
              {/* Floating feature pill 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-sm font-semibold text-slate-700">Queue: 15 mins</div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
