import React, { PropTypes } from "react"
import GridRow from './GridRow'

const gridStyle = {
  padding: 10,
  display: 'inline-block',
  backgroundColor: 'lightgray'
}

const Grid = ({ tiles, onTileClick }) => (
  <div style={gridStyle}>
    {tiles.map(col =>
      <GridRow key={'col' + col[0].x} tiles={col} onTileClick={onTileClick} />
    )}
  </div>
)


Grid.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired).isRequired
  ).isRequired,
  onTileClick: PropTypes.func.isRequired
}


export default Grid
