import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/outline';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AcademicCapIcon className="h-16 w-16 mx-auto text-purple-950" />
          <h2 className="text-3xl font-bold mt-4">About Me</h2>
          <p className="mt-4 text-gray-600">
            I am a dedicated and results-driven software developer with over
            four years of experience in designing and building robust,
            user-friendly applications. My expertise lies in developing
            full-stack solutions using technologies such as React.js, Node.js,
            MongoDB, and other modern frameworks. I have successfully delivered
            scalable and efficient software systems for various industries,
            including e-commerce, education, and management. Beyond my technical
            work, I am passionate about empowering Afghan women in the tech
            industry by contributing to projects that foster inclusivity and
            representation. With a strong focus on clean code, performance
            optimization, and intuitive user interfaces
          </p>
          <p className="mt-4 text-gray-600">
            When I’m not coding, you’ll often find me exploring nature trails,
            reading about AI advancements, or sharing knowledge with the
            community. I’m always excited about the next challenge—whether it’s
            building a new feature, optimizing performance, or creating
            something entirely from scratch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
