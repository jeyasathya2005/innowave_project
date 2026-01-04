
import React, { useState, useMemo } from 'react';
import { parseDirectory } from '../constants';
import { useKnowledge } from '../context/KnowledgeContext';

const DirectoryView: React.FC = () => {
  const { state } = useKnowledge();
  const [searchTerm, setSearchTerm] = useState('');
  const employees = useMemo(() => parseDirectory(state.directoryCsv), [state.directoryCsv]);

  const filteredEmployees = employees.filter(emp => 
    Object.values(emp).some(val => typeof val === 'string' && val.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
      <div className="p-4 md:p-8 border-b border-gray-100 bg-gray-50/50">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Employee Directory</h2>
        <p className="text-gray-500 text-xs md:text-sm mt-1">Live from company database</p>
        
        <div className="mt-6">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search people, roles, departments..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-sm shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto relative">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-100/90 backdrop-blur-sm border-b border-gray-200">
              <th className="px-6 md:px-8 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</th>
              <th className="px-6 md:px-8 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Role</th>
              <th className="px-6 md:px-8 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Department</th>
              <th className="px-6 md:px-8 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Manager</th>
              <th className="px-6 md:px-8 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Project</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp, i) => (
                <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="px-6 md:px-8 py-4 font-bold text-gray-800 text-sm">{emp.name}</td>
                  <td className="px-6 md:px-8 py-4 text-gray-600 text-sm">{emp.role}</td>
                  <td className="px-6 md:px-8 py-4">
                    <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {emp.department}
                    </span>
                  </td>
                  <td className="px-6 md:px-8 py-4 text-gray-500 text-sm">{emp.reportingManager}</td>
                  <td className="px-6 md:px-8 py-4 text-gray-500 text-xs italic">"{emp.currentProject}"</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-8 py-10 text-center text-gray-400 italic">No matching records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DirectoryView;
