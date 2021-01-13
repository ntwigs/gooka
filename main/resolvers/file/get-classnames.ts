export const getClassnames = (content: string): string[] => {
  const css = /\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*/g
  return content.match(css) || []
}
