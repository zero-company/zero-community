import packagejson from './../package.json'
import {
	PackageGroupType,
	parsePackageGroup,
	validatePackageGroup,
} from './package-group'
import { writeNpmrc } from './write-npmrc'
import { npmPack } from './npm-pack'
import * as path from 'node:path'
import * as fse from 'fs-extra'

export type PackPackagesOptions = {
	packageGroups: PackageGroupType[]
}

const packPackageGroup = ({
	packageGroup,
	index,
	cacheDirectory,
}: {
	packageGroup: PackageGroupType
	index: number
	cacheDirectory: string
}) =>
	new Promise<void>((resolve, reject) => {
		const parsedPackageGroup = parsePackageGroup(packageGroup, index)

		if (validatePackageGroup(parsedPackageGroup)) {
			const { packages, registryUrl, authTokenEnvName } = parsedPackageGroup
			const scopes = packages
				.filter(el => el.startsWith('@'))
				.map(el => el.split('/')[0])
			const cwd = path.join(cacheDirectory, `package-group-${index}`)

			writeNpmrc({
				outputPath: cwd,
				registryUrl,
				scopes,
				authTokenEnvName,
			})
				.then(() => npmPack({ cwd, packages }))
				.then(() => fse.remove(cwd))
				.then(() => resolve())
		} else {
			reject(`[${packagejson.name}] Failed to pack PackageGroup[${index}]`)
		}
	})

/**
 * 	Pack packages in tgz
 *
 */
export const packPackages = ({ packageGroups }: PackPackagesOptions) => {
	const cacheDirectory = `node_modules/.cache/zero/pack-packages`
	return fse
		.remove(cacheDirectory)
		.then(() =>
			Promise.all(
				packageGroups.map((packageGroup, index) =>
					packPackageGroup({ packageGroup, index, cacheDirectory }),
				),
			),
		)
		.then(res => {
			console.log(`[${packagejson.name}] Finished packing`)
			return res
		})
		.catch(error => {
			console.log(error)
		})
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
