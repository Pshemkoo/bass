module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'^@/api-repository(.*)$': '<rootDir>/api-repository$1',
		'^@/components(.*)$': '<rootDir>/components$1',
		'^@/constants(.*)$': '<rootDir>/constants$1',
		'^@/plugins(.*)$': '<rootDir>/plugins$1',
		'^@/services(.*)$': '<rootDir>/services$1',
		'^@/styles(.*)$': '<rootDir>/styles$1',
		'^@/utils(.*)$': '<rootDir>/utils$1',
		'^@/providers(.*)$': '<rootDir>/providers$1',
		'^@/hooks(.*)$': '<rootDir>/hooks$1',
	},
};
