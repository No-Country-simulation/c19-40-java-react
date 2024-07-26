import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <nav className="bg-principal-color flex items-center justify-between p-4 relative">
        <div className="text-white text-xl font-bold">ProVision</div>

        <div className="hidden md:flex space-x-4">
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-500">Home</a>
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-500">About us</a>
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-500">Features</a>
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-500">Contact us</a>
        </div>

        <button onClick={toggleMenu}>
          <img className="h-8 w-8 rounded-full" src="https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg" alt="User Avatar"/>
        </button>
      </nav>

      <div className={`fixed top-0 right-0 bg-principal-color flex flex-col items-center space-y-4 p-4 rounded-lg z-20 ${isMenuVisible ? 'block' : 'hidden'}`}>
        <div className="space-x-3 p-3 flex items-center">
          <img className="h-8 w-8 rounded-full" src="https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg" alt="User Avatar"/>
          <p className="text-white text-sm font-medium hover:bg-blue-500 rounded-md px-4 py-2">Your Enterprise</p>
          <button onClick={toggleMenu} className="text-white text-xl">
            x
          </button>
        </div>

        <hr className="border-1 w-full"/>

        <a href="#" className="text-white text-sm font-medium hover:bg-blue-500 rounded-md px-4 py-2">Your Profile</a>
        <a href="#" className="text-white text-sm font-medium hover:bg-blue-500 rounded-md px-4 py-2">Settings</a>
        <a href="#" className="text-white text-sm font-medium hover:bg-blue-500 rounded-md px-4 py-2">Log out</a>
      </div>
    </>
  );
};

export default NavBar;
