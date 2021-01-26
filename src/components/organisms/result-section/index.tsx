import * as React from 'react'
import { getHasUnusedClassnames } from '../../../redux/selectors/files'
import { Box } from '../../atoms/box'
import { useCompare } from './use-compare'
import { useClassnames } from './use-classnames'
import { FileCompanion } from '../../molecules/file-companion'
import { Scroll } from '../../atoms/scroll'
import { AnimatePresence } from 'framer-motion'
import { ClassnamePresentation } from '../../molecules/classname-presentation'
import { useSelector } from 'react-redux'

export const ResultSection = () => {
  useClassnames()
  useCompare()
  const hasUnusedClassnames = useSelector(getHasUnusedClassnames)

  return (
    <Box grow>
      <Scroll>
        <AnimatePresence exitBeforeEnter>
          {!hasUnusedClassnames && <FileCompanion key="filecompanion" />}
          {hasUnusedClassnames && <ClassnamePresentation key="presentation" />}
        </AnimatePresence>
      </Scroll>
    </Box>
  )
}
