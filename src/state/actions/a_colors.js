import { swatchArray } from './../../colors/swatches'

function setColors (color_data) {
  return {
    type: 'COLOR_ARRAY',
    color_data
  }
}

const colorData = () => {
  return (dispatch) => {
    dispatch(setColors({
      color_list: swatchArray,
      color_state: null
    }))
  }
}

export default colorData