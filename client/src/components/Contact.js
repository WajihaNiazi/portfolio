

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://portfolio-spbw.onrender.com/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#ede3ab]">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            I’d love to hear from you! Whether it’s a project, job opportunity,
            or just a chat, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <MailIcon className="h-6 w-6 text-[#f5e58c]" />
              <span className="text-gray-700">wajihaniazi22@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-6 w-6 text-[#f5e58c]" />
              <span className="text-gray-700">+93 793292204</span>
            </div>
            <div className="flex items-center space-x-4">
              <LocationMarkerIcon className="h-6 w-6 text-[#f5e58c]" />
              <span className="text-gray-700">Herat, Afghanistan</span>
            </div>
            <div className="flex justify-left items-center mt-6 space-x-4 text-gray-800">
              <a
                href="https://github.com/WajihaNiazi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#f5e58c]  hover:text-gray-800"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <span>|</span>
              <a
                href="https://www.linkedin.com/in/wajiha-niazi-9b4991200/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#f5e58c] hover:text-gray-800"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5e58c]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5e58c]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5e58c]"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#f5e58c] text-white font-semibold rounded-md shadow-lg hover:bg-[#f5e58c] focus:outline-none focus:ring-2 focus:ring-[#f5e58c]"
            >
              Send Message
            </button>
            {status && <p className="mt-4 text-center">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
