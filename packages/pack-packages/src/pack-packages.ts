import packagejson from './../package.json'
import { writeNpmrc } from './write-npmrc'
import {
	PackageGroupType,
	parsePackageGroup,
	isValidParsedPackageGroup,
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

		if (isValidParsedPackageGroup(parsedPackageGroup)) {
			console.log('success', parsedPackageGroup)
		} else {
			console.error(
				`[${
					packagejson.name
				}] Failed to parse packageGroup[${index}], has unsupported type of ${typeof packageGroup}`,
			)
		}
	})

	return writeNpmrc({
		outputPath: '.zero/pack-packages/gitignore',
		registryUrl: 'https://npm.pkg.github.com',
		scope: '@zero-company',
		authTokenEnvName: 'ZERO_READONLY_GITHUB_TOKEN_V1',
	})
}

packPackages({
	packageGroups: [
		'[@zero-company/zero-assets],https://npm.pkg.github.com,ZERO_READONLY_GITHUB_TOKEN_V1',
		{
			packages: ['@zero-company/zero-ui'],
			registry: 'https://npm.pkg.github.com',
			authTokenEnvName: 'ZERO_READONLY_GITHUB_TOKEN_V1',
		},
	],
})
