import * as path from 'path'
import { File } from '../../../common/types/file'

export const getPath = (file: File) => {
  return path.resolve(`/${file.path}/${file.name}`)
}
