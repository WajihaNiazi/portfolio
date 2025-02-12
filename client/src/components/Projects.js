import React from 'react';
import { motion } from 'framer-motion';
import { FolderIcon } from '@heroicons/react/outline';

const projects = [
  {
    title: 'Noosh Food (E-commerce Website)',
    techStack: 'Shopify',
    description:
      'Designed and launched a food delivery website for a restaurant in the USA, facilitating online orders and deliveries.',
    link: '#',
  },
  {
    title: 'MIS for AFGAMESTAN',
    techStack: 'CodeIgniter, MySQL, HTML, CSS, JavaScript',
    description:
      'Created a management information system (MIS) to manage employees and budgets for a private company in Afghanistan.',
    link: '#',
  },
  {
    title: 'Material Rates (Mobile Web App)',
    techStack: 'React Native',
    description:
      'Built a mobile web app providing daily material price updates with product quality and price comparisons.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FolderIcon className="h-16 w-16 mx-auto text-[#f5e58c]" />
          <h2 className="text-3xl font-bold mt-4 text-[#f5e58c]">Projects</h2>
          <p className="mt-4 text-gray-600">
            A selection of projects showcasing my experience in web and software
            development.
          </p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-md p-6 rounded-lg text-center"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{project.techStack}</p>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-purple-950 font-medium hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
