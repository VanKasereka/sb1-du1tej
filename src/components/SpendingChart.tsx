import React, { useEffect, useRef, useState } from 'react'
import { useTransactions } from '../context/TransactionContext'

const SpendingChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { transactions } = useTransactions();
  const [weeklySpending, setWeeklySpending] = useState<number[]>(Array(7).fill(0));
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    
    const weeklyData = Array(7).fill(0);
    let total = 0;

    transactions.forEach(transaction => {
      const transactionDate = new Date(transaction.date);
      if (transactionDate >= oneWeekAgo && transactionDate <= now && transaction.amount < 0) {
        const dayIndex = transactionDate.getDay();
        weeklyData[dayIndex] += Math.abs(transaction.amount);
        total += Math.abs(transaction.amount);
      }
    });

    setWeeklySpending(weeklyData);
    setTotalSpent(total);

    // Animate the bars
    const bars = chartRef.current?.querySelectorAll('.bar');
    bars?.forEach((bar, index) => {
      setTimeout(() => {
        const height = (weeklyData[index] / Math.max(...weeklyData)) * 80 + 20;
        (bar as HTMLElement).style.height = `${height}%`;
      }, index * 100);
    });
  }, [transactions]);

  const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  return (
    <div className="mb-6 animate-slideIn" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-gray-500 dark:text-gray-400 mb-2 font-semibold">Dépenses cette semaine</h2>
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold mr-2 dark:text-white">${totalSpent.toFixed(2)}</span>
      </div>
      <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg p-2 flex items-end justify-between" ref={chartRef}>
        {weeklySpending.map((amount, index) => (
          <div key={index} className="w-4 flex flex-col items-center justify-end">
            <div className="bg-black dark:bg-white rounded-full bar transition-all duration-500 ease-out w-1" style={{height: '0%'}}></div>
            <div className="bg-black dark:bg-white rounded-full w-4 h-1 mt-1"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        {daysOfWeek.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>
    </div>
  )
}

export default SpendingChart