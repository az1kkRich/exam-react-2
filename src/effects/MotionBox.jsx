import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const getDirection = (direction, size) => {
  switch (direction) {
    case 'up':
      return { y: size };
    case 'down':
      return { y: -size };
    case 'left':
      return { x: size };
    case 'right':
      return { x: -size };
    default:
      return { x: 0, y: 0 };
  }
};

const MotionBox = ({
  size = 50,
  direction = 'up',
  delay = 0,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,        // faqat 1 marta ishlaydi
    threshold: 0.2,           // 20% ko‘ringanda trigger bo‘ladi
  });

  const move = getDirection(direction, size);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...move }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionBox;
