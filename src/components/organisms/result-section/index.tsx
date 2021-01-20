import * as React from 'react'
import { useSelector } from 'react-redux'
import {
  getClassnames,
  getFiles,
  getStyles,
} from '../../../redux/selectors/files'
import { ClassnameProps } from '../../../redux/types/files'
import { hasElements } from '../../../utils/has-elements'
import { Box, Sizes } from '../../atoms/box'
import { HeaderSpacer } from '../../atoms/header-spacer'
import { Header } from '../../molecules/header'
import { UnnecessaryClassname } from '../../molecules/unnecessary-classname'
import { useCompare } from '../action-section/use-compare'
import { useClassnames } from './use-classnames'

const useSubtitle = () => {
  const classnames = useSelector(getClassnames)
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const hasClassnames = hasElements(classnames)
  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  if (hasClassnames) {
    return 'Found some classnames'
  }

  if (hasFiles && hasStyles) {
    return 'Could not find any classnames'
  }

  if (hasFiles) {
    return 'Add style to compare'
  }

  if (hasStyles) {
    return 'Add files to compare'
  }

  return 'Start by adding files'
}

export const ResultSection = () => {
  useClassnames()
  useCompare()
  const classnames = useSelector(getClassnames)
  const subtitle = useSubtitle()

  const Classnames = () => (
    <>
      {classnames.map(({ name, id }: ClassnameProps, index: number) => (
        <UnnecessaryClassname key={id} id={id} name={name} delay={index} />
      ))}
    </>
  )

  return (
    <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
      <HeaderSpacer />
      <Header title="Unnecessary classnames" subtitle={subtitle} delay={3} />
      <Box marginBottom={Sizes.l} marginTop={Sizes.l}>
        <Classnames />
      </Box>
    </Box>
  )
}
