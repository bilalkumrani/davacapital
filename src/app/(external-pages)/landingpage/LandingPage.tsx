import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import SplashScreen from './components/Splash/Splash';
import { motion, AnimatePresence } from 'framer-motion';

export function LandingPage() {
  const [showLandingPage, setShowLandingPage] = useState(false);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEnterButtonClick = () => {
    setShowLandingPage(true);
  };
    return (
    <div style={{ height: '100%'}}>
     <AnimatePresence>
        {!showLandingPage && (
          <SplashScreen onEnterButtonClick={handleEnterButtonClick} />
        )}
        {showLandingPage && (
          <motion.div
            key="landingPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            <HeroSection isMenuOpen={isMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    );
  }
  

 