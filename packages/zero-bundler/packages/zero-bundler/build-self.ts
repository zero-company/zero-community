import { build } from './zero-bundler.js'

build({
	entry: [
		'./packages/zero-bundler/zero-bundler.ts',
		'./packages/zero-bundler/zero-bundler-cli.ts',
	],
})
