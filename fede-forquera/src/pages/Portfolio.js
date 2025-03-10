// Portfolio.js
import React from 'react';
import BannerVideo from '../components/BannerVideo';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import Card6 from '../components/Card6';

function Portfolio() {
  return (
    <section id="portfolio" className="bg-blue-100 py-24">
      {/* Banner Video */}
      <BannerVideo />

      {/* Header */}
      <div className="mt-10 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-[#379299] drop-shadow-md">
          Mis Trabajos y Experiencias
        </h2>
        <p className="text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#379299] drop-shadow-sm mb-10">
          Descubre algunos de mis proyectos más creativos e impactantes.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </section>
  );
}

export default Portfolio;
