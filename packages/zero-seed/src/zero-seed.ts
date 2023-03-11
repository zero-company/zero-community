import Fuse from 'fuse.js'
import * as fs from 'fs'

export const createSeed = ({ keys, data, outputDir = './dist/seed.json' }) => {
	const seed = Fuse.createIndex(keys, data)

	return fs.promises
		.writeFile(outputDir, JSON.stringify(seed.toJSON()))
		.then(() => console.log(`[zero-seed] Created ${outputDir}`))
}
