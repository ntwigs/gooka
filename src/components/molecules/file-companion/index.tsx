import * as React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'
import {
  getClassnames,
  getFiles,
  getStyles,
} from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { Box, Sizes } from '../../atoms/box'
import files from '../../../assets/gooka_files.png'

const useText = () => {
  const classnames = useSelector(getClassnames)
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const hasClassnames = hasElements(classnames)
  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  if (hasClassnames) {
    return {
      title: 'Unused classnames',
      subtitle: 'Found some classnames to remove.',
      isEmpty: false,
    }
  }

  if (hasFiles && hasStyles) {
    return {
      title: 'No unused classnames',
      subtitle:
        'There were no unused classnames in the files you provided to Gooka.',
      isEmpty: true,
    }
  }

  if (hasStyles) {
    return {
      title: 'Add files to compare',
      subtitle:
        'Drag and drop files from vscode to compare them and check for unused css classnames.',
      isEmpty: false,
    }
  }

  return {
    title: 'Add stylesheet to compare',
    subtitle:
      'Drag and drop a style file from vscode to compare and check for unused css classnames.',
    isEmpty: false,
  }
}

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
`

export const FileCompanion = () => {
  const { title, subtitle, isEmpty } = useText()

  return (
    <Box>
      <Box marginBottom={Sizes.l}>
        <Image
          src={files}
          variants={variants(3)}
          animate="animate"
          initial="initial"
          exit="exit"
        />
      </Box>
      <H1
        variants={variants(3.2)}
        animate="animate"
        initial="initial"
        exit="exit"
        isEmpty={isEmpty}
      >
        {title}
      </H1>
      <H3
        variants={variants(3.4)}
        animate="animate"
        initial="initial"
        exit="exit"
      >
        {subtitle}
      </H3>
    </Box>
  )
}
