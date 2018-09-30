import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

import App from 'components/App'

const RenderApp = (
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>
)

ReactDOM.render(RenderApp, document.querySelector('#root'))
