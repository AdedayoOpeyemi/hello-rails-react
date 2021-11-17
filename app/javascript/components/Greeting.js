import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const getGreetings = () => {
  console.log('getGreeting() Action')
  return dispatch => {
    // dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`http://localhost:3000/api/v1/greetings`)
    .then(response => console.log(response))
    // .then(response => response.json())
    // .then(json => dispatch(getGreetingsSuccess(json)))
    .catch(error => console.log(error));
  } 
}

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  }
}



class Greeting extends React.Component {
  render () {
    const { greetings } = this.props;
    console.log(greetings);
    const greetingsList = greetings.map((greeting) => {
      return <li>{greeting.message}</li>
    })
  
    return (
      <React.Fragment>
        Message: {this.props.message}

        <button className="getGreetingBtn" onClick={() => this.props.getGreetings()}>Say Greeting</button>
        <br />
        <ul>{ greetingsList }</ul>
        {/* <p>{ greetings.message }</p> */}
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

// Greeting.propTypes = {
//   message: PropTypes.string
// };
// export default Greeting

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
