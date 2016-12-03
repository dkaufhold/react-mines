import React, { PropTypes } from "react"

const tileStyles = {
  base: {
    width: 20,
    height: 20,
    textAlign: 'center',
    borderRight: '2px solid gray',
    borderBottom: '2px solid gray',
    borderLeft: '2px solid white',
    borderTop: '2px solid white'
  },
  clicked: {
    width: 20,
    height: 20,
    textAlign: 'center',
    border: '2px dotted gray',
  }
}

const Tile = ({ content, x, y, clicked, onClick }) => (
  <div
    onClick={() => onClick(x, y)}
    style={(() => {
      if (clicked) {
        return tileStyles.clicked
      }
      return tileStyles.base
    })()}
  >
    {clicked && content}
    {!clicked && '\xa0'}
  </div>
)

Tile.propTypes = {
  content: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tile
