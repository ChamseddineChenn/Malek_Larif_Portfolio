import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Navbar = ({ onItemSelect, selectedItem, wheelSpeed, isAccelerating }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const animationRef = useRef(null);

  const menuItems = [
    { id: 'projects', label: 'Projects', icon: assets.folder_icon },
    { id: 'about', label: 'About', icon: assets.folder_icon },
    { id: 'contact', label: 'Contact', icon: assets.folder_icon },
    { id: 'services', label: 'Services', icon: assets.folder_icon },
    { id: 'resume', label: 'Resume', icon: assets.folder_icon },
  ];

  useEffect(() => {
    const animate = () => {
      if (!isHovered || isAccelerating) {
        setRotation((prev) => (prev + wheelSpeed) % 360);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, wheelSpeed, isAccelerating]);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    setTimeout(() => setActiveItem(null), 500);

    if (onItemSelect) {
      onItemSelect(itemId);
    }
  };

  return (
    <div
      className="relative w-80 h-80 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hit area that doesn't block events */}
      <div
        className="absolute inset-0 z-30"
        style={{ pointerEvents: 'none' }}
      />

      {/* Rotating wheel container with background image */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: rotation }}
        transition={{
          ease: 'linear',
          duration: isHovered && !isAccelerating ? 1 : 0,
        }}
      >
        {/* Wheel Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={assets.wheel_img}
            alt="Navigation Wheel"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Circular menu items - MOVED CLOSER TO CENTER */}
        {menuItems.map((item, index) => {
          const angle = (index / menuItems.length) * Math.PI * 2;
          const radius = 80; // Reduced from 120 to 80 (closer to center)
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.id}
              className="absolute w-16 h-16 z-20"
              style={{
                left: `calc(50% + ${x}px - 2rem)`,
                top: `calc(50% + ${y}px - 2rem)`,
              }}
              animate={{ rotate: -rotation }}
              transition={{
                ease: 'linear',
                duration: isHovered && !isAccelerating ? 1 : 0,
              }}
              whileHover={{ scale: 1.15 }} // Slightly more pronounced hover
            >
              <button
                className={`w-full h-full rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                  selectedItem === item.id
                    ? 'border-glow-selected bg-black/70 shadow-2xl'
                    : 'bg-black/60 text-white border-white/40 hover:bg-black/70 hover:border-white/60'
                } ${activeItem === item.id ? 'border-glow-trigger' : ''}`}
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() =>
                  activeItem === item.id && setActiveItem(null)
                }
                style={{ pointerEvents: 'auto' }}
              >
                {/* Icon with better contrast */}
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 mb-1 object-contain z-10 filter invert brightness-200 drop-shadow-md"
                />

                {/* Label with better readability */}
                <span className="text-xs font-semibold z-10 text-white drop-shadow-lg px-1 text-center leading-tight">
                  {item.label}
                </span>

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/20 rounded-full"></div>

                {/* Selected state indicator */}
                {selectedItem === item.id && (
                  <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-full animate-pulse"></div>
                )}
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Custom styles for border glow effect */}
      <style jsx>{`
        .border-glow-trigger {
          animation: border-glow-pulse 0.8s ease-out forwards;
        }

        .border-glow-selected {
          border-color: rgba(255, 255, 255, 0.9) !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8),
            0 0 30px rgba(255, 255, 255, 0.4),
            inset 0 0 15px rgba(255, 255, 255, 0.3);
          animation: none;
        }

        @keyframes border-glow-pulse {
          0% {
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 0px rgba(255, 255, 255, 0),
              inset 0 0 0px rgba(255, 255, 255, 0);
          }
          50% {
            border-color: rgba(255, 255, 255, 0.7);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
              inset 0 0 5px rgba(255, 255, 255, 0.2);
          }
          100% {
            border-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8),
              inset 0 0 10px rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
