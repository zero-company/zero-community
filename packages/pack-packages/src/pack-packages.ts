import packagejson from './../package.json'
import { PackageGroupType } from './package-group'
import * as fse from 'fs-extra'
import { packPackageGroup } from './pack-package-group'

export type PackPackagesOptions = {
	packageGroups: PackageGroupType[]
}

/**
 * 	Pack packages in tgz
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
