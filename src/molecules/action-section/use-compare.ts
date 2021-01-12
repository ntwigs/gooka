import { useSelector } from 'react-redux'
import { getFiles, getStyles } from 'src/redux/selectors/files'
import { hasElements } from 'src/utils/has-elements'
import { ipcRenderer } from 'src/utils/ipcRender'

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
