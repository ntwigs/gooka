import * as React from 'react'
import { useSelector } from 'react-redux'
import { getClassnames } from '../../../redux/selectors/files'
import { ClassnameProps } from '../../../redux/types/files'
import { hasElements } from '../../../utils/has-elements'
import { Box, Sizes } from '../../atoms/box'
import { HeaderSpacer } from '../../atoms/header-spacer'
import { UnnecessaryClassname } from '../../molecules/unnecessary-classname'
import { useCompare } from './use-compare'
import { useClassnames } from './use-classnames'
import { Header } from '../../molecules/header'
import { FileCompanion } from '../../molecules/file-companion'
import { Scroll } from '../../atoms/scroll'
import { AnimatePresence, motion } from 'framer-motion'

export const ResultSection = () => {
  useClassnames()
  useCompare()
  const classnames = useSelector(getClassnames)
  const hasClassnames = hasElements(classnames)

  const Classnames = () => (
    <AnimatePresence>
      {classnames.map(({ name, id }: ClassnameProps, index: number) => (
        <UnnecessaryClassname key={index} id={id} name={name} delay={index} />
      ))}
    </AnimatePresence>
  )

  return (
    <Box grow>
      <Scroll>
        <AnimatePresence exitBeforeEnter>
          {!hasClassnames && <FileCompanion key="filecompanion" />}
          {hasClassnames && (
            <motion.div key="classes" exit={{ opacity: 0 }}>
              <HeaderSpacer />
              <Header
                title="Unused classnames"
                subtitle="Found some classnames to remove."
              />
              <Classnames />
            </motion.div>
          )}
        </AnimatePresence>
      </Scroll>
    </Box>
  )
}
