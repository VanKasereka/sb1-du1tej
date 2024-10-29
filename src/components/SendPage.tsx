import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send as SendIcon } from 'lucide-react';
import { sendMoneySchema } from './FormValidation';

interface SendPageProps {
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

interface Account {
  value: string;
  label: string;
  balance: number;
}

const SendPage: React.FC<SendPageProps> = ({ showToast }) => {
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [sourceAccount, setSourceAccount] = useState('');
  const [recipientNetwork, setRecipientNetwork] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAccountBalance, setSelectedAccountBalance] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      sendMoneySchema.parse({
        recipientName,
        recipientPhone,
        sourceAccount,
        recipientNetwork,
        amount: parseFloat(amount),
      });
      navigate('/transfer-summary', {
        state: { recipientName, recipientPhone, sourceAccount, recipientNetwork, amount }
      });
    } catch (error) {
      showToast('Veuillez remplir correctement tous les champs', 'error');
    }
  };

  const accounts: Account[] = [
    { value: "usd", label: "Compte USD", balance: 1000 },
    { value: "fc", label: "Compte FC", balance: 50000 },
    { value: "savings", label: "Compte d'épargne", balance: 500 },
    { value: "mpesa", label: "M-pesa", balance: 200 },
    { value: "orange", label: "Orange Money", balance: 150 },
    { value: "airtel", label: "Airtel Money", balance: 100 },
    { value: "africell", label: "Africell Money", balance: 75 },
  ];

  const networkOptions = [
    { value: "mpesa", label: "M-pesa" },
    { value: "orange", label: "Orange Money" },
    { value: "airtel", label: "Airtel Money" },
    { value: "africell", label: "Africell Money" },
    { value: "bank", label: "Compte bancaire" },
  ];

  useEffect(() => {
    const selectedAccount = accounts.find(account => account.value === sourceAccount);
    setSelectedAccountBalance(selectedAccount ? selectedAccount.balance : null);
  }, [sourceAccount]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Retour</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Envoyer de l'argent</h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm mb-6">
          <div className="mb-4">
            <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nom complet du destinataire
            </label>
            <input
              type="text"
              id="recipientName"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="recipientPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Numéro de téléphone du destinataire
            </label>
            <input
              type="tel"
              id="recipientPhone"
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="sourceAccount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Compte source
            </label>
            <select
              id="sourceAccount"
              value={sourceAccount}
              onChange={(e) => setSourceAccount(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            >
              <option value="">Sélectionnez le compte source</option>
              {accounts.map((account) => (
                <option key={account.value} value={account.value}>{account.label}</option>
              ))}
            </select>
            {selectedAccountBalance !== null && (
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Solde disponible : ${selectedAccountBalance.toFixed(2)}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="recipientNetwork" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Réseau du destinataire
            </label>
            <select
              id="recipientNetwork"
              value={recipientNetwork}
              onChange={(e) => setRecipientNetwork(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            >
              <option value="">Sélectionnez le réseau du destinataire</option>
              {networkOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Montant
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              required
              min="0"
              step="0.01"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <SendIcon size={20} className="mr-2" />
            Continuer vers le résumé
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendPage;