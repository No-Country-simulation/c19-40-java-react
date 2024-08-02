import React, { useState } from 'react';
import { Outlet, Link} from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <>
      <nav className="relative flex items-center justify-between bg-principal-color h-24 px-6 lg:px-12">
        
        <button
          className="lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <p className="text-white text-3xl mx-auto lg:mx-0">ProVision</p>

        

        {/* Menú en pantallas grandes */}
        <div className="hidden lg:flex lg:space-x-8 lg:text-white">
          <Link to="/" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">Inicio</Link>
          <Link to="/about" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">Sobre Nosotros</Link>
          <Link to="/features" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">Funcionalidades</Link>
          <Link to="/contact" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">Contactanos</Link>
      
        </div>

        <Link
          to="/register"
          className="relative z-20 text-white hover:bg-blue-600 px-6 py-2 rounded-lg bg-blue-700"
        >
          EMPEZAR
        </Link>

        {/* Menú desplegable en pantallas pequeñas */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-principal-color rounded-lg shadow-lg z-30 lg:hidden">
            <div className="text-white flex flex-col items-center pt-4 space-y-3">
                {/* Menú desplegable en pantallas pequeñas */}
                <Link to="/" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Inicio</Link>
                <Link to="/about" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Sobre Nosotros</Link>
                <Link to="/features" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Funcionalidades</Link>
                <Link to="/contact" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Contactanos</Link>
            </div>
          </div>
        )}

        

        
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
