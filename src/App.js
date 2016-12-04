import React from "react"

import Grid from "./components/Grid"
import GameState from "./components/GameState"
import { mines } from './reducers/fields'

const appStyles = {
  base: {
    width: 260,
    height: 260,
    background: 'lightgray'
  },
  headline: {
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 10,
    margin: 0
  },
  subheader: {
    fontSize: 12,
    textAlign: 'center',
    margin: 0,
    padding: 0
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={appStyles.base}>
        <h1 style={appStyles.headline}>React Mines</h1>
        <p style={appStyles.subheader}>Find the {mines} hidden mines.</p>
        <Grid />
        <GameState />
      </div>
    )
  }
}

export default App;
