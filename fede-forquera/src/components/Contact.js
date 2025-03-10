import React, { useState } from 'react';
import { sendEmail } from './emailjs'; // Asegúrate que la ruta sea la correcta
import { 
    FaUser, FaEnvelope, FaCommentDots, FaWhatsapp, 
    FaPaperPlane, FaCheckCircle, FaTimesCircle 
} from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        sendEmail(e.target)
            .then(
                (result) => {
                    setStatusMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
                    setIsSuccess(true);
                    setShowModal(true);
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    setStatusMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
                    setIsSuccess(false);
                    setShowModal(true);
                }
            );
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleWhatsApp = () => {
        const whatsappMessage = `Hola, soy ${formData.name || 'un cliente interesado'}. Me gustaría solicitar información sobre tus servicios.`;
        window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    const handleEmailDirect = () => {
        const mailtoLink = `mailto:YOUR_EMAIL@example.com?subject=Consulta sobre tus servicios&body=Hola, soy ${formData.name || 'un cliente interesado'}. Me gustaría solicitar más información.`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="bg-[#f0f4f8] py-16 px-4 sm:px-8 lg:px-16">
            <h2 className="mt-12 text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-[#379299] drop-shadow-md"> 
                ¡Hablemos sobre tu próximo proyecto!
            </h2>
            <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6">
                    <div className="flex items-center border border-gray-300 rounded-md p-4">
                        <FaUser className="text-gray-500 mr-3" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu Nombre"
                            required
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md p-4">
                        <FaEnvelope className="text-gray-500 mr-3" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Tu Email"
                            required
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex items-start border border-gray-300 rounded-md p-4">
                        <FaCommentDots className="text-gray-500 mr-3 mt-1" />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tu Mensaje"
                            required
                            className="w-full focus:outline-none"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full p-4 bg-blue-500 text-white rounded-md flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                        <FaPaperPlane className="mr-2" /> Enviar Mensaje
                    </button>
                </form>
                <div className="flex gap-4 mt-6">
                    <button onClick={handleWhatsApp} className="p-4 bg-green-500 text-white rounded-md flex items-center justify-center hover:bg-green-600 transition-all duration-300">
                        <FaWhatsapp className="mr-2" /> WhatsApp
                    </button>
                    <button onClick={handleEmailDirect} className="p-4 bg-gray-500 text-white rounded-md flex items-center justify-center hover:bg-gray-600 transition-all duration-300">
                        <FaEnvelope className="mr-2" /> Enviar Email
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        {isSuccess ? <FaCheckCircle className="text-green-600 text-4xl mb-2" /> : <FaTimesCircle className="text-red-600 text-4xl mb-2" />}
                        <p className={isSuccess ? "text-green-600" : "text-red-600"}>{statusMessage}</p>
                        <button onClick={handleCloseModal} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Contact;
