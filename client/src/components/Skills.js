import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon } from '@heroicons/react/outline';

const skills = [
  { name: 'JavaScript (ES6+)', icon: '🟨' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Vue.js', icon: '🟩' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'HTML5 & CSS3', icon: '🌐' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'Shopify', icon: '🛒' },
  { name: 'WordPress', icon: '📝' },
  { name: 'Squarespace', icon: '🔳' },
  { name: 'CodeIgniter', icon: '🔥' },
  { name: 'Jest Testing Framework', icon: '🧪' },
  { name: 'MDX', icon: '📖' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CodeIcon className="h-16 w-16 mx-auto text-purple-950" />
          <h2 className="text-3xl font-bold mt-4">Technical Skills</h2>
          <p className="mt-4 text-gray-600">
            My toolkit includes modern technologies and frameworks for
            developing scalable and dynamic applications.
          </p>
        </motion.div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-lg p-6 rounded-lg text-center"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
