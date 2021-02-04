import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'
import { Box, Sizes } from '../../atoms/box'
import files from '../../../assets/gooka_files.png'
import { useWait } from '../../../utils/use-wait'
import { useText } from './use-text'
import { Center } from '../../atoms/center'

const Image = styled(motion.img)`
  width: 200px;
  align-self: center;
`

type H1Props = { isEmpty: boolean }

const H1 = styled(motion.h1)<H1Props>`
  text-align: center;
  color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.colors.delete : theme.colors.button};
`

const H3 = styled(motion.h3)`
  text-align: center;
  max-width: 367px;
  align-self: center;
`

const Container = styled.div`
  padding: 40px 0;
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
    <Center>
      <Container>
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
            <H1
              variants={variants()}
              animate={updated}
              initial="initial"
              exit="exit"
              isEmpty={isEmptyValue}
            >
              {titleValue}
            </H1>
            <H3
              variants={variants()}
              animate={updated}
              initial="initial"
              exit="exit"
            >
              {subtitleValue}
            </H3>
          </Box>
        </motion.div>
      </Container>
    </Center>
  )
}
