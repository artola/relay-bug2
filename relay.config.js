'use strict';

module.exports = {
  schema: 'schema.server.graphql',
  src: 'src',
  extensions: ['js'],
  include: ['**/*'],
  exclude: [],
  verbose: true,
  watchman: true,
  watch: false,
  validate: false,
  quiet: false,
  persistOutput: undefined,
  noFutureProofEnums: true,
//   language: 'typescript',
  artifactDirectory: 'src/__generated__',
  customScalars: {},
};
