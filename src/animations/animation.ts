export const variants = (delay: number) => ({
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
    },
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
    scale: 1.1,
  },
  click: {
    scale: 0.9,
  },
  disabled: {
    opacity: 0.2,
    scale: 1,
  },
})
