import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; 
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <Router>
            <div className="App bg-[#1d5050] min-h-screen">
                {/* Componente Navbar */}
                <Navbar /> 

                {/* Rutas de la aplicación */}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Ruta raíz de la página de inicio */}
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>

                {/* Botón de WhatsApp */}
                <WhatsAppButton /> 

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
