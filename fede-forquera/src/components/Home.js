import React, { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../components/Banner'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  const videoSources = useMemo(
    () => [
      '/assets/videos/vid1.mp4',
      '/assets/videos/vid2.mp4',
      '/assets/videos/vid3.mp4',
      '/assets/videos/vid4.mp4',
    ],
    []
  );

  const photoSources = useMemo(
    () => [
      '/assets/images/jardinJapones/jar1.webp',
      '/assets/images/go7.webp',
      '/assets/images/mc1.webp',
      '/assets/images/riv3.webp',
      '/assets/images/BarrioHistóricoEnColonia/col10.webp',
      '/assets/images/mc2.webp',
      '/assets/images/mc5.webp',
      '/assets/images/vod6.webp',
      '/assets/images/neg2.webp',
      '/assets/images/vod2.webp',
    ],
    []
  );

  return (
    <div className=" home">
      {/* Banner con la imagen de fondo y el mensaje */}
      <Banner />

      {/* Sección de Galería */}
      <section className="mt-10 gallery-section relative py-12 px-5 text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source src="/assets/videos/fondoVideo.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        <div className="relative z-10">
          {/* Galería de Fotos */}
          <div className="photo-gallery mb-10 mt-10">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              📸 Galería de Fotos
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {photoSources.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`photo${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg border-2 border-[#379299] transition-all duration-300 transform hover:scale-105 hover:brightness-75"
                />
              ))}
            </div>
          </div>

          {/* Galería de Videos */}
          <div className="video-gallery pt-20 mt-20 mb-20">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              🎬 Galería de Videos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
              {videoSources.map((videoSrc, index) => (
                <div
                  className="video-container relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#379299]"
                  key={index}
                >
                  <video
                    src={videoSrc}
                    controls
                    className="w-full h-[600px] object-cover rounded-t-lg"
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <p className="absolute bottom-0 left-0 right-0 bg-[#379299] bg-opacity-90 text-white text-center py-2 font-medium text-sm transition-transform duration-300 group-hover:translate-y-0 transform translate-y-full">
                    Video {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

