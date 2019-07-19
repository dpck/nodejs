export default {
  os: ['getNetworkInterfaces', 'tmpDir'],
  fs: ['F_OK', 'FileReadStream', 'FileWriteStream', 'R_OK', 'W_OK', 'X_OK'],
  // missing in externs
  assert: ['strict', 'rejects', 'doesNotReject'],
  zlib: ['codes', 'Z_MIN_WINDOWBITS', 'Z_MIN_MEMLEVEL', 'Z_MIN_LEVEL',
    'Z_MIN_CHUNK', 'Z_MAX_WINDOWBITS', 'Z_MAX_MEMLEVEL', 'Z_MAX_LEVEL',
    'Z_MAX_CHUNK', 'Z_DEFAULT_WINDOWBITS', 'Z_DEFAULT_MEMLEVEL',
    'Z_DEFAULT_LEVEL', 'Z_DEFAULT_CHUNK', 'ZLIB_VERNUM', 'UNZIP',
    'INFLATERAW', 'INFLATE', 'GZIP', 'GUNZIP', 'DEFLATERAW', 'DEFLATE'],
  vm: ['createScript'],
  // missing in externs
  v8: ['serialize', 'deserialize', 'cachedDataVersionTag', 'Serializer',
    'Deserializer', 'DefaultSerializer', 'DefaultDeserializer'],
  // missing in externs
  cluster: ['domain', 'SCHED_NONE', 'SCHED_RR', 'schedulingPolicy'],
  module: ['wrapper', 'globalPaths'],
  stream: ['super_'],
  // missing in externs
  crypto: ['Cipheriv', 'Decipheriv', 'DiffieHellmanGroup', 'Sign', 'constants',
    'createDiffieHellmanGroup', 'prng', 'rng', 'setEngine'],
  url: ['resolveObject'],
  events: ['usingDomains', 'listenerCount', 'init', 'defaultMaxListeners'],
}