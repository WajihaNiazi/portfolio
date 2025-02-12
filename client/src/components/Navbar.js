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
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${scrolled ? 'bg-purple-950 shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <motion.h1
          className="text-3xl font-extrabold font-primary text-white tracking-wide hover:text-yellow-400 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img alt="Aqida Haidari" src="/logo.svg" className="h-14 w-14" />
        </motion.h1>

        <ul className="flex space-x-8 text-lg font-secondary text-white">
          {[
            'about',
            'projects',
            'skills',
            'certifications',
            'experience',
            'contact',
          ].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
