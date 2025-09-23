import React, { useEffect, useState, useCallback, useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Memoized projects data
  const projectsData = useMemo(
    () => ({
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
      ],
      managed: [
        {
          id: 3,
          title: 'Prefabricated Curtain Wall Systems',
          description:
            'Advanced engineering and stress testing of unitized wall panels.',
          year: '2022 – Present',
          location: 'Mississauga, ON, Canada',
        },
      ],
      photography: [{}],
    }),
    []
  );

  // Memoized photography images
  const photographyImages = useMemo(
    () => [
      {
        id: 1,
        src: assets.photography_img_1,
        title: 'Urban Landscape',
        description: 'City architecture and urban planning',
      },
      {
        id: 2,
        src: assets.photography_img_2,
        title: 'Architectural Detail',
        description: 'Detailed architectural elements',
      },
      {
        id: 3,
        src: assets.photography_img_3,
        title: 'Cityscape',
        description: 'Urban skyline and city views',
      },
      {
        id: 4,
        src: assets.photography_img_4,
        title: 'Modern Structure',
        description: 'Contemporary architectural design',
      },
      {
        id: 5,
        src: assets.photography_img_5,
        title: 'Historical Building',
        description: 'Heritage and historical architecture',
      },
      {
        id: 6,
        src: assets.photography_img_6,
        title: 'Interior Design',
        description: 'Architectural interior spaces',
      },
      {
        id: 7,
        src: assets.photography_img_7,
        title: 'Facade Study',
        description: 'Building exterior and facades',
      },
      {
        id: 8,
        src: assets.photography_img_8,
        title: 'Urban Geometry',
        description: 'Geometric patterns in urban design',
      },
      {
        id: 9,
        src: assets.photography_img_9,
        title: 'Light and Shadow',
        description: 'Play of light in architecture',
      },
      {
        id: 10,
        src: assets.photography_img_10,
        title: 'Structural Form',
        description: 'Architectural forms and structures',
      },
      {
        id: 11,
        src: assets.photography_img_11,
        title: 'Environmental Integration',
        description: 'Buildings in natural settings',
      },
      {
        id: 12,
        src: assets.photography_img_12,
        title: 'Spatial Composition',
        description: 'Spatial relationships in design',
      },
    ],
    []
  );

  // Memoized unitiwall media
  const unitiwallMedia = useMemo(
    () => ({
      videos: [
        {
          id: 1,
          src: assets.unitiwall_video_1,
          title: 'Structural Load Testing',
          description:
            'Stress testing of curtain wall components under extreme conditions',
        },
        {
          id: 2,
          src: assets.unitiwall_video_2,
          title: 'Assembly Process',
          description: 'Precision assembly of prefabricated wall panels',
        },
        {
          id: 3,
          src: assets.unitiwall_video_3,
          title: 'Quality Control',
          description: 'Final inspection and quality assurance procedures',
        },
      ],
      images: [
        {
          id: 1,
          src: assets.unitiwall_img_1,
          title: 'Thermal Plenum Design',
          description: 'Advanced R26.8 insulation system',
        },
        {
          id: 2,
          src: assets.unitiwall_img_2,
          title: 'Laboratory Testing',
          description: 'Rigorous mock-up testing and validation',
        },
        {
          id: 3,
          src: assets.unitiwall_img_3,
          title: 'Curtain Wall Assembly',
          description: 'Fully unitized prefabricated system',
        },
        {
          id: 4,
          src: assets.unitiwall_img_4,
          title: 'Structural Components',
          description: 'High-precision engineering details',
        },
        {
          id: 5,
          src: assets.unitiwall_img_5,
          title: 'Installation Process',
          description: '80% faster on-site installation',
        },
        {
          id: 6,
          src: assets.unitiwall_img_6,
          title: 'Material Innovation',
          description: 'Advanced composite materials',
        },
        {
          id: 7,
          src: assets.unitiwall_img_7,
          title: 'Project Documentation',
          description: 'Comprehensive technical specifications',
        },
      ],
    }),
    []
  );

  // Memoized tabs configuration
  const tabs = useMemo(
    () => [
      { id: 'architecture', label: 'Architecture' },
      { id: 'managed', label: 'Managed Projects' },
      { id: 'photography', label: 'Photography' },
    ],
    []
  );

  const currentProjects = projectsData[activeTab];

  // Get current 2 photos for display
  const getCurrentPhotos = useCallback(() => {
    const firstIndex = currentPhotoIndex;
    const secondIndex = (currentPhotoIndex + 1) % photographyImages.length;
    return [photographyImages[firstIndex], photographyImages[secondIndex]];
  }, [currentPhotoIndex, photographyImages]);

  // Fixed image loading handler
  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(imageId);
      return newSet;
    });
  }, []);

  // Check if current photos are loaded
  const checkCurrentPhotosLoaded = useCallback(() => {
    const currentPhotos = getCurrentPhotos();
    return currentPhotos.every((photo) => loadedImages.has(photo.id));
  }, [getCurrentPhotos, loadedImages]);

  // Carousel navigation
  const nextPhoto = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex =
        prevIndex + 2 >= photographyImages.length ? 0 : prevIndex + 2;
      return newIndex;
    });
  }, [isLoading, photographyImages.length]);

  const prevPhoto = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex =
        prevIndex - 2 < 0 ? photographyImages.length - 2 : prevIndex - 2;
      return newIndex;
    });
  }, [isLoading, photographyImages.length]);

  // Simple preload function
  const preloadImage = useCallback(
    (src, id) => {
      if (!loadedImages.has(id)) {
        const img = new Image();
        img.src = src;
        img.onload = () => handleImageLoad(id);
        img.onerror = () => handleImageLoad(id); // Fallback if image fails
      }
    },
    [loadedImages, handleImageLoad]
  );

  // Preload current images when index changes
  useEffect(() => {
    const currentPhotos = getCurrentPhotos();

    // Preload current images
    currentPhotos.forEach((photo) => {
      preloadImage(photo.src, photo.id);
    });

    // Check if current images are already loaded
    if (checkCurrentPhotosLoaded()) {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [
    currentPhotoIndex,
    getCurrentPhotos,
    preloadImage,
    checkCurrentPhotosLoaded,
  ]);

  // Monitor loaded images and update loading state
  useEffect(() => {
    if (isLoading && checkCurrentPhotosLoaded()) {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [loadedImages, isLoading, checkCurrentPhotosLoaded]);

  // Preload next images
  useEffect(() => {
    const nextIndex = (currentPhotoIndex + 2) % photographyImages.length;
    const nextPhotos = [
      photographyImages[nextIndex],
      photographyImages[(nextIndex + 1) % photographyImages.length],
    ];

    nextPhotos.forEach((photo) => {
      preloadImage(photo.src, photo.id);
    });
  }, [currentPhotoIndex, photographyImages, preloadImage]);

  const openMediaModal = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeMediaModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMedia(null), 300);
  };

  // Reset when tab changes
  useEffect(() => {
    if (activeTab === 'photography') {
      setLoadedImages(new Set());
      setIsLoading(true);
    }
  }, [activeTab]);

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
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 border-2 ${
              activeTab === tab.id
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-white border-white/30 hover:border-white/60'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {activeTab === 'architecture' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-5xl">🏛️</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-white/60 bg-white/10 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">
                    📍 {project.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : activeTab === 'managed' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Project Header */}
          <div className="text-center mb-12">
            <motion.h3
              className="text-3xl font-semibold mb-4 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Prefabricated Curtain Wall Engineering & Testing
            </motion.h3>
            <motion.p
              className="text-white/70 max-w-4xl mx-auto leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              As Product Innovation Manager at Unitiwall, Malek leads the design
              and stress testing of revolutionary prefabricated curtain wall
              systems. His work focuses on developing high-performance thermal
              plenum panels achieving R26.8 values and creating fully unitized
              assemblies that reduce installation time by 80% while maintaining
              structural integrity under extreme conditions.
            </motion.p>
            <motion.div
              className="mt-6 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-cyan-300 text-sm bg-cyan-400/10 px-3 py-1 rounded-full">
                Structural Engineering
              </span>
              <span className="text-cyan-300 text-sm bg-cyan-400/10 px-3 py-1 rounded-full">
                Thermal Performance
              </span>
              <span className="text-cyan-300 text-sm bg-cyan-400/10 px-3 py-1 rounded-full">
                Prefabrication
              </span>
            </motion.div>
          </div>

          {/* Videos Section */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-2xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-2">
              Testing & Process Documentation
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {unitiwallMedia.videos.map((video) => (
                <motion.div
                  key={video.id}
                  className="bg-black/20 rounded-lg overflow-hidden border border-white/10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <video
                      src={video.src}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-white/90 mb-2">
                      {video.title}
                    </h5>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Images Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-2xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-2">
              Engineering Details & Components
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unitiwallMedia.images.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-gray-900 relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openMediaModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h5 className="text-white font-semibold">
                        {image.title}
                      </h5>
                      <p className="text-gray-300 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      ) : (
        /* Photography Section */
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

          {/* Photography Carousel */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              {/* Left Arrow */}
              <button
                onClick={prevPhoto}
                disabled={isLoading}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  isLoading
                    ? 'bg-white/5 cursor-not-allowed'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Current Photos Display */}
              <div className="flex gap-6 relative min-h-[400px] items-center">
                {isLoading ? (
                  // Loading Skeleton
                  <div className="flex gap-6">
                    {[1, 2].map((index) => (
                      <div
                        key={index}
                        className="aspect-[4/3] w-full min-w-[500px] max-w-md bg-gray-800 rounded-lg animate-pulse flex items-center justify-center"
                      >
                        <div className="w-12 h-12 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Loaded Images
                  getCurrentPhotos().map((photo, index) => (
                    <motion.div
                      key={`${photo.id}-${currentPhotoIndex}`}
                      className="aspect-[4/3] w-full max-w-md min-w-[500px] overflow-hidden rounded-lg cursor-pointer bg-gray-900 relative group"
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 2.5, ease: 'easeOut' }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => openMediaModal(photo)}
                    >
                      <motion.img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        onLoad={() => handleImageLoad(photo.id)}
                        onError={() => handleImageLoad(photo.id)}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                        <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h5 className="text-white font-semibold">
                            {photo.title}
                          </h5>
                          <p className="text-gray-300 text-sm">
                            {photo.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextPhoto}
                disabled={isLoading}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  isLoading
                    ? 'bg-white/5 cursor-not-allowed'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({
                length: Math.ceil(photographyImages.length / 2),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isLoading && setCurrentPhotoIndex(index * 2)}
                  disabled={isLoading}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentPhotoIndex === index * 2
                      ? 'bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  } ${isLoading ? 'cursor-not-allowed' : ''}`}
                />
              ))}
            </div>
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
              href="https://www.instagram.com/photographers_odyssey"
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

      {/* Media Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMedia && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMediaModal}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              onClick={closeMediaModal}
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

            <motion.div
              className="relative flex flex-col items-center justify-center max-w-[95vw] max-h-[95vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-w-full max-h-[85vh] object-contain"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: 'min(95vw, 1200px)',
                  maxHeight: 'min(85vh, 800px)',
                }}
              />

              <div className="w-full max-w-4xl mt-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {selectedMedia.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
