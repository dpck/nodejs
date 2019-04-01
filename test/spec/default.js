import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import nodejs from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof nodejs, 'function')
  },
  async 'calls package without error'() {
    await nodejs()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await nodejs({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T