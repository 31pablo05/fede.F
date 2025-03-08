import React, { useState } from 'react';

const Card4 = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/TeatroCiego.webp/go7.webp" 
        alt="Project preview" 
        className="w-full h-52 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">Google Teatro Ciego</h3>
        <p className="text-sm text-gray-600 mb-4">Google Teatro Ciego</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Hide Images" : "View More Images"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <img src="/assets/images/TeatroCiego.webp/go1.webp" alt="Teatro Ciego - Escenario oscuro" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go2.webp" alt="Teatro Ciego - Escenario oscuro" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go3.webp" alt="Teatro Ciego - Escenario oscuro" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go4.webp" alt="Teatro Ciego - Escenario oscuro" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go5.webp" alt="Teatro Ciego - Escenario oscuro" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go6.webp" alt="Teatro Ciego - Actores en escena" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go7.webp" alt="Teatro Ciego - Detalle de interpretación" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go8.webp" alt="Teatro Ciego - Público disfrutando" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go9.webp" alt="Teatro Ciego - Escena artística" className="w-full h-52 object-cover" />
            <img src="/assets/images/TeatroCiego.webp/go10.webp" alt="Teatro Ciego - Escenario vacío" className="w-full h-52 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card4;
