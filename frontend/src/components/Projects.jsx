import React, { useState, useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample projects data for each category
  const projectsData = {
    architecture: [
      {
        id: 1,
        title: 'Eco-Residential Complex',
        description:
          'Sustainable housing project with integrated green spaces and renewable energy systems.',
        year: '2023',
        location: 'Tunis, Tunisia',
      },
      {
        id: 2,
        title: 'Luxury Villa Series',
        description:
          'Collection of high-end residential properties with custom architectural details.',
        year: '2021',
        location: 'Hammamet, Tunisia',
      },
      {
        id: 3,
        title: 'Urban Renewal Project',
        description:
          'Rehabilitation of historic district with contemporary interventions respecting traditional architecture.',
        year: '2020',
        location: 'Tunis, Tunisia',
      },
    ],
    managed: [
      {
        id: 4,
        title: 'Commercial Hub Design',
        description:
          'Modern commercial center with innovative spatial organization and facade treatment.',
        year: '2022',
        location: 'Paris, France',
      },
      {
        id: 5,
        title: 'Office Tower',
        description:
          '25-story commercial tower with innovative structural design and energy-efficient systems.',
        year: '2021',
        location: 'Montreal, Canada',
      },
    ],
    photography: [
      {
        id: 6,
        title: 'Architectural Photography',
        description:
          'Professional photography showcasing architectural details and spatial relationships.',
        year: '2023',
        location: 'Various Locations',
      },
    ],
  };

  // Optimized photography images with lazy loading and performance fixes
  const photographyImages = useMemo(
    () => [
      { id: 1, src: assets.photography_img_1, title: 'Urban Landscape' },
      { id: 2, src: assets.photography_img_2, title: 'Architectural Detail' },
      { id: 3, src: assets.photography_img_3, title: 'Cityscape' },
      { id: 4, src: assets.photography_img_4, title: 'Modern Structure' },
      { id: 5, src: assets.photography_img_5, title: 'Historical Building' },
      { id: 6, src: assets.photography_img_6, title: 'Interior Design' },
      { id: 7, src: assets.photography_img_7, title: 'Facade Study' },
      { id: 8, src: assets.photography_img_8, title: 'Urban Geometry' },
      { id: 9, src: assets.photography_img_9, title: 'Light and Shadow' },
      { id: 10, src: assets.photography_img_10, title: 'Structural Form' },
      {
        id: 11,
        src: assets.photography_img_11,
        title: 'Environmental Integration',
      },
      { id: 12, src: assets.photography_img_12, title: 'Spatial Composition' },
    ],
    []
  );

  const currentProjects = projectsData[activeTab];

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    // Don't disable body scroll - it causes performance issues
  };

  const closePhotoModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPhoto(null), 300); // Delay cleanup until after animation
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget || e.target.closest('.modal-close')) {
      closePhotoModal();
    }
  };

  // Simple hover handler without heavy animations
  const handleImageHover = (e) => {
    // Lightweight hover effect
    e.currentTarget.style.transform = 'scale(1.02)';
  };

  const handleImageLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div className="text-white p-8 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center font-playfair"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects Portfolio
      </motion.h2>

      {/* Three Section Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {[
          { id: 'architecture', label: 'Architecture' },
          { id: 'managed', label: 'Managed Projects' },
          { id: 'photography', label: 'Photography' },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 border-2 ${
              activeTab === tab.id
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-white border-white/30 hover:border-white/60'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Content Sections */}
      {activeTab !== 'photography' ? (
        /* Architecture and Managed Projects Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <span className="text-5xl">
                    {activeTab === 'architecture' ? '🏛️' : '📊'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-white/60 bg-white/10 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">
                    📍 {project.location}
                  </span>
                  <span className="text-xs font-medium text-white/60 bg-white/10 px-3 py-1 rounded-full capitalize">
                    {activeTab.replace('_', ' ')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Photography Section Layout - OPTIMIZED */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Photography Description */}
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl font-semibold mb-4 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Architectural Photography Portfolio
            </motion.h3>
            <motion.p
              className="text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A collection of architectural photographs capturing the essence of
              design, space, and light. Each image tells a story of form,
              function, and the interplay between built environments and their
              natural surroundings.
            </motion.p>
          </div>

          {/* OPTIMIZED Photography Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {photographyImages.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer relative bg-gray-800"
                onClick={() => openPhotoModal(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-200"
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Section */}
          <motion.div
            className="text-center border-t border-white/20 pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 rounded-full mb-4">
              <div className="bg-black rounded-full p-3">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">
              Explore More Photography
            </h4>
            <p className="text-white/60 mb-4">
              For more architectural photographs and daily updates, visit my
              Instagram page
            </p>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow on Instagram
            </a>
          </motion.div>
        </motion.div>
      )}

      {/* Empty State for Architecture/Managed Projects */}
      {activeTab !== 'photography' && currentProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-2xl font-semibold mb-2">No Projects Yet</h3>
          <p className="text-gray-400">
            Projects in this category will be added soon.
          </p>
        </motion.div>
      )}

      {/* OPTIMIZED Photo Viewer Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClick}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 modal-close bg-black/50 rounded-full p-2"
              onClick={closePhotoModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Photo Content - FIXED positioning */}
            <motion.div
              className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: 'min(95vw, 1200px)',
                  maxHeight: 'min(95vh, 800px)',
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-4 rounded">
                <h3 className="text-white text-lg font-semibold">
                  {selectedPhoto.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
