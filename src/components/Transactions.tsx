import React, { useState } from 'react'
import { useTransactions } from '../context/TransactionContext'
import TransactionDetailsModal from './TransactionDetailsModal'

const Transactions: React.FC = () => {
  const { transactions } = useTransactions();
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="mb-6 animate-slideIn" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-gray-500 dark:text-gray-400 mb-2 font-semibold">Mes transactions</h2>
      {transactions.slice(0, 5).map((transaction, index) => (
        <div 
          key={transaction.id} 
          className="flex justify-between items-center mb-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer" 
          style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          onClick={() => handleTransactionClick(transaction)}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
            <div>
              <p className="font-semibold">{transaction.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</p>
            </div>
          </div>
          <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-500' : 'text-black dark:text-white'}`}>
            {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}$
          </span>
        </div>
      ))}
      <button className="text-blue-500 dark:text-blue-400 text-sm font-semibold transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300">Voir tout</button>
      
      {selectedTransaction && (
        <TransactionDetailsModal 
          transaction={selectedTransaction} 
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default Transactions