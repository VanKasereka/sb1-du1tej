import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useTransactions } from '../context/TransactionContext';

interface ReceiveDetails {
  recipient: string;
  amount: string;
}

const ReceiveConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { recipient, amount } = location.state as ReceiveDetails;
  const { addTransaction } = useTransactions();
  const transactionAdded = useRef(false);

  useEffect(() => {
    if (!transactionAdded.current) {
      addTransaction({
        name: recipient,
        amount: parseFloat(amount),
        type: 'received',
        sourceAccount: 'External',
        recipientNetwork: 'Your Account'
      });
      transactionAdded.current = true;
    }
  }, [addTransaction, recipient, amount]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Request Sent Successfully</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You've requested ${amount} from {recipient}.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            They will be notified of your request.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiveConfirmationPage;