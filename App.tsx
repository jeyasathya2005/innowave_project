
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleNavClick = (section: AppSection) => {
    setActiveSection(section);
    setIsSidebarOpen(false); // Close sidebar on mobile after clicking
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans relative">
      {/* Sidebar - Desktop and Mobile Drawer */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar activeSection={activeSection} setActiveSection={handleNavClick} />
      </div>

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-400 font-medium overflow-hidden whitespace-nowrap">
              <span className="hidden sm:inline">Portal</span>
              <i className="fa-solid fa-chevron-right text-[10px] hidden sm:inline"></i>
              <span className="text-gray-800 truncate max-w-[150px]">{getBreadcrumbs()}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="relative hidden sm:block">
              <i className="fa-solid fa-bell text-gray-400 text-lg hover:text-indigo-600 cursor-pointer transition"></i>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
            <button 
              onClick={() => setActiveSection(AppSection.KNOWLEDGE_BASE)}
              className="flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 md:px-4 py-2 rounded-lg font-bold hover:bg-indigo-100 transition text-sm whitespace-nowrap"
            >
              <i className="fa-solid fa-server text-sm"></i>
              <span className="hidden xs:inline">Management</span>
              <span className="xs:hidden">Admin</span>
            </button>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#FBFBFE]">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </div>

        {/* Global Footer */}
        <footer className="bg-white border-t border-gray-100 px-4 md:px-8 py-3 flex flex-col sm:flex-row items-center justify-between text-[10px] md:text-[11px] text-gray-400 space-y-2 sm:space-y-0">
          <div className="text-center sm:text-left">&copy; 2024 InnoWave Technologies Pvt. Ltd. Internal Use Only.</div>
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
