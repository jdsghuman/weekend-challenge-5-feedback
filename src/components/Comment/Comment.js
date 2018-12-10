import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import { connect } from 'react-redux';
import './Comment.css';

class Comment extends Component {
  state = {
    comment: ''
  }

  getInitialRating = () => {
    // Keep comment entered by user
    return this.state.comment === '' ? this.props.comment : this.state.feeling;
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleNext = (event) => {
    let data;
    // Check if state is 0
    if(this.state.comment === '') {
      // if 0, use redux store saved rating
      data = this.props.comment;
    } else {
      // Use updated rating
      data = this.state.comment;
    }
    this.props.dispatch({type: 'ADD_COMMENT', payload: data});
    this.props.history.push('/review');
  }

  render() {
    return (
      <div>
        <Steps step={"4"} />
        <h2>Any comments you want to leave?</h2>
        {/* Enter comment */}
        <textarea 
          onChange={this.handleChange} 
          placeholder="Enter your comment here..."
          value={this.getInitialRating()} />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    comment: store.comment
  }
}

export default connect(mapStateToProps)(Comment);