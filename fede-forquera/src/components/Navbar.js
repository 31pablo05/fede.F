import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detecta el scroll para modificar la apariencia de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cuando se hace scroll, el fondo se transforma en un gradient
  const navClasses = scrolled 
    ? "bg-gradient-to-r from-black/80 to-[#379299] backdrop-blur-md shadow-lg p-4 transition-all duration-300 fixed top-0 left-0 right-0 z-50"
    : "bg-black/60 p-4 transition-all duration-300 fixed top-0 left-0 right-0 z-50";

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mi", path: "/AboutMe" },
    { name: "Portafolio", path: "/Portfolio" },
    { name: "Contacto", path: "/Contact" }
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo: Se agrega drop shadow para resaltarlo */}
        <Link to="/home">
          <img
            src="/assets/logo/logo-color-curvas.webp"
            alt="Logo"
            className="h-10 w-auto drop-shadow-lg"
          />
        </Link>

        {/* Botón para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  hover:text-[#379299] hover:border-b-2 hover:border-[#379299]"
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
                  className="block text-gray-300 font-semibold transition-all duration-300 
                    hover:text-[#379299] hover:border-b-2 hover:border-[#379299]"
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
