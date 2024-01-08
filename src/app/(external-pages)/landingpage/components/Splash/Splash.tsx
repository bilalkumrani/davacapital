'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './style.scss';
import Splash from '../../../../../../public/splash image.png';

interface SplashScreenProps {
  onEnterButtonClick: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onEnterButtonClick }) => {
  const controls = useAnimation();


  useEffect(() => {

    const animateSplash = async () => {
      await controls.start({ opacity: 0.1 });
      await controls.start({ scale: 1, opacity: 1 });
    };
    
    const interval = setInterval(() => {
      animateSplash();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [controls]);


  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="outerContainer"
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='circle'>
        <div className='rotatediv'>
            {/* <div className='line1'></div>
            <div className='line2'></div> */}
          </div>
        <motion.img
          src={Splash.src}
          alt="Your Image"
          className='splashimage'
          // animate={controls}
          animate={{
            scale: [1, 1, 1], // Define the scale values for the animation
            opacity: [0.1, 0.5, 1], // Define the opacity values for the animation
          }}
          transition={{ duration: 3, repeat: Infinity }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
        />
        </div>
      </div>
      <motion.p
        onClick={onEnterButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="buttonText"
      >
        Click To Enter
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
