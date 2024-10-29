import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Lock, Settings } from 'lucide-react';

interface Transaction {
  id: number;
  name: string;
  date: string;
  amount: number;
}

const CardPage: React.FC = () => {
  const [isCardHidden, setIsCardHidden] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, name: 'CAA', date: "Aujourd'hui, 20:35", amount: -499.40 },
    { id: 2, name: 'GG Mart', date: 'Hier, 14:08', amount: -12.43 },
    { id: 3, name: 'Seray', date: 'Hier, 10:22', amount: -22.43 },
  ]);

  const toggleCardVisibility = () => setIsCardHidden(!isCardHidden);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 hover:text-gray-800">
          <ArrowLeft size={24} />
          <span className="ml-2">Retour</span>
        </Link>

        <div className="bg-[#d4f8b8] rounded-lg p-6 mb-6 relative overflow-hidden">
          {isCardHidden ? (
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <Lock size={48} className="text-gray-500" />
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-2xl font-bold">Apex</h2>
                <div className="w-12 h-8 bg-black rounded-md"></div>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-bold tracking-wider">2013 5657 9012 2024</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm mb-1">Titulaire de la carte</p>
                  <p className="font-semibold">Van Nkuli</p>
                </div>
                <div className="text-right">
                  <p className="text-sm mb-1">Expire le</p>
                  <p className="font-semibold">09/28</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between mb-6">
          <button onClick={toggleCardVisibility} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-1 bg-white">
              {isCardHidden ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
            <span className="text-xs">{isCardHidden ? 'Afficher les détails' : 'Masquer les détails'}</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-1 bg-white">
              <Lock size={20} />
            </div>
            <span className="text-xs">Bloquer la carte</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-1 bg-white">
              <Settings size={20} />
            </div>
            <span className="text-xs">Paramètres</span>
          </button>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Transactions récentes</h3>
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-semibold">{transaction.name}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <span className="font-semibold text-red-500">
                ${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          ))}
          <button className="w-full text-center text-blue-500 font-semibold mt-2">
            Voir tout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPage;