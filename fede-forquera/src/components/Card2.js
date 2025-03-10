import React, { useState } from 'react';

const Card2 = () => {
  const [showImages, setShowImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src="/assets/images/McDonals2.webp/mac2.webp" 
        alt="Project preview" 
        className="w-full h-52 object-cover cursor-pointer"
        onClick={() => openModal("/assets/images/McDonals2.webp/mac2.webp")}
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">McDonald's</h3>
        <p className="text-sm text-gray-600 mb-4">Presentación de McDonald's</p>
        <button 
          onClick={() => setShowImages(prev => !prev)} 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          {showImages ? "Ocultar Imágenes" : "Ver más Imágenes"} &rarr;
        </button>
        {showImages && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "/assets/images/McDonals2.webp/mac1.webp",
              "/assets/images/McDonals2.webp/mac2.webp",
              "/assets/images/McDonals2.webp/mac3.webp",
              "/assets/images/McDonals2.webp/mac4.webp",
              "/assets/images/McDonals2.webp/mac5.webp",
              "/assets/images/McDonals2.webp/mac6.webp",
              "/assets/images/McDonals2.webp/mac7.webp",
              "/assets/images/McDonals2.webp/mac8.webp",
              "/assets/images/McDonals2.webp/mac9.webp"
            ].map((src, index) => (
              <img 
                key={index}
                src={src}
                alt={`McDonald's - Imagen ${index + 1}`}
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
          <div className="bg-white p-4 rounded">
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

export default Card2;
