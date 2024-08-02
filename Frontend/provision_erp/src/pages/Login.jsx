import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook para redirigir

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/login', 
                {
                    method: 'POST', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Tipo de contenido
                    },
                    body: JSON.stringify({ "email": username, password }) // Cuerpo de la solicitud
                }
            );
            // Verifica si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json(); // Convierte la respuesta a JSON
            console.log('Resultado:', result);

            // Guardar el token en localStorage o en estado global si es necesario
            localStorage.setItem('token', result.token); 

            // Redirigir a la página de inicio
            navigate('/home'); 
        } catch (error) {
            console.error('Error en la solicitud POST:', error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-principal-color">
                <div className="flex flex-col md:flex-row w-full max-w-6xl h-3/4 bg-white shadow-lg">
                    {/* Contenedor de la imagen */}
                    <div className="hidden md:flex w-full md:w-[60%] h-full overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src="https://c.wallhere.com/photos/e8/2f/landscape_night_mountain_view_purple_background_pink_background_river_blue_background_clouds-2285542.jpg!d"
                            alt="No image"
                        />
                    </div>
                    {/* Contenedor del formulario */}
                    <div className="flex flex-col space-y-5 items-center justify-center p-6 w-full md:w-[40%] h-full">
                        <h1 className="font-bold text-lg md:text-xl">ProVision</h1>
                        <h1 className="text-xl md:text-2xl font-serif">BIENVENIDO</h1>
                        <img
                            className="h-16 w-20 md:h-20 md:w-24 rounded-full border-b-2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s"
                            alt=""
                        />
                        <form className="flex flex-col space-y-5 items-center w-72" onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-xs font-bold">USUARIO</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    className="border-b-2 border-black w-full focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-xs font-bold">CONTRASEÑA</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="border-b-2 border-black w-full focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-20 w-full justify-center">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-black rounded-full"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Recordar contraseña
                                    </label>
                                </div>
                                <Link to="/register" className="text-sm text-gray-900 hover:underline">
                                    Registrate
                                </Link>
                            </div>
                            <button type="submit" className="rounded-full px-10 py-2 bg-principal-color hover:bg-blue-600 text-white">
                                INGRESAR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Login;
