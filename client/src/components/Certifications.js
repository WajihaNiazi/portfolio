import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheckIcon } from '@heroicons/react/outline';

const certifications = [
  { title: 'Cyber Security Essentials', year: '2024' },
  { title: 'Quality Assurance (QA) Fundamentals', year: '2024' },
  { title: 'Phishing Awareness and Prevention', year: '2024' },
  { title: 'SOC 2 Compliance Fundamentals', year: '2024' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BadgeCheckIcon className="h-16 w-16 mx-auto text-purple-950" />
          <h2 className="text-3xl font-bold mt-4">Certifications & Training</h2>
          <p className="mt-4 text-gray-600">
            Verified credentials that demonstrate my commitment to excellence
            and ongoing professional development.
          </p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 shadow-md p-6 rounded-lg text-center"
            >
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
