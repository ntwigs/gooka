import { motion } from 'framer-motion'
import * as React from 'react'
import { variants } from '../../../animations/animation'
import { Box, Sizes } from '../../atoms/box'

type HeaderProps = {
  title: string
  subtitle: string
  delay?: number
}

export const Header = ({ title, subtitle, delay = 0 }: HeaderProps) => {
  return (
    <Box marginBottom={Sizes.m} marginTop={Sizes.m}>
      <motion.div
        variants={variants(delay)}
        animate="animate"
        initial="initial"
      >
        <Box marginBottom={Sizes.s}>
          <h1>{title}</h1>
        </Box>
      </motion.div>
      <motion.div
        variants={variants(delay + 0.2)}
        animate="animate"
        initial="initial"
      >
        <h3>{subtitle}</h3>
      </motion.div>
    </Box>
  )
}
