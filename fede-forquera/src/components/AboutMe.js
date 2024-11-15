import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import profileImg1 from '../assets/images/fede/fede7.jpg';
import profileImg2 from '../assets/images/fede/fede12.jpg';
import profileImg3 from '../assets/images/fede/fede5.jpg';
import profileImg4 from '../assets/images/fede/fede16.jpg';
import profileImg5 from '../assets/images/fede/fede11.jpg';
import profileImg6 from '../assets/images/fede/fede3.jpg';
import profileImg7 from '../assets/images/fede/fede13.jpg';
import profileImg8 from '../assets/images/fede/fede14.jpg';

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
                        <h2 className="text-4xl font-bold mb-4 text-shadow-lg">Hello, I'm [Photographer's Name]</h2>
                        <p className="text-lg leading-relaxed">
                            I'm a passionate photographer with a love for capturing moments that tell a story.
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
                        <h2 className="text-4xl font-bold mb-4 text-shadow-lg">Passionate About Photography</h2>
                        <p className="text-lg leading-relaxed">
                            Photography is my passion. From portraits to landscapes, my goal is to tell compelling stories through each shot.
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
                    </Carousel>
                    <p className="text-lg text-center text-white leading-relaxed md:w-3/4 mt-6">
                        Photography allows me to see the world from different perspectives and capture moments often overlooked.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
