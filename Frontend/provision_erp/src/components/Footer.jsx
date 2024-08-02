// Footer.jsx
import React from 'react';
import { Link} from 'react-router-dom';


const Footer = () => {
    return (

        <footer className="flex flex-col space-y-4 bg-principal-color py-6 px-4 mt-4 bottom-0 left-0 w-full">

            <div className="flex flex-wrap justify-between">

                <div className="flex flex-col space-y-4 text-white w-full sm:w-auto">
                    <p className="text-2xl sm:text-4xl font-bold">ProVision</p>
                    <p className="text-lg sm:text-sm">Creando posibilidades <br />mejorando para el mundo</p>
                    <p className="text-lg font-bold">Hazlo!</p>
                </div>

                <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                    <p className="text-lg font-bold">Explore</p>
                    <Link to="/" className="text-lghover:underline">Inicio</Link>
                    <Link to="/about" className="text-lghover:underline">Sobre Nosotros</Link>
                    <Link to="/contact" className="text-lghover:underline">Funcionalidades</Link>
                    <Link to="/features" className="text-lghover:underline">Contactanos</Link>
                </div>     

                <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                    <p className="text-lg font-bold">Politicas</p>
                    <a href="#" className="text-lg hover:underline">Terminos</a>
                    <a href="#" className="text-lghover:underline">Privacidad</a>
                </div>

                <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                    <p className="text-lg font-bold">Siguenos</p>
                    <a href="#" className="text-lg hover:underline">Instagram</a>
                    <a href="#" className="text-lg hover:underline">Twitter</a>
                    <a href="#" className="text-lg hover:underline">LinkedIn</a>
                </div>

            </div>

            <hr className='border-1 border-white'/>

            <p className='text-white text-center'>Copyright@2024 Todos los derechos reservados</p>

        </footer>
    );
};

export default Footer;
