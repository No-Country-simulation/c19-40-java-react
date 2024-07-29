// Footer.jsx
import React from 'react';

const Footer = () => {
    return (

        <footer className="flex flex-wrap justify-between bg-principal-color py-6 px-4 mt-4 bottom-0 left-0 w-full">

            <div className="flex flex-col space-y-4 text-white w-full sm:w-auto">
                <p className="text-2xl sm:text-4xl font-bold">ProVision</p>
                <p className="text-lg sm:text-sm">We create possibilities <br />for the connected world</p>
                <p className="text-lg font-bold">Be Bold</p>
            </div>

            <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                <p className="text-lgfont-bold">Explore</p>
                <a href="#" className="text-lghover:underline">Home</a>
                <a href="#" className="text-lghover:underline">About</a>
                <a href="#" className="text-lghover:underline">Capabilities</a>
                <a href="#" className="text-lghover:underline">Careers</a>
            </div>

            <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                <p className="text-lgfont-bold">Visit</p>
                <p className="text-xs">Envoy So. California <br />34 Tesla, Ste 100 <br />Irvine, Ca, USA 92618</p>
                <p className="text-lg font-bold">New Business</p>
                <p className="text-xs">engage@weareeenvoy.com <br />949.333.3106</p>
            </div>

            <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                <p className="text-lgfont-bold">Follow</p>
                <a href="#" className="text-lg hover:underline">Instagram</a>
                <a href="#" className="text-lg hover:underline">Twitter</a>
                <a href="#" className="text-lg hover:underline">LinkedIn</a>
            </div>

            <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                <p className="text-xs font-bold">Policies</p>
                <a href="#" className="text-lg hover:underline">Terms</a>
                <a href="#" className="text-lghover:underline">Privacy</a>
            </div>

            <div className="flex flex-col space-y-6 text-white w-full sm:w-auto">
                <p className="text-lg font-bold">Next: About</p>
                <hr className="border-1 bg-white"/>
            </div>

        </footer>
    );
};

export default Footer;
