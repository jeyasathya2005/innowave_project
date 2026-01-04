
import React, { useState } from 'react';
import { AppSection } from './types';
import Sidebar from './components/Sidebar';
import HandbookView from './components/HandbookView';
import DirectoryView from './components/DirectoryView';
import ChatInterface from './components/ChatInterface';
import DashboardView from './components/DashboardView';
import SolutionBlueprint from './components/SolutionBlueprint';
import KnowledgeBaseView from './components/KnowledgeBaseView';
import { KnowledgeProvider } from './context/KnowledgeContext';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.DASHBOARD);

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.DASHBOARD:
        return <DashboardView onNavigate={setActiveSection} />;
      case AppSection.HANDBOOK:
        return <HandbookView />;
      case AppSection.DIRECTORY:
        return <DirectoryView />;
      case AppSection.CHAT:
        return <ChatInterface />;
      case AppSection.ABOUT:
        return <SolutionBlueprint />;
      case AppSection.KNOWLEDGE_BASE:
        return <KnowledgeBaseView />;
      default:
        return <DashboardView onNavigate={setActiveSection} />;
    }
  };

  const getBreadcrumbs = () => {
    switch (activeSection) {
      case AppSection.DASHBOARD: return 'Home';
      case AppSection.HANDBOOK: return 'Employee Handbook';
      case AppSection.DIRECTORY: return 'Employee Directory';
      case AppSection.CHAT: return 'AI Assistant';
      case AppSection.ABOUT: return 'Solution Blueprint';
      case AppSection.KNOWLEDGE_BASE: return 'Knowledge Base';
      default: return 'Home';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1 flex flex-col h-full">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-400 font-medium">
            <span>Portal</span>
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
            <span className="text-gray-800">{getBreadcrumbs()}</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <i className="fa-solid fa-bell text-gray-400 text-lg hover:text-indigo-600 cursor-pointer transition"></i>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <button 
              onClick={() => setActiveSection(AppSection.KNOWLEDGE_BASE)}
              className="flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-bold hover:bg-indigo-100 transition"
            >
              <i className="fa-solid fa-server text-sm"></i>
              <span>Backend Management</span>
            </button>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FBFBFE]">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </div>

        {/* Global Footer (Thin) */}
        <footer className="bg-white border-t border-gray-100 px-8 py-3 flex items-center justify-between text-[11px] text-gray-400">
          <div>&copy; 2024 InnoWave Technologies Pvt. Ltd. Internal Use Only.</div>
          <div className="flex space-x-4">
            <span className="flex items-center"><i className="fa-solid fa-database mr-1"></i> RAG Active</span>
            <span className="flex items-center"><i className="fa-solid fa-lock mr-1"></i> Enterprise Grade</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

const App: React.FC = () => (
  <KnowledgeProvider>
    <AppContent />
  </KnowledgeProvider>
);

export default App;
