import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send as SendIcon } from 'lucide-react';

interface TransferDetails {
  recipientName: string;
  recipientPhone: string;
  sourceAccount: string;
  recipientNetwork: string;
  amount: string;
}

const TransferSummaryPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const transferDetails = location.state as TransferDetails;

  const handleSendMoney = () => {
    navigate('/confirmation', { 
      state: { 
        recipientName: transferDetails.recipientName, 
        amount: parseFloat(transferDetails.amount)
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/send" className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Transfer Summary</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm mb-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Recipient Details</h2>
            <p className="text-gray-600 dark:text-gray-300"><strong>Name:</strong> {transferDetails.recipientName}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Phone:</strong> {transferDetails.recipientPhone}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Transfer Details</h2>
            <p className="text-gray-600 dark:text-gray-300"><strong>Amount:</strong> ${transferDetails.amount}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>From Account:</strong> {transferDetails.sourceAccount}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>To Network:</strong> {transferDetails.recipientNetwork}</p>
          </div>

          <button
            onClick={handleSendMoney}
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center mt-6"
          >
            <SendIcon size={20} className="mr-2" />
            Confirm and Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferSummaryPage;