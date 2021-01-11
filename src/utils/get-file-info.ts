import { v4 as uuid } from 'uuid'

export const getFileInfo = (fileString: string) => {
  const files = fileString.split(' ')

  return files.map((file) => {
    const folders = file.split('/')
    const name = folders.slice(folders.length - 1, folders.length)[0]
    const path = folders.slice(1, folders.length - 1).join('/')

    return { name, path, id: uuid() }
  })
}
