
import React from 'react';
import { AppSection } from '../types';

interface SidebarProps {
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: AppSection.DASHBOARD, label: 'Dashboard', icon: 'fa-chart-line' },
    { id: AppSection.HANDBOOK, label: 'Handbook', icon: 'fa-book' },
    { id: AppSection.DIRECTORY, label: 'Directory', icon: 'fa-address-book' },
    { id: AppSection.CHAT, label: 'AI Assistant', icon: 'fa-robot' },
    { id: AppSection.KNOWLEDGE_BASE, label: 'Knowledge Base', icon: 'fa-database' },
    { id: AppSection.ABOUT, label: 'Solution Blueprint', icon: 'fa-diagram-project' },
  ];

  return (
    <div className="w-64 bg-indigo-900 text-white h-full flex flex-col shadow-xl">
      <div className="p-6 border-b border-indigo-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-lg">
            <i className="fa-solid fa-wave-square text-indigo-900 text-xl"></i>
          </div>
          <span className="font-bold text-lg tracking-tight">InnoWave</span>
        </div>
        {/* Mobile close indicator is implicitly the backdrop, but we could add a button here if needed */}
      </div>
      <nav className="flex-1 mt-6 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-indigo-700 text-white shadow-lg'
                : 'text-indigo-300 hover:bg-indigo-800 hover:text-white'
            }`}
          >
            <i className={`fa-solid ${item.icon} w-6`}></i>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-6 border-t border-indigo-800">
        <div className="flex items-center space-x-3 text-sm text-indigo-300">
          <div className="bg-indigo-500 w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0">
            <i className="fa-solid fa-shield"></i>
          </div>
          <div className="truncate">
            <p className="text-white font-medium truncate">Admin Access</p>
            <p className="text-xs truncate">Full Permissions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
