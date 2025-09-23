import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Resume = () => {
  const componentRef = useRef(null);

  const handlePrint = () => {
    if (componentRef.current) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
      <html>
        <head>
          <title>Malek Larif - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .section { margin-bottom: 30px; }
          </style>
        </head>
        <body>
          ${componentRef.current.innerHTML}
        </body>
      </html>
    `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const skills = [
    { name: 'AutoCAD 2D/Revit', level: 95 },
    { name: '3DS Max (Vray/Corona)', level: 85 },
    { name: 'Adobe Creative Suite', level: 90 },
    { name: 'Lumion/SketchUp Pro', level: 88 },
    { name: 'R&D Prototyping', level: 82 },
    { name: 'Prefabricated Systems', level: 87 },
  ];

  const workExperiences = [
    {
      company: 'UNITIWALL',
      location: 'Mississauga, ON, Canada',
      positions: [
        {
          title: 'Product Innovation Manager',
          period: 'Sep 2022 – Present',
          achievements: [
            'Engineered and validated next-generation Thermal Plenum wall panel achieving R26.8 value',
            'Pioneered fully unitized, prefabricated curtain-wall assembly reducing installation time by 80%',
            'Directed over 4 rigorous lab mock-ups including movement simulations and thermal-cycling',
            "Collaborated on 15-storey mass-timber project above Toronto's Goldring Centre",
          ],
        },
        {
          title: 'Senior Architectural Design Technologist',
          period: 'Sep 2022 – Present',
          achievements: [
            'Participated in inventing revolutionary panelized wall capable of +25 efficient R-value',
            'Played pivotal role in improving manufacturing, installation, and product quality',
            'Managed design, production, logistics, and installation areas of projects',
            'Collaborated with UL for testing and certifying product quality',
          ],
        },
      ],
    },
    {
      company: 'Self-Employed',
      location: 'Remote',
      positions: [
        {
          title: 'Architect',
          period: 'Oct 2019 – Aug 2022',
          achievements: [
            'Designed 20+ Pharmacies, 5 offices, and 2 banks in France in less than 2 years',
            'Created 100% green eco-friendly hotel/farming experience with salvageable materials',
            'Collaborated with architectural firms in Tunisia and France on large-scale BIM projects',
            'Conducted feasibility studies and financial analyses of building projects',
          ],
        },
      ],
    },
    {
      company: 'A.W.A.',
      location: 'Paris, France',
      positions: [
        {
          title: 'Architect Project Manager',
          period: 'Apr 2017 - Oct 2019',
          achievements: [
            'Participated in design of 15+ projects in France, mainly residential',
            'Directed and provided technical guidance to staff on design phases',
            'Managed team workflow to minimize time and increase efficiency',
          ],
        },
      ],
    },
    {
      company: 'A.D.U',
      location: 'Tunis, Tunisia',
      positions: [
        {
          title: 'Architect Project Manager',
          period: 'Apr 2016 - Apr 2017',
          achievements: [
            'Participated in conceptual design for luxurious housing and small hotels',
            'Introduced energy efficient and sustainable materials reducing cost and time',
            'Managed construction site staff and improved building quality and precision',
          ],
        },
      ],
    },
  ];

  return (
    <div className="text-white p-8">
      {/* Printable Content - MOVE THE REF HERE */}
      <div ref={componentRef}>
        <motion.h2
          className="text-3xl font-bold mb-6 border-b border-white/20 pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>

        <motion.section
          className="mb-8 bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white/80">
            Summary of Qualifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                8+ years of international experience in architectural design
              </li>
              <li>
                Well-versed in all aspects of art and architecture processes
              </li>
              <li>Effective verbal and written communication skills</li>
              <li>Multilingual in French, English, and Arabic</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Great leadership and relationship management skills</li>
              <li>
                Superior customer service and client requirement assessment
              </li>
              <li>
                Ability to prioritize and multi-task under strict deadlines
              </li>
              <li>
                Detail-oriented with keen eye for identifying and rectifying
                errors
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="mb-8 bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white/80">
            Core Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-white/70 border-b border-white/10 pb-2">
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-white/70 border-b border-white/10 pb-2">
                Additional Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Project Management',
                  'Sustainable Design',
                  'Curtain-Wall Systems',
                  'Lab Testing',
                  'BIM Methodology',
                  'Energy Efficiency',
                  'Prefabrication',
                  'Client Relations',
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 rounded p-2 text-center text-gray-300 text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-2">
            Work Experience
          </h3>
          <div className="space-y-8">
            {workExperiences.map((experience, expIndex) => (
              <motion.div
                key={expIndex}
                className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + expIndex * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-white/90 text-lg">
                      {experience.company}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {experience.location}
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {experience.positions.map((position, posIndex) => (
                    <div
                      key={posIndex}
                      className="border-l-2 border-cyan-400 pl-4 ml-2"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium text-white/80">
                          {position.title}
                        </h5>
                        <span className="text-cyan-300 text-sm bg-cyan-400/10 px-2 py-1 rounded">
                          {position.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {position.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="text-gray-300 text-sm flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.6 + expIndex * 0.1 + achIndex * 0.05,
                              duration: 0.3,
                            }}
                          >
                            <span className="text-cyan-400 mr-2">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-white/80">
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-white/20 pl-4">
                <h4 className="font-semibold text-white/90">
                  National Diploma of Architecture
                </h4>
                <p className="text-gray-300">
                  National School of Architecture (ENAU), Tunis, Tunisia
                </p>
                <p className="text-cyan-300 text-sm">2010 - 2018</p>
              </div>
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-white/80">
              Licenses & Certifications
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-white/20 pl-4">
                <h4 className="font-semibold text-white/90">
                  Registered Architect
                </h4>
                <p className="text-gray-300">Tunisian Order of Architects</p>
                <p className="text-cyan-300 text-sm">April 2018</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <h4 className="font-semibold text-white/90">IELTS Band 8.0</h4>
                <p className="text-gray-300">
                  International English Language Testing System
                </p>
                <p className="text-cyan-300 text-sm">November 2019</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Download Button - OUTSIDE the printable content */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
        >
          Download Full Resume
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Resume;
