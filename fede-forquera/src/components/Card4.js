import React, { useState } from 'react';

const Card4 = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/googleTeatroCiego/go1.jpg" 
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
            <img src="/assets/images/googleTeatroCiego/go2.jpg" alt="Teatro Ciego - Escenario oscuro" className="w-full h-52 object-cover" />
            <img src="/assets/images/googleTeatroCiego/go8.jpg" alt="Teatro Ciego - Actores en escena" className="w-full h-52 object-cover" />
            <img src="/assets/images/googleTeatroCiego/go4.jpg" alt="Teatro Ciego - Detalle de interpretación" className="w-full h-52 object-cover" />
            <img src="/assets/images/googleTeatroCiego/go5.jpg" alt="Teatro Ciego - Público disfrutando" className="w-full h-52 object-cover" />
            <img src="/assets/images/googleTeatroCiego/go6.jpg" alt="Teatro Ciego - Escena artística" className="w-full h-52 object-cover" />
            <img src="/assets/images/googleTeatroCiego/go7.jpg" alt="Teatro Ciego - Escenario vacío" className="w-full h-52 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card4;
