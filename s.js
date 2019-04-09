import readDirStructure from '@wrote/read-dir-structure'

(async () => {
  const { content } = await readDirStructure('builtin-modules/v8')
  Object.keys(content).forEach((k) => {
    k = k.replace('.js', '')
    console.log('import * as %s from \'%s\'', k, k)
  })
})()