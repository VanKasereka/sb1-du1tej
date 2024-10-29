import React from 'react'
import { Link } from 'react-router-dom'

interface BalanceProps {
  amount: number
}

const Balance: React.FC<BalanceProps> = ({ amount }) => {
  return (
    <div className="mb-6 text-center animate-slideIn">
      <h1 className="text-5xl font-bold mb-2">${amount.toFixed(2)}</h1>
      <Link to="/accounts" className="mt-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 rounded-full text-sm transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 inline-block">
        Comptes
      </Link>
    </div>
  )
}

export default Balance