/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
	// All imported modules in your tests should be mocked automatically
	automock: false,

	// Automatically clear mock calls, instances and results before every test
	clearMocks: true,

	// The test environment that will be used for testing
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'babel-jest',
	},
	moduleNameMapper: {
		// Add mappings for module imports
		'@tanstack/react-query-devtools':
			'<rootDir>/src/__mocks__/react-query-devtools.tsx',
		'\\.(css)$': '<rootDir>/src/__mocks__/mock-css.ts',
		'\\.(svg)$': '<rootDir>/src/__mocks__/mock-svg.ts',
	},
};

export default config;
