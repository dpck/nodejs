/**
 * This script will generate the core built-in modules exports needed to proxy interns.
 */
import { builtinModules } from 'module'
import { write, ensurePath } from '@wrote/wrote'
import { join } from 'path'
import ignored from './ignore'

const [VER] = process.version.split('.', 1)
const DEST = `builtin-modules/${VER}`

const notPrivate = a => !a.startsWith('_')
const ignore = [
  'v8/',
  'node-inspect/',
]

;(async () => {
  const m = builtinModules.filter(notPrivate)
    .filter(a => !ignore.some(i => a.startsWith(i))).sort()

  await m.reduce(async (acc, name) => {
    await acc
    const mod = require(name)
    const ignoredAPI = ignored[name] || []
    const keys = Object.keys(mod)
      .filter(notPrivate)
      .filter(m => {
        if (ignoredAPI.includes(m)) return false
        return true
      })
      .sort()
    const data = temp(name, keys)
    // const data = `// Generated with Node ${process.version}. \n${t}`
    const main = join(DEST, `${name}.js`)
    // const packageJson = join(DEST, `${name}/package.json`)
    // const pac = {
    //   name,
    //   module: 'index.js',
    // }
    await ensurePath(main)
    await write(main, data)
    // await write(packageJson, JSON.stringify(pac, null, 2))
  }, {})
})()

const temp = (mod, keys) => {
  const st = [`module`, 'console', 'process']
  const m = st.includes(mod) ? `_${mod}` : mod
  return `
export default ${m}
export const {
  ${keys
    .join(',\n  ')},
} = ${m}`.trim()
}
