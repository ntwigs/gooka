import * as React from 'react'
import { getHasUnusedSelectors } from '../../../redux/selectors/files'
import { Box } from '../../atoms/box'
import { useCompare } from './use-compare'
import { useSelectors } from './use-Selectors'
import { FileCompanion } from '../../molecules/file-companion'
import { Scroll } from '../../atoms/scroll'
import { AnimatePresence, motion } from 'framer-motion'
import { SelectorPresentation } from '../../molecules/selector-presentation'
import { useSelector } from 'react-redux'
import { variants } from '../../../animations/animation'

export const ResultSection = () => {
  useSelectors()
  useCompare()
  const hasUnusedSelectors = useSelector(getHasUnusedSelectors)

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
          {!hasUnusedSelectors && <FileCompanion key="filecompanion" />}
          {hasUnusedSelectors && (
            <Scroll>
              <SelectorPresentation key="presentation" />
            </Scroll>
          )}
        </AnimatePresence>
      </motion.div>
    </Box>
  )
}
