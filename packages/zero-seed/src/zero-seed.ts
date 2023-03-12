import Fuse from 'fuse.js'
import * as fse from 'fs-extra'

export const createSeed = ({
	keys,
	data,
	outputDir = './dist/seed/fuse-index.json',
}) => {
	const fuseIndex = Fuse.createIndex(keys, data)

	return fse
		.outputFile(outputDir, JSON.stringify(fuseIndex.toJSON()))
		.then(() => console.log(`[zero-seed] Created ${outputDir}`))
}
