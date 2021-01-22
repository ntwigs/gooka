import { useSelector } from 'react-redux'
import {
  getClassnames,
  getFiles,
  getStyles,
} from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'

export const useText = () => {
  const classnames = useSelector(getClassnames)
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const hasClassnames = hasElements(classnames)
  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  if (hasClassnames) {
    return {
      title: 'Unused classnames',
      subtitle: 'Found some classnames to remove.',
      isEmpty: false,
    }
  }

  if (hasFiles && hasStyles) {
    return {
      title: 'No unused classnames',
      subtitle:
        'There were no unused classnames in the files you provided to Gooka.',
      isEmpty: true,
    }
  }

  if (hasStyles) {
    return {
      title: 'Add files to compare',
      subtitle:
        'Drag and drop files from vscode to compare them and check for unused css classnames.',
      isEmpty: false,
    }
  }

  return {
    title: 'Add stylesheet to compare',
    subtitle:
      'Drag and drop a style file from vscode to compare and check for unused css classnames.',
    isEmpty: false,
  }
}
