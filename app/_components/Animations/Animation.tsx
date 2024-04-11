import { motion } from "framer-motion";

const AnimatedDiv = ({ children, className, delay = 0 }) => {
  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
