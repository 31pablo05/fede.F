import React from 'react';
import '../styles/Footer.css';
import { ReactComponent as LinkedInIcon } from '../svg/icons8-linkedin.svg'; // Asegúrate de que la ruta sea correcta
import { ReactComponent as InstagramIcon } from '../svg/icons8-instagram.svg'; // Asegúrate de que la ruta sea correcta
import { ReactComponent as FacebookIcon } from '../svg/icons8-facebook.svg'; // Asegúrate de que la ruta sea correcta

function Footer() {
    return (
        <footer className="footer">
            <div className="example-2">
                <ul>
                    <li className="icon-content">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" data-social="linkedin">
                            <LinkedInIcon />
                            <div className="filled"></div>
                            <span className="tooltip">LinkedIn</span>
                        </a>
                    </li>
                    <li className="icon-content">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-social="instagram">
                            <InstagramIcon />
                            <div className="filled"></div>
                            <span className="tooltip">Instagram</span>
                        </a>
                    </li>
                    <li className="icon-content">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-social="facebook">
                            <FacebookIcon />
                            <div className="filled"></div>
                            <span className="tooltip">Facebook</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-info">
                <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                <p>Teléfono: (123) 456-7890</p>
                <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;
