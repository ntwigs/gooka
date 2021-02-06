import { createElement } from 'react'
import styled from 'styled-components'
import { Swatches } from '../../../theme'

type HeadingAppearance = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TextDirection = 'left' | 'center' | 'right'

type HeadingElementProps = {
  appearance: HeadingAppearance
  align: TextDirection
  color: Swatches
  children: string
}

const HeadingElement = ({
  appearance,
  children,
  ...props
}: HeadingElementProps) => createElement(appearance, props, children)

const StyledHeadingElement = styled(HeadingElement)`
  padding: 0;
  margin: 0;
  text-align: ${({ align }) => align};
  color: ${({ theme, color }) => theme.colors[color]};
`

type HeadingProps = {
  appearance?: HeadingAppearance
  align?: TextDirection
  color?: Swatches
  children: string
}

export const Heading = ({
  appearance = 'h1',
  align = 'left',
  color = 'primary',
  children,
}: HeadingProps) => {
  return (
    <StyledHeadingElement appearance={appearance} align={align} color={color}>
      {children}
    </StyledHeadingElement>
  )
}
