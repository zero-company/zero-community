import packagejson from './../package.json'
import {
	PackageGroupType,
	parsePackageGroup,
	validatePackageGroup,
} from './package-group'
import { writeNpmrc } from './write-npmrc'
import { npmPack } from './npm-pack'
import { cleanup } from './cleanup'

export type PackPackagesOptions = {
	packageGroups: PackageGroupType[]
}

/**
 * 	Pack packages in tgz
 *
 */
export const packPackages = ({ packageGroups }: PackPackagesOptions) => {
	packageGroups.map((packageGroup, index) => {
		const parsedPackageGroup = parsePackageGroup(packageGroup, index)

		if (validatePackageGroup(parsedPackageGroup)) {
			const { packages, registryUrl, authTokenEnvName } = parsedPackageGroup
			const scopes = packages
				.filter(el => el.startsWith('@'))
				.map(el => el.split('/')[0])

			const cwd = `node_modules/.cache/zero/pack-packages/package-group-${index}`

			writeNpmrc({
				outputPath: cwd,
				registryUrl,
				scopes,
				authTokenEnvName,
			})
				.then(() => npmPack({ cwd, packages }))
				.then(() => cleanup(cwd))
		} else {
			console.error(
				`[${
					packagejson.name
				}] Failed to parse packageGroup[${index}], has unsupported type of ${typeof packageGroup}`,
			)
		}
	})
}

packPackages({
	packageGroups: [
		'[@zero-company/zero-id],https://registry.npmjs.org,ZERO_READONLY_GITHUB_TOKEN_V1',
		{
			packages: ['@zero-company/zero-ui', 'tsup'],
			registryUrl: 'https://npm.pkg.github.com',
			authTokenEnvName: 'ZERO_READONLY_GITHUB_TOKEN_V1',
		},
	],
})
