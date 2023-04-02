import * as fse from 'fs-extra'
import packagejson from './../package.json'
import * as path from 'node:path'

type WriteNpmrcOptions = {
	/** output path for .npmrc i.e. packages/mypackage */
	outputPath: string
	/** registry to be used i.e. https://npm.pkg.github.com, https://registry.npmjs.org */
	registryUrl: string
	/** name of env variable for authToken i.e. NPM_TOKEN, GITHUB_TOKEN */
	authTokenEnvName: string
	/** package scope i.e. \@username, \@org */
	scope: string
}

/**
 * 	Write .npmrc
 *	@param opts.outputPath - output path for .npmrc i.e. packages/mypackage
 *	@param opts.registryUrl - registry to be used i.e. https://npm.pkg.github.com, https://registry.npmjs.org
 * 	@param opts.authTokenEnvName - name of env variable for authToken i.e. NPM_TOKEN, GITHUB_TOKEN
 * 	@param opts.scope - package scope i.e. \@username, \@org
 * 	@returns Promise from fs-extra
 */
export const writeNpmrc = ({
	outputPath,
	registryUrl,
	scope,
	authTokenEnvName,
}: WriteNpmrcOptions) => {
	// TODO: Publish and use standard log package
	// TODO: Check if env variable exists, if not warn

	const { host: registryHost } = new URL(registryUrl)

	const data = `
	# [${packagejson.name}][start] Set registry, remove after use
		${scope}:registry=${registryUrl}
		//${registryHost}/:_authToken=\${${authTokenEnvName}}
	# [${packagejson.name}][end] Set registry
`
	const outputFile = path.join(outputPath, '.npmrc')

	return fse
		.outputFile(path.join(outputFile), data)
		.then(() => console.log(`[${packagejson.name}] Created ${outputFile}`))
}
