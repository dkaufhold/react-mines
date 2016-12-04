import React from "react"

import Grid from "./components/Grid"
import GameOver from "./components/GameOver"

const appStyles = {
  base: {
    width: 260,
    height: 260,
    background: 'lightgray'
  },
  headline: {
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 10
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={appStyles.base}>
        <h1 style={appStyles.headline}>React Mines</h1>
        <Grid />
        <GameOver />
      </div>
    )
  }
}

export default App;
