
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { EMPLOYEE_HANDBOOK_CONTENT, EMPLOYEE_DIRECTORY_CSV } from '../constants';
import { KnowledgeState } from '../types';

interface KnowledgeContextType {
  state: KnowledgeState;
  updateHandbook: (content: string) => void;
  updateDirectory: (csv: string) => void;
  logs: string[];
  addLog: (message: string) => void;
}

const KnowledgeContext = createContext<KnowledgeContextType | undefined>(undefined);

export const KnowledgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<KnowledgeState>({
    handbook: EMPLOYEE_HANDBOOK_CONTENT,
    directoryCsv: EMPLOYEE_DIRECTORY_CSV,
    lastUpdated: new Date(),
  });
  const [logs, setLogs] = useState<string[]>(["[System] Database initialized.", "[RAG] Indexing handbook...", "[RAG] Indexing employee directory..."]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev].slice(0, 50));
  };

  const updateHandbook = (content: string) => {
    setState(prev => ({ ...prev, handbook: content, lastUpdated: new Date() }));
    addLog("Handbook updated. Triggering re-index...");
  };

  const updateDirectory = (csv: string) => {
    setState(prev => ({ ...prev, directoryCsv: csv, lastUpdated: new Date() }));
    addLog("Directory updated. Propagating changes to vector store...");
  };

  return (
    <KnowledgeContext.Provider value={{ state, updateHandbook, updateDirectory, logs, addLog }}>
      {children}
    </KnowledgeContext.Provider>
  );
};

export const useKnowledge = () => {
  const context = useContext(KnowledgeContext);
  if (!context) throw new Error("useKnowledge must be used within a KnowledgeProvider");
  return context;
};
