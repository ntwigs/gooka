import * as path from 'path'

export const getPath = (file: FileProps) => {
  return path.resolve(`/${file.path}/${file.name}`)
}
