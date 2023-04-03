#!/usr/bin/env node

import { packPackages } from './pack-packages'
import { program } from 'commander'
import packagejson from './../package.json'

program
	.name(Object.keys(packagejson.bin)[0] || 'undefined')
	.version(packagejson.version || 'undefined', '--version')
	.description(
		`${packagejson.name}@${packagejson.version}: Pack packages in tgz`,
	)
	.usage('[options] <path1> [morePaths ...]')
	.parse(process.argv)

let paths = program.args

if (!paths.length) {
	console.log(`[${packagejson.name}] Need to provide at least one path.`)
	process.exit(1)
}

packPackages({
	packageGroups: [
		'[@zero-company/zero-id],https://registry.npmjs.org,ZERO_READONLY_GITHUB_TOKEN_V1',
		{
			packages: ['@zero-company/zero-ui@1.0.0', 'tsup'],
			registryUrl: 'https://npm.pkg.github.com',
			authTokenEnvName: 'ZERO_READONLY_GITHUB_TOKEN_V1',
		},
	],
})
