import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; // Importa tu componente Navbar
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n'; // Importa la configuración de i18next

function App() {
    return (
        <Router>
            {/* Contenedor principal con fondo uniforme para toda la página */}
            <div className="bg-[#1d5050] min-h-screen"> {/* Fondo uniforme de color sólido */}
                {/* Navbar */}
                <Navbar /> {/* Coloca el Navbar aquí para que esté presente en todas las rutas */}

                {/* Aquí se coloca el contenido de la página con fondo también uniforme */}
                <div className="pt-16"> {/* Añadimos padding-top para evitar que la navbar tape el contenido */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/photo-gallery" element={<PhotoGallery />} />
                        <Route path="/video-gallery" element={<VideoGallery />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
