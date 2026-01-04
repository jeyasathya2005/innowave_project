
import React from 'react';
import { AppSection } from '../types';

interface DashboardViewProps {
  onNavigate: (section: AppSection) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="relative bg-indigo-700 rounded-2xl md:rounded-3xl p-6 md:p-10 overflow-hidden text-white shadow-2xl">
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Welcome to InnoWave!</h1>
          <p className="text-indigo-100 text-base md:text-lg leading-relaxed">
            We're thrilled to have you join our team of innovators. This portal is your primary hub for everything you need to hit the ground running.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start">
            <button 
              onClick={() => onNavigate(AppSection.CHAT)}
              className="w-full sm:w-auto bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition shadow-lg"
            >
              Start Onboarding Chat
            </button>
            <button 
              onClick={() => onNavigate(AppSection.HANDBOOK)}
              className="w-full sm:w-auto bg-indigo-600/50 backdrop-blur-sm border border-indigo-400/50 px-6 py-3 rounded-xl font-bold hover:bg-indigo-600 transition"
            >
              Browse Handbook
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://picsum.photos/seed/innovate/800/600" 
            className="object-cover h-full w-full opacity-40 mix-blend-overlay" 
            alt="Office vibe"
          />
        </div>
      </header>

      {/* AI Technical Insight Section */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 md:p-6 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-600 text-white p-3 rounded-lg shrink-0">
            <i className="fa-solid fa-microchip"></i>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-indigo-900 text-sm md:text-base">AI Architecture Diagnostics</h4>
            <p className="text-indigo-700 text-xs md:text-sm">System is utilizing RAG with Gemini 3 Flash and In-Context Learning.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-white border border-indigo-200 rounded-full text-[10px] font-semibold text-indigo-600">Gemini-3-Flash</span>
          <span className="px-3 py-1 bg-white border border-indigo-200 rounded-full text-[10px] font-semibold text-indigo-600">RAG (Context-Injected)</span>
          <span className="px-3 py-1 bg-green-100 border border-green-200 rounded-full text-[10px] font-semibold text-green-700">Optimized</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6">
            <i className="fa-solid fa-calendar-check text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">My First Week</h3>
          <p className="text-gray-500 text-sm mb-6">Complete your mandatory orientation tasks and asset setups.</p>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-green-600 font-medium">
              <i className="fa-solid fa-circle-check mr-2"></i>
              System Credentials
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <i className="fa-regular fa-circle mr-2"></i>
              Security Briefing
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <i className="fa-regular fa-circle mr-2"></i>
              Manager Intro
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
            <i className="fa-solid fa-people-group text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Team Spotlight</h3>
          <p className="text-gray-500 text-sm mb-6">Meet the key people in your department and beyond.</p>
          <div className="flex -space-x-3 overflow-hidden">
            {[1,2,3,4,5].map(i => (
              <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`https://picsum.photos/seed/person${i}/40/40`} alt="Team member" />
            ))}
            <button 
              onClick={() => onNavigate(AppSection.DIRECTORY)}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 ring-2 ring-white text-gray-400 text-xs hover:bg-gray-200 transition"
            >
              +300
            </button>
          </div>
          <button 
            onClick={() => onNavigate(AppSection.DIRECTORY)}
            className="mt-6 text-indigo-600 text-sm font-bold hover:underline"
          >
            View Directory →
          </button>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition md:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
            <i className="fa-solid fa-lightbulb text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Quick Tip</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            "Don't forget to submit your Casual Leave at least 48 hours in advance through the WaveHR portal. Check the Leave section in the handbook for more details."
          </p>
          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">Updated: Today, 9:00 AM</span>
            <i className="fa-solid fa-chevron-right text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
