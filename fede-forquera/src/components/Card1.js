import React, { useState } from 'react';

const Card1 = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/Maraton-asics/mar1.jpg" 
        alt="Project preview" 
        className="w-full h-52 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">Maraton asics</h3>
        <p className="text-sm text-gray-600 mb-4">Asics Maraton 2024</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Hide Images" : "View More Images"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/assets/images/Maraton-asics/mar1.jpg" alt="Maratón Asics - Vista previa del evento" className="w-full h-52 object-cover" />
            <img src="/assets/images/Maraton-asics/mar2.jpg" alt="Maratón Asics - Participantes corriendo" className="w-full h-52 object-cover" />
            <img src="/assets/images/Maraton-asics/mar3.jpg" alt="Maratón Asics - Línea de meta" className="w-full h-52 object-cover" />
            <img src="/assets/images/Maraton-asics/mar4.jpg" alt="Maratón Asics - Medallas y premios" className="w-full h-52 object-cover" />
            <img src="/assets/images/Maraton-asics/mar5.jpg" alt="Maratón Asics - Público animando" className="w-full h-52 object-cover" />
            <img src="/assets/images/Maraton-asics/mar6.jpg" alt="Maratón Asics - Zona de inscripción" className="w-full h-52 object-cover" />
            <img src="/assets/images/Maraton-asics/mar7.jpg" alt="Maratón Asics - Equipo organizador" className="w-full h-52 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card1;
