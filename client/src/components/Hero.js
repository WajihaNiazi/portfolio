import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="hero"
      className=""
    >
      <div className="" />

      <div className="">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="">
            Hi, I’m{' '}
            <span className="">
              Aqida Haidari
            </span>
          </h1>

          <p className="">
            <span className="">
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
            href="/Aqida-Haidari.pdf"
            download="Aqida_Haidari_Resume.pdf"
            className=""
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Download My Resume
          </motion.a>
        </motion.div>

        <motion.div
          className=""
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
            src="/profile2.svg"
            alt="Aqida Haidari"
            className="w-64 h-64 md:w-80 md:h-80   object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        className=""
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className=""
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className=""
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
