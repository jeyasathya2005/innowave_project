
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

  return (
    <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Knowledge Management</h2>
          <p className="text-gray-500 text-sm">Control the data that powers your RAG Onboarding Assistant.</p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
          >
            Save & Deploy Changes
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden">
        {/* Sub-nav */}
        <div className="w-48 border-r border-gray-100 bg-gray-50/50 p-4 space-y-2">
          <button 
            onClick={() => { setActiveTab('handbook'); setEditValue(state.handbook); }}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'handbook' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Handbook (Text)
          </button>
          <button 
            onClick={() => { setActiveTab('directory'); setEditValue(state.directoryCsv); }}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'directory' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Directory (CSV)
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'logs' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            System Logs
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col">
          {activeTab === 'logs' ? (
            <div className="bg-gray-900 rounded-xl p-4 font-mono text-xs text-green-400 overflow-y-auto flex-1 h-full">
              {logs.map((log, i) => <div key={i} className="mb-1">{log}</div>)}
            </div>
          ) : (
            <textarea 
              className="flex-1 w-full bg-gray-50 border border-gray-200 rounded-xl p-6 font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
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
