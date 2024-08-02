import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';

const Register = () => {
    const [imgSrc, setImgSrc] = useState('https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg');

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImgSrc(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setImgSrc('https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg');
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-principal-color p-4">
                <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Contenedor de la imagen */}
                    <div className="hidden md:flex md:w-1/3 min-h-screen overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src="https://c.wallhere.com/photos/e8/2f/landscape_night_mountain_view_purple_background_pink_background_river_blue_background_clouds-2285542.jpg!d"
                            alt="Background"
                        />
                    </div>
                    {/* Contenedor del formulario */}
                    <div className="flex flex-col p-6 w-full md:w-2/3">
                        <h1 className="font-bold text-lg md:text-2xl mb-4">
                            <span className='text-principal-color'>P</span>ro<span className='text-principal-color'>V</span>ision
                        </h1>
                        <hr className='bg-black border-1 border-black w-full mb-4' />
                        <form className='flex flex-col space-y-4'>
                            <section className='flex flex-col md:flex-row md:space-x-4'>
                                <div className='flex flex-col space-y-4 w-full md:w-1/2'>
                                    <h2 className='font-bold text-xs'>DATOS PERSONALES</h2>
                                    <div className='flex flex-col space-y-4'>
                                        <div className='flex flex-col space-y-3'>
                                            <p className='font-bold text-xs'>Nombres</p>
                                            <input type="text" className='border-2 border-black rounded-sm p-2' />
                                            <p className='font-bold text-xs'>Fecha de Nacimiento</p>
                                            <input type="date" className='border-2 border-black rounded-sm p-2' />
                                        </div>
                                        <div className='flex flex-col space-y-3'>
                                            <p className='font-bold text-xs'>Apellidos</p>
                                            <input type="text" className='border-2 border-black rounded-sm p-2' />
                                            <p className='font-bold text-xs'>Teléfono</p>
                                            <input type="tel" className='border-2 border-black rounded-sm p-2' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center w-full md:w-1/2 mb-3 mt-3 md:mb-0'>
                                    <img
                                        src={imgSrc}
                                        alt="avatar"
                                        id='img'
                                        className='h-36 w-36 border-2 rounded-full border-black mb-2'
                                    />
                                    <input
                                        type="file"
                                        name='foto'
                                        id='foto'
                                        accept='image/*'
                                        className='hidden'
                                        onChange={handleFileChange}
                                    />
                                    <label
                                        htmlFor="foto"
                                        className='bg-principal-color text-white rounded-sm px-4 cursor-pointer py-1 hover:bg-blue-600'
                                    >
                                        Subir Foto
                                    </label>
                                </div>
                            </section>
                            <hr className='bg-black border-1 border-black w-full mb-4' />
                            <section className='flex flex-col md:flex-row md:space-x-4'>
                                <div className='flex flex-col space-y-4 w-full md:w-1/2'>
                                    <h2 className='font-bold text-xs'>INFORMACIÓN DE CONTACTO</h2>
                                    <div className='flex flex-col space-y-4'>
                                        <div className='flex flex-col space-y-3'>
                                            <p className='font-bold text-xs'>Correo Electrónico</p>
                                            <input type="email" className='border-2 border-black rounded-sm p-2' />
                                            <p className='font-bold text-xs'>Nombre de Organización</p>
                                            <input type="text" className='border-2 border-black rounded-sm p-2' />
                                            <p className='font-bold text-xs'>Cargo o Puesto</p>
                                            <input type="text" className='border-2 border-black rounded-sm p-2' />
                                        </div>
                                        <div className='flex flex-col space-y-3'>
                                            <p className='font-bold text-xs'>País</p>
                                            <input type="text" className='border-2 border-black rounded-sm p-2' />
                                            <p className='font-bold text-xs'>Ciudad</p>
                                            <input type="text" className='border-2 border-black rounded-sm p-2' />
                                            <div className='flex flex-row space-x-2 mt-4 items-center'>
                                                <input
                                                    id="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-black rounded-full border-principal-color"
                                                />
                                                <label htmlFor="remember-me" className="ml-2 text-xs text-principal-color font-bold">
                                                    Recordar contraseña
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-4 items-center w-full md:w-1/2'>
                                    <h2 className='font-bold text-xs'>CREDENCIALES</h2>
                                    <div className='flex flex-col space-y-3'>
                                        <p className='font-bold text-xs'>Nombre de usuario</p>
                                        <input type="text" className='border-2 border-black rounded-sm p-2' />
                                        <p className='font-bold text-xs'>Ingrese contraseña</p>
                                        <input type="password" className='border-2 border-black rounded-sm p-2' />
                                        <p className='font-bold text-xs'>Confirme su contraseña</p>
                                        <input type="password" className='border-2 border-black rounded-sm p-2' />
                                    </div>
                                    <button className='rounded-full bg-principal-color mt-2 px-8 py-2 text-white hover:bg-blue-600'>
                                        REGISTRARME
                                    </button>
                                    <Link to='/login' className='mt-2 text-principal-color hover:underline'>
                                        ¿Ya tienes una cuenta?
                                    </Link>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Register;
