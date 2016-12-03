import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from "redux"
import mineApp from './reducers'
import App from './App'

// let store = createStore(mineApp)
const store = createStore(mineApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)