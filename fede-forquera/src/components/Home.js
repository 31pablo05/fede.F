// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../logo-color-curvas.png';

function Home() {
    const [selectedBook, setSelectedBook] = useState(null);

    const portfolioImages = [
        {
            title: 'Jardin Japones',
            cover: '../portfolio1.jpg',
            images: ['../assets/images/jardin japones/jar1.jpg/', '../assets/images/jardin japones/jar2.jpg/', '../assets/images/jardin japones/jar3.jpg/', '../portfolio1-3.jpg'],
        },
        {
            title: 'Album 2',
            cover: '../portfolio2.jpg',
            images: ['../portfolio2-1.jpg', '../portfolio2-2.jpg', '../portfolio2-3.jpg', '../portfolio2-4.jpg', '../portfolio2-5.jpg'],
        },
        {
            title: 'Album 3',
            cover: '../portfolio3.jpg',
            images: ['../portfolio3-1.jpg', '../portfolio3-2.jpg', '../portfolio3-3.jpg', '../portfolio3-4.jpg', '../portfolio3-5.jpg'],
        },
        {
            title: 'Album 4',
            cover: '../portfolio4.jpg',
            images: ['../portfolio4-1.jpg', '../portfolio4-2.jpg', '../portfolio4-3.jpg', '../portfolio4-4.jpg', '../portfolio4-5.jpg'],
        },
        {
            title: 'Album 5',
            cover: '../portfolio5.jpg',
            images: ['../portfolio5-1.jpg', '../portfolio5-2.jpg', '../portfolio5-3.jpg', '../portfolio5-4.jpg', '../portfolio5-5.jpg'],
        },
    ];

    const openBookModal = (book) => {
        setSelectedBook(book);
    };

    const closeBookModal = () => {
        setSelectedBook(null);
    };

    return (
        <div className="home">
            <header className="home-header">
                <div className="header-image image1">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="header-image image2"></div>
                <div className="header-image image3"></div>
                <div className="nav-buttons">
                    <Link to="/" className="nav-button">Home</Link>
                    <Link to="/about-me" className="nav-button">About Me</Link>
                    <Link to="/portfolio" className="nav-button">Portfolio</Link>
                    <Link to="/gallery" className="nav-button">Gallery</Link>
                    <Link to="/contact" className="nav-button">Contact</Link>
                </div>
                <div className="text-container">
                    <h1>Welcome to My Photography Portfolio</h1>
                    <p>Capturing moments that last a lifetime.</p>
                </div>
            </header>
            <section className="home-gallery">
                <h2>Featured Albums</h2>
                <div className="gallery-grid">
                    {portfolioImages.map((book, index) => (
                        <div key={index} className="book" onClick={() => openBookModal(book)}>
                            <div className="cover">
                                <img src={book.cover} alt={`Cover of ${book.title}`} className="portfolio-image" />
                            </div>
                            <div className="inner">
                                <p className="text">{book.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="view-more">
                    <Link to="/gallery" className="view-more-button">View More</Link>
                </div>
            </section>

            {selectedBook && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeBookModal}>&times;</span>
                        <h2>{selectedBook.title}</h2>
                        <div className="modal-gallery">
                            {selectedBook.images.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1} of ${selectedBook.title}`} className="modal-image" />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
