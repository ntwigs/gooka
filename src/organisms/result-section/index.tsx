import * as React from 'react'
import { Box, Sizes } from 'src/components/box'
import { Header } from 'src/components/header'
import { UnnecessaryClassname } from 'src/components/unnecessary-classname'
import { useClassnames } from './use-classnames'

export const ResultSection = () => {
  const classnames = useClassnames()

  const Classnames = () => (
    <>
      {classnames.map((name) => (
        <UnnecessaryClassname key={name} name={name} />
      ))}
    </>
  )

  return (
    <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
      <Header title="Unnecessary" subtitle="Found some unused classnames." />
      <Box marginBottom={Sizes.l} marginTop={Sizes.l}>
        <Classnames />
      </Box>
    </Box>
  )
}
