/* eslint-disable quotes */
/* eslint-disable no-undef */
module.exports = {
	env: {
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'double'],
	},
};
