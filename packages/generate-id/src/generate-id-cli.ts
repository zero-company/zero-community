#!/usr/bin/env node

import { generateId } from './generate-id'
import { program } from 'commander'

program
	.name(process.env.npm_package_name || 'undefined')
	.version(process.env.npm_package_version || 'undefined', '--version')
	.description(
		`generate-id@${
			process.env.npm_package_version || 'null'
		}: generate random id`,
	)

program
	.command('generate')
	.description('output random id')
	.option('--hexLength <value>', 'limit length of each hex (default: 6)')
	.option('--hexNum <value>', 'specify number of hexes (default: 6)')
	.option('--prefix <value>', 'add prefix')
	.option('--suffix <value>', 'add suffix')
	.option('--divider <value>', `change divider (default: '-')`)
	.action(options => {
		console.log(generateId(options))
	})

program.parse(process.argv)
