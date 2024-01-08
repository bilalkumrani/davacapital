import React from 'react';
import { motion } from 'framer-motion';

const RotatingLines: React.FC = () => {
  const lineVariants = {
    blue: { height: [10, 60], backgroundColor: '#3498db' },
    green: { height: [2, 60], backgroundColor: '#2ecc71' },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'row',
        // position: 'absolute',
        top: '50%', // Adjust the positioning
        left: '50%',
        transform: 'translate(-50%, -50%)',
        rotate: 0, // Initial rotation angle
      }}
      animate={{ rotate: 360 }} // Rotate 360 degrees for continuous rotation
      transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
    >
      {[...Array(180)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            width: 2,
            height: 60, // Adjust the height of the lines
            margin: '0 2px', // Adjust the spacing between lines
            borderRadius: 1, // Make it look like a circle
            originX: 0.5,
            originY: 0,
          }}
          initial={{ scale: 0, backgroundColor: '#3498db' }}
          animate={index % 2 === 0 ? 'blue' : 'green'}
          variants={lineVariants}
          transition={{ duration: 0.5, ease: 'linear', delay: index * 0.02 }}
        />
      ))}
    </motion.div>
  );
};

export default RotatingLines;
