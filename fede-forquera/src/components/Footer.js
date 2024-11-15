import React from 'react';
import { ReactComponent as LinkedInIcon } from '../svg/icons8-linkedin.svg'; 
import { ReactComponent as InstagramIcon } from '../svg/icons8-instagram.svg'; 
import { ReactComponent as FacebookIcon } from '../svg/icons8-facebook.svg'; 

function Footer() {
    return (
        <footer className="bg-[#379299] text-white py-8 w-full mt-10">
            <div className="flex justify-center items-center">
                <ul className="flex space-x-6 p-0 m-0">
                    <li className="relative group">
                        <a 
                            href="https://www.linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="relative flex justify-center items-center w-14 h-14 rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out hover:shadow-[3px_2px_45px_0px_rgb(0_0_0/_12%)]">
                            <LinkedInIcon className="relative z-10 w-8 h-8" aria-label="LinkedIn" />
                            {/* Fondo negro solo detrás del icono */}
                            <div className="absolute bottom-0 left-0 w-14 h-14 bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-20"></div>
                            <span className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-white bg-[#0274b3] px-3 py-2 rounded opacity-0 group-hover:opacity-100 group-hover:top-[-50px] transition-all duration-500 ease">LinkedIn</span>
                        </a>
                    </li>
                    <li className="relative group">
                        <a 
                            href="https://www.instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="relative flex justify-center items-center w-14 h-14 rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out hover:shadow-[3px_2px_45px_0px_rgb(0_0_0/_12%)]">
                            <InstagramIcon className="relative z-10 w-8 h-8" aria-label="Instagram" />
                            {/* Fondo negro solo detrás del icono */}
                            <div className="absolute bottom-0 left-0 w-14 h-14 bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-20"></div>
                            <span className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-white bg-gradient-to-br from-[#405de6] to-[#fd1f1f] px-3 py-2 rounded opacity-0 group-hover:opacity-100 group-hover:top-[-50px] transition-all duration-500 ease">Instagram</span>
                        </a>
                    </li>
                    <li className="relative group">
                        <a 
                            href="https://www.facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="relative flex justify-center items-center w-14 h-14 rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out hover:shadow-[3px_2px_45px_0px_rgb(0_0_0/_12%)]">
                            <FacebookIcon className="relative z-10 w-8 h-8" aria-label="Facebook" />
                            {/* Fondo negro solo detrás del icono */}
                            <div className="absolute bottom-0 left-0 w-14 h-14 bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-20"></div>
                            <span className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-white bg-[#3b5998] px-3 py-2 rounded opacity-0 group-hover:opacity-100 group-hover:top-[-50px] transition-all duration-500 ease">Facebook</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-8 text-center">
                <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                <p>Teléfono: (123) 456-7890</p>
                <p>Email: <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">your-email@example.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;
