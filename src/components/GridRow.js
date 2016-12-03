import React, { PropTypes } from "react"
import Tile from './Tile'


const GridRow = ({ tiles, onTileClick }) => (
  <div style={{display: 'inline-block'}}>
    {tiles.map(tile =>
      <Tile key={'' + tile.x + tile.y} onClick={onTileClick} {...tile} />
    )}
  </div>
)

GridRow.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired).isRequired,
  onTileClick: PropTypes.func.isRequired
}

export default GridRow
