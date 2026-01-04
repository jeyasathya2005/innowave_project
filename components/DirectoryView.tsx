
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
      <div className="p-8 border-b border-gray-100 bg-gray-50/50">
        <h2 className="text-2xl font-bold text-gray-800">Employee Directory</h2>
        <p className="text-gray-500 text-sm mt-1">Live from company database</p>
        
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search current directory..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-8 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-8 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-8 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-8 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Manager</th>
              <th className="px-8 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Project</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredEmployees.map((emp, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5 font-semibold text-gray-800">{emp.name}</td>
                <td className="px-8 py-5 text-gray-600">{emp.role}</td>
                <td className="px-8 py-5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                    {emp.department}
                  </span>
                </td>
                <td className="px-8 py-5 text-gray-600">{emp.reportingManager}</td>
                <td className="px-8 py-5 text-gray-600 italic">"{emp.currentProject}"</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DirectoryView;
