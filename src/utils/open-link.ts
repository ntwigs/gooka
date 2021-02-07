const _window = window as any // Missing types from preload
const { openExternal } = _window.shell

export const openLink = (link: string) => () => openExternal(link)
