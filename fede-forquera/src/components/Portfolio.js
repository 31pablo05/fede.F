import React, { useState } from 'react';

function Portfolio() {
    // Estado para gestionar la visibilidad de las imágenes
    const [showImagesA, setShowImagesA] = useState(false);
    const [showImagesB, setShowImagesB] = useState(false);
    const [showImagesC, setShowImagesC] = useState(false);
    const [showImagesD, setShowImagesD] = useState(false);
    const [showImagesE, setShowImagesE] = useState(false);
    const [showImagesF, setShowImagesF] = useState(false);

    // Función para cambiar el estado de las imágenes
    const handleViewMore = (setShowImages) => {
        setShowImages((prev) => !prev);
    };

    return (
        <section id="portfolio" className="bg-blue-100 py-12">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Portfolio</h2>
            <p className="text-lg text-center text-gray-600 mb-10">Descubre algunos de mis proyectos más creativos e impactantes.</p>

            {/* Portfolio Grid */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                
                {/* Project Card 1 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="/assets/images/Maraton-asics/mar1.jpg" alt="Project preview" className="w-full h-52 object-cover" />

                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Maraton asics</h3>
                        <p className="text-sm text-gray-600 mb-4">Asics Maraton 2024</p>
                        
                        {/* Botón View More */}
                        <button 
                            onClick={() => handleViewMore(setShowImagesA)} 
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            {showImagesA ? "Hide Images" : "View More Images"} &rarr;
                        </button>

                        {/* Mostrar más imágenes cuando se hace clic */}
                        {showImagesA && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Project Card 1: Maratón Asics */}
                                <img src="/assets/images/Maraton-asics/mar1.jpg" alt="Maratón Asics - Vista previa del evento" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Maraton-asics/mar2.jpg" alt="Maratón Asics - Participantes corriendo" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Maraton-asics/mar3.jpg" alt="Maratón Asics - Línea de meta" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Maraton-asics/mar4.jpg" alt="Maratón Asics - Medallas y premios" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Maraton-asics/mar5.jpg" alt="Maratón Asics - Público animando" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Maraton-asics/mar6.jpg" alt="Maratón Asics - Zona de inscripción" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Maraton-asics/mar7.jpg" alt="Maratón Asics - Equipo organizador" className="w-full h-52 object-cover" />
                                                                
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="/assets/images/McDonalds2/mac2.jpg" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">McDonald's</h3>
                        <p className="text-sm text-gray-600 mb-4">Presentación de McDonald's</p>
                        
                        <button 
                            onClick={() => handleViewMore(setShowImagesB)} 
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            {showImagesB ? "Hide Images" : "View More Images"} &rarr;
                        </button>

                        {showImagesB && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                               {/* Project Card 2: McDonald's */}
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

                {/* Project Card 3 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="/assets/images/negroni-local/neg10.jpg" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Negroni </h3>
                        <p className="text-sm text-gray-600 mb-4">Negroni Local </p>
                        
                        <button 
                            onClick={() => handleViewMore(setShowImagesC)} 
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            {showImagesC ? "Hide Images" : "View More Images"} &rarr;
                        </button>

                        {showImagesC && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                               {/* Project Card 3: Negroni Local */}
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

                {/* Project Card 4 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="/assets/images/googleTeatroCiego/go1.jpg" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Google Teatro Ciego</h3>
                        <p className="text-sm text-gray-600 mb-4">Google Teatro Ciego</p>
                        
                        <button 
                            onClick={() => handleViewMore(setShowImagesD)} 
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            {showImagesD ? "Hide Images" : "View More Images"} &rarr;
                        </button>

                        {showImagesD && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <img src="/assets/images/googleTeatroCiego/go2.jpg" alt="Escenario oscuro del Teatro Ciego con luces suaves" className="w-full h-52 object-cover" />
                                <img src="/assets/images/googleTeatroCiego/go8.jpg" alt="Actores en escena representando una obra en el Teatro Ciego" className="w-full h-52 object-cover" />
                                <img src="/assets/images/googleTeatroCiego/go4.jpg" alt="Detalle de la interpretación de actores en el Teatro Ciego" className="w-full h-52 object-cover" />
                                <img src="/assets/images/googleTeatroCiego/go5.jpg" alt="Público disfrutando de una obra en el Teatro Ciego" className="w-full h-52 object-cover" />
                                <img src="/assets/images/googleTeatroCiego/go6.jpg" alt="Escena artística en el Teatro Ciego" className="w-full h-52 object-cover" />
                                <img src="/assets/images/googleTeatroCiego/go7.jpg" alt="Vista del escenario vacío del Teatro Ciego antes de la función" className="w-full h-52 object-cover" />

                            </div>
                        )}
                    </div>
                </div>

                {/* Project Card 5 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="/assets/images/evento-mcdonalds/mc6.jpg" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">McDonald's Evento</h3>
                        <p className="text-sm text-gray-600 mb-4">McDonald's Evento</p>
                        
                        <button 
                            onClick={() => handleViewMore(setShowImagesE)} 
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            {showImagesE ? "Hide Images" : "View More Images"} &rarr;
                        </button>

                        {showImagesE && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <img src="/assets/images/evento-mcdonalds/mc1.jpg" alt="Hamburguesa McDonald's en un evento" className="w-full h-52 object-cover" />
                                <img src="/assets/images/evento-mcdonalds/mc2.jpg" alt="Participantes disfrutando de la comida en el evento McDonald's" className="w-full h-52 object-cover" />
                                <img src="/assets/images/evento-mcdonalds/mc3.jpg" alt="Preparación de hamburguesas para el evento" className="w-full h-52 object-cover" />
                                <img src="/assets/images/evento-mcdonalds/mc4.jpg" alt="Cocinero sirviendo hamburguesas en el evento" className="w-full h-52 object-cover" />
                                <img src="/assets/images/evento-mcdonalds/mc10.jpg" alt="Mesa con comida y bebidas durante el evento McDonald's" className="w-full h-52 object-cover" />
                                <img src="/assets/images/evento-mcdonalds/mc8.jpg" alt="Grupo de personas disfrutando el evento McDonald's" className="w-full h-52 object-cover" />

                            </div>
                        )}
                    </div>
                </div>

                {/* Project Card 6 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="/assets/images/Vodcast/vod6.jpg" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Vodcast</h3>
                        <p className="text-sm text-gray-600 mb-4">Vodcast</p>
                        
                        <button 
                            onClick={() => handleViewMore(setShowImagesF)} 
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            {showImagesF ? "Hide Images" : "View More Images"} &rarr;
                        </button>

                        {showImagesF && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <img src="/assets/images/Vodcast/vod1.jpg" alt="Escena grabada para un episodio del Vodcast" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Vodcast/vod2.jpg" alt="Entrevista realizada en el estudio para el Vodcast" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Vodcast/vod3.jpg" alt="Panel de discusión en el Vodcast" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Vodcast/vod4.jpg" alt="Presentador del Vodcast en el set" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Vodcast/vod5.jpg" alt="Momentos de grabación en el estudio del Vodcast" className="w-full h-52 object-cover" />
                                <img src="/assets/images/Vodcast/vod7.jpg" alt="Equipo técnico preparando la grabación del Vodcast" className="w-full h-52 object-cover" />

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;
