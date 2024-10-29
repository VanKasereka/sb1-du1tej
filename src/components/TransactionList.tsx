import React from 'react';
import { useTransactions } from '../context/TransactionContext';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const TransactionList: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <div className="mb-6 animate-slideIn" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-gray-500 dark:text-gray-400 mb-2 font-semibold">Recent Transactions</h2>
      {transactions.slice(0, 5).map((transaction, index) => (
        <div 
          key={transaction.id} 
          className="flex justify-between items-center mb-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer" 
          style={{ animationDelay: `${0.1 * (index + 1)}s` }}
        >
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${transaction.type === 'received' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {transaction.type === 'received' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
            </div>
            <div>
              <p className="font-semibold">{transaction.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</p>
            </div>
          </div>
          <span className={`font-semibold ${transaction.type === 'received' ? 'text-green-500' : 'text-red-500'}`}>
            {transaction.type === 'received' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
          </span>
        </div>
      ))}
      <button className="text-blue-500 dark:text-blue-400 text-sm font-semibold transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">View all transactions</button>
    </div>
  );
};

export default TransactionList;