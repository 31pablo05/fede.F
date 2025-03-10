import React, { useState } from 'react';

const Card5 = () => {
  const [showImages, setShowImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  // Array de imágenes adicionales
  const images = [
    "/assets/images/eventoMC.webp/mc1.webp",
    "/assets/images/eventoMC.webp/mc2.webp",
    "/assets/images/eventoMC.webp/mc3.webp",
    "/assets/images/eventoMC.webp/mc4.webp",
    "/assets/images/eventoMC.webp/mc5.webp",
    "/assets/images/eventoMC.webp/mc6.webp",
    "/assets/images/eventoMC.webp/mc8.webp",
    "/assets/images/eventoMC.webp/mc9.webp",
    "/assets/images/eventoMC.webp/mc10.webp"
  ];

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/eventoMC.webp/mc1.webp" 
        alt="Project preview" 
        className="w-full h-52 object-cover cursor-pointer"
        onClick={() => openModal("/assets/images/eventoMC.webp/mc1.webp")}
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">McDonald's Evento</h3>
        <p className="text-sm text-gray-600 mb-4">McDonald's Evento</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Ocultar Imágenes" : "Ver más Imágenes"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, index) => (
              <img 
                key={index}
                src={src}
                alt={`Evento - Imagen ${index + 1}`}
                className="w-full h-52 object-cover cursor-pointer"
                onClick={() => openModal(src)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Imagen completa" 
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card5;
