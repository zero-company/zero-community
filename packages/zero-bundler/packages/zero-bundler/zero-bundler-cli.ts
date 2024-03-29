#!/usr/bin/env node

import { build } from './zero-bundler.js'
import { program } from 'commander'

program
	.name(process.env.npm_package_name || 'undefined')
	.version(process.env.npm_package_version || 'undefined', '-v, -version')
	.description(process.env.npm_package_version || 'undefined')

program
	.command('build')
	.option('--entry [paths...]', 'paths of entry files (default: src)')
	.action(opts => {
		build({
			entry: opts.entry,
		})
	})

program.parse(process.argv)
