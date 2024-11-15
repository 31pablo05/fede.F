import React from 'react';

function Portfolio() {
    return (
        <section id="portfolio" className="bg-blue-100 py-12">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Portfolio</h2>
            <p className="text-lg text-center text-gray-600 mb-10">Discover some of my most impactful and creative projects.</p>
            
            {/* Portfolio Grid */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {/* Project Card 1 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/400" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Brand Project A</h3>
                        <p className="text-sm text-gray-600 mb-4">Developed a sleek web interface for a leading fashion brand, leveraging React and Tailwind CSS for dynamic styling.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">View Project &rarr;</a>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/400" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Brand Project B</h3>
                        <p className="text-sm text-gray-600 mb-4">Built an interactive e-commerce platform for a local artisan shop, focusing on user experience and responsive design.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">View Project &rarr;</a>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/400" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Brand Project C</h3>
                        <p className="text-sm text-gray-600 mb-4">Created a promotional landing page for a tech startup, utilizing modern animations and seamless navigation to engage users.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">View Project &rarr;</a>
                    </div>
                </div>

                {/* Project Card 4 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/400" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Brand Project D</h3>
                        <p className="text-sm text-gray-600 mb-4">Designed a modern portfolio site for a freelance designer, featuring clean layouts and vibrant visuals.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">View Project &rarr;</a>
                    </div>
                </div>

                {/* Project Card 5 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/400" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Brand Project E</h3>
                        <p className="text-sm text-gray-600 mb-4">Developed an event registration app for a major conference, featuring real-time updates and user-friendly navigation.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">View Project &rarr;</a>
                    </div>
                </div>

                {/* Project Card 6 */}
                <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/400" alt="Project preview" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2">Brand Project F</h3>
                        <p className="text-sm text-gray-600 mb-4">Collaborated with a global non-profit to build a multilingual platform that supports community outreach.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">View Project &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;