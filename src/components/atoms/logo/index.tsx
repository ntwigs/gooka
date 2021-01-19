import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Logo = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 30px;
`
