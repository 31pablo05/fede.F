import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <header className="relative w-full" style={{ height: '150vh' }}>
      {/* Imagen de fondo */}
      <img
        src="/assets/images/fede/fede10-recortado.jpg"
        alt="Fondo"
        className="mb-8 absolute inset-0 w-full h-full object-cover md:object-top"
      />
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0"></div>

      {/* Contenido del Banner */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="overflow-hidden">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-2xl md:text-6xl font-bold mb-6 text-white font-poppins border-r-2 border-pink-500 whitespace-nowrap animate-typing neon-glow"
            style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            📸🎥Photographer & Filmmaker
          </h1>
        </div>
        <div className="overflow-hidden w-full px-4 flex justify-center">
  <p
    data-aos="fade-up"
    data-aos-duration="5000"
    className="text-base sm:text-lg md:text-xl font-medium mb-8 text-center text-white leading-tight max-w-xs sm:max-w-md md:max-w-lg"
    style={{
      overflow: 'hidden',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)',
    }}
  >
    "Capturando momentos que perduran para siempre."
  </p>
</div>

        <Link
          to="/about-me"
          data-aos="fade-up"
          data-aos-duration="2500"
          className="inline-block bg-gradient-to-r from-[#fbcfe8] via-[#f472b6] to-[#9333ea] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Leer más
        </Link>
      </div>
    </header>
  );
}

export default Banner;
