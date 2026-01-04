
import React from 'react';

const SolutionBlueprint: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fa-solid fa-circle-info text-indigo-600 mr-3"></i>
          Problem Statement
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-gray-700 uppercase text-xs tracking-wider">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed">
              New employees at mid-size tech firms face "Information Fragmentation." Critical policies, contact details, and project data are scattered across static PDFs and CSVs, leading to a 20% loss in productivity during the first two weeks of onboarding.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-gray-700 uppercase text-xs tracking-wider">The Solution</h3>
            <p className="text-gray-600 leading-relaxed">
              A unified "Smart Onboarding Assistant" that leverages Retrieval-Augmented Generation (RAG) to ground LLM responses in company-specific data, providing instant, accurate, and conversational support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fa-solid fa-gears text-indigo-600 mr-3"></i>
          Technical Architecture (RAG)
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-indigo-900 mb-3">Retrival-Augmented Generation (RAG) Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              For this implementation, I chose an <strong>In-Context RAG</strong> pattern. Given the dataset size (~10 pages of handbook and 12+ directory entries), context injection is technically superior to a traditional Vector DB setup as it eliminates embedding latency and infrastructure overhead while maintaining 100% retrieval accuracy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <i className="fa-solid fa-database text-indigo-500 mb-2"></i>
                <div className="text-xs font-bold text-gray-400 uppercase">Knowledge Base</div>
                <div className="text-sm font-semibold">Handbook & Directory</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <i className="fa-solid fa-bolt text-indigo-500 mb-2"></i>
                <div className="text-xs font-bold text-gray-400 uppercase">Orchestration</div>
                <div className="text-sm font-semibold">Gemini 3 Flash</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <i className="fa-solid fa-cloud text-indigo-500 mb-2"></i>
                <div className="text-xs font-bold text-gray-400 uppercase">Design Pattern</div>
                <div className="text-sm font-semibold">Azure AI Foundry Compatible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-900 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <i className="fa-solid fa-brain mr-3"></i>
          Thought Process & Vibe Coding
        </h2>
        <div className="prose prose-invert max-w-none text-indigo-100">
          <p>
            This project was built following the <strong>Vibe Coding</strong> philosophy: prioritizing rapid development cycles and AI-assisted design to create a production-grade experience in record time. 
          </p>
          <ul className="list-disc ml-5 space-y-2 mt-4 text-sm">
            <li><strong>Decision: In-Context RAG over Vector DB.</strong> Why? Simplicity. A vector search adds 200ms+ latency and potential retrieval errors for small documents. In-context grounding is faster and more precise here.</li>
            <li><strong>Decision: Gemini 3 Flash.</strong> Why? Performance. Flash models offer the best balance of context-window size (for the RAG injection) and inference speed.</li>
            <li><strong>UI/UX:</strong> Used Tailwind CSS and FontAwesome for a clean, accessible, "Enterprise Software" aesthetic that minimizes cognitive load for new hires.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SolutionBlueprint;
