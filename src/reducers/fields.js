import * as actions from '../actions'

export const colCount = 10
export const rowCount = 5
export const mines = 10

export const emptyTile = '\xa0'  // nbsp
export const mineTile = '*'


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


const getMineCount = (tiles, tile) => {

  var tx, ty
  var count = 0

  for (var x = -1; x <= 1; x++) {
    for (var y = -1; y <= 1; y++) {
      tx = tile.x + x
      ty = tile.y + y
      // if within field bounds
      if (tx >= 0 && ty >= 0 && tx < colCount && ty < rowCount) {
        // and if it's a mine, increase count
        if (tiles[tx][ty].content === mineTile) count++
      }
    }
  }

  if (count > 0) {
    return count.toString()
  } else {
    return emptyTile
  }

}


const placeNumbers = (tiles) => {

  var tile

  for (var x = 0; x < colCount; x++) {
    for (var y = 0; y < rowCount; y++) {
      tile = tiles[x][y]
      if (tile.content !== mineTile) {
        tile.content = getMineCount(tiles, tile)
      }
    }
  }

}



const initialTiles = (() => {

  var tiles = []
  for (var x = 0; x < colCount; x++) {
    var colTiles = []
    for (var y = 0; y < rowCount; y++) {
      colTiles.push({
        content: emptyTile, x: x, y: y, clicked: false
      })
    }
    tiles.push(colTiles)
  }
  placeMines(tiles)
  placeNumbers(tiles)

  return {tiles: tiles}

})()


const initialState = {
  ...initialTiles,
  gameOver: false
}


const fields = (state = initialState, action) => {
  switch (action.type) {
    case actions.GAME_OVER:
      return {
        ...state,
        gameOver: true
      }
    case actions.CLICK_FIELD:
      var newTiles = []
      state.tiles.map((col) => {
        var newCol = []
        col.map((tile) => {
          if (tile.x === action.x && tile.y === action.y) {
            tile.clicked = true
          }
          newCol.push(tile)
          return newCol
        })
        newTiles.push(newCol)
        return newTiles
      })

      return {
        ...state,
        tiles: newTiles
      }
    default:
      return state
  }
}


export default fields
