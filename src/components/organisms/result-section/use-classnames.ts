import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { Dispatch } from 'redux'
import { setClassnames } from '../../../redux/actions/files'
import { getFiles, getStyles } from '../../../redux/selectors/files'
import { hasElements } from '../../../utils/has-elements'
import { ipcRenderer } from '../../../utils/ipcRender'

const setClassnameEvent = (dispatch: Dispatch) => {
  ipcRenderer.on('analyze-classnames', (_: unknown, classnames: string[]) => {
    if (hasElements(classnames)) {
      const classnamesWithId = classnames.map((classname) => ({
        name: classname,
        id: uuid(),
      }))
      dispatch(setClassnames(classnamesWithId))
    }
  })
}

export const useClassnames = () => {
  const dispatch = useDispatch()
  const files = useSelector(getFiles)
  const styles = useSelector(getStyles)

  const hasFiles = hasElements(files)
  const hasStyles = hasElements(styles)

  const removeClassnames = () => void dispatch(setClassnames([]))

  useEffect(removeClassnames, [hasFiles, hasStyles, dispatch])
  useEffect(() => setClassnameEvent(dispatch), [dispatch])
}
