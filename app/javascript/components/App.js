import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from './Greeting'
class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={ <p>Home Page!!</p> } />
          <Route exact path="/greeting" element={ <Greeting message="How do you do"/> } />
        </Routes>
      </Router>
    );
  }
}

export default App
