import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'
import { Box, Sizes } from '../../atoms/box'
import files from '../../../assets/gooka_files.png'
import { useHasRendered } from '../../../utils/use-has-rendered'
import { useWait } from '../../../utils/use-wait'
import { useText } from './use-text'

const Image = styled(motion.img)`
  width: 200px;
  align-self: center;
`

type H1Props = { isEmpty: boolean }

const H1 = styled(motion.h1)<H1Props>`
  text-align: center;
  color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.colors.red : theme.colors.green};
`

const H3 = styled(motion.h3)`
  text-align: center;
  max-width: 367px;
  align-self: center;
`

export const FileCompanion = () => {
  const DELAY = 1000
  const hasRendered = useHasRendered()
  const { title, subtitle, isEmpty } = useText()
  const { value: isEmptyValue } = useWait<boolean>({
    value: isEmpty,
    delay: DELAY,
  })
  const { value: titleValue } = useWait<string>({ value: title, delay: DELAY })
  const { value: subtitleValue } = useWait<string>({
    value: subtitle,
    delay: DELAY,
  })
  const updated = title === titleValue ? 'animate' : 'exit'
  const variantDelay = hasRendered ? 0 : 3
  const variantTitleDelay = hasRendered ? 0.2 : 3.2
  const variantTextDelay = hasRendered ? 0.4 : 3.4

  return (
    <Box>
      <Box marginBottom={Sizes.l}>
        <Image
          src={files}
          variants={variants(variantDelay)}
          animate="animate"
          initial="initial"
          exit="exit"
        />
      </Box>
      <H1
        variants={variants(variantTitleDelay)}
        animate={updated}
        initial="initial"
        exit="exit"
        isEmpty={isEmptyValue}
      >
        {titleValue}
      </H1>
      <H3
        variants={variants(variantTextDelay)}
        animate={updated}
        initial="initial"
        exit="exit"
      >
        {subtitleValue}
      </H3>
    </Box>
  )
}
