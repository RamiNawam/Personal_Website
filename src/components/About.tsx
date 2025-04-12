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
              Hello! I'm Rami Nawam, a passionate programmer with a strong foundation in Python development and a keen interest
              in creating interactive applications and games. I specialize in building engaging software that combines
              functionality with user experience.
            </p>
            <p className="text-lg mb-4">
              My journey in programming began with Python, where I've developed various mini-games and applications
              that demonstrate my ability to create engaging user experiences. I'm particularly proud of my Python Mini Games
              collection, which showcases my skills in game development and object-oriented programming.
            </p>
            <p className="text-lg">
              Currently, I'm expanding my expertise into web development, working with modern technologies like Next.js,
              TypeScript, and Tailwind CSS. I'm always eager to learn new technologies and take on challenging projects
              that push my boundaries and help me grow as a developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 