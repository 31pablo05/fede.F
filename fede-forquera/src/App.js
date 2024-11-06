import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/photo-gallery" element={<PhotoGallery />} />
                    <Route path="/video-gallery" element={<VideoGallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
