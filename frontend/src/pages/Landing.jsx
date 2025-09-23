import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Resume from '../components/Resume';
import { assets } from '../assets/assets';

const Landing = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showArrow, setShowArrow] = useState(false);
  const [wheelSpeed, setWheelSpeed] = useState(0.05);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0);
  const contentRef = useRef(null);

  // Carousel images array
  const carouselImages = [
    assets.carousel_img_1,
    assets.carousel_img_2,
    assets.carousel_img_3,
  ];

  // Carousel auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselImage((prev) => (prev + 1) % carouselImages.length);
    }, 15000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleItemSelect = (itemId) => {
    setIsAccelerating(true);

    let speed = 0.05;
    const accelerate = setInterval(() => {
      speed += 0.4;
      setWheelSpeed(speed);

      if (speed >= 4) {
        clearInterval(accelerate);
        setShowArrow(true);

        setTimeout(() => {
          setSelectedSection(itemId);
          setShowArrow(false);
          setWheelSpeed(0.05);

          setTimeout(() => {
            if (contentRef.current) {
              const elementPosition = contentRef.current.offsetTop;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
              });
            }
            setIsAccelerating(false);
          }, 100);
        }, 1000);
      }
    }, 100);
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services onNavigate={setSelectedSection} />;
      case 'resume':
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Carousel Background */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCarouselImage}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src={carouselImages[currentCarouselImage]}
              alt={`Carousel ${currentCarouselImage + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Down Arrow Indicator */}
      <AnimatePresence>
        {showArrow && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={assets.downward_arrow_icon}
              alt="Scroll down"
              className="w-12 h-12 animate-bounce filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center py-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white font-playfair"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Malek Larif Portfolio
          </motion.h1>
        </div>

        {/* Main Content - Split Screen */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Left Side - Profile */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Profile Photo */}
              <div className="w-64 h-96 mx-auto mb-6 overflow-hidden shadow-2xl border border-white/10 rounded-lg bg-black/10 backdrop-blur-sm">
                <img
                  src={assets.malek_photo}
                  alt="Malek Larif"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Malek Larif
              </h2>
              <p className="text-xl text-white/60">
                Architect / Project Manager / Photographer
              </p>
            </motion.div>
          </div>

          {/* Right Side - Circular Navigation */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <Navbar
              onItemSelect={handleItemSelect}
              selectedItem={selectedSection}
              wheelSpeed={wheelSpeed}
              isAccelerating={isAccelerating}
            />
          </div>
        </div>

        {/* Content Section */}
        <div ref={contentRef}>
          <AnimatePresence>
            {selectedSection && (
              <motion.div
                className="relative z-10 border-t border-white/10 mt-8 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="container mx-auto py-12">
                  {renderSectionContent()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Landing;
