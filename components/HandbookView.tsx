
import React from 'react';
import { useKnowledge } from '../context/KnowledgeContext';

const HandbookView: React.FC = () => {
  const { state } = useKnowledge();
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center sticky top-0 z-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Employee Handbook</h2>
          <p className="text-gray-500 text-sm mt-1">Grounding data for AI Assistant (Updated {state.lastUpdated.toLocaleDateString()})</p>
        </div>
        <button 
          onClick={() => window.print()}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm"
        >
          <i className="fa-solid fa-file-pdf"></i>
          <span>Download PDF</span>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-8 prose max-w-none">
        <div className="bg-white shadow-inner p-10 border border-gray-200 rounded-sm font-serif text-gray-800 whitespace-pre-wrap leading-relaxed">
          {state.handbook}
        </div>
      </div>
    </div>
  );
};

export default HandbookView;
