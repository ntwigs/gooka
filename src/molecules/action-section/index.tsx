import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Sizes } from 'src/atoms/box'
import { Button } from 'src/components/button'
import { resetFiles } from 'src/redux/actions/files'
import { getFiles, getStyles } from 'src/redux/selectors/files'
import { hasElements } from 'src/utils/has-elements'
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
