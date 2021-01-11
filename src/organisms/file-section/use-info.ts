import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { FileProps } from 'src/redux/types/files'
import { getFileInfo } from 'src/utils/get-file-info'

type UseInfoProps = {
  setAction: (files: FileProps[]) => AnyAction
}

export const useInfo = ({ setAction }: UseInfoProps) => {
  const dispatch = useDispatch()
  return (style: string) => dispatch(setAction(getFileInfo(style)))
}
