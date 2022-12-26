export const toPascal = (str: string) =>
	str
		.split(/(?:-|@|\/)+/)
		.filter(Boolean)
		.map(a => a.charAt(0).toUpperCase() + a.substring(1))
		.join('')
