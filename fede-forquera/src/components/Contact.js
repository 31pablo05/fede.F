import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar el correo usando EmailJS
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',  // Reemplaza con tu service_id
                'YOUR_TEMPLATE_ID',  // Reemplaza con tu template_id
                e.target,
                'YOUR_USER_ID'       // Reemplaza con tu user_id
            )
            .then(
                (result) => {
                    setStatusMessage('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    setStatusMessage('Error sending message. Please try again later.');
                }
            );
    };

    return (
        <section id="contact" className="bg-[#f0f4f8] py-16">
            <h2 className="text-4xl font-semibold text-center text-[#333] mb-8">Contact Me</h2>
            <div className="flex flex-col items-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-md space-y-6"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Send Message
                    </button>
                </form>
                {statusMessage && (
                    <p className="text-center mt-6 text-lg text-white">
                        {statusMessage}
                    </p>
                )}
            </div>
        </section>
    );
}

export default Contact;
