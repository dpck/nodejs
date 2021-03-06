export default tls
export const {
  CLIENT_RENEG_LIMIT,
  CLIENT_RENEG_WINDOW,
  DEFAULT_CIPHERS,
  DEFAULT_ECDH_CURVE,
  SLAB_BUFFER_SIZE,
  SecureContext,
  Server,
  TLSSocket,
  checkServerIdentity,
  connect,
  convertALPNProtocols,
  convertNPNProtocols,
  createSecureContext,
  createSecurePair,
  createServer,
  getCiphers,
  parseCertString,
} = tls