import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <footer className=" bg-[#ede3ab]  text-white py-2">
      <motion.div
        className="text-center text-sm text-gray-900 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        © {new Date().getFullYear()} Wajiha Niazi All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
