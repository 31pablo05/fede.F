import React from 'react';
import { ReactComponent as LinkedInIcon } from '../svg/icons8-linkedin.svg';
import { ReactComponent as InstagramIcon } from '../svg/icons8-instagram.svg';
import { ReactComponent as FacebookIcon } from '../svg/icons8-facebook.svg';

const socialLinks = [
    {
        href: 'https://www.linkedin.com',
        label: 'LinkedIn',
        icon: <LinkedInIcon className="w-8 h-8" aria-label="LinkedIn" />,
        bgColor: 'bg-[#0274b3]',
        hoverColor: 'hover:bg-black',
        tooltip: 'LinkedIn'
    },
    {
        href: 'https://www.instagram.com',
        label: 'Instagram',
        icon: <InstagramIcon className="w-8 h-8" aria-label="Instagram" />,
        bgColor: 'bg-gradient-to-br from-[#405de6] to-[#fd1f1f]',
        hoverColor: 'hover:bg-black',
        tooltip: 'Instagram'
    },
    {
        href: 'https://www.facebook.com',
        label: 'Facebook',
        icon: <FacebookIcon className="w-8 h-8" aria-label="Facebook" />,
        bgColor: 'bg-[#3b5998]',
        hoverColor: 'hover:bg-black',
        tooltip: 'Facebook'
    }
];

const SocialIcon = ({ href, label, icon, bgColor, hoverColor, tooltip }) => (
    <a
        href={href}
        aria-label={label}
        className={`relative flex justify-center items-center w-14 h-14 rounded-full transition-transform transform hover:scale-110 ${bgColor} ${hoverColor}`}
        title={tooltip}
        target="_blank"
        rel="noopener noreferrer"
    >
        {icon}
        <div className="absolute bottom-0 left-0 w-14 h-14 bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-20"></div>
        <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-white px-3 py-2 text-sm rounded opacity-0 group-hover:opacity-100 group-hover:top-[-60px] transition-all duration-500 ease-in-out bg-gray-800">
            {tooltip}
        </span>
    </a>
);

function Footer() {
    return (
        <footer className="bg-[#379299] text-white py-8 w-full mt-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center">
                    <ul className="flex space-x-6">
                        {socialLinks.map((social, index) => (
                            <li key={index} className="relative group">
                                <SocialIcon {...social} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 text-center space-y-2">
                    <p className="text-lg">Dirección: Trelew, Chubut, Argentina</p>
                    <p className="text-lg">Teléfono: +54 11 456-7890</p>
                    <p className="text-lg">
                        Email: <a href="mailto:fedeforquera@gmail.com" className="text-blue-400 hover:underline">fedeforquera@gmail.com</a>
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-200">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
