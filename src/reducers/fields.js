import * as actions from '../actions'

const colCount = 10
const rowCount = 5
const mines = 10

const emptyTile = '\xa0'  // nbsp
const mineTile = '*'

const placeMines = (tiles) => {

  var x, y

  for (var i = 0; i < mines; i++) {
    x = Math.floor(Math.random() * colCount)
    y = Math.floor(Math.random() * rowCount)

    while (tiles[x][y].content === mineTile) {
      x = Math.floor(Math.random() * colCount)
      y = Math.floor(Math.random() * rowCount)
    }
    tiles[x][y].content = mineTile
  }

}

const initialState = (() => {

  var tiles = []
  for (var x = 0; x < colCount; x++) {
    var colTiles = []
    for (var y = 0; y < rowCount; y++) {
      colTiles.push({
        content: emptyTile, x: x, y: y
      })
    }
    tiles.push(colTiles)
  }
  placeMines(tiles)
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
