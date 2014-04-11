module.exports = {
  build: [
    'clean',
    'transpile:amd',
    'transpile:commonjs',
    'concat:amd',
    'uglify'
  ],
  'lint-test': [
    'jshint:test',
    'jscs:test',
    'lintspaces:test'
  ],
  default: [
    'build'
  ],
  doc: [
    'groc'
  ]
};
