import { useSelector } from 'react-redux'
import { getFiles, getStyles } from 'src/redux/selectors/files'
import { ipcRenderer } from 'src/utils/ipcRender'

export const useCompare = () => {
  const files = useSelector(getFiles)
  const style = useSelector(getStyles)

  return () => {
    const hasFiles = Array.isArray(files) && files.length > 0
    const hasStyle = style.name && style.path

    if (hasFiles && hasStyle) {
      ipcRenderer.send('analyze-classnames', { files, style })
    }
  }
}
