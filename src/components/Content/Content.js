import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';

class Content extends Component {
  state = {
    value: 0
  }

  handleNext = (event) => {
    this.props.dispatch({type: 'ADD_CONTENT', payload: this.state.value});
    this.props.history.push('/3');
  }

  handleStarClick = (value) => {
    this.setState({ value: value });
  }

  render() {
    return (
      <div>
        <Steps step={"2"} />
        <h2>How well are you understanding the content?</h2>
        <Rating
          initialRating={this.state.value}
          onClick={this.handleStarClick}
          emptySymbol={<StarBorder />}
          fullSymbol={<Star />}
        />
        <button onClick={this.handleNext}>Next</button>
        {JSON.stringify(this.state.value)}
      </div>
    );
  }
}

export default connect()(Content);