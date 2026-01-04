
import React, { useState } from 'react';
import { useKnowledge } from '../context/KnowledgeContext';

const KnowledgeBaseView: React.FC = () => {
  const { state, updateHandbook, updateDirectory, logs } = useKnowledge();
  const [activeTab, setActiveTab] = useState<'handbook' | 'directory' | 'logs'>('handbook');
  const [editValue, setEditValue] = useState(state.handbook);

  const handleSave = () => {
    if (activeTab === 'handbook') updateHandbook(editValue);
    else if (activeTab === 'directory') updateDirectory(editValue);
    alert("Knowledge Base Updated & Re-indexed!");
  };

  const changeTab = (tab: 'handbook' | 'directory' | 'logs') => {
    setActiveTab(tab);
    if (tab === 'handbook') setEditValue(state.handbook);
    else if (tab === 'directory') setEditValue(state.directoryCsv);
  };

  return (
    <div className="flex flex-col h-full space-y-4 md:space-y-6 animate-in fade-in duration-500 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Knowledge Management</h2>
          <p className="text-gray-500 text-xs md:text-sm">Control the data that powers your RAG Onboarding Assistant.</p>
        </div>
        <button 
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 text-sm"
        >
          Save & Deploy Changes
        </button>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
        {/* Navigation Tabs - Mobile: Horizontal Scroll, Desktop: Sidebar */}
        <div className="lg:w-48 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/50 p-2 lg:p-4 flex lg:flex-col overflow-x-auto lg:overflow-y-auto scrollbar-hide shrink-0">
          <button 
            onClick={() => changeTab('handbook')}
            className={`whitespace-nowrap flex-1 lg:flex-none text-center lg:text-left px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'handbook' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Handbook (Text)
          </button>
          <button 
            onClick={() => changeTab('directory')}
            className={`whitespace-nowrap flex-1 lg:flex-none text-center lg:text-left px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'directory' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Directory (CSV)
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`whitespace-nowrap flex-1 lg:flex-none text-center lg:text-left px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'logs' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            System Logs
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-3 md:p-6 overflow-hidden flex flex-col">
          {activeTab === 'logs' ? (
            <div className="bg-gray-900 rounded-xl p-4 font-mono text-[10px] md:text-xs text-green-400 overflow-y-auto flex-1 h-full">
              {logs.map((log, i) => <div key={i} className="mb-1">{log}</div>)}
            </div>
          ) : (
            <textarea 
              className="flex-1 w-full bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 font-mono text-xs md:text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              spellCheck={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseView;
