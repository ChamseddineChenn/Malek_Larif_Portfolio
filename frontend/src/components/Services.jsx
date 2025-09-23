import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Services = ({ onNavigate }) => {
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact'); // Navigate to contact section
    }
  };

  const services = [
    {
      title: 'Architectural Design',
      description:
        'Comprehensive design services from concept development to final construction documents for residential, commercial, and institutional projects.',
      icon: '🏛️',
      features: [
        'Concept Development',
        '3D Modeling',
        'Construction Documents',
        'Design Consultation',
      ],
    },
    {
      title: 'Interior Design',
      description:
        'Creating functional and aesthetically pleasing interior spaces that reflect client needs and preferences while maintaining architectural integrity.',
      icon: '✨',
      features: [
        'Space Planning',
        'Material Selection',
        'Furniture Design',
        'Lighting Design',
      ],
    },
    {
      title: 'Project Management',
      description:
        'Overseeing projects from inception to completion, ensuring quality control, timeline adherence, and budget management.',
      icon: '📊',
      features: [
        'Timeline Management',
        'Budget Planning',
        'Quality Control',
        'Stakeholder Coordination',
      ],
    },
    {
      title: 'Sustainable Design',
      description:
        'Incorporating eco-friendly principles and energy-efficient solutions into architectural designs for a reduced environmental footprint.',
      icon: '🌿',
      features: [
        'Energy Efficiency',
        'Green Materials',
        'Environmental Analysis',
        'LEED Certification',
      ],
    },
    {
      title: '3D Visualization',
      description:
        'Creating realistic 3D renderings and virtual tours to help clients visualize projects before construction begins.',
      icon: '🎨',
      features: [
        '3D Modeling',
        'Photorealistic Rendering',
        'Virtual Tours',
        'Animation',
      ],
    },
    {
      title: 'Consultation',
      description:
        'Providing expert advice on architectural matters, building codes, zoning regulations, and design optimization.',
      icon: '💡',
      features: [
        'Design Review',
        'Code Compliance',
        'Feasibility Studies',
        'Site Analysis',
      ],
    },
  ];

  return (
    <div className="text-white p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 border-b border-white/20 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      {/* Introduction */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-white/80">
          Professional Services
        </h3>
        <p className="text-gray-300 mb-6">
          With extensive experience in international architectural projects, I
          offer a comprehensive range of services tailored to meet diverse
          client needs. From initial concept to final execution, each project
          receives meticulous attention to detail and a commitment to
          excellence.
        </p>
        <p className="text-gray-300">
          My approach combines creative design thinking with technical
          expertise, ensuring that every project is not only aesthetically
          compelling but also functionally sound and environmentally
          responsible.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Process */}
      <motion.div
        className="mt-12 bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-white/80">
          My Approach
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: '01',
              title: 'Consultation',
              desc: 'Understanding your vision, requirements, and constraints',
            },
            {
              step: '02',
              title: 'Concept Design',
              desc: 'Developing initial concepts and design directions',
            },
            {
              step: '03',
              title: 'Development',
              desc: 'Refining the design and preparing detailed documentation',
            },
            {
              step: '04',
              title: 'Implementation',
              desc: 'Overseeing execution and ensuring quality delivery',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">{item.step}</span>
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-white/80">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-300 mb-6">
          Let's discuss how we can bring your vision to life with innovative
          design solutions.
        </p>
        <motion.button
          className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactClick}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;
