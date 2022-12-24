import { build, Options } from 'tsup'

export const buildTsup = ({ entry }: Options) =>
	build({
		entry,
		clean: true,
		splitting: true,
		sourcemap: true,
		dts: {
			resolve: true,
			compilerOptions: {
				moduleResolution: 'node',
			},
		},
		format: ['cjs', 'esm'],
		minify: true,
	})
