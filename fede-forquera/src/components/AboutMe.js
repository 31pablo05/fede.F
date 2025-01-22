import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import profileImg1 from '../assets/images/fede/fede7.webp';
import profileImg2 from '../assets/images/fede/fede12.webp';
import profileImg3 from '../assets/images/fede/fede5.webp';
import profileImg4 from '../assets/images/fede/fede16.webp';
import profileImg5 from '../assets/images/fede/fede11.webp';
import profileImg6 from '../assets/images/fede/fede3.webp';
import profileImg7 from '../assets/images/fede/fede13.webp';
import profileImg8 from '../assets/images/fede/fede14.webp';

function AboutMe() {
    return (
        <section id="about-me" className="bg-gradient-to-r from-[#379299] via-[#2b6f6b] to-[#1d5050] pt-16 py-16 px-8">
            <div className="container mx-auto">
                {/* Sección 1 */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                    <img 
                        src={profileImg1} 
                        alt="Photographer's portrait" 
                        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0 transform transition-transform duration-300 hover:scale-105"
                    />
                    <div className="md:ml-8 text-white md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4 text-shadow-lg">Hola mi nombre es Federico Forquera</h2>
                        <p className="text-lg leading-relaxed">
                            
                            Soy un fotógrafo apasionado por capturar momentos que cuentan una historia.
                        </p>
                    </div>
                </div>

                {/* Sección 2 */}
                <div className="flex flex-col md:flex-row items-center md:flex-row-reverse mb-12">
                    <img 
                        src={profileImg2} 
                        alt="Photographer shooting" 
                        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0 transform transition-transform duration-300 hover:scale-105"
                    />
                    <div className="md:mr-8 text-white md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4 text-shadow-lg">Apasionado por la Fotografía</h2>
                        <p className="text-lg leading-relaxed">
                        La fotografía es mi pasión. Desde retratos hasta paisajes, mi objetivo es contar historias cautivadoras a través de cada toma.
                        </p>
                    </div>
                </div>

                {/* Sección 3: Carrusel */}
                <div className="flex flex-col items-center">
                    <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000} className="w-full md:w-4/5">
                        <div><img src={profileImg5} alt="Landscape" className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" /></div>
                        <div><img src={profileImg6} alt="Close-up portrait" className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" /></div>
                        <div><img src={profileImg7} alt="Cityscape with sunset" className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" /></div>
                        <div><img src={profileImg8} alt="Outdoor event" className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" /></div>
                        <div><img src={profileImg3} alt="Street photography" className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" /></div>
                        <div><img src={profileImg4} alt="Portrait with bokeh background" className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" /></div>
                    </Carousel>
                    <p className="text-lg text-center text-white leading-relaxed md:w-3/4 mt-6">
                    La fotografía me permite ver el mundo desde diferentes perspectivas y capturar momentos que a menudo pasan desapercibidos.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
