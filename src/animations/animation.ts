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
})
