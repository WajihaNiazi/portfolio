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
    <section
      id="skills"
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
            <CodeIcon className="h-10 w-10 text-[#f5e58c]" />
            <h2 className="text-4xl font-bold text-[#f5e58c] tracking-widest">
              Technical Skills
            </h2>
          </div>
          <p className="mt-4 text-gray-300">
            My toolkit includes modern technologies and frameworks for
            developing scalable and dynamic applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative bg-[#292940] shadow-[0_0_10px_rgba(0,0,0,0.5)] p-6 rounded-xl text-center 
                 transition-all hover:scale-105 hover:shadow-[0_0_20px_#f5e58c] 
                 border-2 border-transparent hover:border-[#f5e58c] overflow-hidden"
            >
              {/* Glowing Border Animation */}
              <div
                className="absolute inset-0 border-2 border-transparent rounded-xl 
                      hover:border-[#f5e58c] transition-all duration-300"
              ></div>

              <div className="text-5xl">{skill.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-[#f5e58c]">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
