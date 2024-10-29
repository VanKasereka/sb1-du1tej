import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import { addMoneySchema } from './FormValidation';

interface AddMoneyPageProps {
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

const banks = [
  'Rawbank',
  'FirstBank DRC SA',
  'Equity Banque',
  'Afriland First Bank CD SA',
  'Trust Merchant Bank (TMB)',
];

const accounts = [
  { id: 'usd', name: 'Dollar US', currency: 'USD' },
  { id: 'cdf', name: 'Franc Congolais', currency: 'CDF' },
];

const AddMoneyPage: React.FC<AddMoneyPageProps> = ({ showToast }) => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [targetAccount, setTargetAccount] = useState('');
  const navigate = useNavigate();

  const handleAddMoney = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      addMoneySchema.parse({
        source,
        amount: parseFloat(amount),
        targetAccount,
      });
      navigate('/add-money-confirmation', { state: { source, amount, targetAccount } });
    } catch (error) {
      showToast('Please fill all fields correctly', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Add Money</h1>

        <form onSubmit={handleAddMoney} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <label htmlFor="source" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Source
            </label>
            <select
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
              aria-required="true"
            >
              <option value="">Select a source</option>
              <optgroup label="Banks">
                {banks.map((bank) => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </optgroup>
              <optgroup label="Cards">
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
              </optgroup>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Enter amount"
              required
              aria-required="true"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="targetAccount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Add to Account
            </label>
            <select
              id="targetAccount"
              value={targetAccount}
              onChange={(e) => setTargetAccount(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
              aria-required="true"
            >
              <option value="">Select an account</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} ({account.currency})
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Add Money
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMoneyPage;