import styled from 'styled-components'

export enum Sizes {
  s,
  m,
  l,
  xl,
  spacing,
}

type BoxProps = {
  marginTop?: Sizes
  marginRight?: Sizes
  marginBottom?: Sizes
  marginLeft?: Sizes
  row?: boolean
  grow?: boolean
}

type SizeProps = { [props: string]: number }

const sizes: SizeProps = {
  [Sizes.s]: 10,
  [Sizes.m]: 15,
  [Sizes.l]: 25,
  [Sizes.xl]: 50,
  [Sizes.spacing]: 40,
}

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  min-width: 0;
  margin-top: ${({ marginTop }) => (marginTop ? sizes[marginTop] : 0)}px;
  margin-right: ${({ marginRight }) =>
    marginRight ? sizes[marginRight] : 0}px;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? sizes[marginBottom] : 0}px;
  margin-left: ${({ marginLeft }) => (marginLeft ? sizes[marginLeft] : 0)}px;
`
