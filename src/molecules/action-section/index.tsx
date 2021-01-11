import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Sizes } from 'src/components/box'
import { Button } from 'src/components/button'
import { resetFiles } from 'src/redux/actions/files'
import { useCompare } from './use-compare'

export const ActionSection = () => {
  const dispatch = useDispatch()
  const reset = () => dispatch(resetFiles())
  const compare = useCompare()

  return (
    <Box row>
      <Box marginRight={Sizes.m}>
        <Button onClick={compare}>Compare</Button>
      </Box>
      <Button apperance="warning" onClick={reset}>
        Reset
      </Button>
    </Box>
  )
}
