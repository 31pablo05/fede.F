import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function AboutMe() {
  return (
    <section id="about-me" className="bg-gradient-to-r from-[#379299] via-[#2b6f6b] to-[#1d5050] pt-16 py-16 px-8">
      <div className="container mx-auto">
        {/* Sección 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <img 
            src="/assets/images/fede/fede7.webp" 
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
            src="/assets/images/fede/fede12.webp" 
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
            <div>
              <img 
                src="/assets/images/fede/fede11.webp" 
                alt="Landscape" 
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede3.webp" 
                alt="Close-up portrait" 
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede13.webp" 
                alt="Cityscape with sunset" 
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede14.webp" 
                alt="Outdoor event" 
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede5.webp" 
                alt="Street photography" 
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede16.webp" 
                alt="Portrait with bokeh background" 
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" 
              />
            </div>
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
