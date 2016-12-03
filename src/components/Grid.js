import React, { PropTypes } from "react"
import GridRow from './GridRow'

const gridStyle = {
  padding: 10,
  display: 'inline-block',
  backgroundColor: 'lightgray'
}

class Grid extends React.Component {

  static propTypes = {
    tiles: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired).isRequired
    ).isRequired,
    onTileClick: PropTypes.func.isRequired
  }

  render () {
    let { tiles, onTileClick } = this.props
    return (
      <div style={gridStyle}>
        {tiles.map(col =>
          <GridRow key={'col' + col[0].x} tiles={col} onTileClick={onTileClick} />
        )}
      </div>
    )
  }
}


export default Grid
