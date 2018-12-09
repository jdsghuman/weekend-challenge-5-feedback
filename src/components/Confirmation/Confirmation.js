import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Confirmation extends Component {
  handleClick = () => {
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div>
        <h2>Thank you!</h2>
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default withRouter(Confirmation);