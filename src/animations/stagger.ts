export const stagger = {
  listIn: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  initial: {
    opacity: 0,
    y: 22,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}
