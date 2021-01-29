import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { send } from '../../../utils/send'

export const useCompare = () => {
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  useEffect(() => {
    const hasFiles = hasElements(files)
    const hasStyles = hasElements(styles)

    if (hasFiles && hasStyles) {
      send('analyze-classnames', { files, styles })
    }
  }, [files, styles])
}
