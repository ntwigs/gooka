import * as fs from 'fs'

export const getContent = (path: string) =>
  fs.readFileSync(path, { encoding: 'utf-8' })
