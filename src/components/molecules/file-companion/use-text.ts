import { useSelector } from 'react-redux'
import {
  getSelectors,
  getFiles,
  getStyles,
} from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'

export const useText = () => {
  const Selectors = useSelector(getSelectors)
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const hasSelectors = hasElements(Selectors)
  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  if (hasSelectors) {
    return {
      title: 'Unused Selectors',
      subtitle: 'Found some Selectors to remove.',
      isEmpty: false,
    }
  }

  if (hasFiles && hasStyles) {
    return {
      title: 'No unused Selectors',
      subtitle:
        'There were no unused Selectors in the files you provided to Gooka.',
      isEmpty: true,
    }
  }

  if (hasStyles) {
    return {
      title: 'Add files to compare',
      subtitle:
        'Drag and drop files from vscode to compare them and check for unused css Selectors.',
      isEmpty: false,
    }
  }

  return {
    title: 'Add stylesheet to compare',
    subtitle:
      'Drag and drop a style file from vscode to compare and check for unused css Selectors.',
    isEmpty: false,
  }
}
