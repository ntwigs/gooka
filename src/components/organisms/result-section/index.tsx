import * as React from 'react'
import { useSelector } from 'react-redux'
import { getClassnames } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { Box } from '../../atoms/box'
import { useCompare } from './use-compare'
import { useClassnames } from './use-classnames'
import { FileCompanion } from '../../molecules/file-companion'
import { Scroll } from '../../atoms/scroll'
import { AnimatePresence } from 'framer-motion'
import { ClassnamePresentation } from '../../molecules/classname-presentation'

export const ResultSection = () => {
  useClassnames()
  useCompare()
  const classnames = useSelector(getClassnames)
  const hasClassnames = hasElements(classnames)

  return (
    <Box grow>
      <Scroll>
        <AnimatePresence exitBeforeEnter>
          {!hasClassnames && <FileCompanion key="filecompanion" />}
          {hasClassnames && <ClassnamePresentation classnames={classnames} />}
        </AnimatePresence>
      </Scroll>
    </Box>
  )
}
