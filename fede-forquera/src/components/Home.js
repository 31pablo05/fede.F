import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importar las imágenes y el video
import jar1 from '../assets/images/jardinJapones/jar1.webp';
import go7 from '../assets/images/go7.webp';
import mc1 from '../assets/images/mc1.webp';
import riv3 from '../assets/images/riv3.webp';
import mc2 from '../assets/images/mc2.webp';
import mc5 from '../assets/images/mc5.webp';
import vod6 from '../assets/images/vod6.webp';
import neg2 from '../assets/images/neg2.webp';
import vod2 from '../assets/images/vod2.webp';
import col10 from '../assets/images/BarrioHistóricoEnColonia/col10.webp';
import fondoVideo from '../assets/videos/fondoVideo.mp4';
import video1 from '../assets/videos/vid1.mp4';
import video2 from '../assets/videos/vid2.mp4';
import video3 from '../assets/videos/vid3.mp4';
import video4 from '../assets/videos/vid4.mp4';

function Home() {
    useEffect(() => {
        AOS.init();
        return () => {
            AOS.refresh();
        };
    }, []);

    const videoSources = useMemo(() => [video1, video2, video3, video4], []);


    return (
        <div className="home">
            <Navbar />

            <header className="relative flex items-center justify-center w-full" style={{ height: '150vh' }}>

                <div className="flex w-full h-full relative">
                <div 
    className="flex-1"
    style={{ 
        backgroundImage: `url('/assets/images/fede10.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center -350px', // Ajuste con valor negativo en px
        backgroundRepeat: 'no-repeat'
    }}
/>

                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
                    <h1 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        className="text-2xl md:text-6xl font-bold mb-6 text-white font-poppins overflow-hidden border-r-2 border-pink-500 whitespace-nowrap animate-typing neon-glow"
                    >
                        📸🎥 Photographer & Filmmaker
                    </h1>

                    <p data-aos="fade-up" data-aos-duration="2000" className="text-lg md:text-xl  font-light mb-8 opacity-90">
                    "Capturando momentos que perduran para siempre."
                    </p>
                    <Link to="/about-me" className="inline-block bg-gradient-to-r from-[#fbcfe8] via-[#f472b6] to-[#9333ea] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r transition-all duration-300">
                        Leer más
                    </Link>
                </div>
            </header>

            <section className="gallery-section relative py-12 px-5 text-white overflow-hidden">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-none opacity-60"
                >
                    <source src={fondoVideo} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>

                <div className="relative z-10">
                    

                    <div className="photo-gallery mb-10 mt-10" >
                        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">📸 Galeria de Fotos</h3>
                       
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {[jar1, go7, mc1, riv3, col10, mc2, mc5, vod6, neg2, vod2].map((src, index) => (
                                <img 
                                    key={index} 
                                    src={src} 
                                    alt={`photo${index + 1}`} 
                                    className="w-full h-auto object-cover rounded-lg border-2 border-[#379299] transition-all duration-300 transform hover:scale-105 hover:brightness-75" 
                                />
                            ))}
                        </div>
                    </div>

                    <div className="video-gallery pt-20 mt-20 mb-20">
    <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">🎬 Galeria de Videos</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
        {videoSources.map((videoSrc, index) => (
            <div 
                className="video-container relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#379299]" 
                key={index}
            >
                <video 
                    src={videoSrc} 
                    controls 
                    className="w-full h-[600px] object-cover rounded-t-lg" 
                    style={{ objectFit: "contain" }}  // Mantiene la relación de aspecto sin perder calidad
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <p 
                    className="absolute bottom-0 left-0 right-0 bg-[#379299] bg-opacity-90 text-white text-center py-2 font-medium text-sm transition-transform duration-300 group-hover:translate-y-0 transform translate-y-full"
                >
                    Video {index + 1}
                </p>
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
