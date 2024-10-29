import React from 'react';
import { X } from 'lucide-react';
import { Transaction } from '../context/TransactionContext';

interface TransactionDetailsModalProps {
  transaction: Transaction;
  onClose: () => void;
}

const TransactionDetailsModal: React.FC<TransactionDetailsModalProps> = ({ transaction, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Transaction Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-3">
          <p><strong>Transaction ID:</strong> {transaction.id}</p>
          <p><strong>Name:</strong> {transaction.name}</p>
          <p><strong>Amount:</strong> ${Math.abs(transaction.amount).toFixed(2)} {transaction.amount > 0 ? '(Received)' : '(Sent)'}</p>
          <p><strong>Date:</strong> {transaction.date}</p>
          <p><strong>Type:</strong> {transaction.type}</p>
          {transaction.sourceAccount && <p><strong>Source Account:</strong> {transaction.sourceAccount}</p>}
          {transaction.recipientNetwork && <p><strong>Recipient Network:</strong> {transaction.recipientNetwork}</p>}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsModal;