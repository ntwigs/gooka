import { useDispatch, useSelector } from 'react-redux'
import { resetSelectors } from '../../../redux/actions/files'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { send } from '../../../utils/send'

export const useReCompare = () => {
  const dispatch = useDispatch()
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const recompare = () => {
    const hasFiles = hasElements(files)
    const hasStyles = hasElements(styles)

    if (hasFiles && hasStyles) {
      dispatch(resetSelectors())
      send('analyze-selectors', { files, styles })
    }
  }

  return recompare
}
