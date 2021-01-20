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
import { useCompare } from './use-compare'

const ActionSectionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 40px;
`

export const ActionSection = () => {
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)
  const dispatch = useDispatch()
  const reset = () => dispatch(resetFiles())

  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  return (
    <ActionSectionContainer>
      <motion.div variants={variants(2.8)} animate="animate" initial="initial">
        <Button
          apperance="warning"
          onClick={reset}
          disabled={!hasFiles && !hasStyles}
        >
          Reset
        </Button>
      </motion.div>
    </ActionSectionContainer>
  )
}
