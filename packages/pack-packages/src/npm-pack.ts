import { execa } from 'execa'

type OptionsType = {
	cwd: string
	packages: string[]
}

export const npmPack = ({ cwd, packages }: OptionsType) =>
	execa('npm', ['pack', ...packages, '--pack-destination=./../'], {
		cwd,
	})
