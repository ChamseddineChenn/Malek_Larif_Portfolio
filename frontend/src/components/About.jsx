import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { assets } from '../assets/assets';

const About = () => {
  const skills = [
    { name: 'Architectural Design', level: 95 },
    { name: 'Project Management', level: 90 },
    { name: '3D Modeling & Rendering', level: 85 },
    { name: 'Sustainable Design', level: 88 },
    { name: 'Client Relations', level: 92 },
    { name: 'Technical Documentation', level: 87 },
  ];

  return (
    <div className="text-white p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 border-b border-white/20 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Malek
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white/80">
            Background
          </h3>
          <p className="text-gray-300 mb-6">
            With over 8 years of international experience in architectural
            design, I bring a unique perspective to every project. My journey
            has taken me from Tunisia to France and Canada, allowing me to
            incorporate diverse cultural influences into my work.
          </p>
          <p className="text-gray-300 mb-6">
            I specialize in creating spaces that balance aesthetic appeal with
            functional design, always considering the environmental impact and
            sustainability of my projects. My approach combines traditional
            architectural principles with innovative technologies and materials.
          </p>
          <p className="text-gray-300">
            When I'm not designing buildings, you can find me exploring new
            architectural trends, sketching urban landscapes, or contributing to
            open-source architectural software projects.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white/80">
            Skills & Expertise
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <motion.div
                    className="bg-white h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Philosophy Section */}
      <motion.div
        className="mt-12 bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-white/80">
          Design Philosophy
        </h3>
        <p className="text-gray-300 italic">
          "I believe architecture should serve people and planet alike. Every
          structure I design aims to create harmony between human needs,
          environmental responsibility, and aesthetic excellence. Great
          architecture doesn't just shelter people—it inspires them and connects
          them to their environment in meaningful ways."
        </p>
      </motion.div>

      {/* Education & Certification */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white/80">
            Education
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-white/20 pl-4">
              <h4 className="font-semibold">
                National Diploma of Architecture
              </h4>
              <p className="text-gray-300">
                National School of Architecture (ENAU), Tunis, Tunisia
              </p>
              <p className="text-gray-400 text-sm">2010 - 2018</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white/80">
            Certifications
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-white/20 pl-4">
              <h4 className="font-semibold">LEED Green Associate</h4>
              <p className="text-gray-300">U.S. Green Building Council</p>
              <p className="text-gray-400 text-sm">2020</p>
            </div>
            <div className="border-l-2 border-white/20 pl-4">
              <h4 className="font-semibold">BIM Management</h4>
              <p className="text-gray-300">Autodesk Certified Professional</p>
              <p className="text-gray-400 text-sm">2019</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
