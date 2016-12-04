import { connect } from 'react-redux'
import React, { PropTypes } from "react"


const gameOverStyles = {
  base: {
    textAlign: 'center'
  }
}


class BaseGameOver extends React.Component {

  render() {
    let { gameOver } = this.props
    return (
      <div>
        {gameOver &&
          <p style={gameOverStyles.base}>
            BOOM! GOT REKT! <br/>
            <span style={{fontSize: 10}}>Refresh page for new game!</span>
          </p>

        }
      </div>
    )
  }
}


const GameOver = connect(
  (state) => {
    return {
      gameOver: state.fields.gameOver
    }
  }
)(BaseGameOver)


export default GameOver
