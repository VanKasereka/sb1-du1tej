import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Account {
  id: string
  name: string
  balance: string
  currency: string
  icon: string
}

const accounts: Account[] = [
  { id: '1', name: 'Dollar US', balance: '$1,504', currency: 'USD', icon: '🇺🇸' },
  { id: '2', name: 'Franc Congolais', balance: 'CDF 18,000', currency: 'CDF', icon: '🇨🇩' },
]

const linkedAccounts: Account[] = [
  { id: '3', name: 'M-pesa', balance: 'CDF 100,000', currency: 'CDF', icon: '📱' },
  { id: '4', name: 'Orange Money', balance: '$22', currency: 'USD', icon: '🟠' },
]

const savingsAccounts: Account[] = [
  { id: '5', name: 'Cash', balance: '$50.40', currency: 'USD', icon: '💰' },
]

const AccountsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 hover:text-gray-800">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </Link>
        
        <h1 className="text-2xl font-bold mb-6">Accounts</h1>
        
        <AccountSection title="Comptes Principales" accounts={accounts} />
        <AccountSection title="Comptes lié" accounts={linkedAccounts} />
        <AccountSection title="Epargne" accounts={savingsAccounts} />
        
        <button className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800 transition-colors">
          + ajouter un nouveau
        </button>
      </div>
    </div>
  )
}

const AccountSection: React.FC<{ title: string; accounts: Account[] }> = ({ title, accounts }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-3">{title}</h2>
    {accounts.map((account) => (
      <div key={account.id} className="bg-white p-4 rounded-lg shadow-sm mb-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{account.icon}</span>
          <div>
            <p className="font-semibold">{account.name}</p>
            <p className="text-sm text-gray-500">{account.currency}</p>
          </div>
        </div>
        <p className="font-bold">{account.balance}</p>
      </div>
    ))}
  </div>
)

export default AccountsPage