export const hasElements = (element: unknown): boolean =>
  Array.isArray(element) && element.length > 0
