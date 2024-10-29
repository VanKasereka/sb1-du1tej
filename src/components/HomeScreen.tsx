import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from './Header';
import Balance from './Balance';
import Actions from './Actions';
import TransactionList from './TransactionList';
import SpendingChart from './SpendingChart';
import BottomActions from './BottomActions';

const HomeScreen: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col max-w-md mx-auto pb-24 text-black dark:text-white">
      <div className="p-4">
        <Header />
        {isAuthenticated ? (
          <>
            <Balance amount={1504.24} />
            <Actions />
            <TransactionList />
            <SpendingChart />
          </>
        ) : (
          <div className="text-center mt-10 animate-fadeIn">
            <h1 className="text-2xl font-bold mb-4">Welcome to ApexPay</h1>
            <p className="mb-4">Please log in or sign up to start using the app.</p>
          </div>
        )}
      </div>
      <BottomActions />
    </div>
  );
};

export default HomeScreen;