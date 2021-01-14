import * as React from 'react'
import { useSelector } from 'react-redux'
import { getClassnames } from '../../../redux/selectors/files'
import { ClassnameProps } from '../../../redux/types/files'
import { Box, Sizes } from '../../atoms/box'
import { HeaderSpacer } from '../../atoms/header-spacer'
import { Header } from '../../molecules/header'
import { UnnecessaryClassname } from '../../molecules/unnecessary-classname'
import { useClassnames } from './use-classnames'

export const ResultSection = () => {
  useClassnames()
  const classnames = useSelector(getClassnames)

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
      <Header
        title="Unnecessary classnames"
        subtitle="Found some classnames to remove."
      />
      <Box marginBottom={Sizes.l} marginTop={Sizes.l}>
        <Classnames />
      </Box>
    </Box>
  )
}
