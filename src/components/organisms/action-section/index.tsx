import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { variants } from '../../../animations/animation'
import { resetFiles } from '../../../redux/actions/files'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { Box, Sizes } from '../../atoms/box'
import { Button } from '../../atoms/button'
import { useAlert } from '../../molecules/alert/context'
import { useReCompare } from './use-recompare'

const ActionSectionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 40px;
`

export const ActionSection = () => {
  const recompare = useReCompare()
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)
  const dispatch = useDispatch()
  const reset = () => dispatch(resetFiles())

  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  const isResetDisabled = !hasFiles && !hasStyles
  const isRecompareDisabled = !hasFiles || !hasStyles

  return (
    <ActionSectionContainer>
      <motion.div variants={variants(2.8)} animate="animate" initial="initial">
        <Box marginRight={Sizes.m}>
          <Button onClick={recompare} disabled={isRecompareDisabled}>
            Recompare
          </Button>
        </Box>
      </motion.div>
      <motion.div variants={variants(3)} animate="animate" initial="initial">
        <Button apperance="warning" onClick={reset} disabled={isResetDisabled}>
          Reset
        </Button>
      </motion.div>
    </ActionSectionContainer>
  )
}
