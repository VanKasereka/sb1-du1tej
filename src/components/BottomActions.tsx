import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const BottomActions: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-md mx-auto flex justify-between p-4">
        <Link 
          to="/receive" 
          className="flex-1 bg-black text-white dark:bg-white dark:text-black py-3 rounded-full mr-2 flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          <ArrowDownLeft size={20} className="mr-2" />
          <span className="font-medium">Recevoir</span>
        </Link>
        <Link 
          to="/send" 
          className="flex-1 bg-black text-white dark:bg-white dark:text-black py-3 rounded-full ml-2 flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          <ArrowUpRight size={20} className="mr-2" />
          <span className="font-medium">Envoyer</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomActions