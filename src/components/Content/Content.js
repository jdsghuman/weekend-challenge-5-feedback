import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';

class Content extends Component {
  state = {
    content: 0
  }

  handleNext = (event) => {
    this.props.dispatch({type: 'ADD_CONTENT', payload: this.state.content});
    this.props.history.push('/3');
  }

  handleStarClick = (value) => {
    this.setState({ content: value });
  }

  render() {
    return (
      <div>
        <Steps step={"2"} />
        <h2>How well are you understanding the content?</h2>
        {/* Star rating */}
        <Rating
          initialRating={this.state.content}
          onClick={this.handleStarClick}
          emptySymbol={<StarBorder />}
          fullSymbol={<Star />}
        />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default connect()(Content);