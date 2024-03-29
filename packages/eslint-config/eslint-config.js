module.exports = {
	extends: ['eslint:recommended', 'turbo', 'prettier'],
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
	},
	overrides: [
		{
			files: ['**/__tests__/**/*'],
			env: {
				jest: true,
			},
		},
	],
}
