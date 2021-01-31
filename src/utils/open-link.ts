const { shell } = window.require('electron')

export const openLink = (link: string) => () => shell.openExternal(link)
