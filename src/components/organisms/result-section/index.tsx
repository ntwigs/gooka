import * as React from 'react'
import { useSelector } from 'react-redux'
import { getClassnames } from '../../../redux/selectors/files'
import { ClassnameProps } from '../../../redux/types/files'
import { hasElements } from '../../../utils/has-elements'
import { Box, Sizes } from '../../atoms/box'
import { HeaderSpacer } from '../../atoms/header-spacer'
import { UnnecessaryClassname } from '../../molecules/unnecessary-classname'
import { useCompare } from '../action-section/use-compare'
import { useClassnames } from './use-classnames'
import { Header } from '../../molecules/header'
import { FileCompanion } from '../../molecules/file-companion'

export const ResultSection = () => {
  useClassnames()
  useCompare()
  const classnames = useSelector(getClassnames)
  const hasClassnames = hasElements(classnames)

  const Classnames = () => (
    <>
      {classnames.map(({ name, id }: ClassnameProps, index: number) => (
        <UnnecessaryClassname key={id} id={id} name={name} delay={index} />
      ))}
    </>
  )

  return (
    <Box marginLeft={Sizes.xl} marginRight={Sizes.xl} grow>
      <HeaderSpacer />
      {!hasClassnames && <FileCompanion key="filecompanion" />}
      {hasClassnames && (
        <div key="classes">
          <Header
            title="Unused classnames"
            subtitle="Found some classnames to remove."
          />
          <Classnames />
        </div>
      )}
    </Box>
  )
}
