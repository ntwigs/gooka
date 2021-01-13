import styled, { keyframes } from 'styled-components'

type FadeInProps = {
  delay: number
}

const fadeIn = keyframes`
  from {
    transform: translateY(25px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

export const FadeIn = styled.div<FadeInProps>`
  opacity: 0;
  animation: ${fadeIn} 500ms cubic-bezier(0.64, 0.57, 0.67, 1.53) forwards;
  animation-delay: ${({ delay }) => delay * 100}ms;
`
