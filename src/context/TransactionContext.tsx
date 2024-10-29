import React, { createContext, useState, useContext } from 'react';

export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  type: 'sent' | 'received' | 'purchase';
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', name: 'Axca Tshibangu', date: '24 May, 15:16', amount: -30, type: 'sent' },
    { id: '2', name: 'Kin Marche', date: '19 May, 20:35', amount: -12.43, type: 'purchase' },
    { id: '3', name: 'Nadege Mututi', date: '19 May, 20:32', amount: 20, type: 'received' },
  ]);

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toLocaleString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        hour: '2-digit', 
        minute: '2-digit'
      })
    };
    setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};