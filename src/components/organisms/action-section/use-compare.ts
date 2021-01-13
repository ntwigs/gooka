import { useSelector } from 'react-redux'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { ipcRenderer } from '../../../utils/ipcRender'

export const useCompare = () => {
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  return () => {
    const hasFiles = hasElements(files)
    const hasStyles = hasElements(styles)

    if (hasFiles && hasStyles) {
      ipcRenderer.send('analyze-classnames', { files, styles })
    }
  }
}
