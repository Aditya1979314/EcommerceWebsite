import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { isauthAtom } from '../Stores/atoms/UserAtoms';

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isauth,setisauth] = useRecoilState(isauthAtom);
  const Navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
      >
         <img class="object-cover w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt=""></img>
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          <Link to='/orders'
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Your Orders
          </Link>
          <Link to='/userprofile'
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Settings
          </Link>
          <button 
          onClick={(e) => {
            localStorage.removeItem('token');
            setisauth(0);
            Navigate('/login')
          }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
