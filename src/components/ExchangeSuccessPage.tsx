import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const ExchangeSuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm text-center">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Your Exchange is Successful</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The currency exchange has been completed.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <Home size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ExchangeSuccessPage;