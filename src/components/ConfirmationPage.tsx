import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { useTransactions } from '../context/TransactionContext';

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { addTransaction } = useTransactions();
  const { recipientName, amount, sourceAccount, recipientNetwork } = location.state as { 
    recipientName: string; 
    amount: number; 
    sourceAccount: string;
    recipientNetwork: string;
  };

  const transactionAdded = useRef(false);

  useEffect(() => {
    if (!transactionAdded.current) {
      const transactionId = Date.now().toString();
      addTransaction({
        id: transactionId,
        name: recipientName,
        amount: -amount,
        type: 'sent',
        date: new Date().toLocaleString('en-US', { 
          day: 'numeric', 
          month: 'short', 
          hour: '2-digit', 
          minute: '2-digit'
        }),
        sourceAccount,
        recipientNetwork
      });
      transactionAdded.current = true;
    }
  }, [addTransaction, recipientName, amount, sourceAccount, recipientNetwork]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm text-center">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Your money has been sent!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-2">The transfer of ${amount.toFixed(2)} to {recipientName} was successful.</p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">From: {sourceAccount} | To: {recipientNetwork}</p>
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

export default ConfirmationPage;