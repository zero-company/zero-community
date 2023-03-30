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
	.option('--prefix <value>', 'Add prefix')
	.action(options => {
		console.log(generateId(options))
	})

program.parse(process.argv)
