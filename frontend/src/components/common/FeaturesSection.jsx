import React from 'react';
import { Bot, Pill, Droplet, Clock, Activity, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    title: 'AI Symptom Checker',
    description: 'Get instant, AI-driven analysis of your symptoms before visiting a doctor.',
    bgColor: 'bg-blue-100'
  },
  {
    icon: <Pill className="w-6 h-6 text-emerald-600" />,
    title: 'Medicine Tracker',
    description: 'Track your medications, check nearby stock, and compare pharmacy prices.',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: <Droplet className="w-6 h-6 text-red-500" />,
    title: 'Blood Donation Network',
    description: 'Find compatible blood donors nearby during emergencies instantly.',
    bgColor: 'bg-red-100'
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: 'Smart Queue System',
    description: 'Book appointments, get token numbers, and track your live waiting time.',
    bgColor: 'bg-purple-100'
  },
  {
    icon: <Activity className="w-6 h-6 text-orange-500" />,
    title: 'Health Insights',
    description: 'Visualize your health trends, steps, and heart rate with clean Analytics.',
    bgColor: 'bg-orange-100'
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-600" />,
    title: 'Multi-language Support',
    description: 'Access the entire platform in your preferred local language.',
    bgColor: 'bg-cyan-100'
  }
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Explore Our Core Features</h3>
          <p className="text-lg text-slate-600">
            MedAI brings together everything you need to manage your health intelligently, seamlessly, and securely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bgColor}`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
