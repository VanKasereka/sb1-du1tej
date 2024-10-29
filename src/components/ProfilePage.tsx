import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Lock, UserPlus, FileText, XCircle, MessageCircle, Info, LogOut, ChevronRight } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');

  const menuItems = [
    { id: 'account', icon: User, label: 'Account Details' },
    { id: 'passcode', icon: Lock, label: 'Change Passcode' },
    { id: 'invite', icon: UserPlus, label: 'Invite a Friend' },
    { id: 'terms', icon: FileText, label: 'Terms & Conditions' },
    { id: 'contact', icon: MessageCircle, label: 'Contact Us' },
    { id: 'about', icon: Info, label: 'About Us' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Details</h2>
            <div className="space-y-2">
              <p><strong className="text-gray-600 dark:text-gray-400">First Name:</strong> John</p>
              <p><strong className="text-gray-600 dark:text-gray-400">Last Name:</strong> Doe</p>
              <p><strong className="text-gray-600 dark:text-gray-400">Date of Birth:</strong> 01/01/1990</p>
              <p><strong className="text-gray-600 dark:text-gray-400">Phone Number:</strong> +1 234 567 8900</p>
              <p><strong className="text-gray-600 dark:text-gray-400">Email:</strong> john.doe@example.com</p>
            </div>
          </div>
        );
      case 'passcode':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Change Passcode</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="current-passcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Passcode</label>
                <input type="password" id="current-passcode" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <div>
                <label htmlFor="new-passcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Passcode</label>
                <input type="password" id="new-passcode" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <div>
                <label htmlFor="confirm-passcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm New Passcode</label>
                <input type="password" id="confirm-passcode" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <button type="submit" className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Change Passcode
              </button>
            </form>
          </div>
        );
      // ... (other case statements remain the same)
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <Link to="/" className="flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Profile</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <item.icon size={24} className="text-gray-500 dark:text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {/* Handle logout */}}
              className="w-full flex items-center justify-center p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-md transition-colors"
            >
              <LogOut size={20} className="mr-2" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {activeTab && (
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            {renderTabContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;