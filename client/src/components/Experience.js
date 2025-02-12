import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/outline';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'GitStart – Remote',
    duration: '2022 - 2025',
    responsibilities: [
      'Contributed to various open-source and client projects using full-stack technologies.',
      'Implemented GraphQL and REST APIs for seamless communication.',
      'Optimized PostgreSQL and MongoDB databases for data management.',
      'Conducted unit testing using Jest and Vitest.',
      'Collaborated with distributed teams, improving workflows.',
    ],
  },
  {
    title: 'Web Development Teacher',
    company: 'Herat University – Herat, Afghanistan',
    duration: 'April 2022 - November 2022',
    responsibilities: [
      'Taught web development and mentored students.',
      'Developed and conducted courses on HTML, CSS, and JavaScript.',
      'Guided students in understanding core programming concepts.',
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Global Clients',
    duration: '2019 – 2022',
    responsibilities: [
      'Developed custom websites and applications.',
      'Built responsive e-commerce websites using Shopify.',
      'Developed a React Native mobile app for construction tracking.',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-[#1e1e2e] to-[#232332] text-white"
    >
      <div className="container mx-auto text-center px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-3">
            <BriefcaseIcon className="h-10 w-10 text-[#f5e58c]" />
            <h2 className="text-4xl font-bold text-[#f5e58c] tracking-widest">
              Experience
            </h2>
          </div>
          <p className="mt-4 text-gray-300">
            A journey of growth, innovation, and impactful contributions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mt-10 flex flex-col space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#292940] shadow-lg p-6 rounded-xl text-left border-2 border-transparent hover:border-[#f5e58c] transition-all hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-[#f5e58c]">
                {exp.title}
              </h3>
              <p className="text-lg text-gray-400">
                {exp.company} • {exp.duration}
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                {exp.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
