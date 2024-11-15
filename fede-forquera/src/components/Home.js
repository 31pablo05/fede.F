import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="home">
            <Navbar />

            <header className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-r from-[#133838] to-[#2b6f6b]">
                <div className="flex w-full h-full relative">
                    <div 
                        className="flex-1 bg-cover bg-center bg-no-repeat bg-opacity-50"
                        style={{ backgroundImage: "url('../assets/images/fede10.jpg')", backgroundSize: "cover", backgroundPosition: "left" }}
                    />
                    <div 
                        className="flex-1 bg-cover bg-center bg-no-repeat bg-opacity-50"
                        style={{ backgroundImage: "url('../assets/images/fede17.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                    <div 
                        className="flex-1 bg-cover bg-center bg-no-repeat bg-opacity-50"
                        style={{ backgroundImage: "url('../assets/images/fede7.jpg')", backgroundSize: "cover", backgroundPosition: "right" }}
                    />
                </div>

                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
                    <h1 data-aos="fade-up" data-aos-duration="1500" className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg drop-shadow-2xl">
                        Welcome to My Photography Portfolio
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

            <section className="home-gallery py-12 px-5 bg-gray-900 text-white">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">My Latest Work</h2>
                
              {/* Photo Gallery */}
              <div className="photo-gallery mb-12">
    <h3 className="text-2xl font-semibold text-center mb-4">Photo Gallery</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <img src="../assets/images/jardinJapones/jar1.jpg" alt="photo1" className="w-full h-48 object-cover rounded-lg" />
        <img src="../assets/images/BarrioHistóricoEnColonia/col10.jpg" alt="photo2" className="w-full h-48 object-cover rounded-lg" />
        <img src="../assets/images/mc1.jpg" alt="photo3" className="w-full h-48 object-cover rounded-lg" />
        <img src="../assets/images/riv3.jpg" alt="photo4" className="w-full h-48 object-cover rounded-lg" />
        <img src="../assets/images/mc2.jpg" alt="photo5" className="w-full h-48 object-cover rounded-lg col-span-2" /> {/* Esta foto ocupa 2 columnas */}
        <img src="../assets/images/mc5.jpg" alt="photo6" className="w-full h-48 object-cover rounded-lg" />
        <img src="../assets/images/vod6.jpg" alt="photo7" className="w-full h-48 object-cover rounded-lg row-span-2" /> {/* Esta foto ocupa 2 filas */}
        <img src="../assets/images/neg2.jpg" alt="photo8" className="w-full h-48 object-cover rounded-lg" />
    </div>
</div>


                {/* Video Gallery */}
                <div className="video-gallery mb-12">
                    <h3 className="text-2xl font-semibold text-center mb-4">Video Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Videos */}
                        <div className="video-container relative group">
                            <iframe 
                                src="https://www.youtube.com/embed/VIDEO_ID_1" 
                                title="video1" 
                                className="w-full h-56 rounded-lg group-hover:scale-105 group-hover:brightness-75 transition-all duration-300" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                        </div>
                        <div className="video-container relative group">
                            <iframe 
                                src="https://www.youtube.com/embed/VIDEO_ID_2" 
                                title="video2" 
                                className="w-full h-56 rounded-lg group-hover:scale-105 group-hover:brightness-75 transition-all duration-300" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                        </div>
                        <div className="video-container relative group">
                            <iframe 
                                src="https://www.youtube.com/embed/VIDEO_ID_3" 
                                title="video3" 
                                className="w-full h-56 rounded-lg group-hover:scale-105 group-hover:brightness-75 transition-all duration-300" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                        </div>
                        <div className="video-container relative group">
                            <iframe 
                                src="https://www.youtube.com/embed/VIDEO_ID_4" 
                                title="video4" 
                                className="w-full h-56 rounded-lg group-hover:scale-105 group-hover:brightness-75 transition-all duration-300" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
