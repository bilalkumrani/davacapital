import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';
import Splash from '../../../../../../public/splash image.png';
import { useMediaQuery } from '@mui/material';

interface SplashScreenProps {
  isMenuOpen: boolean;
}

const HeroSection = ({isMenuOpen}:(SplashScreenProps)) => {
  const isMediumDevice = useMediaQuery('(min-width:768px)');

  return (
    <>{(!isMenuOpen || isMediumDevice)  && 
      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={Splash.src}
        alt='Splash Image'
        style={{ width: '100%' }}
      />
    </motion.div> }</>
   
  );
};



export default HeroSection;