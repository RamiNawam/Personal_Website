"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md">
            <p className="text-lg mb-4">
              Hello! I'm a passionate developer with a strong background in web development and a love for creating
              intuitive, user-friendly applications. With expertise in modern technologies and frameworks, I strive
              to build responsive and accessible solutions.
            </p>
            <p className="text-lg mb-4">
              My journey in tech began several years ago, and I've since worked on a variety of projects ranging from
              front-end development to full-stack applications. I enjoy solving complex problems and continuously
              learning new skills to stay at the forefront of technology.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 