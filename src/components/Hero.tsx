"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm <span className="text-primary">Your Name</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A passionate developer building amazing digital experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#projects" className="btn btn-primary mr-4">View My Work</a>
            <a href="#contact" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">Contact Me</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 