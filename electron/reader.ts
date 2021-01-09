import * as fs from 'fs'
import * as path from 'path'

type File = {
  id: string
  path: string
  name: string
}

type ReaderProps = {
  files: File[]
  style: File
}

export const reader = (event: any, arg: ReaderProps) => {
  const { path: stylePath, name: styleName } = arg.style
  const styleFilePath = `/${stylePath}/${styleName}`
  const style = path.resolve(styleFilePath)
  const styleText = fs.readFileSync(style, { encoding: 'utf-8' })
  const cssRegex = /\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*/g

  const allJsClasses = arg.files.reduce(
    (prev: any, { name: fileName, path: filePath }: any) => {
      const js = path.resolve(`/${filePath}/${fileName}`)
      const jsText = fs.readFileSync(js, { encoding: 'utf-8' })
      const jsClasses = jsText.match(cssRegex) || []
      return [...prev, ...jsClasses]
    },
    [],
  )

  const cssClasses = styleText.match(cssRegex) || []

  const res = cssClasses
    .map((x) => x.trim())
    .filter((x) => allJsClasses.indexOf(x) < 0)

  const uniqueClasses = [...new Set(res)]

  event.reply('asynchronous-reply', uniqueClasses)
}
