import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { File } from '../../../../common/types/file'
import { getFileInfo } from '../../../utils/get-file-info'

type UseInfoProps = {
  setAction: (files: File[]) => AnyAction
}

export const useInfo = ({ setAction }: UseInfoProps) => {
  const dispatch = useDispatch()
  return (style: string) => dispatch(setAction(getFileInfo(style)))
}
