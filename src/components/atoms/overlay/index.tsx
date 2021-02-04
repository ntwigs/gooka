import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 2;
  pointer-events: none;
`

export const AnimatedOverlay = () => (
  <Overlay animate={{ opacity: 0 }} transition={{ duration: 2 }} />
)
