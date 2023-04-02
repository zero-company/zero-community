import * as fse from 'fs-extra'

export const cleanup = (cwd: string) => fse.remove(cwd)
