import * as React from 'react'
import { Box, Sizes } from '../../atoms/box'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box marginBottom={Sizes.xl} marginTop={Sizes.xl}>
      <Box marginBottom={Sizes.s}>
        <h1>{title}</h1>
      </Box>
      <h2>{subtitle}</h2>
    </Box>
  )
}
