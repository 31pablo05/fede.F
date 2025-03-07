import React, { useState } from 'react';

const Card2 = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/McDonalds2/mac2.jpg" 
        alt="Project preview" 
        className="w-full h-52 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">McDonald's</h3>
        <p className="text-sm text-gray-600 mb-4">Presentación de McDonald's</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Hide Images" : "View More Images"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="/assets/images/McDonalds2/mac2.jpg" alt="McDonald's - Diseño interactivo de menú" className="w-full h-52 object-cover" />
            <img src="/assets/images/McDonalds2/mac1.jpg" alt="McDonald's - Página principal del sitio" className="w-full h-52 object-cover" />
            <img src="/assets/images/McDonalds2/mac3.jpg" alt="McDonald's - Sección de promociones" className="w-full h-52 object-cover" />
            <img src="/assets/images/McDonalds2/mac4.jpg" alt="McDonald's - Vista móvil de la aplicación" className="w-full h-52 object-cover" />
            <img src="/assets/images/McDonalds2/mac5.jpg" alt="McDonald's - Diseño del carrito de compras" className="w-full h-52 object-cover" />
            <img src="/assets/images/McDonalds2/mac6.jpg" alt="McDonald's - Página de contacto" className="w-full h-52 object-cover" />
            <img src="/assets/images/McDonalds2/mac7.jpg" alt="McDonald's - Detalles del producto" className="w-full h-52 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card2;
