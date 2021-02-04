import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Drawer = styled(motion.div)`
  width: 331px;
  height: 100%;
  background: ${({ theme }) => theme.colors.drawer};
  border-top-right-radius: 50px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-right: 5px;

  @media (max-width: 800px) {
    width: 100%;
    border-top-right-radius: 0;
  }
`
