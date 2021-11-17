import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../configureStore'
const store = configureStore();

import Greeting from './Greeting'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={ <p>Home Page!!</p> } />
            <Route exact path="/greeting" element={ <Greeting hint="How do you do"/> } />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App
