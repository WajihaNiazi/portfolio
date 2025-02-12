import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/outline';

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company: 'GitStart – Remote',
    duration: 'October 2022 – December 2024',
    responsibilities: [
      'Contributed to multiple open-source and client projects, ensuring code quality and meeting project deadlines.',
      'Developed features and resolved issues for projects like OwnCloud, Notesnook, Storybook, and Chatwoot.',
      'Collaborated with international teams to deliver scalable and accessible solutions.',
    ],
  },
  {
    title: 'Website Manager & Online Web Development Teacher',
    company: 'LEARNAFGHAN – Remote',
    duration: 'January 2021 – August 2022',
    responsibilities: [
      'Managed the organization’s website, ensuring optimal performance, security, and accessibility.',
      'Taught online web development courses focusing on modern web technologies.',
      'Designed a curriculum tailored for beginners, enabling students to build their first projects and portfolios.',
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Global Clients',
    duration: '2019 – 2022',
    responsibilities: [
      'Designed and developed custom websites and applications for global clients.',
      'Delivered responsive, user-friendly e-commerce websites using Shopify.',
      'Created a Material Rates mobile app with React Native for tracking construction material prices.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl font-bold text-center mb-12">
            <BriefcaseIcon className="h-16 w-16 mx-auto text-purple-950" />
            <h2 className="text-3xl font-bold mt-4">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-indigo-900">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {exp.company} • {exp.duration}
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  {exp.responsibilities.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
