import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/outline';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#1e1e2e] to-[#232332] text-white"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/3 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/profile2.png"
            alt="Wajiha Niazi"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#f5e58c]"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <AcademicCapIcon className="h-10 w-10 text-[#f5e58c]" />
            <h2 className="text-4xl font-bold text-[#f5e58c] tracking-widest">
              About Me
            </h2>
          </div>

          <p className="mt-6 text-gray-300 leading-relaxed">
            I'm{' '}
            <span className="font-semibold text-[#f5e58c]">Wajiha Niazi</span>,
            a passionate software engineer specializing in
            <span className="font-semibold text-[#f5e58c]">
              {' '}
              React.js, Next.js, Node.js, and GraphQL
            </span>
            . I love crafting high-performance applications with seamless user
            experiences.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            As an <span className="italic">Afghan woman in tech</span>, I
            navigate challenges with resilience, balancing career growth while
            empowering others in the industry. I thrive in fast-paced
            environments and love solving complex problems with scalable
            solutions.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            When I’m not coding, you’ll find me exploring AI innovations,
            refining my skills, or brainstorming creative tech solutions. I
            believe in continuous learning and using technology to make a
            meaningful impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
