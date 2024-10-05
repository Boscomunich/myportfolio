export const textVariant = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 1
      },
  }
};

export const contentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
  }
};


export const slideIn = (direction) => {
  return {
    hidden: {
      x: direction === "left" ? "-100vw" : direction === "right" ? "100vw" : 0,
      y: direction === "up" ? "100vh" : direction === "down" ? "-100vh" : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
        ease: "easeIn"
      },
    },
    exit: {
      hidden: {
      x: direction === "left" ? "-100vw" : direction === "right" ? "100vw" : 0,
      y: direction === "up" ? "100vh" : direction === "down" ? "-100vh" : 0,
      opacity: 0
    },
      transition: {
        type: 'spring',
        duration: 2,
        ease: "easeIn"
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};