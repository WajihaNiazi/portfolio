import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-[#ede3ab] to-[#fff] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            alt="Wajiha Niazi"
            src="/logo.png"
            className="h-10 w-10 rounded-full shadow-md relative top-2"
          />
          <span className="text-black drop-shadow-md text-2xl font-semibold tracking-widest">
            Wajiha
          </span>
        </motion.div>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-8 text-lg text-black font-medium">
          {[
            'about',
            'projects',
            'skills',
            'certifications',
            'experience',
            'contact',
          ].map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#ede3ab] transition-all" 
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
