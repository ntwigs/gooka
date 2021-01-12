import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { setClassnames } from 'src/redux/actions/files'
import { getFiles, getStyles } from 'src/redux/selectors/files'
import { hasElements } from 'src/utils/has-elements'
import { ipcRenderer } from 'src/utils/ipcRender'
import { Dispatch } from 'redux'

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

  useEffect(() => {}, [])
}
