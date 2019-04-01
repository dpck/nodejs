const { relative, join, dirname } = require('path');

const [VER] = process.version.split('.', 1)

/**
 * Resolves the path to `@depack/nodejs` using require and returns the path to the directory which contains the mocks (with the `process.version` by default -- but only v8 is currently supported).
 * @param {string} version The version, such as `v8`. Defaults to the current NodeJS version.
 */
const getCorePath = (version = VER) => {
  const corePath = relative('', join(dirname(require.resolve('@depack/nodejs/package.json')), 'builtin-modules', version))
  return corePath
}

module.exports=getCorePath