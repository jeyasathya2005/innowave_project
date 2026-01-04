
import React from 'react';

const SolutionBlueprint: React.FC = () => {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* SECTION: PROJECT VIDEO PRESENTATION */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 md:p-8 shadow-xl text-white">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/50 text-[10px] font-bold uppercase tracking-widest">
              Project Walkthrough
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Technical Explanation & Demo</h2>
            <p className="text-indigo-100 text-sm md:text-base leading-relaxed">
              Watch a comprehensive 5-minute deep dive into the architecture, RAG implementation details, and a live demonstration of the InnoWave Smart Assistant in action.
            </p>
            <div className="pt-2 md:pt-4">
              <a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white text-indigo-700 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black hover:bg-indigo-50 transition transform hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-900/40"
              >
                <i className="fa-solid fa-play-circle text-xl"></i>
                <span>WATCH PRESENTATION</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-72 aspect-video bg-indigo-900/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-inner">
            <img 
              src="https://picsum.photos/seed/tech-demo/400/225" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition duration-700" 
              alt="Video Thumbnail"
            />
            <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-play text-indigo-600 ml-1"></i>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: AI-DRIVEN EFFICIENCY */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fa-solid fa-bolt-lightning text-yellow-500 mr-3"></i>
          AI-Driven Efficiency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
              <i className="fa-solid fa-pen-nib mr-2 text-indigo-500"></i>
              Synthetic Engineering
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gemini acted as a <strong>Synthetic HR Expert</strong>, generating 10 pages of handbook and 12-entry CSV in seconds. This eliminated ~10 hours of content creation.
            </p>
          </div>
          <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
              <i className="fa-solid fa-code mr-2 text-indigo-500"></i>
              Architecture Logic
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Using <strong>In-Context Learning (ICL)</strong>, I bypassed Vector DBs, reducing infrastructure complexity by 75% for this scale of data.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: STRATEGIC RATIONALE */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fa-solid fa-bullseye text-indigo-600 mr-3"></i>
          Strategic Rationale
        </h2>
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-4 md:p-6 border border-indigo-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-xs md:text-sm">
            Developed to address "Information Fragmentation" at the intersection of <strong>business impact</strong> and <strong>technical suitability</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white">
              <h4 className="text-[10px] font-bold text-indigo-900 uppercase mb-2">1. Data Synthesis</h4>
              <p className="text-[10px] text-gray-600 leading-relaxed">Bridges unstructured PDFs and structured CSVs in real-time through RAG.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white">
              <h4 className="text-[10px] font-bold text-indigo-900 uppercase mb-2">2. Accuracy</h4>
              <p className="text-[10px] text-gray-600 leading-relaxed">Factual grounding via RAG prevents legal/compliance hallucinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: AI & CLOUD SERVICES */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fa-solid fa-cloud text-indigo-600 mr-3"></i>
          Cloud Services Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-4">
             <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Intelligence</h3>
             <div className="text-sm font-bold">Gemini 3 Flash</div>
             <div className="text-[10px] text-gray-500">Low-latency reasoning & large context window optimization.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-4">
             <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Infrastructure</h3>
             <div className="text-sm font-bold">Azure Compatible RAG</div>
             <div className="text-[10px] text-gray-500">Architecture mapped to Azure AI Search patterns for scalability.</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-4 sm:col-span-2 lg:col-span-1">
             <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Frontend</h3>
             <div className="text-sm font-bold">React 19 & Tailwind</div>
             <div className="text-[10px] text-gray-500">High-performance, utility-first styling for cross-device fluidity.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionBlueprint;
