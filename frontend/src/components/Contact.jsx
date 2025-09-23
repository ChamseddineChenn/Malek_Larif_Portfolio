import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="text-white p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 border-b border-white/20 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white/80">
            Get In Touch
          </h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg">📧</span>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-300">contact@maleklarif.com</p>
                <p className="text-gray-400 text-sm mt-1">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg">📱</span>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-300">+1 (123) 456-7890</p>
                <p className="text-gray-400 text-sm mt-1">
                  Text or call for urgent inquiries
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-300">Ontario, Canada</p>
                <p className="text-gray-400 text-sm mt-1">
                  Available for projects worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h4 className="font-semibold mb-4">Availability</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Currently accepting new projects
              </p>
              <p className="text-sm">
                I'm available for freelance architectural design, consultations,
                and collaborative projects.
              </p>
              <p className="text-sm mt-2">
                Let's discuss how we can work together to bring your vision to
                life.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Let's Work Together Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white/80">
            Let's Work Together
          </h3>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-6">
            <h4 className="font-semibold mb-4">What to Expect</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-lg mr-2">✓</span>
                <span>
                  Personalized consultation to understand your vision and
                  requirements
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">✓</span>
                <span>
                  Creative design solutions tailored to your specific needs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">✓</span>
                <span>
                  Regular updates and collaboration throughout the project
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">✓</span>
                <span>Professional execution with attention to detail</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h4 className="font-semibold mb-4">Preferred Contact Method</h4>
            <p className="text-gray-300 mb-4">
              For project inquiries, please email me with a brief description of
              your project, timeline, and budget considerations. I'll respond
              with my availability and we can schedule a video call to discuss
              further.
            </p>
            <motion.a
              href="mailto:contact@maleklarif.com"
              className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
