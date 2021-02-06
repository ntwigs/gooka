import * as React from 'react'
import { variants } from '../../../animations/animation'
import { Animator } from '../../atoms/animator'
import { Box, Sizes } from '../../atoms/box'
import { Heading } from '../../atoms/heading'

type HeaderProps = {
  title: string
  subtitle: string
  delay?: number
}

export const Header = ({ title, subtitle, delay = 0 }: HeaderProps) => {
  return (
    <Box marginBottom={Sizes.m} marginTop={Sizes.m}>
      <Animator variants={variants(delay)} animate="animate" initial="initial">
        <Box marginBottom={Sizes.s}>
          <Heading color="secondary">{title}</Heading>
        </Box>
      </Animator>
      <Animator
        variants={variants(delay + 0.2)}
        animate="animate"
        initial="initial"
      >
        <Heading appearance="h3" color="default">
          {subtitle}
        </Heading>
      </Animator>
    </Box>
  )
}
