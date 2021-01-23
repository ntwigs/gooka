export const withError = <R>(fn: () => R): { result: R; error: any | null } => {
  try {
    const result = fn()
    return { result } as { error: null; result: R }
  } catch (error) {
    // Trick TS into thinking there's always a result.
    return { error } as { error: any; result: R }
  }
}
