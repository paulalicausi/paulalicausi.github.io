import { motion } from 'framer-motion';

export default function PixelEffect({ children }) {
  return (
    <motion.div
      className="pixel-wrapper"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pixelVariants}
    >
      {children}
    </motion.div>
  );
}

const pixelVariants = {
  enter: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6 } },
  exit: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(125px)',
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
};
