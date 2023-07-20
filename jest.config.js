/** @returns {Promise<import('jest').Config>} */
module.exports = async () => ({
  verbose: true,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
});
