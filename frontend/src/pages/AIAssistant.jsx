import React, { useState } from 'react';
import { Send, Bot, User, Mic, HeartPulse, Sparkles } from 'lucide-react';

function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello Vijay, I am your MedAI Assistant. How can I help you today? You can ask me to check your symptoms, find a doctor, or get medicine info.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMessages, { role: 'assistant', text: 'I am a demo AI. In the final version, this will be connected to our backend AI endpoint via WebSockets/REST.' }]);
    }, 1000);
  };

  const prompts = [
    "I have a mild fever and headache.",
    "Find a cardiologist near me.",
    "What are the side effects of Paracetamol?",
    "Remind me for my next pill."
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-xl">
            <Bot className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-bold text-slate-800">MedAI Health Assistant</h2>
            <p className="text-xs text-emerald-600 font-medium">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <HeartPulse className="w-4 h-4" />}
            </div>
            <div className={`p-4 rounded-2xl max-w-[80%] text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-600/20' 
                : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Prompts */}
      <div className="px-6 pt-2 pb-2 bg-white hidden md:flex items-center gap-2 overflow-x-auto border-t border-slate-100">
        {prompts.map((prompt, idx) => (
          <button 
            key={idx} 
            onClick={() => setInput(prompt)}
            className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
          >
            <Sparkles className="w-3 h-3 text-blue-500" />
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-xl hover:bg-white inset-0">
            <Mic className="w-5 h-5" />
          </button>
          <textarea 
            rows="1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            className="w-full bg-transparent border-none focus:outline-none resize-none px-2 py-2 text-sm text-slate-700 placeholder-slate-400"
            placeholder="Describe your symptoms or ask a health question..."
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;
