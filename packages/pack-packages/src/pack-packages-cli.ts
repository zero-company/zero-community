#!/usr/bin/env node

import { packPackages } from './pack-packages'
import { program, InvalidArgumentError } from 'commander'
import packagejson from './../package.json'

const commanderParseInt = (value: string) => {
	const parsedValue = parseInt(value, 10)
	if (isNaN(parsedValue)) {
		throw new InvalidArgumentError('not a number')
	}
	return parsedValue
}

const deleteThis = {
	commanderParseInt,
	packPackages,
}

console.log(deleteThis)

program
	.name(Object.keys(packagejson.bin)[0] || 'undefined')
	.version(packagejson.version || 'undefined', '--version')
	.description(
		`${packagejson.name}@${packagejson.version}: Pack packages in tgz`,
	)

program.parse(process.argv)
