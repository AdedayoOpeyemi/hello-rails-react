import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const getGreetings = () => {
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`api/v1/greetings`)
    .then(response => response.json())
    .then(json => dispatch(getGreetingsSuccess(json)))
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
    const { message } = this.props;
    return (
      <React.Fragment>
        Message: {this.props.hint}

        <button className="getGreetingBtn" onClick={() => this.props.getGreetings()}>Say Greeting</button>
        <br />
        <p>{ message }</p>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  message: state => state.message,
});

const mapDispatchToProps = { getGreetings };

Greeting.propTypes = {
  message: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
