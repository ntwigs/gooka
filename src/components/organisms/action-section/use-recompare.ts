import { useDispatch, useSelector } from 'react-redux'
import { resetClassnames } from '../../../redux/actions/files'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { ipcRenderer } from '../../../utils/ipcRender'

export const useReCompare = () => {
  const dispatch = useDispatch()
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const recompare = () => {
    const hasFiles = hasElements(files)
    const hasStyles = hasElements(styles)

    if (hasFiles && hasStyles) {
      dispatch(resetClassnames())
      ipcRenderer.send('analyze-classnames', { files, styles })
    }
  }

  return recompare
}
