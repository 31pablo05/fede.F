import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importar las imágenes y el video
import jar1 from '../assets/images/jar1.jpg';
import go7 from '../assets/images/go7.jpg';
import mc1 from '../assets/images/mc1.jpg';
import riv3 from '../assets/images/riv3.jpg';
import mc2 from '../assets/images/mc2.jpg';
import mc5 from '../assets/images/mc5.jpg';
import vod6 from '../assets/images/vod6.jpg';
import neg2 from '../assets/images/neg2.jpg';
import col10 from '../assets/images/BarrioHistóricoEnColonia/col10.jpg';
import fondoVideo from '../assets/videos/fondoVideo.mp4';

function Home() {
    useEffect(() => {
        AOS.init();
        return () => {
            AOS.refresh();
        };
    }, []);

    const videoSources = useMemo(() => [
        "VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3", "VIDEO_ID_4"
    ], []);

    return (
        <div className="home">
            <Navbar />

            <header className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-r from-[#133838] to-[#2b6f6b]">
                <div className="flex w-full h-full relative">
                    <div 
                        className="flex-1 bg-cover bg-center bg-no-repeat bg-opacity-50"
                        style={{ backgroundImage: "url('/assets/images/fede10.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                    <div 
                        className="flex-1 bg-cover bg-center bg-no-repeat bg-opacity-50"
                        style={{ backgroundImage: "url('/assets/images/fede17.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                    <div 
                        className="flex-1 bg-cover bg-center bg-no-repeat bg-opacity-50"
                        style={{ backgroundImage: "url('/assets/images/fede7.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                </div>

                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
                    <h1 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        className="text-5xl md:text-6xl font-bold mb-6 text-white font-poppins overflow-hidden border-r-2 border-pink-500 whitespace-nowrap animate-typing neon-glow"
                    >
                        📸🎥 Photographer & Filmmaker
                    </h1>

                    <p data-aos="fade-up" data-aos-duration="2000" className="text-lg md:text-xl font-light mb-8 opacity-90">
                        Capturing moments that last a lifetime.
                    </p>
                    <Link to="/about-me" className="inline-block bg-gradient-to-r from-[#fbcfe8] via-[#f472b6] to-[#9333ea] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r transition-all duration-300">
                        Learn More
                    </Link>
                </div>

                <div className="absolute top-0 left-0 w-full h-full blurred-background"></div>
            </header>

            <section className="gallery-section relative py-12 px-5 text-white overflow-hidden">
                {/* Video de fondo que abarca ambas secciones */}
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-none opacity-60"
                >
                    <source src={fondoVideo} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>

                {/* Capa de contenido */}
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">My Latest Work</h2>

                    {/* Photo Gallery */}
                    <div className="photo-gallery mb-12">
                        <h3 className="text-2xl font-semibold text-center mb-4">Photo Gallery</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {[jar1, go7, mc1, riv3, col10, mc2, mc5, vod6, neg2].map((src, index) => (
                                <img 
                                    key={index} 
                                    src={src} 
                                    alt={`photo${index + 1}`} 
                                    className="w-full h-auto object-cover rounded-lg border-2 border-[#379299] transition-all duration-300 transform hover:scale-105 hover:brightness-75" 
                                />
                            ))}
                        </div>
                    </div>

                    {/* Video Gallery */}
                    <div className="video-gallery">
                        <h3 className="text-2xl font-semibold text-center mb-4">Video Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {videoSources.map((videoId, index) => (
                                <div className="video-container relative group" key={index}>
                                    <iframe 
                                        src={`https://www.youtube.com/embed/${videoId}`} 
                                        title={`video${index + 1}`} 
                                        className="w-full h-56 rounded-lg group-hover:scale-105 group-hover:brightness-75 transition-all duration-300" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
