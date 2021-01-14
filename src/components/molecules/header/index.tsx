import * as React from 'react'
import { Box, Sizes } from '../../atoms/box'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box marginBottom={Sizes.m} marginTop={Sizes.m}>
      <Box marginBottom={Sizes.s}>
        <h1>{title}</h1>
      </Box>
      <h3>{subtitle}</h3>
    </Box>
  )
}
