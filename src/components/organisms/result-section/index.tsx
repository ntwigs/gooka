import * as React from 'react'
import { getHasUnusedClassnames } from '../../../redux/selectors/files'
import { Box } from '../../atoms/box'
import { useCompare } from './use-compare'
import { useClassnames } from './use-classnames'
import { FileCompanion } from '../../molecules/file-companion'
import { Scroll } from '../../atoms/scroll'
import { AnimatePresence, motion } from 'framer-motion'
import { ClassnamePresentation } from '../../molecules/classname-presentation'
import { useSelector } from 'react-redux'
import { variants } from '../../../animations/animation'

export const ResultSection = () => {
  useClassnames()
  useCompare()
  const hasUnusedClassnames = useSelector(getHasUnusedClassnames)

  return (
    <Box grow>
      <motion.div
        variants={variants(3)}
        animate="animate"
        initial="initial"
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          flexGrow: 1,
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {!hasUnusedClassnames && <FileCompanion key="filecompanion" />}
          {hasUnusedClassnames && (
            <Scroll>
              <ClassnamePresentation key="presentation" />
            </Scroll>
          )}
        </AnimatePresence>
      </motion.div>
    </Box>
  )
}
