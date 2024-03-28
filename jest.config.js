import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	roots: ['<rootDir>/src'],
	testEnvironment: 'node',
	preset: 'ts-jest'
};

export default config;
