import packagejson from './../package.json'
import { writeNpmrc } from './write-npmrc'
import {
	PackageGroupType,
	parsePackageGroup,
	validatePackageGroup,
} from './package-group'

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

			writeNpmrc({
				outputPath: '.zero/pack-packages/gitignore',
				registryUrl,
				scopes,
				authTokenEnvName,
			}).then(() => console.log('success', parsedPackageGroup))
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
		'[@zero-company/zero-assets, tsup],https://npm.pkg.github.com,ZERO_READONLY_GITHUB_TOKEN_V1',
		{
			packages: ['@zero-company/zero-ui', '@zero-next', 'tsup'],
			registryUrl: 'https://npm.pkg.github.com',
			authTokenEnvName: 'ZERO_READONLY_GITHUB_TOKEN_V1',
		},
	],
})
