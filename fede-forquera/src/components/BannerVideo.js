// BannerVideo.js
import React from 'react';

const BannerVideo = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
      <video
        className=" w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/videos/fondoVideo.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      {/* Overlay para oscurecer el video y mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default BannerVideo;
