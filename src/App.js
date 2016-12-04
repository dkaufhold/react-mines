import React from "react"

import Grid from "./components/Grid"
import GameState from "./components/GameState"

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
        <GameState />
      </div>
    )
  }
}

export default App;
