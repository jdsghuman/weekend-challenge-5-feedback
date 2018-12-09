import React, { Component } from 'react';
import Steps from '../Steps/Steps';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

class Comment extends Component {
  state = {
    value: 0
  }

  handleClick = (value) => {
    this.setState({ value: value });
  }

  render() {
    return (
      <div>
        <Steps step={"4"} />
        <h2>Any comments you want to leave?</h2>
        <Rating
          initialRating={this.state.value}
          onClick={this.handleClick}
          emptySymbol={<StarBorder />}
          fullSymbol={<Star />}
        />
        <button>Next</button>
      </div>
    );
  }
}

export default Comment;