module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	'extends': [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	rules: {
		semi: 1,
		quotes: [1, 'single'],
		"max-len": [1, { "code": 100 }],
		"react/prop-types": 1,
		"no-undef": 0
	}
}
