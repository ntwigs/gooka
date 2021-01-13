type GetUniqueClassnames = {
  classnames: string[]
}

export const getUniqueClassnames = ({ classnames }: GetUniqueClassnames) => [
  ...new Set(classnames),
]
