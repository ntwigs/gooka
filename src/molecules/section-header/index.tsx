import * as React from 'react'
import { Box, Sizes } from '../../atoms/box'

type HeaderProps = {
  title: string
  subtitle: string
}

export const SectionHeader = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box marginBottom={Sizes.l} marginTop={Sizes.l}>
      <Box marginBottom={Sizes.s}>
        <h3>{title}</h3>
      </Box>
      <p>{subtitle}</p>
    </Box>
  )
}
