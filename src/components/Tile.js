import React, { PropTypes } from "react"

const tileStyles = {
  width: 20,
  height: 20,
  borderRight: '2px solid gray',
  borderBottom: '2px solid gray',
  borderLeft: '2px solid gray',
  borderTop: '2px solid gray',
  borderRightStyle: 'inset',
  textAlign: 'center',
}

const Tile = ({ content, x, y, onClick }) => (
  <div onClick={onClick} style={tileStyles}>
    {content}
  </div>
)

Tile.propTypes = {
  content: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tile
