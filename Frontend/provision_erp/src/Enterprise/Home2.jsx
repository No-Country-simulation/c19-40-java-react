import React from 'react';

const Home2 = () => {
  return (

        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Estadísticas */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
            {/* Aquí puedes agregar gráficos o datos estadísticos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Ventas Totales</h3>
                <p className="text-2xl">$50,000</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Clientes Activos</h3>
                <p className="text-2xl">1,200</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Inventario</h3>
                <p className="text-2xl">350 Artículos</p>
              </div>
            </div>
          </div>
          
          {/* Reportes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Reportes</h2>
            {/* Aquí puedes agregar enlaces o botones para generar o ver reportes */}
            <div className="space-y-4">
              <a href="#" className="block bg-blue-500 text-white p-3 rounded-lg text-center hover:bg-blue-600">
                Generar Reporte de Ventas
              </a>
              <a href="#" className="block bg-green-500 text-white p-3 rounded-lg text-center hover:bg-green-600">
                Ver Reporte de Compras
              </a>
              <a href="#" className="block bg-yellow-500 text-white p-3 rounded-lg text-center hover:bg-yellow-600">
                Inventario Detallado
              </a>
            </div>
          </div>
        </div>

  );
};

export default Home2;
