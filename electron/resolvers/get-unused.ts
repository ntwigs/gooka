type GetUnusedProps = {
  styleClasses: string[]
  fileClasses: string[]
}

export const getUnused = ({ styleClasses, fileClasses }: GetUnusedProps) =>
  styleClasses.filter((x) => fileClasses.indexOf(x) < 0)
