const { coverageDirectory: deleted, ...common } = require('../jest.config');

module.exports = {
  ...common,
  rootDir: "..",
  testRegex: "test/.*\\.e2e-spec\\.ts$",
};
