import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'
import { Box, Sizes } from '../../atoms/box'
import files from '../../../assets/gooka_files.png'
import { useWait } from '../../../utils/use-wait'
import { useText } from './use-text'
import { Animator } from '../../atoms/animator'
import { Heading } from '../../atoms/heading'

const Image = styled(motion.img)`
  width: 200px;
  align-self: center;
`

export const FileCompanion = () => {
  const DELAY = 500
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

  return (
    <Box center marginTop={Sizes.spacing} marginBottom={Sizes.spacing}>
      <motion.div exit={{ opacity: 0 }}>
        <Box>
          <Box marginBottom={Sizes.l}>
            <Image
              src={files}
              variants={variants()}
              animate="animate"
              initial="initial"
              exit="exit"
            />
          </Box>
          <Animator
            variants={variants()}
            animate={updated}
            initial="initial"
            exit="exit"
          >
            <Heading align="center" color={isEmptyValue ? 'danger' : 'primary'}>
              {titleValue}
            </Heading>
          </Animator>
          <Animator
            variants={variants()}
            animate={updated}
            initial="initial"
            exit="exit"
          >
            <Box maxWidth={367}>
              <Heading appearance="h3" color="default" align="center">
                {subtitleValue}
              </Heading>
            </Box>
          </Animator>
        </Box>
      </motion.div>
    </Box>
  )
}
