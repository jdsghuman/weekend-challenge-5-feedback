import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import { connect } from 'react-redux';
import './Comment.css';

class Comment extends Component {
  state = {
    comment: ''
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleNext = (event) => {
    this.props.dispatch({type: 'ADD_COMMENT', payload: this.state.comment});
    this.props.history.push('/review');
  }

  render() {
    return (
      <div>
        <Steps step={"4"} />
        <h2>Any comments you want to leave?</h2>
        {/* Enter comment */}
        <textarea onChange={this.handleChange} placeholder="Enter your comment here..." />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Comment);