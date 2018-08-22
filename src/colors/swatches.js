import colors from './colors'
import { swatches_a } from './swatches_a.json'
import { swatches_b } from './swatches_b.json'
import { swatches_c } from './swatches_c.json'
import { swatches_d } from './swatches_d.json'
import { swatches_e } from './swatches_e.json'
import { swatches_f } from './swatches_f.json'

const swatchLists = [
  swatches_a,
  swatches_b,
  swatches_c,
  swatches_d,
  swatches_e,
  swatches_f
]

let list = []
swatchLists.forEach((e) => {
  const listObject = {
    "swatches": colors(e),
  }
  list.push(listObject)
})

const swatchArray = list 

export {
  swatchArray
}