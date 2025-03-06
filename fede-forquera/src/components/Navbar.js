import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Inicio", path: "/Inicio" },
    { name: "Sobre mi", path: "/about-me" },
    { name: "Portafolio", path: "/portfolio" },
    { name: "Contacto", path: "/contact" }
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/home">
          <img
            src="/assets/logo/logo-color-curvas.webp"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Botón para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú principal */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="relative text-gray-300 font-semibold transition-all duration-300 
                hover:text-[#379299] hover:underline hover:underline-offset-8"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 font-semibold hover:text-[#379299] hover:underline hover:underline-offset-8"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;