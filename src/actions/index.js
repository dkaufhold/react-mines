export const CLICK_FIELD = 'CLICK_FIELD'
export const clickField = (x, y) => {
  return {
    type: CLICK_FIELD,
    x: x,
    y: y
  }
}

export const GAME_WON = 'GAME_WON'
export const gameWon = () => {
  return { type: GAME_WON }
}

export const GAME_OVER = 'GAME_OVER'
export const gameOver = () => {
  return { type: GAME_OVER }
}
