const { jsWithTs: tsjPreset } = require('ts-jest/presets');

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/examples/'],
  transform: {
    ...tsjPreset.transform,
  },
  setupFiles: [
    '<rootDir>/src/Modules/Verto/tests/setup/browsers.ts',
    '<rootDir>/src/Modules/Verto/tests/setup/connection.ts',
    '<rootDir>/src/Modules/Verto/tests/setup/webrtcMocks.ts',
  ],
};
