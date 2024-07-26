import React from "react";


const Login = () => {
  return (
    <div className="bg-principal-color h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="h-60 w-full md:h-96 md:w-3/5 flex-shrink-0">
        <img 
          className="h-full w-full object-cover" 
          src="https://wallha.com/download/ws/13/fotYTdx4-wallha.com.jpg" 
          alt="Background" 
        />
      </div>

      <div className="h-auto w-full md:h-96 md:w-80 bg-white flex flex-col items-center p-6 md:p-0">
        <p className="text-sm mt-4">ProVision</p>
        <p className="text-3xl font-serif mt-2">Bienvenido de Nuevo</p>
        <img 
          className="h-14 w-14 mt-2 rounded-full border-b-2 border-black" 
          src="https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg" 
          alt="User Avatar" 
        />

        <div className="flex flex-col space-y-2 mt-5">
          <p className="text-xs">USER</p>
          <input type="text" className="border-b-2 border-black w-full md:w-52 focus:outline-none"/>
          <p className="text-xs">PASSWORD</p>
          <input type="password" className="border-b-2 border-black w-full md:w-52 focus:outline-none"/>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="rememberMe" className="h-4 w-4"/>
            <label htmlFor="rememberMe" className="text-xs">Remember me</label>
          </div>
          <a href="#" className="text-xs underline hover:text-gray-600">Forgot Password?</a>
        </div>

        <button className="mt-6 bg-principal-color rounded-md text-white px-6 py-1 hover:bg-blue-600">
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;
