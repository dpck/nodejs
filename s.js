import readDirStructure from '@wrote/read-dir-structure'

(async () => {
  const { content } = await readDirStructure('builtin-modules/v8')
  Object.keys(content).forEach((k) => {
    k = k.replace('.js', '')
    const c = ['string_decoder', 'sys', 'inspector'].includes(k) ? '// ' : ''
    console.log('%simport * as %s from \'%s\'', c, k, k)
  })
})()