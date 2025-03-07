import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';

function Portfolio() {
  return (
    <section id="portfolio" className="bg-blue-100 py-12">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Mis Trabajos y Experiencias
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10">
        Descubre algunos de mis proyectos más creativos e impactantes.
      </p>

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
