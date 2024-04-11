import { motion, useViewportScroll, useTransform } from "framer-motion";

const ScrollAnimation = ({ children, y }) => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, y]);

  return (
    <motion.div style={{ y: yRange }}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
