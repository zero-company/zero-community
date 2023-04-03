import packagejson from './../package.json'
import { PackageGroupType } from './package-group'
import * as fse from 'fs-extra'
import { packPackageGroup } from './pack-package-group'

export type PackPackagesOptions = {
	packageGroups: PackageGroupType[]
	cleanup?: boolean
}

/**
 * 	Pack packages in tgz
 */
export const packPackages = ({
	packageGroups,
	cleanup,
}: PackPackagesOptions) => {
	const cacheDirectory = `node_modules/.cache/zero/pack-packages`
	return fse
		.remove(cacheDirectory)
		.then(() =>
			Promise.all(
				packageGroups.map((packageGroup, index) =>
					packPackageGroup({
						packageGroup,
						index,
						cacheDirectory,
						cleanup,
					}),
				),
			),
		)
		.then(res => {
			console.log(`[${packagejson.name}] Finished packing`)
			return res
		})
}
