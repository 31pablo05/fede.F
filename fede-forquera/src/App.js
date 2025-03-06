import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; // Importa tu componente Navbar
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            {/* Contenedor principal con fondo uniforme para toda la página */}
            <div className="bg-[#1d5050] min-h-screen"> {/* Fondo uniforme de color sólido */}
                {/* Navbar */}
                <Navbar /> 

                {/* Aquí se coloca el contenido de la página con fondo también uniforme */}
                <div className="pt-4"> {/* Añadimos padding-top para evitar que la navbar tape el contenido */}
                    <Routes>
                        <Route path="/Inicio" element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/portfolio" element={<Portfolio />} />
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
