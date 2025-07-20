'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to handle WhatsApp button click
  const handleWhatsAppClick = () => {
    // Format phone number for proper WhatsApp link
    const phoneNumber = "85894827684";
    const message = "Halo, saya ingin bertanya tentang layanan Anda.";
    
    // Create WhatsApp URL with phone number and pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className={`fixed z-50 ${isMobile ? 'bottom-6 right-6' : 'bottom-8 right-8'}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
    >
      {/* Main Button */}
      <div className="relative">
        <motion.button 
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`flex items-center justify-center ${isMobile ? 'w-14 h-14' : 'w-16 h-16'} bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-300`}
          aria-label="Contact on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-white text-3xl" />
        </motion.button>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
      </div>
      
      {/* Tooltip - only shown on desktop */}
      <AnimatePresence>
        {!isMobile && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            <div className="font-medium text-gray-800 dark:text-white">Hubungi via WhatsApp</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform rotate-45 w-3 h-3 bg-white dark:bg-gray-800"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Text label for mobile */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md whitespace-nowrap text-xs font-medium text-gray-800 dark:text-white"
        >
          Chat WhatsApp
        </motion.div>
      )}
    </motion.div>
  );
} 