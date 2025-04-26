import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Smooth scroll component to be used with scroll animations
export function SmoothScroll({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.9 },
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated component for revealing content on scroll
export function RevealContent({
  children,
  delay = 0,
}: PageTransitionProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 50 }}
    >
      {children}
    </motion.div>
  );
}

// Staggered list component for animated lists
interface StaggeredListProps {
  children: ReactNode[];
  containerClassName?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

export function StaggeredList({
  children,
  containerClassName = "",
  itemClassName = "",
  staggerDelay = 0.1,
}: StaggeredListProps) {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.3,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={containerClassName}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          className={itemClassName}
          variants={itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Parallax scroll effect component
interface ParallaxProps {
  children: ReactNode;
  speed?: number; // Speed factor: 0.5 moves slower than scroll, 2.0 moves faster
}

export function Parallax({ children, speed = 0.5 }: ParallaxProps) {
  const animateValues =
    speed < 1
      ? ["0vh", `${-100 * (1 - speed)}vh`]
      : ["0vh", `${100 * (speed - 1)}vh`];

  return (
    <motion.div
      animate={{ y: animateValues }}
      transition={{ ease: "linear", duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// Animated button with hover and tap effects
interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function AnimatedButton({
  children,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}

// Animated card with hover effects
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring" }}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}
