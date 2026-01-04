
export interface Employee {
  name: string;
  role: string;
  department: string;
  email: string;
  reportingManager: string;
  currentProject: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppSection {
  HANDBOOK = 'HANDBOOK',
  DIRECTORY = 'DIRECTORY',
  CHAT = 'CHAT',
  DASHBOARD = 'DASHBOARD',
  ABOUT = 'ABOUT',
  KNOWLEDGE_BASE = 'KNOWLEDGE_BASE'
}

export interface KnowledgeState {
  handbook: string;
  directoryCsv: string;
  lastUpdated: Date;
}
