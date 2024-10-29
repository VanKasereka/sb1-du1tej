import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ExchangeDetails {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  exchangedAmount: string;
  rate: string;
}

const ExchangeConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fromCurrency, toCurrency, amount, exchangedAmount, rate } = location.state as ExchangeDetails;

  const handleConfirm = () => {
    navigate('/exchange-success');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </button>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Confirm Exchange</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">From</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{amount} {fromCurrency}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">To</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{exchangedAmount} {toCurrency}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">Exchange Rate</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">1 {fromCurrency} = {rate} {toCurrency}</p>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          Confirm
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ExchangeConfirmationPage;