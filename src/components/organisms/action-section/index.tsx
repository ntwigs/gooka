import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetFiles } from '../../../redux/actions/files'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { Box, Sizes } from '../../atoms/box'
import { Button } from '../../atoms/button'
import { useCompare } from './use-compare'

export const ActionSection = () => {
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)
  const dispatch = useDispatch()
  const reset = () => dispatch(resetFiles())
  const compare = useCompare()

  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  return (
    <Box row>
      <Box marginRight={Sizes.m}>
        <Button onClick={compare} disabled={!hasFiles || !hasStyles}>
          Compare
        </Button>
      </Box>
      <Button
        apperance="warning"
        onClick={reset}
        disabled={!hasFiles && !hasStyles}
      >
        Reset
      </Button>
    </Box>
  )
}
