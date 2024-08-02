import React, { useState } from 'react';
import { Outlet, Link} from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed bg-principal-color top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-principal-color dark:bg-gray-800">
          <ul className="space-y-10 font-medium">
            <li className="flex items-center justify-center">
              <h1 className="text-3xl font-bold text-white">ProVision</h1>
            </li>
            <li>
              <Link
                to='/home'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.69l6.406 5.338V18.3a1.2 1.2 0 01-1.2 1.2H14.8a1.2 1.2 0 01-1.2-1.2V14.8a1.2 1.2 0 00-1.2-1.2H10.4a1.2 1.2 0 00-1.2 1.2v3.5a1.2 1.2 0 01-1.2 1.2H5.794a1.2 1.2 0 01-1.2-1.2V8.027L12 2.69z" />
                  <path d="M12 0L0 10h3v10a3 3 0 003 3h12a3 3 0 003-3V10h3L12 0z" />
                </svg>
                <Link to='/home' className="flex-1 ms-3 text-white whitespace-nowrap hover:text-black">Inicio</Link>
              </Link>
            </li>
            <li>
              <Link
                to='/sale'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6h-1V4a4 4 0 00-8 0v2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2zm-7-2a2 2 0 014 0v2H11V4zm6 16H7V9h12v11zm-8-4h2v2h-2v-2zm0-4h2v2h-2v-2z" />
                </svg>
                <Link  to='/sale' className="flex-1 ms-3 text-white whitespace-nowrap hover:text-black">
                  Ventas
                </Link>
              </Link>
            </li>
            <li>
              <Link
                to='/shop'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4h-2L3 2H0v2h2l3.6 7.59-1.35 2.45C3.89 15.37 4.17 16 4.72 16h12v-2H5.42l.93-1.68 5.5-.01c.75 0 1.41-.41 1.75-1.03l3.58-6.49C17.74 4.21 17.39 4 17 4H7zm-2 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.89-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.89-2-2-2z"/>
                </svg>
                <Link  to='/shop' className="flex-1 ms-3 text-white whitespace-nowrap hover:text-black">
                  Compras
                </Link>
              </Link>
            </li>
            <li>
              <Link
                to='/product'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <svg
                className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 9.857v4.878c0 .36.187.688.491.872l7.971 4.682c.315.186.731.186 1.046 0l7.971-4.682c.304-.184.491-.512.491-.872V9.857l-8 4.698-8-4.698zM12 2L3.5 6.857l8.5 4.857 8.5-4.857L12 2z" />
              </svg>
                <Link  to='/product' className="flex-1 ms-3 text-white whitespace-nowrap hover:text-black">
                  Productos
                </Link>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
