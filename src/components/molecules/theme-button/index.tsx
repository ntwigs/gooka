import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './context'
import sun from '../../../assets/sun.png'
import moon from '../../../assets/moon.png'
import { variants } from '../../../animations/animation'

type StyledThemeButtonProps = {
  isLight?: boolean
}

const Icon = styled(motion.img)<StyledThemeButtonProps>`
  height: ${({ isLight }) => (isLight ? 30 : 15)}px;
  width: ${({ isLight }) => (isLight ? 30 : 15)}px;
`

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
`

const ImageContainer = styled(motion.div)`
  display: flex;
`

export const ThemeButton = () => {
  const { toggleLight, isLight } = useContext(ThemeContext)

  return (
    <motion.div variants={variants(3.2)} animate="animate" initial="initial">
      <AnimatePresence>
        <Container
          onClick={toggleLight}
          initial={{ opacity: 0.5 }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLight && (
            <ImageContainer
              variants={variants()}
              animate="listIn"
              exit="initial"
              initial="initial"
            >
              <Icon onClick={toggleLight} src={moon} alt="dark-mode" />
            </ImageContainer>
          )}
          {!isLight && (
            <ImageContainer
              variants={variants()}
              animate="listIn"
              exit="initial"
              initial="initial"
            >
              <Icon isLight src={sun} alt="light-mode" />
            </ImageContainer>
          )}
        </Container>
      </AnimatePresence>
    </motion.div>
  )
}
