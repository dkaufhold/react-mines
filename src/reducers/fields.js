import * as actions from '../actions'

const initialState = (function() {
  const colCount = 10
  const rowCount = 5
  var tiles = []
  for (var x = 0; x < colCount; x++) {
    var colTiles = []
    for (var y = 0; y < rowCount; y++) {
      colTiles.push({
        content: 'x', x: x, y: y
      })
    }
    tiles.push(colTiles)
  }
  return {tiles: tiles}
})()


const fields = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLICK_FIELD:
      return {
        ...state,
        clicked: [action.x, action.y]
      }
    default:
      return state
  }
}
//
// const fields = (state = initialState, action) => {
//   switch (action.type) {
//     case actions.CLICK_FIELD:
//       return [
//         ...state,
//         field(undefined, action)
//       ]
//     default:
//       return state
//   }
// }

export default fields
