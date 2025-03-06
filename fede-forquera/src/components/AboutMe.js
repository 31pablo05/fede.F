import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function AboutMe() {
  return (
    <section id="about-me" className="bg-gradient-to-r from-[#379299] via-[#2b6f6b] to-[#1d5050] pt-16 py-16 px-8">
      <div className="container mx-auto">
        {/* Sección 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Imagen: aparece después en móviles, pero primero en desktop */}
          <img 
            src="/assets/images/fede/fede7.webp" 
            alt="Retrato profesional de Federico Forquera" 
            loading="lazy"
            className="order-last md:order-first w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0 transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl"
          />

          {/* Texto: aparece primero en móviles, pero después en desktop */}
          <div className="order-first md:order-last md:ml-8 text-white md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Hola, mi nombre es Federico Forquera
            </h2>
            <p className="text-lg leading-relaxed">
              Soy un fotógrafo apasionado por capturar momentos que cuentan una historia.
            </p>
          </div>
        </div>

        {/* Sección 2 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Bloque de texto: aparece primero en móviles y a la izquierda en desktop */}
          <div className="md:mr-8 text-white md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Apasionado por la Fotografía
            </h2>
            <p className="text-lg leading-relaxed">
              La fotografía es mi pasión. Desde retratos hasta paisajes, mi objetivo es contar historias cautivadoras a través de cada toma.
            </p>
          </div>
          {/* Imagen: aparece debajo en móviles y a la derecha en desktop */}
          <img 
            src="/assets/images/fede/fede12.webp" 
            alt="Acción fotográfica en campo" 
            loading="lazy"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0 transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Sección 3: Carrusel */}
        <div className="flex flex-col items-center">
          {/* Texto encima del carrusel */}
          <h2 className="text-2xl md:text-3xl text-center text-white leading-relaxed md:w-3/4 mb-6">
            La fotografía me permite ver el mundo desde diferentes perspectivas y capturar momentos que a menudo pasan desapercibidos.
          </h2>
          {/* Carrusel de imágenes */}
          <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000} className="w-full md:w-4/5">
            <div>
              <img 
                src="/assets/images/fede/fede11.webp" 
                alt="Paisaje natural" 
                loading="lazy"
                className="rounded-lg shadow-lg transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede3.webp" 
                alt="Retrato de cerca" 
                loading="lazy"
                className="rounded-lg shadow-lg transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede13.webp" 
                alt="Ciudad al atardecer" 
                loading="lazy"
                className="rounded-lg shadow-lg transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede14.webp" 
                alt="Evento al aire libre" 
                loading="lazy"
                className="rounded-lg shadow-lg transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede5.webp" 
                alt="Fotografía callejera" 
                loading="lazy"
                className="rounded-lg shadow-lg transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" 
              />
            </div>
            <div>
              <img 
                src="/assets/images/fede/fede16.webp" 
                alt="Retrato con fondo bokeh" 
                loading="lazy"
                className="rounded-lg shadow-lg transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" 
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
