import { connect } from 'react-redux'
import React, { PropTypes } from "react"

import { clickField, gameOver } from '../actions'
import { mineTile } from '../reducers/fields'


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


class BaseTile extends React.Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    clicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  handleClick (x, y) {
    if (!this.props.gameOver) {
      this.props.dispatch(clickField(x, y))
    }
    console.log(this.props.content, mineTile)
    if (this.props.content === mineTile) {
      this.props.dispatch(gameOver())
    }
  }

  render() {
    let { content, x, y, clicked } = this.props
    return (
      <div
        onClick={() => this.handleClick(x, y)}
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
  }
}


const Tile = connect(
  (state) => {
    return {
      tiles: state.fields.tiles,
      gameOver: state.fields.gameOver,
    }
  }
)(BaseTile)


export default Tile
