import * as React from 'react'
import { Box, Sizes } from '../box'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box
      marginBottom={Sizes.xl}
      marginLeft={Sizes.xl}
      marginTop={Sizes.xl}
      marginRight={Sizes.xl}
    >
      <Box marginBottom={Sizes.s}>
        <h1>{title}</h1>
      </Box>
      <h2>{subtitle}</h2>
    </Box>
  )
}
