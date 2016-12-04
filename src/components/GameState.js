import { connect } from 'react-redux'
import React, { PropTypes } from "react"

import { mines } from '../reducers/fields'
import { gameWon } from '../actions'


const gameStateStyles = {
  base: {
    textAlign: 'center'
  }
}


class BaseGameState extends React.Component {

  static propTypes = {
    gameOver: PropTypes.bool.isRequired,
    gameWon: PropTypes.bool.isRequired,
    tilesUncovered: PropTypes.number.isRequired,
    tilesCount: PropTypes.number.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tilesUncovered + mines === nextProps.tilesCount) {
      console.log(nextProps.tilesUncovered, mines, nextProps.tilesCount)
      this.props.dispatch(gameWon())
    }
  }

  render() {
    let { gameOver, gameWon } = this.props
    return (
      <div>
        {gameOver &&
          <p style={gameStateStyles.base}>
            BOOM! GOT REKT! <br/>
            <span style={{fontSize: 10}}>Refresh page for new game!</span>
          </p>
        }
        {gameWon &&
        <p style={gameStateStyles.base}>
          Good Job! You found all mines! <br/>
          <span style={{fontSize: 10}}>Refresh page for new game!</span>
        </p>
        }
      </div>
    )
  }
}


const GameState = connect(
  (state) => {
    return {
      gameOver: state.fields.gameOver,
      gameWon: state.fields.gameWon,
      tilesUncovered: state.fields.tilesUncovered,
      tilesCount: state.fields.tilesCount
    }
  }
)(BaseGameState)


export default GameState
