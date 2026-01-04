
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGeminiResponse } from '../services/gemini';
import { SAMPLE_QUESTIONS } from '../constants';
import { useKnowledge } from '../context/KnowledgeContext';

const ChatInterface: React.FC = () => {
  const { state, addLog } = useKnowledge();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    
    addLog(`User query received: "${text}"`);

    // Dynamic RAG Call using current backend state
    const botResponseText = await getGeminiResponse(text, state);
    
    const botMsg: ChatMessage = { role: 'model', text: botResponseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
    
    addLog(`AI response generated. Resources cited.`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100">
            <i className="fa-solid fa-robot text-white text-xl"></i>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Smart Assistant</h2>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-500 font-medium">Knowledge Base: {state.lastUpdated.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-8 py-10">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <i className="fa-solid fa-handshake text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Welcome to InnoWave!</h3>
              <p className="text-gray-500 mt-2">I'm connected to the latest company knowledge base. Ask me anything about policies or people.</p>
            </div>
            
            <div className="w-full space-y-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-left pl-1">Knowledge Ingestion Ready</p>
              {SAMPLE_QUESTIONS.slice(0, 5).map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-4 bg-white border border-gray-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50/50 transition-all text-sm text-gray-700 shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] flex ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                msg.role === 'user' ? 'bg-indigo-600 text-white ml-2' : 'bg-gray-200 text-gray-600 mr-2'
              }`}>
                <i className={`fa-solid ${msg.role === 'user' ? 'fa-user' : 'fa-robot'} text-xs`}></i>
              </div>
              <div className={`p-4 rounded-2xl shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none' 
                  : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none prose prose-sm max-w-none'
              }`}>
                {msg.text.split('\n').map((line, j) => (
                  <p key={j} className={j > 0 ? 'mt-2' : ''}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2 bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none text-gray-500">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-xs font-medium ml-2">Consulting dynamic backend...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-gray-100 bg-white">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center space-x-3">
          <input 
            type="text" 
            placeholder="Query knowledge base..."
            className="flex-1 pl-6 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 w-10 h-10 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center shadow-md shadow-indigo-100"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
