import { useEffect, useState, RefObject } from "react";
import { useInView } from "framer-motion";

// This hook manages scroll-triggered animations
export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  threshold: number = 0.1
) {
  const isInView = useInView(ref, { once: false, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return { isInView, hasAnimated };
}

// This hook provides different animation variants based on the element's position on the page
export function useAnimationVariants() {
  // Fade up animation - good for most elements
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Fade in animation - good for images and backgrounds
  const fadeInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  // Slide in from left - good for text on right side
  const slideFromLeftVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  // Slide in from right - good for text on left side
  const slideFromRightVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  // Scale up - good for cards and projects
  const scaleUpVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  // Staggered children animation - good for lists
  const staggerContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // For children of staggered containers
  const staggerItemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return {
    fadeUpVariants,
    fadeInVariants,
    slideFromLeftVariants,
    slideFromRightVariants,
    scaleUpVariants,
    staggerContainerVariants,
    staggerItemVariants,
  };
}
