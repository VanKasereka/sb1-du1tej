import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, DollarSign } from 'lucide-react';

const ReceivePage: React.FC = () => {
  const [recipientType, setRecipientType] = useState<'contact' | 'number'>('contact');
  const [selectedContact, setSelectedContact] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const contacts = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = recipientType === 'contact' ? selectedContact : recipientNumber;
    console.log('Request money from:', recipient, 'Amount:', amount);
    // Here you would typically make an API call to process the request
    // For now, we'll just navigate to a confirmation page
    navigate('/receive-confirmation', { state: { recipient, amount } });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Request Money</h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <div className="flex mb-2">
              <button
                type="button"
                className={`flex-1 py-2 text-center ${recipientType === 'contact' ? 'bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold' : ''}`}
                onClick={() => setRecipientType('contact')}
              >
                Saved Contact
              </button>
              <button
                type="button"
                className={`flex-1 py-2 text-center ${recipientType === 'number' ? 'bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold' : ''}`}
                onClick={() => setRecipientType('number')}
              >
                Enter Number
              </button>
            </div>

            {recipientType === 'contact' ? (
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Contact
                </label>
                <select
                  id="contact"
                  value={selectedContact}
                  onChange={(e) => setSelectedContact(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  required
                >
                  <option value="">Select a contact</option>
                  {contacts.map((contact) => (
                    <option key={contact.id} value={contact.name}>{contact.name}</option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Recipient's Number
                </label>
                <input
                  type="tel"
                  id="number"
                  value={recipientNumber}
                  onChange={(e) => setRecipientNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={18} className="text-gray-400" />
              </div>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <User size={20} className="mr-2" />
            Request Money
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReceivePage;