import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectors } from '../../../redux/actions/files'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { send } from '../../../utils/send'

export const useCompare = () => {
  const dispatch = useDispatch()
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  useEffect(() => {
    const hasFiles = hasElements(files)
    const hasStyles = hasElements(styles)

    if (hasFiles && hasStyles) {
      void dispatch(setSelectors([]))
      send('analyze-Selectors', { files, styles })
    }
  }, [files, styles, dispatch, setSelectors])
}
