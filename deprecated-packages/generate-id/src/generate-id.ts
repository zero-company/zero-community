/**
 * generate random hexadecimal id
 * @param opts.hexLength - limit length of each hex (default: 6)
 * @param opts.hexNum - specify number of hexes (default: 6)
 * @param opts.prefix - add prefix
 * @param opts.suffix - add suffix
 * @param opts.divider - change divider (default: '-')
 * @returns res.hexes - return hexes array
 * @returns res.joined - return joined string
 * @example generateHexV1({ prefix: 'uid', hexNum: 4 })
 * ```
 * {
 *  hexes: [ "d596", "9fa3", "a415", "50ea" ],
 *  joined: "prefix-d596-9fa3-a415-50ea-suffix"
 * }
 * ```
 */
export const generateId = ({
	prefix = '',
	suffix = '',
	divider = '-',
	hexLength = 6,
	hexNum = 6,
} = {}) => {
	const hexes = [...Array(hexNum)].map(() =>
		[...Array(hexLength)]
			.map(() => Math.floor(Math.random() * 16).toString(16))
			.join(''),
	)
	const joined = [prefix, ...hexes, suffix]
		.filter(e => Boolean(e)) // Filters out falsy values [false, null, undefined, 0, ""]
		.join(divider)
	return { hexes, joined }
}
