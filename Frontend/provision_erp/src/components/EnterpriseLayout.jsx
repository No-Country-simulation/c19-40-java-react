import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar2'; // O el Navbar que estés usando
import { Outlet } from 'react-router-dom';

const EnterpriseLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 bg-gray-800 text-white" /> {/* Ajusta el ancho y estilos según sea necesario */}
      <div className="flex-1 flex flex-col ml-64">
        <Navbar />
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
           <Outlet />
        </div>
      </div>
     
    </div>
  );
};

export default EnterpriseLayout;
