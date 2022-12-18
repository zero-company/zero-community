import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const toPascal = (str: string) =>
	str
		.split(/(?:-|@|\/)+/)
		.filter(Boolean)
		.map(a => a.charAt(0).toUpperCase() + a.substring(1))
		.join('')

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, './packages/zero-bundler/index.ts'),
			name: toPascal(process.env.npm_package_name || ''),
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
})
