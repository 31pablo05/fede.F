import React, { useState } from 'react';

const Card3 = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/negroni-local/neg10.jpg" 
        alt="Project preview" 
        className="w-full h-52 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">Negroni</h3>
        <p className="text-sm text-gray-600 mb-4">Negroni Local</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Hide Images" : "View More Images"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/assets/images/negroni-local/neg10.jpg" alt="Negroni Local - Fachada del establecimiento" className="w-full h-52 object-cover" />
            <img src="/assets/images/negroni-local/neg9.jpg" alt="Negroni Local - Interior moderno" className="w-full h-52 object-cover" />
            <img src="/assets/images/negroni-local/neg6.jpg" alt="Negroni Local - Barra de bebidas" className="w-full h-52 object-cover" />
            <img src="/assets/images/negroni-local/neg8.jpg" alt="Negroni Local - Área para clientes" className="w-full h-52 object-cover" />
            <img src="/assets/images/negroni-local/neg7.jpg" alt="Negroni Local - Decoración contemporánea" className="w-full h-52 object-cover" />
            <img src="/assets/images/negroni-local/neg3.jpg" alt="Negroni Local - Zona de mesas" className="w-full h-52 object-cover" />
            <img src="/assets/images/negroni-local/neg4.jpg" alt="Negroni Local - Iluminación nocturna" className="w-full h-52 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card3;
