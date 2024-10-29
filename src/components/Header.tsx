import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useAuth } from '../context/AuthContext'

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex justify-between items-center mb-4">
      {isAuthenticated ? (
        <Link to="/profile">
          <img
            src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
            alt="Profil"
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
          />
        </Link>
      ) : (
        <Link to="/login" className="text-blue-500 hover:text-blue-600">Connexion</Link>
      )}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {isAuthenticated && (
          <Link to="/card" className="bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200">
            Carte
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header