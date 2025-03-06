import React from 'react';
import { ReactComponent as LinkedInIcon } from '../svg/icons8-linkedin.svg';
import { ReactComponent as InstagramIcon } from '../svg/icons8-instagram.svg';
import { ReactComponent as FacebookIcon } from '../svg/icons8-facebook.svg';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/federico-forquera-9280b8203/',
    label: 'LinkedIn',
    icon: <LinkedInIcon className="w-8 h-8" aria-hidden="true" />,
    bgColor: 'bg-[#0274b3]',
    hoverColor: 'hover:bg-white',
    tooltip: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/fede_forquera/',
    label: 'Instagram',
    icon: <InstagramIcon className="w-8 h-8" aria-hidden="true" />,
    bgColor: 'bg-gradient-to-br from-[#405de6] to-[#fd1f1f]',
    hoverColor: 'hover:bg-white',
    tooltip: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/fede.forquera',
    label: 'Facebook',
    icon: <FacebookIcon className="w-8 h-8" aria-hidden="true" />,
    bgColor: 'bg-[#3b5998]',
    hoverColor: 'hover:bg-white',
    tooltip: 'Facebook',
  },
];

const SocialIcon = ({ href, label, icon, bgColor, hoverColor, tooltip }) => (
  <a
    href={href}
    aria-label={label}
    className={`group relative flex justify-center items-center w-14 h-14 rounded-full transition-transform transform hover:scale-110 ${bgColor} ${hoverColor}`}
    title={tooltip}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:top-[-50px] transition-all duration-300 ease-in-out whitespace-nowrap">
      {tooltip}
    </span>
  </a>
);

function Footer() {
  return (
    <footer className="bg-[#379299] text-white py-8 mt-10 border-t border-gray-300">
      <div className="container mx-auto px-4">
        {/* Contenedor principal de contacto e íconos */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Columna Izquierda: Datos de contacto */}
          <div className="md:w-1/2 text-left mb-6 md:mb-0">
            <p className="text-lg">Dirección: Trelew, Chubut, Argentina</p>
            <p className="text-lg">Teléfono: +54 11 456-7890</p>
            <p className="text-lg">
              Email:{' '}
              <a
                href="mailto:forquerafederico@gmail.com"
                className="text-blue-400 hover:underline"
              >
                fedeforquera@gmail.com
              </a>
            </p>
          </div>
          {/* Columna Derecha: Íconos sociales */}
          <div className="md:w-1/2 text-right">
            <ul className="flex justify-end space-x-6">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <SocialIcon {...social} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Texto inferior centrado */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-200">
            © 2025 Photographer & Filmmaker Federico Forquera. Todos los derechos reservados. | Desarrollado por Pablo Proboste
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
