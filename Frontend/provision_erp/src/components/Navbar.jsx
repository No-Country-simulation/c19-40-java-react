import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
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
          <a href="#" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">Home</a>
          <a href="#" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">About us</a>
          <a href="#" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">Features</a>
          <a href="#" className="px-2 py-2 text-xl hover:bg-blue-600 hover:rounded-lg">Contact us</a>
        </div>

        <button
          className="relative z-20"
          onClick={toggleProfile}
        >
          <img
            className="h-10 w-10 rounded-full"
            src="https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg"
            alt="Not found"
          />
        </button>

        {/* Menú desplegable en pantallas pequeñas */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-principal-color rounded-lg shadow-lg z-30 lg:hidden">
            <div className="text-white flex flex-col items-center pt-4 space-y-3">
                {/* Menú desplegable en pantallas pequeñas */}
              <a href="#" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Home</a>
              <a href="#" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">About us</a>
              <a href="#" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Features</a>
              <a href="#" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Contact us</a>
            </div>
          </div>
        )}

        {/* Menú desplegable del perfil */}
        {isProfileOpen && (
          <div className="absolute top-3 right-0 w-60 bg-principal-color rounded-lg shadow-lg z-30">
            <div className="text-white flex flex-col items-center pt-4 space-y-3">
              <div className='flex flex-row space-x-4 items-center justify-center'>
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg"
                  alt="Not found"
                />
                <p>Enterprise Name</p>
                <button onClick={toggleProfile}>x</button>
              </div>
              <hr className='w-full border-white border-1' />
              <a href="#" className="text-white px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Your Profile</a>
              <a href="#" className="text-white px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Settings</a>
              <a href="#" className="text-white px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Log Out</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
