export const variants = (delay: number = 0) => ({
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
    },
  },
  listIn: {
    y: 0,
    opacity: 1,
  },
  initial: {
    y: 22,
    opacity: 0,
  },
  exit: {
    y: 22,
    opacity: 0,
  },
  hover: {
    scale: 1.05,
  },
  click: {
    scale: 0.95,
  },
  largeHover: {
    scale: 1.04,
  },
  largeClick: {
    scale: 0.98,
  },
  disabled: {
    opacity: 0.2,
    scale: 1,
  },
})
