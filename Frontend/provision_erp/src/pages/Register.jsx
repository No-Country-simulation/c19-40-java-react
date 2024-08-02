import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';

const Register = () => {
    const [imgSrc, setImgSrc] = useState('https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-del-negro-avatar-perfil-de-usuario-121102131.jpg');
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        email: '',
        company: '',
        phone: '',
    });
    const [errors, setErrors] = useState({});

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

    const validate = () => {
        const newErrors = {};
        if (!formValues.username) newErrors.username = 'El nombre de usuario es requerido.';
        if (!formValues.password) newErrors.password = 'La contraseña es requerida.';
        if (formValues.password !== formValues.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden.';
        if (!formValues.fullName) newErrors.fullName = 'El nombre y apellidos son requeridos.';
        if (!formValues.email) {
            newErrors.email = 'El correo electrónico es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'El correo electrónico no es válido.';
        }
        if (!formValues.company) newErrors.company = 'El nombre de la empresa es requerido.';
        if (!formValues.phone) newErrors.phone = 'El teléfono es requerido.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Formulario válido:', formValues);
            // Aquí puedes enviar los datos del formulario al servidor
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-principal-color p-4">
                <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Contenedor de la imagen */}
                    <div className="hidden md:flex md:w-2/4 min-h-screen overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src="https://i.pinimg.com/originals/0b/d6/2f/0bd62f06eaa18de807b0bb1bbff58e30.jpg"
                            alt="Background"
                        />
                    </div>
                    {/* Contenedor del formulario */}
                    <div className="flex flex-col p-6 w-full md:w-2/3">
                        <h1 className="font-bold text-lg md:text-2xl mb-4">
                            <span className='text-principal-color'>P</span>ro<span className='text-principal-color'>V</span>ision
                        </h1>
                        <hr className='bg-black border-1 border-black w-full mb-4' />
                        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                            <section className='flex flex-col md:flex-row md:space-x-4'>
                                <div className='flex flex-col space-y-4 w-full md:w-1/2'>
                                    <h2 className='font-bold text-xs'>CREDENCIALES</h2>
                                    <div className='flex flex-col space-y-4'>
                                        <label className='font-bold text-xs'>Nombre de Usuario</label>
                                        <input type="text" name="username" value={formValues.username} onChange={handleChange} className='border-2 border-gray-500 rounded-sm p-2' />
                                        {errors.username && <p className='text-red-500 text-xs'>{errors.username}</p>}
                                        <label className='font-bold text-xs'>Ingrese su Contraseña</label>
                                        <input type="password" name="password" value={formValues.password} onChange={handleChange} className='border-2 border-gray-500 rounded-sm p-2' />
                                        {errors.password && <p className='text-red-500 text-xs'>{errors.password}</p>}
                                        <label className='font-bold text-xs'>Confirme su Contraseña</label>
                                        <input type="password" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} className='border-2 border-gray-500 rounded-sm p-2' />
                                        {errors.confirmPassword && <p className='text-red-500 text-xs'>{errors.confirmPassword}</p>}
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
                            <section className='flex flex-col md:space-y-4'>
                                <label className='font-bold text-xs'>Nombre y Apellidos</label>
                                <input type="text" name="fullName" value={formValues.fullName} onChange={handleChange} className='border-2 border-gray-500 rounded-sm p-2 w-full' />
                                {errors.fullName && <p className='text-red-500 text-xs'>{errors.fullName}</p>}
                                <label className='font-bold text-xs'>Correo Electrónico</label>
                                <input type="email" name="email" value={formValues.email} onChange={handleChange} className='border-2 border-gray-500 rounded-sm p-2 w-full' />
                                {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
                                <div className='flex flex-col md:flex-row md:space-x-4'>
                                    <div className='flex flex-col w-full md:w-1/2'>
                                        <label className='font-bold text-xs'>Nombre de Empresa</label>
                                        <input type="text" name="company" value={formValues.company} onChange={handleChange} className='border-2 border-gray-500 rounded-sm p-2 w-full' />
                                        {errors.company && <p className='text-red-500 text-xs'>{errors.company}</p>}
                                    </div>
                                    <div className='flex flex-col w-full md:w-1/2'>
                                        <label className='font-bold text-xs'>Teléfono</label>
                                        <input type="text" name="phone" value={formValues.phone} onChange={handleChange} className='border-2 border-gray-500 rounded-sm p-2 w-full' />
                                        {errors.phone && <p className='text-red-500 text-xs'>{errors.phone}</p>}
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <p className='text-center'>Al registrarse acepta los <span className='text-principal-color'>términos y condiciones</span></p>
                                    <div className='flex flex-row justify-between'>
                                        <Link to='/login' className='text-principal-color'>Ya tengo una cuenta</Link>
                                        <button type="submit" className='bg-principal-color hover:bg-blue-600 text-white px-10 py-1 rounded-lg'>Empezar ya</button>
                                    </div>
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
