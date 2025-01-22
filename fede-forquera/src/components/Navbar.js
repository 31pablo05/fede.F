import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-color-curvas.webp'; // Import your logo

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 py-4 transition-all duration-300 ${
                scrolling ? 'bg-black bg-opacity-70 shadow-lg' : 'bg-transparent text-white'
            } backdrop-blur-md`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-28 md:w-36" />
                </div>

                {/* Botón de menú móvil */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                {/* Menú de navegación */}
                <ul
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex md:items-center md:space-x-8 space-y-4 md:space-y-0 px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ${
                        menuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <li>
                        <Link
                            to="/"
                            className="text-lg font-semibold text-white transition-all duration-300 hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about-me"
                            className="text-lg font-semibold text-white transition-all duration-300 hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sobre mi
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            className="text-lg font-semibold text-white transition-all duration-300 hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-lg font-semibold text-white transition-all duration-300 hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
