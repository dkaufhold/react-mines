import React, { PropTypes } from "react"

const tileStyles = {
  width: 20,
  height: 20,
  borderRight: '2px solid gray',
  borderBottom: '2px solid gray',
  borderLeft: '2px solid white',
  borderTop: '2px solid white',
  textAlign: 'center'
}

const Tile = ({ content, x, y, onClick }) => (
  <div onClick={() => onClick(x, y)} style={tileStyles}>
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
