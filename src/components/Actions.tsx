import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Plus, DollarSign, MoreHorizontal, FileText } from 'lucide-react'

const Actions: React.FC = () => {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMoreDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between mb-6 animate-slideIn" style={{ animationDelay: '0.1s' }}>
      <Link to="/add-money">
        <ActionButton icon={<Plus size={20} />} label="Ajouter" />
      </Link>
      <Link to="/exchange">
        <ActionButton icon={<DollarSign size={20} />} label="Échanger" />
      </Link>
      <div className="relative" ref={dropdownRef}>
        <button onClick={() => setShowMoreDropdown(!showMoreDropdown)}>
          <ActionButton icon={<MoreHorizontal size={20} />} label="Plus" />
        </button>
        {showMoreDropdown && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link
                to="/statement"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <FileText className="inline-block mr-2" size={16} />
                Relevé
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const ActionButton: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center w-24 transition-transform duration-300 hover:scale-105">
      <div className="w-12 h-12 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mb-1 shadow-md">
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  )
}

export default Actions