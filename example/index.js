/* alanode example/ */
import nodejs from '../src'

(async () => {
  const res = await nodejs({
    text: 'example',
  })
  console.log(res)
})()