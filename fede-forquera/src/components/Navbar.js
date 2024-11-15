import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-color-curvas.png'; // Import your logo

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

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

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 w-full z-50 py-4 transition-all duration-300 ${scrolling ? 'bg-black bg-opacity-70 shadow-lg' : 'bg-transparent text-white'} ${scrolling ? 'border-gray-700' : ''} backdrop-blur-md`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo en la barra de navegación */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-32 md:w-40" />
                </div>

                <ul className="flex space-x-8">
                    <li>
                        <Link 
                            to="/" 
                            className="text-lg font-semibold transition-all duration-300 hover:text-white hover:scale-105"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about-me" 
                            className="text-lg font-semibold transition-all duration-300 hover:text-white hover:scale-105"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/portfolio" 
                            className="text-lg font-semibold transition-all duration-300 hover:text-white hover:scale-105"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className="text-lg font-semibold transition-all duration-300 hover:text-white hover:scale-105"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
