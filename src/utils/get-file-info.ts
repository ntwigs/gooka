import { v4 as uuid } from 'uuid'

export const getInfo = (drop: string) => {
  console.log(drop.split(' '))
  return drop
}

export const getStyleInfo = (style: string) => {
  const files = style.split(' ')

  if (files.length > 1) {
    console.log('Handle wrong amount of styles error')
    return { name: '', path: '', id: '' }
  }

  const folders = style.split('/')
  const name = folders.slice(folders.length - 1, folders.length)[0]
  const path = folders.slice(1, folders.length - 1).join('/')

  return { name, path, id: uuid() }
}

export const getFileInfo = (fileString: string) => {
  const files = fileString.split(' ')

  return files.map((file) => {
    const folders = file.split('/')
    const name = folders.slice(folders.length - 1, folders.length)[0]
    const path = folders.slice(1, folders.length - 1).join('/')

    return { name, path, id: uuid() }
  })
}
