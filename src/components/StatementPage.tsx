import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const StatementPage: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleGenerateStatement = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to generate the statement
    console.log('Generating statement for:', { startDate, endDate });
    // For now, we'll just log the dates. In a real app, you might download a PDF or navigate to a results page
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Generate Statement</h1>

        <form onSubmit={handleGenerateStatement} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <FileText size={20} className="mr-2" />
            Generate Statement
          </button>
        </form>
      </div>
    </div>
  );
};

export default StatementPage;