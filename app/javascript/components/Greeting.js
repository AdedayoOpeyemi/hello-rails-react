import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

const getGreetings = () => {
  console.log('getGreeting() Action')
  return {
    type: GET_GREETINGS_REQUEST
  }
}



class Greeting extends React.Component {
  render () {
    const { greetings } = this.props;
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
