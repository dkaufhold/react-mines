import { connect } from 'react-redux'
import React, { PropTypes } from "react"

import { clickField } from '../actions'
import GridRow from './GridRow'

const gridStyle = {
  padding: 10,
  display: 'inline-block',
  backgroundColor: 'lightgray'
}

class BaseGrid extends React.Component {

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


const mapStateToProps = (state) => {
  return {
    tiles: state.fields.tiles
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onTileClick: (x, y) => {
      dispatch(clickField(x, y))
    }
  }
}


const Grid = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseGrid)


export default Grid
