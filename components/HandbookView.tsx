
import React from 'react';
import { useKnowledge } from '../context/KnowledgeContext';

const HandbookView: React.FC = () => {
  const { state } = useKnowledge();
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="px-4 md:px-8 py-4 md:py-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 sm:items-center justify-between sticky top-0 z-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Employee Handbook</h2>
          <p className="text-gray-500 text-[10px] md:text-sm mt-1">Grounding data for AI (Updated {state.lastUpdated.toLocaleDateString()})</p>
        </div>
        <button 
          onClick={() => window.print()}
          className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm text-sm"
        >
          <i className="fa-solid fa-file-pdf"></i>
          <span>Download PDF</span>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 md:p-8 prose max-w-none bg-gray-100/30">
        <div className="bg-white shadow-sm p-6 md:p-10 border border-gray-200 rounded-lg font-serif text-gray-800 whitespace-pre-wrap leading-relaxed text-sm md:text-base">
          {state.handbook}
        </div>
      </div>
    </div>
  );
};

export default HandbookView;
