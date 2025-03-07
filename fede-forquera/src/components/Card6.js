import React, { useState } from 'react';

const Card6 = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/Vodcast/vod6.jpg" 
        alt="Project preview" 
        className="w-full h-52 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">Vodcast</h3>
        <p className="text-sm text-gray-600 mb-4">Vodcast</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Hide Images" : "View More Images"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/assets/images/Vodcast/vod1.jpg" alt="Vodcast - Escena grabada" className="w-full h-52 object-cover" />
            <img src="/assets/images/Vodcast/vod2.jpg" alt="Vodcast - Entrevista en estudio" className="w-full h-52 object-cover" />
            <img src="/assets/images/Vodcast/vod3.jpg" alt="Vodcast - Panel de discusión" className="w-full h-52 object-cover" />
            <img src="/assets/images/Vodcast/vod4.jpg" alt="Vodcast - Presentador en el set" className="w-full h-52 object-cover" />
            <img src="/assets/images/Vodcast/vod5.jpg" alt="Vodcast - Momentos de grabación" className="w-full h-52 object-cover" />
            <img src="/assets/images/Vodcast/vod7.jpg" alt="Vodcast - Equipo técnico en acción" className="w-full h-52 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card6;
