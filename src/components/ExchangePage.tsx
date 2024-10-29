import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpDown } from 'lucide-react';
import { exchangeSchema } from './FormValidation';

interface ExchangePageProps {
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'CDF', name: 'Congolese Franc' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CNY', name: 'Chinese Yuan' },
];

const ExchangePage: React.FC<ExchangePageProps> = ({ showToast }) => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('CDF');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleExchange = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      exchangeSchema.parse({
        fromCurrency,
        toCurrency,
        amount: parseFloat(amount),
      });
      const mockRate = Math.random() * (2000 - 1500) + 1500;
      const exchangedAmount = (parseFloat(amount) * mockRate).toFixed(2);
      navigate('/exchange-confirmation', {
        state: { fromCurrency, toCurrency, amount, exchangedAmount, rate: mockRate.toFixed(4) }
      });
    } catch (error) {
      showToast('Please fill all fields correctly', 'error');
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Exchange Currency</h1>

        <form onSubmit={handleExchange} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              From Currency
            </label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              aria-label="From Currency"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
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

          <button
            type="button"
            onClick={swapCurrencies}
            className="w-full flex items-center justify-center py-2 mb-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            aria-label="Swap Currencies"
          >
            <ArrowUpDown size={20} className="mr-2" />
            Swap Currencies
          </button>

          <div className="mb-6">
            <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              To Currency
            </label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              aria-label="To Currency"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Exchange
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExchangePage;