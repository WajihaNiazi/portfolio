import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-[#fff] flex items-center justify-center text-black overflow-hidden"
    >
      <div className="container mx-auto px-12 md:flex md:items-center md:justify-between z-10">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold font-primary">
            Hi, I’m{' '}
            <span className="text-[#f5e58c] drop-shadow-md">Wajiha Niazi</span>
          </h1>

          <p className="mt-4 text-2xl md:text-3xl font-light font-secondary">
            <span className="text-gray-700">
              <Typewriter
                words={[
                  'Creative Web Developer',
                  'Innovative Problem Solver',
                  'Design Enthusiast',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          <motion.a
            href="/Wajiha-Niazi.pdf"
            download="Wajiha-Niazi.pdf"
            className="mt-8 inline-block px-8 py-4 bg-[#f5e58c] text-black font-semibold rounded-full shadow-lg hover:bg-[#ddd2a1] hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Download My Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/image.jpg"
            alt="Wajiha Niazi"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#f5e58c]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
