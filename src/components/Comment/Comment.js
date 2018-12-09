import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import './Comment.css';

class Comment extends Component {
  state = {
    comment: 0
  }

  handleNext = (event) => {
    this.props.dispatch({type: 'ADD_COMMENT', payload: this.state.comment});
    this.props.history.push('/review');
  }

  handleStarClick = (value) => {
    this.setState({ comment: value });
  }

  render() {
    return (
      <div>
        <Steps step={"4"} />
        <h2>Any comments you want to leave?</h2>
        <textarea onChange={this.handleStarClick} placeholder="Enter your comment here..." />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default Comment;