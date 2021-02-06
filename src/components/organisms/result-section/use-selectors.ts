import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { Dispatch } from 'redux'
import { setSelectors } from '../../../redux/actions/files'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { on } from '../../../utils/on'

const setSelectorEvent = (dispatch: Dispatch) => {
  on('analyze-selectors', (_: unknown, Selectors: string[]) => {
    const selectorsWithId = Selectors.map((selector) => ({
      name: selector,
      id: uuid(),
    }))

    dispatch(setSelectors(selectorsWithId))
  })
}

export const useSelectors = () => {
  const dispatch = useDispatch()
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  const removeSelectors = () => void dispatch(setSelectors([]))
  useEffect(removeSelectors, [hasFiles, hasStyles, dispatch])
  useEffect(() => setSelectorEvent(dispatch), [dispatch])
}
