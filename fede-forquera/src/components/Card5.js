import React, { useState } from 'react';

const Card5 = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/eventoMC.webp/mc1.webp" 
        alt="Project preview" 
        className="w-full h-52 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">McDonald's Evento</h3>
        <p className="text-sm text-gray-600 mb-4">McDonald's Evento</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Hide Images" : "View More Images"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/assets/images/eventoMC.webp/mc1.webp" alt="Evento - Hamburguesa McDonald's" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc2.webp" alt="Evento - Participantes disfrutando" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc3.webp" alt="Evento - Preparación de hamburguesas" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc4.webp" alt="Evento - Cocinero sirviendo hamburguesas" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc5.webp" alt="Evento - Mesa con comida y bebidas" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc6.webp" alt="Evento - Grupo de personas disfrutando" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc8.webp" alt="Evento - Grupo de personas disfrutando" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc9.webp" alt="Evento - Grupo de personas disfrutando" className="w-full h-52 object-cover" />
            <img src="/assets/images/eventoMC.webp/mc10.webp" alt="Evento - Grupo de personas disfrutando" className="w-full h-52 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card5;
