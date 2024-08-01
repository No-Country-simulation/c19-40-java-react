import React, { useState } from 'react';
import { Outlet, Link} from 'react-router-dom';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  

  return (
    <>
      <nav className="relative flex items-center justify-between bg-principal-color h-24 px-6 lg:px-12">

        <div></div>

        <div></div>

             {/* Buscador */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            className="h-10 px-4 pr-10 w-96 rounded-full text-black focus:outline-none"
            placeholder="Buscar..."
          />
          <button className="absolute right-0 top-0 mt-2 mr-3">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
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
                <p className='text-xl'>Enterprise Name</p>
                <button onClick={toggleProfile}>x</button>
              </div>
              <hr className='w-full border-white border-1' />
              <a href="#" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Tu perfil</a>
              <a href="#" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Opciones</a>
              <a href="#" className="text-white text-xl px-2 py-2  hover:bg-blue-600 hover:rounded-lg">Salir</a>
            </div>
          </div>
        )}

        

        
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
